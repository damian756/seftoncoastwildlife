import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog/posts";
import { AD_OPTIONS, findSlot, isAdOptionId, type AdOptionId } from "@/lib/ad-slots";
import { DISPLAY_EMAIL } from "@/lib/contact";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

// The title this page ranked with before the advertising build (traffic first, Damian,
// 11 Nov 2026): keep it. The layout adds " | Sefton Coast Wildlife".
const title = "Advertise on Sefton Coast Wildlife | Sefton Coast Network";
const description =
  "Advertising on Sefton Coast Wildlife: section and guide sponsors, the home page card, sponsored articles and the Sefton Coast bundle. Prices and how to ask.";
const url = "https://www.seftoncoastwildlife.co.uk/advertise";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
};

// Order of the cards on the page. The network bundle is drawn separately.
const OPTION_ORDER: AdOptionId[] = ["section-sponsor", "birdwatching-guide", "home-card", "winter-birds", "sponsored-article"];

function contactHref(space?: string) {
  return space ? `/contact?topic=advertise&space=${encodeURIComponent(space)}` : "/contact?topic=advertise";
}

type Props = { searchParams: Promise<{ space?: string | string[] }> };

export default async function AdvertisePage({ searchParams }: Props) {
  const { space } = await searchParams;
  // ?space=<slot-id> arrives from an empty "advertise here" card (including post-<slug> for one post);
  // ?space=<option-id> is also accepted.
  const askedSlot = findSlot(space, BLOG_POSTS);
  const askedOption: AdOptionId | null = askedSlot ? askedSlot.option : isAdOptionId(space) ? space : null;
  const askedTitle = askedSlot ? askedSlot.title : askedOption ? AD_OPTIONS[askedOption].name : null;
  const askedSpace = typeof space === "string" && askedTitle ? space : undefined;

  // The "Ask about" button on each card names the space the visitor came from, or the option itself.
  const spaceFor = (id: AdOptionId) => (askedOption === id && askedSpace ? askedSpace : id);
  const network = AD_OPTIONS.network;

  return (
    <div className="bg-[var(--sand)]">
      {/* Hero */}
      <section className="bg-[var(--forest)] text-white">
        <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-4">Advertising</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
            Advertise on Sefton Coast Wildlife
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
            Simple options at a fixed price. Every advert is clearly labelled and is just a picture, a few words and a
            link: no ad networks and no tracking cookies. You deal with us directly.
          </p>
          <Link
            href={contactHref(askedSpace)}
            className="inline-flex items-center gap-2 bg-[var(--gold)] hover:opacity-90 text-[var(--forest)] font-semibold px-6 py-3 rounded-lg transition-opacity"
          >
            Ask about a space
          </Link>
        </div>
      </section>

      {/* Options */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-display text-3xl font-bold text-[var(--forest)] mb-2">Ways to advertise</h2>
        <p className="text-[var(--slate)]/80 text-sm mb-8 max-w-2xl">All prices are plus VAT. Payment is by invoice.</p>

        {askedTitle && (
          <div className="mb-8 rounded-xl border border-[var(--marsh)]/30 bg-white px-5 py-4 text-sm text-[var(--slate)]">
            <span className="font-semibold text-[var(--forest)]">You asked about: {askedTitle}.</span>{" "}
            {askedOption && askedSlot && askedSlot.product && (
              <>One sponsor per post, at the {AD_OPTIONS[askedOption].name} price below.</>
            )}
            {askedOption && askedSlot && !askedSlot.product && (
              <>It is part of the {AD_OPTIONS[askedOption].name} option below.</>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OPTION_ORDER.map((id) => {
            const o = AD_OPTIONS[id];
            const picked = askedOption === id;
            return (
              <div
                key={id}
                id={id}
                className={`scroll-mt-24 bg-white rounded-2xl border p-6 flex flex-col ${
                  picked ? "border-[var(--gold)] ring-2 ring-[var(--gold)]/40" : "border-[var(--dune)]"
                }`}
              >
                <h3 className="font-display text-xl font-bold text-[var(--forest)] mb-3">{o.name}</h3>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-[var(--forest)]">{o.price}</span>{" "}
                  <span className="text-sm text-[var(--slate)]/70">{o.per} plus VAT</span>
                </p>
                <p className="text-xs text-[var(--slate)]/75 mb-4">{o.term}</p>
                <ul className="space-y-2 text-sm text-[var(--slate)]/85 mb-6 flex-1">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--marsh)]" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                {o.note && <p className="text-sm text-[var(--slate)] -mt-2 mb-6">{o.note}</p>}
                <Link
                  href={contactHref(spaceFor(id))}
                  className="text-center bg-[var(--forest)] hover:bg-[var(--marsh)] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Ask about this space
                </Link>
              </div>
            );
          })}

          <div
            id={network.id}
            className={`scroll-mt-24 bg-[var(--forest)] text-white rounded-2xl p-6 flex flex-col ${
              askedOption === "network" ? "ring-2 ring-[var(--gold)]" : ""
            }`}
          >
            <p className="text-[var(--gold)] text-[10px] font-bold uppercase tracking-widest mb-2">All four sites</p>
            <h3 className="font-display text-xl font-bold mb-3">{network.name}</h3>
            <p className="mb-1">
              <span className="text-3xl font-bold">{network.price}</span>{" "}
              <span className="text-sm text-white/70">{network.per} plus VAT</span>
            </p>
            <p className="text-xs text-white/60 mb-4">{network.term}</p>
            <ul className="space-y-2 text-sm text-white/85 mb-6 flex-1">
              {network.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href={contactHref(spaceFor("network"))}
              className="text-center bg-[var(--gold)] hover:opacity-90 text-[var(--forest)] text-sm font-semibold px-4 py-2.5 rounded-lg transition-opacity"
            >
              Ask about the bundle
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--gold)]/50 bg-[var(--gold)]/10 p-6">
          <h3 className="font-display text-lg font-bold text-[var(--forest)] mb-1">Founding advertisers</h3>
          <p className="text-sm text-[var(--slate)]">
            Half price for your first three months, and your monthly price held for twelve months, for the first ten
            advertisers across the Sefton Coast sites.
          </p>
        </div>
      </section>

      {/* How it works and our rules */}
      <section className="bg-white border-y border-[var(--dune)]">
        <div className="mx-auto max-w-5xl px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">How it works</h2>
            <ol className="space-y-3 text-sm text-[var(--slate)]/85 list-decimal pl-5">
              <li>
                Tell us which space you would like through the{" "}
                <Link href={contactHref(askedSpace)} className="text-[var(--marsh)] underline underline-offset-2">contact form</Link>.
              </li>
              <li>We confirm it is free and send an invoice.</li>
              <li>Send a photo and up to 30 words. Your advert goes live within two working days.</li>
              <li>After any minimum term, stop with a month&apos;s notice.</li>
            </ol>
            <p className="text-sm text-[var(--slate)]/70 mt-5">
              Prefer email? Write to{" "}
              <a href={`mailto:${DISPLAY_EMAIL}`} className="text-[var(--marsh)] underline underline-offset-2">{DISPLAY_EMAIL}</a>.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Our rules</h2>
            <ul className="space-y-3 text-sm text-[var(--slate)]/85">
              {[
                "Every advert is labelled Advertisement or Sponsor, and a sponsored article is labelled Sponsored.",
                "Paid links are marked as sponsored for search engines.",
                "Adverts never appear inside a review, and paying for a space does not change what we write.",
              ].map((rule) => (
                <li key={rule} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--marsh)]" aria-hidden="true" />
                  {rule}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--slate)]/70 mt-5">
              More about how the site is paid for is on our{" "}
              <Link href="/disclosure" className="text-[var(--marsh)] underline underline-offset-2">disclosure page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
