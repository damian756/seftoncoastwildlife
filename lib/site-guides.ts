/**
 * The reserve and site guides under /nature, listed north to south along the coast, then the
 * inland wetland and the coast overview. Used by the nature hub, the navigation and the sitemap.
 * Each summary line comes from the managing body's own page (see each guide's sources).
 */
export interface SiteGuideSummary {
  href: string;
  name: string;
  /** Managing body and place, shown as the card's tag line. */
  tag: string;
  desc: string;
  /** Last date the guide's facts were checked, for the sitemap. */
  checked: string;
}

export const SITE_GUIDES: SiteGuideSummary[] = [
  {
    href: "/nature/hesketh-out-marsh",
    name: "Hesketh Out Marsh RSPB",
    tag: "RSPB · Hesketh Bank, Lancashire",
    desc: "Saltmarsh recreated by managed realignment on the south side of the Ribble. A surfaced trail to Karen's Viewpoint and sea-wall footpaths east and west.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/marshside-rspb",
    name: "Marshside RSPB",
    tag: "RSPB · Southport",
    desc: "Two hides, a viewing platform, screens and three trails beside the Ribble Estuary. Avocets and Lapwings nest in summer; Pink-footed Geese and Wigeons in winter.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/birkdale-green-beach",
    name: "Birkdale Green Beach and the Sandhills LNR",
    tag: "Sefton Council · Birkdale and Ainsdale",
    desc: "Dune slacks and the saltmarsh on Birkdale's beach, between Weld Road and Ainsdale. Off the Green Beach is one of three key wader roost areas Sefton Council names.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/ainsdale-sand-dunes",
    name: "Ainsdale Sand Dunes NNR",
    tag: "Natural England · Ainsdale",
    desc: "About 8 miles of waymarked paths through dunes, slacks and pinewood. A stronghold of the natterjack toad, with sand lizards and great crested newts.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/formby-point",
    name: "Formby Point",
    tag: "National Trust · Formby",
    desc: "Beach, dunes and pinewoods, with Cabin Hill NNR and Ravenmeols LNR alongside. Knot, Grey Plover and Bar-tailed Godwit use the shore.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/crosby-and-alt-estuary",
    name: "Crosby, Hall Road and the Alt estuary",
    tag: "Sefton Council · Crosby to Hightown",
    desc: "Crosby Coastal Park runs from Waterloo to the mouth of the Alt. Waders roost on the sandbanks off Hightown, north of Hall Road.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/seaforth-nature-reserve",
    name: "Seaforth Nature Reserve",
    tag: "Wildlife Trust · Port of Liverpool",
    desc: "Lagoons inside the docks used as a high-tide roost. Little Gulls in spring and Common Terns in summer. Entry by day pass only.",
    checked: "2026-11-11",
  },
  {
    href: "/nature/martin-mere",
    name: "WWT Martin Mere",
    tag: "WWT · Burscough, inland",
    desc: "A wetland centre 10 miles inland from Southport. Pink-footed Geese roost in autumn and Whooper Swans gather in winter.",
    checked: "2026-11-11",
  },
];

/** The coast overview, the calendar and the designations reference, for the hub and sitemap. */
export const NATURE_REFERENCE = [
  {
    href: "/nature/sefton-coast",
    name: "The Sefton Coast",
    tag: "Overview",
    desc: "How the dunes, beaches, saltmarsh and estuaries fit together, and where each site guide sits.",
    checked: "2026-11-11",
  },
  {
    href: "/seasonal/month-by-month",
    name: "Month by month: what to see and where",
    tag: "Calendar",
    desc: "Twelve months of the coast's birds and other wildlife, with the site to visit for each and the source for every timing.",
    checked: "2026-11-11",
  },
];
