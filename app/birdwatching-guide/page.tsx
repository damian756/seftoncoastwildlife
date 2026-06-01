import Link from "next/link";
import type { Metadata } from "next";
import { COTTAGES } from "@/lib/affiliate-links";

const title = "Birdwatching on the Sefton Coast — Guide, Best Spots & What to Bring";
const description =
  "Where to go birdwatching on the Sefton Coast — Marshside RSPB, Hesketh Out Marsh, Ainsdale NNR. What to bring, when to go and what you'll see each season.";
const url = "https://www.seftoncoastwildlife.co.uk/birdwatching-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Where is the best place to go birdwatching on the Sefton Coast?",
    a: "Marshside RSPB Reserve (postcode PR9 9PH) is the standout location — free entry, managed lagoons, two hides, and in winter, Pink-footed Geese in numbers you won't believe until you see them.",
  },
  {
    q: "What binoculars do I need for birdwatching at Marshside?",
    a: "8×42 binoculars cover everything you'll see from the hides. Celestron Nature DX or Kowa YF are solid entry-level options under £150. A telescope is useful in winter for picking through goose flocks on the estuary.",
  },
  {
    q: "When is the best season for birdwatching on the Sefton Coast?",
    a: "October to March for sheer spectacle — Pink-footed Geese, winter wildfowl and waders. April–June for breeding Avocets and Little Terns. July–September for southbound wader passage through the scrapes.",
  },
  {
    q: "Is birdwatching at Marshside suitable for beginners?",
    a: "Yes — it's one of the best places in the North West to start. Walk the sea wall to the main hide and sit for twenty minutes. You'll see more than you expect, even in summer. Other birders at the hides are generally happy to help with identification.",
  },
  {
    q: "Can I see Pink-footed Geese at Marshside?",
    a: "Yes. Pink-footed Geese arrive from Iceland in October and numbers peak between late October and late November at 80,000+ on the Ribble Estuary. Evening and morning flighting from the sea wall is one of the best wildlife spectacles in England.",
  },
];

const pageJsonLd = [
  {
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
      url: "https://www.seftoncoastwildlife.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Sefton Coast Wildlife",
      url: "https://www.seftoncoastwildlife.co.uk",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function BirdwatchingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Page header */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Birdwatching guide</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Practical guide · All levels
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Birdwatching on the Sefton Coast
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            The Sefton Coast is genuinely excellent for birds. In winter you can watch 80,000 Pink-footed Geese come off the estuary. In summer, Little Terns nest on the beach a few miles from Liverpool. You don&apos;t have to go to Norfolk.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Stat block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "80,000+", label: "Pink-footed Geese (peak)" },
            { stat: "4", label: "Key sites to visit" },
            { stat: "Free", label: "Entry to Marshside RSPB" },
            { stat: "Year-round", label: "Always something to see" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Best spots */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Where to go
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-6">Best spots</h2>

        <div className="space-y-5 mb-10">
          <div className="card-hover rounded-xl border border-[var(--dune)] bg-white p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[var(--forest)]">Marshside RSPB Reserve</h3>
              <span className="text-xs bg-[var(--forest)] text-white px-2 py-0.5 rounded font-medium flex-shrink-0">Best overall</span>
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Managed lagoons and scrapes on the edge of the Ribble Estuary. Free entry. Two hides. Waders, wildfowl and in winter, Pink-footed Geese in numbers you won&apos;t believe until you see them. Go in the morning — better light and the geese are still on the fields.
            </p>
            <p className="text-xs text-[var(--slate)]/60 mb-1">Postcode: PR9 9PH · Free entry · Dogs on leads</p>
            <Link href="/nature/marshside-rspb" className="text-xs text-[var(--marsh)] font-medium hover:underline block">Full guide to Marshside →</Link>
          </div>

          <div className="card-hover rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Hesketh Out Marsh (RSPB)</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              A short drive north of Marshside. The outer marsh holds good numbers of waders at passage — Knot, Bar-tailed Godwit and Grey Plover in autumn. Views over the Ribble are excellent. Less visited than Marshside, which is sometimes an advantage.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: PR9 8DS · Free entry</p>
          </div>

          <div className="card-hover rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Ainsdale NNR</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Managed by Natural England. Dune slack habitat holds Natterjack Toads (spring evenings) and dune-specialist insects. Breeding Stonechats and Linnets on the scrub edge. The pine woodland section can produce Crossbill in irruption years.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: PR8 3RF · Free entry · Permits required for restricted areas</p>
          </div>

          <div className="card-hover rounded-xl border border-[var(--dune)] bg-white p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Formby (National Trust) — beach and pinewoods</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              The beach is good for tideline waders — Sanderling and Dunlin year-round, Purple Sandpiper occasionally in winter. Little Terns nest at Ainsdale in summer. The pinewoods are the place for Red Squirrel and woodland species — Treecreeper, Coal Tit and occasional Woodcock.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: L37 1YH · NT car park charge · Dogs allowed</p>
          </div>
        </div>

        {/* Seasonal calendar */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          When to visit
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Seasonal calendar</h2>
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

        {/* Kit */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Kit list
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          You don&apos;t need expensive gear to start. A pair of 8×42 binoculars and a field guide will cover 90% of what you&apos;ll see. Upgrade the scope later when you&apos;ve decided you&apos;re hooked.
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

        {/* Beginners */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting started
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">If you&apos;re just starting out</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Go to Marshside. Walk the sea wall path to the main hide. Sit for twenty minutes. You&apos;ll see more species than you expect, even in summer. In autumn and winter you may see things that make you want to come back every weekend. That&apos;s how it usually goes.
        </p>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Don&apos;t worry about identifying everything. Write down what you see — even rough descriptions — and look it up afterwards. The Collins Guide and the Merlin app (free) will cover most of what you encounter. Ask other birders at the hide; they&apos;ll usually be pleased you&apos;re interested.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          Sometimes you stand in the rain for two hours and see nothing. That&apos;s birdwatching. Come back tomorrow.
        </p>

        {/* FAQ */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Common questions
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-6">FAQs</h2>
        <div className="space-y-5 mb-10">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[var(--dune)] pb-5 last:border-0">
              <h3 className="font-semibold text-[var(--forest)] mb-1.5 text-sm">{q}</h3>
              <p className="text-sm text-[var(--slate)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* Cottages.com — overnight visitors */}
        <div className="rounded-xl border border-[var(--dune)] bg-[var(--dune)] p-6 mb-8">
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Self-Catering Partner</p>
          <h3 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Staying Overnight?</h3>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
            The Pink-footed Geese spectacle at Marshside peaks in October and November, and the wader passage runs through autumn. If you're travelling specifically to the Sefton Coast for birding, self-catering gives you the flexibility for early starts. Cottages.com have properties across Southport and Formby.
          </p>
          <a
            href={COTTAGES.summerSale}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-[var(--forest)] hover:bg-[var(--marsh)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            Browse self-catering options →
          </a>
        </div>

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
