import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Formby Point: National Trust Shore, Cabin Hill and Ravenmeols";
const description =
  "Birdwatcher's guide to Formby Point: National Trust car parks and charges, trains, beach paths, Cabin Hill NNR and Ravenmeols LNR, wader roosts, seawatching, tides and dogs, from the managing bodies' own pages.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/formby-point";

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
  name: "Formby Point",
  description:
    "National Trust beach, dunes and pinewoods at Formby on the Sefton Coast, with Cabin Hill National Nature Reserve and Ravenmeols Hills Local Nature Reserve.",
  url,
  address: { "@type": "PostalAddress", streetAddress: "Lifeboat Road", addressLocality: "Formby", postalCode: "L37 2EB", addressCountry: "GB" },
  sameAs: SRC.ntFormby.url,
};

const sources = [
  used(SRC.ntFormby, "car parks, postcodes, grid references, hours on 11 November 2026, charges, payment, trains, buses, cycling, paths, toilets, refreshments, dogs, group bookings and the wildlife the Trust names"),
  used(SRC.neMerseysideNnrs, "Cabin Hill NNR: its habitats, the waders on its shore, natterjacks and lizards, directions and the nearest car park"),
  used(SRC.neCabinHillNnr, "Cabin Hill's area and its designated features"),
  used(SRC.neRavenmeolsLnr, "Ravenmeols Hills LNR: declaration, area, owner, manager, location and what to see"),
  used(SRC.neSeftonSsssiCitation, "Formby Point as an eroding hinge point and the waders of the Sefton foreshore"),
  used(SRC.seftonCalendar, "the roost area from Albert Road to the Alt, seawatching in August and advice on roosting birds"),
  used(SRC.seftonAinsdaleBeach, "dogs near roosting birds and the Wildlife and Countryside Act"),
  used(SRC.lwtSquirrelPox, "the 2026 squirrel pox outbreak and the request to remove feeders"),
];

export default function FormbyPointPage() {
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
            <span className="text-white/80">Formby Point</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            National Trust · Natural England · Sefton Council · Formby
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Formby Point</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Beach, dunes and pinewoods in the care of the National Trust, with two smaller reserves alongside: Cabin Hill NNR and Ravenmeols Hills LNR. Natural England says the shore at Cabin Hill is a feeding and roosting ground for Knot, Grey Plover and Bar-tailed Godwit.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--slate)] mb-10 leading-relaxed">
          The Sefton Coast SSSI citation describes Formby Point as the hinge point between two stretches of coast: the zone around the Point has been eroding since 1906, while the coast to the north and south builds up. High, steep dunes meet the beach here. The National Trust calls Formby one of the fastest-changing stretches of coastline in its care.
        </p>

        <SiteGuideFacts
          name="Formby Point"
          checked="11 November 2026"
          managedBy={
            <>
              The National Trust manages the beach, dunes and pinewoods. Natural England manages Cabin Hill National Nature Reserve (28 hectares). Ravenmeols Hills Local Nature Reserve, off Lifeboat Road, was declared by Sefton Council in 1983; Natural England records it as owned by the council and managed by the Sefton Coast and Countryside Service.
            </>
          }
          official={[
            { label: "National Trust: Formby", url: SRC.ntFormby.url },
            { label: "Natural England: Merseyside's National Nature Reserves (Cabin Hill)", url: SRC.neMerseysideNnrs.url },
          ]}
          gettingThere={[
            <>By train: Merseyrail runs every 15 minutes, and the National Trust calls the train the most convenient way to visit. From Formby station, go up the stairs, turn right out of the exit, walk down the bridge pavement and along Kirklake Road to the site entrance with a large map sign where the road bends (for Lifeboat Road). From Freshfield station, turn right and head west down Victoria Road to the entrance (for Victoria Road).</>,
            <>By car: Lifeboat Road car park, L37 2EB, grid reference SD 275 065, is 2 miles off the A565: follow the brown signs from the roundabout at the south end of the Formby bypass. Victoria Road car park, L37 1LJ, is 2.2 miles off the A565: leave the bypass at the roundabout with the petrol station and follow the brown signs to Formby Point.</>,
            <>By bus: Stagecoach&apos;s X2 runs to Formby from Liverpool and Southport. The National Trust says the nearest stop is about a 40-minute walk from the Lifeboat Road entrance.</>,
            <>By bike: National Cycle Network route 62 passes within 3 miles, bikes travel free on Merseyrail without booking, and there are cycle racks at both car parks. Entry is free if you arrive on foot or by bike.</>,
            <>Cabin Hill NNR is on the outskirts of Formby. Natural England says the Sefton Coastal Footpath runs along its eastern edge and the nearest car park is on the beach front 1.5km to the north.</>,
          ]}
          parking={[
            <>The two National Trust car parks are small and fill quickly on sunny days; the Trust recommends the train on busy days. On 11 November 2026 it listed both car parks as open 9am to 4pm.</>,
            <>Charge on 11 November 2026: £9.00 a car at either car park. National Trust members and Blue Badge holders park free.</>,
            <>Both car parks are ticketless with number-plate cameras. Pay at the machines with coins or card, or use the JustPark app; payment cannot be transferred between the two car parks.</>,
            <>Lifeboat Road has a height limit of 2.3m and a width limit of 3m. Coaches, minibuses and horseboxes use Lifeboat Road, and there is no coach or minibus parking at weekends, in school holidays or on bank holidays. Sefton Council enforces parking restrictions on the residential roads nearby.</>,
          ]}
          paths={[
            <>From Lifeboat Road, a hard-standing path and boardwalk with benches leads to the beach. From Victoria Road, the way to the beach is over uneven ground through the woods and dunes.</>,
            <>There are accessible paths in parts of the woodland and along the Asparagus Trail. The Trust has five sand wheelchairs to borrow free, booked in advance.</>,
            <>Toilets at both car parks; the Victoria Road accessible toilet needs a RADAR key. On 11 November 2026 the toilets were open 9.30am to 4pm. Mobile refreshment stands operate in spring and summer only.</>,
            <>The beaches and countryside are open all day. The Trust is grazing conservation cattle in the dunes this winter.</>,
          ]}
          seasons={[
            {
              season: "Autumn and winter",
              text: "Natural England says the shore at Cabin Hill provides feeding and roosting grounds for migrating and wintering birds, including Knot, Grey Plover and Bar-tailed Godwit. Sefton Council names the shore from Albert Road to the Alt at Formby as one of three key roost areas on the coast. The Sefton Coast SSSI citation lists Sanderling among the internationally important wintering waders of this foreshore.",
              birds: ["knot", "grey-plover", "bar-tailed-godwit", "sanderling"],
            },
            {
              season: "Spring",
              text: "Natural England says the rare Natterjack Toad calls around the fringes of the flooded slacks at Cabin Hill on nights in late April. Sand Lizards and Common Lizards live on the site, and Sefton Council says spring bird migration builds along the coast in April.",
            },
            {
              season: "Summer seawatching",
              text: "Sefton Council's nature calendar says that in August Gannets, shearwaters, skuas, terns and even petrels can be seen by watching out to sea from the dunes over high tides, provided the wind is from the north-west or south-west.",
            },
            {
              season: "All year",
              text: "The National Trust names Red Squirrels in the pinewoods, Natterjack Toads and Sand Lizards in the dunes, and prehistoric footprints and two shipwrecks on the shore. The Wildlife Trust confirmed a squirrel pox outbreak in Formby on 20 July 2026 and asks people to remove feeders along the Sefton Coast.",
            },
          ]}
          tide={[
            <>The roosts form over high tide. Sefton Council says roosting birds are highly susceptible to disturbance at high tide and in bad weather: if they run or fly ahead of you, you are too close.</>,
            <>Natural England advises checking the local tide timetable before going on the beach.</>,
          ]}
          access={[
            <>The National Trust says Formby is legally protected and has basic facilities.</>,
            <>All group visits must be booked in advance with the National Trust, including schools and groups arriving on foot.</>,
            <>Keep to designated cycle paths, roads or the beach when cycling.</>,
          ]}
          dogs={[
            <>The National Trust welcomes well-behaved dogs under close control, and suggests a lead if you are unsure. Be mindful of wildlife and of the cattle grazing in the dunes.</>,
            <>Keep dogs away from roosting birds on the beach. Sefton Council says it is a criminal offence under the Wildlife and Countryside Act 1981 to allow your dog to disturb them.</>,
          ]}
        />

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-12 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] font-medium hover:underline text-sm">Ainsdale Sand Dunes NNR →</Link>
          <Link href="/nature/crosby-and-alt-estuary" className="text-[var(--marsh)] font-medium hover:underline text-sm">Crosby and the Alt estuary →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
