export type BlogCategory =
  | "conservation"
  | "species-spotlight"
  | "seasonal-watching"
  | "habitat-guides"
  | "photography";

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  date: string; // ISO date string
  metaDescription: string;
  heroWikipediaTitle: string;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  tags: string[];
}

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  conservation: {
    label: "Conservation",
    description: "The issues, the work and the numbers — what's being done to protect the Sefton Coast.",
  },
  "species-spotlight": {
    label: "Species Spotlights",
    description: "A closer look at individual species — their ecology, behaviour and where to find them.",
  },
  "seasonal-watching": {
    label: "Seasonal Watching",
    description: "What to look for each month — migration, breeding, winter arrivals.",
  },
  "habitat-guides": {
    label: "Habitat Guides",
    description: "The dunes, marshes, pinewoods and beach — understanding what each habitat holds.",
  },
  photography: {
    label: "Wildlife Photography",
    description: "Practical tips for photographing birds and wildlife on the Sefton Coast.",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "natterjack-toad-sefton-coast",
    category: "conservation",
    categoryLabel: "Conservation",
    title: "The Natterjack Toad: Britain's Rarest Amphibian Is Doing Better Than It Was",
    date: "2026-02-10",
    metaDescription:
      "Natterjack Toads on the Sefton Coast — one of the last strongholds for Britain's rarest amphibian. How conservation management is helping the population recover.",
    heroWikipediaTitle: "Natterjack toad",
    heroAlt: "Natterjack Toad — Britain's rarest amphibian, found in the Sefton Coast dune slacks",
    intro:
      "The Natterjack Toad is Britain's rarest amphibian. It needs warm, shallow, temporary pools in open, sandy habitat — a combination that puts it squarely in conflict with the general direction of land use in England over the past century. The Sefton Coast is one of its last strongholds. Here's why that matters, and what's being done to keep it that way.",
    sections: [
      {
        heading: "Why Natterjacks need dune slacks",
        body: [
          "Dune slacks are the shallow, wet hollows between dune ridges that flood in winter and dry out in summer. The water temperature in these pools rises rapidly in spring sunshine, which is exactly what Natterjack spawn needs. Common Toad and Common Frog prefer cooler, deeper water — the dune slack is a niche that Natterjacks have evolved to exploit with very little competition.",
          "The problem is that dune slacks are rare and getting rarer. Coastal development, stabilisation of dune systems and reduced grazing all reduce the extent and quality of slack habitat. On the Sefton Coast, active management — scrub removal, cattle grazing, and in some cases the creation of new shallow pools — is specifically aimed at maintaining the conditions Natterjacks need.",
        ],
      },
      {
        heading: "The Sefton population",
        body: [
          "The Sefton Coast holds one of the largest Natterjack populations in England, centred on the dune slacks at Ainsdale NNR and the surrounding managed areas. Population estimates fluctuate considerably year to year depending on weather — a cold, wet spring can reduce breeding success dramatically.",
          "Egg-string counts in the breeding pools give a rough index of breeding adults. In good years, counts run into the hundreds at Ainsdale. Natural England manages the NNR specifically to maintain and improve Natterjack habitat.",
        ],
      },
      {
        heading: "Egg-string translocation",
        body: [
          "Where Natterjack populations have been lost from suitable habitat, translocation of egg-strings from donor populations has been used to re-establish them. The Sefton Coast has acted as a donor site for reintroductions elsewhere in England. This is careful, permit-controlled work — you cannot collect spawn without a Natural England licence.",
          "On-site translocation — moving egg-strings between pools within the Ainsdale system — has also been used to supplement struggling sub-populations. It requires monitoring the receiving pools post-translocation to assess success.",
        ],
      },
      {
        heading: "How to see them",
        body: [
          "Natterjack Toads are easiest to find in the breeding season — late April through June, on warm evenings after dark. The males call from the margins of breeding pools, producing a loud, dry churring that carries a remarkable distance. In good conditions, the calling from a Natterjack colony at Ainsdale on a warm May night is audible from 300 metres or more.",
          "Night visits to Ainsdale NNR during the calling season are sometimes organised by Natural England — check their events programme. Do not visit the most sensitive pool areas without guidance.",
        ],
      },
      {
        heading: "The bigger picture",
        body: [
          "The Natterjack story on the Sefton Coast is, carefully, a positive one. The population is relatively stable, the habitat is managed, and the site contributes to national conservation work. That positive outcome is not an accident — it's the result of decades of active management, monitoring and advocacy.",
          "The lesson, as usual with conservation on the Sefton Coast, is that nothing maintains itself. The moment the management stops, scrub moves in, pools deepen and shade over, and the conditions that make Natterjack survival possible disappear within a few years.",
        ],
      },
    ],
    tags: ["Natterjack Toad", "amphibians", "Ainsdale NNR", "dune slacks", "conservation"],
  },
  {
    slug: "short-eared-owl-marshside",
    category: "species-spotlight",
    categoryLabel: "Species Spotlights",
    title: "Short-eared Owl at Marshside — A Winter Visitor Worth Waiting For",
    date: "2026-01-20",
    metaDescription:
      "Short-eared Owls at Marshside RSPB — when to look, where to look, and what to expect from one of the Sefton Coast's most sought-after winter visitors.",
    heroWikipediaTitle: "Short-eared owl",
    heroAlt: "Short-eared Owl in flight — a winter visitor to the Sefton Coast marshes",
    intro:
      "Short-eared Owls are not guaranteed at Marshside. Some winters you'll see three in an afternoon; some years they're barely present at all. That unpredictability is part of what makes finding one feel like a proper reward. Here's what you need to know to give yourself the best chance.",
    sections: [
      {
        heading: "When they're present",
        body: [
          "Short-eared Owls arrive from Scandinavia and northern Britain from October onwards, numbers dependent on vole cycles in their breeding areas. In good vole years, significant numbers come south; in poor years, very few. The Sefton Coast marshes provide winter hunting grounds for birds that settle in the area from October through to March.",
          "Not every winter produces good numbers. The best bet is to check local birding reports (Lancashire Bird Club) before making a dedicated visit. When birds are present, they're usually reliable.",
        ],
      },
      {
        heading: "Where to look",
        body: [
          "The saltmarsh and rough grassland at Marshside RSPB is the key area. Birds hunt low over the marsh, often in late afternoon when they become more active before dusk. The sea wall footpath gives a good viewpoint over the hunting ground.",
          "Hesketh Out Marsh, to the north, is also worth checking. Short-eared Owls are nomadic and will range across several kilometres of suitable habitat. On good winter days, two or three birds may be visible simultaneously over the marsh.",
        ],
      },
      {
        heading: "Identification",
        body: [
          "Short-eared Owls are distinctive in flight — buoyant, floppy wingbeats, often described as moth-like. The yellow eyes and dark carpal patches on the underwing are good marks. They frequently hover briefly before dropping onto prey.",
          "The 'short ears' are tufts on the crown, rarely visible in the field. The name is misleading but embedded now. In direct comparison with Barn Owl — which also quarters the Marshside area occasionally — the Short-eared looks browner and more streaked, with a rounder face.",
        ],
      },
      {
        heading: "Getting the best views",
        body: [
          "Late afternoon is the time. Short-eared Owls are most active in the two hours before dark. Position yourself on the sea wall with the marsh in front of you and the light behind. In January, this means being in position by 3pm at the latest.",
          "They can come close. Birds hunting along the marsh edge will sometimes quarter to within 20 metres of the path. Keep still, move slowly, and don't wave arms or make sudden movements — the usual advice, but worth repeating.",
          "A scope is useful for picking birds up at distance over the marsh. Once located, binoculars give a better view of a hunting bird.",
        ],
      },
    ],
    tags: ["Short-eared Owl", "winter visitors", "Marshside", "raptors", "owls"],
  },
  {
    slug: "october-at-marshside",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "October at Marshside — The Month Everything Arrives",
    date: "2025-10-05",
    metaDescription:
      "October birdwatching at Marshside RSPB — Pink-footed Geese arriving, wader passage wrapping up and the first winter wildfowl. What to expect and when to go.",
    heroWikipediaTitle: "Pink-footed goose",
    heroAlt: "Pink-footed Geese — arriving at Marshside from Iceland in October",
    intro:
      "October is the month I look forward to most. The summer is over, the Little Terns have left for West Africa, and something changes in the air. By the second week of October, the first skeins of Pink-footed Geese are arriving from Iceland and the winter is beginning. There is no better month to be at Marshside.",
    sections: [
      {
        heading: "The first geese",
        body: [
          "The first Pink-footed Geese usually appear in the second week of September, in small groups. By early October numbers are building and by mid-October the estuary holds tens of thousands. The peak is typically late October to November, but October is when the excitement builds — you're watching the arrival happen.",
          "Go at dawn on a clear October morning. Stand on the sea wall and listen. The geese come off the estuary in long skeins, calling constantly, heading for the fields. The noise is extraordinary for something you have to stand quite still to hear coming.",
        ],
      },
      {
        heading: "Wader passage winding down",
        body: [
          "Autumn wader passage peaks in August–September, but October still produces birds. Curlew Sandpiper and Little Stint numbers drop off, but the scrapes at Marshside still hold good numbers of Dunlin, Ringed Plover and the later passage species — Ruff, Jack Snipe and the first Snipe of autumn.",
          "October is one of the better months for scarcer waders — Pectoral Sandpiper, Long-billed Dowitcher and Buff-breasted Sandpiper have all been found at Marshside in October. Check the scrapes carefully.",
        ],
      },
      {
        heading: "Winter wildfowl arriving",
        body: [
          "Teal numbers build through October, with the British breeding birds supplemented by arrivals from the continent. Wigeon, Shoveler and Pintail all increase. By late October the lagoon composition is shifting decisively from autumn to winter character.",
          "The first Goldeneye of autumn can appear in late October. Check the deeper parts of the lagoon.",
        ],
      },
      {
        heading: "Other October highlights",
        body: [
          "Marsh Harriers are still regular in October before most move south. Merlin — small, fast falcons — arrive from the uplands and can be seen hunting the saltmarsh edge. Peregrine is regular year-round but October often produces spectacular hunting attempts on the goose flocks.",
          "Stonechat is a conspicuous bird of October — newly arrived birds from the north perch on fence posts and bramble tops along the sea wall path. Goldfinch flocks work the seeding thistles and ragwort.",
        ],
      },
      {
        heading: "A practical note",
        body: [
          "October weekends at Marshside get busy when word gets out that the geese have arrived in numbers. Weekday mornings are quieter. The car park on Marshside Road is small — if it's full, park up the road and walk down.",
          "Bring layers. October weather on the sea wall is variable. The wind off the estuary is cold on clear days and the hides provide some shelter but you'll be outside for most of the time.",
        ],
      },
    ],
    tags: ["October", "Pink-footed Geese", "autumn", "Marshside", "waders", "wildfowl"],
  },
  {
    slug: "understanding-sand-dunes",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "Understanding the Sand Dunes — Why the Sefton Dune System Matters",
    date: "2025-11-15",
    metaDescription:
      "The Sefton Coast sand dune system — how it formed, why it's changing, and what lives in the different dune zones from mobile yellow dunes to wet slacks.",
    heroWikipediaTitle: "Marram grass",
    heroAlt: "Marram grass stabilising the sand dunes of the Sefton Coast",
    intro:
      "The sand dune system on the Sefton Coast is one of the most extensive in England. It stretches nearly 20 miles from Crosby to Southport, averaging a kilometre wide. From the beach looking inland, it looks uniform — just sand and rough grass. It isn't. There are distinct zones, each with its own ecology, and some of the most unusual plant and animal communities in lowland England are hiding in the damper hollows.",
    sections: [
      {
        heading: "How dunes form",
        body: [
          "Sand dunes form where sand is blown inland from the beach and trapped by vegetation. On the Sefton Coast, the process has been running for several thousand years — the youngest, most mobile dunes are at the seaward edge; the oldest, most stable dunes are furthest inland.",
          "The key plant in dune formation is Marram Grass. It tolerates burial by sand and actually grows faster when covered — its roots bind the sand and its stems trap more. Without Marram, dune systems don't accumulate. With it, they can build to ten or fifteen metres in height.",
        ],
      },
      {
        heading: "The dune zones",
        body: [
          "Moving inland from the beach: the embryo dunes just above the high-tide mark are sparsely colonised by Sea Rocket and Prickly Saltwort. Behind them, the mobile yellow dunes — steep, unstable, dominated by Marram — are where the system is still building.",
          "Further back, the fixed grey dunes are older and more stable. The Marram gives way to a richer plant community — Restharrow, Lady's Bedstraw, Sand Sedge, Hare's-foot Clover. These are the botanically interesting dunes and they hold most of the dune-specialist invertebrates.",
          "In the hollows between ridges — the dune slacks — the water table reaches the surface in winter. These are the wettest part of the system and they hold some of the rarest species: Grass of Parnassus, Round-leaved Wintergreen, Marsh Helleborine, and the Natterjack Toad.",
        ],
      },
      {
        heading: "Why the system is changing",
        body: [
          "Two things are changing the dunes. At the seaward edge, erosion is taking the front face of the dunes back by a metre or more a year in some places. This is partly natural process, partly accelerated by sea level rise and changing wave patterns.",
          "At the landward edge, the problem is different. Without disturbance, scrub — Sea Buckthorn and Creeping Willow in particular — invades the grey dunes and slacks and shades out the specialist plants. The fixed dunes are becoming scrub woodland in some sections, losing their open character and the species that depend on it.",
          "Active management — scrub removal, cattle grazing, occasional heavy machinery — is required to maintain the open dune habitats. It's expensive, ongoing and unglamorous. The alternative is losing the habitat entirely.",
        ],
      },
      {
        heading: "What to look for when you visit",
        body: [
          "The botanically best areas are the fixed grey dunes and the wet slacks. Ainsdale NNR is the best site — Natural England runs guided walks in summer that are worth booking for their plant-identification value.",
          "For invertebrates, the fixed dunes on sunny days in summer produce impressive diversity — look for mining bees and solitary wasps in bare sand patches, and several nationally scarce beetle species have been recorded in the dunes here.",
          "Don't walk on the mobile dunes unnecessarily. Marram breaks under foot traffic and once the surface is broken, erosion accelerates. The paths exist for a reason.",
        ],
      },
    ],
    tags: ["sand dunes", "Ainsdale NNR", "habitats", "plants", "Natterjack Toad", "dune slacks"],
  },
  {
    slug: "photographing-waders-marshside",
    category: "photography",
    categoryLabel: "Wildlife Photography",
    title: "Photographing Waders at Marshside — Practical Tips for Better Results",
    date: "2026-01-08",
    metaDescription:
      "How to photograph waders at Marshside RSPB — camera settings, the best hides, timing, light direction and how to avoid the most common mistakes.",
    heroWikipediaTitle: "Black-tailed godwit",
    heroAlt: "Black-tailed Godwit — a regularly photographed wader at Marshside RSPB",
    intro:
      "Marshside RSPB is one of the more accessible sites for photographing waders in the North West. The hides are close to the scrapes, the birds are relatively undisturbed, and the range of species through autumn and winter gives you something to work with even when the star species aren't performing. Here's how to get better results.",
    sections: [
      {
        heading: "Light direction and timing",
        body: [
          "The main hide at Marshside faces south-west. This means morning light is behind you and slightly to one side — the best situation for photography. Afternoon sun comes straight into the hide and into the lens. Go in the morning. If you can only go in the afternoon, the evening flighting of Pink-footed Geese can still produce good silhouette images with the right exposure.",
          "Overcast conditions are underrated for wader photography. The soft, diffuse light reduces harsh shadows and makes plumage detail easier to capture. The brick-red breeding plumage of a Curlew Sandpiper in September is actually better in flat light than direct sun.",
        ],
      },
      {
        heading: "Camera settings for waders",
        body: [
          "Shutter speed is the priority. For stationary waders, 1/800 sec is adequate; for birds in flight or actively feeding, go to 1/2000 sec or faster. Use shutter priority (Tv/S) if you're not comfortable in manual.",
          "ISO: on modern mirrorless and DSLR bodies, ISO 800–3200 is perfectly usable. Don't sacrifice shutter speed for a lower ISO. A sharp image at ISO 1600 is worth much more than a blurred one at ISO 400.",
          "Autofocus: most modern bodies have reliable subject-tracking. Set it up before you arrive at the hide so you're not adjusting in the moment. Eye-detection AF works well on waders if your body supports it.",
        ],
      },
      {
        heading: "Gear — what you actually need",
        body: [
          "A 400mm lens is a practical minimum for frame-filling shots from the hide. 500mm or 600mm gives more working room. The telephoto zoom lenses — 100-500mm, 200-600mm — that most manufacturers now offer are genuinely good and substantially cheaper than the white telephoto primes.",
          "A bean bag is worth bringing. The hide windows have a ledge but it's not always at the right height. A bean bag lets you rest the lens at the right angle without camera shake.",
          "You don't need a full-frame body. APS-C sensors give you an effective crop factor that extends your reach — a 400mm lens becomes equivalent to 600mm on APS-C. For wader photography specifically, this is a practical advantage.",
        ],
      },
      {
        heading: "Composition and patience",
        body: [
          "The best wader shots are often the result of positioning and waiting rather than reaction. If a Curlew Sandpiper is working a particular edge of the scrape, get the camera pointed at the clean water area in front of it and wait for it to walk into frame. Don't chase the bird with the lens — you'll get camera shake and disturb other photographers.",
          "Background matters more than most beginners expect. An uncluttered water background makes a wader portrait work; a background of muddy reeds and litter doesn't. Before shooting, check what's behind your subject and adjust your position if you can.",
          "The hides at Marshside fill up on busy autumn weekends. Weekday mornings give you more space and less noise. The birds are also typically calmer when the hide is quieter.",
        ],
      },
    ],
    tags: ["photography", "waders", "Marshside", "camera settings", "Black-tailed Godwit"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
