import { notFound } from "next/navigation";
import Link from "next/link";
import { getWikipediaImage } from "@/lib/wikipedia";
import type { Metadata } from "next";

/* ─── per-page content ────────────────────────────────────── */

interface SeasonalPageData {
  title: string;
  period: string;
  metaDescription: string;
  heroWikipediaTitle: string;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  practicalTips: string[];
  relatedLinks: { href: string; label: string; external?: boolean }[];
}

const seasonalPages: Record<string, SeasonalPageData> = {
  "pink-footed-geese": {
    title: "Pink-footed Geese at Marshside",
    period: "October – March",
    metaDescription:
      "Pink-footed Geese on the Sefton Coast — when they arrive, where to see them, and how to get the best out of a winter visit to Marshside RSPB.",
    heroWikipediaTitle: "Pink-footed goose",
    heroAlt: "Pink-footed Goose in flight",
    intro:
      "The Pink-footed Goose is the reason Marshside RSPB exists on most birders' lists. Every autumn, tens of thousands fly south from their Icelandic breeding grounds and settle on the Ribble Estuary and surrounding farmland. By November, there can be 80,000 or more in the area. It is one of the great wildlife spectacles in England — and most people have never heard of it.",
    sections: [
      {
        heading: "When they arrive",
        body: [
          "The first skeins appear in mid-September, usually in small groups. Numbers build steadily through October and peak between late October and late November. The birds use the Ribble Estuary as a roost site and feed on the surrounding arable fields — sugar beet tops, winter stubble, potato fields.",
          "By December numbers often drop slightly as some birds move further south in hard weather. In mild winters, good numbers stay into March. The last birds tend to leave for Iceland in late March or early April.",
        ],
      },
      {
        heading: "Where to see them",
        body: [
          "The sea wall at Marshside RSPB (PR9 9PH) is the best viewpoint. The geese roost on the estuary and flight out to the fields at dawn — stand on the wall at first light in October and you'll hear them before you see them. The calling builds from a murmur to something that fills the sky.",
          "Evening flighting is equally good — watch from the same spot an hour before dusk as the birds come back onto the estuary. In the right light it's unforgettable.",
          "The fields around Southport and Crossens hold feeding flocks during the day. You can often see birds from the road — look for large brown geese in ploughed or stubble fields, usually in flocks of hundreds.",
        ],
      },
      {
        heading: "Identification",
        body: [
          "Pink-footed Geese are medium-sized, brown-grey geese with a short neck and round head. The key features are the pink bill with a dark base, and pink legs — distinctive from the larger Greylag (orange-pink bill, orange legs) and the Canada Goose (entirely different shape and colouring).",
          "In flight, the wings show a blue-grey forewing panel. The call is a nasal 'wink-wink' or 'ung-ung' — once you know it, you'll hear it from a considerable distance.",
        ],
      },
      {
        heading: "Photography tips",
        body: [
          "The best light for photography is morning, with the low sun behind you on the sea wall. The birds are backlit in the evening but evening flighting can still produce dramatic silhouette shots.",
          "A 400mm lens is a minimum for flight shots; 500-600mm for reasonable frame-filling. Mirrorless cameras with fast autofocus tracking have made goose flight photography much more accessible. That said, even a decent phone can capture the spectacle of thousands of birds in the sky.",
          "Don't push towards the flocks on the fields. They'll flush, which stresses the birds and ruins the experience for other observers. The sea wall gives you everything you need.",
        ],
      },
    ],
    practicalTips: [
      "Arrive before dawn for morning flighting — the spectacle starts at first light",
      "Evening flighting: be in position an hour before dusk",
      "Dress warmly — the sea wall is exposed and you may be standing still for a while",
      "Bring a scope if you have one — useful for picking through the flocks",
      "Peak viewing: late October to late November",
      "Postcode for Marshside: PR9 9PH",
    ],
    relatedLinks: [
      { href: "/nature/marshside-rspb", label: "Marshside RSPB guide" },
      { href: "/birds/pink-footed-goose", label: "Pink-footed Goose species page" },
      { href: "/seasonal/winter-wildfowl", label: "Winter wildfowl guide" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

  "wader-migration": {
    title: "Wader Migration on the Sefton Coast",
    period: "Spring (April–May) & Autumn (July–October)",
    metaDescription:
      "Wader migration on the Sefton Coast — when to go, what you'll see and how to identify the key species passing through Marshside RSPB each spring and autumn.",
    heroWikipediaTitle: "Dunlin",
    heroAlt: "Dunlin — one of the most numerous waders on the Sefton Coast",
    intro:
      "The Sefton Coast sits on one of the main wader migration routes along the west coast of Britain. In spring and autumn, the managed scrapes at Marshside and Hesketh Out Marsh fill with birds that have flown extraordinary distances — some heading to the Arctic to breed, others returning from it. Dunlin, Knot, Bar-tailed Godwit, Little Stint, Curlew Sandpiper. On a good autumn morning, the list can be remarkable.",
    sections: [
      {
        heading: "Spring passage (April – May)",
        body: [
          "Spring wader passage on the Sefton Coast is less dramatic than autumn but can produce good birds. Dunlin in breeding plumage arrive in April — the black belly patch and rusty back are a dramatic change from the grey winter birds. Ringed Plovers pass through in numbers. Whimbrel appear in late April and May, usually on the saltmarsh.",
          "The rarer spring waders require some luck — Temminck's Stint, Broad-billed Sandpiper and Dotterel have all been recorded. Black-tailed Godwit numbers peak in late April.",
        ],
      },
      {
        heading: "Autumn passage (July – October)",
        body: [
          "Autumn passage is when Marshside is at its wader best. Failed breeders start returning in late June and numbers build rapidly through July. By August the scrapes can have impressive counts: 500+ Dunlin is not unusual, with smaller numbers of Ringed Plover, Ruff, Knot and the more sought-after species.",
          "Late August into September is prime time for scarcer waders. Little Stint and Curlew Sandpiper both appear regularly in good autumns — watch for them among the Dunlin flocks on the scrape edges. A Curlew Sandpiper in fresh plumage, all brick-red above, is one of the better-looking waders you'll see on the coast.",
          "Greenshank, Green Sandpiper and Common Sandpiper pass through from July. Black-tailed Godwit can arrive in large numbers in August — flocks of several hundred are regular. The odd Spotted Redshank or Marsh Sandpiper is possible.",
        ],
      },
      {
        heading: "Key species to look for",
        body: [
          "Dunlin — by far the most numerous wader, present almost year-round but peak passage July–October. Learn this one first — everything else is easier once you know your baseline.",
          "Curlew Sandpiper — similar size to Dunlin but with a longer, drooped bill and white rump in flight. Fresh autumn adults are unmistakable in reddish-brown plumage.",
          "Little Stint — tiny, shorter-billed than Dunlin. Juveniles in August–September are neat, scaly-backed birds. Usually a few per good autumn day.",
          "Ruff — variable in size and plumage. The breeding-plumage males in May are extraordinary; autumn birds are plainer. Often with Black-tailed Godwit on the saltmarsh.",
          "Spotted Redshank — slightly larger than Common Redshank, longer bill, more elegant. Breeding birds are almost entirely black. Usually in small numbers.",
        ],
      },
      {
        heading: "Viewing tips",
        body: [
          "The main hide at Marshside looks directly over the managed scrape — this is where most of the passage waders concentrate. Visit early morning for best light and least disturbance.",
          "High tide pushes waders off the estuary mudflats and onto the scrapes — check tide times before you go. The two hours either side of high tide are usually the best.",
          "Hesketh Out Marsh, a short drive north of Marshside, holds good wader numbers in autumn and is often quieter. Worth including on a wader day.",
        ],
      },
    ],
    practicalTips: [
      "Check the tide — high tide concentrates waders on the scrapes",
      "Best times: early morning for light and quiet",
      "Peak autumn passage: mid-August to mid-September",
      "Bring a scope — distant wader identification requires magnification",
      "The Collins Bird Guide wader plates are worth studying before you go",
      "Marshside postcode: PR9 9PH · Hesketh Out Marsh: PR9 8DS",
    ],
    relatedLinks: [
      { href: "/nature/marshside-rspb", label: "Marshside RSPB guide" },
      { href: "/birds/dunlin", label: "Dunlin species page" },
      { href: "/birds/curlew-sandpiper", label: "Curlew Sandpiper species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

  "breeding-birds": {
    title: "Breeding Birds of the Sefton Coast",
    period: "April – July",
    metaDescription:
      "Breeding birds on the Sefton Coast — Avocets at Marshside, Little Terns at Ainsdale, and what to look and listen for from April through July.",
    heroWikipediaTitle: "Little tern",
    heroAlt: "Little Tern — one of England's rarest breeding seabirds, nesting at Ainsdale",
    intro:
      "Spring and summer bring a different Sefton Coast. The winter geese have gone back to Iceland, but in their place come breeding Avocets on the Marshside scrapes, Little Terns on the Ainsdale beach, Sedge Warblers in the reedbed edge and Skylarks above the dunes. It's less dramatic than October geese but it requires more attention — and some of the breeding species here are genuinely rare.",
    sections: [
      {
        heading: "Avocets at Marshside",
        body: [
          "Avocets began breeding at Marshside in the early 2000s as the RSPB managed the scrapes specifically for them. The colony now holds 15–25 pairs in most years. They arrive in March and eggs are usually laid by late April. Chicks hatch in May and the adults are ferociously defensive of the colony through June.",
          "The sweeping, upturned bill and pied plumage make Avocets unmistakable. Watch them feeding in the shallows — the characteristic side-to-side sweep of the bill through the water. They were extinct as a British breeding bird for over a century before returning to the east coast in 1947. Their presence at Marshside is a direct result of managed habitat.",
        ],
      },
      {
        heading: "Little Terns at Ainsdale",
        body: [
          "The Little Tern colony at Ainsdale is one of the most important in England — typically 80–120 pairs in a good year. Little Terns arrive from West Africa in late April and begin nesting on the open beach in May. The nests are just scrapes in the sand, barely visible.",
          "RSPB wardens manage the colony through the breeding season — electric fences keep foxes out, and volunteers help monitor nest success and discourage disturbance. Do not enter the fenced area. The birds have flown 4,000 miles to nest here.",
          "Watch from the dune edge. The terns are constantly active — small, fast, with a distinctive hovering before plunge-diving. Their call is a sharp, persistent 'kik-kik'.",
        ],
      },
      {
        heading: "Marshside in spring",
        body: [
          "Alongside the Avocets, Marshside holds breeding Lapwing, Redshank and Yellow Wagtail. Sedge Warblers arrive in April and can be heard from the hide — a rapid, scratchy, energetic song from the reedbed edge. Reed Buntings breed in the taller vegetation.",
          "Marsh Harriers are now regular over the reserve from April — usually one or two birds hunting the marsh edges. They have bred close by in recent years.",
          "The peak for seeing the most species simultaneously is late May — early June. Breeding activity is at its height, summer migrants have arrived, and the scrapes still hold a few late-passage waders.",
        ],
      },
      {
        heading: "Woodland and dune species",
        body: [
          "The Formby pinewoods hold Goldcrest, Treecreeper, Coal Tit and occasional Crossbill. Woodcock rods at dusk in April and May — walk the woodland edge at last light. Spotted Flycatcher arrives in May and breeds in the older pinewood sections.",
          "Stonechats are resident on the scrub edge at Ainsdale. Linnets and Yellowhammers breed in the dune scrub — both have declined nationally and the Sefton Coast remains a relative stronghold for both.",
        ],
      },
    ],
    practicalTips: [
      "Visit Marshside in May to see Avocets with chicks",
      "Little Tern colony at Ainsdale: respect the wardened area, view from the dune edge",
      "Dawn and dusk are best for breeding activity — less foot traffic and more song",
      "Keep dogs on leads near nesting areas — a dog flushing a tern nest can destroy it",
      "Sedge Warblers at Marshside: listen for the fast, scratchy song from the reedbed edge",
      "April–early July is the season — after mid-July breeding activity winds down quickly",
    ],
    relatedLinks: [
      { href: "/nature/marshside-rspb", label: "Marshside RSPB guide" },
      { href: "/birds/avocet", label: "Avocet species page" },
      { href: "/birds/little-tern", label: "Little Tern species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

  "winter-wildfowl": {
    title: "Winter Wildfowl on the Sefton Coast",
    period: "November – February",
    metaDescription:
      "Winter wildfowl at Marshside RSPB — Teal, Wigeon, Shoveler, Pintail and Goldeneye on the lagoons from November through February.",
    heroWikipediaTitle: "Eurasian teal",
    heroAlt: "Eurasian Teal — a common winter wildfowl on the Marshside lagoons",
    intro:
      "While the Pink-footed Geese dominate the winter headlines at Marshside, the lagoons and scrapes hold a consistently good selection of wildfowl from November through February. Teal are usually present in the hundreds. Wigeon, Shoveler and Pintail are regular. Goldeneye and Smew turn up in cold weather. It's not showy in the same way as the goose flighting, but it rewards patience and a proper look.",
    sections: [
      {
        heading: "The regular species",
        body: [
          "Teal are the most numerous dabbling duck — typically 200–500 birds on the main lagoon from October. Small and fast in flight, they lift off suddenly and wheel in tight groups. The green eye-stripe and yellow undertail of the drake are good marks; females are brown and easily overlooked.",
          "Wigeon arrive in October and numbers peak November–January. The rusty-brown head and yellow forehead of the drake is distinctive. They often graze on the saltmarsh in large flocks — the whistling call is one of the characteristic sounds of a winter marsh.",
          "Shoveler — the spatulate bill identifies them at any distance. Usually a few dozen on the lagoon. They feed by sieving the water with the bill just submerged, moving slowly in circles.",
          "Pintail are among the most elegant ducks. Long tail feathers on the drake, a clean chocolate-brown head against a white neck stripe. Numbers at Marshside fluctuate — ten birds is typical, occasional larger flocks in cold weather.",
        ],
      },
      {
        heading: "Cold weather movement",
        body: [
          "Hard winters bring birds down from the north and east. Smew — small, striking sawbill ducks — turn up on the lagoons in freezing weather. The males are white with black markings ('cracked ice'), females are grey-brown with a rusty cap. Any cold snap is worth a visit.",
          "Goldeneye appear most winters in small numbers. Goosander are irregular but possible. Long-tailed Duck occasionally appears on the sea off Formby during easterly winds.",
        ],
      },
      {
        heading: "Diving ducks",
        body: [
          "Tufted Duck are year-round on the main lagoon, numbers increasing in winter. Pochard — the round-headed, red-eyed diving duck — can be present in reasonable numbers. Both species are easy to overlook but worth checking for the scarcer diving ducks mixed in.",
          "The lagoon at Marshside is shallow and the diving ducks tend to concentrate where the water is deepest — usually the central area visible from the main hide.",
        ],
      },
      {
        heading: "Going beyond the ducks",
        body: [
          "Winter mornings at Marshside are rarely just about wildfowl. The saltmarsh holds Water Rail — you'll hear them more than see them, a squealing call from the vegetation edge. Jack Snipe are present through winter but require specific conditions to see — muddy areas in low sun, and patience.",
          "Short-eared Owl hunts the marsh in winter, usually late afternoon. They're not guaranteed but a winter visit without scanning the marsh edge at dusk is a missed opportunity.",
        ],
      },
    ],
    practicalTips: [
      "Morning visits give the best light on the lagoon from the main hide",
      "Cold spells bring unusual species — worth visiting after a hard frost",
      "Wigeon can often be heard before you reach the hide — a whistling call from the marsh",
      "Check the saltmarsh edge carefully for Jack Snipe and Water Rail",
      "Late afternoon in January: scan for Short-eared Owl over the marsh",
      "Postcode: PR9 9PH · Free entry",
    ],
    relatedLinks: [
      { href: "/nature/marshside-rspb", label: "Marshside RSPB guide" },
      { href: "/birds/teal", label: "Teal species page" },
      { href: "/birds/wigeon", label: "Wigeon species page" },
      { href: "/seasonal/pink-footed-geese", label: "Pink-footed Geese guide" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },
};

/* ─── page component ─────────────────────────────────────── */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(seasonalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) return {};
  const url = `https://seftoncoastwildlife.co.uk/seasonal/${slug}`;
  return {
    title: `${page.title} — Sefton Coast Wildlife`,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} — Sefton Coast Wildlife`,
      description: page.metaDescription,
      url,
      siteName: "Sefton Coast Wildlife",
      type: "article",
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.metaDescription },
  };
}

export default async function SeasonalSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) notFound();

  const heroImage = await getWikipediaImage(page.heroWikipediaTitle);
  const url = `https://seftoncoastwildlife.co.uk/seasonal/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    url,
    author: {
      "@type": "Person",
      name: "Ed",
      description: "Ed has been walking the Sefton Coast since the 1980s. Retired geography teacher. Still gets up at five.",
      url: "https://seftoncoastwildlife.co.uk",
    },
    publisher: { "@type": "Organization", name: "Sefton Coast Wildlife", url: "https://seftoncoastwildlife.co.uk" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {heroImage && (
        <div className="relative h-72 md:h-96 w-full overflow-hidden bg-[var(--dune)]">
          <img src={heroImage.src} alt={page.heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs text-white/60">
              Image:{" "}
              <a href={heroImage.pageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">
                Wikimedia Commons
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-10">
        <nav className="text-sm text-[var(--slate)]/60 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[var(--marsh)] transition">Home</Link>
          <span>/</span>
          <Link href="/seasonal" className="hover:text-[var(--marsh)] transition">Seasonal guides</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">{page.title}</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--marsh)]">{page.period}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">{page.title}</h1>
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">{page.intro}</p>

        {page.sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="text-xl font-bold text-[var(--forest)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
          </div>
        ))}

        <div className="bg-[var(--dune)] rounded-xl p-5 mb-8">
          <h2 className="font-bold text-[var(--forest)] mb-3">Practical tips</h2>
          <ul className="space-y-1.5">
            {page.practicalTips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-[var(--slate)]">
                <span className="text-[var(--marsh)] flex-shrink-0">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          {page.relatedLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className="text-[var(--marsh)] font-medium hover:underline text-sm">
                {link.label} →
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="text-[var(--marsh)] font-medium hover:underline text-sm">
                {link.label} →
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
