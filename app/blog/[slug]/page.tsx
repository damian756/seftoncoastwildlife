import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, getPostBySlug } from "@/content/blog/posts";
import { getWikipediaImage } from "@/lib/wikipedia";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://seftoncoastwildlife.co.uk/blog/${slug}`;
  return {
    title: `${post.title} — Sefton Coast Wildlife`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "Sefton Coast Wildlife",
      type: "article",
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.metaDescription },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const heroImage = await getWikipediaImage(post.heroWikipediaTitle);
  const url = `https://seftoncoastwildlife.co.uk/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Ed",
      description:
        "Ed has been walking the Sefton Coast since the 1980s. Retired geography teacher. Keeps a yearly bird tally. Still gets up at five.",
      url: "https://seftoncoastwildlife.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Sefton Coast Wildlife",
      url: "https://seftoncoastwildlife.co.uk",
    },
    keywords: post.tags.join(", "),
    ...(heroImage && {
      image: {
        "@type": "ImageObject",
        url: heroImage.src,
        width: 800,
      },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {heroImage && (
        <div className="relative h-72 md:h-[420px] w-full overflow-hidden bg-[var(--dune)]">
          <img src={heroImage.src} alt={post.heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs text-white/60">
              Image:{" "}
              <a href={heroImage.pageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">
                Wikimedia Commons
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--slate)]/60 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[var(--marsh)] transition">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[var(--marsh)] transition">Blog</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">{post.categoryLabel}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--marsh)]">{post.categoryLabel}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mt-2 mb-3 leading-tight">{post.title}</h1>
          <p className="text-sm text-[var(--slate)]/60">{formatDate(post.date)}</p>
        </div>

        {/* Intro */}
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">{post.intro}</p>

        {/* Sections */}
        {post.sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="text-xl font-bold text-[var(--forest)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
          </div>
        ))}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-[var(--dune)]">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[var(--dune)] text-[var(--slate)]/70 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author bio */}
        <div className="mt-8 p-5 rounded-xl bg-[var(--dune)] border border-[var(--foam)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--marsh)] mb-1">About the author</p>
          <p className="text-sm font-semibold text-[var(--forest)]">Ed</p>
          <p className="text-sm text-[var(--slate)] mt-1 leading-relaxed">
            Ed has been walking the Sefton Coast since the 1980s. He keeps a yearly bird tally, owns more waterproof jackets than he'd care to admit, and has strong opinions about which hide has the best light in the morning. Retired geography teacher. Still gets up at five.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/blog" className="text-[var(--marsh)] font-medium hover:underline text-sm">← Back to all posts</Link>
        </div>
      </div>
    </>
  );
}
