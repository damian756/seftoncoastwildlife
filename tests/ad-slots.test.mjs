// Advertising spaces and prices. Run with: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { AD_OPTIONS, AD_SLOTS, activeSponsor, advertiseHref } from "../lib/ad-slots.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

test("every space is empty at commit and points at a real option", () => {
  for (const [id, slot] of Object.entries(AD_SLOTS)) {
    assert.equal(slot.sponsor, null, `${id} has a sponsor committed`);
    assert.ok(AD_OPTIONS[slot.option], `${id} -> ${slot.option}`);
    assert.equal(advertiseHref(id), `/advertise?space=${id}#${slot.option}`);
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
