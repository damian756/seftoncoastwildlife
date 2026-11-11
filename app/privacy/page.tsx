import type { Metadata } from "next";
import { DISPLAY_EMAIL } from "@/lib/contact";

const title = "Privacy Policy";
const description = "Privacy policy for seftoncoastwildlife.co.uk: how we handle your data.";
const url = "https://www.seftoncoastwildlife.co.uk/privacy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--forest)] mb-6">Privacy Policy</h1>
      <p className="text-sm text-[var(--slate)]/60 mb-8">Last updated: February 2026</p>

      <div className="space-y-8 text-sm text-[var(--slate)] leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Who we are</h2>
          <p>
            Sefton Coast Wildlife (<a href="https://www.seftoncoastwildlife.co.uk" className="text-[var(--marsh)] hover:underline">seftoncoastwildlife.co.uk</a>) is
            operated by Churchtown Media. Part of the{" "}
            <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
              Sefton Coast Network
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">What data we collect</h2>
          <p className="mb-3">We keep data collection to a minimum:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact form</strong>: if you use the contact form, we receive your name, email address and message. This is sent to us via Resend and is used solely to reply to your enquiry.</li>
            <li><strong>Analytics</strong>: we use Plausible Analytics, a privacy-focused, cookieless analytics tool. Plausible does not use cookies, does not collect personal data, and is fully GDPR compliant. No data is shared with third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Cookies</h2>
          <p>
            This site does not use cookies. Plausible Analytics is cookieless by design. No consent banner is required.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Third-party services</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Plausible Analytics</strong>: cookieless, privacy-first web analytics. <a href="https://plausible.io/data-policy" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">Plausible data policy</a></li>
            <li><strong>Resend</strong>: email delivery for the contact form. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">Resend privacy policy</a></li>
            <li><strong>Vercel</strong>: website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">Vercel privacy policy</a></li>
            <li><strong>Wikipedia / Wikimedia Commons</strong>: species images are loaded from Wikipedia&apos;s REST API. No personal data is sent to Wikipedia by this site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Your rights</h2>
          <p>
            If you&apos;ve submitted a contact form and would like your data deleted, email{" "}
            <a href={`mailto:${DISPLAY_EMAIL}`} className="text-[var(--marsh)] hover:underline">{DISPLAY_EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Contact</h2>
          <p>
            For any privacy-related questions, contact{" "}
            <a href={`mailto:${DISPLAY_EMAIL}`} className="text-[var(--marsh)] hover:underline">{DISPLAY_EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
