/**
 * Sites the Sefton Coast network does not link to (standing rule, Damian, 11 Nov 2026:
 * "keep them, i dont want to link to any of them"). Naming these organisations in copy is fine;
 * linking to them is not, in copy, data files, schema (url, sameAs) or source lists.
 * Subdomains count (for example any page on sefton.gov.uk, including mysefton news).
 * The same list is used by every site in the network; tests/no-blocked-links.test.mjs reads it.
 */
export const BLOCKED_LINK_DOMAINS = [
  // Sefton Council
  "sefton.gov.uk",
  // VisitSouthport and the council's visitor site
  "visitseftonandwestlancs.co.uk",
  "visitsouthport.com",
  // YourSouthport
  "yoursouthport.com",
  // Southport BID
  "southportbid.com",
  // Southport Market
  "southportmarket.com",
  "southportmarket.co.uk",
  // Mikhail hotel and leisure group and its venues
  "mhalg.com",
  "thegrand.co.uk",
  "boldhotel.com",
  "lordstreethotel.com",
  "mavericksbar.co.uk",
  "punchtarmeys.co.uk",
  "arcains.co.uk",
  "hotshotsdarts.co.uk",
  "brewerytapliverpool.com",
  "doctorduncansliverpool.com",
  "ecclestonarms.co.uk",
] as const;
