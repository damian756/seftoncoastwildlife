import Link from "next/link";
import type { Metadata } from "next";
import { ClickableImage } from "@/components/ClickableImage";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";

const title = "Marshside RSPB Reserve: Parking, Hides, Trails and Seasons";
const description =
  "Birdwatcher's guide to RSPB Marshside near Southport: car park hours and charges, Sandgrounders' and Nel's hides, three trails, tides, dogs and what is seen each season, from the RSPB's own page.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/marshside-rspb";

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
    images: [{ url: "https://www.seftoncoastwildlife.co.uk/images/reserves/marshside/hero-coastal-reflection.jpg" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Is there an entry charge at RSPB Marshside?",
    a: "There is no separate entry charge. The RSPB's price list shows no admission charge for adults or children. If you drive, the car park charges £1.50 for up to two hours or £3.00 for longer, and the sign at the car park says the fee covers parking, entrance to the reserve and use of the paths, hides and toilet. RSPB members and Blue Badge holders park free.",
  },
  {
    q: "What time does the Marshside car park close?",
    a: "The RSPB opens the car park from 8.30am to 4pm between 1 November and 1 March, and from 8.30am to 5pm between 2 March and 31 October. It is closed and locked outside those hours.",
  },
  {
    q: "Can I watch the geese at dusk?",
    a: "Not from a parked car once the car park has locked. For an evening visit, come on foot, by bike or by bus: the RSPB lists the No. 44 from Lord Street to Crossens via Marshside Road, getting off at the Elswick Road junction and walking 200m north. Otherwise, be back at your car before the car park locks.",
  },
  {
    q: "What is the postcode for Marshside?",
    a: "The RSPB gives Marshside, Southport, PR9 9PJ. The car park is on the coast road north of Southport, 1.5 miles (2.5km) from Southport Pier. Access to the reserve is by the toucan crossing over Marine Drive.",
  },
  {
    q: "Are dogs allowed at Marshside?",
    a: "Yes, on leads. Only assistance dogs are allowed in the hides.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "RSPB Marshside",
    description:
      "RSPB wetland reserve north of Southport on the Ribble Estuary, with two hides, a viewing platform, screens and three trails.",
    url,
    isAccessibleForFree: true,
    geo: { "@type": "GeoCoordinates", latitude: 53.677028, longitude: -2.9813894 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marshside",
      addressLocality: "Southport",
      postalCode: "PR9 9PJ",
      addressCountry: "GB",
    },
    telephone: "01704 211690",
    sameAs: SRC.rspbMarshside.url,
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

const sources = [
  used(SRC.rspbMarshside, "address, grid reference, directions, car park hours and charges, entry prices, hides, screens, platform, trails, toilet, dogs, education sessions and the wildlife in summer and winter"),
  used(SRC.neMerseysideNnrs, "Marshside as part of the Ribble Estuary NNR, its joint management, the 12km embankment path and access limited to rights of way"),
  used(SRC.neRibbleAltSpaCitation, "saltmarshes and grazing marshes used as high-tide roosts, and the species the SPA protects"),
  used(SRC.rspbBlackTailedGodwit, "Marshside among the RSPB's places to see Black-tailed Godwits"),
];

export default function MarshsidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]">
        <ClickableImage
          src="/images/reserves/marshside/hero-coastal-reflection.jpg"
          alt="The saltmarsh path at Marshside, with sky and clouds reflected in a tidal pool and a dog walker in the distance"
          className="w-full h-full object-cover object-center"
          caption="The saltmarsh path at Marshside, February 2026."
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
            <span className="text-white/80">Marshside RSPB</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB reserve · Southport · Ribble Estuary NNR
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Marshside RSPB Reserve</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            A wetland reserve on the edge of the Ribble Estuary, north of Southport town centre. The RSPB has two hides, a raised viewing platform, three screens and three trails here. Avocets and Lapwings nest on the islands in summer; in winter the skies fill with Pink-footed Geese and Wigeons.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "PR9 9PJ", label: "Postcode (RSPB)" },
            { stat: "No charge", label: "Entry; parking is paid" },
            { stat: "4pm", label: "Car park locks, 1 Nov to 1 Mar" },
            { stat: "2 hides", label: "Sandgrounders' and Nel's" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <SiteGuideFacts
          name="Marshside"
          checked="11 November 2026"
          managedBy={
            <>
              The RSPB. Marshside is part of the Ribble Estuary National Nature Reserve, which Natural England says is managed jointly by Natural England, the RSPB and the Lytham and District Wildfowlers Association. RSPB reserve team: 01704 211690.
            </>
          }
          official={[{ label: "RSPB: Marshside Nature Reserve", url: SRC.rspbMarshside.url }]}
          gettingThere={[
            <>By car: from Southport, follow the coast road north for 1.5 miles (2.5km) from Southport Pier to the small car park by the sand works. Postcode PR9 9PJ; grid reference SD 3527 2051; what3words slam.relate.host.</>,
            <>By bus: the RSPB lists the No. 44 from Southport (War Memorial, Lord Street) to Crossens via Marshside Road, every 15 minutes. Get off at the Elswick Road junction and walk 200m north along Marshside Road.</>,
            <>By train: from Southport station, the RSPB&apos;s walking route goes down London Street, across Lord Street and along Nevill Street to the Promenade, north beside Marine Lake, then by Fairway onto Marine Drive. The reserve begins at Hesketh Road, 0.6 miles further on.</>,
            <>By bike: the National Cycle Network&apos;s traffic-free route from Liverpool to Southport uses the wide pavement beside Marine Drive through the reserve. Bike racks are outside Sandgrounders&apos; hide.</>,
          ]}
          parking={[
            <>Car park open 8.30am to 4pm from 1 November to 1 March, and 8.30am to 5pm from 2 March to 31 October. It is closed and locked outside those hours.</>,
            <>£1.50 for up to two hours, £3.00 for over two hours, paid at the ticket machine; no need to book. RSPB members and Blue Badge holders park free.</>,
            <>Uneven ground, unmarked spaces and no lighting. No overnight parking or camping. Not suitable for coaches or buses: call 01704 211690 about coach parking.</>,
            <>You reach the reserve from the car park by the toucan crossing over Marine Drive.</>,
          ]}
          paths={[
            <>Sandgrounders&apos; hide is the main hide, with panoramic views over Marshside, an adjustable telescope when staff or volunteers are there, and displays including tide times and heights. It is 300m from the car park on a level, surfaced path.</>,
            <>Nel&apos;s hide is 560m from the car park on the same kind of path. Both hides have level entry, 1m doors, movable seating and space for wheelchair users. In November 2026 the RSPB lists the hides as open 8.30am to 4pm.</>,
            <>Three viewing screens (two with low viewing slots) and a raised viewing platform, ramped with handrails, are open at all times.</>,
            <>Sutton&apos;s Trail: 3 miles (4.5km), at least two hours, rough and unsurfaced, with one stile. Rimmer&apos;s Trail: 2 miles (3km), at least two hours, with a kissing gate and two road crossings. Redshank Road: 0.5 miles (0.8km), at least an hour, an uneven track across the tidal marsh. A trail map is available from Sandgrounders&apos; hide.</>,
            <>A portable toilet outside Sandgrounders&apos; hide is open in line with the seasonal opening times. There is no café, shop, running water or baby changing; the RSPB says the nearest food and drink is in Marshside, 1 mile away, or Southport, 2 miles away.</>,
            <>Natural England describes a footpath of more than 12km along the flood embankment from Marshside past Crossens and Hundred End to <Link href="/nature/hesketh-out-marsh" className="text-[var(--marsh)] underline underline-offset-2">Hesketh Out Marsh</Link>.</>,
          ]}
          seasons={[
            {
              season: "Winter",
              text: "The RSPB says the skies fill with Pink-footed Geese and Wigeons. When a Kestrel or Peregrine arrives, large flocks of Golden Plovers, Wigeons and Lapwings rise up together. Natural England names the Pink-footed Geese from Iceland and the Wigeon from Siberia as the winter spectacle of the Ribble Estuary NNR.",
              birds: ["pink-footed-goose", "wigeon", "golden-plover", "lapwing"],
            },
            {
              season: "Spring and summer",
              text: "Avocets and Lapwings nest on the islands, and in spring the Lapwings chase off predators that come too close to their nests (RSPB). Across the Ribble Estuary NNR, Natural England lists breeding gulls, terns, Redshanks, Avocets, Lapwings and Skylarks.",
              birds: ["avocet", "lapwing", "redshank"],
            },
            {
              season: "Late summer and autumn",
              text: "Waders and terns heading south after breeding begin to build in July, migration approaches its peak on the coast in August, and Pink-footed Geese begin to arrive from Iceland in September. The RSPB lists Marshside among the places to see Black-tailed Godwits.",
              birds: ["black-tailed-godwit", "pink-footed-goose"],
            },
          ]}
          tide={[
            <>The Redshank Road route crosses tidal marshes: the RSPB asks you to check tide times before using it.</>,
            <>Natural England restricts access on the saltmarsh and mudflats to public rights of way, because of their dangerous nature and fragility.</>,
            <>The Ribble and Alt Estuaries SPA citation says the saltmarshes and coastal grazing marshes are used as high-tide roosts, so higher tides bring birds off the open estuary. Sandgrounders&apos; hide displays tide times and heights.</>,
          ]}
          access={[
            <>The RSPB&apos;s opening times show the reserve itself open all day, with the car park, hides and toilet on the hours above.</>,
            <>Barbecues are not permitted at any time.</>,
            <>Groups of 10 or more can book, and guided walks are available. For schools, the RSPB runs curriculum-linked outdoor education sessions at its Fairhaven Lake Visitor Centre: call 01704 211690.</>,
          ]}
          dogs={[
            <>Dogs are welcome on the reserve but must be on leads.</>,
            <>Assistance dogs only in the hides; assistance dogs are welcome in all parts of the reserve.</>,
          ]}
        />

        <section className="mt-12">
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Photographs</p>
          <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">At the reserve</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/car-park-pricing.jpg"
                alt="RSPB Marshside car park signs: up to two hours £1.50, over two hours £3, the fee includes parking, entrance to the reserve and use of the paths, hides and toilet, and the car park opening times"
                className="w-full h-72 object-cover object-top"
                caption="The car park signs, February 2026: the parking fee includes entrance to the reserve and use of the paths, hides and toilet."
              />
              <p className="text-xs text-[var(--slate)]/75 mt-1.5 px-1">The car park signs, February 2026.</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/nels-hide-exterior.jpg"
                alt="Nel's hide at RSPB Marshside, a green metal building with a wooden viewing enclosure"
                className="w-full h-72 object-cover"
                caption="Nel's hide, 560m from the car park."
              />
              <p className="text-xs text-[var(--slate)]/75 mt-1.5 px-1">Nel&apos;s hide.</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/nels-hide-interior.jpg"
                alt="Inside Nel's hide: a row of blue chairs along the viewing shelf, with windows over the flooded marsh"
                className="w-full h-56 object-cover"
                caption="Inside Nel's hide."
              />
              <p className="text-xs text-[var(--slate)]/75 mt-1.5 px-1">Inside Nel&apos;s hide.</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/halfway-viewpoint.jpg"
                alt="A person and dog at the Halfway Viewpoint, looking over the flooded winter marsh"
                className="w-full h-56 object-cover"
                caption="The Halfway Viewpoint on the reserve path."
              />
              <p className="text-xs text-[var(--slate)]/75 mt-1.5 px-1">The Halfway Viewpoint.</p>
            </div>
            <div className="rounded-xl overflow-hidden sm:col-span-2">
              <ClickableImage
                src="/images/reserves/marshside/coastal-path-walk.jpg"
                alt="A walker and dog on the grass embankment path at Marshside, with the Ribble Estuary saltmarsh to the right"
                className="w-full h-64 object-cover"
                caption="The embankment path beside the saltmarsh."
              />
              <p className="text-xs text-[var(--slate)]/75 mt-1.5 px-1">The embankment path beside the saltmarsh.</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">Common questions</p>
          <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-6">FAQs</h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[var(--dune)] pb-5 last:border-0">
                <h3 className="font-semibold text-[var(--forest)] mb-1.5 text-sm">{q}</h3>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-10 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/hesketh-out-marsh" className="text-[var(--marsh)] font-medium hover:underline text-sm">Hesketh Out Marsh →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
          <Link href="/seasonal/pink-footed-geese" className="text-[var(--marsh)] font-medium hover:underline text-sm">Pink-footed Geese guide →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
