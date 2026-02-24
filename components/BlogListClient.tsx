"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BLOG_CATEGORIES, type BlogCategory } from "@/content/blog/posts";

interface PostWithImage {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  date: string;
  metaDescription: string;
  heroAlt: string;
  tags: string[];
  heroSrc: string | null;
}

interface Props {
  posts: PostWithImage[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const ALL = "all" as const;

export function BlogListClient({ posts }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | typeof ALL>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCat = activeCategory === ALL || p.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.metaDescription.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, query, activeCategory]);

  const categories = Object.entries(BLOG_CATEGORIES) as [BlogCategory, { label: string }][];
  const hasFilter = query.trim() !== "" || activeCategory !== ALL;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Search + filter bar */}
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative max-w-lg">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--slate)]/40 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx={11} cy={11} r={8} />
            <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full rounded-xl border border-[var(--dune)] bg-white pl-10 pr-4 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--slate)]/40 focus:outline-none focus:border-[var(--marsh)] focus:ring-1 focus:ring-[var(--marsh)] transition"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--slate)]/40 hover:text-[var(--slate)] transition"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(ALL)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              activeCategory === ALL
                ? "bg-[var(--forest)] text-white border-[var(--forest)]"
                : "bg-white text-[var(--slate)] border-[var(--dune)] hover:border-[var(--marsh)]"
            }`}
          >
            All posts
          </button>
          {categories.map(([slug, cat]) => (
            <button
              key={slug}
              onClick={() => setActiveCategory(slug)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                activeCategory === slug
                  ? "bg-[var(--marsh)] text-white border-[var(--marsh)]"
                  : "bg-white text-[var(--slate)] border-[var(--dune)] hover:border-[var(--marsh)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        {hasFilter && (
          <div className="flex items-center gap-3">
            <p className="text-sm text-[var(--slate)]/60">
              {filtered.length === 0
                ? "No posts found"
                : `${filtered.length} post${filtered.length !== 1 ? "s" : ""}`}
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory(ALL); }}
              className="text-xs text-[var(--marsh)] hover:underline font-medium"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-[var(--slate)]/60 text-sm mb-3">No posts match your search.</p>
          <button
            onClick={() => { setQuery(""); setActiveCategory(ALL); }}
            className="text-sm text-[var(--marsh)] hover:underline font-medium"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`card-hover group block rounded-2xl border border-[var(--dune)] bg-white overflow-hidden hover:border-[var(--marsh)]/50 transition ${
                i === 0 && filtered.length > 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className={`overflow-hidden bg-[var(--dune)] ${i === 0 && filtered.length > 2 ? "h-52 sm:h-64 lg:h-52" : "h-48"}`}>
                {post.heroSrc ? (
                  <img
                    src={post.heroSrc}
                    alt={post.heroAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--marsh)] to-[var(--forest)]" />
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--marsh)] mb-2">
                  {post.categoryLabel}
                </span>
                <h2 className="font-semibold text-[var(--forest)] leading-snug mb-1.5 group-hover:text-[var(--marsh)] transition text-base">
                  {post.title}
                </h2>
                <p className="text-xs text-[var(--slate)]/50 mb-3">{formatDate(post.date)}</p>
                <p className="text-sm text-[var(--slate)]/75 leading-relaxed line-clamp-2">
                  {post.metaDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
