#!/usr/bin/env node
/**
 * Downloads Wikipedia images for all species and saves them locally.
 * Adds a `localImage` field to each species entry in the JSON files.
 *
 * Run: node scripts/download-wiki-images.mjs
 *
 * Images saved to: public/images/species/[category]/[id].jpg
 * Target size: 600px width (good quality, manageable file size)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CATEGORIES = ["birds", "insects", "plants", "mammals"];
const DELAY_MS = 200; // polite rate limit for Wikipedia API
const TARGET_SIZE = 600; // px width

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "SeftonCoastWildlife/1.0 (https://seftoncoastwildlife.co.uk)" },
      });
      if (res.ok) return res;
      if (res.status === 429 || res.status >= 500) {
        await sleep(1000 * (i + 1));
        continue;
      }
      return null;
    } catch {
      await sleep(500 * (i + 1));
    }
  }
  return null;
}

async function getWikiImageUrl(title) {
  const res = await fetchWithRetry(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
  );
  if (!res) return null;
  try {
    const data = await res.json();
    // Always use thumbnail.source as base — it reliably has the /\d+px- URL pattern
    // for safe size substitution. originalimage is full-resolution and can be 100MB+.
    const thumb = data.thumbnail?.source;
    if (!thumb) return null;
    return thumb.replace(/\/\d+px-([^/]+)$/, `/${TARGET_SIZE}px-$1`);
  } catch {
    return null;
  }
}

const MAX_FILE_BYTES = 3 * 1024 * 1024; // 3 MB guard — thumbnail images should be well under this

async function downloadImage(url, destPath) {
  const res = await fetchWithRetry(url);
  if (!res) return false;
  try {
    const buffer = await res.arrayBuffer();
    if (buffer.byteLength > MAX_FILE_BYTES) {
      console.log(`  ⚠ skipped (${Math.round(buffer.byteLength / 1024 / 1024)}MB > 3MB limit)`);
      return false;
    }
    writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  let totalDownloaded = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  for (const category of CATEGORIES) {
    const jsonPath = join(ROOT, "content", "species", `${category}.json`);
    const species = JSON.parse(readFileSync(jsonPath, "utf-8"));

    // Ensure output directory exists
    const outDir = join(ROOT, "public", "images", "species", category);
    mkdirSync(outDir, { recursive: true });

    console.log(`\n── ${category.toUpperCase()} (${species.length} species) ──`);

    let changed = false;

    for (const s of species) {
      const id = s.id ?? s.commonName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const destPath = join(outDir, `${id}.jpg`);
      const localImagePath = `/images/species/${category}/${id}.jpg`;

      // Already downloaded — skip
      if (s.localImage && existsSync(destPath)) {
        process.stdout.write(`  ✓ ${s.commonName} (cached)\n`);
        totalSkipped++;
        continue;
      }

      const title = s.wikipediaTitle ?? s.commonName;
      process.stdout.write(`  ↓ ${s.commonName} (${title})... `);

      const imgUrl = await getWikiImageUrl(title);
      if (!imgUrl) {
        // Try scientific name as fallback
        const fallbackUrl = s.wikipediaTitle ? await getWikiImageUrl(s.scientificName) : null;
        if (!fallbackUrl) {
          console.log("no image found");
          totalFailed++;
          await sleep(DELAY_MS);
          continue;
        }
        const ok = await downloadImage(fallbackUrl, destPath);
        if (ok) {
          s.localImage = localImagePath;
          changed = true;
          console.log(`✓ (via scientific name)`);
          totalDownloaded++;
        } else {
          console.log("download failed");
          totalFailed++;
        }
      } else {
        const ok = await downloadImage(imgUrl, destPath);
        if (ok) {
          s.localImage = localImagePath;
          changed = true;
          console.log("✓");
          totalDownloaded++;
        } else {
          console.log("download failed");
          totalFailed++;
        }
      }

      await sleep(DELAY_MS);
    }

    if (changed) {
      writeFileSync(jsonPath, JSON.stringify(species, null, 2), "utf-8");
      console.log(`  → Saved updated ${category}.json`);
    }
  }

  console.log(`\n════════════════════════════`);
  console.log(`Downloaded : ${totalDownloaded}`);
  console.log(`Skipped    : ${totalSkipped}`);
  console.log(`Failed     : ${totalFailed}`);
  console.log(`════════════════════════════`);
}

main().catch(console.error);
