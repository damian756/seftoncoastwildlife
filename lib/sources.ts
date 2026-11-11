import type { Source } from "@/components/SourceList";

/**
 * Pages and documents the site guides, the month-by-month calendar and the designations page
 * rely on. All were read on the date in SOURCES_ACCESSED. Keep titles as the publisher gives them.
 */
export const SOURCES_ACCESSED = "11 November 2026";

export const SRC = {
  rspbMarshside: {
    publisher: "RSPB",
    title: "Marshside Nature Reserve, Merseyside",
    url: "https://www.rspb.org.uk/days-out/reserves/marshside",
  },
  rspbHesketh: {
    publisher: "RSPB",
    title: "Hesketh Out Marsh Nature Reserve",
    url: "https://www.rspb.org.uk/days-out/reserves/hesketh-out-marsh",
  },
  rspbBlackTailedGodwit: {
    publisher: "RSPB",
    title: "Black-tailed Godwit: bird facts",
    url: "https://www.rspb.org.uk/birds-and-wildlife/black-tailed-godwit",
  },
  neMerseysideNnrs: {
    publisher: "Natural England",
    title: "Merseyside's National Nature Reserves (updated 9 December 2020)",
    url: "https://www.gov.uk/government/publications/merseysides-national-nature-reserves/merseysides-national-nature-reserves",
  },
  ntFormby: {
    publisher: "National Trust",
    title: "Formby",
    url: "https://www.nationaltrust.org.uk/visit/liverpool-lancashire/formby",
  },
  lwtSeaforth: {
    publisher: "The Wildlife Trust for Lancashire, Manchester and North Merseyside",
    title: "Seaforth Nature Reserve",
    url: "https://www.lancswt.org.uk/nature-reserves/seaforth-nature-reserve",
  },
  wwtPlan: {
    publisher: "WWT",
    title: "Martin Mere: Plan your visit",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/plan-your-visit",
  },
  wwtDirections: {
    publisher: "WWT",
    title: "How to get to Martin Mere Wetland Centre",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/plan-your-visit/directions",
  },
  wwtTickets: {
    publisher: "WWT",
    title: "Martin Mere: Tickets",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/plan-your-visit/tickets",
  },
  wwtAccess: {
    publisher: "WWT",
    title: "Accessibility at Martin Mere Wetland Centre",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/plan-your-visit/accessibility",
  },
  wwtWildlife: {
    publisher: "WWT",
    title: "Wildlife at Martin Mere Wetland Centre",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/wildlife",
  },
  wwtReserve: {
    publisher: "WWT",
    title: "Martin Mere: Nature reserve",
    url: "https://www.wwt.org.uk/wetland-centres/martin-mere/experience/nature-reserve",
  },
  seftonCalendar: {
    publisher: "Sefton Council",
    title: "Sefton's Nature Calendar",
    url: "https://www.sefton.gov.uk/around-sefton/coast-countryside/seftons-nature-calendar/",
  },
  seftonLnr: {
    publisher: "Sefton Council",
    title: "Ainsdale and Birkdale Sandhills Local Nature Reserve",
    url: "https://www.sefton.gov.uk/around-sefton/coast-countryside/ainsdale-and-birkdale-sandhills-local-nature-reserve/",
  },
  seftonAinsdaleBeach: {
    publisher: "Sefton Council",
    title: "Ainsdale Beach",
    url: "https://www.sefton.gov.uk/around-sefton/coast-and-countryside/visiting-our-beaches/ainsdale-beach/",
  },
  seftonCrosbyBeach: {
    publisher: "Sefton Council",
    title: "Crosby Beach",
    url: "https://www.sefton.gov.uk/around-sefton/coast-and-countryside/visiting-our-beaches/crosby-beach/",
  },
  seftonCrosbyCoastalPark: {
    publisher: "Sefton Council",
    title: "Crosby Coastal Park",
    url: "https://www.sefton.gov.uk/around-sefton/parks-and-greenspaces/crosby-coastal-park/",
  },
  seftonAnotherPlace: {
    publisher: "Sefton Council",
    title: "Another Place by Antony Gormley",
    url: "https://www.sefton.gov.uk/around-sefton/another-place-by-antony-gormley/",
  },
  seftonFindParking: {
    publisher: "Sefton Council",
    title: "Find car parks",
    url: "https://www.sefton.gov.uk/find-parking",
  },
  seftonSafeBeaches: {
    publisher: "Sefton Council",
    title: "Enjoying Beaches Safely",
    url: "https://www.sefton.gov.uk/safe-beaches",
  },
  seftonVisitingBeaches: {
    publisher: "Sefton Council",
    title: "Visiting our beaches",
    url: "https://www.sefton.gov.uk/around-sefton/coast-countryside/visiting-our-beaches/",
  },
  neSeftonSsssiCitation: {
    publisher: "Natural England",
    title: "Sefton Coast SSSI citation (notified 16 August 2000)",
    url: "https://designatedsites.naturalengland.org.uk/PDFsForWeb/Citation/2000426.pdf",
  },
  neRibbleSsssiCitation: {
    publisher: "Natural England",
    title: "Ribble Estuary SSSI citation",
    url: "https://designatedsites.naturalengland.org.uk/PDFsForWeb/Citation/1004299.pdf",
  },
  neMerseyNarrowsSsssiCitation: {
    publisher: "Natural England",
    title: "Mersey Narrows SSSI citation (notified 9 August 2000)",
    url: "https://designatedsites.naturalengland.org.uk/PDFsForWeb/Citation/2000436.pdf",
  },
  neRibbleAltSpaCitation: {
    publisher: "Natural England",
    title: "Ribble and Alt Estuaries SPA citation (UK9005103, compiled November 2002)",
    url: "https://publications.naturalengland.org.uk/file/4937627014791168",
  },
  neRibbleAltSpaDetail: {
    publisher: "Natural England",
    title: "Designated Sites View: Ribble and Alt Estuaries SPA",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UK9005103",
  },
  neMerseyNarrowsSpaCitation: {
    publisher: "Natural England",
    title: "Mersey Narrows and North Wirral Foreshore SPA citation (UK9020287, July 2013)",
    url: "https://publications.naturalengland.org.uk/file/5360161602404352",
  },
  neMerseyNarrowsSpaDetail: {
    publisher: "Natural England",
    title: "Designated Sites View: Mersey Narrows and North Wirral Foreshore SPA",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UK9020287",
  },
  neSeftonSacCitation: {
    publisher: "Natural England",
    title: "Sefton Coast SAC citation (UK0013076, May 2005)",
    url: "https://publications.naturalengland.org.uk/file/4702839272112128",
  },
  neSeftonSacDetail: {
    publisher: "Natural England",
    title: "Designated Sites View: Sefton Coast SAC",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UK0013076",
  },
  jnccSeftonSacForm: {
    publisher: "JNCC",
    title: "Standard Data Form: Sefton Coast SAC (UK0013076)",
    url: "https://jncc.gov.uk/jncc-assets/SAC-N2K/UK0013076.pdf",
  },
  jnccRibbleAltRamsar: {
    publisher: "JNCC",
    title: "Information Sheet on Ramsar Wetlands: Ribble and Alt Estuaries (UK11057, version 3.0, 2008)",
    url: "https://jncc.gov.uk/jncc-assets/RIS/UK11057.pdf",
  },
  jnccMerseyNarrowsRamsar: {
    publisher: "JNCC",
    title: "Information Sheet on Ramsar Wetlands: Mersey Narrows and North Wirral Foreshore (UK11042)",
    url: "https://jncc.gov.uk/jncc-assets/RIS/UK11042.pdf",
  },
  jnccLiverpoolBaySdf: {
    publisher: "JNCC",
    title: "Standard Data Form: Liverpool Bay / Bae Lerpwl SPA (UK9020294)",
    url: "https://jncc.gov.uk/jncc-assets/SPA-N2K/UK9020294.pdf",
  },
  jnccLiverpoolBay: {
    publisher: "JNCC",
    title: "Liverpool Bay / Bae Lerpwl SPA",
    url: "https://jncc.gov.uk/our-work/liverpool-bay-spa/",
  },
  neAinsdaleLnr: {
    publisher: "Natural England",
    title: "Designated Sites View: Ainsdale and Birkdale Hills LNR",
    url: "https://designatedsites.naturalengland.org.uk/SiteLNRDetail.aspx?SiteCode=L1008742",
  },
  neRavenmeolsLnr: {
    publisher: "Natural England",
    title: "Designated Sites View: Ravenmeols Hills LNR",
    url: "https://designatedsites.naturalengland.org.uk/SiteLNRDetail.aspx?SiteCode=L1009094",
  },
  neAinsdaleNnr: {
    publisher: "Natural England",
    title: "Designated Sites View: Ainsdale Sand Dunes NNR",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=1006001",
  },
  neCabinHillNnr: {
    publisher: "Natural England",
    title: "Designated Sites View: Cabin Hill NNR",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=1006027",
  },
  neRibbleNnr: {
    publisher: "Natural England",
    title: "Designated Sites View: Ribble Estuary NNR",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=1006123",
  },
  neRibbleAltRamsarDetail: {
    publisher: "Natural England",
    title: "Designated Sites View: Ribble and Alt Estuaries Ramsar",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UK11057",
  },
  neMerseyNarrowsRamsarDetail: {
    publisher: "Natural England",
    title: "Designated Sites View: Mersey Narrows and North Wirral Foreshore Ramsar",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UK11042",
  },
  neRibbleMcz: {
    publisher: "Natural England",
    title: "Designated Sites View: Ribble Estuary MCZ",
    url: "https://designatedsites.naturalengland.org.uk/SiteGeneralDetail.aspx?SiteCode=UKMCZ0067",
  },
  govukRibbleMcz: {
    publisher: "Defra, JNCC and Natural England (gov.uk)",
    title: "Marine Conservation Zones: Ribble Estuary (published 31 May 2019)",
    url: "https://www.gov.uk/government/publications/marine-conservation-zones-ribble-estuary",
  },
  legRibbleMczOrder: {
    publisher: "legislation.gov.uk",
    title: "The Ribble Estuary Marine Conservation Zone Designation Order 2019 (2019 No. 34)",
    url: "https://www.legislation.gov.uk/ukmo/2019/34/made",
  },
  lwtSquirrelPox: {
    publisher: "The Wildlife Trust for Lancashire, Manchester and North Merseyside",
    title: "Squirrel pox outbreak confirmed on the Sefton Coast (20 July 2026)",
    url: "https://www.lancswt.org.uk/news/squirrel-pox-outbreak-confirmed-on-sefton-coast",
  },
} satisfies Record<string, Source>;

/** A source with a note of what the page took from it. */
export function used(source: Source, what: string): Source {
  return { ...source, used: what };
}
