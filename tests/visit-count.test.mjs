// Daily visit counts: only the path, the day and a number. Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  SEASONAL_SLUGS,
  SPECIES_SECTIONS,
  STATIC_PATHS,
  buildKnownPaths,
  countablePath,
  isBot,
  isCrossSiteRequest,
  knownPath,
} from "../lib/visit-count.ts";
import { BLOG_POSTS } from "../content/blog/posts.ts";
import { slugify } from "../lib/types.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("site paths are counted without query strings", () => {
  assert.equal(countablePath("/"), "/");
  assert.equal(countablePath("/birds/sanderling"), "/birds/sanderling");
  assert.equal(countablePath("/advertise?space=home-card"), "/advertise");
});

test("non-site paths are dropped", () => {
  for (const p of ["", "birds", "//evil.example", "/api/count", "/api", "/admin/x", "/dashboard", "/_next/static/x.js", "/" + "a".repeat(300), "/a b", "/<script>", 42, null]) {
    assert.equal(countablePath(p), null, String(p));
  }
});

test("known bots and empty user agents are left out", () => {
  assert.equal(isBot("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"), true);
  assert.equal(isBot("Mozilla/5.0 (compatible; AhrefsBot/7.0)"), true);
  assert.equal(isBot("curl/8.4.0"), true);
  assert.equal(isBot("Mozilla/5.0 (X11; Linux x86_64) HeadlessChrome/120.0"), true);
  assert.equal(isBot(""), true);
  assert.equal(isBot(null), true);
  assert.equal(isBot("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1"), false);
});

test("the count route writes only in production and stores only path, day and count", () => {
  const src = read("app/api/count/route.ts");
  assert.match(src, /process\.env\.VERCEL_ENV !== "production"/);
  assert.match(src, /INSERT INTO "PageCount" \("path", "day", "count"\)/);
  assert.match(src, /ON CONFLICT \("path", "day"\) DO UPDATE SET "count" = "PageCount"\."count" \+ 1/);
  assert.doesNotMatch(src, /pageView|PageView|referr|x-forwarded-for|cookies\(|ip\b/i);
});

test("the beacon sends the pathname only, with no cookies or storage", () => {
  const src = read("components/VisitCounter.tsx");
  assert.match(src, /navigator\.sendBeacon\("\/api\/count", pathname\)/);
  assert.doesNotMatch(src, /document\.cookie|localStorage|sessionStorage|searchParams/);
  assert.match(read("app/layout.tsx"), /<VisitCounter \/>/);
});

// The known routes, built from the site's own data the way app/api/count/route.ts builds them.
const speciesSlugs = Object.fromEntries(
  SPECIES_SECTIONS.map((sec) => [sec, JSON.parse(read(`content/species/${sec}.json`)).map((s) => s.id ?? slugify(s.commonName))]),
);
const KNOWN = buildKnownPaths({ blogSlugs: BLOG_POSTS.map((p) => p.slug), speciesSlugs });

function pageRoutes(dir, base = "") {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "api" || name.startsWith("_")) continue;
      out.push(...pageRoutes(p, `${base}/${name}`));
    } else if (name === "page.tsx") out.push(base || "/");
  }
  return out;
}

test("the fixed pages list matches the app's pages", () => {
  const fixed = pageRoutes(join(ROOT, "app")).filter((r) => !r.includes("[")).sort();
  assert.deepEqual([...STATIC_PATHS].sort(), fixed);
});

test("the seasonal slugs match the seasonal pages", () => {
  const src = read("app/seasonal/[slug]/page.tsx");
  const block = src.slice(src.indexOf("const seasonalPages"), src.indexOf("/* ─── page component"));
  const keys = [...block.matchAll(/^  "([a-z0-9-]+)": \{/gm)].map((m) => m[1]);
  assert.deepEqual([...SEASONAL_SLUGS].sort(), keys.sort());
});

test("only known routes are counted", () => {
  for (const p of [
    "/",
    "/advertise?space=home-card",
    "/birdwatching-guide",
    "/nature/marshside-rspb",
    "/seasonal/pink-footed-geese",
    `/blog/${BLOG_POSTS[0].slug}`,
    `/birds/${speciesSlugs.birds[0]}`,
    `/mammals/${speciesSlugs.mammals[0]}`,
    `/insects/${speciesSlugs.insects[0]}`,
    `/plants/${speciesSlugs.plants[0]}`,
    "/birds/",
  ]) {
    assert.ok(knownPath(p, KNOWN), p);
  }
  assert.equal(knownPath("/birds/", KNOWN), "/birds");
  assert.equal(knownPath("/red-squirrel", KNOWN), null);
  for (const p of [
    "/wp-login.php",
    "/blog/not-a-post",
    "/birds/not-a-bird",
    "/birds/red-squirrel", // a mammal, not a bird
    "/seasonal/not-a-season",
    "/nature/not-a-reserve",
    "/Birds",
    "/api/count",
    "/blog/" + BLOG_POSTS[0].slug + "/extra",
    "",
    null,
  ]) {
    assert.equal(knownPath(p, KNOWN), null, String(p));
  }
});

test("requests a browser marks as cross-site are rejected", () => {
  assert.equal(isCrossSiteRequest("same-origin"), false);
  assert.equal(isCrossSiteRequest(null), false, "no header (older browsers) is allowed");
  assert.equal(isCrossSiteRequest(undefined), false);
  for (const v of ["cross-site", "same-site", "none", ""]) assert.equal(isCrossSiteRequest(v), true, v);
});

test("the count route checks Sec-Fetch-Site and known routes before writing", () => {
  const src = read("app/api/count/route.ts");
  assert.match(src, /if \(isCrossSiteRequest\(req\.headers\.get\("sec-fetch-site"\)\)\) return done\(\);/);
  assert.match(src, /const path = knownPath\(body, KNOWN_PATHS\);\s*if \(!path\) return done\(\);/);
  assert.ok(src.indexOf("knownPath(body") < src.indexOf("INSERT INTO"));
});
