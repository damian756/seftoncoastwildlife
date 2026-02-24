import type { Metadata } from "next";

const title = "Terms of Use — Sefton Coast Wildlife";
const description = "Terms of use for seftoncoastwildlife.co.uk.";
const url = "https://seftoncoastwildlife.co.uk/terms";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--forest)] mb-6">Terms of Use</h1>
      <p className="text-sm text-[var(--slate)]/60 mb-8">Last updated: February 2026</p>

      <div className="space-y-8 text-sm text-[var(--slate)] leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">About this site</h2>
          <p>
            Sefton Coast Wildlife (<a href="https://seftoncoastwildlife.co.uk" className="text-[var(--marsh)] hover:underline">seftoncoastwildlife.co.uk</a>) is
            operated by Churchtown Media. Part of the{" "}
            <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
              Sefton Coast Network
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Use of content</h2>
          <p className="mb-3">
            All text, images, species data and editorial content on this site is provided for personal, non-commercial use.
            You may share links to any page freely. You may not reproduce, republish or redistribute content
            without written permission from Churchtown Media.
          </p>
          <p>
            Species images are sourced from Wikipedia and Wikimedia Commons under their respective licences.
            Attribution is provided on each species page. If you believe any image has been used incorrectly,
            please <a href="/contact" className="text-[var(--marsh)] hover:underline">contact us</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Accuracy</h2>
          <p>
            We make every effort to keep species data, seasonal information and practical details accurate and up to date.
            However, wildlife is unpredictable and conditions change. We accept no liability for decisions made based on
            information on this site. Always check current conditions before visiting any site — particularly tides,
            weather and access restrictions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">External links</h2>
          <p>
            This site links to external websites including Wikipedia, RSPB, National Trust and others.
            We have no control over the content of external sites and accept no responsibility for them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Intellectual property</h2>
          <p>
            The Sefton Coast Wildlife name, design and editorial content are the property of Churchtown Media.
            The Sefton Coast Network brand and associated trademarks belong to Churchtown Media.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Contact</h2>
          <p>
            For any questions about these terms, contact{" "}
            <a href="mailto:damian@churchtownmedia.co.uk" className="text-[var(--marsh)] hover:underline">damian@churchtownmedia.co.uk</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
