"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "Birds", href: "/birds" },
  { label: "Insects", href: "/insects" },
  { label: "Plants", href: "/plants" },
  { label: "Mammals", href: "/mammals" },
  {
    label: "Nature & Coast",
    href: "/nature",
    children: [
      { label: "Marshside RSPB", href: "/nature/marshside-rspb" },
      { label: "The Sefton Coast", href: "/nature/sefton-coast" },
      { label: "Birdwatching Guide", href: "/birdwatching-guide" },
      { label: "Seasonal Guides", href: "/seasonal" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function NavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      } bg-white/95 backdrop-blur-sm border-b border-[var(--dune)]`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <span className="text-base sm:text-lg font-semibold text-[var(--forest)] group-hover:text-[var(--marsh)] transition leading-none">
            Sefton Coast{" "}
            <span className="text-[var(--marsh)]">Wildlife</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <span className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[var(--slate)] hover:bg-[var(--dune)] hover:text-[var(--forest)] cursor-default transition">
                  {item.label}
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 transition" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="bg-white border border-[var(--dune)] rounded-xl shadow-lg py-1.5 min-w-[210px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--slate)] hover:bg-[var(--sand)] hover:text-[var(--forest)] transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[var(--slate)] hover:bg-[var(--dune)] hover:text-[var(--forest)] transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/nature/marshside-rspb"
            className="rounded-lg bg-[var(--forest)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--marsh)] transition"
          >
            Visit Marshside
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-[var(--slate)] hover:bg-[var(--dune)] transition"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--dune)] bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-[var(--slate)] hover:bg-[var(--sand)] hover:text-[var(--forest)] transition"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-0.5 flex flex-col gap-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm text-[var(--slate)]/80 hover:bg-[var(--dune)] hover:text-[var(--forest)] transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/nature/marshside-rspb"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center rounded-lg bg-[var(--forest)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--marsh)] transition"
            >
              Visit Marshside
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
