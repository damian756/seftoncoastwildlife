import Link from "next/link";
import type { Metadata } from "next";

const title = "Marshside RSPB Reserve — Parking, Access & What to Bring";
const description =
  "Practical guide to Marshside RSPB Reserve near Southport — postcode, parking, hides, when to visit and what to see each season.";
const url = "https://seftoncoastwildlife.co.uk/nature/marshside-rspb";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Marshside RSPB Reserve",
  description:
    "RSPB reserve on the Sefton Coast near Southport — managed lagoons, scrapes and saltmarsh attracting thousands of wading birds and wildfowl.",
  url,
  geo: { "@type": "GeoCoordinates", latitude: 53.676, longitude: -2.993 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marshside Road",
    addressLocality: "Southport",
    postalCode: "PR9 9PH",
    addressCountry: "GB",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free entry", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dogs on leads", value: true },
  ],
  touristType: ["Birdwatchers", "Wildlife photographers", "Families", "Dog walkers"],
};

export default function MarshsidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--slate)]/60 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[var(--marsh)] transition">Home</Link>
          <span>/</span>
          <Link href="/nature" className="hover:text-[var(--marsh)] transition">Nature</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">Marshside RSPB</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
          Marshside RSPB Reserve
        </h1>
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">
          If you're going to visit one place on the Sefton Coast for birdwatching, make it Marshside. Managed lagoons, scrapes and saltmarsh right on the edge of Southport — and in winter, the sky fills with pink-footed geese. Free entry. No excuses.
        </p>

        {/* Practical info box */}
        <div className="bg-[var(--dune)] rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-[var(--forest)] mb-4">Practical information</h2>
          <table className="w-full text-sm text-[var(--slate)]">
            <tbody className="divide-y divide-[var(--foam)]">
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">PR9 9PH</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Free. RSPB members and non-members alike</td></tr>
              <tr><td className="py-2 font-medium">Car park</td><td className="py-2">Free roadside parking on Marshside Road. Small layby — arrives early in winter or you'll park further up</td></tr>
              <tr><td className="py-2 font-medium">Hides</td><td className="py-2">Two hides: Sandgrounder Hide (main lagoon) and the sea wall viewpoint</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">Allowed on leads on the paths. Keep them well clear of nesting areas in spring</td></tr>
              <tr><td className="py-2 font-medium">Facilities</td><td className="py-2">No café or toilets on site. Southport town centre is 15 minutes on foot</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">The main path along the sea wall is flat and firm. Hides are step-free</td></tr>
            </tbody>
          </table>
        </div>

        {/* Seasonal highlights */}
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          Marshside is worth visiting any time of year. The honest answer is that October through March is the best of it — but there's always something happening.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-bold text-[var(--forest)] mb-1">October – March: the peak</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Pink-footed Geese arrive from Iceland in October and by November there can be 80,000+ on the Ribble Estuary. Stand on the sea wall around dusk and you'll hear the noise before you see anything — a low, constant calling that builds until the sky goes dark with birds. It's one of the best wildlife spectacles in the North West and it costs nothing.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Through winter the lagoons hold Teal, Wigeon, Shoveler and Pintail. Ruff and Golden Plover work the fields behind the reserve. If it's cold and clear, check for Short-eared Owl quartering the saltmarsh at dusk.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-bold text-[var(--forest)] mb-1">April – June: breeding season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Avocets breed on the scrapes — usually 10–20 pairs. Lapwing and Redshank nest on the marsh. Sedge Warblers and Reed Buntings arrive in April. The summer wader passage starts in May — the scrapes can have good numbers of Dunlin, Ringed Plover and the occasional Ruff still in breeding plumage.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Keep dogs strictly on leads from April onwards. If you see a dog flushing nesting birds, say something. Those Avocets have flown from West Africa to nest here.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-bold text-[var(--forest)] mb-1">July – September: autumn passage</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Wader passage picks up in late July. Greenshank, Green Sandpiper, Little Stint and Curlew Sandpiper all pass through. Numbers build through August. September can bring Black-tailed Godwit in large flocks on the inner marsh.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              The geese start coming back from Iceland from late September — the first skeins of the season are always a good moment.
            </p>
          </div>
        </div>

        {/* What to bring */}
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Binoculars</strong> — the basic requirement. 8×42 covers everything you'll see from the hides. The waders on the far mud are manageable at that magnification.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Scope</strong> — useful in winter when the geese are on the estuary. Not essential but if you've got one, bring it.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Layers and waterproofs</strong> — Marshside is exposed. The wind off the Ribble is relentless. Dress warmer than you think you need to and you'll be fine.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Walking boots or wellies</strong> — the sea wall path is firm but the field edges can be muddy after rain. Trainers are fine in summer.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Thermos</strong> — optional but you'll be glad of it. There's nowhere to get a coffee on site.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--marsh)] mt-0.5">▸</span>
            <span><strong className="text-[var(--slate)]">Field guide</strong> — Collins Bird Guide is the one. The waders especially benefit from having a book on hand in autumn passage.</span>
          </li>
        </ul>

        {/* Hides */}
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">The hides</h2>
        <p className="text-[var(--slate)] mb-4 leading-relaxed text-sm">
          The main hide looks over the managed lagoon and scrapes — this is where you'll see most of the waders and wildfowl. It faces south-west, which means afternoon sun straight in your eyes in winter. Go in the morning if you can. The light is better and the geese are usually still on the fields before they move to the estuary.
        </p>
        <p className="text-[var(--slate)] mb-10 leading-relaxed text-sm">
          The sea wall gives you an open view over the Ribble Estuary — essential for the Pink-footed Goose flocks and the winter waders on the mudflats. Bring the scope here.
        </p>

        {/* Getting there */}
        <h2 className="text-2xl font-bold text-[var(--forest)] mb-4">Getting there</h2>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          Marshside Road runs north from Southport town centre. The reserve entrance is on the left about a mile up, well before you reach Crossens. Postcode <strong>PR9 9PH</strong> gets you close — park in the layby on the road.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          By public transport: Southport is on the Merseyrail Northern Line from Liverpool. The reserve is about 25 minutes on foot from Lord Street, or a short bus ride to Marshside Road.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline text-sm">Browse the bird species database →</Link>
          <Link href="/birdwatching-guide" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birdwatching guide →</Link>
          <Link href="/seasonal/pink-footed-geese" className="text-[var(--marsh)] font-medium hover:underline text-sm">Pink-footed Geese guide →</Link>
        </div>
      </div>
    </>
  );
}
