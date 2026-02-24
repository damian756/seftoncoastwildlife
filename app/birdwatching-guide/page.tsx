import Link from "next/link";
import type { Metadata } from "next";
import { getWikipediaImage } from "@/lib/wikipedia";

const title = "Birdwatching on the Sefton Coast — Guide, Best Spots & What to Bring";
const description =
  "Where to go birdwatching on the Sefton Coast — Marshside RSPB, Hesketh Out Marsh, Ainsdale NNR. What to bring, when to go and what you'll see each season.";
const url = "https://seftoncoastwildlife.co.uk/birdwatching-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url,
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
};

export default async function BirdwatchingGuidePage() {
  const heroImage = await getWikipediaImage("Western marsh harrier");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {heroImage && (
        <div className="relative h-72 md:h-96 w-full overflow-hidden bg-[var(--dune)]">
          <img
            src={heroImage.src}
            alt="Marsh Harrier — a regular sight over the Sefton Coast marshes"
            className="w-full h-full object-cover"
          />
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
        <nav className="text-sm text-[var(--slate)]/60 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[var(--marsh)] transition">Home</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">Birdwatching guide</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
          Birdwatching on the Sefton Coast
        </h1>
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">
          The Sefton Coast is one of the best places in the North West for birds. Not just in a polite, regional-comparison way — it's genuinely excellent. In winter you can stand at Marshside and watch 80,000 pink-footed geese come off the estuary. In summer, Little Terns nest on the beach a few miles from Liverpool. You don't have to go to Norfolk.
        </p>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Best spots</h2>

        <div className="space-y-5 mb-10">
          <div className="rounded-xl border border-[var(--dune)] bg-white p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[var(--forest)]">Marshside RSPB Reserve</h3>
              <span className="text-xs bg-[var(--forest)] text-white px-2 py-0.5 rounded font-medium flex-shrink-0">Best overall</span>
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Managed lagoons and scrapes on the edge of the Ribble Estuary. Free entry. Two hides. Waders, wildfowl and in winter, Pink-footed Geese in numbers you won't believe until you see them. Go in the morning — better light and the geese are still on the fields.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: PR9 9PH · Free entry · Dogs on leads</p>
            <Link href="/nature/marshside-rspb" className="text-xs text-[var(--marsh)] font-medium hover:underline mt-1 block">Full guide to Marshside →</Link>
          </div>

          <div className="rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Hesketh Out Marsh (RSPB)</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              A short drive north of Marshside. The outer marsh holds good numbers of waders at passage — Knot, Bar-tailed Godwit and Grey Plover in autumn. Views over the Ribble are excellent. Less visited than Marshside, which is sometimes an advantage.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: PR9 8DS · Free entry</p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Ainsdale NNR</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Managed by Natural England. Dune slack habitat holds Natterjack Toads (spring evenings) and a range of dune-specialist insects. Breeding Stonechats and Linnets on the scrub edge. The pine woodland section can be good for Crossbill in irruption years.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: PR8 3RF · Free entry · Permits required for restricted areas</p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Formby (National Trust) — beach and pinewoods</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              The beach is good for tideline waders — Sanderling and Dunlin year-round, Purple Sandpiper occasionally on the rocks in winter. Little Terns nest at Ainsdale in summer. The pinewoods are the place for Red Squirrel and woodland species — Treecreeper, Coal Tit and occasional Woodcock.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: L37 1YH · NT car park charge · Dogs allowed</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Seasonal calendar</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--forest)] text-white">
                <th className="text-left px-3 py-2 rounded-tl-lg">Season</th>
                <th className="text-left px-3 py-2">Highlights</th>
                <th className="text-left px-3 py-2 rounded-tr-lg">Best site</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dune)]">
              <tr className="bg-sky-50">
                <td className="px-3 py-2 font-medium text-sky-800">Oct – Mar</td>
                <td className="px-3 py-2 text-[var(--slate)]">Pink-footed Geese, Teal, Wigeon, Pintail, Short-eared Owl, Ruff, Golden Plover</td>
                <td className="px-3 py-2 text-[var(--slate)]">Marshside</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-amber-700">Apr – Jun</td>
                <td className="px-3 py-2 text-[var(--slate)]">Breeding Avocets, Little Terns, Sedge Warbler, Reed Bunting, Lapwing, Redshank</td>
                <td className="px-3 py-2 text-[var(--slate)]">Marshside, Ainsdale beach</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="px-3 py-2 font-medium text-emerald-700">Jul – Sep</td>
                <td className="px-3 py-2 text-[var(--slate)]">Wader passage — Greenshank, Green Sandpiper, Little Stint, Curlew Sandpiper, Black-tailed Godwit</td>
                <td className="px-3 py-2 text-[var(--slate)]">Marshside, Hesketh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          You don't need expensive gear to start birdwatching on the Sefton Coast. A pair of 8×42 binoculars and a field guide will cover 90% of what you'll see. Upgrade the scope later when you've decided you're hooked.
        </p>
        <div className="space-y-3 mb-10">
          {[
            { item: "Binoculars", rec: "8×42 is the standard. Celestron Nature DX or Kowa YF are decent entry points under £150. Swarovski if you've made a commitment." },
            { item: "Field guide", rec: "Collins Bird Guide. Not the pocket version — the full one. The waders in particular are worth having on paper." },
            { item: "Scope and tripod", rec: "Worth it once you're doing regular winter visits. Marshside in January is much better with magnification." },
            { item: "Layers", rec: "The sea wall at Marshside is exposed. In winter, dress for a boat trip and you'll be about right." },
            { item: "Wellies or walking boots", rec: "Paths are generally firm but field edges can be muddy. Trainers are fine for the hides in summer." },
            { item: "Thermos", rec: "There's nowhere to get a coffee at Marshside. Plan accordingly." },
          ].map(({ item, rec }) => (
            <div key={item} className="flex gap-3 text-sm">
              <span className="text-[var(--marsh)] mt-0.5 flex-shrink-0">▸</span>
              <span className="text-[var(--slate)]"><strong className="text-[var(--slate)]">{item}</strong> — {rec}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">If you're just starting out</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Go to Marshside. Walk the sea wall path to the main hide. Sit for twenty minutes. You'll see more species than you expect, even in summer. In autumn and winter you may see things that make you want to come back every weekend. That's how it usually goes.
        </p>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Don't worry about identifying everything. Write down what you see — even rough descriptions — and look it up afterwards. The Collins Guide and the Merlin app (free) will cover most of what you encounter. Ask other birders at the hide; they'll usually be pleased you're interested.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          Sometimes you stand in the rain for two hours and see nothing. That's birdwatching. Come back tomorrow.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB guide →</Link>
          <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline text-sm">Bird species database →</Link>
          <Link href="/seasonal/pink-footed-geese" className="text-[var(--marsh)] font-medium hover:underline text-sm">Pink-footed Geese guide →</Link>
          <Link href="/seasonal/wader-migration" className="text-[var(--marsh)] font-medium hover:underline text-sm">Wader migration guide →</Link>
        </div>
      </div>
    </>
  );
}
