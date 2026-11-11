import Link from "next/link";
import type { Metadata } from "next";
import { ClickableImage } from "@/components/ClickableImage";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";

const title = "Ainsdale Sand Dunes NNR: Access, Paths, Natterjacks and Seasons";
const description =
  "Guide to Natural England's Ainsdale Sand Dunes National Nature Reserve: entrances, stations, seasonal beach parking, waymarked paths, natterjack toads, sand lizards, dune plants, tides and dog rules.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/ainsdale-sand-dunes";

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
    images: [{ url: "https://www.seftoncoastwildlife.co.uk/images/blog/beachcombing/sea-spurge-ainsdale-dunes.webp" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Where do I park for Ainsdale Sand Dunes NNR?",
    a: "There is no public parking on the reserve. Natural England points visitors to the Ainsdale-on-Sea beach car park, which Sefton Council opens from 1 April to 30 September only (£10 all day), or to the National Trust car parks at Formby to the south. A limited number of disabled parking places are available on the reserve: call the reserve office on 01704 578774.",
  },
  {
    q: "How do I get to Ainsdale NNR by train?",
    a: "Natural England says the reserve is 1.2km from Ainsdale station and 1.4km from Freshfield station. There are footpath entrances from Pinfold Lane and the Coastal Road in Ainsdale, from Fisherman's Path in Freshfield, and along the beach and frontal dune paths.",
  },
  {
    q: "When can I hear natterjack toads at Ainsdale?",
    a: "Sefton Council's nature calendar says natterjacks may be spawning in the dunes by the end of March, depending on temperatures, and that breeding is in full swing in April. Natural England calls Ainsdale one of the best remaining strongholds of the natterjack, Europe's loudest amphibian. Keep dogs out of the pools.",
  },
  {
    q: "What is the difference between Ainsdale NNR and the National Trust site at Formby?",
    a: "Ainsdale Sand Dunes NNR is managed by Natural England. The National Trust's land at Formby lies to the south and has its own car parks at Victoria Road (L37 1LJ) and Lifeboat Road (L37 2EB). Natural England says you can walk from the Formby car parks to the NNR along the Sefton Coast Footpath.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Ainsdale Sand Dunes National Nature Reserve",
    description:
      "National Nature Reserve on the Sefton Coast managed by Natural England: dunes, slacks and pinewood with natterjack toads, sand lizards and rare dune plants.",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 West End Lodge, Pinfold Lane",
      addressLocality: "Ainsdale",
      postalCode: "PR8 3QW",
      addressCountry: "GB",
    },
    telephone: "01704 578774",
    sameAs: SRC.neMerseysideNnrs.url,
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
  used(SRC.neMerseysideNnrs, "the reserve's plants and animals, paths, cycle routes, stations, buses, parking, entrances, safety advice and contact details"),
  used(SRC.neAinsdaleNnr, "the reserve's area"),
  used(SRC.seftonAinsdaleBeach, "beach parking season, charge and closures, toilets, and the dog rules on the beach"),
  used(SRC.seftonCalendar, "when natterjacks, lizards and plants are active through the year, grazing, and the advice on driftwood and digging"),
  used(SRC.seftonLnr, "the neighbouring Ainsdale and Birkdale Sandhills LNR"),
];

export default function AinsdaleSandDunesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]">
        <ClickableImage
          src="/images/blog/beachcombing/sea-spurge-ainsdale-dunes.webp"
          alt="Sea spurge growing across the Ainsdale sand dunes"
          className="w-full h-full object-cover object-center"
          caption="Sea spurge on the Ainsdale dunes. The sap is toxic; do not handle."
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
            <span className="text-white/80">Ainsdale Sand Dunes NNR</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            National Nature Reserve · Natural England · Ainsdale
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Ainsdale Sand Dunes NNR</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Natural England calls Ainsdale one of the best remaining strongholds of the natterjack toad, Europe&apos;s loudest amphibian. The dunes hold over 450 plant species, 33 of them locally or regionally rare, along with sand lizards and great crested newts.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "492ha", label: "Reserve area" },
            { stat: "8 miles", label: "Waymarked paths" },
            { stat: "1.2km", label: "From Ainsdale station" },
            { stat: "April", label: "Natterjack breeding in full swing" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <SiteGuideFacts
          name="Ainsdale NNR"
          checked="11 November 2026"
          managedBy={
            <>
              Natural England. Reserve office: 2 West End Lodge, Pinfold Lane, Ainsdale, PR8 3QW; 01704 578774. The neighbouring{" "}
              <Link href="/nature/birkdale-green-beach" className="text-[var(--marsh)] underline underline-offset-2">Ainsdale and Birkdale Sandhills LNR</Link>{" "}
              to the north is Sefton Council&apos;s.
            </>
          }
          official={[{ label: "Natural England: Merseyside's National Nature Reserves (Ainsdale Sand Dunes)", url: SRC.neMerseysideNnrs.url }]}
          gettingThere={[
            <>By train: Natural England says the reserve is a short walk from Ainsdale station (1.2km) and Freshfield station (1.4km).</>,
            <>By bus: local services stop at Freshfield station, Pinfold Lane and Gleneagles Drive.</>,
            <>By bike: the reserve is on Route 62 (the Trans Pennine Trail) and local route 81 of the National Cycle Network.</>,
            <>By car: minor roads from the A565.</>,
            <>Footpath entrances: Pinfold Lane and the Coastal Road in Ainsdale; Fisherman&apos;s Path in Freshfield; and from the north and south along the beach and frontal dune paths.</>,
          ]}
          parking={[
            <>There is no public parking on the reserve. A limited number of disabled parking places are available: call the reserve office on 01704 578774.</>,
            <>Natural England points visitors to the Ainsdale-on-Sea beach car park, with access to the NNR along the beach or through Ainsdale Sandhills LNR. Sefton Council opens that beach parking from 1 April to 30 September only, at £10 all day, and may reduce or close it because of the tide or the weather.</>,
            <>To the south, the National Trust car parks at Formby give access to the NNR along the Sefton Coast Footpath. See the <Link href="/nature/formby-point" className="text-[var(--marsh)] underline underline-offset-2">Formby Point guide</Link>.</>,
          ]}
          paths={[
            <>About 8 miles of footpaths, marked with colour-topped posts.</>,
            <>The Woodland Path and Fisherman&apos;s Path are accessible by bike, pushchair and wheelchair. Natural England&apos;s map shows where you can ride a horse or cycle.</>,
            <>The Trans Pennine Trail and the Sefton Coastal Footpath give access along the whole coast.</>,
            <>There are no facilities on the reserve. Sefton Council&apos;s toilet block at Ainsdale beach includes an accessible Changing Places toilet.</>,
          ]}
          seasons={[
            {
              season: "February and March",
              text: "Sefton Council's nature calendar says amphibians, including Natterjack Toads and Great Crested Newts, begin to emerge in February. In March, Sand Lizards and Common Lizards emerge in the frontal dunes, and natterjacks may be spawning by the end of the month. The grazing cattle and sheep leave the dunes in spring.",
            },
            {
              season: "April to June",
              text: "Natterjack breeding is in full swing in April and toadlets leave the pools in May. Bee and Southern Marsh Orchids begin to flower by the end of May, and up to 11 species of orchid bloom along the coast in June and July. Sand Lizards lay eggs in June (Sefton Council).",
            },
            {
              season: "July to September",
              text: "Dune, Broad-leaved and Green-flowered Helleborines are usually at their best in July. Natterjacks move out to the upper tideline to shelter and forage until the end of September or October, and young Sand Lizards hatch in August (Sefton Council). Natural England lists petalwort, seaside centaury, yellow bartsia, round-leaved wintergreen and dune helleborine among the reserve's rarer plants.",
            },
            {
              season: "October to January",
              text: "Conservation grazing resumes in the dunes in October. By November, Sand Lizards and natterjacks are hibernating in the frontal dunes, and the council asks people not to dig there. On the shore, wader roosts build between Ainsdale and Birkdale from October, and by December the roosts of Knot, godwits, Sanderling and Dunlin are established. Natural England says Red Squirrels can occasionally be seen in the reserve's pinewoods.",
              birds: ["knot", "sanderling", "dunlin"],
            },
          ]}
          tide={[
            <>Natural England advises checking the local tide timetable before visiting the beach.</>,
            <>Wader roosts on the shore form over high tide and are easily disturbed: if birds run or fly ahead of you, you are too close (Sefton Council).</>,
          ]}
          access={[
            <>The dunes cover a large area, parts of them remote, and Natural England warns that you can become disorientated. If you visit alone, tell someone where you are going and when you expect to be back.</>,
            <>Rabbit burrows are common and soft sand can give way. In dry weather the fire risk is high: do not smoke near pine-needle debris or leave cigarettes or bottles.</>,
            <>No barbecues, fires or camping anywhere on the coast. Sefton Council asks visitors not to take driftwood, which toads and their prey shelter under.</>,
          ]}
          dogs={[
            <>From 1 May to 30 September, Ainsdale beach is dog-free for 200m either side of the main beach entrance, down to the tide line (Sefton Council).</>,
            <>Keep dogs out of the dune pools and slacks, where Natterjack Toads and Great Crested Newts breed, and under close control near the grazing livestock.</>,
            <>Keep dogs away from roosting birds. Sefton Council says it is a criminal offence under the Wildlife and Countryside Act 1981 to allow your dog to disturb them.</>,
          ]}
        />

        <section className="mt-12">
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">The tideline</p>
          <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Ainsdale beach from the NNR</h2>
          <p className="text-[var(--slate)] mb-5 text-sm leading-relaxed">
            The strandline below the dunes turns up jellyfish, egg cases and shells, especially after storms. Sefton Council&apos;s advice is to treat stranded jellyfish with caution and not to touch them, because they can still sting even when dead.
          </p>
          <div className="rounded-xl overflow-hidden mb-4">
            <ClickableImage
              src="/images/blog/beachcombing/barrel-jellyfish-dog-ainsdale-beach.webp"
              alt="A barrel jellyfish stranded on Ainsdale beach, with a dog in the background"
              className="w-full h-64 sm:h-80 object-cover"
              caption="A barrel jellyfish on the Ainsdale strandline. Do not touch stranded jellyfish."
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            <div className="rounded-xl overflow-hidden h-28">
              <ClickableImage
                src="/images/blog/beachcombing/compass-jellyfish-closeup-ainsdale.webp"
                alt="A compass jellyfish on the Ainsdale tideline, with brown V-shaped markings"
                className="w-full h-28 object-cover"
                caption="A compass jellyfish on the Ainsdale tideline."
              />
            </div>
            <div className="rounded-xl overflow-hidden h-28">
              <ClickableImage
                src="/images/blog/beachcombing/mermaids-purse-held-hand-ainsdale.webp"
                alt="A mermaid's purse egg case found on Ainsdale beach, held in a hand"
                className="w-full h-28 object-cover object-top"
                caption="A mermaid's purse found on Ainsdale beach."
              />
            </div>
            <div className="rounded-xl overflow-hidden h-28">
              <ClickableImage
                src="/images/blog/beachcombing/whelk-egg-mass-ainsdale-beach.webp"
                alt="A whelk egg mass on the Ainsdale strandline with seaweed"
                className="w-full h-28 object-cover"
                caption="A whelk egg mass on the Ainsdale strandline."
              />
            </div>
          </div>
          <p className="text-sm text-[var(--slate)] leading-relaxed">
            More on the strandline:{" "}
            <Link href="/blog/what-is-a-mermaids-purse" className="text-[var(--marsh)] underline">what is a mermaid&apos;s purse?</Link> and{" "}
            <Link href="/blog/jellyfish-sefton-coast" className="text-[var(--marsh)] underline">jellyfish on the Sefton Coast</Link>.
          </p>
        </section>

        <div className="grid grid-cols-2 gap-3 mt-10">
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/blog/beachcombing/no-barbecues-sefton-coast-sign.webp"
              alt="Sign at Ainsdale: no barbecues and no fires on the beach and dunes"
              className="w-full h-44 object-cover"
              caption="No barbecues or fires: the sign at Ainsdale."
            />
            <p className="text-xs text-[var(--slate)]/60 mt-1 px-0.5">No barbecues or fires</p>
          </div>
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/blog/beachcombing/england-coast-path-sign-ainsdale.webp"
              alt="England Coast Path sign at Ainsdale"
              className="w-full h-44 object-cover"
              caption="England Coast Path sign at Ainsdale."
            />
            <p className="text-xs text-[var(--slate)]/60 mt-1 px-0.5">England Coast Path sign</p>
          </div>
        </div>

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
          <Link href="/nature/birkdale-green-beach" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birkdale Green Beach →</Link>
          <Link href="/nature/formby-point" className="text-[var(--marsh)] font-medium hover:underline text-sm">Formby Point →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
