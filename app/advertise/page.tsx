import type { Metadata } from "next";
import Link from "next/link";

const title = "Advertise on Sefton Coast Wildlife | Sefton Coast Network";
const description =
  "Advertising on Sefton Coast Wildlife and the Sefton Coast Network: packages, prices and how to enquire.";
const url = "https://www.seftoncoastwildlife.co.uk/advertise";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
};

const NETWORK_PACKAGES = [
  {
    name: "Core",
    sites: "SouthportGuide + FormbyGuide",
    price: "£450",
    total: "£2,700",
    featured: false,
    features: [
      "Placement on category and guide pages, by arrangement",
      "Homepage placement on SouthportGuide, by arrangement",
      "Category exclusivity on both sites",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Premium",
    sites: "SouthportGuide + FormbyGuide + SeftonLinks",
    price: "£650",
    total: "£3,900",
    featured: true,
    features: [
      "All Core placements",
      "Placement on SeftonLinks, by arrangement",
      "Category exclusivity across all three sites",
      "Up to 2 creative updates per month",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Full Network",
    sites: "All four Sefton Coast Network sites",
    price: "£800",
    total: "£4,800",
    featured: false,
    features: [
      "All Premium placements",
      "Placement on SeftonCoastWildlife, by arrangement",
      "All four Sefton Coast Network sites",
      "Quarterly review call",
      "Monthly performance reporting",
    ],
  },
];

const WHY_ITEMS = [
  {
    title: "Wildlife watchers",
    body: "Written for birdwatchers, naturalists and wildlife photographers visiting Marshside RSPB, Ainsdale NNR and National Trust Formby.",
  },
  {
    title: "Conservation",
    body: "Covers species conservation, habitat management and the ecological work happening on the Sefton Coast.",
  },
  {
    title: "Part of a wider network",
    body: "Advertising on Sefton Coast Wildlife can be combined with SouthportGuide, FormbyGuide, and SeftonLinks for full Sefton Coast network coverage.",
  },
  {
    title: "Category exclusivity",
    body: "Every package includes category exclusivity for the length of the contract.",
  },
  {
    title: "What the site covers",
    body: "Profiles of 257 species, plus reserve guides, seasonal guides and a blog, covering the Sefton Coast from Southport to Formby.",
  },
  {
    title: "Independent",
    body: "Published by Churchtown Media Ltd and paid for by the company and by advertising, with no tourist board or local authority funding.",
  },
];

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[var(--forest)] text-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-4">
            Advertising and Partnerships
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Advertise on Sefton Coast Wildlife.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            Sefton Coast Wildlife is written for birdwatchers, nature photographers and anyone visiting the coast for its wildlife. It is part of the Sefton Coast Network: four independent sites covering the region from Southport to Formby.
          </p>
          <a
            href="mailto:partnerships@seftoncoast.network"
            className="inline-flex items-center gap-2 bg-[var(--gold)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-opacity"
          >
            partnerships@seftoncoast.network
          </a>
        </div>
      </div>

      {/* Why advertise */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">The site</p>
            <h2 className="font-display text-3xl font-bold text-[var(--forest)]">Who Sefton Coast Wildlife is for</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)] mb-4" />
                <h3 className="font-bold text-[var(--forest)] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network packages */}
      <div className="bg-gray-50 border-t border-gray-100 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Advertising packages</p>
            <h2 className="font-display text-3xl font-bold text-[var(--forest)]">Sefton Coast Network</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
              Sefton Coast Wildlife is included in the Full Network package, which covers all four sites under a single agreement. Placements are agreed with each advertiser.
            </p>
            <p className="text-gray-400 mt-2 text-xs">All packages: six-month minimum contract. Category exclusivity included.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {NETWORK_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl overflow-hidden border-2 ${pkg.featured ? "border-[var(--gold)]" : "border-gray-200"}`}
              >
                <div className={`px-5 py-4 ${pkg.featured ? "bg-[var(--forest)]" : "bg-white"}`}>
                  {pkg.featured && (
                    <span className="inline-block bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">
                      Recommended
                    </span>
                  )}
                  <h3 className={`font-bold text-lg ${pkg.featured ? "text-white" : "text-[var(--forest)]"}`}>{pkg.name}</h3>
                  <p className={`text-xs mt-0.5 ${pkg.featured ? "text-white/50" : "text-gray-400"}`}>{pkg.sites}</p>
                </div>
                <div className="p-5 bg-white">
                  <div className="text-2xl font-extrabold text-[var(--forest)] mb-0.5">
                    {pkg.price}<span className="text-sm font-normal text-gray-400"> / month</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{pkg.total} · 6-month minimum contract</p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 ${pkg.featured ? "bg-[var(--gold)]" : "bg-[var(--forest)]"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:partnerships@seftoncoast.network"
                    className={`block text-center font-semibold py-2.5 rounded-lg text-sm transition-colors ${
                      pkg.featured
                        ? "bg-[var(--gold)] hover:opacity-90 text-white"
                        : "border border-[var(--forest)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white"
                    }`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[var(--forest)] text-white px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">Request the media kit</h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            Email us at partnerships@seftoncoast.network for the full media kit including ad specifications, package details, and terms. We respond to all advertising enquiries within one working day.
          </p>
          <a
            href="mailto:partnerships@seftoncoast.network"
            className="inline-flex items-center justify-center bg-[var(--gold)] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-opacity"
          >
            partnerships@seftoncoast.network
          </a>
          <p className="text-white/30 text-xs mt-8">
            For species records or editorial enquiries:{" "}
            <Link href="/contact" className="underline hover:text-white/60">use the contact form</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}
