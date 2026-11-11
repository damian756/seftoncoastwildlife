// Advertising spaces and prices. Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AD_OPTIONS,
  AD_SLOTS,
  POST_SPONSORS,
  activeSponsor,
  advertiseHref,
  findSlot,
  hasPostSlot,
  postSlot,
  postSlotId,
  spaceTitle,
} from "../lib/ad-slots.ts";
import { BLOG_POSTS } from "../content/blog/posts.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("every space is empty at commit and points at a real option", () => {
  for (const [id, slot] of Object.entries(AD_SLOTS)) {
    assert.equal(slot.sponsor, null, `${id} has a sponsor committed`);
    assert.ok(AD_OPTIONS[slot.option], `${id} -> ${slot.option}`);
    assert.equal(advertiseHref(id, slot), `/advertise?space=${id}#${slot.option}`);
  }
  assert.doesNotMatch(read("lib/ad-slots.ts"), /Example advert/);
});

test("prices are the approved ones", () => {
  const prices = Object.fromEntries(Object.values(AD_OPTIONS).map((o) => [o.id, o.price]));
  assert.deepEqual(prices, {
    "section-sponsor": "£35",
    "birdwatching-guide": "£45",
    "home-card": "£39",
    "winter-birds": "£99",
    "sponsored-article": "£125",
    network: "£149",
  });
});

test("a sponsor past its until date shows as empty", () => {
  const slot = { ...AD_SLOTS["home-card"], sponsor: { name: "X", url: "https://example.com", text: "t", until: "2026-11-10" } };
  assert.equal(activeSponsor(slot, new Date("2026-11-11T12:00:00Z")), null);
  assert.ok(activeSponsor(slot, new Date("2026-11-10T12:00:00Z")));
});

test("filled cards and sponsored bylines mark paid links", () => {
  assert.match(read("components/AdSlot.tsx"), /rel="sponsored noopener"/);
  assert.match(read("app/blog/[slug]/page.tsx"), /Sponsored by/);
  assert.match(read("app/blog/[slug]/page.tsx"), /rel="sponsored noopener"/);
});

test("the advertise page has a card for every option and no old packages", () => {
  const src = read("app/advertise/page.tsx");
  assert.doesNotMatch(src, /£450|£650|£800|partnerships@/);
  assert.match(src, /plus VAT/);
  assert.match(src, /Half price for your first three months, and your monthly price held for twelve months, for the first ten\s+advertisers across the Sefton Coast sites\./);
});

test("each species and seasonal post is its own space, sold at the section-sponsor price", () => {
  const eligible = BLOG_POSTS.filter(hasPostSlot);
  assert.equal(eligible.length, 33);
  assert.ok(!("post-end" in AD_SLOTS), "the shared post-end space is gone");
  for (const post of eligible) {
    assert.ok(["species-spotlight", "seasonal-watching"].includes(post.category), post.slug);
    const id = postSlotId(post.slug);
    const slot = findSlot(id, BLOG_POSTS);
    assert.ok(slot, id);
    assert.equal(slot.option, "section-sponsor");
    assert.equal(slot.title, `Sponsor of the ${post.title} post`);
    assert.equal(slot.label, "Sponsor");
    assert.equal(slot.sponsor, null, `${id} has a sponsor committed`);
    assert.equal(advertiseHref(id, slot), `/advertise?space=post-${post.slug}#section-sponsor`);
    assert.equal(spaceTitle(id, BLOG_POSTS), slot.title);
    // Card copy says "post", never "guide" or "section".
    for (const text of [slot.kicker, slot.cardTitle, slot.pitch, slot.product]) {
      assert.match(text, /post/i, text);
      assert.doesNotMatch(text, /guide|section/i, text);
    }
  }
  assert.deepEqual(POST_SPONSORS, {}, "no post sponsor committed");
});

test("other posts and unknown ids have no end-of-post space", () => {
  const others = BLOG_POSTS.filter((p) => !hasPostSlot(p));
  assert.ok(others.length > 0);
  for (const post of others) {
    assert.equal(postSlot(post), null, post.slug);
    assert.equal(findSlot(postSlotId(post.slug), BLOG_POSTS), null, post.slug);
  }
  assert.equal(postSlot({ slug: "x", title: "X", category: "species-spotlight", sponsor: { name: "S", url: "https://s" } }), null);
  for (const bad of ["post-", "post-not-a-post", "post-end", "nope", 7, null]) {
    assert.equal(findSlot(bad, BLOG_POSTS), null, String(bad));
  }
});

test("a post sponsor is shown only on its own post", () => {
  const [a, b] = BLOG_POSTS.filter(hasPostSlot);
  POST_SPONSORS[a.slug] = { name: "X", url: "https://example.com", text: "t" };
  try {
    assert.equal(findSlot(postSlotId(a.slug), BLOG_POSTS).sponsor.name, "X");
    assert.equal(findSlot(postSlotId(b.slug), BLOG_POSTS).sponsor, null);
  } finally {
    delete POST_SPONSORS[a.slug];
  }
});

test("the Section sponsor card offers single posts, and the rule wording is the agreed one", () => {
  assert.equal(AD_OPTIONS["section-sponsor"].note, "Also available on a single species or seasonal post, one sponsor per post.");
  const page = read("app/advertise/page.tsx");
  assert.match(page, /\{o\.note && /);
  assert.match(page, /"Adverts never appear inside a review, and paying for a space does not change what we write\."/);
  assert.doesNotMatch(page, /beside the businesses/);
});

test("the birdwatching guide space is not pitched at optics sellers", () => {
  const o = AD_OPTIONS["birdwatching-guide"];
  assert.doesNotMatch([o.name, ...o.points].join(" "), /optic/i);
  assert.doesNotMatch(JSON.stringify(AD_SLOTS["guide-birdwatching"]), /optic/i);
  assert.match(read("lib/ad-slots.ts"), /Do not sell this space to a business that sells a brand the guide names/);
});

test("the filled-card label is full strength, at least 11px", () => {
  const src = read("components/AdSlot.tsx");
  assert.match(src, /className="text-xs font-bold uppercase tracking-\[0\.14em\] text-\[var\(--forest\)\] mb-1\.5">\{slot\.label\}/);
});

test("every page that shows a space is rebuilt daily, so a lapsed sponsor drops", () => {
  const pages = [
    "app/page.tsx",
    "app/birds/page.tsx",
    "app/mammals/page.tsx",
    "app/insects/page.tsx",
    "app/plants/page.tsx",
    "app/seasonal/page.tsx",
    "app/birdwatching-guide/page.tsx",
    "app/blog/[slug]/page.tsx",
  ];
  for (const rel of pages) assert.match(read(rel), /^export const revalidate = 86400;$/m, rel);
});
