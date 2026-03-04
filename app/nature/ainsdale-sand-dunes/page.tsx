import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const title = "Ainsdale Sand Dunes NNR — Natterjack Toads, Sand Lizards & Access Guide";
const description =
  "Practical guide to Ainsdale Sand Dunes National Nature Reserve — postcode PR8 2QA, free entry, natterjack toads, sand lizards and rare dune plants managed by Natural England.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/ainsdale-sand-dunes";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Is Ainsdale Sand Dunes NNR free to enter?",
    a: "Yes. Entry is free and the reserve is open at all times. The main access is from Shore Road, Ainsdale. You pay to use the beach car park at Ainsdale (managed by Sefton Council) but the NNR itself has no entry charge.",
  },
  {
    q: "What is the postcode for Ainsdale Sand Dunes NNR?",
    a: "PR8 2QA gets you to Shore Road, Ainsdale, which is the main access point for the reserve. The NNR sits directly inland from Ainsdale Beach, between the beach and the railway line.",
  },
  {
    q: "Can I see natterjack toads at Ainsdale?",
    a: "Yes — Ainsdale is one of the best places in the UK to hear natterjack toads. The males call loudly from the dune slack pools on warm spring evenings, usually from April through June. You're more likely to hear them than see them. Visit after dark in May for the best chance.",
  },
  {
    q: "Are sand lizards present at Ainsdale?",
    a: "Yes. Sand lizards were reintroduced to Ainsdale and the population has established well. Look on south-facing dune slopes on warm, sunny days from April onwards — they bask early in the morning before it gets too hot. Males turn bright green in the breeding season.",
  },
  {
    q: "Are dogs allowed at Ainsdale Sand Dunes NNR?",
    a: "Dogs are permitted but must be kept under close control, especially between March and August when ground-nesting birds and reptiles are present. Keep dogs on leads on the dune slacks and vegetated areas.",
  },
  {
    q: "What's the difference between Ainsdale NNR and the National Trust site at Formby?",
    a: "The NT site at Formby (L37 1YH) is better set up for visitors — car park, café, waymarked trails, and the main red squirrel viewing area. Ainsdale NNR is quieter and less managed for tourism, making it better for wildlife encounters. Both sites adjoin each other along the Sefton Coast.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Ainsdale Sand Dunes National Nature Reserve",
    description:
      "National Nature Reserve managed by Natural England on the Sefton Coast — internationally important dune system supporting natterjack toads, sand lizards and rare dune plants.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 53.606, longitude: -3.043 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shore Road",
      addressLocality: "Ainsdale, Southport",
      postalCode: "PR8 2QA",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free entry", value: true },
      { "@type": "LocationFeatureSpecification", name: "Open access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dogs on leads", value: true },
    ],
    touristType: ["Wildlife photographers", "Naturalists", "Families", "Walkers"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function AinsdaleSandDunesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Ainsdale Sand Dunes NNR</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            National Nature Reserve · Natural England · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ainsdale Sand Dunes NNR
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            One of the most important dune systems in Europe — and most people drive straight past it to the beach. Natterjack toads, sand lizards, rare dune plants, and almost no crowds. Free entry, any time.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src="/images/blog/beachcombing/sea-spurge-ainsdale-dunes.webp"
          alt="Sea spurge growing on the Ainsdale sand dunes, Sefton Coast"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <p className="absolute bottom-3 right-4 text-white/70 text-xs">Sea spurge on the Ainsdale dunes — part of the SSSI</p>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Free", label: "Entry — always" },
            { stat: "PR8 2QA", label: "Postcode for access" },
            { stat: "492ha", label: "Reserve area" },
            { stat: "Apr–Jun", label: "Best for natterjacks" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Practical information
        </p>
        <div className="bg-[var(--dune)] rounded-xl p-6 mb-10">
          <table className="w-full text-sm text-[var(--slate)]">
            <tbody className="divide-y divide-[var(--foam)]">
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">PR8 2QA (Shore Road, Ainsdale)</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Free. Open access at all times</td></tr>
              <tr><td className="py-2 font-medium">Parking</td><td className="py-2">Ainsdale Beach car park (Sefton Council — paid). The NNR is directly accessible from the beach</td></tr>
              <tr><td className="py-2 font-medium">Managed by</td><td className="py-2">Natural England</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">Permitted, under close control. On leads Mar–Aug near dune slacks and vegetated areas</td></tr>
              <tr><td className="py-2 font-medium">Facilities</td><td className="py-2">No on-site facilities. Ainsdale village is 10 minutes walk with cafés and shops</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">Beach and main paths are accessible. The dune interior is rough going — uneven sand, steep slopes</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Key species
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What lives here</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          Ainsdale&apos;s dune system is internationally designated — it&apos;s a Special Area of Conservation (SAC) and Site of Special Scientific Interest (SSSI). That&apos;s not bureaucratic box-ticking. It means the wildlife here is genuinely rare.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Natterjack Toad</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The UK&apos;s second rarest amphibian, and Ainsdale is one of the strongest populations in England. They breed in the shallow dune slack pools from April through June. The males call — a surprisingly loud, rasping chur — on warm evenings from April, often audible from 400 metres away. Go after dark in May, walk quietly near the slack pools, and you&apos;ll hear them. Seeing one takes more patience, but the calls alone are worth the trip.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Sand Lizard</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Rarer than the natterjack and harder to find, but present on Ainsdale&apos;s south-facing dune slopes. Reintroduced after local extinction and the population is now self-sustaining. Males turn vivid green on their flanks in spring — unmistakable when they emerge to bask in April sunshine. Look for them on bare, sandy slopes with patchy vegetation. They move fast, so move slowly.
            </p>
          </div>

          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Dune Plants</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The dune slack vegetation is outstanding in its own right — Creeping Willow, Round-leaved Wintergreen, Dune Helleborine and several rare mosses and lichens occur here. June and July are the best months for plants — the slacks green up fast after winter flooding. Don&apos;t walk on the vegetated slacks themselves, the substrate is fragile.
            </p>
          </div>

          {/* Dune plant images */}
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/blog/beachcombing/sea-spurge-ainsdale-dunes.webp"
                alt="Sea spurge in the Ainsdale sand dunes"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
              <p className="absolute bottom-2 left-2 right-2 text-white text-xs drop-shadow leading-snug">Sea spurge — toxic sap, fleshy yellow-green leaves</p>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/images/blog/beachcombing/sea-spurge-closeup-ainsdale.webp"
                alt="Sea spurge close-up on Ainsdale dunes"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
              <p className="absolute bottom-2 left-2 right-2 text-white text-xs drop-shadow leading-snug">Sea spurge close-up — do not touch</p>
            </div>
          </div>

          <div className="border-l-4 border-rose-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Birds</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Stonechat breeds on the dune scrub — look for them perching on top of bramble clumps from March onwards. Skylark still nests in good numbers on the open dunes. Passage migrants use the scrub in spring and autumn — Wheatear, Whinchat, and Redstart are regular in May and September. In winter the dune edges hold Meadow Pipit and sometimes Short-eared Owl hunting along the margins.
            </p>
          </div>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Seasonal highlights
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-[var(--slate)] border-collapse">
            <thead>
              <tr className="bg-[var(--dune)] text-left">
                <th className="py-2 px-3 font-semibold text-[var(--forest)]">Month</th>
                <th className="py-2 px-3 font-semibold text-[var(--forest)]">Highlights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dune)]">
              <tr><td className="py-2 px-3 font-medium">April</td><td className="py-2 px-3">Natterjack males start calling. Sand lizards emerge to bask. First Wheatear on passage</td></tr>
              <tr><td className="py-2 px-3 font-medium">May</td><td className="py-2 px-3">Peak natterjack calling. Sand lizard breeding season. Dune plants in flower. Good for migrants</td></tr>
              <tr><td className="py-2 px-3 font-medium">June</td><td className="py-2 px-3">Dune slack plants at their best. Natterjack tadpoles in the pools. Stonechat and Skylark breeding</td></tr>
              <tr><td className="py-2 px-3 font-medium">Jul–Aug</td><td className="py-2 px-3">Quieter for herps. Insects peak — look for Dark Green Fritillary and Six-spot Burnet moth</td></tr>
              <tr><td className="py-2 px-3 font-medium">Sep–Oct</td><td className="py-2 px-3">Autumn migrants. Whinchat and Redstart in the scrub. Meadow Pipit flocks building</td></tr>
              <tr><td className="py-2 px-3 font-medium">Nov–Mar</td><td className="py-2 px-3">Quiet for reptiles and amphibians. Short-eared Owl occasional. Good for open-country birds</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Know before you go
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          {[
            { label: "Binoculars", body: "For birds and to scan dune slopes for lizards at a distance. 8×42 is plenty." },
            { label: "Torch", body: "Essential if you're going for natterjacks after dark. A head torch keeps your hands free." },
            { label: "Wellies or waterproof boots", body: "The dune slacks hold standing water after rain. Even in summer the slacks can be wet." },
            { label: "Layers", body: "The coast is exposed. It can be 5°C colder at Ainsdale than in Southport town centre on a windy day." },
            { label: "A field guide to amphibians and reptiles", body: "Collins Reptiles and Amphibians of Britain and Europe is the standard — well worth having if you're specifically looking for natterjacks or sand lizards." },
          ].map(({ label, body }) => (
            <li key={label} className="flex gap-3">
              <span className="text-[var(--marsh)] mt-0.5 flex-shrink-0">▸</span>
              <span><strong className="text-[var(--slate)]">{label}</strong> — {body}</span>
            </li>
          ))}
        </ul>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting there
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-3">How to find it</h2>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          Postcode <strong>PR8 2QA</strong> takes you to Shore Road, Ainsdale. Park at Ainsdale Beach car park (Sefton Council, pay and display). The NNR begins immediately north of the beach car park — walk north along the beach or take the footpath through the dunes heading inland.
        </p>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          The National Trust Formby site (L37 1YH) is immediately to the north — the two reserves adjoin. You can walk between them along the beach at low tide, though the NT car park and Ainsdale car park are separate.
        </p>
        <p className="text-[var(--slate)] mb-6 text-sm leading-relaxed">
          By train: Ainsdale station is on the Merseyrail Northern Line — a 15-minute walk to the beach. Much easier than dealing with the car park on summer weekends.
        </p>

        {/* Access images */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="relative h-44 rounded-xl overflow-hidden">
            <Image
              src="/images/blog/beachcombing/england-coast-path-sign-ainsdale.webp"
              alt="England Coast Path sign at Ainsdale"
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <p className="absolute bottom-2 left-2 right-2 text-white text-xs drop-shadow leading-snug">England Coast Path runs through Ainsdale</p>
          </div>
          <div className="relative h-44 rounded-xl overflow-hidden">
            <Image
              src="/images/blog/beachcombing/sefton-coast-natural-home-sign.webp"
              alt="Sefton Coast — Natural Home sign at Ainsdale"
              fill
              sizes="50vw"
              className="object-cover object-top"
            />
            <p className="absolute bottom-2 left-2 right-2 text-white text-xs drop-shadow leading-snug">Sefton Coast — Natural Home sign at the reserve entrance</p>
          </div>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Common questions
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-6">FAQs</h2>
        <div className="space-y-5 mb-10">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[var(--dune)] pb-5 last:border-0">
              <h3 className="font-semibold text-[var(--forest)] mb-1.5 text-sm">{q}</h3>
              <p className="text-sm text-[var(--slate)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <p className="text-[var(--slate)] text-sm leading-relaxed mb-10">
          Ainsdale village has a good selection of cafés and a Co-op for supplies. If you&apos;re combining this with the NT Formby red squirrel trail, the NT café is 20 minutes north by car. For a full day out on the Sefton Coast,{" "}
          <a
            href="https://www.southportguide.co.uk"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            SouthportGuide covers food, accommodation and things to do in Southport
          </a>
          {" "}and{" "}
          <a
            href="https://www.formbyguide.co.uk/red-squirrels-formby"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            FormbyGuide has the full red squirrel trail guide
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB Reserve →</Link>
          <Link href="/mammals" className="text-[var(--marsh)] font-medium hover:underline text-sm">Mammals of the Sefton Coast →</Link>
          <Link href="/nature/sefton-coast" className="text-[var(--marsh)] font-medium hover:underline text-sm">The Sefton Coast overview →</Link>
        </div>
      </div>
    </>
  );
}
