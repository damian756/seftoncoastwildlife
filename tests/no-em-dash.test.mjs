// No em dash (U+2014) in anything a visitor or search engine sees (C:\Projects\CLAUDE.md).
// Static read of the source; run with: node --test tests/*.test.mjs
// Code comments may keep em dashes, so comments are stripped before checking code files.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const EM = "\u2014";

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

/** Remove block comments, JSX comments and line comments (not the "//" in a URL). */
function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((line) => line.replace(/(^|[^:"'`\\])\/\/.*$/, "$1"))
    .join("\n");
}

function hits(files, { code }) {
  const found = [];
  for (const f of files) {
    const text = readFileSync(join(ROOT, f), "utf8");
    const checked = code ? stripComments(text) : text;
    checked.split("\n").forEach((line, i) => {
      if (line.includes(EM)) found.push(`${relative(ROOT, join(ROOT, f))}:${i + 1}: ${line.trim().slice(0, 100)}`);
    });
  }
  return found;
}

test("no em dash in pages, metadata, titles, descriptions or schema under app/ and components/", () => {
  const files = [...walk("app", /\.(ts|tsx)$/), ...walk("components", /\.(ts|tsx)$/)];
  assert.ok(files.length > 20, "expected to find the app's pages");
  assert.deepEqual(hits(files, { code: true }), []);
});

test("no em dash in rendering data files (lib/, content/)", () => {
  const files = [...walk("lib", /\.(ts|tsx|json)$/), ...walk("content", /\.(ts|tsx|json)$/)];
  assert.ok(files.some((f) => f.endsWith("birds.json")), "expected the species data");
  assert.deepEqual(hits(files, { code: true }), []);
});

test("no em dash in public text files (llms.txt, feeds)", () => {
  const files = walk("public", /\.(txt|xml|json|webmanifest)$/);
  assert.deepEqual(hits(files, { code: false }), []);
});

test("the comment stripper keeps URLs and strings", () => {
  const src = 'const u = "https://example.org/a"; // note\n{/* jsx */}\n/* block */ const t = "x";';
  const out = stripComments(src);
  assert.ok(out.includes("https://example.org/a"));
  assert.ok(!out.includes("note") && !out.includes("jsx") && !out.includes("block"));
});
