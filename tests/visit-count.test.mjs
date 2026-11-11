// Daily visit counts: only the path, the day and a number. Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { countablePath, isBot } from "../lib/visit-count.ts";

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
