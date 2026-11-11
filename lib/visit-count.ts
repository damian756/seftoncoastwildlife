// Pure helpers for the daily visit count (app/api/count/route.ts).
// No imports and only erasable TypeScript, so the tests can load this file directly with Node.
//
// What is stored: the page path, the day and a number. Nothing about the visitor. The user agent is
// read only to leave out known bots, and is never stored.

// Substrings that mark a request as automated (case-insensitive). The first twelve come from the old
// /api/p beacon; the rest cover common crawlers, previews and tools that do not say "bot".
export const BOT_PATTERNS = [
  "bot", "crawler", "spider", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot",
  "Baiduspider", "YandexBot", "facebookexternalhit", "Twitterbot", "LinkedInBot",
  "crawl", "headless", "lighthouse", "pagespeed", "preview", "curl", "wget", "python",
  "go-http-client", "java/", "httpclient", "axios", "node-fetch", "scrapy", "monitor",
];

export function isBot(userAgent: string | null | undefined): boolean {
  const ua = (userAgent ?? "").toLowerCase();
  if (!ua) return true; // browsers always send a user agent
  return BOT_PATTERNS.some((p) => ua.includes(p.toLowerCase()));
}

const EXCLUDED_PREFIXES = ["/api", "/admin", "/dashboard", "/_next"];

/** The path to count, or null if it is not a page path on this site. */
export function countablePath(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const path = raw.trim().split(/[?#]/)[0];
  if (!path.startsWith("/") || path.startsWith("//")) return null;
  if (path.length > 300) return null;
  if (!/^\/[A-Za-z0-9\-._~%/]*$/.test(path)) return null;
  const lower = path.toLowerCase();
  if (EXCLUDED_PREFIXES.some((p) => lower === p || lower.startsWith(p + "/"))) return null;
  return path;
}

// Known routes. Only these are counted, so a mistyped address or a 404 never gets a row.
// Pages with a fixed address: kept in step with app/**/page.tsx by tests/visit-count.test.mjs.
export const STATIC_PATHS = [
  "/",
  "/advertise",
  "/birds",
  "/birdwatching-guide",
  "/blog",
  "/contact",
  "/disclosure",
  "/insects",
  "/mammals",
  "/nature",
  "/nature/ainsdale-sand-dunes",
  "/nature/birkdale-green-beach",
  "/nature/crosby-and-alt-estuary",
  "/nature/formby-point",
  "/nature/hesketh-out-marsh",
  "/nature/marshside-rspb",
  "/nature/martin-mere",
  "/nature/seaforth-nature-reserve",
  "/nature/sefton-coast",
  "/plants",
  "/privacy",
  "/seasonal",
  "/terms",
];

// The /seasonal/<slug> pages: kept in step with app/seasonal/[slug]/page.tsx by the tests.
export const SEASONAL_SLUGS = ["pink-footed-geese", "wader-migration", "breeding-birds", "winter-wildfowl"];

export const SPECIES_SECTIONS = ["birds", "mammals", "insects", "plants"] as const;
export type SpeciesSection = (typeof SPECIES_SECTIONS)[number];

/** Every countable path: the fixed pages, blog posts, species pages and seasonal pages. */
export function buildKnownPaths(data: {
  blogSlugs: readonly string[];
  speciesSlugs: Record<SpeciesSection, readonly string[]>;
}): Set<string> {
  const known = new Set<string>(STATIC_PATHS);
  for (const slug of data.blogSlugs) known.add(`/blog/${slug}`);
  for (const section of SPECIES_SECTIONS) {
    for (const slug of data.speciesSlugs[section]) known.add(`/${section}/${slug}`);
  }
  for (const slug of SEASONAL_SLUGS) known.add(`/seasonal/${slug}`);
  return known;
}

/** The path to count if it is a known route on this site, otherwise null. */
export function knownPath(raw: unknown, known: ReadonlySet<string>): string | null {
  let path = countablePath(raw);
  if (!path) return null;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return known.has(path) ? path : null;
}

/**
 * True when the browser says the request came from another site. The beacon is sent by our own pages,
 * so a browser marks it "same-origin". A missing header (older browsers) is allowed.
 */
export function isCrossSiteRequest(secFetchSite: string | null | undefined): boolean {
  if (secFetchSite == null) return false;
  return secFetchSite.trim().toLowerCase() !== "same-origin";
}
