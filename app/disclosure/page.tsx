import type { Metadata } from "next";
import Link from "next/link";

const title = "Disclosure";
const description =
  "Who publishes Sefton Coast Wildlife, how it is paid for, and the other interests of its publisher.";
const url = "https://www.seftoncoastwildlife.co.uk/disclosure";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
};

const h2 = "font-display text-lg font-bold text-[var(--forest)] mb-2";
const a = "text-[var(--marsh)] hover:underline";

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--forest)] mb-6">Disclosure</h1>
      <p className="text-sm text-[var(--slate)]/60 mb-8">Last updated: 5 October 2026</p>

      <div className="space-y-8 text-sm text-[var(--slate)] leading-relaxed">
        <section>
          <h2 className={h2}>Who publishes this site</h2>
          <p>
            Sefton Coast Wildlife is published by Churchtown Media Ltd, a company registered in England and
            Wales (Company No. 16960442). Registered office: Suite RA01, 195-197 Wood Street, London, E17 3NU. Damian Roche is its director. He lives in Southport.
          </p>
        </section>

        <section>
          <h2 className={h2}>How it is paid for</h2>
          <p>
            The site is paid for by Churchtown Media Ltd and by{" "}
            <Link href="/advertise" className={a}>advertising</Link>. A few booking links earn us a small
            commission, and these are marked where they appear. Neither changes what we write about wildlife
            or places on the coast.
          </p>
        </section>

        <section>
          <h2 className={h2}>Current interests</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Churchtown Media Ltd, the publisher of this site.</li>
            <li>
              <a href="https://www.institrace.co.uk" rel="nofollow noopener" target="_blank" className={a}>
                Institrace
              </a>
              , a public records index run by Churchtown Media Ltd.
            </li>
            <li>
              The other Sefton Coast Network sites, also published by Churchtown Media Ltd:
              SouthportGuide.co.uk, FormbyGuide.co.uk and SeftonLinks.com.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={h2}>Former interests</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>SIBA Digital (closed October 2026).</li>
            <li>The Sandgrounder (closed September 2026).</li>
          </ul>
        </section>

        <section>
          <h2 className={h2}>BID levy</h2>
          <p>
            Churchtown Media Ltd does not occupy rateable premises inside a Business Improvement District and
            does not pay a BID levy.
          </p>
        </section>

        <section>
          <h2 className={h2}>Politics</h2>
          <p>
            Damian Roche has no political affiliation. Sefton Coast Wildlife has no link to any political
            party.
          </p>
        </section>

        <section>
          <h2 className={h2}>Changes</h2>
          <p>
            We update this page when any of these interests change. The date at the top shows the last
            update. Questions to{" "}
            <a href="mailto:damian@churchtownmedia.co.uk" className={a}>damian@churchtownmedia.co.uk</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
