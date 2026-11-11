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
