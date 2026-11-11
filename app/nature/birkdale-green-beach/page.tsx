import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";

const title = "Birkdale Green Beach and the Sandhills LNR: Roosts, Slacks and Access";
const description =
  "Guide to the Green Beach and the Ainsdale and Birkdale Sandhills Local Nature Reserve: how to get there, the Velvet Trail, wader roosts off the Green Beach, Twite, orchids, tides and dog rules, from Sefton Council's pages.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/birkdale-green-beach";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Ainsdale and Birkdale Sandhills Local Nature Reserve and the Green Beach",
  description:
    "Local Nature Reserve of dunes, slacks and beach between Ainsdale and Weld Road, Southport, managed by Sefton Council.",
  url,
  address: { "@type": "PostalAddress", addressLocality: "Southport", addressRegion: "Merseyside", addressCountry: "GB" },
  sameAs: SRC.seftonLnr.url,
};

const sources = [
  used(SRC.seftonLnr, "the reserve's extent, the Velvet Trail and dune trail, entrances, toilets, beach zoning and dog rules, and its plants"),
  used(SRC.neAinsdaleLnr, "declaration, area, ownership and management, location, stations, road access and winter sheep grazing"),
  used(SRC.seftonCalendar, "wader roosts off the Green Beach, the Pink-footed Goose roosts, Twite between Weld Road and Fairways, and the advice on disturbance"),
  used(SRC.seftonAinsdaleBeach, "beach parking season and charge, the toilets' summer season and the all-year Changing Places toilet, the summer dog exclusion zone and dogs near roosting birds"),
  used(SRC.seftonFindParking, "the council's other car parks"),
  used(SRC.neSeftonSsssiCitation, "saltmarsh on Birkdale beach, the dune slacks and Baltic rush, and the wintering waders"),
  used(SRC.seftonSafeBeaches, "tide forecasts and how quickly the tide comes in"),
];

export default function BirkdaleGreenBeachPage() {
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
            <span className="text-white/80">Birkdale Green Beach</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Sefton Council · Local Nature Reserve · Birkdale and Ainsdale
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Birkdale Green Beach and the Sandhills LNR</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Sefton Council calls the Ainsdale and Birkdale Sandhills one of the largest areas of wild dune land left in Britain. The Green Beach on its seaward side is one of the three areas the council names as key for the coast&apos;s wader roosts.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--slate)] mb-10 leading-relaxed">
          The reserve runs from{" "}
          <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] underline underline-offset-2">Ainsdale Sand Dunes NNR</Link>{" "}
          in the south to Weld Road, Southport, in the north, with the Royal Birkdale and Hillside golf links to the east (Natural England). It was declared in 1980. Sefton Council gives its area as 988 hectares of open dunes and beach; Natural England&apos;s register lists 296 hectares for the designated reserve.
        </p>

        <SiteGuideFacts
          name="the Green Beach"
          checked="11 November 2026"
          managedBy={
            <>
              Sefton Council, which owns the reserve and manages it through its coast and countryside service (Green Sefton). Natural England records Sefton Borough Council as the declaring authority.
            </>
          }
          official={[
            { label: "Sefton Council: Ainsdale and Birkdale Sandhills Local Nature Reserve", url: SRC.seftonLnr.url },
            { label: "Sefton Council: Ainsdale Beach", url: SRC.seftonAinsdaleBeach.url },
          ]}
          gettingThere={[
            <>By train: Natural England says Ainsdale, Hillside and Birkdale stations on the Merseyrail Northern Line are all within a mile&apos;s walk.</>,
            <>By car: Shore Road and Weld Road are reached from the Southport coast road, off the A565.</>,
            <>Sefton Council says you can enter the reserve from the beach or from the car park at the Ainsdale Discovery Centre, Promenade, Ainsdale, PR8 2QB.</>,
          ]}
          parking={[
            <>Sefton Council&apos;s beach parking at Ainsdale is open from 1 April to 30 September only. The all-day charge is £10, and the council prefers cashless payment.</>,
            <>The council warns that beach parking can be reduced or closed because of the tide, severe weather, events or emergencies. From October to March there is no beach parking. Sefton Council&apos;s find-parking page (sefton.gov.uk/find-parking) lists its other car parks, or come by train.</>,
          ]}
          paths={[
            <>The Velvet Trail is a circular route that follows the Green Beach south from Weld Road and winds back through the dunes to Weld Road. It is named after the carpets of lush vegetation seen there in early summer.</>,
            <>A separate dune trail makes a circular walk through the reserve&apos;s range of habitats.</>,
            <>Waymarked footpaths link the reserve with Ainsdale Sand Dunes NNR to the south.</>,
            <>The toilets at Shore Road are open in summer. Sefton Council&apos;s refurbished toilet block at Ainsdale beach, with baby changing, is open from April to September; its accessible Changing Places toilet is open all year.</>,
          ]}
          seasons={[
            {
              season: "Spring",
              text: "Sefton Council's nature calendar says spring migration builds in April, with waders, warblers, Swallows, pipits, chats, gulls and occasional Ospreys moving along the coast, and names the shore off the Green Beach between Ainsdale and Birkdale as a key roost area. It says Natterjack Toad breeding is in full swing in the dune pools in April.",
            },
            {
              season: "Summer",
              text: "The council says the damp slacks are carpeted in summer with Early Marsh Orchid, Marsh Helleborine and Grass of Parnassus, with Round-leaved Wintergreen and the nationally rare Dune Helleborine in drier slacks. The Sefton Coast SSSI citation records Baltic rush at its only English site, a slack at the north end of the Birkdale Hills.",
            },
            {
              season: "Autumn",
              text: "Pink-footed Geese begin to arrive from Iceland in September, and large roosts build on the sands off Birkdale by the end of the month. In October, wader and gull roosts build, especially between Ainsdale and Birkdale, and the council asks that seed-rich debris on the high-tide line between Weld Road and Fairways is left for wintering Twite.",
              birds: ["pink-footed-goose", "twite"],
            },
            {
              season: "Winter",
              text: "By December the roosts of Knot, godwits, Sanderling and Dunlin are well established (Sefton Council). The SSSI citation lists Knot, Sanderling and Bar-tailed Godwit among the internationally important wintering waders on this foreshore. Natural England says part of the reserve is grazed by Hebridean sheep in winter.",
              birds: ["knot", "bar-tailed-godwit", "sanderling", "dunlin"],
            },
          ]}
          tide={[
            <>The roosts form on the beach over high tide. Sefton Council says the birds are highly susceptible to disturbance during high tides and bad weather, and asks you to give them a wide berth: if they run or fly ahead of you, you are too close.</>,
            <>The SSSI citation describes saltmarsh on the beach at Birkdale and multiple sand bars on the foreshore. The council warns that the tide can come in quickly, and asks you to check tide forecasts before going on the beach.</>,
          ]}
          access={[
            <>The beach is zoned, and barriers restrict vehicles north and south of the main beach entrance at Ainsdale.</>,
            <>No barbecues or fires anywhere on the coast, and no camping. Please do not pick flowers.</>,
          ]}
          dogs={[
            <>Keep dogs under control and out of the dog-free area. From 1 May to 30 September, Ainsdale beach is dog-free for 200m either side of the main beach entrance, down to the tide line.</>,
            <>Keep dogs out of the dune pools and slacks, where Natterjack Toads and Great Crested Newts breed, and away from livestock.</>,
            <>Keep dogs away from roosting waders, terns and gulls. Sefton Council says it is a criminal offence under the Wildlife and Countryside Act 1981 to allow your dog to disturb them.</>,
          ]}
        />

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-12 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] font-medium hover:underline text-sm">Ainsdale Sand Dunes NNR →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
