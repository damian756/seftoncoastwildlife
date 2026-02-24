import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/content/blog/posts";
import { getWikipediaImage } from "@/lib/wikipedia";
import { BlogListClient } from "@/components/BlogListClient";

const title = "Wildlife Blog — Sefton Coast Wildlife";
const description =
  "Ed's notes from the Sefton Coast — conservation news, species spotlights, seasonal watching guides, habitat guides and wildlife photography tips.";
const url = "https://seftoncoastwildlife.co.uk/blog";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function BlogIndexPage() {
  const postsWithImages = await Promise.all(
    BLOG_POSTS.map(async (post) => ({
      slug: post.slug,
      category: post.category,
      categoryLabel: post.categoryLabel,
      title: post.title,
      date: post.date,
      metaDescription: post.metaDescription,
      heroAlt: post.heroAlt,
      tags: post.tags,
      heroSrc: await getWikipediaImage(post.heroWikipediaTitle).then((img) => img?.src ?? null),
    }))
  );

  return (
    <div>
      {/* Header */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Blog</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Written by Ed
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Wildlife Blog</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Notes from the Sefton Coast — conservation, species spotlights, seasonal guides, habitat and photography.
          </p>
        </div>
      </div>

      {/* Interactive list — client component handles search + filter */}
      <BlogListClient posts={postsWithImages} />
    </div>
  );
}
