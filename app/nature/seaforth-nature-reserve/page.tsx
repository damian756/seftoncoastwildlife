import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Seaforth Nature Reserve: Day Passes, Hides and Seasons";
const description =
  "Guide to the Wildlife Trust's Seaforth Nature Reserve inside the Port of Liverpool: how to get a day pass, no dogs, the hides, high-tide roosts, Little Gulls in spring and Common Terns in summer.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/seaforth-nature-reserve";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Can I just turn up at Seaforth Nature Reserve?",
    a: "No. The reserve is inside the Port of Liverpool perimeter and you need a day pass. Request one with the form on the Wildlife Trust's reserve page, giving at least a week's notice if you can. The request goes to the Port of Liverpool Police and a member of staff confirms it. Wildlife Trust members can apply for an annual port pass, which the Trust lists at £35 a year.",
  },
  {
    q: "Are dogs allowed at Seaforth?",
    a: "No. The Wildlife Trust says no dogs are permitted.",
  },
  {
    q: "When is Seaforth best for birds?",
    a: "The Trust gives the best time to visit as year-round. Spring brings migrating Little Gulls; early summer brings Common Terns, up to 1% of the UK population; winter brings ducks and waders to the lagoons. Natural England describes it as a high-tide roost, most important during high spring tides.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Seaforth Nature Reserve",
    description:
      "Wildlife Trust nature reserve of lagoons and saltmarsh inside the Port of Liverpool, part of the Mersey Narrows and North Wirral Foreshore Special Protection Area.",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Royal Seaforth Docks",
      addressLocality: "Liverpool",
      postalCode: "L21 1JD",
      addressCountry: "GB",
    },
    sameAs: SRC.lwtSeaforth.url,
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
  used(SRC.lwtSeaforth, "location, size, footpaths, the day pass and port pass, no dogs, hides, opening, the birds by season and the designations the Trust lists"),
  used(SRC.neMerseyNarrowsSsssiCitation, "the lagoons and saltmarsh, the high-tide roost, Turnstone, Redshank and Cormorant, breeding Common Terns and Ringed Plovers, and passage Little Gulls"),
  used(SRC.neMerseyNarrowsSpaCitation, "Seaforth as a high-tide roost and tern nesting site within the SPA"),
  used(SRC.neMerseyNarrowsSpaDetail, "Seaforth as a feeding site for Little Gulls and the roost near Hightown"),
];

export default function SeaforthNatureReservePage() {
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
            <span className="text-white/80">Seaforth Nature Reserve</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Wildlife Trust · Port of Liverpool · Day pass needed
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Seaforth Nature Reserve</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Lagoons, saltmarsh and grassland on land claimed from the sea in the 1960s, north of the Royal Seaforth Dock at the mouth of the Mersey. Natural England describes Seaforth as a high-tide roost, a nesting site for terns and a feeding site for Little Gulls.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Day pass", label: "Needed to enter the port" },
            { stat: "No dogs", label: "Wildlife Trust rule" },
            { stat: "33 ha", label: "Reserve size" },
            { stat: "L21 1JD", label: "Royal Seaforth Docks" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/80 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <SiteGuideFacts
          name="Seaforth"
          checked="11 November 2026"
          managedBy={
            <>
              The Wildlife Trust for Lancashire, Manchester and North Merseyside. The reserve sits inside the Port of Liverpool perimeter. Day-pass requests go through the Wildlife Trust to the Port of Liverpool Police.
            </>
          }
          official={[{ label: "Wildlife Trust: Seaforth Nature Reserve", url: SRC.lwtSeaforth.url }]}
          gettingThere={[
            <>Address: Seaforth Nature Reserve, Royal Seaforth Docks, Liverpool L21 1JD.</>,
            <>You need a day pass to enter the port. Request it with the form at the bottom of the Wildlife Trust&apos;s reserve page, giving the names of everyone in your party and the make, model and registration of each vehicle. Give at least a week&apos;s notice if you can. The Trust does not monitor its emails in the evening or at weekends.</>,
            <>The Trust&apos;s page includes a map to guide you through the port to the reserve.</>,
            <>Wildlife Trust members can apply for an annual port pass, at £35 a year, through the port&apos;s ISPS office, as the Trust&apos;s page explains.</>,
          ]}
          parking={[
            <>Vehicles are named on the day-pass request. The Trust&apos;s page does not describe public parking outside the port.</>,
          ]}
          paths={[
            <>Basic footpaths around the site, and bird hides.</>,
            <>Natural England&apos;s citation describes two lagoons: a shallow saltwater lagoon that settles water pumped from the Mersey into the docks, and a freshwater lagoon, separated by a wide bund. A strip of saltmarsh runs along the western edge of the saltwater lagoon.</>,
          ]}
          seasons={[
            {
              season: "Spring",
              text: "The Wildlife Trust calls spring prime time for migrating Little Gulls on their way to breeding grounds in Finland. Swifts feed over the freshwater pool in spring and summer, and Ospreys pass over in most years.",
            },
            {
              season: "Summer",
              text: "Early summer brings up to 1% of the UK population of Common Terns, sometimes with small numbers of Sandwich, Roseate and Little Terns (Wildlife Trust). Natural England records Common Terns and Ringed Plovers breeding here.",
              birds: ["common-tern"],
            },
            {
              season: "Winter",
              text: "The lagoons and reedbed hold Teal, Pochard, Tufted Duck, Goldeneye and Scaup, and Redshank, Oystercatcher, Ringed Plover, Dunlin and Curlew are among the 38 wader species the Trust has recorded. Natural England's citation names internationally important numbers of Turnstone and Redshank and nationally important numbers of Cormorant in winter.",
              birds: ["turnstone", "redshank", "teal", "dunlin"],
            },
          ]}
          tide={[
            <>Natural England describes Seaforth as mainly a high-tide roost, most important during high spring tides, when rocky shores and structures nearer the feeding areas are under water. Waders feed on the Egremont foreshore across the river at low tide.</>,
          ]}
          access={[
            <>Open at all times once you have a pass.</>,
            <>Seaforth is part of the Mersey Narrows SSSI and the Mersey Narrows and North Wirral Foreshore Special Protection Area and Ramsar site. See <Link href="/nature/designations" className="text-[var(--marsh)] underline underline-offset-2">protected sites</Link>.</>,
          ]}
          dogs={[<>No dogs are permitted.</>]}
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
          <Link href="/nature/crosby-and-alt-estuary" className="text-[var(--marsh)] font-medium hover:underline text-sm">Crosby and the Alt estuary →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
