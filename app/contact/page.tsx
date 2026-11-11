import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BLOG_POSTS } from "@/content/blog/posts";
import { spaceTitle } from "@/lib/ad-slots";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

const title = "Contact";
const description = "Get in touch with Sefton Coast Wildlife: questions, species records, local knowledge or advertising enquiries.";
const url = "https://www.seftoncoastwildlife.co.uk/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
};

type Props = { searchParams: Promise<{ topic?: string | string[]; space?: string | string[] }> };

export default async function ContactPage({ searchParams }: Props) {
  // Arriving from /advertise: preselect the subject and name the space the visitor asked about.
  const { topic, space } = await searchParams;
  const isAdvertising = topic === "advertise";
  const asked = isAdvertising ? spaceTitle(space, BLOG_POSTS) : null;
  const defaultSubject = isAdvertising ? "Advertising" : "";
  const defaultMessage = asked ? `I'm interested in: ${asked}

` : "";

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
            Species records, questions about the site, advertising enquiries or just something you&apos;ve spotted on the coast. We&apos;d like to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm defaultSubject={defaultSubject} defaultMessage={defaultMessage} />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-xl bg-[var(--dune)] p-5">
              <h2 className="font-semibold text-[var(--forest)] mb-3 text-sm">About the site</h2>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Sefton Coast Wildlife is an independent guide built by{" "}
                <a href="https://churchtownmedia.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] hover:underline">
                  Churchtown Media
                </a>,{" "}
                 part of the{" "}
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
