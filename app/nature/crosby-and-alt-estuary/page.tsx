import Link from "next/link";
import type { Metadata } from "next";
import { SiteGuideFacts } from "@/components/SiteGuideFacts";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Crosby, Hall Road and the Alt Estuary: Roosts, Parking and Safety";
const description =
  "Guide to Crosby Coastal Park and the Alt estuary at Hightown for birdwatchers: stations, car parks, the wader and goose roosts off Hightown, the 50m safety rule on Crosby beach, and dogs, from Sefton Council's pages.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/crosby-and-alt-estuary";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Crosby Coastal Park and the Alt estuary",
  description:
    "Sefton Council's Crosby Coastal Park, from Waterloo to the estuary of the River Alt at Hightown, part of the Ribble and Alt Estuaries Special Protection Area.",
  url,
  address: { "@type": "PostalAddress", addressLocality: "Crosby", addressRegion: "Merseyside", addressCountry: "GB" },
};

const sources = [
  used(SRC.seftonCrosbyCoastalPark, "the park's extent, its designations, stations, buses and car parks"),
  used(SRC.seftonCrosbyBeach, "the 50m safety rule, lifeguards, stations and car park names"),
  used(SRC.seftonAnotherPlace, "the Another Place figures"),
  used(SRC.seftonCalendar, "the roost on the sandbanks off Hightown, the Pink-footed Goose roosts, winter wader roosts, Sand Lizards and the advice on disturbance"),
  used(SRC.neRibbleAltSpaDetail, "how the Sefton shore merges into the Alt estuary and the Alt's flats and saltmarsh"),
  used(SRC.neRibbleAltSpaCitation, "the Alt Estuary SPA of 1985 and the 2002 extension"),
  used(SRC.neMerseyNarrowsSpaDetail, "birds from the Mersey roosting at the high-tide mark near Hightown"),
  used(SRC.neSeftonSsssiCitation, "the Alt's saltmarsh and reedbed, the Hightown shingle bank and the sandhill rustic moth"),
  used(SRC.seftonAinsdaleBeach, "dogs near roosting birds and the Wildlife and Countryside Act"),
  used(SRC.seftonFindParking, "car park times and prices"),
];

export default function CrosbyAltEstuaryPage() {
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
            <span className="text-white/80">Crosby and the Alt estuary</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Sefton Council · Crosby, Hall Road and Hightown
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Crosby, Hall Road and the Alt estuary</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Crosby Coastal Park runs from Waterloo to the estuary of the River Alt at Hightown. Sefton Council names the sandbanks off Hightown, north of Hall Road, as one of the coast&apos;s three key roost areas, and Pink-footed Geese roost on the shore at Hightown in autumn.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-[var(--slate)] mb-10 leading-relaxed">
          Natural England describes the outer flats of the Ribble running south as a wide sandy shore along the Sefton Coast, merging into the Alt estuary and reaching as far south as Crosby. The Alt&apos;s central flats are sandy with more mud, and there is a small saltmarsh on the east bank of the channel. The Alt Estuary was first classified as a Special Protection Area in 1985 and is now part of the Ribble and Alt Estuaries SPA.
        </p>

        <SiteGuideFacts
          name="Crosby and the Alt"
          checked="11 November 2026"
          managedBy={
            <>
              Sefton Council, as Crosby Coastal Park. The council lists the park as a Site of Local Biological Interest, part of the Sefton Coast Special Area of Conservation and part of the Ribble and Alt Estuaries Special Protection Area.
            </>
          }
          official={[{ label: "Natural England: Ribble and Alt Estuaries SPA record", url: SRC.neRibbleAltSpaDetail.url }]}
          gettingThere={[
            <>By train: the council says Blundellsands and Crosby, Waterloo and Hall Road stations on Merseyrail are all in easy walking distance. Blundellsands and Crosby is closest to the beach entrance for the Another Place figures; Waterloo is a short stroll from the park&apos;s gardens and Marine Lake.</>,
            <>By bus: the council says many regular routes serve the area.</>,
            <>On foot or by bike: the park has a promenade and a coastal footpath and cycleway.</>,
          ]}
          parking={[
            <>Car parks are off Cambridge Road, Blucher Street, Mariners Road and Hall Road West.</>,
            <>The council asks drivers to plan ahead to avoid traffic delays and to park considerately. Its find-parking page lists car park times and prices.</>,
          ]}
          paths={[
            <>The promenade and the coastal footpath and cycleway run along the park. Antony Gormley&apos;s Another Place, 100 cast-iron figures, stands along about 3km of the shore and almost a mile out to sea.</>,
            <>The Sefton Coast SSSI citation records small areas of saltmarsh and reedbed near the mouth of the Alt, and an artificial shingle bank at Hightown, formed where erosion has exposed old dumped sea defences, with sea kale, rock samphire, viper&apos;s-bugloss and yellow-horned poppy.</>,
          ]}
          seasons={[
            {
              season: "Spring",
              text: "Sefton Council's nature calendar names the sandbanks off Hightown north of Hall Road as one of three key areas for roosts as spring migration builds in April.",
            },
            {
              season: "Summer",
              text: "The council says the grasslands at Crosby Coastal Park are a mix of wildflowers in July thanks to the mowing regime, and that young Sand Lizards hatch in the frontal dunes from Hightown to Birkdale in August. The SSSI citation records the Red Data Book sandhill rustic moth on the embryo dunes and strandline at Altcar.",
            },
            {
              season: "Autumn",
              text: "Pink-footed Geese begin to arrive from Iceland in September, with large roosts building on the sands off Hightown by the end of the month, and thousands roost on the shore at Hightown in October (Sefton Council). Natural England notes that birds from the Mersey Narrows may roost at the high-tide mark near Hightown.",
              birds: ["pink-footed-goose"],
            },
            {
              season: "Winter",
              text: "By December, the council says, roosts of Knot, godwits, Sanderling and Dunlin are well established on the coast and are highly susceptible to disturbance at high tide and in bad weather.",
              birds: ["knot", "bar-tailed-godwit", "sanderling", "dunlin"],
            },
          ]}
          tide={[
            <>Crosby beach is not a bathing beach. Sefton Council says it has areas of soft sand and mud and a risk of changing tides, and that visitors should stay out of the sea and within 50 metres of the promenade at all tides. Watch from the promenade.</>,
            <>The roosts form over high tide. If birds run or fly ahead of you, you are too close.</>,
            <>Sefton Council says RNLI lifeguards are on Crosby beach all year, but that there is no patrolled bathing area.</>,
          ]}
          access={[
            <>No barbecues or fires anywhere on the coast.</>,
            <>Take litter home or use the large bins at the Cambridge Road, Blucher Street, Mariners Road and Hall Road car parks.</>,
          ]}
          dogs={[
            <>Keep dogs under close control, and on a lead if you cannot control them.</>,
            <>Keep dogs away from roosting waders, terns and gulls. Sefton Council says it is a criminal offence under the Wildlife and Countryside Act 1981 to allow your dog to disturb them.</>,
          ]}
        />

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 mt-12 border-t border-[var(--dune)]">
          <Link href="/nature" className="text-[var(--marsh)] font-medium hover:underline text-sm">All site guides →</Link>
          <Link href="/nature/formby-point" className="text-[var(--marsh)] font-medium hover:underline text-sm">Formby Point →</Link>
          <Link href="/nature/seaforth-nature-reserve" className="text-[var(--marsh)] font-medium hover:underline text-sm">Seaforth Nature Reserve →</Link>
          <Link href="/seasonal/month-by-month" className="text-[var(--marsh)] font-medium hover:underline text-sm">Month by month →</Link>
          <Link href="/nature/designations" className="text-[var(--marsh)] font-medium hover:underline text-sm">Protected sites →</Link>
        </div>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
