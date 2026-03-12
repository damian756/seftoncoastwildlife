import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, getPostBySlug } from "@/content/blog/posts";
import { getWikipediaImage } from "@/lib/wikipedia";
import { ClickableImage } from "@/components/ClickableImage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://www.seftoncoastwildlife.co.uk/blog/${slug}`;
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

  const heroImage = (post.heroLocalSrc != null || post.heroWikipediaTitle == null)
    ? null
    : await getWikipediaImage(post.heroWikipediaTitle);
  const heroSrc = post.heroLocalSrc ?? heroImage?.src ?? null;
  const heroPageUrl = heroImage?.pageUrl ?? null;
  const url = `https://www.seftoncoastwildlife.co.uk/blog/${slug}`;

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
      url: "https://www.seftoncoastwildlife.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Sefton Coast Wildlife",
      url: "https://www.seftoncoastwildlife.co.uk",
    },
    keywords: post.tags.join(", "),
    ...(heroSrc && {
      image: {
        "@type": "ImageObject",
        url: heroSrc.startsWith("/") ? `https://www.seftoncoastwildlife.co.uk${heroSrc}` : heroSrc,
        width: 800,
      },
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {heroSrc && (
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[var(--dune)]">
          <ClickableImage
            src={heroSrc}
            alt={post.heroAlt}
            className="w-full h-full object-cover object-center"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          {heroPageUrl && (
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <p className="text-xs text-white/60">
                Image:{" "}
                <a href={heroPageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 pointer-events-auto">
                  Wikimedia Commons
                </a>
              </p>
            </div>
          )}
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
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--forest)] mt-2 mb-3 leading-tight">{post.title}</h1>
          <p className="text-sm text-[var(--slate)]/60">{formatDate(post.date)}</p>
        </div>

        {/* Intro */}
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">{post.intro}</p>

        {/* Sections */}
        {post.sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="font-display text-xl font-bold text-[var(--forest)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
            {section.imageAfter && (
              <div className="mt-5 rounded-xl overflow-hidden border border-[var(--foam)]">
                <div className="relative w-full h-72 sm:h-80 md:h-96">
                  <ClickableImage
                    src={section.imageAfter.src}
                    alt={section.imageAfter.alt}
                    caption={section.imageAfter.caption}
                    fill
                    className="w-full h-full object-cover"
                    style={{ objectPosition: section.imageAfter.objectPosition ?? "center center" }}
                  />
                </div>
                {section.imageAfter.caption && (
                  <p className="text-xs text-[var(--slate)]/60 px-4 py-2 bg-[var(--dune)]/40 text-center leading-relaxed">
                    {section.imageAfter.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Related species / pages */}
        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[var(--dune)]">
            <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-4">Species covered in this post</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {post.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col rounded-xl border border-[var(--foam)] bg-[var(--dune)]/40 px-4 py-3 hover:border-[var(--marsh)] hover:bg-[var(--dune)] transition-colors"
                >
                  <span className="text-sm font-semibold text-[var(--forest)] mb-0.5">{link.label}</span>
                  <span className="text-xs text-[var(--slate)]/70 leading-relaxed">{link.description}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

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
            Ed has been walking the Sefton Coast since the 1980s. He keeps a yearly bird tally, owns more waterproof jackets than he&apos;d care to admit, and has strong opinions about which hide has the best light in the morning. Retired geography teacher. Still gets up at five.
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
