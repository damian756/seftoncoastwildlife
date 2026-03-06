import Link from "next/link";
import type { Metadata } from "next";
import { ClickableImage } from "@/components/ClickableImage";

const title = "Marshside RSPB Reserve — Parking, Access & What to Bring";
const description =
  "Practical guide to Marshside RSPB Reserve near Southport — car park, Nel's Hide, viewpoints, seasonal highlights and 80,000+ Pink-footed Geese in winter.";
const url = "https://www.seftoncoastwildlife.co.uk/nature/marshside-rspb";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Sefton Coast Wildlife",
    type: "article",
    images: [{ url: "https://www.seftoncoastwildlife.co.uk/images/reserves/marshside/hero-coastal-reflection.jpg" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Is Marshside RSPB free to enter?",
    a: "Entry to the reserve is free. The RSPB car park on Redshank Road charges £1.50 for up to two hours or £3.00 for longer — this covers parking and access to all visitor facilities including Nel's Hide, paths and the toilet. RSPB members and Blue Badge holders park free.",
  },
  {
    q: "What is the postcode for Marshside RSPB?",
    a: "PR9 9PH gets you onto Marshside Road for the free roadside layby near the sea wall. For the RSPB car park and Nel's Hide, follow signs for Redshank Road off Marine Drive — grid reference SD 353204. The Flowbird pay machine accepts card and contactless.",
  },
  {
    q: "When is the best time to visit Marshside RSPB?",
    a: "October to March is the peak season — Pink-footed Geese arrive from Iceland and numbers can reach 80,000+ on the Ribble Estuary. April–June is good for breeding Avocets and waders. There is always something to see.",
  },
  {
    q: "Are dogs allowed at Marshside RSPB?",
    a: "Dogs are allowed on leads on the paths at all times. The coastal saltmarsh section along Redshank Road is a dog zone — keep them on the track and give nesting and feeding birds space. Nel's Hide allows guide dogs only.",
  },
  {
    q: "How do I get to Marshside RSPB by public transport?",
    a: "Southport is on the Merseyrail Northern Line from Liverpool. From Lord Street the reserve is about 25 minutes on foot heading north along Marshside Road, or a short local bus ride.",
  },
  {
    q: "What birds can I see at Marshside in winter?",
    a: "Pink-footed Goose (80,000+), Teal, Wigeon, Shoveler, Pintail, Golden Plover, Ruff, and — on good evenings — Short-eared Owl quartering the saltmarsh. Bring a scope for the geese on the estuary.",
  },
  {
    q: "What are Nel's Hide opening times?",
    a: "Nel's Hide is open 08:30am to 4:00pm daily. No smoking inside. Guide dogs only in the hide itself.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Marshside RSPB Reserve",
    description:
      "RSPB reserve on the Sefton Coast near Southport — managed lagoons, scrapes and saltmarsh attracting thousands of wading birds and wildfowl.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 53.676, longitude: -2.993 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Redshank Road",
      addressLocality: "Southport",
      postalCode: "PR9 9PH",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free entry to reserve", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dogs on leads", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toilet", value: true },
    ],
    touristType: ["Birdwatchers", "Wildlife photographers", "Families", "Dog walkers"],
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

export default function MarshsidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Hero image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]">
        <ClickableImage
          src="/images/reserves/marshside/hero-coastal-reflection.jpg"
          alt="The coastal saltmarsh path at Marshside — sky and clouds reflected in a tidal pool, a dog walker in the distance"
          className="w-full h-full object-cover object-center"
          caption="Marshside coastal path — Redshank Road, SD 353204. February 2026."
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
          <p className="text-xs text-white/50">Marshside coastal path — Redshank Road, SD 353204</p>
        </div>
      </div>

      {/* Page header band */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Marshside RSPB</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB Reserve · Southport · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Marshside RSPB Reserve
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            If you&apos;re going to visit one place on the Sefton Coast for birdwatching, make it Marshside. Free entry. Managed lagoons, breeding Avocets, and in winter — the sky fills with Pink-footed Geese. No excuses.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Stat block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "80,000+", label: "Pink-footed Geese (peak winter)" },
            { stat: "Free", label: "Entry — always" },
            { stat: "10–20", label: "Avocet pairs breeding" },
            { stat: "PR9 9PH", label: "Postcode for parking" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Practical info box */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Practical information
        </p>
        <div className="bg-[var(--dune)] rounded-xl p-6 mb-6">
          <table className="w-full text-sm text-[var(--slate)]">
            <tbody className="divide-y divide-[var(--foam)]">
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">PR9 9PH (Marshside Road layby) · SD 353204 (Redshank Road car park)</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Free. RSPB members and non-members alike</td></tr>
              <tr><td className="py-2 font-medium">Car park</td><td className="py-2"><a href="https://www.southportguide.co.uk/parking/parking-rspb-marshside" target="_blank" rel="noopener" className="text-[var(--marsh)] underline underline-offset-2">RSPB car park on Redshank Road</a> — £1.50 up to 2 hours, £3.00 over 2 hours. RSPB members and Blue Badge holders free. Pay and display (Flowbird machine, card/contactless). Car park locked at closing time.</td></tr>
              <tr><td className="py-2 font-medium">Car park hours</td><td className="py-2">8:30am–4pm (1 Nov–1 Mar) · 8:30am–5pm (2 Mar–31 Oct) · Open every day including bank holidays and Christmas</td></tr>
              <tr><td className="py-2 font-medium">Nel&apos;s Hide</td><td className="py-2">Open 8:30am–4pm. Guide dogs only inside the hide. No smoking.</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">On leads at all times. Dog zone on the coastal saltmarsh path — keep to the track. Nel&apos;s Hide: guide dogs only.</td></tr>
              <tr><td className="py-2 font-medium">Facilities</td><td className="py-2">Toilet on site. No café. Southport town centre 15 minutes on foot — see <a href="https://www.southportguide.co.uk" className="text-[var(--marsh)] underline">SouthportGuide</a> for nearby lunch options.</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">The main path along the sea wall is flat and firm. Hides are step-free. Car park has level access.</td></tr>
              <tr><td className="py-2 font-medium">Emergency</td><td className="py-2">Grid reference SD 353204. Dial 999 and ask for the Coastguard. Beware soft mud and incoming tides off the main path.</td></tr>
            </tbody>
          </table>
        </div>

        {/* Car park photo */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <ClickableImage
            src="/images/reserves/marshside/car-park-pricing.jpg"
            alt="RSPB Marshside car park pricing and opening times sign — up to 2 hours £1.50, over 2 hours £3, RSPB members free"
            className="w-full object-cover"
            caption="Car park pricing as of February 2026. RSPB members park free — display membership card on dashboard."
          />
          <p className="text-xs text-[var(--slate)]/50 mt-1.5 px-1">Car park pricing as of February 2026. RSPB members park free — display membership card on dashboard.</p>
        </div>

        {/* When to visit */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Seasonal highlights
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          Marshside is worth visiting any time of year. The honest answer is that October through March is the best of it — but there&apos;s always something happening.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">October – March: the peak</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Pink-footed Geese arrive from Iceland in October and by November there can be 80,000+ on the Ribble Estuary. Stand on the sea wall around dusk and you&apos;ll hear the noise before you see anything — a low, constant calling that builds until the sky goes dark with birds. It&apos;s one of the best wildlife spectacles in the North West and it costs nothing.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Through winter the lagoons hold Teal, Wigeon, Shoveler and Pintail. Ruff and Golden Plover work the fields behind the reserve. If it&apos;s cold and clear, check for Short-eared Owl quartering the saltmarsh at dusk.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">April – June: breeding season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Avocets breed on the scrapes — usually 10–20 pairs. Lapwing and Redshank nest on the marsh. Sedge Warblers and Reed Buntings arrive in April. Summer wader passage starts in May with Dunlin, Ringed Plover and the occasional Ruff still in breeding plumage.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Keep dogs strictly on leads from April onwards. Those Avocets have flown from West Africa to nest here.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">July – September: autumn passage</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Wader passage picks up in late July. Greenshank, Green Sandpiper, Little Stint and Curlew Sandpiper all pass through. Numbers build through August — by mid-August the main scrape can hold 200–400 Dunlin. September brings Black-tailed Godwit in large flocks on the inner marsh.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              The geese start coming back from Iceland from late September. The first skeins of the season are always a good moment.
            </p>
          </div>
        </div>

        {/* Nel's Hide section */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Hides &amp; viewpoints
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Nel&apos;s Hide</h2>
        <p className="text-[var(--slate)] mb-5 leading-relaxed text-sm">
          Nel&apos;s Hide is the main enclosed hide — a raised structure with a row of opening windows along a counter shelf, looking out over the flooded scrape. Get there early for morning light and the birds feeding close in. It faces east, so the light is with you until mid-morning. A row of seating chairs, no heating, but it cuts the wind. Take a flask.
        </p>

        {/* Nel's Hide photo gallery */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/reserves/marshside/nels-hide-exterior.jpg"
              alt="Nel's Hide exterior — RSPB Marshside, corrugated green metal building with decking and wooden viewing enclosure"
              className="w-full h-44 object-cover"
              caption="Nel's Hide exterior — the corrugated metal building on Redshank Road."
            />
          </div>
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/reserves/marshside/nels-hide-interior.jpg"
              alt="Inside Nel's Hide — row of blue chairs along the viewing shelf with windows overlooking the flooded marsh"
              className="w-full h-44 object-cover"
              caption="Inside Nel's Hide — viewing shelf, blue chairs, windows overlooking the scrape."
            />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-5">
          <ClickableImage
            src="/images/reserves/marshside/nels-hide-lifestyle.jpg"
            alt="Birdwatcher inside Nel's Hide with flask, mugs and sandwiches, photographing through the window with a telephoto lens"
            className="w-full h-56 sm:h-72 object-cover"
            caption="The full experience: flask, sandwiches, telephoto lens. No café on site — bring your own."
          />
          <p className="text-xs text-[var(--slate)]/50 mt-1.5 px-1">The full experience: flask, sandwiches, telephoto lens. Nel&apos;s Hide does not provide refreshments — bring your own.</p>
        </div>

        <div className="bg-[var(--dune)] rounded-xl p-5 mb-10 text-sm text-[var(--slate)] leading-relaxed">
          <p className="font-semibold text-[var(--forest)] mb-2">Nel&apos;s Hide — practical notes</p>
          <ul className="space-y-1.5">
            <li>Open 8:30am–4pm daily</li>
            <li>Counter shelf runs the length of the hide — useful ledge for scopes and bean bags</li>
            <li>Guide dogs only inside the hide</li>
            <li>No smoking</li>
            <li>Check the left-hand corner of the scrape first — waders tend to congregate there</li>
            <li>Afternoon sun comes straight in — morning visits give better light for photography</li>
          </ul>
        </div>

        {/* Viewpoints section */}
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-2">The viewpoints</h2>
        <p className="text-[var(--slate)] mb-5 text-sm leading-relaxed">
          Along the reserve path there are two named open viewpoints — Junction Viewpoint and Halfway Viewpoint — each with seating and open views over the flooded marsh. These are the spots for the Pink-footed Goose spectacle at dusk: the birds rise off the fields and stream overhead in long skeins heading to roost on the estuary.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/reserves/marshside/halfway-viewpoint.jpg"
              alt="Halfway Viewpoint at Marshside RSPB — person and dog looking out over the flooded winter marsh"
              className="w-full h-44 object-cover"
              caption="Halfway Viewpoint — dogs are welcome on the path. Nel's Hide is just ahead."
            />
            <p className="text-xs text-[var(--slate)]/50 mt-1 px-0.5">Halfway Viewpoint — dogs welcome on the path</p>
          </div>
          <div className="rounded-xl overflow-hidden h-44">
            <ClickableImage
              src="/images/reserves/marshside/junction-viewpoint-bench.jpg"
              alt="Bench at the Junction Viewpoint looking out over the flooded marsh at Marshside RSPB"
              className="w-full h-44 object-cover"
              caption="Junction Viewpoint bench — looking out over the flooded winter marsh."
            />
            <p className="text-xs text-[var(--slate)]/50 mt-1 px-0.5">Junction Viewpoint bench</p>
          </div>
        </div>

        {/* Coastal path section */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          The saltmarsh walk
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">The coastal path</h2>
        <p className="text-[var(--slate)] mb-5 text-sm leading-relaxed">
          The path along the outside of the sea wall — on the Redshank Road coastal side — is a completely different experience from the reserve walk. Exposed, flat, with tidal pools and the Ribble Estuary to your right. This is the Marshside Saltmarsh: part of the Ribble Estuary Special Protection Area. Dogs are allowed on leads on the designated track. The saltmarsh is free to access with no entry charge.
        </p>
        <p className="text-[var(--slate)] mb-5 text-sm leading-relaxed">
          Stay on the track. The saltmarsh holds ground-nesting birds, and soft mud and incoming creeks make going off-path genuinely dangerous. In an emergency, grid reference SD 353204 — dial 999 and ask for the Coastguard.
        </p>

        <div className="rounded-xl overflow-hidden mb-4">
          <ClickableImage
            src="/images/reserves/marshside/coastal-path-walk.jpg"
            alt="Walking the coastal path at Marshside — person and dog on the grass embankment with the Ribble Estuary saltmarsh to the right, blue sky"
            className="w-full h-64 object-cover"
            caption="The coastal path looking north — Ribble Estuary saltmarsh to the right."
          />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-10">
          <div className="rounded-xl overflow-hidden h-28">
            <ClickableImage
              src="/images/reserves/marshside/dog-in-water.jpg"
              alt="Dog running through a tidal pool on the Marshside coastal path — saltmarsh and blue sky behind"
              className="w-full h-28 object-cover"
              caption="Dogs love the tidal pools. Keep them on the path — the saltmarsh itself is protected ground."
            />
          </div>
          <div className="rounded-xl overflow-hidden h-28">
            <ClickableImage
              src="/images/reserves/marshside/coastal-driftwood.jpg"
              alt="Weathered driftwood in coastal grass at Marshside — typical Ribble Estuary saltmarsh vegetation"
              className="w-full h-28 object-cover"
              caption="Driftwood on the Marshside strandline."
            />
          </div>
          <div className="rounded-xl overflow-hidden h-28">
            <ClickableImage
              src="/images/reserves/marshside/coastal-timber-shell.jpg"
              alt="Old timber with a cockle shell on top — coastal path at Marshside RSPB, person walking in the distance"
              className="w-full h-28 object-cover"
              caption="Old sea-defence timber with barnacles — Marshside foreshore."
            />
          </div>
        </div>

        {/* What to bring */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Kit list
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          {[
            { label: "Binoculars", body: "The basic requirement. 8×42 covers everything you'll see from the hides. Waders on the far mud are manageable at that magnification." },
            { label: "Scope", body: "Useful in winter when the geese are on the estuary. Not essential but if you've got one, bring it." },
            { label: "Layers and waterproofs", body: "Marshside is exposed. The wind off the Ribble is relentless. Dress warmer than you think you need to." },
            { label: "Walking boots or wellies", body: "The sea wall path is firm but the saltmarsh coastal path can be muddy. Trainers are fine in summer on the main paths." },
            { label: "Thermos and food", body: "No café on site. There is a toilet at the car park but no refreshments — bring your own. The Nel's Hide experience is significantly improved with a flask." },
            { label: "Field guide", body: "Collins Bird Guide is the one. The waders especially benefit from having a book on hand in autumn passage." },
          ].map(({ label, body }) => (
            <li key={label} className="flex gap-3">
              <span className="text-[var(--marsh)] mt-0.5 flex-shrink-0">▸</span>
              <span><strong className="text-[var(--slate)]">{label}</strong> — {body}</span>
            </li>
          ))}
        </ul>

        {/* Getting there */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting there
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-3">How to find it</h2>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          <strong>By car:</strong> From Southport, head north along Marshside Road (postcode PR9 9PH). For Nel&apos;s Hide and the <a href="https://www.southportguide.co.uk/parking/parking-rspb-marshside" target="_blank" rel="noopener" className="text-[var(--marsh)] underline underline-offset-2">RSPB car park</a>, follow signs for Redshank Road off Marine Drive — the blue &apos;RSPB Marshside P&apos; directional signs are visible at the junction. Grid reference SD 353204. The car park is locked at closing time — do not stay past 4pm (winter) or 5pm (summer).
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          <strong>By public transport:</strong> Southport is on the Merseyrail Northern Line from Liverpool. The reserve is about 25 minutes on foot from Lord Street, or a short bus ride to Marshside Road.
        </p>

        {/* Memorial bench — local detail */}
        <div className="bg-[var(--dune)] rounded-xl p-5 mb-10">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
              <ClickableImage
                src="/images/reserves/marshside/memorial-bench-plaque.jpg"
                alt="Memorial bench plaque for Stan and Peggy Scott — Founder Members of North Cheshire Group RSPB 1976-1999"
                className="w-full h-full object-cover"
                caption="In Memory of Stan and Peggy Scott — Founder Members of North Cheshire Group RSPB 1976–1999. Donated by Family and Friends."
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--marsh)] mb-1">On the path</p>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                One of the benches along the reserve path is dedicated to <strong>Stan and Peggy Scott</strong> — Founder Members of North Cheshire Group RSPB, 1976–1999. Donated by family and friends. The sort of detail that reminds you this reserve was built by people who just loved birds.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
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

        {/* Planning your visit */}
        <p className="text-[var(--slate)] text-sm leading-relaxed mb-10">
          Marshside is on the northern edge of Southport — Churchtown village is five minutes from the reserve and has good options for lunch or coffee after a morning on the marsh. If you&apos;re making a full day or an overnight trip,{" "}
          <a
            href="https://www.southportguide.co.uk"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            SouthportGuide covers accommodation and dining in Southport
          </a>
          .
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline text-sm">Browse the bird species database →</Link>
          <Link href="/birdwatching-guide" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birdwatching guide →</Link>
          <Link href="/seasonal/pink-footed-geese" className="text-[var(--marsh)] font-medium hover:underline text-sm">Pink-footed Geese guide →</Link>
          <Link href="/blog/photographing-waders-marshside" className="text-[var(--marsh)] font-medium hover:underline text-sm">Photography tips for Marshside →</Link>
        </div>
      </div>
    </>
  );
}
