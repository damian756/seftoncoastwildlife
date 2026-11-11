import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SourceList } from "@/components/SourceList";
import { SRC, SOURCES_ACCESSED, used } from "@/lib/sources";
import { DEFAULT_OG_IMAGE } from "@/lib/og";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const title = "Protected Sites of the Sefton Coast: SPA, Ramsar, SAC, SSSI, NNR and LNR";
const description =
  "Sefton Coast protected sites as the official citations give them: what each protects, its area and who is responsible, linked to Natural England, JNCC and gov.uk.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/designations";
const UPDATED = "11 November 2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary", title, description },
};

interface Designation {
  id: string;
  name: string;
  type: string;
  code?: string;
  dates: string;
  area: string;
  protects: ReactNode;
  where: ReactNode;
  responsible: ReactNode;
  records: { label: string; url: string }[];
  guides?: { label: string; href: string }[];
}

const INTERNATIONAL: Designation[] = [
  {
    id: "ribble-alt-spa",
    name: "Ribble and Alt Estuaries Special Protection Area",
    type: "Special Protection Area (SPA), classified under the Birds Directive",
    code: "UK9005103",
    dates: "The Ribble Estuary SPA was classified on 31 August 1982 and the Alt Estuary SPA on 28 November 1985. They were combined as the Ribble and Alt Estuaries SPA on 16 February 1995, and an extension at the southern end of the Sefton Coast SSSI was classified on 28 November 2002.",
    area: "12,412.31 hectares (citation)",
    protects: (
      <>
        Internationally important numbers of waterbirds in winter, including swans, geese, ducks and waders; wader populations moving along the west coast of Britain on spring and autumn migration; and breeding gulls and terns. The qualifying features on Natural England&apos;s record are Bar-tailed Godwit, Bewick&apos;s Swan, Black-tailed Godwit, Dunlin, Golden Plover, Grey Plover, Knot, Oystercatcher, Pink-footed Goose, Pintail, Redshank, Ringed Plover, Sanderling, Shelduck, Teal, Whooper Swan and Wigeon outside the breeding season; Common Tern, Lesser Black-backed Gull and Ruff as breeding birds; and the waterbird and seabird assemblages. The citation gives the counts behind each feature.
      </>
    ),
    where: (
      <>
        The two estuaries and the shore between them. Natural England describes the inner flats of the Ribble flanked by large areas of saltmarsh, and the sandy outer flats running south as a wide shore along the Sefton Coast, merging into the Alt estuary and reaching as far south as Crosby. It covers all or parts of the Ribble Estuary SSSI and the Sefton Coast SSSI, in Lancashire and Sefton.
      </>
    ),
    responsible: <>Natural England holds the classification citation and the official site record. Much of the SPA lies within the Ribble Estuary National Nature Reserve.</>,
    records: [
      { label: "Natural England: SPA citation (PDF)", url: SRC.neRibbleAltSpaCitation.url },
      { label: "Natural England: Designated Sites View", url: SRC.neRibbleAltSpaDetail.url },
      { label: "gov.uk: Ribble and Alt Estuaries SPA factsheet (PDF)", url: "https://assets.publishing.service.gov.uk/media/5def787fed915d15ec797ee1/Ribble_and_Alt_Estuaries_SPA_Factsheet.pdf" },
    ],
    guides: [
      { label: "Marshside", href: "/nature/marshside-rspb" },
      { label: "Hesketh Out Marsh", href: "/nature/hesketh-out-marsh" },
      { label: "Crosby and the Alt", href: "/nature/crosby-and-alt-estuary" },
    ],
  },
  {
    id: "ribble-alt-ramsar",
    name: "Ribble and Alt Estuaries Ramsar site",
    type: "Wetland of International Importance under the Ramsar Convention",
    code: "UK11057",
    dates: "Designated 16 February 1995 (JNCC Ramsar Information Sheet, version 3.0, 2008).",
    area: "13,464.1 hectares (Ramsar Information Sheet)",
    protects: (
      <>
        The sheet gives three Ramsar criteria. Criterion 2: the site supports up to 40% of Great Britain&apos;s natterjack toads. Criteria 5 and 6: an internationally important assemblage of waterbirds, and internationally important numbers of individual species. Natural England&apos;s record lists the natterjack toad; wintering Bar-tailed Godwit, Bewick&apos;s Swan, Black-tailed Godwit, Dunlin, Grey Plover, Knot, Oystercatcher, Pink-footed Goose, Pintail, Redshank, Sanderling, Shelduck, Teal, Whooper Swan and Wigeon; Redshank, Ringed Plover and Sanderling on passage; breeding Lesser Black-backed Gull; and the wintering waterbird and breeding wetland bird assemblages.
      </>
    ),
    where: (
      <>
        A stretch of coast between Liverpool and Preston, taking in two estuaries: sand and mudflats backed in the north by the saltmarsh of the Ribble and in the south by the sand dunes of the Sefton Coast. The dunes are home to the natterjacks for which criterion 2 applies.
      </>
    ),
    responsible: <>JNCC compiled the Ramsar Information Sheet. Natural England holds the site record, which is underpinned by the Ribble Estuary and Sefton Coast SSSIs.</>,
    records: [
      { label: "JNCC: Ramsar Information Sheet UK11057 (PDF)", url: SRC.jnccRibbleAltRamsar.url },
      { label: "Natural England: Designated Sites View", url: SRC.neRibbleAltRamsarDetail.url },
    ],
    guides: [
      { label: "Ainsdale Sand Dunes NNR", href: "/nature/ainsdale-sand-dunes" },
      { label: "Birkdale Green Beach", href: "/nature/birkdale-green-beach" },
    ],
  },
  {
    id: "sefton-coast-sac",
    name: "Sefton Coast Special Area of Conservation",
    type: "Special Area of Conservation (SAC), designated under the Habitats Directive",
    code: "UK0013076",
    dates: "Designated on 1 April 2005; entered in the Register of European Sites on 14 June 2005.",
    area: "4,563.97 hectares in the 2005 citation; Natural England's current record gives 4,587.84 hectares and the JNCC Standard Data Form 4,591.59 hectares",
    protects: (
      <>
        Six dune habitats: embryonic shifting dunes; shifting dunes with marram (&lsquo;white dunes&rsquo;); fixed dunes with herbaceous vegetation (&lsquo;grey dunes&rsquo;, a priority habitat); Atlantic decalcified fixed dunes, or coastal dune heathland (a priority habitat); dunes with creeping willow; and humid dune slacks. Two species: the great crested newt and the liverwort petalwort. The citation estimates that 43% of England&apos;s main creeping willow dune-slack community is here, and that petalwort, first recorded at Ainsdale in 1861, is still found in the dunes between Southport and Ainsdale.
      </>
    ),
    where: <>The dune system of the Sefton Coast. Its component site is the Sefton Coast SSSI.</>,
    responsible: <>The citation was signed on behalf of the Secretary of State for Environment, Food and Rural Affairs. Natural England holds the citation and site record; JNCC publishes the Standard Data Form.</>,
    records: [
      { label: "Natural England: SAC citation (PDF)", url: SRC.neSeftonSacCitation.url },
      { label: "Natural England: Designated Sites View", url: SRC.neSeftonSacDetail.url },
      { label: "JNCC: Standard Data Form (PDF)", url: SRC.jnccSeftonSacForm.url },
    ],
    guides: [
      { label: "Ainsdale Sand Dunes NNR", href: "/nature/ainsdale-sand-dunes" },
      { label: "Formby Point", href: "/nature/formby-point" },
    ],
  },
  {
    id: "mersey-narrows-spa",
    name: "Mersey Narrows and North Wirral Foreshore SPA and Ramsar site",
    type: "Special Protection Area (SPA) and Ramsar site",
    code: "SPA UK9020287; Ramsar UK11042",
    dates: "The SPA was entered in the Register of European Sites on 5 July 2013, and the Ramsar site was designated the same day (JNCC Ramsar Information Sheet).",
    area: "2,078.41 hectares (SPA citation and Ramsar Information Sheet)",
    protects: (
      <>
        Non-breeding Bar-tailed Godwit and Knot, Common Terns in both the breeding and non-breeding seasons, non-breeding Little Gulls, and a non-breeding waterbird assemblage. The Ramsar record lists the same species, all as wintering features.
      </>
    ),
    where: (
      <>
        Three areas at the mouths of the Mersey and Dee: the Egremont foreshore on the Wirral, the man-made lagoons at Seaforth on the Sefton side, and the North Wirral Foreshore. Its boundary matches the Mersey Narrows SSSI and North Wirral Foreshore SSSI. Seaforth is mainly a high-tide roost and a tern nesting site.
      </>
    ),
    responsible: <>The SPA citation was signed on behalf of the Secretary of State for Environment, Food and Rural Affairs. Natural England holds the citations and site records.</>,
    records: [
      { label: "Natural England: SPA citation (PDF)", url: SRC.neMerseyNarrowsSpaCitation.url },
      { label: "Natural England: SPA record", url: SRC.neMerseyNarrowsSpaDetail.url },
      { label: "Natural England: Ramsar record", url: SRC.neMerseyNarrowsRamsarDetail.url },
      { label: "JNCC: Ramsar Information Sheet UK11042 (PDF)", url: SRC.jnccMerseyNarrowsRamsar.url },
    ],
    guides: [{ label: "Seaforth Nature Reserve", href: "/nature/seaforth-nature-reserve" }],
  },
  {
    id: "liverpool-bay-spa",
    name: "Liverpool Bay / Bae Lerpwl SPA",
    type: "Marine Special Protection Area (SPA)",
    code: "UK9020294",
    dates: "Classified as an SPA in August 2010; reclassified in October 2017 with new protected features and boundary changes (JNCC site timeline).",
    area: "About 2,528 square kilometres (JNCC)",
    protects: (
      <>
        Red-throated Diver, Common Scoter and Little Gull outside the breeding season; Common Tern and Little Tern in the breeding season; and an internationally important waterbird assemblage. JNCC says it includes foraging areas for Common Terns breeding at the Mersey Narrows and North Wirral Foreshore SPA.
      </>
    ),
    where: <>The east of the Irish Sea, bordering the coasts of north-west England and north Wales in a broad arc from Morecambe Bay to the east coast of Anglesey. It extends beyond 12 nautical miles, so it lies partly in English and Welsh territorial waters and partly in offshore waters.</>,
    responsible: <>JNCC says the UK Government classified it to meet obligations under the Birds Directive. Natural England, Natural Resources Wales and JNCC share responsibility for statutory advice, according to JNCC. In offshore waters it is protected by the Conservation of Offshore Marine Habitats and Species Regulations 2017.</>,
    records: [
      { label: "JNCC: Liverpool Bay / Bae Lerpwl SPA", url: SRC.jnccLiverpoolBay.url },
      { label: "JNCC: Standard Data Form (PDF)", url: SRC.jnccLiverpoolBaySdf.url },
    ],
  },
];

const NATIONAL: Designation[] = [
  {
    id: "sefton-coast-sssi",
    name: "Sefton Coast Site of Special Scientific Interest",
    type: "SSSI, notified under Section 28 of the Wildlife and Countryside Act 1981",
    dates: "Notified on 16 August 2000. It includes five SSSIs first notified between 1963 and 1983.",
    area: "4,605.32 hectares",
    protects: (
      <>
        Intertidal mud and sandflats, embryonic and mobile dunes, dunes with creeping willow, humid dune slacks, fixed dunes, dune grassland and dune heath, with small areas of saltmarsh; plants including grey hair-grass, petalwort and the moss Bryum neodamense; internationally important wintering waterfowl and waders; sand lizard, natterjack toad and great crested newt; the sandhill rustic moth; and the coast&apos;s geomorphology, especially its large mobile dune system and the sand bars on the foreshore.
      </>
    ),
    where: <>More than 20km of coast between Southport and Crosby: the foreshore and the dune system behind it. The local planning authority is Sefton Council.</>,
    responsible: <>Natural England holds the citation and site record. The SSSI underpins the Sefton Coast SAC and, with the Ribble Estuary SSSI, the Ribble and Alt Estuaries SPA and Ramsar site.</>,
    records: [{ label: "Natural England: SSSI citation (PDF)", url: SRC.neSeftonSsssiCitation.url }],
    guides: [
      { label: "Birkdale Green Beach", href: "/nature/birkdale-green-beach" },
      { label: "Ainsdale Sand Dunes NNR", href: "/nature/ainsdale-sand-dunes" },
      { label: "Formby Point", href: "/nature/formby-point" },
      { label: "Crosby and the Alt", href: "/nature/crosby-and-alt-estuary" },
    ],
  },
  {
    id: "ribble-estuary-sssi",
    name: "Ribble Estuary Site of Special Scientific Interest",
    type: "SSSI, notified under Section 28 of the Wildlife and Countryside Act 1981",
    dates: "Notified under the 1981 Act in 1984. Earlier notifications under the 1949 Act covered the Southport Sanctuary (1966) and the Ribble Estuary (1976).",
    area: "9,226.3 hectares, of which 2,501.6 hectares are in Merseyside",
    protects: (
      <>
        Passage and wintering waterfowl of international importance, as a major link in the chain of west-coast estuaries used on migration; breeding saltmarsh birds including Black-headed Gull, Common Tern and Redshank; and the reclaimed unimproved grazing marsh behind the Coastal Road, used as a high-tide roost.
      </>
    ),
    where: (
      <>
        The Ribble Estuary west of Preston, between Southport and Lytham St Annes and inland to Longton. It includes the Ribble Marshes National Nature Reserve. Most of the Sefton foreshore outside the NNR is the Southport Sanctuary, a statutory bird sanctuary under the Wild Birds (Southport Sanctuary) Order 1956, which gives Pink-footed Geese a protected low-tide roost.
      </>
    ),
    responsible: <>Natural England holds the citation and site record. Local planning authorities: Fylde, Sefton, South Ribble and West Lancashire councils.</>,
    records: [{ label: "Natural England: SSSI citation (PDF)", url: SRC.neRibbleSsssiCitation.url }],
    guides: [
      { label: "Marshside", href: "/nature/marshside-rspb" },
      { label: "Hesketh Out Marsh", href: "/nature/hesketh-out-marsh" },
    ],
  },
  {
    id: "mersey-narrows-sssi",
    name: "Mersey Narrows Site of Special Scientific Interest",
    type: "SSSI, notified under Section 28 of the Wildlife and Countryside Act 1981",
    dates: "Notified on 9 August 2000.",
    area: "117.84 hectares",
    protects: <>Intertidal sand and mudflats supporting internationally important Turnstone and Redshank and nationally important Cormorant. Seaforth is a high-tide roost, especially on high spring tides.</>,
    where: <>Seaforth on the north bank of the Mersey and the Egremont foreshore on the south bank, about 2km apart. Local planning authorities: Wirral and Sefton councils.</>,
    responsible: <>Natural England holds the citation and site record.</>,
    records: [{ label: "Natural England: SSSI citation (PDF)", url: SRC.neMerseyNarrowsSsssiCitation.url }],
    guides: [{ label: "Seaforth Nature Reserve", href: "/nature/seaforth-nature-reserve" }],
  },
  {
    id: "ribble-estuary-nnr",
    name: "Ribble Estuary National Nature Reserve",
    type: "National Nature Reserve (NNR)",
    dates: "First declared in 1979 to protect the saltmarsh from conversion to arable fields, and extended three times since.",
    area: "5,231 hectares; Natural England calls it the third largest NNR in England, covering over half of the estuary",
    protects: <>Mud and sandflats, one of the largest single areas of saltmarsh in England, and one of the largest areas of restored saltmarsh in Britain. Natural England says up to a quarter of a million birds use the estuary each year.</>,
    where: <>Both sides of the Ribble Estuary, from Lytham on the north bank to Marshside on the south bank, including Marshside and Hesketh Out Marsh.</>,
    responsible: <>Managed jointly by Natural England, the RSPB and the Lytham and District Wildfowlers Association under a Nature Reserve Agreement.</>,
    records: [
      { label: "Natural England: Merseyside's National Nature Reserves", url: SRC.neMerseysideNnrs.url },
      { label: "Natural England: Designated Sites View", url: SRC.neRibbleNnr.url },
    ],
    guides: [
      { label: "Marshside", href: "/nature/marshside-rspb" },
      { label: "Hesketh Out Marsh", href: "/nature/hesketh-out-marsh" },
    ],
  },
  {
    id: "ainsdale-nnr",
    name: "Ainsdale Sand Dunes National Nature Reserve",
    type: "National Nature Reserve (NNR)",
    dates: "Declared in 1965 (Sefton Coast SSSI citation).",
    area: "About 492 hectares (Natural England)",
    protects: <>Coastal sand dunes, slacks and pinewood. Natural England names over 450 plant species, one of the best remaining strongholds of the natterjack toad, sand lizards, great crested newts and occasional red squirrels.</>,
    where: <>The dunes between Ainsdale-on-Sea and Freshfield, south of the Ainsdale and Birkdale Hills LNR and north of the National Trust land at Formby.</>,
    responsible: <>Managed by Natural England. It is legally underpinned by the Sefton Coast SSSI.</>,
    records: [
      { label: "Natural England: Merseyside's National Nature Reserves", url: SRC.neMerseysideNnrs.url },
      { label: "Natural England: Designated Sites View", url: SRC.neAinsdaleNnr.url },
    ],
    guides: [{ label: "Ainsdale Sand Dunes NNR", href: "/nature/ainsdale-sand-dunes" }],
  },
  {
    id: "cabin-hill-nnr",
    name: "Cabin Hill National Nature Reserve",
    type: "National Nature Reserve (NNR)",
    dates: "Declared in 1991 (Sefton Coast SSSI citation).",
    area: "About 28 hectares (Natural England)",
    protects: <>Natural England describes classic coastal succession, from intertidal sand flats and embryo dunes to mobile yellow dunes, with slacks, dune grassland and woodland. Its shore is a feeding and roosting ground for Knot, Grey Plover and Bar-tailed Godwit, and it has sand lizards and natterjack toads.</>,
    where: <>On the outskirts of Formby, with the Sefton Coastal Footpath along its eastern edge.</>,
    responsible: <>Managed by Natural England, with voluntary wardens. It is legally underpinned by the Sefton Coast SSSI.</>,
    records: [
      { label: "Natural England: Merseyside's National Nature Reserves", url: SRC.neMerseysideNnrs.url },
      { label: "Natural England: Designated Sites View", url: SRC.neCabinHillNnr.url },
    ],
    guides: [{ label: "Formby Point", href: "/nature/formby-point" }],
  },
];

const LOCAL: Designation[] = [
  {
    id: "ainsdale-birkdale-lnr",
    name: "Ainsdale and Birkdale Hills (Sandhills) Local Nature Reserve",
    type: "Local Nature Reserve (LNR)",
    dates: "Declared in 1980 by Sefton Borough Council.",
    area: "296.04 hectares on Natural England's register; Sefton Council's page gives 988 hectares of open dunes and beach",
    protects: <>Wild dunes with high ridges and slacks, some of them natterjack breeding pools, and dune plants including early marsh orchid, marsh helleborine, grass of Parnassus, round-leaved wintergreen and dune helleborine.</>,
    where: <>Between Ainsdale Sand Dunes NNR in the south, Weld Road in Southport in the north and the Royal Birkdale and Hillside golf links to the east.</>,
    responsible: <>Owned by Sefton Council and managed by its coast and countryside service (Natural England&apos;s register).</>,
    records: [{ label: "Natural England: LNR record", url: SRC.neAinsdaleLnr.url }],
    guides: [{ label: "Birkdale Green Beach", href: "/nature/birkdale-green-beach" }],
  },
  {
    id: "ravenmeols-lnr",
    name: "Ravenmeols Hills Local Nature Reserve",
    type: "Local Nature Reserve (LNR)",
    dates: "Declared on 1 December 1983 by Sefton Borough Council.",
    area: "74.4 hectares",
    protects: <>A wide sandy beach, high dunes, furrowed grassland that was once asparagus fields, scrub and a belt of pinewoods. Natural England notes its importance for natterjack toads.</>,
    where: <>Off Lifeboat Road, Formby, near Formby station.</>,
    responsible: <>Owned by Sefton Council and managed by its coast and countryside service, according to Natural England&apos;s register.</>,
    records: [{ label: "Natural England: LNR record", url: SRC.neRavenmeolsLnr.url }],
    guides: [{ label: "Formby Point", href: "/nature/formby-point" }],
  },
];

const NEARBY: Designation[] = [
  {
    id: "ribble-estuary-mcz",
    name: "Ribble Estuary Marine Conservation Zone",
    type: "Marine Conservation Zone (MCZ)",
    dates: "Designated by the Ribble Estuary Marine Conservation Zone Designation Order 2019, made on 20 May 2019 and in force from 31 May 2019.",
    area: "About 15 square kilometres",
    protects: <>Smelt. Natural England notes the estuary&apos;s saltmarsh as a nursery for many fish.</>,
    where: <>The upper Ribble near Preston, to the tidal limits on the Ribble, the Douglas and the Yarrow. The outer estuary is already within the SPA, Ramsar site and SSSI.</>,
    responsible: <>The Secretary of State made the designation order under the Marine and Coastal Access Act 2009. Natural England holds the site record.</>,
    records: [
      { label: "Natural England: MCZ record", url: SRC.neRibbleMcz.url },
      { label: "gov.uk: Ribble Estuary MCZ", url: SRC.govukRibbleMcz.url },
      { label: "legislation.gov.uk: Designation Order 2019", url: SRC.legRibbleMczOrder.url },
    ],
  },
];

const sources = [
  used(SRC.neRibbleAltSpaCitation, "SPA dates, area, description and qualifying species"),
  used(SRC.neRibbleAltSpaDetail, "the SPA's current features and description"),
  used(SRC.jnccRibbleAltRamsar, "Ramsar designation date, area, criteria and overview"),
  used(SRC.neRibbleAltRamsarDetail, "the Ramsar site's features"),
  used(SRC.neSeftonSacCitation, "SAC designation, area, habitats, species and description"),
  used(SRC.neSeftonSacDetail, "the SAC's current area and features"),
  used(SRC.jnccSeftonSacForm, "the SAC's Standard Data Form and its area"),
  used(SRC.neMerseyNarrowsSpaCitation, "Mersey Narrows SPA area, boundary, description and features"),
  used(SRC.neMerseyNarrowsSpaDetail, "the SPA's features and Seaforth's role"),
  used(SRC.neMerseyNarrowsRamsarDetail, "the Ramsar site's features, all wintering"),
  used(SRC.jnccMerseyNarrowsRamsar, "the Mersey Narrows Ramsar designation date and area"),
  used(SRC.jnccLiverpoolBay, "Liverpool Bay SPA features, extent and responsibility"),
  used(SRC.jnccLiverpoolBaySdf, "the Liverpool Bay SPA site code and classification date"),
  used(SRC.neSeftonSsssiCitation, "Sefton Coast SSSI notification, area, reasons and the NNR and LNR declaration dates"),
  used(SRC.neRibbleSsssiCitation, "Ribble Estuary SSSI notification, area, description and the Southport Sanctuary"),
  used(SRC.neMerseyNarrowsSsssiCitation, "Mersey Narrows SSSI notification, area and description"),
  used(SRC.neMerseysideNnrs, "the three NNRs in Merseyside"),
  used(SRC.neRibbleNnr, "the Ribble Estuary NNR record"),
  used(SRC.neAinsdaleNnr, "Ainsdale NNR area and underpinning"),
  used(SRC.neCabinHillNnr, "Cabin Hill NNR area and underpinning"),
  used(SRC.neAinsdaleLnr, "Ainsdale and Birkdale Hills LNR declaration, area, owner, manager and location"),
  used(SRC.seftonLnr, "the council's description and area of the LNR"),
  used(SRC.neRavenmeolsLnr, "Ravenmeols Hills LNR declaration, area, owner, manager and description"),
  used(SRC.neRibbleMcz, "the Ribble Estuary MCZ"),
  used(SRC.govukRibbleMcz, "the MCZ's area and announcement on 31 May 2019"),
  used(SRC.legRibbleMczOrder, "the MCZ designation order: made 20 May 2019, in force 31 May 2019, under the Marine and Coastal Access Act 2009"),
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Protected sites of the Sefton Coast: SPA, Ramsar, SAC, SSSI, NNR and LNR",
  description,
  url,
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  // No byline on the page: the site is the author.
  author: { "@type": "Organization", name: "Sefton Coast Wildlife", url: "https://www.seftoncoastwildlife.co.uk" },
  publisher: { "@type": "Organization", name: "Sefton Coast Wildlife", url: "https://www.seftoncoastwildlife.co.uk" },
};

function DesignationCard({ d }: { d: Designation }) {
  return (
    <article id={d.id} className="scroll-mt-24 rounded-xl border border-[var(--dune)] bg-white p-5 sm:p-6">
      <h3 className="font-display text-xl font-bold text-[var(--forest)]">{d.name}</h3>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--marsh)] mt-1">
        {d.type}
        {d.code ? ` · ${d.code}` : ""}
      </p>
      <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm text-[var(--slate)] leading-relaxed sm:grid-cols-[9rem_1fr]">
        <dt className="font-semibold text-[var(--forest)]">What it protects</dt>
        <dd>{d.protects}</dd>
        <dt className="font-semibold text-[var(--forest)]">Where</dt>
        <dd>{d.where}</dd>
        <dt className="font-semibold text-[var(--forest)]">Area</dt>
        <dd>{d.area}</dd>
        <dt className="font-semibold text-[var(--forest)]">Dates</dt>
        <dd>{d.dates}</dd>
        <dt className="font-semibold text-[var(--forest)]">Responsible</dt>
        <dd>{d.responsible}</dd>
        <dt className="font-semibold text-[var(--forest)]">Official record</dt>
        <dd>
          {d.records.map((r, i) => (
            <span key={r.url}>
              {i > 0 && <br />}
              <a href={r.url} target="_blank" rel="noopener" className="text-[var(--marsh)] underline underline-offset-2 break-words">{r.label}</a>
            </span>
          ))}
        </dd>
        {d.guides && d.guides.length > 0 && (
          <>
            <dt className="font-semibold text-[var(--forest)]">Site guides</dt>
            <dd>
              {d.guides.map((g, i) => (
                <span key={g.href}>
                  {i > 0 && ", "}
                  <Link href={g.href} className="text-[var(--marsh)] underline underline-offset-2">{g.label}</Link>
                </span>
              ))}
            </dd>
          </>
        )}
      </dl>
    </article>
  );
}

const GROUPS: { id: string; heading: string; intro: string; items: Designation[] }[] = [
  {
    id: "international",
    heading: "International designations",
    intro: "Special Protection Areas (birds, under the Birds Directive), Special Areas of Conservation (habitats and species, under the Habitats Directive) and Ramsar sites (wetlands). Natural England records the coastal ones as underpinned by SSSIs; Liverpool Bay is a marine site.",
    items: INTERNATIONAL,
  },
  {
    id: "national",
    heading: "National designations",
    intro: "Sites of Special Scientific Interest and National Nature Reserves.",
    items: NATIONAL,
  },
  {
    id: "local",
    heading: "Local Nature Reserves",
    intro: "Declared by Sefton Council and recorded by Natural England.",
    items: LOCAL,
  },
  {
    id: "nearby",
    heading: "Nearby",
    intro: "A designation upstream on the Ribble, outside Sefton but on the same estuary.",
    items: NEARBY,
  },
];

export default function DesignationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Nature", path: "/nature" }, { name: "Protected sites" }]} path="/nature/designations" />

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Protected sites</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Reference</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Protected sites of the Sefton Coast</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            The coast&apos;s nature designations as the official citations and records give them: what each protects, the area it covers, and who is responsible. Last updated {UPDATED}.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl bg-[var(--dune)] p-5 text-sm text-[var(--slate)] leading-relaxed mb-10">
          <p>
            This page summarises official documents and links to each one. For boundaries, the counts behind each qualifying feature and the legal wording, use the citation or record linked under each entry. Several designations overlap: the Sefton Coast and Ribble Estuary SSSIs underpin the SPA, SAC and Ramsar site on this coast.
          </p>
        </div>

        <nav aria-label="Contents" className="mb-10">
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Contents</h2>
          <ul className="space-y-1 text-sm">
            {GROUPS.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="text-[var(--marsh)] underline underline-offset-2">{g.heading}</a>
                <ul className="pl-4 mt-1 space-y-0.5">
                  {g.items.map((d) => (
                    <li key={d.id}>
                      <a href={`#${d.id}`} className="text-[var(--slate)] hover:text-[var(--marsh)]">{d.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          {GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-2">{g.heading}</h2>
              <p className="text-sm text-[var(--slate)] mb-5">{g.intro}</p>
              <div className="space-y-5">
                {g.items.map((d) => (
                  <DesignationCard key={d.id} d={d} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-[var(--dune)] bg-white p-5 sm:p-6">
          <h2 className="font-display text-xl font-bold text-[var(--forest)] mb-2">How to cite this page</h2>
          <p className="text-sm text-[var(--slate)] leading-relaxed">
            Sefton Coast Wildlife (2026) <em>Protected Sites of the Sefton Coast: SPA, Ramsar, SAC, SSSI, NNR and LNR</em>. Last updated {UPDATED}. Available at: <span className="break-all">{url}</span> (accessed [date you read it]).
          </p>
          <p className="text-xs text-[var(--slate)]/70 mt-2">
            For any fact you rely on, cite the official citation or record linked in the entry as well.
          </p>
        </section>

        <SourceList sources={sources} accessed={SOURCES_ACCESSED} />
      </div>
    </>
  );
}
