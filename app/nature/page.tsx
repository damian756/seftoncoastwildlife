import Link from "next/link";

import type { Metadata } from "next";

const title = "Nature Reserves on the Sefton Coast";
const description = "Guides to the Sefton Coast's best nature reserves: Marshside RSPB, Ainsdale Sand Dunes NNR, WWT Martin Mere, Seaforth and more.";
const url = "https://www.seftoncoastwildlife.co.uk/nature";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const reserves = [
  {
    href: "/nature/marshside-rspb",
    name: "Marshside RSPB Reserve",
    tag: "RSPB · Paid car park · Southport",
    desc: "On the Ribble Estuary, which Natural England says holds up to 250,000 birds a year. Pink-footed Geese and Wigeon in winter, managed lagoons and breeding Avocets in summer.",
  },
  {
    href: "/nature/ainsdale-sand-dunes",
    name: "Ainsdale Sand Dunes NNR",
    tag: "Natural England · Free entry · Ainsdale",
    desc: "Natterjack toads, sand lizards and rare dune plants on one of Europe's most important dune systems. Almost nobody comes here. That's the point.",
  },
  {
    href: "/nature/martin-mere",
    name: "WWT Martin Mere",
    tag: "WWT · Entry charge · Burscough",
    desc: "Up to 1,000 whooper swans arrive from Iceland in November. Flamingos, otters, and a proper day out any time of year.",
  },
  {
    href: "/nature/seaforth-nature-reserve",
    name: "Seaforth Nature Reserve",
    tag: "Wildlife Trust · Free entry · Crosby",
    desc: "Mediterranean Gulls breeding, Little Terns nesting, and autumn rarities, squeezed between a container terminal and the suburbs of Liverpool.",
  },
  {
    href: "/nature/sefton-coast",
    name: "The Sefton Coast",
    tag: "Overview",
    desc: "Geography, habitats and how all the reserves fit together along the 22-mile Sefton Coast.",
  },
];

export default function NaturePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-2">Nature Reserves</h1>
      <p className="text-[var(--slate)] mb-8 max-w-2xl">
        The Sefton Coast has some of the best wildlife sites in the North West, from RSPB managed lagoons to internationally designated sand dunes. Here&apos;s where to go and what to see.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {reserves.map(({ href, name, tag, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
          >
            <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">{tag}</p>
            <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">{name}</h2>
            <p className="text-[var(--slate)] text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
        <Link
          href="/birdwatching-guide"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">Birdwatching guide</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Best spots, seasons and kit for the Sefton Coast.</p>
        </Link>
        <Link
          href="/seasonal"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">Seasonal guides</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Pink-footed geese, waders, migration and what to see when.</p>
        </Link>
      </div>
    </div>
  );
}
