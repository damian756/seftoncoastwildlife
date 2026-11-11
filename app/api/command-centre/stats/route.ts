import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function requireApiKey(req: NextRequest): NextResponse | null {
  const key = req.headers.get("x-api-key");
  const expected = process.env.COMMAND_CENTRE_API_KEY;
  if (!expected || key !== expected) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  return null;
}

export async function GET(req: NextRequest) {
  const authError = requireApiKey(req);
  if (authError) return authError;

  // Page views are the daily counts in "PageCount" (path, day, number), which /api/count writes.
  // Read-only. The old "PageView" table is no longer written, and nothing records referrers, devices
  // or visitors any more, so those figures are not reported.
  const now = new Date();
  const utcDay = (daysAgo: number) =>
    new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - daysAgo));
  const today = utcDay(0);
  const weekStart = utcDay(6); // the last 7 days, today included
  const monthStart = utcDay(29); // the last 30 days, today included

  const sumSince = (day: Date) =>
    prisma.pageCount.aggregate({ _sum: { count: true }, where: { day: { gte: day } } });

  const [todaySum, weekSum, monthSum, topPagesRaw] = await Promise.all([
    sumSince(today),
    sumSince(weekStart),
    sumSince(monthStart),
    prisma.pageCount.groupBy({
      by: ["path"],
      where: { day: { gte: weekStart } },
      _sum: { count: true },
      orderBy: { _sum: { count: "desc" } },
      take: 10,
    }),
  ]);

  return NextResponse.json({
    site: "seftoncoastwildlife",
    network: "sefton",
    period: now.toISOString().slice(0, 10),
    analytics: {
      pageviewsToday: todaySum._sum.count ?? 0,
      pageviewsThisWeek: weekSum._sum.count ?? 0,
      pageviewsThisMonth: monthSum._sum.count ?? 0,
      topPages: topPagesRaw.map((r) => ({ path: r.path, count: r._sum.count ?? 0 })),
    },
    content: {
      totalListings: 0,
      claimedListings: 0,
      totalBlogPosts: 0,
      blogPostsThisWeek: 0,
      lastBlogPostDate: null,
      totalGuides: 0,
    },
    revenue: {
      hubMembers: 0,
      hubMRR: 0,
      featuredListings: 0,
      featuredMRR: 0,
      affiliateThisMonth: 0,
    },
    outreach: {
      emailsSentThisWeek: 0,
      responsesThisWeek: 0,
      pendingFollowUps: 0,
    },
  });
}

export async function DELETE(req: NextRequest) {
  const key = req.headers.get("x-api-key");
  if (!key || key !== process.env.COMMAND_CENTRE_API_KEY) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  await prisma.pageView.deleteMany();
  return NextResponse.json({ ok: true, deleted: true });
}
