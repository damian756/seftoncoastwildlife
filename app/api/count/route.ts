import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { countablePath, isBot } from "@/lib/visit-count";

// Daily page counts: one row per path per day, holding a number. Nothing about the visitor is stored.
// Writes only on the production deployment, so local dev and preview deployments never touch the table.

function done() {
  return new Response(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  if (process.env.VERCEL_ENV !== "production") return done();
  if (isBot(req.headers.get("user-agent"))) return done();

  let body = "";
  try {
    body = (await req.text()).slice(0, 1000);
  } catch {
    return done();
  }
  const path = countablePath(body);
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
