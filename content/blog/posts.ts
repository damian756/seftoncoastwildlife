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
  heroWikipediaTitle?: string;
  heroLocalSrc?: string; // overrides Wikipedia fetch when set
  heroAlt: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
    imageAfter?: { src: string; alt: string; caption: string; objectPosition?: string };
  }[];
  tags: string[];
  relatedLinks?: { label: string; href: string; description: string }[];
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
    slug: "march-sefton-coast-wildlife",
    category: "seasonal-watching",
    categoryLabel: "Seasonal Watching",
    title: "What to See on the Sefton Coast in March",
    date: "2026-03-12",
    metaDescription:
      "March on the Sefton Coast — Pink-footed Geese building up to leave, Avocets arriving, Brown Hares boxing, and the first signs of spring in the dune system. What to look for and where to go.",
    heroLocalSrc: "/images/blog/march-sefton-coast-wildlife.jpg",
    heroAlt: "Pink-footed goose in flight over Sefton Coast marshland at dusk",
    intro:
      "March is a transition month on the Sefton Coast. Winter's not done — you'll still be cold, you'll still want waterproofs — but things are moving. The Pink-footed Geese are starting to thin out. The Avocets are back at Marshside. In the farmland behind the sea wall, Brown Hares are boxing in the early morning fields. And in the dune slack ponds, Common Frogs have been spawning since February. Worth going out for all of it.",
    sections: [
      {
        heading: "Pink-footed Geese — catch them before they go",
        body: [
          "The Pink-footed Geese have been roosting at Marshside RSPB since October. By late March, numbers start to fall. The birds are building condition for the migration back to Iceland and Greenland, and the skeins thin out week by week. You can still get 10,000–20,000 at the dusk roost in early March — later in the month it drops off quickly.",
          "Go to the Marshside car park 30 minutes before sunset on a clear evening. The birds come in from the south and west, off the farmland fields where they've been feeding all day. Bring a flask. It's still cold. The noise as the first skeins arrive is something you don't forget.",
          "If you've never seen the Marshside roost, March is your last chance until October. Don't leave it too late in the month.",
        ],
        imageAfter: {
          src: "/images/blog/march-sefton-coast-wildlife.jpg",
          alt: "Pink-footed goose in flight over Sefton Coast marshland at dusk",
          caption: "Pink-footed Geese return to Iceland in March–April — catch the Marshside roost in early March before numbers drop",
        },
      },
      {
        heading: "Avocets back at Marshside",
        body: [
          "Avocets start returning to Marshside RSPB from late February into March. They breed on the scrape — the shallower lagoon area visible from the road — and by April the site can hold 30–40 pairs. In March you'll see early arrivals prospecting.",
          "Avocets are one of conservation's genuine success stories. They were extinct as a British breeding bird by 1840, then recolonised naturally in the 1940s and have been expanding since. Marshside is one of the northern strongholds. Visible from the road or the short walk along the sea wall — you don't need to go far.",
          "Teal, Gadwall, Shoveler and Goldeneye are all still on the lagoons in early March. Winter wildfowl numbers start dropping through the month as birds return to breeding grounds. If you want to compare them all in one visit, early March is the best time.",
        ],
      },
      {
        heading: "Brown Hares boxing in the farmland",
        body: [
          "The 'mad March hares' behaviour is real and it peaks in March. Drive slowly along the lanes around Banks and Hesketh Bank at dawn. The farmland fields behind the sea wall hold a reasonable Brown Hare population and in early spring the fields are bare enough to see across them properly.",
          "What you're watching when you see hares boxing is usually a female knocking back an unwanted male. It's not males fighting each other — it's the doe making her preferences clear. Sometimes energetically. It can go on for a sustained time and both animals get some height off the ground.",
          "They're easiest to spot at first light on a still morning when the air is clear. If you see one running fast in the open, stay still — they often stop, sit up and look around before moving on.",
        ],
      },
      {
        heading: "First signs in the dune system",
        body: [
          "Common Frogs have been breeding since late February in the dune slack ponds at Ainsdale. By early March the spawn masses are visible — floating clusters of black-dotted jelly at the pond surface. The ponds themselves are worth spending time at in March because they also show up the first pond insects of the year.",
          "Natterjack Toads are still quiet in early March — they start calling on warm evenings from late March into April. A mild spell at the end of March can trigger the first chorus at Ainsdale NNR. If it's above 10°C on a still evening after dark, it's worth checking.",
          "Sand Lizards begin emerging from hibernation on south-facing dune slopes from mid-March onwards when there's sun. The males are brown at this stage — they won't colour up to vivid green until April and May. A south-facing sandy slope on a warm morning at Ainsdale NNR is the place to look. Move slowly.",
        ],
      },
      {
        heading: "Wader movement beginning",
        body: [
          "Wader migration on the Sefton Coast picks up from mid-March. Ringed Plovers start moving through and early Sanderling can appear on the beach in the second half of the month. The beach at low tide is worth scanning systematically — most people walk past good waders without noticing them.",
          "Redshank are present year-round and March is a good time to look properly at the waders on Marshside as the winter visitors are still present alongside early migrants. By April the scrape is busy; March is the quieter lead-up.",
          "Oystercatchers are loud and obvious throughout the month. Their piping calls at low tide are one of the defining sounds of the coast in early spring.",
        ],
      },
      {
        heading: "Where to go this month",
        body: [
          "Marshside RSPB (Southport end): Pink-footed Goose roost in early March, Avocets arriving, winter wildfowl still on the lagoons. The car park off Marshside Road is free. An hour at dusk on a clear day is worth it.",
          "Ainsdale NNR: Common Frog spawn in the dune slack ponds, early Sand Lizard if the weather is kind, Brown Hares on the dune grassland edge. Walk out from the car park on Shore Road.",
          "Hesketh Bank farmland: Brown Hare and Pink-footed Goose feeding during the day. Drive the lanes slowly at first light.",
          "Formby Beach: Low-tide wader watching along the tideline. Sanderling and Ringed Plover from mid-March. Worth combining with a walk through the pinewoods — Roe Deer are occasionally visible at the woodland edge at dawn.",
        ],
      },
    ],
    tags: [
      "March",
      "seasonal watching",
      "Pink-footed Goose",
      "Avocet",
      "Brown Hare",
      "Common Frog",
      "Sand Lizard",
      "Natterjack Toad",
      "Marshside RSPB",
      "Ainsdale NNR",
      "Sefton Coast",
      "spring migration",
    ],
    relatedLinks: [
      { label: "Pink-footed Goose", href: "/birds/pink-footed-goose", description: "The Marshside roost — up to 40,000 birds. October to April." },
      { label: "Avocet", href: "/birds/avocet", description: "Returning from late February. Breeds on the Marshside scrape." },
      { label: "Brown Hare", href: "/mammals/brown-hare", description: "Boxing behaviour peaks in March. Farmland behind the sea wall." },
      { label: "Common Frog", href: "/mammals/common-frog", description: "Spawn masses in dune slack ponds from late February." },
      { label: "Sand Lizard", href: "/mammals/sand-lizard", description: "First emergence mid-March on south-facing dune slopes at Ainsdale." },
      { label: "Natterjack Toad", href: "/mammals/natterjack-toad", description: "First calling late March on warm evenings at Ainsdale NNR." },
      { label: "Teal", href: "/birds/teal", description: "Winter visitor, still present in early March on Marshside lagoons." },
      { label: "Goldeneye", href: "/birds/goldeneye", description: "Winter wildfowl leaving in March. Worth catching before they go." },
      { label: "Sanderling", href: "/birds/sanderling", description: "First spring migrants arriving on Formby Beach from mid-March." },
      { label: "Redshank", href: "/birds/redshank", description: "Year-round on the Sefton Coast. Active and obvious in March." },
      { label: "Roe Deer", href: "/mammals/roe-deer", description: "Present in Formby pinewoods. Dawn walks in March occasionally produce sightings." },
      { label: "Otter", href: "/mammals/otter", description: "Low density but present in drainage channels. Dawn is the best chance." },
    ],
  },
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
    heroWikipediaTitle: "Ribble Estuary",
    heroAlt: "Ribble Estuary — the marshes and mudflats where Short-eared Owls hunt in winter",
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
    heroWikipediaTitle: "Brent goose",
    heroAlt: "Brent Geese flock in flight — the kind of spectacle October brings to the Sefton Coast",
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
    heroWikipediaTitle: "Ammophila arenaria",
    heroAlt: "Marram grass (Ammophila arenaria) stabilising the sand dunes of the Sefton Coast",
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
    heroWikipediaTitle: "Calidris canutus",
    heroLocalSrc: "/images/reserves/marshside/nels-hide-camera.jpg",
    heroAlt: "Camera on the window ledge of Nel's Hide at Marshside RSPB, pointed at the flooded scrape — clouds reflected in still water",
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
  {
    slug: "nels-hide-marshside-guide",
    category: "photography",
    categoryLabel: "Wildlife Photography",
    title: "What It's Actually Like Inside Nel's Hide at Marshside RSPB",
    date: "2026-03-02",
    metaDescription:
      "A practical guide to Nel's Hide at Marshside RSPB — what's inside, how to set up, when to arrive, what to bring, and whether it's worth visiting in winter.",
    heroWikipediaTitle: "Ribble Estuary",
    heroLocalSrc: "/images/reserves/marshside/nels-hide-lifestyle.jpg",
    heroAlt: "Inside Nel's Hide at Marshside RSPB — birdwatcher with flask, mugs and sandwiches photographing through the window with a telephoto lens",
    intro:
      "Search 'RSPB Marshside hides' and you'll find almost nothing useful. The RSPB website tells you the hide exists. Nobody tells you what it's actually like, how to set up, whether it's worth going in January, or what you'll find when you get there. This is that post.",
    sections: [
      {
        heading: "The hide itself",
        body: [
          "Nel's Hide is the main enclosed hide — a raised, corrugated metal structure with a decking approach, a wooden open-sided viewing enclosure to one side, and a proper enclosed room with opening windows facing the flooded scrape. It's functional rather than glamorous but it does the job: wind protection, a counter shelf for scopes and bean bags, and a row of blue plastic chairs.",
          "The hide opens at 8:30am and closes at 4pm. The car park is locked at closing time so don't push it. Guide dogs only inside the hide itself — if your dog is coming, the open wooden viewing platform adjacent to the hide is the place. No smoking in the hide.",
        ],
      },
      {
        heading: "When to arrive",
        body: [
          "Morning. Nel's Hide faces roughly east, which means morning light is behind you and working in your favour — the birds on the scrape are well lit and the water surface isn't glaring. By midday the light flattens out; by afternoon on bright days you're shooting into the sun.",
          "In winter, arriving at 8:30am means you're there for the birds feeding in the first hours of daylight. Pink-footed Geese come off roost on the estuary and move to the fields — you'll hear them overhead. The scrape at that hour often holds waders close in before the disturbance builds.",
        ],
      },
      {
        heading: "Setting up in the hide",
        body: [
          "The counter shelf running below the windows is solid — adequate for a long lens on a bean bag. Bring your own bean bag if you're shooting with anything over 300mm; the ledge angle isn't always right for tripod heads without some shimming.",
          "Check the left corner of the scrape immediately on arrival. Waders consistently work that edge. If the scrape is busy with wildfowl, scan the margins first — the less conspicuous species (Jack Snipe, Ruff, Little Stint in season) tend to be tucked in at the edge rather than out in the open.",
        ],
      },
      {
        heading: "Bring your own food and drink",
        body: [
          "There is no café at Marshside. There's a toilet at the car park but no hot drinks, no food, no vending machine. A thermos is not optional in winter — the hide is unheated and you might be sitting still for two hours. The experience of watching a Short-eared Owl quarter the marsh with a mug of tea in hand is qualitatively different from doing it cold and hungry.",
          "The ledge in the hide is wide enough for a flask, two mugs and a sandwich. We've confirmed this empirically.",
        ],
      },
      {
        heading: "Is it worth visiting in winter?",
        body: [
          "Yes, absolutely. Winter is arguably the best season. The scrape holds Teal, Wigeon, Shoveler and Pintail in numbers, plus Snipe and Jack Snipe working the margins. The viewpoints along the path give you the Pink-footed Goose spectacle — 80,000+ birds on the estuary is not an exaggeration.",
          "Short-eared Owls quarter the saltmarsh in the late afternoon — not guaranteed, but good winters produce reliable sightings. Position yourself on the sea wall by 3pm. The car park closes at 4pm in winter so you need to be back at the car before then.",
        ],
      },
    ],
    tags: ["Nel's Hide", "hides", "Marshside", "photography", "winter birdwatching", "practical guide"],
  },
  {
    slug: "marshside-coastal-path-guide",
    category: "habitat-guides",
    categoryLabel: "Habitat Guides",
    title: "The Coastal Path at Marshside — The Bit Most People Miss",
    date: "2026-03-02",
    metaDescription:
      "The Marshside Saltmarsh coastal walk on Redshank Road — what to expect, dog rules, safety, and why it's a completely different experience from the reserve path.",
    heroWikipediaTitle: "Ribble Estuary",
    heroLocalSrc: "/images/reserves/marshside/hero-coastal-reflection.jpg",
    heroAlt: "The Marshside coastal path — sky reflected in a tidal pool, a dog walker silhouetted against blue sky and saltmarsh",
    intro:
      "Most people who visit Marshside RSPB stay on the reserve path — Nel's Hide, the viewpoints, the scrape. They miss the coastal walk entirely. The path on the other side of the sea wall, along Redshank Road on the Ribble Estuary edge, is a completely different experience: flat, exposed, tidal pools, saltmarsh and a very big sky. This is the bit worth knowing about.",
    sections: [
      {
        heading: "What it is",
        body: [
          "The Marshside Saltmarsh is part of the Ribble Estuary Special Protection Area — protected at the highest level because of the birds it holds. The coastal path runs along the top of the sea wall from the RSPB car park area, with the reserve and managed lagoons behind the wall on your left and the open saltmarsh and estuary on your right.",
          "It's free to access. There's no entrance fee, no booking system, no opening times — the coastal path is open at any reasonable hour. Park at the RSPB car park on Redshank Road and the coastal path starts from there.",
        ],
      },
      {
        heading: "What you'll find",
        body: [
          "Tidal pools, scattered shells, old timber half-buried in the estuary mud. After wet weather the pools on the upper saltmarsh are deep and clear — on bright days the sky reflects perfectly in them. Saltmarsh grass, sea purslane, and in winter the dominant colour is tawny yellow against grey sky.",
          "In winter: Pink-footed Geese in the fields beyond the wall, waders working the exposed mud at low tide, possibly Short-eared Owl quartering over the marsh edge. In spring: ground-nesting birds on the saltmarsh — the path is dog-zoned for this reason.",
        ],
      },
      {
        heading: "Dog rules — read this first",
        body: [
          "Dogs are allowed on the coastal path on leads. The signage is clear: keep to the track, keep the dog on the track, give feeding and resting birds space. The saltmarsh holds ground-nesting birds including Lapwing and Redshank from spring onwards.",
          "The path is genuinely good for dogs — tidal pools, open space, interesting smells. Just be realistic about leads. The reserve has 'guide dogs only' in Nel's Hide but the coastal path is a proper dog walk.",
        ],
      },
      {
        heading: "Safety — not optional reading",
        body: [
          "The Redshank Road sign is explicit: beware soft mud and beware creeks and incoming tides. This is tidal estuary terrain. Stay on the track. The mud off the path can be deep, unpredictable and fast to flood at high tide.",
          "In an emergency: grid reference SD 353204. Dial 999 and ask for the Coastguard. Tell them the grid reference. This is the information on the official sign for a reason.",
          "No drones or kites. No motorised vehicles. No fires or barbecues. No horses. The cockle beds are closed to fishing under NWIFCA Byelaw 3 — any removal of cockles from this beach is an offence.",
        ],
      },
      {
        heading: "When to go",
        body: [
          "Any season, any weather. Bright days in winter give the tidal pool reflections at their best — an absolutely still pool on a blue-sky day is worth the drive by itself. Grey days are fine too — the flat light suits the landscape.",
          "Time your visit around the car park hours: 8:30am–4pm in winter (1 November–1 March), 8:30am–5pm in summer (2 March–31 October). The car park is locked at closing time. Don't get caught out.",
        ],
      },
    ],
    tags: ["Marshside Saltmarsh", "coastal path", "dog walking", "Ribble Estuary", "saltmarsh", "habitat"],
  },
  {
    slug: "stan-and-peggy-scott-marshside",
    category: "conservation",
    categoryLabel: "Conservation",
    title: "Stan and Peggy Scott — The People Behind the Bench at Marshside",
    date: "2026-03-02",
    metaDescription:
      "The memorial bench on the Marshside RSPB reserve path commemorates Stan and Peggy Scott, Founder Members of North Cheshire Group RSPB 1976–1999. Who were they?",
    heroWikipediaTitle: "Ribble Estuary",
    heroLocalSrc: "/images/reserves/marshside/memorial-bench-plaque.jpg",
    heroAlt: "Close-up of the memorial plaque for Stan and Peggy Scott — Founder Members of North Cheshire Group RSPB 1976-1999, donated by family and friends",
    intro:
      "There's a wooden bench on the reserve path at Marshside with a small metal plaque screwed to it. In Memory of Stan and Peggy Scott — Founder Members of North Cheshire Group RSPB 1976–1999. Donated by Family and Friends. Most people walk past it. It's worth stopping for.",
    sections: [
      {
        heading: "Who were Stan and Peggy Scott?",
        body: [
          "Stan and Peggy Scott were founder members of the North Cheshire Group RSPB — a local group that ran from 1976 to 1999. Local RSPB groups in the 1970s and 1980s were the grassroots infrastructure of British birdwatching: the people who organised the walks, ran the surveys, did the membership drives, turned up to the parish council meetings to object to drainage proposals, and generally kept the conservation machine running at a local level.",
          "Being a founder member in 1976 means they were in at the start — building something from nothing in an era before the internet, before Bird Forum, before anyone could check a patch list on their phone. The group ran for 23 years. That's not a hobby; that's a vocation.",
        ],
      },
      {
        heading: "The bench",
        body: [
          "The bench sits on the reserve path with a view across the fields and marsh — a good spot. Not the most dramatic viewpoint on the path, but a solid place to sit and watch. On a clear day in autumn you can hear the Pink-footed Geese before you see them from that bench.",
          "The plaque is modest. It doesn't tell you what Stan and Peggy looked like, what birds they most liked to see, or why they gave 23 years of their lives to protecting this coastline. It just says they were here, they cared, and someone loved them enough to buy a bench.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Marshside RSPB exists because of people like Stan and Peggy Scott. The reserves on the Sefton Coast — the managed lagoons, the scrapes that hold 80,000 geese and breeding Avocets — are the product of decades of local advocacy, fundraising, and the unglamorous work of keeping conservation groups functioning year after year.",
          "The RSPB is a national charity with 1.2 million members. But its power at a local level has always depended on local groups, local knowledge, and local people who showed up consistently. The North Cheshire Group was one of those. Stan and Peggy Scott were part of building it.",
          "Next time you're at Marshside and the hide is quiet and the geese are coming in overhead, it's worth knowing that the reserve you're standing in was partly made possible by people whose names are now on a bench by the path.",
        ],
      },
    ],
    tags: ["RSPB", "conservation", "local history", "Marshside", "North Cheshire Group", "volunteer"],
  },

  // ── BEACHCOMBING SERIES ────────────────────────────────────────────────────

  {
    slug: "what-is-a-mermaids-purse",
    category: "species-spotlight",
    categoryLabel: "Species Spotlight",
    title: "What Is a Mermaid's Purse? Shark Egg Cases on the Sefton Coast",
    date: "2026-03-04",
    metaDescription:
      "Found a black leathery pouch with curly tendrils on a Sefton Coast beach? That's a mermaid's purse — the empty egg case of a small-spotted catshark. Here's what it is, where it comes from, and what to do with it.",
    heroLocalSrc: "/images/blog/beachcombing/mermaids-purse-held-hand-ainsdale.webp",
    heroAlt: "A mermaid's purse — small-spotted catshark egg case — held in a hand on Ainsdale Beach, Sefton Coast",
    intro:
      "Found a black leathery pouch with curly tendrils on a Sefton Coast beach? That's a mermaid's purse — and it once contained a shark. A small one, but a shark. Here's what it is, why it's here, and what you can do with it beyond putting it back down.",
    sections: [
      {
        heading: "What it actually is",
        body: [
          "A mermaid's purse is the egg case of a cartilaginous fish — usually a small-spotted catshark (Scyliorhinus canicula), which most people in the UK know by its older name, dogfish. They're common in the Irish Sea. They're not dangerous. At full size they're about 60–80cm long and live on the seabed.",
          "The leathery case — made from collagen fibres, structurally similar to fingernail — is produced by the female to protect a single fertilised egg. She deposits it on rocky or kelpy seabed, where the four curly tendrils at the corners anchor it in place. The embryo develops inside for nine to twelve months, nourished by a yolk sac. Once the pup hatches, the empty case detaches and drifts until it washes ashore.",
        ],
        imageAfter: {
          src: "/images/blog/beachcombing/mermaids-purse-held-hand-ainsdale.webp",
          alt: "Mermaid's purse — small-spotted catshark egg case — held in a hand on Ainsdale Beach",
          caption: "A freshly washed-in mermaid's purse on Ainsdale Beach. The curly tendrils anchored it to kelp on the seabed. The embryo chamber is visible when held to the light.",
          objectPosition: "center center",
        },
      },
      {
        heading: "Why they wash up on the Sefton Coast",
        body: [
          "The Irish Sea is one of the UK's more productive fishing grounds for small-spotted catshark. The species is not endangered — it's one of the most abundant elasmobranchs in UK waters. The Sefton Coast, with its exposed westerly aspect and significant tidal range, collects what the Irish Sea delivers, which is why beachcombers here find mermaid's purses year-round.",
          "Numbers peak after storms and high tides, when wave action scours the seabed. Early morning after an overnight high tide is the best time to look — the tide deposits them while you sleep and they haven't been disturbed yet. Winter is more productive than summer for exactly this reason.",
        ],
      },
      {
        heading: "How to identify it",
        body: [
          "Small-spotted catshark cases are roughly rectangular, dark brown to black, leathery but flexible. Size varies — typically 4–7cm across the body, with tendrils adding several centimetres. Fresh cases are flexible and slightly slippery. Older ones dry out, become brittle, and lighten in colour.",
          "Hold a fresh case up to bright light and you can often see the hollow embryo chamber, sometimes with the remains of the yolk sac. This is easiest with a torch or strong sunlight behind the case.",
          "You may also find skate and ray egg cases — these are larger, harder, and have pointed horns rather than curly tendrils. The starry ray and thornback ray both occur in the Irish Sea, and their cases turn up occasionally on Sefton beaches.",
        ],
      },
      {
        heading: "The Great Eggcase Hunt",
        body: [
          "The Shark Trust runs the Great Eggcase Hunt — a citizen science project that uses public finds to map shark and ray distribution in UK waters. Recording a mermaid's purse takes about two minutes: photograph it, note the location and date, and submit via the Shark Trust website or app.",
          "The Sefton Coast data feeds into a national picture of where small-spotted catshark is breeding and where other species may be establishing themselves. It's one of those rare cases where picking something up off the beach and taking a photo has a direct conservation use.",
        ],
      },
      {
        heading: "What else to look for",
        body: [
          "The tideline along the Sefton Coast regularly produces razor clams, whelk egg masses (also called sea wash balls or mermaid's necklaces — a white, spongy cluster of tiny capsules), and various bivalve shells. In winter and early spring, jellyfish strandings are common — compass jellyfish and barrel jellyfish both wash up regularly after storms. Full guide at the link below.",
          "The best beachcombing stretch is at low tide on the broad flat sands at Ainsdale or along the Formby Point tideline. Go early, go after a high tide, and bring a bag.",
        ],
      },
    ],
    tags: ["beachcombing", "mermaid's purse", "shark egg case", "catshark", "Ainsdale Beach", "Sefton Coast", "Irish Sea"],
  },

  {
    slug: "jellyfish-sefton-coast",
    category: "species-spotlight",
    categoryLabel: "Species Spotlight",
    title: "Jellyfish on the Sefton Coast — What Are They and Do They Sting?",
    date: "2026-03-04",
    metaDescription:
      "Finding jellyfish on Ainsdale or Formby Beach? They're almost certainly compass jellyfish or barrel jellyfish — here's how to tell them apart, whether they sting, and what to do if your dog goes for one.",
    heroLocalSrc: "/images/blog/beachcombing/barrel-jellyfish-dog-ainsdale-beach.webp",
    heroAlt: "A large barrel jellyfish stranded on Ainsdale Beach on the Sefton Coast, with a dog investigating in the background",
    intro:
      "Jellyfish strandings on the Sefton Coast are common, particularly in late winter and spring. Two species dominate: barrel jellyfish and compass jellyfish. They look alarming. One of them will sting you (mildly). Here's how to tell them apart and what to actually do about it.",
    sections: [
      {
        heading: "Barrel jellyfish — the big flat one",
        body: [
          "If you've found a large, flat, disc-shaped jellyfish — dark brown or grey-purple, iridescent in the light, the size of a dinner plate or bigger — that's a barrel jellyfish (Rhizostoma pulmo). It's the UK's largest jellyfish species, capable of reaching 90cm across the bell and 35kg in weight. The ones that wash up on the Sefton coast are typically 30–60cm.",
          "The sting of a barrel jellyfish is considered negligible for most people. The tentacles are fused and the nematocysts are too small to penetrate adult human skin effectively. You can handle one without concern. That said, don't rub your eyes afterwards, and don't let the dog eat it — digested nematocysts can still cause a reaction.",
        ],
        imageAfter: {
          src: "/images/blog/beachcombing/barrel-jellyfish-dog-ainsdale-beach.webp",
          alt: "Barrel jellyfish stranded on Ainsdale Beach — large flat disc with iridescent purple sheen, dog in background",
          caption: "A barrel jellyfish on Ainsdale Beach. The dog has correctly identified it as interesting. The iridescent purple colouring is typical of freshly stranded specimens.",
          objectPosition: "center 35%",
        },
      },
      {
        heading: "Compass jellyfish — the one with the markings",
        body: [
          "Compass jellyfish (Chrysaora hysoscella) are identifiable by the brown V-shaped markings radiating outward from the centre of the bell, like the points on a compass. They're typically smaller than barrel jellyfish — 15–30cm bell diameter — and more translucent, with long trailing tentacles.",
          "These do sting. The sting is mild compared to lion's mane jellyfish, but it's real and it's uncomfortable — similar to a nettle sting that lingers. If you or a child makes contact, rinse with seawater (not fresh water, which causes nematocysts to discharge further), don't rub, and remove any remaining tentacle fragments with something flat. Most people have no reaction beyond temporary irritation.",
        ],
        imageAfter: {
          src: "/images/blog/beachcombing/compass-jellyfish-closeup-ainsdale.webp",
          alt: "Compass jellyfish on the Sefton Coast beach — brown V-shaped markings radiating from the centre are clearly visible",
          caption: "Compass jellyfish (Chrysaora hysoscella) — identifiable by the brown V-shaped patterning. This species has a real sting. Rinse with seawater if contact occurs.",
          objectPosition: "center center",
        },
      },
      {
        heading: "Why they strand here",
        body: [
          "Jellyfish strandings are a normal feature of the Sefton coast in winter and early spring. Storms and strong westerly winds push them toward shore; the broad flat beaches and significant tidal range strand them as the tide drops. It's not a sign that something is wrong — in fact, jellyfish blooms follow plankton blooms, which signal a productive, healthy sea.",
          "Numbers vary year to year. Some winters produce dozens of strandings per day over a stretch of beach; some years the coast is mostly clear. A notable stranding is worth reporting to the Marine Conservation Society's jellyfish survey, which tracks distribution and abundance around UK coasts.",
        ],
      },
      {
        heading: "Dogs and jellyfish",
        body: [
          "Dogs are attracted to jellyfish on beaches and will try to bite or roll on them. A stranded jellyfish retains functional nematocysts for hours after death — the sting reflex is automatic and does not require the animal to be alive. Compass jellyfish in particular can sting a dog's mouth and tongue, causing drooling, pawing at the mouth, and occasional vomiting.",
          "The standard advice: keep dogs away from stranded jellyfish, particularly anything with visible trailing tentacles. If contact occurs, rinse the dog's mouth with water and monitor. Severe reactions are uncommon but seek veterinary advice if symptoms persist.",
        ],
      },
      {
        heading: "Other species to be aware of",
        body: [
          "Moon jellyfish (Aurelia aurita) also wash up occasionally — these are the classic translucent disc with four pink rings visible through the bell. They have no significant sting.",
          "Portuguese man o'war (Physalia physalis) is a different organism entirely — a siphonophore, not a true jellyfish — with a potentially serious sting. It has been recorded on UK Atlantic coasts but is genuinely rare on the Sefton coast. It looks like a blue/purple translucent bladder with long trailing tentacles and is unmistakable. If you see one, don't touch it, move children away, and report to the Marine Conservation Society.",
        ],
      },
    ],
    tags: ["jellyfish", "barrel jellyfish", "compass jellyfish", "Ainsdale Beach", "Sefton Coast", "beachcombing", "marine wildlife"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
