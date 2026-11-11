// Advertising spaces on Sefton Coast Wildlife, and the options sold on /advertise.
//
// Every sponsor is null until an invoice is paid. To fill a space, replace `sponsor: null` with
//   sponsor: { name: "Business name", url: "https://...", text: "Up to 30 words.", image: "/images/...", until: "YYYY-MM-DD" }
// `image` (a path under /public) and `until` are optional. After `until` the space shows as empty again
// (pages are built at deploy time, so an expired sponsor disappears at the next deploy).

export type Sponsor = {
  name: string;
  url: string;
  text: string; // max 30 words
  image?: string; // path under /public
  until?: string; // "YYYY-MM-DD", last day shown
};

export type AdOptionId =
  | "section-sponsor"
  | "birdwatching-guide"
  | "home-card"
  | "winter-birds"
  | "sponsored-article"
  | "network";

export type AdOption = {
  id: AdOptionId;
  name: string;
  price: string; // shown as "<price> <per>", plus VAT
  per: string;
  fromMonthly?: string; // the "from £X a month" figure on empty cards
  term: string;
  points: string[];
};

export type AdSlotConfig = {
  option: AdOptionId;
  title: string; // names the space, e.g. on /advertise and in the contact form
  label: "Advertisement" | "Sponsor"; // shown on a filled card
  kicker: string; // empty card
  cardTitle: string; // empty card
  pitch: string; // empty card, one sentence
  sponsor: Sponsor | null;
};

export const AD_OPTIONS: Record<AdOptionId, AdOption> = {
  "section-sponsor": {
    id: "section-sponsor",
    name: "Section sponsor",
    price: "£35",
    per: "a month",
    fromMonthly: "£35",
    term: "3 months minimum",
    points: [
      "One of Birds, Mammals & Wildlife, Insects, Plants or Seasonal guides",
      "Your card shown once at the end of that section's listing page, labelled Sponsor",
      "The end of our species and seasonal blog posts can be sponsored the same way",
      "One sponsor per section",
    ],
  },
  "birdwatching-guide": {
    id: "birdwatching-guide",
    name: "Birdwatching guide sponsor",
    price: "£45",
    per: "a month",
    fromMonthly: "£45",
    term: "3 months minimum",
    points: [
      "One card at the end of the birdwatching guide, labelled Sponsor",
      "Suits optics, guided walks and places to stay",
      "One sponsor at a time",
    ],
  },
  "home-card": {
    id: "home-card",
    name: "Home page card",
    price: "£39",
    per: "a month",
    fromMonthly: "£39",
    term: "3 months minimum",
    points: [
      "A card on the home page after the latest posts, labelled Advertisement",
      "Your photo, up to 30 words and a link to your site",
      "One business at a time",
    ],
  },
  "winter-birds": {
    id: "winter-birds",
    name: "Winter birds package",
    price: "£99",
    per: "for the season",
    term: "November to February",
    points: [
      "Sponsor of the Seasonal guides and the Birds section together",
      "Runs from November to February, when the geese and wildfowl are here",
    ],
  },
  "sponsored-article": {
    id: "sponsored-article",
    name: "Sponsored article",
    price: "£125",
    per: "one-off",
    term: "Labelled Sponsored at the top",
    points: [
      "A useful post about something you run, such as a guided walk or an optics day",
      "Written with you and checked for facts",
      "Bylined Sponsored by your business; never presented as a review",
    ],
  },
  network: {
    id: "network",
    name: "Sefton Coast bundle",
    price: "£149",
    per: "a month",
    term: "3 months minimum",
    points: [
      "Home page card on Sefton Coast Wildlife, FormbyGuide, SouthportGuide and SeftonLinks",
      "Featured in your category on FormbyGuide and Pro-level placement on SouthportGuide",
      "One invoice",
    ],
  },
};

export type AdSlotId =
  | "home-card"
  | "section-birds"
  | "section-mammals"
  | "section-insects"
  | "section-plants"
  | "section-seasonal"
  | "guide-birdwatching"
  | "post-end";

const section = (name: string, page: string): AdSlotConfig => ({
  option: "section-sponsor",
  title: `Sponsor of the ${name} section`,
  label: "Sponsor",
  kicker: "Sponsor this section",
  cardTitle: `Support the ${name} section`,
  pitch: `Your business shown once at the end of the ${page} page, labelled as a sponsor.`,
  sponsor: null,
});

export const AD_SLOTS: Record<AdSlotId, AdSlotConfig> = {
  "home-card": {
    option: "home-card",
    title: "Home page card",
    label: "Advertisement",
    kicker: "Advertising space",
    cardTitle: "Your business on the Sefton Coast Wildlife home page",
    pitch: "One local business on the home page, clearly labelled as an advert, with a photo, a line about you and a link.",
    sponsor: null,
  },
  "section-birds": section("Birds", "Birds"),
  "section-mammals": section("Mammals & Wildlife", "Mammals & Wildlife"),
  "section-insects": section("Insects", "Insects"),
  "section-plants": section("Plants", "Plants"),
  "section-seasonal": section("Seasonal", "Seasonal guides"),
  "guide-birdwatching": {
    option: "birdwatching-guide",
    title: "Sponsor of the birdwatching guide",
    label: "Sponsor",
    kicker: "Sponsor this guide",
    cardTitle: "Support the birdwatching guide",
    pitch: "Your business shown once at the end of this guide, labelled as a sponsor.",
    sponsor: null,
  },
  "post-end": {
    option: "section-sponsor",
    title: "Sponsor of the species and seasonal posts",
    label: "Sponsor",
    kicker: "Sponsor these posts",
    cardTitle: "Support our species and seasonal posts",
    pitch: "Your business shown once at the end of each species and seasonal post, labelled as a sponsor and never inside the writing.",
    sponsor: null,
  },
};

export function isAdSlotId(id: unknown): id is AdSlotId {
  return typeof id === "string" && Object.prototype.hasOwnProperty.call(AD_SLOTS, id);
}

export function isAdOptionId(id: unknown): id is AdOptionId {
  return typeof id === "string" && Object.prototype.hasOwnProperty.call(AD_OPTIONS, id);
}

/** The sponsor to show today, or null if the space is empty or the sponsor's `until` date has passed. */
export function activeSponsor(slot: AdSlotConfig, today: Date = new Date()): Sponsor | null {
  const s = slot.sponsor;
  if (!s) return null;
  if (s.until) {
    const todayIso = today.toISOString().slice(0, 10);
    if (s.until < todayIso) return null;
  }
  return s;
}

/** Link from an empty card to the advertise page, naming the space. */
export function advertiseHref(id: AdSlotId): string {
  return `/advertise?space=${id}#${AD_SLOTS[id].option}`;
}

/** What the visitor asked about, for the advertise page note and the contact form. */
export function spaceTitle(space: unknown): string | null {
  if (isAdSlotId(space)) return AD_SLOTS[space].title;
  if (isAdOptionId(space)) return AD_OPTIONS[space].name;
  return null;
}
