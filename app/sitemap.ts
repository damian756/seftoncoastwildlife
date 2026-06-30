import { getAllSlugs } from "@/lib/species";
import { BLOG_POSTS } from "@/content/blog/posts";
import type { MetadataRoute } from "next";

const baseUrl = "https://www.seftoncoastwildlife.co.uk";

/**
 * Deterministic staggered date for species pages.
 * Spreads species across a date range so the sitemap doesn't show
 * all 257 species as bulk-created on one day.
 */
function speciesDate(index: number, total: number): Date {
  const start = new Date("2025-11-01").getTime();
  const end = new Date("2026-02-28").getTime();
  const step = (end - start) / Math.max(total - 1, 1);
  return new Date(start + step * index);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = ["birds", "insects", "plants", "mammals"] as const;

  let globalIndex = 0;
  const allSlugs: { cat: string; slug: string }[] = [];
  for (const cat of categories) {
    for (const slug of getAllSlugs(cat)) {
      allSlugs.push({ cat, slug });
    }
  }
  const totalSpecies = allSlugs.length;

  const speciesUrls: MetadataRoute.Sitemap = allSlugs.map(({ cat, slug }) => ({
    url: `${baseUrl}/${cat}/${slug}`,
    lastModified: speciesDate(globalIndex++, totalSpecies),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-03-05"), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/birds`, lastModified: new Date("2026-02-20"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insects`, lastModified: new Date("2026-02-18"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/plants`, lastModified: new Date("2026-02-15"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mammals`, lastModified: new Date("2026-02-12"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/nature`, lastModified: new Date("2026-02-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/marshside-rspb`, lastModified: new Date("2026-02-08"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/ainsdale-sand-dunes`, lastModified: new Date("2026-02-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/martin-mere`, lastModified: new Date("2026-01-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/seaforth-nature-reserve`, lastModified: new Date("2026-01-25"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/sefton-coast`, lastModified: new Date("2026-01-20"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/birdwatching-guide`, lastModified: new Date("2026-02-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal/pink-footed-geese`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/wader-migration`, lastModified: new Date("2026-01-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/breeding-birds`, lastModified: new Date("2026-01-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/winter-wildfowl`, lastModified: new Date("2026-01-10"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-03-05"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2025-12-01"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/advertise`, lastModified: new Date("2026-06-30"), changeFrequency: "yearly", priority: 0.4 },
  ];

  return [...staticPages, ...speciesUrls, ...blogUrls];
}
