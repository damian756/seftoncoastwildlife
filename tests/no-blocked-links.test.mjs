// No links to the sites in lib/blocked-domains.ts (standing rule, Damian, 11 Nov 2026).
// Naming the organisations is fine; linking is not. Static read; run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const LIST_FILE = join("lib", "blocked-domains.ts");

/** The domains, read from the exported constant in lib/blocked-domains.ts. */
export function blockedDomains() {
  const src = readFileSync(join(ROOT, LIST_FILE), "utf8");
  const body = src.match(/BLOCKED_LINK_DOMAINS\s*=\s*\[([\s\S]*?)\]/);
  assert.ok(body, "BLOCKED_LINK_DOMAINS not found in lib/blocked-domains.ts");
  return [...body[1].matchAll(/"([a-z0-9.-]+\.[a-z]{2,})"/g)].map((m) => m[1]);
}

const TEXT = /\.(ts|tsx|js|jsx|mjs|cjs|json|md|mdx|txt|xml|html|svg|css|csv|webmanifest|yml|yaml)$/i;

function walk(dir) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const out = [];
  for (const name of readdirSync(abs)) {
    const rel = join(dir, name);
    if (statSync(join(ROOT, rel)).isDirectory()) out.push(...walk(rel));
    else if (TEXT.test(name)) out.push(rel);
  }
  return out;
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Patterns that make a domain a link: a URL (with or without scheme), or an href, url or sameAs value. */
export function linkPatterns(domains) {
  const host = `(?<![a-z0-9-])(?:[a-z0-9-]+\\.)*(?:${domains.map(esc).join("|")})(?![a-z0-9-])`;
  return [
    new RegExp(`(?:https?:)?//${host}`, "i"),
    new RegExp(`\\bwww\\.${host}`, "i"),
    new RegExp(`(?:href|url|sameAs)\\s*[:=]\\s*[\\[{(]?\\s*["'\`][^"'\`]*?${host}`, "i"),
  ];
}

function findLinks(files, patterns) {
  const hits = [];
  for (const f of files) {
    if (f === LIST_FILE) continue;
    readFileSync(join(ROOT, f), "utf8").split("\n").forEach((line, i) => {
      if (patterns.some((p) => p.test(line))) hits.push(`${f}:${i + 1}: ${line.trim().slice(0, 120)}`);
    });
  }
  return hits;
}

test("the blocked list is in lib/blocked-domains.ts and covers the six organisations", () => {
  const d = blockedDomains();
  for (const must of ["sefton.gov.uk", "visitsouthport.com", "yoursouthport.com", "southportbid.com", "southportmarket.com", "mhalg.com"]) {
    assert.ok(d.includes(must), `${must} missing from BLOCKED_LINK_DOMAINS`);
  }
});

test("no link or URL to a blocked site in app/, lib/, components/, content/, messages/, data/ or public/", () => {
  const files = ["app", "lib", "components", "content", "messages", "data", "public"].flatMap(walk);
  assert.ok(files.length > 20, "expected to find the site's files");
  assert.deepEqual(findLinks(files, linkPatterns(blockedDomains())), []);
});

test("the patterns catch links and leave plain names alone", () => {
  const p = linkPatterns(["sefton.gov.uk", "visitsouthport.com"]);
  const caught = (s) => p.some((r) => r.test(s));
  assert.ok(caught('<a href="https://www.sefton.gov.uk/around-sefton/">'));
  assert.ok(caught('url: "https://sefton.gov.uk/mysefton-news/latest-news/x"'));
  assert.ok(caught('sameAs: "www.visitsouthport.com"'));
  assert.ok(caught("see https://modgov.sefton.gov.uk/doc.pdf"));
  assert.ok(caught('href: "//visitsouthport.com/events"'));
  assert.ok(!caught("Sefton Council says the roosts build in October."));
  assert.ok(!caught("VisitSouthport lists the event."));
  assert.ok(!caught('url: "https://www.notsefton.gov.uk/"'));
});
