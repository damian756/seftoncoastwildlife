import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";

// Rebuilt at most once a day, so an advertising sponsor whose `until` has passed drops off within a day.
export const revalidate = 86400;

const title = "Seasonal Wildlife Guides for the Sefton Coast";
const description = "What to see when on the Sefton Coast: pink-footed geese, wader migration, breeding birds and winter wildfowl.";
const url = "https://www.seftoncoastwildlife.co.uk/seasonal";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seasons = [
  {
    slug: "pink-footed-geese",
    title: "Pink-footed Geese",
    period: "October – March",
    desc: "Thousands of Pink-footed Geese arrive from Iceland each autumn, and Natural England says up to 250,000 birds a year use the Ribble Estuary.",
    tag: "Peak season",
  },
  {
    slug: "wader-migration",
    title: "Wader Migration",
    period: "Spring & Autumn",
    desc: "Dunlin, Curlew Sandpiper, Little Stint and Black-tailed Godwit: the scrapes fill with birds that have crossed continents.",
    tag: "April–May & Jul–Oct",
  },
  {
    slug: "breeding-birds",
    title: "Breeding Birds",
    period: "April – July",
    desc: "Avocets on the Marshside scrapes, Little Terns at Ainsdale, Sedge Warblers and Reed Buntings on the marsh edge.",
    tag: "Nesting season",
  },
  {
    slug: "winter-wildfowl",
    title: "Winter Wildfowl",
    period: "November – February",
    desc: "Teal, Wigeon, Pintail and Shoveler pack the lagoons. Short-eared Owls quarter the saltmarsh at dusk.",
    tag: "Winter guide",
  },
];

export default function SeasonalPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Seasonal guides</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Year-round watching
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Seasonal guides</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            When to visit the Sefton Coast for specific wildlife, from the winter geese on the Ribble to spring wader passage and summer breeders.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <ul className="grid gap-5 md:grid-cols-2">
          {seasons.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/seasonal/${s.slug}`}
                className="card-hover group block p-6 rounded-2xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)]/50"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--marsh)] bg-[var(--marsh)]/10 px-2 py-0.5 rounded-full mb-3">
                  {s.tag}
                </span>
                <h2 className="font-display text-xl font-bold text-[var(--forest)] group-hover:text-[var(--marsh)] transition mb-1">
                  {s.title}
                </h2>
                <p className="text-xs text-[var(--slate)]/60 mb-3">{s.period}</p>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Section sponsor: after the guides */}
        <AdSlot id="section-seasonal" className="mt-10" />
      </div>
    </>
  );
}
