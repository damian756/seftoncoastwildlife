import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

for (const cat of ["birds", "insects", "plants", "mammals"]) {
  const p = join(ROOT, "content", "species", `${cat}.json`);
  const data = JSON.parse(readFileSync(p, "utf-8"));
  const cleaned = data.map(({ localImage, ...rest }) => rest);
  writeFileSync(p, JSON.stringify(cleaned, null, 2));
  console.log(`Cleared localImage from ${cat}.json`);
}
