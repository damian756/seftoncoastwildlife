import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Hesketh Out Marsh RSPB: Parking, Paths and Birds";
const description =
  "Guide to RSPB Hesketh Out Marsh on the Ribble Estuary: car park hours, the trail to Karen's Viewpoint, the sea-wall footpaths, dogs and the birds of the recreated saltmarsh, from the RSPB's own page.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/hesketh-out-marsh";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "RSPB Hesketh Out Marsh",
  description:
    "RSPB saltmarsh reserve on the south side of the Ribble Estuary near Hesketh Bank, part of the Ribble Estuary National Nature Reserve.",
  url,
  isAccessibleForFree: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dib Road",
    addressLocality: "Hesketh Bank",
    addressRegion: "Lancashire",
    postalCode: "PR4 6XQ",
    addressCountry: "GB",
  },
  telephone: "01704 211690",
  sameAs: SRC.rspbHesketh.url,
};

const sources = [
  used(SRC.rspbHesketh, "address, grid reference, directions, car park, entry prices, the trail and viewpoint, footpaths, facilities, dogs, the managed realignment and the birds"),
  used(SRC.neMerseysideNnrs, "Hesketh Out Marsh as part of the Ribble Estuary NNR, the reserve's breeding birds, the embankment footpath from Marshside, and access limited to rights of way"),
  used(SRC.neRibbleSsssiCitation, "the estuary's importance for passage and wintering waterfowl"),
];

export default function HeskethOutMarshPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Hesketh Out Marsh</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB reserve · Hesketh Bank, Lancashire · Ribble Estuary NNR
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Hesketh Out Marsh RSPB</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Saltmarsh brought back to the Ribble Estuary. The land had been walled off for farming in the 1980s; the RSPB, the Environment Agency and Natural England let the sea back in, with the first half restored in 2007 and the second completed in autumn 2017.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--slate)] mb-10 leading-relaxed">
          The RSPB calls it the largest project of its kind in the north of England. The reserve is just over the county boundary in West Lancashire, at the eastern end of the embankment path that Natural England describes running for more than 12km from{" "}
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] underline underline-offset-2">Marshside</Link> past Crossens and Hundred End.
        </p>

        <SiteGuideFacts
          name="Hesketh Out Marsh"
          checked="11 November 2026"
          managedBy={
            <>
              The RSPB. Hesketh Out Marsh is part of the Ribble Estuary National Nature Reserve, which Natural England says is managed jointly by Natural England, the RSPB and the Lytham and District Wildfowlers Association. RSPB reserve team: 01704 211690.
            </>
          }
          official={[{ label: "RSPB: Hesketh Out Marsh Nature Reserve", url: SRC.rspbHesketh.url }]}
          gettingThere={[
            <>Address: Hesketh Out Marsh, Dib Road, Hesketh Bank, Lancashire, PR4 6XQ. Grid reference SD 4214 2505; what3words vowing.brands.carbonate.</>,
            <>By car: the car park is at the end of the private Dib Road. The turning is the first on the right after leaving Hesketh Bank, or the first on the left after passing the Hundred End junction.</>,
            <>By bus: the nearest stop is the Hundred End junction on Shore Road, 1 mile (1.5km) away by public footpath. The RSPB lists a frequent Arriva No. 2 service between Preston and Southport.</>,
            <>By train: the RSPB names Preston, Rufford and Southport as the nearest stations.</>,
          ]}
          parking={[
            <>Car park open daily from 8am to 6pm, or until dusk if earlier. 24 spaces, two of them for Blue Badge holders.</>,
            <>Unmarked spaces, uneven surface, no lighting and no height barrier. No overnight parking or camping. Bicycle racks are available.</>,
            <>The RSPB asks visitors not to park on the road, where cars block residents and emergency services.</>,
          ]}
          paths={[
            <>A 500m nature trail runs to Karen&apos;s Viewpoint, a viewing platform over the marsh and the Ribble Estuary. The path is wide and surfaced with a gentle slope, built for wheelchair users and pushchairs, with two passing places and wide kissing gates. There is a bench without back or arms at the viewpoint and no seating on the trail.</>,
            <>A public footpath runs west (left) along the sea wall to Hundred End Gutter and Southport; the RSPB gives the distance as 0.8 miles (1.3km) one way.</>,
            <>A public footpath runs east (right) along the sea wall to the River Douglas and Hesketh Bank village, on grass, with three benches.</>,
            <>There is no visitor centre, café, toilet or baby changing; information boards are in the car park and along the trails. The RSPB gives Hesketh Bank (2.4 miles) or Southport (9 miles) as the nearest places for food and toilets. A picnic bench stands on level gravel by the car park.</>,
          ]}
          seasons={[
            {
              season: "Spring and summer",
              text: "Natural England says the Ribble Estuary NNR, which includes Hesketh Out Marsh, holds breeding gulls, terns, Redshanks, Avocets, Lapwings and Skylarks. A new predator-exclusion fence along the floodbank is being built to keep foxes away from birds nesting on the saltmarsh.",
              birds: ["redshank", "avocet", "lapwing"],
            },
            {
              season: "Autumn and winter",
              text: "Internationally important numbers of ducks, geese and wading birds spend the winter here, the RSPB says, from Pink-footed Geese and Wigeons to Redshanks and Lapwings. The Ribble Estuary SSSI citation describes the estuary as a major link in the chain of west-coast estuaries used by birds on migration.",
              birds: ["pink-footed-goose", "wigeon", "lapwing", "redshank"],
            },
          ]}
          tide={[
            <>The marsh is tidal saltmarsh with new lagoons and creeks. Natural England restricts access on the estuary&apos;s saltmarsh and mudflats to public rights of way because of their dangerous nature and fragility, and the RSPB asks you to keep to the paths for your own safety and to reduce disturbance to the birds.</>,
          ]}
          access={[
            <>The RSPB&apos;s price list shows no admission charge for adults or children.</>,
            <>Keep to the paths. All public rights of way along the floodbank stay open while the new fence goes in, with taller fox-proof gates replacing the stiles.</>,
            <>Barbecues are not permitted at any time.</>,
          ]}
          dogs={[
            <>Dogs are welcome on public footpaths and bridleways only, on leads and under control at all times.</>,
            <>Assistance dogs are welcome in all parts of the reserve.</>,
          ]}
        />

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-12 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
