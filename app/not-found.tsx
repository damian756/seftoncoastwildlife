import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Sefton Coast Wildlife",
  description: "That page doesn't exist. Browse birds, mammals, insects and plants recorded on the Sefton Coast.",
};

const SPECIES_LINKS = [
  { href: "/birds",   label: "Birds" },
  { href: "/mammals", label: "Mammals" },
  { href: "/insects", label: "Insects" },
  { href: "/plants",  label: "Plants" },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">

        <div className="text-7xl mb-4 select-none">🦅</div>

        <h1 className="text-3xl font-bold text-[var(--forest)] mb-3">
          Page not found
        </h1>
        <p className="text-[var(--slate)] mb-8 leading-relaxed">
          That species or page doesn&apos;t exist. It may have moved or never been recorded here.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[var(--forest)] hover:bg-[var(--marsh)] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm mb-10"
        >
          Back to home
        </Link>

        <div className="border-t border-[var(--marsh)]/20 pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--marsh)] mb-5">
            Browse species
          </p>
          <div className="flex justify-center gap-6">
            {SPECIES_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[var(--marsh)] hover:text-[var(--forest)] font-semibold hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
