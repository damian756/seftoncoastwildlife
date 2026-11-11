import Link from "next/link";
import type { Metadata } from "next";
import { NATURE_REFERENCE, SITE_GUIDES } from "@/lib/site-guides";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Sefton Coast Reserve and Site Guides";
const description =
  "Guides to the Sefton Coast's reserves and birdwatching sites, north to south: Hesketh Out Marsh, Marshside, Birkdale Green Beach, Ainsdale NNR, Formby Point, Crosby and the Alt and Seaforth, then WWT Martin Mere inland.";
const url = "https://www.seftoncoastwildlife.co.uk/nature";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const card = "block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition";

export default function NaturePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-2">Reserve and site guides</h1>
      <p className="text-[var(--slate)] mb-8 max-w-2xl">
        One guide for each place birdwatchers go on this coast, listed north to south, then WWT Martin Mere inland. Each says who manages the site, how to get there and park, the paths and hides, what is seen by season, when the tide matters, the rules on access and dogs, and a link to an official page: the managing body&apos;s own page or, for Birkdale Green Beach and Crosby, Natural England&apos;s record of the site.
      </p>

      <h2 className="font-display text-xl font-bold text-[var(--forest)] mb-4">Coast sites north to south, then WWT Martin Mere inland</h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {SITE_GUIDES.map(({ href, name, tag, desc }) => (
          <Link key={href} href={href} className={card}>
            <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">{tag}</p>
            <h3 className="text-xl font-semibold text-[var(--forest)] mb-2">{name}</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
      </div>

      <h2 className="font-display text-xl font-bold text-[var(--forest)] mb-4">Planning and reference</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {NATURE_REFERENCE.map(({ href, name, tag, desc }) => (
          <Link key={href} href={href} className={card}>
            <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">{tag}</p>
            <h3 className="text-xl font-semibold text-[var(--forest)] mb-2">{name}</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
        <Link href="/birdwatching-guide" className={card}>
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h3 className="text-xl font-semibold text-[var(--forest)] mb-2">Birdwatching guide</h3>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Where to start, what to bring and what each season brings on the Sefton Coast.</p>
        </Link>
        <Link href="/seasonal" className={card}>
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h3 className="text-xl font-semibold text-[var(--forest)] mb-2">Seasonal guides</h3>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Pink-footed Geese, wader migration, breeding birds and winter wildfowl.</p>
        </Link>
      </div>
    </div>
  );
}
