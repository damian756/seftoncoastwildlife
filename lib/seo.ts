/**
 * Search helpers shared by pages, the sitemap and the tests: breadcrumb schema, species titles
 * and schema, meta description length, and the dates the sitemap and post schema use.
 * Only type imports here, so `node --test` can load this file directly.
 */
import type { Species, SpeciesCategory } from "./types";

export const SITE_URL = "https://www.seftoncoastwildlife.co.uk";
export const SITE_NAME = "Sefton Coast Wildlife";

/* ─── Breadcrumbs ─────────────────────────────────────────── */

/** One crumb as the page shows it. Earlier crumbs are links (`path`); the last is the page itself. */
export interface Crumb {
  name: string;
  path?: string;
}

/**
 * BreadcrumbList for the trail a page shows. Earlier crumbs point at their own links; the last
 * crumb is the page, so it points at `pagePath` (its canonical URL).
 */
export function breadcrumbList(crumbs: Crumb[], pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const last = i === crumbs.length - 1;
      const path = last ? pagePath : c.path ?? "/";
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      };
    }),
  };
}

/* ─── Descriptions ────────────────────────────────────────── */

/**
 * A meta description of about `max` characters: the text's whole sentences up to `max`, when
 * that leaves at least `min`. Otherwise the text unchanged (it is never cut mid-sentence).
 */
export function fitDescription(text: string, max = 160, min = 120): string {
  if (text.length <= max) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g);
  if (!sentences) return text;
  let out = "";
  for (const s of sentences) {
    const next = out + s;
    if (next.trim().length > max) break;
    out = next;
  }
  out = out.trim();
  return out.length >= min ? out : text;
}

/* ─── Dates ───────────────────────────────────────────────── */

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

/** "2026-11-11" or "11 November 2026" to a Date at midnight UTC; null if it does not parse. */
export function utcDate(s: string | undefined | null): Date | null {
  const v = s?.trim();
  if (!v) return null;
  let m = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  m = v.match(/^(\d{1,2}) ([A-Za-z]+) (\d{4})$/);
  if (m) {
    const month = MONTHS.indexOf(m[2].toLowerCase());
    if (month >= 0) return new Date(Date.UTC(Number(m[3]), month, Number(m[1])));
  }
  return null;
}

/** The latest of the dates given, ignoring missing ones; null if there are none. */
export function later(...dates: (Date | null | undefined)[]): Date | null {
  return dates.reduce<Date | null>((a, d) => (d && (!a || d > a) ? d : a), null);
}

/** "2026-11-11" for a Date (UTC). */
export function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/* ─── Sitemap ─────────────────────────────────────────────── */

/**
 * lastmod is the day a page's words last changed (git), never the build date. Change the date
 * here when you change a page's words. A page with no known date gets no lastmod.
 */
export const PAGE_UPDATED: Record<string, string> = {
  "/": "2026-11-11",
  "/birds": "2026-11-11",
  "/insects": "2026-11-11",
  "/plants": "2026-11-11",
  "/mammals": "2026-11-11",
  "/nature": "2026-11-11",
  "/birdwatching-guide": "2026-11-11",
  "/seasonal": "2026-11-11",
  "/seasonal/pink-footed-geese": "2026-11-11",
  "/seasonal/wader-migration": "2026-11-11",
  "/seasonal/breeding-birds": "2026-11-11",
  "/seasonal/winter-wildfowl": "2026-11-11",
  "/blog": "2026-11-11",
  "/contact": "2026-11-11",
  "/advertise": "2026-11-11",
  "/disclosure": "2026-11-11",
};

/**
 * Every species page's words last changed on this day: 256 of the 257 entries in
 * content/species/*.json on 11 Nov 2026 (e9b8d24 to 8da7aa4), and the page template for all of
 * them (the "All site guides" link). A page whose facts were checked later uses that date.
 */
export const SPECIES_PAGES_UPDATED = "2026-11-11";

export interface SitemapInput {
  species: { category: SpeciesCategory; slug: string; factsChecked?: string; hasSources: boolean }[];
  posts: { slug: string; date: string; dateModified?: string }[];
  /** Site guides and the nature reference pages, with the day their facts were checked. */
  guides: { href: string; checked: string }[];
}

type ChangeFrequency = "weekly" | "monthly" | "yearly";
export interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
}

/** The day a post's words last changed: dateModified, else the date it shows. */
export function postLastModified(post: { date: string; dateModified?: string }): Date | null {
  return utcDate(post.dateModified) ?? utcDate(post.date);
}

/** The day a species page last changed: its facts check (when it shows one) or the template date. */
export function speciesLastModified(s: { factsChecked?: string; hasSources: boolean }): Date | null {
  return later(utcDate(SPECIES_PAGES_UPDATED), s.hasSources ? utcDate(s.factsChecked) : null);
}

/** Every indexable URL on the site, with a real lastmod where one is known. */
export function sitemapEntries({ species, posts, guides }: SitemapInput): SitemapEntry[] {
  const entry = (path: string, lastModified: Date | null, changeFrequency: ChangeFrequency, priority: number): SitemapEntry => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    ...(lastModified && { lastModified }),
    changeFrequency,
    priority,
  });
  const page = (path: string) => utcDate(PAGE_UPDATED[path]);
  const newestPost = later(...posts.map(postLastModified));
  // A species list shows each species' card, so it changes when one of them does.
  const newestSpecies = (category: SpeciesCategory) =>
    later(...species.filter((s) => s.category === category).map(speciesLastModified));

  const fixed: SitemapEntry[] = [
    entry("/", later(page("/"), newestPost), "weekly", 1),
    entry("/birds", later(page("/birds"), newestSpecies("birds")), "weekly", 0.9),
    entry("/insects", later(page("/insects"), newestSpecies("insects")), "weekly", 0.9),
    entry("/plants", later(page("/plants"), newestSpecies("plants")), "weekly", 0.9),
    entry("/mammals", later(page("/mammals"), newestSpecies("mammals")), "weekly", 0.9),
    entry("/nature", page("/nature"), "monthly", 0.8),
    ...guides.map((g) => entry(g.href, utcDate(g.checked), "monthly", 0.8)),
    entry("/birdwatching-guide", page("/birdwatching-guide"), "monthly", 0.8),
    entry("/seasonal", page("/seasonal"), "monthly", 0.8),
    entry("/seasonal/pink-footed-geese", page("/seasonal/pink-footed-geese"), "monthly", 0.7),
    entry("/seasonal/wader-migration", page("/seasonal/wader-migration"), "monthly", 0.7),
    entry("/seasonal/breeding-birds", page("/seasonal/breeding-birds"), "monthly", 0.7),
    entry("/seasonal/winter-wildfowl", page("/seasonal/winter-wildfowl"), "monthly", 0.7),
    entry("/blog", later(page("/blog"), newestPost), "weekly", 0.8),
    entry("/contact", page("/contact"), "yearly", 0.4),
    entry("/advertise", page("/advertise"), "yearly", 0.4),
    entry("/disclosure", page("/disclosure"), "yearly", 0.3),
  ];
  const speciesPages = species.map((s) => entry(`/${s.category}/${s.slug}`, speciesLastModified(s), "monthly", 0.8));
  const postPages = posts.map((p) => entry(`/blog/${p.slug}`, postLastModified(p), "monthly", 0.7));
  return [...fixed, ...speciesPages, ...postPages];
}

/* ─── Species pages ───────────────────────────────────────── */

/** Breadcrumb label for each species section, as the species pages show it. */
export const SPECIES_SECTION_LABEL: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals & Wildlife",
};

/** "Avocet at Marshside RSPB"; with no short location, "Noctule Bat on the Sefton Coast". */
export function speciesTitle(species: Pick<Species, "commonName" | "shortLocation">): string {
  return species.shortLocation
    ? `${species.commonName} at ${species.shortLocation}`
    : `${species.commonName} on the Sefton Coast`;
}

/**
 * Structured data for a species page, from what the page shows: the breadcrumb trail, the page
 * (WebPage, about the species), the species itself (Taxon, with the order and family shown in
 * "At a Glance") and the FAQ when the page prints one. No author or dates: the page shows none,
 * except "checked on" for species with sources, which is the page's lastReviewed.
 */
export function speciesJsonLd(species: Species, category: SpeciesCategory, slug: string) {
  const pageUrl = `${SITE_URL}/${category}/${slug}`;
  const taxonId = `${pageUrl}#taxon`;
  const graph: Record<string, unknown>[] = [];

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: SPECIES_SECTION_LABEL[category], item: `${SITE_URL}/${category}` },
      { "@type": "ListItem", position: 3, name: species.commonName, item: pageUrl },
    ],
  });

  const page: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: speciesTitle(species),
    description: species.description,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    about: { "@id": taxonId },
  };
  // The photo shown on the page, served from this site.
  if (species.localImage) {
    page.primaryImageOfPage = { "@type": "ImageObject", url: `${SITE_URL}${species.localImage}` };
  }
  const reviewed = species.sources?.length ? utcDate(species.factsChecked) : null;
  if (reviewed) page.lastReviewed = isoDay(reviewed);
  graph.push(page);

  const taxon: Record<string, unknown> = {
    "@type": "Taxon",
    "@id": taxonId,
    name: species.scientificName,
    alternateName: species.commonName,
    taxonRank: "species",
  };
  const order = species.order ? { "@type": "Taxon", name: species.order, taxonRank: "order" } : null;
  const family = species.family ? { "@type": "Taxon", name: species.family, taxonRank: "family" } : null;
  if (family) taxon.parentTaxon = order ? { ...family, parentTaxon: order } : family;
  else if (order) taxon.parentTaxon = order;
  if (species.externalLinks?.wikipedia) {
    taxon.sameAs = species.externalLinks.wikipedia;
  } else if (species.wikipediaTitle) {
    taxon.sameAs = `https://en.wikipedia.org/wiki/${encodeURIComponent(species.wikipediaTitle)}`;
  }
  graph.push(taxon);

  if (species.faq && species.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: species.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
