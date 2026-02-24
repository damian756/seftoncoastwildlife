import Link from "next/link";
import type { Metadata } from "next";
import { getAllSpecies } from "@/lib/species";

const title = "Sefton Coast Wildlife — Birds, Nature & Wildlife Guide";
const description = "Independent guide to wildlife on the Sefton Coast — Marshside RSPB, bird species database, insects, plants and mammals from Southport to Formby.";
const url = "https://seftoncoastwildlife.co.uk";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://seftoncoastwildlife.co.uk/#website",
      url: "https://seftoncoastwildlife.co.uk",
      name: "Sefton Coast Wildlife",
      description: "Independent guide to wildlife on the Sefton Coast — birds, insects, plants and mammals from Southport to Formby.",
      publisher: { "@id": "https://seftoncoastwildlife.co.uk/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": "https://seftoncoastwildlife.co.uk/#organization",
      name: "Sefton Coast Wildlife",
      url: "https://seftoncoastwildlife.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://seftoncoastwildlife.co.uk/og-default.png",
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://www.southportguide.co.uk",
        "https://www.formbyguide.co.uk",
        "https://www.seftonlinks.com",
        "https://seftoncoast.network",
        "https://www.linkedin.com/company/churchtownmedia",
        "https://churchtownmedia.co.uk",
      ],
    },
  ],
};

export default function HomePage() {
  const birdCount = getAllSpecies("birds").length;
  const insectCount = getAllSpecies("insects").length;
  const plantCount = getAllSpecies("plants").length;
  const mammalCount = getAllSpecies("mammals").length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-16">
        <p className="text-sm font-medium text-[var(--marsh)] uppercase tracking-wider mb-2">
          Sefton Coast · Merseyside
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--forest)] leading-tight mb-4">
          Wildlife on the Sefton Coast
        </h1>
        <p className="text-lg text-[var(--slate)] max-w-2xl mb-8">
          An independent guide to the birds, insects, plants and mammals you’ll find on the marshes, 
          reserves and coastline from Southport to Formby — including Marshside RSPB Reserve.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/nature/marshside-rspb"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--forest)] px-5 py-2.5 text-white font-medium hover:bg-[var(--marsh)] transition"
          >
            Marshside RSPB Reserve
          </Link>
          <Link
            href="/birds"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--forest)] px-5 py-2.5 text-[var(--forest)] font-medium hover:bg-[var(--dune)] transition"
          >
            Bird species database
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { href: "/birds", label: "Birds", count: birdCount, desc: "Waders, wildfowl, raptors and passerines" },
          { href: "/insects", label: "Insects", count: insectCount, desc: "Butterflies, moths and invertebrates" },
          { href: "/plants", label: "Plants", count: plantCount, desc: "Saltmarsh and dune flora" },
          { href: "/mammals", label: "Mammals", count: mammalCount, desc: "Including red squirrels at Formby" },
        ].map(({ href, label, count, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow-md transition"
          >
            <span className="text-2xl font-bold text-[var(--forest)]">{count}</span>
            <h2 className="mt-1 font-semibold text-[var(--slate)]">{label}</h2>
            <p className="mt-1 text-sm text-[var(--slate)]/80">{desc}</p>
          </Link>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">From the blog</h2>
        <p className="text-[var(--slate)] mb-4 text-sm">
          Conservation, species spotlights, seasonal watching and more — written by Ed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--forest)] px-5 py-2.5 text-[var(--forest)] font-medium text-sm hover:bg-[var(--dune)] transition"
        >
          Read the blog →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Nature & coast</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] hover:underline font-medium">
              Marshside RSPB Reserve
            </Link>
            <span className="text-[var(--slate)]/80"> — Parking, access, what to bring</span>
          </li>
          <li>
            <Link href="/nature/sefton-coast" className="text-[var(--marsh)] hover:underline font-medium">
              The Sefton Coast
            </Link>
            <span className="text-[var(--slate)]/80"> — Geography and habitats</span>
          </li>
          <li>
            <Link href="/birdwatching-guide" className="text-[var(--marsh)] hover:underline font-medium">
              Birdwatching guide
            </Link>
            <span className="text-[var(--slate)]/80"> — Best spots, seasons, kit</span>
          </li>
          <li>
            <Link href="/seasonal" className="text-[var(--marsh)] hover:underline font-medium">
              Seasonal guides
            </Link>
            <span className="text-[var(--slate)]/80"> — Pink-footed geese, waders, migration</span>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}
