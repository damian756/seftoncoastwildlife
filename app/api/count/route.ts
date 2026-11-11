import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { BLOG_POSTS } from "@/content/blog/posts";
import { slugify } from "@/lib/types";
import birds from "@/content/species/birds.json";
import mammals from "@/content/species/mammals.json";
import insects from "@/content/species/insects.json";
import plants from "@/content/species/plants.json";
import { buildKnownPaths, isBot, isCrossSiteRequest, knownPath } from "@/lib/visit-count";

// Daily page counts: one row per path per day, holding a number. Nothing about the visitor is stored.
// Writes only on the production deployment, so local dev and preview deployments never touch the table.
// Only known routes are counted (see lib/visit-count.ts), so 404s and made-up paths get no row.

type SpeciesEntry = { id?: string; commonName: string };
// Same slugs as lib/species.ts: the entry's id, or its common name slugified. The JSON is imported
// (not read from disk) so it is bundled with the function.
const speciesSlugs = (list: SpeciesEntry[]) => list.map((s) => s.id ?? slugify(s.commonName));

const KNOWN_PATHS = buildKnownPaths({
  blogSlugs: BLOG_POSTS.map((p) => p.slug),
  speciesSlugs: {
    birds: speciesSlugs(birds as SpeciesEntry[]),
    mammals: speciesSlugs(mammals as SpeciesEntry[]),
    insects: speciesSlugs(insects as SpeciesEntry[]),
    plants: speciesSlugs(plants as SpeciesEntry[]),
  },
});

function done() {
  return new Response(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") return done();
  if (isCrossSiteRequest(req.headers.get("sec-fetch-site"))) return done();
  if (isBot(req.headers.get("user-agent"))) return done();

  let body = "";
  try {
    body = (await req.text()).slice(0, 1000);
  } catch {
    return done();
  }
  const path = knownPath(body, KNOWN_PATHS);
  if (!path) return done();

  try {
    await prisma.$executeRaw`
      INSERT INTO "PageCount" ("path", "day", "count")
      VALUES (${path}, CURRENT_DATE, 1)
      ON CONFLICT ("path", "day") DO UPDATE SET "count" = "PageCount"."count" + 1`;
  } catch (err) {
    const e = err as { name?: string; message?: string };
    console.error(`Visit count failed: ${e?.name ?? "Error"}: ${e?.message ?? ""}`);
  }
  return done();
}
