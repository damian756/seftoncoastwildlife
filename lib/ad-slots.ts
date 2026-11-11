// Advertising spaces on Sefton Coast Wildlife, and the options sold on /advertise.
//
// Every sponsor is null until an invoice is paid. To fill a space, replace `sponsor: null` with
//   sponsor: { name: "Business name", url: "https://...", text: "Up to 30 words.", image: "/images/...", until: "YYYY-MM-DD" }
// `image` (a path under /public) and `until` are optional. After `until` the space shows as empty again.
// Every page that shows a space sets `export const revalidate = 86400`, so a lapsed sponsor drops within a day.
//
// No imports and only erasable TypeScript, so `node --test tests/*.test.mjs` can load this file directly.
// The end-of-post spaces are built from the blog posts, which callers pass in (see postSlot below).

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
  note?: string; // one plain line under the points
};

export type AdSlotConfig = {
  option: AdOptionId;
  title: string; // names the space, e.g. on /advertise and in the contact form
  label: "Advertisement" | "Sponsor"; // shown on a filled card
  kicker: string; // empty card
  cardTitle: string; // empty card
  pitch: string; // empty card, one sentence
  product?: string; // empty card price line, in place of the option's name
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
      "One sponsor per section",
    ],
    note: "Also available on a single species or seasonal post, one sponsor per post.",
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
      "Suits guided walks and places to stay",
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
  | "guide-birdwatching";

// One end-of-post space per eligible post: `post-<slug>`.
export type PostSlotId = `post-${string}`;
export type SlotId = AdSlotId | PostSlotId;

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
  // Do not sell this space to a business that sells a brand the guide names (its kit list and FAQ name
  // Celestron, Kowa and Swarovski binoculars, the Collins Bird Guide and the Merlin app): the card sits
  // just after them, so it would read as an endorsement of the advertiser's product.
  "guide-birdwatching": {
    option: "birdwatching-guide",
    title: "Sponsor of the birdwatching guide",
    label: "Sponsor",
    kicker: "Sponsor this guide",
    cardTitle: "Support the birdwatching guide",
    pitch: "Your business shown once at the end of this guide, labelled as a sponsor.",
    sponsor: null,
  },
};

// End-of-post spaces: one sponsor per post, sold at the section-sponsor price. Species and seasonal posts
// only, never a sponsored article. To fill one, add the post's slug here, e.g.
//   "sanderling-sefton-coast": { name: "Business name", url: "https://...", text: "Up to 30 words." },
export const POST_SPONSORS: Record<string, Sponsor | null> = {};

export const POST_SLOT_CATEGORIES = ["species-spotlight", "seasonal-watching"];

/** The parts of a blog post the end-of-post space needs. */
export type PostForSlot = { slug: string; title: string; category: string; sponsor?: unknown };

export function hasPostSlot(post: PostForSlot): boolean {
  return !post.sponsor && POST_SLOT_CATEGORIES.includes(post.category);
}

export function postSlotId(slug: string): PostSlotId {
  return `post-${slug}`;
}

/** The end-of-post space for one post, or null if the post does not carry one. */
export function postSlot(post: PostForSlot): AdSlotConfig | null {
  if (!hasPostSlot(post)) return null;
  return {
    option: "section-sponsor",
    title: `Sponsor of the ${post.title} post`,
    label: "Sponsor",
    kicker: "Sponsor this post",
    cardTitle: "Support this post",
    pitch: "Your business shown once at the end of this post, labelled as a sponsor and never inside the writing.",
    product: "Post sponsor",
    sponsor: POST_SPONSORS[post.slug] ?? null,
  };
}

/** Any space by id: a fixed one from AD_SLOTS, or `post-<slug>` for an eligible post in `posts`. */
export function findSlot(id: unknown, posts: readonly PostForSlot[]): AdSlotConfig | null {
  if (isAdSlotId(id)) return AD_SLOTS[id];
  if (typeof id !== "string" || !id.startsWith("post-")) return null;
  const post = posts.find((p) => postSlotId(p.slug) === id);
  return post ? postSlot(post) : null;
}

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
export function advertiseHref(id: SlotId, slot: AdSlotConfig): string {
  return `/advertise?space=${id}#${slot.option}`;
}

/** What the visitor asked about, for the advertise page note and the contact form. */
export function spaceTitle(space: unknown, posts: readonly PostForSlot[]): string | null {
  const slot = findSlot(space, posts);
  if (slot) return slot.title;
  if (isAdOptionId(space)) return AD_OPTIONS[space].name;
  return null;
}
