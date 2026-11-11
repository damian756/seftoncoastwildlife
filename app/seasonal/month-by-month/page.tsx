import Link from "next/link";
import type { Metadata } from "next";
import { SourceList, type Source } from "@/components/SourceList";
import { getSpeciesBySlug } from "@/lib/species";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Sefton Coast Wildlife Calendar: What to See Month by Month, and Where";
const description =
  "A month-by-month calendar of birds and other wildlife on the Sefton Coast, with the site to visit for each and the source for every timing: RSPB, BTO, Natural England, the Wildlife Trust, WWT, JNCC and Sefton Council.";
const url = "https://www.seftoncoastwildlife.co.uk/seasonal/month-by-month";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

/* ─── sources used for timings ────────────────────────────── */

const bto = (slug: string, name: string): Source => ({
  publisher: "BTO",
  title: `BirdFacts: ${name}`,
  url: `https://www.bto.org/understanding-birds/birdfacts/${slug}`,
});
const rspbSpecies = (slug: string, name: string): Source => ({
  publisher: "RSPB",
  title: `${name}: bird facts`,
  url: `https://www.rspb.org.uk/birds-and-wildlife/${slug}`,
});

const S = {
  sefton: { ...SRC.seftonCalendar, short: "Sefton Council nature calendar" },
  seftonAinsdale: { ...SRC.seftonAinsdaleBeach, short: "Sefton Council, Ainsdale Beach" },
  bdmlr: { ...SRC.bdmlr, short: "BDMLR" },
  rspbMarshside: { ...SRC.rspbMarshside, short: "RSPB Marshside" },
  rspbLapwing: { ...rspbSpecies("lapwing", "Lapwing"), short: "RSPB Lapwing" },
  rspbWhooper: { ...rspbSpecies("whooper-swan", "Whooper Swan"), short: "RSPB Whooper Swan" },
  ne: { ...SRC.neMerseysideNnrs, short: "Natural England NNRs" },
  neMersey: { ...SRC.neMerseyNarrowsSsssiCitation, short: "Natural England, Mersey Narrows SSSI" },
  lwt: { ...SRC.lwtSeaforth, short: "Wildlife Trust" },
  wwt: { ...SRC.wwtWildlife, short: "WWT wildlife" },
  wwtPlan: { ...SRC.wwtPlan, short: "WWT opening times" },
  jncc: { ...SRC.jnccLiverpoolBay, short: "JNCC" },
  btoPinkfoot: { ...bto("pink-footed-goose", "Pink-footed Goose"), short: "BTO Pink-footed Goose" },
  btoSanderling: { ...bto("sanderling", "Sanderling"), short: "BTO Sanderling" },
  btoKnot: { ...bto("knot", "Knot"), short: "BTO Knot" },
  btoBartail: { ...bto("bar-tailed-godwit", "Bar-tailed Godwit"), short: "BTO Bar-tailed Godwit" },
  btoBlacktail: { ...bto("black-tailed-godwit", "Black-tailed Godwit"), short: "BTO Black-tailed Godwit" },
  btoGreyPlover: { ...bto("grey-plover", "Grey Plover"), short: "BTO Grey Plover" },
  btoCommonTern: { ...bto("common-tern", "Common Tern"), short: "BTO Common Tern" },
  btoPintail: { ...bto("pintail", "Pintail"), short: "BTO Pintail" },
  btoScoter: { ...bto("common-scoter", "Common Scoter"), short: "BTO Common Scoter" },
  btoTeal: { ...bto("teal", "Teal"), short: "BTO Teal" },
} satisfies Record<string, Source & { short: string }>;
type SourceKey = keyof typeof S;
const source = (k: SourceKey): Source & { short: string } => S[k];

/* ─── the calendar ────────────────────────────────────────── */

interface Item {
  text: string;
  where?: { label: string; href: string }[];
  birds?: string[];
  src: SourceKey[];
}
interface Month {
  month: string;
  items: Item[];
}

const G = {
  marshside: { label: "Marshside", href: "/nature/marshside-rspb" },
  hesketh: { label: "Hesketh Out Marsh", href: "/nature/hesketh-out-marsh" },
  birkdale: { label: "Birkdale Green Beach", href: "/nature/birkdale-green-beach" },
  ainsdale: { label: "Ainsdale NNR", href: "/nature/ainsdale-sand-dunes" },
  formby: { label: "Formby Point", href: "/nature/formby-point" },
  crosby: { label: "Crosby and the Alt", href: "/nature/crosby-and-alt-estuary" },
  seaforth: { label: "Seaforth", href: "/nature/seaforth-nature-reserve" },
  martinMere: { label: "WWT Martin Mere", href: "/nature/martin-mere" },
};

const MONTHS: Month[] = [
  {
    month: "January",
    items: [
      {
        text: "The winter wader roosts that Sefton Council says are well established by December are still on the shore. The BTO describes Knot, Sanderling and Bar-tailed Godwit as mainly winter visitors.",
        where: [G.birkdale, G.formby, G.crosby],
        birds: ["knot", "sanderling", "bar-tailed-godwit", "dunlin"],
        src: ["sefton", "btoKnot", "btoSanderling", "btoBartail"],
      },
      {
        text: "Natural England names the winter months as the time for Pink-footed Geese from Iceland and Wigeon from Siberia on the Ribble Estuary.",
        where: [G.marshside, G.hesketh],
        birds: ["pink-footed-goose", "wigeon"],
        src: ["ne"],
      },
      {
        text: "Whooper Swans are WWT's winter star species at Martin Mere, with swan feeds at 3pm.",
        where: [G.martinMere],
        birds: ["whooper-swan"],
        src: ["wwt"],
      },
    ],
  },
  {
    month: "February",
    items: [
      {
        text: "Sefton Council says the roosts of waders and gulls stay large, and that birds weakened by cold days need to save energy: keep dogs and horses well away.",
        where: [G.birkdale, G.formby, G.crosby],
        src: ["sefton"],
      },
      {
        text: "Wintering Pink-footed Geese grow restless. The council says most will soon head back to Iceland, though some stay into late spring; the BTO says birds are present into April or May.",
        where: [G.marshside, G.hesketh],
        birds: ["pink-footed-goose"],
        src: ["sefton", "btoPinkfoot"],
      },
      {
        text: "Amphibians, including Natterjack Toads and Great Crested Newts, begin to emerge. Keep dogs out of the dune pools.",
        where: [G.ainsdale, G.birkdale],
        src: ["sefton"],
      },
    ],
  },
  {
    month: "March",
    items: [
      {
        text: "Sand Lizards and Common Lizards emerge in the frontal dunes, and Natterjack Toads may be spawning by the end of the month, depending on temperatures.",
        where: [G.ainsdale, G.formby],
        src: ["sefton"],
      },
      {
        text: "Lapwings breed from mid-March to June (RSPB). At Marshside, the RSPB says, Lapwings chase off predators that come too close to their nests in spring.",
        where: [G.marshside],
        birds: ["lapwing"],
        src: ["rspbLapwing", "rspbMarshside"],
      },
      {
        text: "Willow Warblers, Chiffchaffs and Blackcaps can now be back on territory by the third week of March, the council says.",
        src: ["sefton"],
      },
      {
        text: "Whooper Swans leave the UK in March and April (RSPB).",
        where: [G.martinMere],
        birds: ["whooper-swan"],
        src: ["rspbWhooper"],
      },
    ],
  },
  {
    month: "April",
    items: [
      {
        text: "Spring migration builds: waders, warblers, Swallows, pipits, chats, gulls and even Ospreys move along the coast. Sefton Council's key roost areas are off the Green Beach between Ainsdale and Birkdale, from Albert Road to the Alt at Formby, and on the sandbanks off Hightown north of Hall Road.",
        where: [G.birkdale, G.formby, G.crosby],
        src: ["sefton"],
      },
      {
        text: "Natterjack Toad breeding is in full swing (Sefton Council). Natural England says natterjacks call around the flooded slacks at Cabin Hill on nights in late April.",
        where: [G.ainsdale, G.formby],
        src: ["sefton", "ne"],
      },
      {
        text: "Migrating Little Gulls pass through Seaforth in spring (Wildlife Trust). Common Terns are present from April (BTO).",
        where: [G.seaforth],
        birds: ["common-tern"],
        src: ["lwt", "btoCommonTern"],
      },
      {
        text: "Ainsdale beach parking opens on 1 April for the summer.",
        where: [G.ainsdale],
        src: ["seftonAinsdale"],
      },
    ],
  },
  {
    month: "May",
    items: [
      {
        text: "Roosts of waders migrating north peak, and roosts of non-breeding birds stay into summer until the end of July (Sefton Council). Sanderling passage continues into late May (BTO).",
        where: [G.birkdale, G.formby, G.crosby],
        birds: ["sanderling"],
        src: ["sefton", "btoSanderling"],
      },
      {
        text: "The RSPB says Avocets and Lapwings nest on the islands at Marshside in summer.",
        where: [G.marshside],
        birds: ["avocet", "lapwing"],
        src: ["rspbMarshside"],
      },
      {
        text: "Natterjack toadlets leave the breeding pools, and Bee and Southern Marsh Orchids begin to flower by the end of the month. From 1 May, Ainsdale and Southport beaches each have a dog-free zone.",
        where: [G.ainsdale, G.birkdale],
        src: ["sefton", "seftonAinsdale"],
      },
    ],
  },
  {
    month: "June",
    items: [
      {
        text: "Early summer brings up to 1% of the UK's Common Terns to Seaforth, sometimes with small numbers of Sandwich, Roseate and Little Terns.",
        where: [G.seaforth],
        birds: ["common-tern"],
        src: ["lwt"],
      },
      {
        text: "Natural England says the Ribble Estuary NNR, which includes Hesketh Out Marsh, holds breeding gulls, terns, Redshanks, Avocets and Lapwings.",
        where: [G.hesketh],
        birds: ["redshank", "avocet", "lapwing"],
        src: ["ne"],
      },
      {
        text: "Up to 11 species of orchid bloom along the coast from Crosby to Marshside in June and July, and Sand Lizards lay their eggs. Grey Seals are more likely close inshore over high tides.",
        where: [G.ainsdale, G.birkdale],
        src: ["sefton"],
      },
    ],
  },
  {
    month: "July",
    items: [
      {
        text: "Sefton Council says autumn begins for the natural world: waders and terns heading south after breeding begin to build along the coast. The BTO says Grey Plover return migration can begin in late July.",
        where: [G.birkdale, G.formby, G.crosby],
        birds: ["grey-plover"],
        src: ["sefton", "btoGreyPlover"],
      },
      {
        text: "Dune, Broad-leaved and Green-flowered Helleborines are usually at their best. Natterjacks move to the upper tideline until the end of September or October; please leave driftwood where it lies.",
        where: [G.ainsdale],
        src: ["sefton"],
      },
    ],
  },
  {
    month: "August",
    items: [
      {
        text: "Migration approaches its peak, with thousands of waders, terns and gulls resting and feeding on the sands (Sefton Council). The BTO notes pronounced autumn passage of Knot and peaks of Bar-tailed and Black-tailed Godwits.",
        where: [G.birkdale, G.formby, G.crosby, G.marshside],
        birds: ["knot", "bar-tailed-godwit", "black-tailed-godwit"],
        src: ["sefton", "btoKnot", "btoBartail", "btoBlacktail"],
      },
      {
        text: "Seawatching: Gannets, shearwaters, skuas, terns and even petrels can be seen from the dunes over high tides when the wind is from the north-west or south-west.",
        where: [G.formby],
        src: ["sefton"],
      },
      {
        text: "Common Terns depart from August, and Pintail are present from late August (BTO). Young Sand Lizards hatch in the frontal dunes from Hightown to Birkdale (Sefton Council).",
        birds: ["common-tern", "pintail"],
        src: ["btoCommonTern", "btoPintail", "sefton"],
      },
    ],
  },
  {
    month: "September",
    items: [
      {
        text: "Pink-footed Geese begin to arrive from Iceland, with large roosts building on the sands off Birkdale and Hightown by the end of the month (Sefton Council). The BTO says they arrive in September.",
        where: [G.birkdale, G.crosby, G.marshside],
        birds: ["pink-footed-goose"],
        src: ["sefton", "btoPinkfoot"],
      },
      {
        text: "Autumn storms can leave migrating birds exhausted on the coast. Keep dogs and horses well away from birds on the beach, especially over high tides.",
        where: [G.birkdale, G.formby, G.crosby],
        src: ["sefton"],
      },
      {
        text: "Ainsdale beach parking ends on 30 September and reopens on 1 April. Sefton Council lists Ainsdale station as within walking distance of the beach.",
        where: [G.ainsdale, G.birkdale],
        src: ["seftonAinsdale"],
      },
    ],
  },
  {
    month: "October",
    items: [
      {
        text: "Winter roosts of waders and gulls build, especially between Ainsdale and Birkdale, and thousands of Pink-footed Geese roost on the shore at Hightown, Birkdale and Southport.",
        where: [G.birkdale, G.crosby],
        birds: ["pink-footed-goose"],
        src: ["sefton"],
      },
      {
        text: "Whooper Swans usually start arriving in October (RSPB). At Martin Mere, WWT says up to 50,000 Pink-footed Geese come in to roost in autumn, with Whooper Swans joining towards the end of the season.",
        where: [G.martinMere],
        birds: ["whooper-swan", "pink-footed-goose"],
        src: ["rspbWhooper", "wwt"],
      },
      {
        text: "Twite use the high-tide line between Weld Road and Fairways in Southport; the council asks that seed-rich debris is left for them. An egret roost builds on the north island of Southport Marine Lake.",
        birds: ["twite"],
        src: ["sefton"],
      },
      {
        text: "From October to December, seal pups and adults may rest on the coast, especially after bad weather. Keep people well away; for a sick or injured seal, dolphin or porpoise, call British Divers Marine Life Rescue on 01825 765546.",
        src: ["sefton", "bdmlr"],
      },
    ],
  },
  {
    month: "November",
    items: [
      {
        text: "Winter roosts are well established. Sefton Council says the birds are highly susceptible to disturbance at high tide and in bad weather, and asks everyone to give them a wide berth: Give Birds A Break.",
        where: [G.birkdale, G.formby, G.crosby],
        src: ["sefton"],
      },
      {
        text: "At Marshside, the winter skies fill with Pink-footed Geese and Wigeons, and large flocks of Golden Plovers, Wigeons and Lapwings rise when a Peregrine or Kestrel arrives. The car park now closes at 4pm. The BTO calls Teal a common winter visitor.",
        where: [G.marshside],
        birds: ["wigeon", "golden-plover", "teal"],
        src: ["rspbMarshside", "btoTeal"],
      },
      {
        text: "Sand Lizards and Natterjack Toads are hibernating in the frontal dunes. Do not dig in the frontal dunes from Hightown to Birkdale.",
        where: [G.ainsdale],
        src: ["sefton"],
      },
    ],
  },
  {
    month: "December",
    items: [
      {
        text: "Roosts of Knot, godwits, Sanderling and Dunlin are well established. Give them a wide berth, especially in cold and windy weather when they need to save energy.",
        where: [G.birkdale, G.formby, G.crosby],
        birds: ["knot", "bar-tailed-godwit", "sanderling", "dunlin"],
        src: ["sefton"],
      },
      {
        text: "Natural England's citation names internationally important numbers of Turnstone and Redshank on the Mersey Narrows in winter, with Seaforth as their high-tide roost.",
        where: [G.seaforth],
        birds: ["turnstone", "redshank"],
        src: ["neMersey"],
      },
      {
        text: "Offshore, the Liverpool Bay SPA protects Red-throated Divers and Common Scoters in the non-breeding season (JNCC). The BTO says Common Scoters are most abundant in winter.",
        birds: ["red-throated-diver", "common-scoter"],
        src: ["jncc", "btoScoter"],
      },
      {
        text: "At Martin Mere, the swan feeds are at 3pm, and Starlings come in to roost in the reedbed at dusk. The centre closes on Christmas Day.",
        where: [G.martinMere],
        birds: ["whooper-swan"],
        src: ["wwt", "wwtPlan"],
      },
    ],
  },
];

function birdName(slug: string) {
  const s = getSpeciesBySlug("birds", slug);
  if (!s) throw new Error(`month-by-month: no bird species page for "${slug}"`);
  return s.commonName;
}

const allSources: Source[] = [
  used(SRC.seftonCalendar, "most monthly timings for roosts, migration, geese, amphibians, reptiles, plants and seals, and the advice on disturbance"),
  used(SRC.seftonAinsdaleBeach, "beach parking season, Ainsdale station and the summer dog-free zones"),
  used(SRC.bdmlr, "the 24-hour rescue hotline for seals, dolphins and porpoises"),
  used(SRC.rspbMarshside, "nesting Avocets and Lapwings, winter geese, Wigeons and plover flocks, and car park hours"),
  used(rspbSpecies("lapwing", "Lapwing"), "the Lapwing breeding season"),
  used(rspbSpecies("whooper-swan", "Whooper Swan"), "when Whooper Swans arrive and leave"),
  used(SRC.neMerseysideNnrs, "winter geese and Wigeon on the Ribble, breeding birds on the Ribble Estuary NNR, and natterjacks at Cabin Hill"),
  used(SRC.neMerseyNarrowsSsssiCitation, "wintering Turnstone and Redshank at the Mersey Narrows"),
  used(SRC.lwtSeaforth, "Little Gulls in spring and Common Terns in early summer at Seaforth"),
  used(SRC.wwtWildlife, "the geese, swans, swan feeds and Starlings at Martin Mere"),
  used(SRC.wwtPlan, "Martin Mere's Christmas closing"),
  used(SRC.jnccLiverpoolBay, "Red-throated Divers and Common Scoters in Liverpool Bay"),
  ...[
    bto("pink-footed-goose", "Pink-footed Goose"),
    bto("knot", "Knot"),
    bto("sanderling", "Sanderling"),
    bto("bar-tailed-godwit", "Bar-tailed Godwit"),
    bto("black-tailed-godwit", "Black-tailed Godwit"),
    bto("grey-plover", "Grey Plover"),
    bto("common-tern", "Common Tern"),
    bto("pintail", "Pintail"),
    bto("teal", "Teal"),
    bto("common-scoter", "Common Scoter"),
  ].map((s) => used(s, "seasonality")),
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to see on the Sefton Coast, month by month",
  description,
  url,
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  publisher: { "@type": "Organization", name: "Sefton Coast Wildlife", url: "https://www.seftoncoastwildlife.co.uk" },
};

export default function MonthByMonthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/seasonal" className="hover:text-white/80 transition">Seasonal guides</Link>
            <span>/</span>
            <span className="text-white/80">Month by month</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Calendar</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">What to see on the Sefton Coast, month by month</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Twelve months of the coast&apos;s birds and other wildlife, each with the place to go and the source for the timing. These are seasons, not promises: birds arrive early or late with the weather, and numbers change from year to year.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <nav aria-label="Months" className="flex flex-wrap gap-2 mb-10">
          {MONTHS.map((m) => (
            <a
              key={m.month}
              href={`#${m.month.toLowerCase()}`}
              className="text-sm px-3 py-1.5 rounded-lg border border-[var(--dune)] bg-white text-[var(--forest)] hover:border-[var(--marsh)]"
            >
              {m.month.slice(0, 3)}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {MONTHS.map((m) => (
            <section key={m.month} id={m.month.toLowerCase()} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">{m.month}</h2>
              <ul className="space-y-5">
                {m.items.map((item, i) => (
                  <li key={i} className="text-sm text-[var(--slate)] leading-relaxed">
                    <p>{item.text}</p>
                    <p className="text-xs mt-1.5 text-[var(--slate)]/80 leading-relaxed">
                      {[
                        item.where && item.where.length > 0 && (
                          <span key="where">
                            Where:{" "}
                            {item.where.map((w, j) => (
                              <span key={w.href}>
                                {j > 0 && ", "}
                                <Link href={w.href} className="text-[var(--marsh)] underline underline-offset-2">{w.label}</Link>
                              </span>
                            ))}
                          </span>
                        ),
                        item.birds && item.birds.length > 0 && (
                          <span key="birds">
                            Species:{" "}
                            {item.birds.map((b, j) => (
                              <span key={b}>
                                {j > 0 && ", "}
                                <Link href={`/birds/${b}`} className="text-[var(--marsh)] underline underline-offset-2">{birdName(b)}</Link>
                              </span>
                            ))}
                          </span>
                        ),
                        item.src.length > 0 && (
                          <span key="src">
                            Source:{" "}
                            {item.src.map((k, j) => {
                              const s = source(k);
                              return (
                                <span key={k}>
                                  {j > 0 && ", "}
                                  {s.url ? (
                                    <a href={s.url} target="_blank" rel="noopener" className="underline underline-offset-2">{s.short}</a>
                                  ) : (
                                    s.short
                                  )}
                                </span>
                              );
                            })}
                          </span>
                        ),
                      ]
                        .filter(Boolean)
                        .map((seg, j) => (
                          <span key={j}>
                            {j > 0 && <span aria-hidden="true"> · </span>}
                            {seg}
                          </span>
                        ))}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-[var(--dune)] p-6 text-sm text-[var(--slate)] leading-relaxed">
          <p className="font-semibold text-[var(--forest)] mb-1">Before you go</p>
          <p>
            Check the managing body&apos;s page for opening times and car park hours, and check the tide: most of the coast&apos;s wader roosts form over high tide. Each{" "}
            <Link href="/nature" className="text-[var(--marsh)] underline underline-offset-2">site guide</Link> has the details, and the{" "}
            <Link href="/nature/designations" className="text-[var(--marsh)] underline underline-offset-2">protected sites page</Link> explains what each designation covers.
          </p>
        </div>

        <SourceList sources={allSources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
