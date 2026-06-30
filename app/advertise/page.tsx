import type { Metadata } from "next";
import { Mail, Shield, TrendingUp, Globe, Users, Star } from "lucide-react";

const title = "Advertise on Sefton Coast Wildlife | Sefton Coast Network";
const description =
  "Reach wildlife enthusiasts, nature photographers, and conservation-minded visitors on the Sefton Coast. Display advertising across the Sefton Coast Network.";
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
      "Sidebar on category and guide pages",
      "Homepage sponsored panel on SouthportGuide",
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
      "SeftonLinks sidebar and in-feed placement",
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
      "SeftonCoastWildlife included",
      "Maximum Sefton Coast reach",
      "Quarterly review call",
      "Monthly performance reporting",
    ],
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
            Reach the Sefton Coast wildlife audience.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            Sefton Coast Wildlife reaches birdwatchers, nature photographers, conservation supporters, and wildlife enthusiasts visiting the coast. Part of the Sefton Coast Network: four independent editorial sites covering the region from Southport to Formby.
          </p>
          <a
            href="mailto:partnerships@seftoncoast.network"
            className="inline-flex items-center gap-2 bg-[var(--gold)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-opacity"
          >
            <Mail className="w-4 h-4" />
            partnerships@seftoncoast.network
          </a>
        </div>
      </div>

      {/* Why advertise */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">The audience</p>
            <h2 className="font-display text-3xl font-bold text-[var(--forest)]">Who reads Sefton Coast Wildlife</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Users className="w-5 h-5 text-[var(--gold)]" />,
                title: "Wildlife enthusiasts",
                body: "Birdwatchers, naturalists, and wildlife photographers visiting Marshside RSPB, Ainsdale NNR, and National Trust Formby. Engaged, informed, and repeat visitors to the site.",
              },
              {
                icon: <Globe className="w-5 h-5 text-[var(--gold)]" />,
                title: "Conservation supporters",
                body: "Readers interested in species conservation, habitat management, and the ecological work happening on the Sefton Coast. A highly engaged niche audience.",
              },
              {
                icon: <Star className="w-5 h-5 text-[var(--gold)]" />,
                title: "Part of a wider network",
                body: "Advertising on Sefton Coast Wildlife can be combined with SouthportGuide, FormbyGuide, and SeftonLinks for full Sefton Coast network coverage.",
              },
              {
                icon: <Shield className="w-5 h-5 text-[var(--gold)]" />,
                title: "Category exclusivity",
                body: "No direct competitor in your category will appear on the same site during your contract. A firm commitment for the full term.",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-[var(--gold)]" />,
                title: "Growing content base",
                body: "Species pages, seasonal guides, and reserve guides covering the full Sefton Coast. A growing library of content attracting search traffic year-round.",
              },
              {
                icon: <Globe className="w-5 h-5 text-[var(--gold)]" />,
                title: "Independent and trusted",
                body: "No tourist board, no local authority funding. Readers trust Sefton Coast Wildlife because it is written by people who actually walk the coast.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="mb-3">{item.icon}</div>
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
              Sefton Coast Wildlife is included in the Full Network package. For brands wanting the widest possible Sefton Coast reach, this covers all four sites from a single agreement.
            </p>
            <p className="text-gray-400 mt-2 text-xs">All packages: six months paid upfront. Category exclusivity included.</p>
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
                  <p className="text-xs text-gray-400 mb-4">{pkg.total} paid upfront on agreement</p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0 mt-0.5 ${pkg.featured ? "bg-[var(--gold)]" : "bg-[var(--forest)]"}`} />
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
            className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-opacity"
          >
            <Mail className="w-4 h-4" />
            partnerships@seftoncoast.network
          </a>
        </div>
      </div>

    </div>
  );
}
