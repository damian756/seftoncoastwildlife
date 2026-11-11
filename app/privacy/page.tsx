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
      <p className="text-sm text-[var(--slate)]/60 mb-8">Last updated: November 2026</p>

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
            <li><strong>Ahrefs Web Analytics</strong>: page view statistics without cookies. It records the page, referrer, browser, device, language, screen size and approximate location (city level), and counts visitors with a daily pseudonymous identifier that is not kept across days.</li>
            <li><strong>Visit counts</strong>: we count how many times each page is viewed each day. We store only the page, the day and a number, and record nothing about the person viewing it.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Cookies</h2>
          <p>
            This site does not use cookies. Ahrefs Web Analytics and our own visit counts work without them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--forest)] mb-2">Third-party services</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Ahrefs Web Analytics</strong>: page view statistics without cookies. <a href="https://help.ahrefs.com/en/articles/10247870-about-ahrefs-web-analytics" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">About Ahrefs Web Analytics</a></li>
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
