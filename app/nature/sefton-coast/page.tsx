import Link from "next/link";
import type { Metadata } from "next";
import { ClickableImage } from "@/components/ClickableImage";
import { SourceList } from "@/components/SourceList";
import { getAllSpecies } from "@/lib/species";
import { SITE_GUIDES } from "@/lib/site-guides";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";

const title = "The Sefton Coast: Habitats, Wildlife and Where to Go";
const description =
  "An overview of the Sefton Coast from the Ribble to the Mersey: saltmarsh, sand dunes, pinewoods and beaches, what each protects, and guides to each site north to south, then WWT Martin Mere inland.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/sefton-coast";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Sefton Coast Wildlife",
    type: "article",
    images: [{ url: "https://www.seftoncoastwildlife.co.uk/images/blog/beachcombing/compass-jellyfish-dogprints-ainsdale.webp" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "The Sefton Coast",
  description:
    "Sefton's 22-mile natural coastline between the Mersey and the Ribble: sand dunes, beaches, saltmarsh and pinewoods, much of it protected as the Sefton Coast SSSI.",
  url,
  address: { "@type": "PostalAddress", addressLocality: "Sefton", addressRegion: "Merseyside", addressCountry: "GB" },
};

const sources = [
  used(SRC.seftonVisitingBeaches, "the 22-mile length of Sefton's natural coastline"),
  used(SRC.neSeftonSsssiCitation, "the SSSI's extent, habitats, waders, reptiles and amphibians, Formby Point's erosion, pine plantations and scrub"),
  used(SRC.neSeftonSacCitation, "the creeping willow dune slacks"),
  used(SRC.jnccRibbleAltRamsar, "the share of the British natterjack population"),
  used(SRC.neRibbleSsssiCitation, "the Ribble's saltmarsh and the Southport Sanctuary"),
  used(SRC.neMerseysideNnrs, "the number of birds on the Ribble Estuary NNR"),
  used(SRC.ntFormby, "Red Squirrels in the Formby pinewoods and the Trust's dune restoration"),
  used(SRC.lwtSquirrelPox, "the 2026 squirrel pox outbreak"),
  used(SRC.seftonCalendar, "the three key roost areas and Green Sefton's winter scrub clearance and grazing"),
];

export default function SeftonCoastPage() {
  const counts = {
    birds: getAllSpecies("birds").length,
    insects: getAllSpecies("insects").length,
    plants: getAllSpecies("plants").length,
    mammals: getAllSpecies("mammals").length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]">
        <ClickableImage
          src="/images/blog/beachcombing/compass-jellyfish-dogprints-ainsdale.webp"
          alt="A compass jellyfish stranded on the Ainsdale tideline with dog paw prints in the wet sand"
          className="w-full h-full object-cover object-center"
          caption="The tideline at Ainsdale in winter."
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">The Sefton Coast</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Overview · Ribble to Mersey
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">The Sefton Coast</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Sefton Council puts its natural coastline at 22 miles. The Sefton Coast SSSI covers more than 20km of it between Southport and Crosby: sand and mudflats, mobile dunes, dune slacks, dune heath and small areas of saltmarsh, with the Ribble Estuary to the north.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Where to go</p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Coast sites north to south, then WWT Martin Mere inland</h2>
        <ol className="space-y-3 mb-4">
          {SITE_GUIDES.map((g) => (
            <li key={g.href} className="rounded-xl border border-[var(--dune)] bg-white p-4">
              <Link href={g.href} className="font-semibold text-[var(--forest)] hover:text-[var(--marsh)]">{g.name}</Link>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--marsh)] mt-0.5">{g.tag}</p>
              <p className="text-sm text-[var(--slate)] leading-relaxed mt-1">{g.desc}</p>
            </li>
          ))}
        </ol>
        <p className="text-sm text-[var(--slate)] mb-10">
          Also: <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] underline underline-offset-2">what to see month by month</Link> and{" "}
          <Link href="/nature/designations" className="text-[var(--marsh)] underline underline-offset-2">the coast&apos;s protected-site designations</Link>.
        </p>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Habitats</p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">How the coast fits together</h2>

        <div className="space-y-6 mb-10">
          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Saltmarsh and the Ribble Estuary</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
              The Ribble Estuary SSSI citation describes extensive intertidal sand and silt flats with one of the largest areas of grazed &lsquo;greenmarsh&rsquo; in Britain. Most of the Sefton foreshore outside the National Nature Reserve is covered by the Southport Sanctuary, a statutory bird sanctuary since 1956 that gives Pink-footed Geese a protected low-tide roost. Natural England says up to a quarter of a million birds use the estuary each year. The RSPB manages{" "}
              <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] underline underline-offset-2">Marshside</Link> and{" "}
              <Link href="/nature/hesketh-out-marsh" className="text-[var(--marsh)] underline underline-offset-2">Hesketh Out Marsh</Link> within it.
            </p>
            <div className="relative h-52 rounded-lg overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/hero-coastal-reflection.jpg"
                alt="The saltmarsh path at Marshside, with sky and clouds reflected in a tidal pool and a walker in the distance"
                className="w-full h-full object-cover object-center"
                caption="The saltmarsh path at Marshside, February 2026."
                fill
              />
            </div>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Sand dunes and slacks</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The SSSI&apos;s dune system runs from embryo dunes on the strandline through mobile marram dunes to fixed dunes, dune grassland and dune heath, with wet slacks most frequent in the north. Natural England&apos;s SAC citation estimates that 43% of England&apos;s main creeping willow dune-slack community is here. The Ramsar information sheet says the site supports up to 40% of Great Britain&apos;s natterjack toads, and the SSSI citation notes that the coast&apos;s sand lizards, at the north-western edge of their natural range, are distinct from the southern colonies.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2 mb-4">
              Guides:{" "}
              <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] underline underline-offset-2">Ainsdale Sand Dunes NNR</Link>,{" "}
              <Link href="/nature/birkdale-green-beach" className="text-[var(--marsh)] underline underline-offset-2">Birkdale Green Beach and the Sandhills LNR</Link>.
            </p>
            <div className="relative h-52 rounded-lg overflow-hidden">
              <ClickableImage
                src="/images/blog/beachcombing/sea-spurge-ainsdale-dunes.webp"
                alt="Sea spurge on the Ainsdale sand dunes"
                className="w-full h-full object-cover object-center"
                caption="Sea spurge on the Ainsdale dunes. The sap is toxic; do not handle."
                fill
              />
            </div>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">Pinewoods</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The SSSI citation notes that parts of the dunes have been changed by golf courses, sand-winning and extensive pine plantations. The National Trust says the pinewoods at Formby are home to Red Squirrels. The Wildlife Trust confirmed a squirrel pox outbreak in Formby in July 2026 and asks people to remove feeders. See the{" "}
              <Link href="/nature/formby-point" className="text-[var(--marsh)] underline underline-offset-2">Formby Point guide</Link>.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--dune)] p-5">
            <h3 className="font-bold text-[var(--forest)] mb-2">The beach and the waders</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The SSSI citation lists internationally important wintering populations of Grey Plover, Knot, Sanderling and Bar-tailed Godwit on the foreshore, with Oystercatcher and Dunlin in nationally important numbers, and internationally important numbers of Ringed Plover and Sanderling on passage. Sefton Council names three key roost areas: off the Green Beach between Ainsdale and Birkdale, from Albert Road to the Alt at Formby, and the sandbanks off Hightown north of Hall Road. See{" "}
              <Link href="/nature/crosby-and-alt-estuary" className="text-[var(--marsh)] underline underline-offset-2">Crosby and the Alt estuary</Link>.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="relative h-44 rounded-lg overflow-hidden">
                <ClickableImage
                  src="/images/blog/beachcombing/barrel-jellyfish-ainsdale-beach.webp"
                  alt="A barrel jellyfish stranded on Ainsdale beach"
                  className="w-full h-full object-cover object-center"
                  caption="A barrel jellyfish on Ainsdale beach. Do not touch stranded jellyfish."
                  fill
                />
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden">
                <ClickableImage
                  src="/images/blog/beachcombing/mermaids-purse-held-hand-ainsdale.webp"
                  alt="A mermaid's purse egg case found on Ainsdale beach, held in a hand"
                  className="w-full h-full object-cover object-center"
                  caption="A mermaid's purse found on Ainsdale beach."
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Species pages</p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Wildlife on this site</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { category: "Birds", stat: `${counts.birds} species pages`, href: "/birds" },
            { category: "Insects", stat: `${counts.insects} species pages`, href: "/insects" },
            { category: "Plants", stat: `${counts.plants} species pages`, href: "/plants" },
            { category: "Mammals and other wildlife", stat: `${counts.mammals} species pages`, href: "/mammals" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-hover block p-4 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] transition"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--marsh)]">{item.category}</span>
              <p className="font-semibold text-[var(--forest)] mt-1">{item.stat}</p>
            </Link>
          ))}
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Looking after it</p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Conservation</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          The SSSI citation says the zone around Formby Point has been eroding since 1906 while the coast to the north and south builds up, and that some dune slacks are being invaded by birch and sea buckthorn scrub.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          Sefton Council&apos;s Green Sefton teams cut back invasive scrub on the coast in winter and graze the dunes with Belted Galloway cattle and Herdwick sheep. The National Trust is restoring dune habitat at Formby, including with conservation cattle grazing this winter.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/birdwatching-guide" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birdwatching guide →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
