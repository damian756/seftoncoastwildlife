import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from "@/content/blog/posts";
import { getWikipediaImage } from "@/lib/wikipedia";

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogIndexPage() {
  const postsWithImages = await Promise.all(
    BLOG_POSTS.map(async (post) => ({
      ...post,
      heroSrc: await getWikipediaImage(post.heroWikipediaTitle).then((img) => img?.src ?? null),
    }))
  );

  const categories = Object.entries(BLOG_CATEGORIES) as [BlogCategory, { label: string; description: string }][];

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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Wildlife Blog</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Notes from the Sefton Coast — conservation, species spotlights, seasonal guides, habitat and photography. Written by Ed.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--forest)] mb-4">Browse by category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map(([slug, cat]) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="block p-4 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] hover:shadow-sm transition"
              >
                <span className="font-semibold text-[var(--forest)] text-sm">{cat.label}</span>
                <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{cat.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Posts by category */}
        {categories.map(([catSlug, cat]) => {
          const posts = postsWithImages.filter((p) => p.category === catSlug);
          if (posts.length === 0) return null;
          return (
            <section key={catSlug} id={catSlug} className="mb-14 scroll-mt-8">
              <div className="flex items-baseline justify-between mb-5">
                <h2 className="text-2xl font-bold text-[var(--forest)]">{cat.label}</h2>
                <span className="text-xs text-[var(--slate)]/50">{posts.length} post{posts.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] hover:shadow-md transition group overflow-hidden"
                  >
                    {post.heroSrc && (
                      <div className="aspect-[16/9] overflow-hidden bg-[var(--dune)]">
                        <img
                          src={post.heroSrc}
                          alt={post.heroAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--marsh)]">{post.categoryLabel}</span>
                      <h3 className="font-bold text-[var(--forest)] mt-1.5 leading-snug group-hover:text-[var(--marsh)] transition">
                        {post.title}
                      </h3>
                      <p className="text-xs text-[var(--slate)]/60 mt-1">{formatDate(post.date)}</p>
                      <p className="text-sm text-[var(--slate)]/80 mt-2 leading-relaxed line-clamp-2">{post.metaDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
