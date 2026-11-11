import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";

const title = "WWT Martin Mere: Opening Times, Getting There and the Winter Birds";
const description =
  "Guide to WWT Martin Mere near Burscough: winter and summer opening times, tickets, free parking, the walk from Burscough Bridge and New Lane stations, no dogs, and the Pink-footed Geese and Whooper Swans, from WWT's own pages.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/martin-mere";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What are Martin Mere's opening times this winter?",
    a: "WWT lists winter opening from 24 October 2026 to 28 March 2027, 9.30am to 4.30pm with last entry at 3.30pm. In summer the centre opens 9.30am to 6pm, last entry 5pm. It is closed on Christmas Day and closes at 3pm on Christmas Eve.",
  },
  {
    q: "Do I need to pay to visit Martin Mere?",
    a: "Yes, there is an admission charge. WWT says tickets booked online by midnight the day before your visit are 10% cheaper; prices are on its tickets page. WWT members have unlimited visits, and carers assisting disabled visitors go free. Parking is free.",
  },
  {
    q: "Can I bring my dog to Martin Mere?",
    a: "No. WWT does not allow dogs or pets of any kind on site, except trained assistance dogs, which must be on a lead.",
  },
  {
    q: "When can I see the swan feeds?",
    a: "WWT lists swan feeds at 3pm in winter, when Whooper Swans gather on the mere alongside Shelduck, Wigeon, Pintail, Ruff and Black-tailed Godwits.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "WWT Martin Mere Wetland Centre",
    description: "Wildfowl and Wetlands Trust wetland centre and reserve near Burscough, Lancashire.",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fish Lane",
      addressLocality: "Burscough",
      addressRegion: "Lancashire",
      postalCode: "L40 0TA",
      addressCountry: "GB",
    },
    sameAs: SRC.wwtPlan.url,
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
  used(SRC.wwtPlan, "opening times, tickets, members, the café and shop, and the dog rule"),
  used(SRC.wwtDirections, "road directions, free parking, the three stations and walking routes, cycle racks and coach parking"),
  used(SRC.wwtAccess, "Blue Badge parking, the paved nature trail and hides, wheelchairs, carers and boat tours"),
  used(SRC.wwtWildlife, "the birds and other wildlife by season, the swan feeds and the size of the site"),
  used(SRC.wwtReserve, "the Ramsar wetland, the wild reserve's winter birds and the captive collection"),
  used(SRC.neRibbleAltSpaCitation, "the movement of birds between the Ribble and Alt Estuaries and Martin Mere"),
];

export default function MartinMerePage() {
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
            <span className="text-white/80">WWT Martin Mere</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            WWT wetland centre · Burscough · Admission charge
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">WWT Martin Mere</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            A wetland centre and reserve of 600 acres, 10 miles from Southport. WWT says up to 50,000 Pink-footed Geese come in to roost in autumn, with flocks of Pintail and Wigeon, and that Whooper Swans join them towards the end of the season.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--slate)] mb-10 leading-relaxed">
          Martin Mere is inland, not on the coast, but its birds and the coast&apos;s are linked: Natural England&apos;s citation for the Ribble and Alt Estuaries Special Protection Area notes considerable movement of birds between the estuaries and Martin Mere. WWT describes the reserve as a Ramsar-rated marshland.
        </p>

        <SiteGuideFacts
          name="Martin Mere"
          checked="11 November 2026"
          managedBy={<>WWT, the Wildfowl and Wetlands Trust.</>}
          official={[
            { label: "WWT Martin Mere: Plan your visit", url: SRC.wwtPlan.url },
            { label: "WWT Martin Mere: Directions", url: SRC.wwtDirections.url },
          ]}
          gettingThere={[
            <>Address: WWT Martin Mere, Fish Lane, Burscough, Lancashire, L40 0TA. WWT says it is six miles from Ormskirk and 10 miles from Southport.</>,
            <>By car: off the A59, signposted from junction 8 of the M61, junction 3 of the M58 and junction 27 of the M6.</>,
            <>By train: from Burscough Bridge (Southport to Manchester line), WWT recommends walking up to the A59, turning left onto Red Cat Lane and following it as it becomes Tarlscough Lane and then Fish Lane: 2.5 miles. New Lane station on the same line is 1.2 miles away, but on a country lane with no footpaths, so WWT does not recommend it on foot. Burscough Junction (Liverpool to Preston via Ormskirk) is 3.1 miles away.</>,
            <>By bike: there are Sheffield stands for 16 bikes, and the centre is on two West Lancashire cycle routes.</>,
          ]}
          parking={[
            <>Parking is free, including for coaches bringing visitors.</>,
            <>Two Blue Badge car parks outside the entrance hold 25 vehicles.</>,
          ]}
          paths={[
            <>The nature trail is fully paved but is not a circular loop. Most hides have lower windows for wheelchair users and bird books for identification.</>,
            <>Free wheelchairs are available; a mobility scooter can be hired with a £12 deposit, booked in advance on 01704 891220.</>,
            <>Boat tours run daily from 2 April to the end of September.</>,
            <>Away from the wild reserve, WWT keeps an otter enclosure, flamingos and about 100 species of water birds from around the world. There is a café and a shop on site.</>,
          ]}
          seasons={[
            {
              season: "Autumn",
              text: "WWT says thousands of migratory birds arrive, with up to 50,000 Pink-footed Geese descending to roost, flocks of Pintail and Wigeon, and Whooper Swans towards the end of the season.",
              birds: ["pink-footed-goose", "pintail", "wigeon", "whooper-swan"],
            },
            {
              season: "Winter",
              text: "Swan feeds at 3pm bring Whooper Swans close, with Shelduck, Wigeon, Pintail, Ruff and Black-tailed Godwits among them. At dusk, Starlings return to roost in the reedbed. Willow Tits, Bramblings and Tree Sparrows visit the Janet Kear feeding station (WWT).",
              birds: ["whooper-swan", "black-tailed-godwit"],
            },
            {
              season: "Spring",
              text: "Up to 1,000 Black-headed Gulls nest on the islands, and WWT counts up to 25 pairs of Cetti's Warblers, mostly along the reedbed walk. Avocets, Marsh Harriers and Kingfishers are among its spring species.",
              birds: ["avocet"],
            },
            {
              season: "Summer",
              text: "Reed and Sedge Warblers return from Africa to the reedbed, Avocets are present, and WWT says three pairs of Barn Owls hunt the fields to feed their chicks.",
              birds: ["avocet"],
            },
          ]}
          access={[
            <>Open 364 days a year. Winter hours from 24 October 2026 to 28 March 2027: 9.30am to 4.30pm, last entry 3.30pm. Summer hours: 9.30am to 6pm, last entry 5pm. Closed on Christmas Day; 9.30am to 3pm on Christmas Eve.</>,
            <>Admission is charged. Booking online by midnight the day before saves 10%; WWT members have unlimited visits; carers assisting disabled visitors go free. Groups of 12 or more get 15% off.</>,
            <>WWT suggests weekday visits in term time, or 9.30am to 11.30am at weekends, for a quieter visit.</>,
          ]}
          dogs={[
            <>No dogs or pets of any kind, except trained assistance dogs, which must be kept on a lead. Do not leave a dog in your car while you visit.</>,
          ]}
        />

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
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB →</Link>
          <Link href="/seasonal/winter-wildfowl" className="text-[var(--marsh)] font-medium hover:underline text-sm">Winter wildfowl guide →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
