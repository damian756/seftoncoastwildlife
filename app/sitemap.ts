import { getAllSpecies } from "@/lib/species";
import { BLOG_POSTS } from "@/content/blog/posts";
import { NATURE_REFERENCE, SITE_GUIDES } from "@/lib/site-guides";
import { sitemapEntries } from "@/lib/seo";
import type { SpeciesCategory } from "@/lib/types";
import type { MetadataRoute } from "next";

/**
 * Every indexable page. lastmod is the day the page's words last changed (lib/seo.ts), never the
 * build date; /privacy and /terms are noindex and left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const categories: SpeciesCategory[] = ["birds", "insects", "plants", "mammals"];
  const species = categories.flatMap((category) =>
    getAllSpecies(category).map((s) => ({
      category,
      slug: s.id,
      factsChecked: s.factsChecked,
      hasSources: (s.sources?.length ?? 0) > 0,
    }))
  );
  return sitemapEntries({
    species,
    posts: BLOG_POSTS,
    guides: [...SITE_GUIDES, ...NATURE_REFERENCE],
  });
}
