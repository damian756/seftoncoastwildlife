import { getAllSlugs } from "@/lib/species";
import { BLOG_POSTS } from "@/content/blog/posts";
import type { MetadataRoute } from "next";

const baseUrl = "https://seftoncoastwildlife.co.uk";
const SITE_UPDATED = new Date("2026-02-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = ["birds", "insects", "plants", "mammals"] as const;
  const speciesUrls: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    const slugs = getAllSlugs(cat);
    for (const slug of slugs) {
      speciesUrls.push({
        url: `${baseUrl}/${cat}/${slug}`,
        lastModified: SITE_UPDATED,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/birds`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insects`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/plants`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mammals`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/nature`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/marshside-rspb`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/ainsdale-sand-dunes`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/martin-mere`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/seaforth-nature-reserve`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/sefton-coast`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/birdwatching-guide`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal/pink-footed-geese`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/wader-migration`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/breeding-birds`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/winter-wildfowl`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...staticPages, ...speciesUrls, ...blogUrls];
}
