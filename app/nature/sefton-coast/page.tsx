import Link from "next/link";
import type { Metadata } from "next";
import { getWikipediaImage } from "@/lib/wikipedia";

const title = "The Sefton Coast — Geography, Habitats & Wildlife";
const description =
  "The Sefton Coast stretches from the Mersey to the Ribble — saltmarsh, sand dunes, pinewoods and some of the best birdwatching in northwest England.";
const url = "https://seftoncoastwildlife.co.uk/nature/sefton-coast";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "The Sefton Coast",
  description:
    "A 21-mile stretch of coastline between Merseyside and Lancashire — sand dunes, saltmarsh, pinewoods and internationally important wildlife reserves.",
  url,
  geo: { "@type": "GeoCoordinates", latitude: 53.55, longitude: -3.06 },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sefton",
    addressRegion: "Merseyside",
    addressCountry: "GB",
  },
  touristType: ["Nature lovers", "Birdwatchers", "Walkers", "Families"],
};

export default async function SeftonCoastPage() {
  const heroImage = await getWikipediaImage("Pied avocet");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {heroImage && (
        <div className="relative h-72 md:h-96 w-full overflow-hidden bg-[var(--dune)]">
          <img
            src={heroImage.src}
            alt="Avocet — a wading bird of the Sefton Coast marshes"
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
          <Link href="/nature" className="hover:text-[var(--marsh)] transition">Nature</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">The Sefton Coast</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
          The Sefton Coast
        </h1>
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">
          Twenty-one miles of coastline between the Mersey and the Ribble. Saltmarsh, sand dunes, pinewoods, managed reserves and one of the most important stretches of coastal habitat in England. Not many people outside the North West know it exists. That's their loss.
        </p>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-3">Where it is</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed text-sm">
          The Sefton Coast runs along the Lancashire and Merseyside shoreline from Crosby in the south to Southport in the north — taking in Formby, Ainsdale, and the Ribble Estuary at the top end. It sits on the edge of two major conurbations (Liverpool and Manchester are both within an hour) but feels entirely separate from both.
        </p>
        <p className="text-[var(--slate)] mb-8 leading-relaxed text-sm">
          The whole stretch is designated as a Site of Special Scientific Interest (SSSI). Large portions are managed by the National Trust, RSPB, Natural England and the Sefton Council ranger service. It's one of the few places in lowland England where you can still see nationally rare habitats in reasonable condition.
        </p>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Key habitats</h2>

        <div className="space-y-6 mb-10">
          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Saltmarsh and managed lagoons — Marshside & Crossens</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              At the northern end of the coast, the RSPB manages two reserves at Marshside and Hesketh Out Marsh. Tidal creeks, managed scrapes and saltmarsh grassland hold huge numbers of waders and wildfowl through winter. Pink-footed Geese from Iceland arrive in October — at peak, 80,000+ can be present on the Ribble. Breeding Avocets, Lapwing and Redshank nest here in summer.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Sand dunes — Ainsdale NNR and Formby</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The dune system at Ainsdale is one of the most extensive in England — mobile yellow dunes at the seaward edge, fixed grey dunes further back, and dune slacks (wet hollows between the ridges) that support nationally rare plants and the only natural breeding population of Natterjack Toad in the North West.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Rare dune plants including Grass of Parnassus, Round-leaved Wintergreen and Dune Helleborine grow at Ainsdale NNR. Access is managed — check Natural England's guidance before visiting the most sensitive areas.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Pinewoods — Formby (National Trust)</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Planted Victorian pinewoods at Formby now support one of the last viable populations of Red Squirrel in England. The NT manages the site for squirrel conservation — Grey Squirrel control is an ongoing requirement for the population's survival. Red Squirrels are most active and visible from September through to February.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              The pinewoods also hold Woodcock, Treecreeper and Lesser Spotted Woodpecker in the older sections. Worth exploring beyond the squirrel trail if you have the time.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">The beach and intertidal zone</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Formby Beach is managed by the National Trust. The intertidal zone — the stretch exposed at low tide — is significant for roosting and feeding waders. Sanderling, Dunlin and Ringed Plover work the tideline year-round. Little Tern colonies nest on the beach at Ainsdale each summer — the colony is one of the most important in England and is wardened by the RSPB.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Wildlife summary</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { category: "Birds", stat: "119 species recorded", detail: "Including 42 winter visitors and 13 breeding summer species", href: "/birds" },
            { category: "Insects", stat: "61 species recorded", detail: "One of the richest invertebrate assemblages in the North West", href: "/insects" },
            { category: "Plants", stat: "52 species recorded", detail: "Including nationally rare dune and marsh flora", href: "/plants" },
            { category: "Mammals", stat: "25 species recorded", detail: "Red Squirrel, Grey Seal, Natterjack Toad and more", href: "/mammals" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-4 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] hover:shadow-sm transition"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--marsh)]">{item.category}</span>
              <p className="font-semibold text-[var(--forest)] mt-1">{item.stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-0.5">{item.detail}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Conservation</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          The Sefton Coast faces the same pressures as coastal habitats everywhere — sea level rise, erosion, visitor pressure and invasive species. The dune system is naturally eroding at the seaward edge while scrubbing over at the landward side. Both processes reduce habitat quality for dune specialists.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          Active management — scrub removal, grazing by cattle and rabbits, Natterjack Toad egg-string translocations, Little Tern wardening — keeps the system in better condition than it would otherwise be. It's unglamorous work and it makes a difference.
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB Reserve →</Link>
          <Link href="/birdwatching-guide" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birdwatching guide →</Link>
          <a href="https://www.formbyguide.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] font-medium hover:underline text-sm">FormbyGuide — pinewoods & red squirrels →</a>
          <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] font-medium hover:underline text-sm">SouthportGuide →</a>
        </div>
      </div>
    </>
  );
}
