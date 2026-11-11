// No affiliate links (Damian, 11 Nov 2026). Static read of the source; run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|js|mjs|json|md|txt)$/.test(name)) out.push(p);
  }
  return out;
}

// Affiliate networks, redirects and tracking parameters.
const PATTERNS = [
  /awin1\.com/i, /awclick/i, /tidd\.ly/i, /prf\.hn/i, /booking\.com[^"'\s]*[?&]aid=/i,
  /[?&](ref|affid|awinmid|awinaffid|clickref|aid|tag)=/i,
  /laterooms/i, /championstravel|champions travel/i, /cottages\.com/i, /sykescottages|sykes cottages/i,
  /goape\.co\.uk|go ape/i, /amazon\.[a-z.]+\/[^"'\s]*tag=/i, /viator\.com|getyourguide|skimlinks|sovrn/i,
  /affiliate-links/i,
];

test("no affiliate domain or tag pattern in app/, lib/, components/, content/, messages/", () => {
  const files = ["app", "lib", "components", "content", "messages"].flatMap((d) => walk(join(ROOT, d)));
  const offenders = [];
  for (const f of files) {
    const src = readFileSync(f, "utf8");
    for (const re of PATTERNS) if (re.test(src)) offenders.push(`${f}: ${re}`);
  }
  assert.deepEqual(offenders, []);
});

test("the affiliate links file is gone", () => {
  assert.equal(existsSync(join(ROOT, "lib", "affiliate-links.ts")), false);
});
