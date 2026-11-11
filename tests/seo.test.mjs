// Search: structured data, titles, descriptions and sitemap dates (lib/seo.ts).
// Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import {
  PAGE_UPDATED,
  SITE_URL,
  SPECIES_PAGES_UPDATED,
  breadcrumbList,
  fitDescription,
  later,
  postLastModified,
  sitemapEntries,
  speciesJsonLd,
  speciesTitle,
  utcDate,
} from "../lib/seo.ts";
import { BLOG_POSTS } from "../content/blog/posts.ts";
import { NATURE_REFERENCE, SITE_GUIDES } from "../lib/site-guides.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const CATEGORIES = ["birds", "insects", "plants", "mammals"];
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function loadSpecies() {
  return CATEGORIES.flatMap((category) =>
    JSON.parse(readFileSync(join(ROOT, "content/species", `${category}.json`), "utf8")).map((s) => ({
      ...s,
      id: s.id ?? slugify(s.commonName),
      category,
    }))
  );
}

function walk(dir, re) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const out = [];
  for (const name of readdirSync(abs)) {
    const rel = join(dir, name);
    if (statSync(join(ROOT, rel)).isDirectory()) out.push(...walk(rel, re));
    else if (re.test(name)) out.push(rel);
  }
  return out;
}

const sitemapInput = () => ({
  species: loadSpecies().map((s) => ({
    category: s.category,
    slug: s.id,
    factsChecked: s.factsChecked,
    hasSources: (s.sources?.length ?? 0) > 0,
  })),
  posts: BLOG_POSTS,
  guides: [...SITE_GUIDES, ...NATURE_REFERENCE],
});

test("breadcrumbList: absolute URLs, positions from 1, last crumb is the page", () => {
  const b = breadcrumbList([{ name: "Home", path: "/" }, { name: "Nature", path: "/nature" }, { name: "Formby Point" }], "/nature/formby-point");
  assert.equal(b["@type"], "BreadcrumbList");
  assert.deepEqual(
    b.itemListElement.map((i) => [i.position, i.name, i.item]),
    [
      [1, "Home", SITE_URL],
      [2, "Nature", `${SITE_URL}/nature`],
      [3, "Formby Point", `${SITE_URL}/nature/formby-point`],
    ]
  );
});

test("fitDescription keeps whole sentences up to 160 characters, or the text unchanged", () => {
  const long = "First sentence of the summary runs to a fair length, telling you what the page covers and where. Second sentence is here too. Third one pushes it over the limit by a margin.";
  const fitted = fitDescription(long);
  assert.ok(fitted.length <= 160 && fitted.length >= 120, fitted);
  assert.ok(long.startsWith(fitted) && fitted.endsWith("."), "cut at a sentence end");
  const unsplittable = `${"A single very long sentence ".repeat(8)}ends here.`;
  assert.equal(fitDescription(unsplittable), unsplittable, "never cut mid-sentence");
  assert.equal(fitDescription("Short."), "Short.");
  for (const post of BLOG_POSTS) {
    const d = fitDescription(post.metaDescription);
    assert.ok(post.metaDescription.startsWith(d), `${post.slug}: description is the summary's opening`);
  }
});

test("utcDate reads both date forms the site uses, at midnight UTC", () => {
  assert.equal(utcDate("2026-11-11")?.toISOString(), "2026-11-11T00:00:00.000Z");
  assert.equal(utcDate("11 November 2026")?.toISOString(), "2026-11-11T00:00:00.000Z");
  assert.equal(utcDate("5 June 2026")?.toISOString(), "2026-06-05T00:00:00.000Z");
  assert.equal(utcDate("November 2026"), null);
  assert.equal(utcDate(undefined), null);
  assert.equal(later(null, utcDate("2026-01-02"), utcDate("2026-03-04"))?.toISOString().slice(0, 10), "2026-03-04");
});

test("species titles: short location when there is one, else 'on the Sefton Coast'; all unique", () => {
  const species = loadSpecies();
  const titles = species.map(speciesTitle);
  assert.equal(new Set(titles).size, titles.length, "duplicate species title");
  for (const t of titles) assert.doesNotMatch(t, /at the Sefton Coast/, t);
  const noctule = species.find((s) => s.id === "noctule-bat");
  assert.equal(speciesTitle(noctule), "Noctule Bat on the Sefton Coast");
  for (const f of CATEGORIES) {
    const src = readFileSync(join(ROOT, "app", f, "[slug]", "page.tsx"), "utf8");
    assert.match(src, /const title = speciesTitle\(species\);/, `app/${f}/[slug]/page.tsx uses speciesTitle`);
  }
});

// Properties schema.org allows on each type used on species pages (Thing and CreativeWork ones included).
const ALLOWED = {
  BreadcrumbList: ["@type", "@id", "itemListElement"],
  ListItem: ["@type", "position", "name", "item"],
  WebPage: ["@type", "@id", "url", "name", "description", "inLanguage", "isPartOf", "breadcrumb", "about", "primaryImageOfPage", "lastReviewed"],
  WebSite: ["@type", "name", "url"],
  ImageObject: ["@type", "url"],
  Taxon: ["@type", "@id", "name", "alternateName", "taxonRank", "parentTaxon", "sameAs"],
  FAQPage: ["@type", "@id", "mainEntity"],
  Question: ["@type", "name", "acceptedAnswer"],
  Answer: ["@type", "text"],
};

test("species structured data: known types and properties only, and what the page shows", () => {
  for (const s of loadSpecies()) {
    const ld = JSON.parse(JSON.stringify(speciesJsonLd(s, s.category, s.id)));
    const pageUrl = `${SITE_URL}/${s.category}/${s.id}`;
    const check = (node, where) => {
      if (Array.isArray(node)) return node.forEach((n) => check(n, where));
      if (!node || typeof node !== "object") return;
      if (node["@type"]) {
        const allowed = ALLOWED[node["@type"]];
        assert.ok(allowed, `${where}: unexpected type ${node["@type"]}`);
        for (const k of Object.keys(node)) assert.ok(allowed.includes(k), `${where}: ${node["@type"]}.${k} is not a property of the type`);
      }
      for (const [k, v] of Object.entries(node)) if (k !== "@type") check(v, where);
    };
    check(ld["@graph"], pageUrl);

    const byType = Object.fromEntries(ld["@graph"].map((n) => [n["@type"], n]));
    const crumbs = byType.BreadcrumbList.itemListElement;
    assert.equal(crumbs.at(-1).item, pageUrl);
    assert.equal(crumbs.at(-1).name, s.commonName);
    assert.equal(byType.WebPage.url, pageUrl);
    assert.equal(byType.WebPage.name, speciesTitle(s));
    assert.equal(byType.Taxon.name, s.scientificName);
    assert.equal(byType.Taxon.alternateName, s.commonName);
    // lastReviewed only where the page prints "checked on <date>" (species with sources).
    if (s.sources?.length && s.factsChecked) assert.equal(byType.WebPage.lastReviewed, utcDate(s.factsChecked).toISOString().slice(0, 10));
    else assert.equal(byType.WebPage.lastReviewed, undefined);
    assert.equal(Boolean(byType.FAQPage), Boolean(s.faq?.length), `${pageUrl}: FAQPage only with a printed FAQ`);
    assert.doesNotMatch(JSON.stringify(ld), /—/, `${pageUrl}: em dash in structured data`);
  }
});

test("posts: dateModified is YYYY-MM-DD, after the date shown, and feeds the sitemap", () => {
  for (const post of BLOG_POSTS) {
    assert.match(post.date, /^\d{4}-\d{2}-\d{2}$/, `${post.slug}: date`);
    if (post.dateModified === undefined) continue;
    assert.match(post.dateModified, /^\d{4}-\d{2}-\d{2}$/, `${post.slug}: dateModified`);
    assert.ok(post.dateModified > post.date, `${post.slug}: modified on or before the date shown`);
    assert.equal(postLastModified(post).toISOString().slice(0, 10), post.dateModified);
  }
  const src = readFileSync(join(ROOT, "app/blog/[slug]/page.tsx"), "utf8");
  assert.match(src, /dateModified: post\.dateModified/, "Article JSON-LD carries dateModified");
  assert.match(src, /<BreadcrumbJsonLd/, "posts carry a BreadcrumbList");
});

test("sitemap: every indexable page once, on the canonical host, with real dates only", () => {
  const input = sitemapInput();
  const entries = sitemapEntries(input);
  const urls = entries.map((e) => e.url);
  assert.equal(new Set(urls).size, urls.length, "duplicate sitemap URL");
  for (const u of urls) assert.ok(u === SITE_URL || u.startsWith(`${SITE_URL}/`), u);
  assert.equal(entries.length, 16 + input.guides.length + input.species.length + input.posts.length);
  for (const path of ["/disclosure", "/advertise", "/seasonal/month-by-month", "/nature/designations"]) assert.ok(urls.includes(SITE_URL + path), `${path} missing`);
  for (const path of ["/privacy", "/terms"]) assert.ok(!urls.includes(SITE_URL + path), `${path} is noindex`);
  for (const post of BLOG_POSTS) assert.ok(urls.includes(`${SITE_URL}/blog/${post.slug}`), `${post.slug} missing`);

  // Every lastmod comes from a stored date: a page's own date, a post, a guide's check or a species check.
  const known = new Set([
    ...Object.values(PAGE_UPDATED),
    SPECIES_PAGES_UPDATED,
    ...BLOG_POSTS.flatMap((p) => [p.date, p.dateModified].filter(Boolean)),
    ...input.guides.map((g) => g.checked),
    ...input.species.map((s) => utcDate(s.factsChecked)?.toISOString().slice(0, 10)).filter(Boolean),
  ]);
  for (const e of entries) {
    if (!e.lastModified) continue;
    const day = e.lastModified.toISOString();
    assert.ok(day.endsWith("T00:00:00.000Z"), `${e.url}: lastmod is a day, not a build time`);
    assert.ok(known.has(day.slice(0, 10)), `${e.url}: lastmod ${day.slice(0, 10)} has no source`);
  }
  for (const post of BLOG_POSTS) {
    const e = entries.find((x) => x.url === `${SITE_URL}/blog/${post.slug}`);
    assert.equal(e.lastModified.toISOString().slice(0, 10), post.dateModified ?? post.date, post.slug);
  }
  for (const f of ["app/sitemap.ts", "lib/seo.ts"]) {
    assert.doesNotMatch(readFileSync(join(ROOT, f), "utf8"), /new Date\(\s*\)|Date\.now\(/, `${f}: no build-time dates`);
  }
});

test("every page that shows a breadcrumb trail has BreadcrumbList structured data", () => {
  const files = [...walk("app", /^page\.tsx$/), "components/SpeciesList.tsx", "components/SpeciesDetail.tsx"];
  let withTrail = 0;
  for (const rel of files) {
    const src = readFileSync(join(ROOT, rel), "utf8");
    // The visible trail: a small nav whose first link is Home.
    if (!/<nav className="text-sm[^"]*">\s*<Link href="\/"[^>]*>Home<\/Link>/.test(src)) continue;
    withTrail++;
    assert.match(src, /<BreadcrumbJsonLd|<SpeciesJsonLd/, `${relative(ROOT, join(ROOT, rel))}: breadcrumb shown but no BreadcrumbList`);
  }
  assert.ok(withTrail >= 17, `expected the trails on 17 or more templates, found ${withTrail}`);
});
