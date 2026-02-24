import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

const title = "Contact — Sefton Coast Wildlife";
const description = "Get in touch with Sefton Coast Wildlife — questions, species records, local knowledge or listing enquiries.";
const url = "https://seftoncoastwildlife.co.uk/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact us
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Species records, questions about the site, listing enquiries or just something you&apos;ve spotted on the coast — we&apos;d like to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-xl bg-[var(--dune)] p-5">
              <h2 className="font-semibold text-[var(--forest)] mb-3 text-sm">About the site</h2>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Sefton Coast Wildlife is an independent guide built by{" "}
                <a href="https://churchtownmedia.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
                  Churchtown Media
                </a>{" "}
                — part of the{" "}
                <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
                  Sefton Coast Network
                </a>.
              </p>
            </div>

            <div className="rounded-xl bg-[var(--dune)] p-5">
              <h2 className="font-semibold text-[var(--forest)] mb-3 text-sm">Network sites</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "https://www.southportguide.co.uk", label: "SouthportGuide" },
                  { href: "https://www.formbyguide.co.uk", label: "FormbyGuide" },
                  { href: "https://www.seftonlinks.com", label: "SeftonLinks" },
                  { href: "https://seftoncoast.network", label: "SeftonCoast.network" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
                      {label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
