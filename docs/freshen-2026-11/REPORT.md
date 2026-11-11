# Sefton Coast Wildlife: freshen-up, November 2026
Work done on 11 Nov 2026 on `main`, with the dev server on port 3104.

- **Base URL** (from the repo): https://www.seftoncoastwildlife.co.uk
- **Byline:** "Ed", who appears as a real retired geography teacher. Nothing says he is a persona, so the new posts use plain statements and "you", with no first-person sightings.
- **Screenshots** are in `docs/freshen-2026-11/screens/`, saved as JPEG at quality 70. Very tall pages are cut at 9,000px.

## 1. What was found (ranked)
1. **Goose-roost advice would get cars locked in.**
   - The pink-footed geese and September posts said to park at "Marshside car park" an hour before sunset.
   - The RSPB locks its car park at 5pm from 2 March to 31 October and at 4pm from 1 November to 1 March.
   - The posts used three wrong postcodes (PR9 9SP, 9TH and 9LH). The RSPB gives PR9 9PJ.
   - File: `content/blog/posts.ts`.
2. **Ainsdale NNR access was wrong.**
   - Posts described an "NNR car park on Shore Road", once with PR8 2QD, which doesn't exist. Natural England says there is no public parking on the reserve and points visitors to the Ainsdale-on-Sea beach car park.
   - The Ainsdale page put the reserve and NT Formby north of the beach car park. Both are to the south.
   - The page promised an NT café. The National Trust lists only mobile refreshment stands.
   - The birdwatching guide gave PR8 3RF, an inland postcode.
   - Files: `posts.ts`, `app/nature/ainsdale-sand-dunes/page.tsx`, `app/birdwatching-guide/page.tsx`.
3. **Formby car parks.**
   - L37 1YH was used. The NT gives L37 1LJ for Victoria Road and L37 2EB for Lifeboat Road.
   - One post said to book "via the NT app". The NT now uses number-plate cameras, pay machines and the JustPark app.
   - Files: `posts.ts`, `content/species/mammals.json`, the Ainsdale page, the birdwatching guide.
4. **Red squirrel page.**
   - It promised baited feeding platforms, "the most reliable spot in England", a "stable" population and sightings that "almost always" happen.
   - The Wildlife Trust confirmed squirrel pox in Formby on 20 July 2026 and asks people to remove feeders.
   - File: `mammals.json`.
5. **Home page figures.**
   - "67km" of coast: Sefton Council says 36km.
   - "80,000+ Pink-footed Geese": no primary source. WWT counts for the Ribble are far lower. Natural England says up to 250,000 birds of all species use the estuary each year.
   - The 80,000 figure was also in the birdwatching guide, the seasonal pages and two posts.
6. **Seven broken related links:**
   - `/reserves/ainsdale-nns`
   - `/reserves/ainsdale-national-nature-reserve`
   - `/reserves/marshside-rspb`
   - `/species/sand-lizard`
   - `/habitats/sefton-coast-waders`
   - `/blog/harbour-porpoise-sefton-coast`
   - `/blog/seawatching-formby-point-guide`
7. **Site name twice in page titles.** This affected every post, the blog index, the seasonal pages, `/nature`, `/contact`, `/privacy` and `/terms`.
8. **About 1,500 em dashes** in text visitors see, including most page titles.
9. **Template leftovers.**
   - Every post's related-links box was headed "Species covered in this post", though most links are posts or reserve guides.
   - Paragraphs often ended with a single word on the last line.
10. **Stock phrasing:**
    - "genuinely" appeared 14 times in posts.
    - "numbers you won't believe until you see them"
    - "80,000+ birds ... is not an exaggeration"
    - "The best birdwatching in the North West"
11. **Persona (report only).**
    - Nothing says Ed is a persona, and `/disclosure` names only Damian.
    - Some posts read as Ed's own recent sightings. Example: the April 2026 swallows post, "a pair over the Marshside pools on Tuesday morning".
12. **Hero images (report only).** 38 of the 49 images in `public/images/blog/` are exactly 1536×1024 or 1376×768, the standard output sizes of AI image generators.
13. **Wikipedia images.**
    - Species photos come from Wikimedia and have no credit.
    - The `heroWikipediaTitle` option is broken in waiting. Wikipedia now serves images from `thumb.wikimedia.org`, and `next.config.ts` only allows `upload.wikimedia.org`.
    - No post uses it today.
14. **`lib/season.ts`** only drives the season filters on species lists. No "this month" content depends on it, so nothing shows the wrong season in November.
15. **Advertise page claims nothing supports:**
    - "Engaged, informed, and repeat visitors", "A highly engaged niche audience", "A growing library of content attracting search traffic", "Readers trust ...".
    - "Reach the Sefton Coast wildlife audience" and "the widest possible reach".
    - Package lines promise a "Homepage sponsored panel", "Sidebar", "in-feed placement" and "Maximum Sefton Coast reach". No component on this site shows ads.
    - File: `app/advertise/page.tsx`.

**Left alone because it works:** species lists and filters, the home layout, the real-photo gallery, and the Marshside and beachcombing photo sets. The browser console showed no errors.

## 2. What changed
- **Home** (`before/after-home-1440/390.jpg`):
  - Figures now read "Up to 250,000 birds a year on the Ribble" and "36km of coastline".
  - The Marshside and Sefton Coast cards are rewritten from RSPB and council facts, and the slogan is gone.
- **Marshside advice in posts** (`before/after-blog-pink-footed-geese-sefton-coast-1440/390.jpg`, `before/after-blog-september-wildlife-sefton-coast-1440.jpg`):
  - Added the RSPB car park locking times.
  - Postcodes are now PR9 9PJ.
  - Removed a "Stan and Peggy Scott Hide", which the site's own post says is a bench.
- **Ainsdale parking and direction** fixed in six posts and on the Ainsdale page (`before/after-nature-ainsdale-sand-dunes-1440/390.jpg`):
  - Removed the café claim.
  - Formby postcodes are now L37 1LJ and L37 2EB.
  - NT car park payment details corrected.
- **Red squirrel page** (`before/after-mammals-red-squirrel-1440/390.jpg`):
  - Removed the feeder promises and the claims of reliable sightings.
  - Added the pox outbreak, the advice to remove feeders, and the Red Squirrel Team's number, 07590 745 862.
- **Birdwatching guide** (`before/after-birdwatching-guide-1440/390.jpg`):
  - Removed the 80,000 claims and the "won't believe" line.
  - RSPB facilities now listed as the RSPB lists them.
  - Sanderling season corrected to autumn to spring, and postcodes fixed.
- **Seasonal pages** (`after-seasonal-winter-wildfowl-1440.jpg`): the 80,000 claim is replaced, PR9 9PH is now PR9 9PJ, and the duplicated title is fixed.
- **Broken links:** all seven now point to real pages. The porpoise link goes to the new strandings post.
- **Site name twice in titles:** fixed across the post, blog, seasonal, nature, contact, privacy and terms pages (`before/after-blog-1440.jpg`).
- **Post layout:**
  - The links box is now headed "Related pages".
  - A new optional `heroCredit` field puts a photo credit on a post's main image.
- **Single-word last lines:** a stylesheet rule in `app/globals.css` now stops paragraphs ending on one word and balances heading lines.
- **Em dashes removed** from visitor-facing text in every changed file (counts include the summary text shown in search results):

  | File | Removed |
  |---|---|
  | `posts.ts` | 272 |
  | `mammals.json` | 160 |
  | Ainsdale page | 55 |
  | Seasonal pages | 54 |
  | Home | 25 |
  | Birdwatching guide | 14 |
  | Small pages (blog index, nature, contact, privacy, terms) | about 20 |

  "genuinely" was also removed from the posts.
- **Code warnings:** fixed the three lint errors that were already there (one unescaped apostrophe and two internal links).
- **Advertise page** (`before/after-advertise-1440/390.jpg`):
  - Removed the audience, engagement, trust and "growing traffic" claims.
  - The top of the page and the audience cards now describe who the site is written for and what it covers: 257 species profiles, reserve and seasonal guides, and the blog.
  - Ad positions now read "Placement on ..., by arrangement".
  - "Maximum Sefton Coast reach" now reads "All four Sefton Coast Network sites".
  - Package names, sites, prices, six-month terms, category exclusivity, reporting, creative updates and the review call are unchanged.

## 3. The two new posts

### Sanderling on the Sefton Coast: The Winter Wader at the Edge of the Tide
- **Slug:** `sanderling-sefton-coast`
- **Live URL:** https://www.seftoncoastwildlife.co.uk/blog/sanderling-sefton-coast
- **Why chosen:** sanderling is the commonest small wader on these beaches from autumn to spring. The site had a species page but no post, and the post carries Sefton Council's winter "Give Birds A Break" message.
- **Images:**
  - Main photo: `sanderling-strandline.jpg`, by Ian Kirk, CC BY 2.0, from Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Sanderling_at_Sandbanks,_Dorset_(8591897521).jpg). It is credited on the image.
  - In the post: the site's own photo of the RSPB Marshside protected-area sign.
- **Screenshots:** `post-blog-sanderling-sefton-coast-1440/390.jpg`
- **Sources** (all accessed 11 Nov 2026):
  - **RSPB sanderling page** (https://www.rspb.org.uk/birds-and-wildlife/sanderling):
    - How to identify it.
    - Does not breed in the UK; winter visitor and passing migrant; breeds in the high Arctic.
    - Amber conservation status.
  - **BTO BirdFacts** (https://www.bto.org/understanding-birds/birdfacts/sanderling):
    - The tideline-chasing behaviour.
    - The Wash and the Ribble hold internationally important numbers, and the Ribble has some of the highest winter densities.
    - Prefers sandy beaches.
    - Passage continues into late May; some young birds stay all summer.
    - Birds come from Greenland as well as Siberia.
    - 21,000 in the UK in winter (2012-17), up 54% from 1998 to 2023.
    - Average adult weight about 58g; oldest ringed bird 17 years 7 months.
    - Old folk names and the Welsh name.
  - **Ribble and Alt Estuaries protected-area factsheet** (https://assets.publishing.service.gov.uk/media/5def787fed915d15ec797ee1/Ribble_and_Alt_Estuaries_SPA_Factsheet.pdf):
    - Overlaps the Ribble Estuary and Sefton Coast SSSIs.
    - Sanderling protected there in winter and on passage.
    - Beach recreation disturbs roosting flocks, especially in winter.
  - **Sefton Council nature calendar** (https://sefton.gov.uk/around-sefton/coast-countryside/seftons-nature-calendar/):
    - Wader roosts build from October and are established by December, sanderling included.
    - The three key roost areas.
    - Roosts are easily disturbed at high tide; "if they run or fly ahead of you, you are too close".
    - Keep dogs and horses away.
    - "Give Birds A Break" is backed by the RSPB, Natural England and the National Trust.
  - **Natural England, Merseyside reserves page** (https://www.gov.uk/government/publications/merseysides-national-nature-reserves/merseysides-national-nature-reserves): check the tide timetable before going on the beach.
  - **Sefton Council winter-changes news item** (https://sefton.gov.uk/mysefton-news/latest-news/council-reminds-coast-visitors-of-winter-changes): Merseyrail stations within walking distance of the beaches.

### Stranded Seals, Porpoises and Dolphins on the Sefton Coast: What to Do
- **Slug:** `stranded-marine-animals-sefton-coast`
- **Live URL:** https://www.seftoncoastwildlife.co.uk/blog/stranded-marine-animals-sefton-coast
- **Why chosen:** winter storms strand seals and porpoises on these beaches. The site had two sentences on it and a dead link to a porpoise post.
- **Image:** the site's own photo of a stranded jellyfish at Ainsdale.
- **Screenshots:** `post-blog-stranded-marine-animals-sefton-coast-1440/390.jpg`
- **Sources** (all accessed 11 Nov 2026):
  - **Living Seas North West, the North West Wildlife Trusts** (https://livingseasnw.org.uk/node/83):
    - About 12 whale, dolphin and porpoise species recorded in the Irish Sea, and the four seen most often.
    - Seals and pups, and when to call for help.
    - Seals bite.
    - Never drag a whale or dolphin back to the sea or move it yourself; keep away from the tail.
    - What to tell the hotline.
    - Keep people, dogs and gulls away, and avoid contact.
    - Turtles strand in winter, cannot survive water below 10°C, and have powerful front flippers.
    - Leatherback turtles visit in summer.
    - Dead strandings help science; wash your hands.
    - Mass strandings should be reported.
  - **British Divers Marine Life Rescue (BDMLR)** (https://bdmlr.org.uk/?p=3882):
    - Rescue line 01825 765546, available 24 hours.
    - Species, size, photos and video help the responders.
  - **UK Cetacean Strandings Investigation Programme (CSIP), how to report** (https://ukstrandings.org/how-to-report-a-stranding/):
    - Live strandings: RSPCA 0300 1234999 or BDMLR.
    - Dead strandings: 0800 652 0333.
  - **CSIP home page** (https://ukstrandings.org/):
    - Running since 1990 and funded by Defra.
    - Covers whales, dolphins, porpoises, turtles and basking sharks, and carries out post-mortems.
  - **Sefton Council nature calendar** (link above):
    - Seals on the coast after bad weather from October to December.
    - The BDMLR number.
    - Most seals are resting, with parents offshore.
    - Porpoises and dolphins return in spring.
    - Dead jellyfish can still sting.
  - **National Trust Formby page** (text saved in this job's scratch `src/nt-formby.txt`): Lifeboat Road boardwalk to the beach.
  - **Natural England Merseyside reserves page:** Ainsdale-on-Sea as the way in.

### Sources for the fixes (11 Nov 2026)
- **RSPB Marshside page** (https://www.rspb.org.uk/days-out/reserves/marshside):
  - Postcode PR9 9PJ.
  - Car park hours, locking times and charges.
  - A hide, a viewing platform and screens; Sandgrounders' hide.
  - Three trails.
  - Nesting birds, and geese and wigeon in winter.
- **Natural England Merseyside reserves page:**
  - Ainsdale: no public parking on the reserve; park at the beach car park; entrances; distance from stations; NT Formby is to the south.
  - Ribble: up to 250,000 birds a year.
- **NT Formby page:**
  - Postcodes L37 1LJ and L37 2EB.
  - Number-plate cameras, pay machines and JustPark; members and Blue Badge holders park free.
  - Toilets; mobile refreshment stands.
- **Squirrel pox:**
  - Wildlife Trust, 20 Jul 2026: https://www.lancswt.org.uk/node/9334
  - Sefton Council, 29 Jul 2026: https://sefton.gov.uk/mysefton-news/latest-news/sefton-residents-urged-to-help-red-squirrels-with-simple-steps-amid-pox-outbreak/
  - Facts used: the outbreak, the 80% fall in 2008, remove feeders, and the Red Squirrel Team's number.
- **Coast length:** Sefton Council's Coast Adaptation Study, Oct 2010 (https://modgov.sefton.gov.uk/documents/s14206/01%202011%20coastal%20adaption%20annex.pdf): coast over 36km, largest dune system in England.
- **postcodes.io:** where each postcode actually is. PR8 2QD does not exist.

## 4. Reviewer's findings

An independent reviewer (fresh context) re-fetched the sources, checked about 92 factual claims in the two posts and read the changed copy cold: 6 MUST FIX, 6 SHOULD FIX. All were handled in commit `e2a8662` (before/after shots `fix-before-*`, `fix-after-*`):

1. Marshside car park: RSPB charges (£1.50 up to 2 hours, £3.00 over; members and Blue Badge free) and hours (8.30am to 4pm 1 Nov to 1 Mar, to 5pm 2 Mar to 31 Oct, locked outside) replace every "free car park" claim (March, April, swallows, common tern and spring migration posts; seasonal geese and winter wildfowl tips; birdwatching guide; `/nature`). Dawn and dusk advice now says to come on foot or by bike, or be back before the car park locks. The unsourced Redshank Road car park, "hides open from dawn" and "Free entry" (where edited) removed.
2. Ainsdale beach parking is seasonal: Sefton Council, 1 April to 30 September, £10 a day; off-season by train (Natural England: Ainsdale station 1.2 km, Freshfield 1.4 km). Fixed on the Ainsdale page, birdwatching guide, March and grey seal posts; the FAQ lists Natural England's entrances.
3. Grey seal directions corrected: north from Formby Point, south from Ainsdale-on-Sea.
4. "80,000" replaced on `/nature` and `/seasonal` with Natural England's "up to 250,000 birds a year" on the Ribble; "the best" removed; five em dashes on `/seasonal` removed.
5. Sanderling photo credit links the licence (CC BY 2.0); alt text now describes the picture (Dorset, March, signs of summer plumage).
6. "English folk names"; the unsourced translation removed.
7. Red squirrel entry: the 1,000 to 1,500 FAQ removed; UK figure now an estimated 287,000, about three quarters in Scotland (Wildlife Trust); "8 to 10am" replaced with "morning; the Victoria Road car park opens at 9am" (NT).
8. Contradictions aligned: jellyfish can sting when dead (council advice) on the jellyfish post and Ainsdale page; March post sanderling timing; `birds.json` line 1480 now "Around 21,000 in winter (BTO estimate, 2012-17)" (rest of that file untouched).
9. Sanderling sources attributed correctly (spring-migration and October entries; nesting-season test); "The UK picture is a good one" replaced with the long-term rise plus the BTO's notes on Wales and the flyway.
10. Strandings post: repeated paragraph merged; date 2026-11-11; the jellyfish hero kept with a caption explaining why.
11. Advertise page title, repeated line and heading resolved by the stage B rewrite; not-found title fixed.
12. Double colons and the three remaining "genuinely" removed; birdwatching stat reworded.

Still open for Damian: Marshside "Free entry" on the home and Marshside pages (the RSPB sign in the site's own photo says the parking fee includes entry); `birds.json` dusk tips (line 23, FAQ line 37) and `mammals.json` bat tips (lines 449, 462, 797, 810, 847) send people to Marshside at dusk; Hesketh Out Marsh "Free entry" unverified; whether Ed is a persona.

## 5. Bigger suggestions for Damian (not built)

| Suggestion | Screenshot | What it would take |
|---|---|---|
| Say whether Ed is a persona, or replace the bio; reword the first-person sighting posts | `after-blog-pink-footed-geese-sefton-coast-1440.jpg` | About an hour |
| Replace the 38 AI-looking hero images with real or credited photos (`heroCredit` now supports credits) | `after-blog-1440.jpg` | A few hours |
| Credit the Wikimedia species photos | `after-mammals-red-squirrel-1440.jpg` | Half a day: extend `scripts/download-wiki-images.mjs` to record author and licence |
| Remove the remaining em dashes: `birds.json` 446, `insects.json` 227, `plants.json` 151, plus other page titles | `before-birds-1440.jpg` | 1 to 2 hours of review |
| Re-check the Marshside page: "80,000+", the PR9 9PH layby, and the name Nel's Hide | `idea-nature-marshside-rspb-1440.jpg` | An hour plus a visit |
| Increase post body text from 14px to 16px | `post-blog-sanderling-sefton-coast-1440.jpg` | One class, but it changes every post |
| Fix or remove the `heroWikipediaTitle` option | none | 30 minutes |
| On species pages the cross-links run together and contain an em dash | `after-mammals-red-squirrel-1440.jpg` | Small fix in `components/SpeciesDetail.tsx` |

### Needs Damian's pick
1. Is Ed a persona or a real person?
2. The AI-looking hero images: keep them, label them or replace them?
3. "80,000+" is still on `app/nature/marshside-rspb/page.tsx` and `app/nature/sefton-coast/page.tsx`.
4. The red squirrel FAQ still says 1,000 to 1,500 animals, with no current source.
5. Left unverified and unchanged:
   - free entry at Marshside
   - little terns at Ainsdale, "wardened by the RSPB", 80 to 120 pairs
   - the sanderling species page says about 15,000 in winter; the BTO says 21,000
6. Advertise page:
   - The "Category exclusivity" card now only repeats the term already in each package; remove it if you prefer.
   - The "Request the media kit" offer and the "we respond within one working day" promise were left as they were.
   - "Monthly performance reporting", "Quarterly review call" and "Up to 2 creative updates" are unchanged service promises, but no ad placement appears on this site today.

## 6. Checks run
- **Baseline, clean tree:** tsc 0 errors; eslint 3 errors and 3 warnings.
- **After:** tsc 0 errors; eslint 0 errors and the same 3 warnings.
- **Pages:** every changed page and both new posts load. Both posts appear in the sitemap, feed, blog index and home page.
- **Console:** no errors and no failed requests on any page checked, including `/advertise`.
- **Screenshots** at 1440 and 390 checked for single-word last lines, headings that wrap badly and sideways overflow on phones.
- **Em dashes:** none left in visitor-facing text in any changed file. The only two remaining are code comments in `globals.css`.

## 7. Advertising (stage B)

Built 11 Nov 2026 from Damian's picks. Commits: `ff21b92` (advertising, enquiry addresses, affiliate removal, tests), `667dd12` (visit counts), `f44b992` (35 `ads-*` screenshots). Not pushed.

- Existing advertisers: none (the schema has only `PageView`; nothing in code records a network package). Old £450/£650/£800 packages removed.
- Spaces (`lib/ad-slots.ts`, all empty at commit; `components/AdSlot.tsx`): home card after the latest posts (£39 a month); section sponsor at the end of `/birds`, `/mammals`, `/insects`, `/plants`, `/seasonal` (£35); birdwatching guide sponsor (£45), where the Cottages.com box was; end-of-post card on species-spotlight and seasonal-watching posts (priced as the section sponsor: Damian to confirm). None on species pages, advertise, contact, disclosure, privacy, terms or 404. Filled cards are labelled Advertisement or Sponsor with `rel="sponsored noopener"`; an expired `until` disappears at the next deploy.
- Advertise page: prices plus VAT (section sponsor £35, birdwatching guide £45, home card £39, each 3 months minimum; winter birds package £99, Nov to Feb; sponsored article £125; Sefton Coast bundle £149 a month, 3 months minimum); founding offer word for word; `?space=` names the space; "Ask about" goes to `/contact?topic=advertise&space=...`; no traffic or audience claims; partnerships@ address gone.
- Sponsored articles: support only (Sponsored label, "Sponsored by X" byline, sponsor as JSON-LD author, no Ed bio, no other advert, labelled in lists and RSS).
- Disclosure: new Advertising paragraph; the commission line removed.
- Enquiries: `lib/contact.ts` holds `DELIVERY_EMAIL` (damian@churchtownmedia.co.uk, the contact route's `to`) and `DISPLAY_EMAIL` (hello@seftoncoast.network, printed on advertise, disclosure, privacy and terms). Privacy (2 sentences) and terms (1 sentence): only the address changed, from damian@churchtownmedia.co.uk to hello@seftoncoast.network. The route sends from noreply@seftoncoastwildlife.co.uk, reply-to the validated sender, checks and logs the Resend result (name and message only), escapes all input, strips CR/LF from the subject. Only env var: `RESEND_API_KEY`.
- Form: one, https://www.seftoncoastwildlife.co.uk/contact, POST `/api/contact`; required `name`, `email`, `message`; optional `subject` (free text); no select fields.
- Affiliates: the Cottages.com (Awin) box and `lib/affiliate-links.ts` removed; disclosure commission line removed. No affiliate sentences in privacy or terms.
- Visit counts: the old beacon stopped on 12 Mar 2026 when commit `59ebdba` removed the middleware; `/api/p` removed; `PageView` and its 17 rows untouched. New `PageCount` (path, day, count) via `prisma/sql/2026-11-page-count.sql` and `prisma db execute` on host ep-crimson-wave-abpzd483-pooler.eu-west-2.aws.neon.tech; read back: 3 columns plus primary key, 0 rows. `components/VisitCounter.tsx` beacons the path to `/api/count`, which writes only in production, skips bots and stores nothing about the visitor. Draft privacy line (not applied): "Visit counts: we count how many times each page is viewed each day. We store only the page address, the date and the number of views, and nothing about you: no IP address, browser, device or cookie."
- Tests: `npm run test:enquiry` 24 of 24 (addresses, escaping, reply-to, error logging, no `resend.dev`, no affiliate patterns, prices, empty spaces, visit-count rules). tsc 0 errors; eslint 0 errors, 3 warnings (baseline). Nothing sent.
- For Damian: confirm the end-of-post price; the privacy page says Plausible but the site loads Ahrefs and Vercel Analytics; add the visit-count privacy line.

### 7b. Advertising build: independent review and fixes

An independent reviewer read `ff21b92`, `667dd12` and `f44b992` cold: 1 MUST FIX, 6 SHOULD FIX, plus items carried over from the Formby review. Fixed in `9df295e`:

1. The end-of-post card was one shared space on 33 posts at the £35 section price. Each eligible post is now its own space (`post-<slug>`, "Sponsor of the <title> post"), one sponsor per post at the £35 section-sponsor price, for Damian to confirm; the Section sponsor card says "Also available on a single species or seasonal post, one sponsor per post."
2. Pages with a space revalidate daily, so an expired sponsor drops off without a deploy.
3. The birdwatching guide card is no longer pitched at optics sellers ("Suits guided walks and places to stay"), with a note that it must not be sold to a seller of a brand named on the page. Brands named there, for Damian: Celestron Nature DX, Kowa YF, Swarovski, the Collins Bird Guide, the Merlin app (and the RSPB, which also sells optics).
4. Filled-card label now 12px in full colour.
5. Command-centre stats read sums from `PageCount` (read-only). For Damian: its existing `DELETE` handler can still wipe the old `PageView` table.
6. Disclosure: "Churchtown Media Ltd pays for the site. Businesses can pay for a labelled advert."
7. `/api/count` counts only known routes and drops cross-site requests.
8. Contact form: name and subject capped at 100 characters, honeypot field `website`, no auto-reply (one email, to the delivery inbox only); "Our rules" reads "Adverts never appear inside a review, and paying for a space does not change what we write."

Also: em dashes removed from the titles and meta descriptions of `/birds`, `/insects`, `/mammals`, `/plants`. Tests 41 of 41; tsc 0; eslint 0 errors and 3 warnings. Screenshots `adsfix-*`.

## 8. Birdwatchers and students: site guides, calendar, designations

Built 11 Nov 2026 from Damian's direction to make the site more useful to birdwatchers and to students and researchers. Commits on main: `8a0fb5e` (site guides), `281c15e` (calendar), `a88d3cb` (designations), `34b301f` (species facts), `cde9f8e` (leftovers and business wording), `bd279b3` (contact message cap), `937fb0f` (screenshots `j3-*`), `360c388` (Vercel Analytics removed; Ahrefs only). On branch `privacy-wording`: `c822e6a` (privacy wording, for Damian to approve). Not pushed.

### 8.1 Reserve and site guides
One standard guide per site (`components/SiteGuideFacts.tsx`): who manages it; getting there and parking; paths, hides and viewpoints; what is seen by season with links to species pages; tides; access and dogs; the managing body's own page; numbered sources at the foot (`components/SourceList.tsx`, `lib/sources.ts`). No adverts on guides.
- New: https://www.seftoncoastwildlife.co.uk/nature/hesketh-out-marsh (RSPB); /nature/birkdale-green-beach (Sefton Council LNR); /nature/formby-point (National Trust, with Cabin Hill NNR and Ravenmeols LNR); /nature/crosby-and-alt-estuary (Sefton Council, Crosby Coastal Park to the Alt at Hightown).
- Rebuilt: /nature/marshside-rspb, /nature/ainsdale-sand-dunes, /nature/seaforth-nature-reserve, /nature/martin-mere, /nature/sefton-coast and the hub /nature.
- Key corrections: Marshside has no separate entry charge (the RSPB sign says parking includes entrance); Seaforth needs a day pass through the Wildlife Trust confirmed by Port of Liverpool Police, and no dogs (the page had said "free, open access, dogs on leads"); Hesketh Out Marsh postcode PR4 6XQ (PR9 8DS is in Banks); Martin Mere's stations are not on Merseyrail; unsupported Ainsdale sand lizard and Little Tern claims removed.
- Sources (read 11 Nov 2026), listed on each page: RSPB Marshside and Hesketh Out Marsh reserve pages; Natural England's Merseyside NNRs page and site records (Ribble Estuary NNR, Ainsdale NNR, Cabin Hill, Ravenmeols, Ainsdale and Birkdale LNR); Natural England citations (Ribble and Alt Estuaries SPA, Ribble Estuary SSSI, Sefton Coast SSSI, Mersey Narrows SSSI and SPA); Sefton Council (nature calendar, LNR page, Ainsdale Beach, Crosby Coastal Park, Crosby Beach, Another Place, Enjoying Beaches Safely, Visiting our beaches); the National Trust Formby page; the Wildlife Trust (Seaforth, squirrel pox notice); WWT Martin Mere pages; JNCC Ramsar sheet.

### 8.2 Month-by-month calendar
https://www.seftoncoastwildlife.co.uk/seasonal/month-by-month, linked from /seasonal, the navigation, the footer and the hub. Twelve sections, each item linking to site guides and species pages with its source named; seasons, not promises. Sources: Sefton Council's nature calendar, RSPB, BTO BirdFacts (10 species), Natural England, the Wildlife Trust, WWT, JNCC. No advert.

### 8.3 Protected sites reference
https://www.seftoncoastwildlife.co.uk/nature/designations: Ribble and Alt Estuaries SPA and Ramsar; Sefton Coast SAC; Mersey Narrows and North Wirral Foreshore SPA and Ramsar; Liverpool Bay / Bae Lerpwl SPA; Sefton Coast, Ribble Estuary and Mersey Narrows SSSIs; Ribble Estuary, Ainsdale and Cabin Hill NNRs; Ainsdale and Birkdale Hills and Ravenmeols Hills LNRs; the nearby Ribble Estuary MCZ. Each gives what it protects, where, the area, dates, who is responsible and links to the official records (Natural England citations and Designated Sites View, JNCC Ramsar sheet UK11057, Sefton Coast SAC Standard Data Form, Liverpool Bay SPA page, the gov.uk SPA factsheet). Qualifying features named; no count tables reproduced. "How to cite this page" line; no advert.

### 8.4 Species facts
Twenty bird pages linked from the guides and calendar checked against BTO BirdFacts and RSPB (with Natural England, JNCC, WWT, the Wildlife Trust and Sefton Council where relevant): Pink-footed Goose, Avocet, Knot, Dunlin, Black-tailed Godwit, Lapwing, Golden Plover, Grey Plover, Redshank, Whooper Swan, Teal, Wigeon, Pintail, Common Tern, Sanderling, Bar-tailed Godwit, Common Scoter, Turnstone, Red-throated Diver, Twite. Status corrected to the BTO listing (Knot, Bar-tailed Godwit and Turnstone red to amber; Golden Plover and Red-throated Diver amber to green). Unsupported local counts removed (40,000 geese at Marshside, 100,000+ Knot, Pintail and Twite flocks, the Avocet colony, tern rafts), replaced by the designations each species qualifies for; UK totals kept as single BTO estimates with years. Each page shows its sources and the date checked; em dashes removed from these species.

### 8.5 Leftovers and business wording
- Home page Marshside "Free entry" now "£1.50 or £3 Marshside RSPB parking, entry included" (RSPB price list and sign).
- Dusk tips sending people to Marshside after the car park locks now give the locking times (Pink-footed Goose; Soprano Pipistrelle, Daubenton's Bat, Noctule; Short-eared Owl, Bittern, Swallow, Starling).
- Hesketh Out Marsh "free entry" confirmed (the RSPB lists no admission charge); postcode and direction corrected.
- No ranking or criticism of named businesses or products: the Celestron, Kowa and Swarovski recommendations, the Collins Bird Guide and the Merlin app removed from the birdwatching and wader pages; the Martin Mere café verdict, Churchtown "good options for lunch", Ainsdale cafés and Co-op, and "the one / definitive reference" lines removed in the rebuilds.

### 8.6 Contact form
Message capped at 5,000 characters (field `maxLength` and server check); test added.

### 8.7 Analytics and privacy
Vercel Analytics removed from `app/layout.tsx` (Ahrefs only; the dependency left for the dependency job). The site sets no cookies (no Set-Cookie on live pages, no cookie or storage code). On branch `privacy-wording`: "Last updated" now November 2026; the Plausible sentence replaced by the agreed Ahrefs wording plus "Visit counts: we count how many times each page is viewed each day. We store only the page, the day and a number, and record nothing about the person viewing it."; "This site does not use cookies. Plausible Analytics is cookieless by design. No consent banner is required." now "This site does not use cookies. Ahrefs Web Analytics and our own visit counts work without them."; "Plausible Analytics: cookieless, privacy-first web analytics." now "Ahrefs Web Analytics: page view statistics without cookies." (linked to Ahrefs' help page).

### 8.8 Checks
Tests 42 of 42; tsc 0; eslint 0 errors and 3 warnings (baseline); console clean on 20 pages; no sideways overflow at 390; no em dashes in changed files except 381 left in unchecked species in `birds.json`.

### 8.9 For Damian
New routes added to `STATIC_PATHS` in `lib/visit-count.ts` (the tests require it); a code comment in `lib/ad-slots.ts` still lists brands no longer named on the birdwatching guide; on the privacy branch, decide on the "Vercel: website hosting" line and the out-of-date Wikipedia line; the National Trust car park charge and hours are dated 11 Nov 2026; the council and Natural England give different areas for the Ainsdale and Birkdale LNR (988 ha and 296 ha), both shown.

### 8.10 Next steps
1. A species checklist with status and source for every species page: about a day (237 species still need BTO or RSPB status; `sources` and `factsChecked` fields exist).
2. A "for schools and researchers" page: about half a day (RSPB education sessions, National Trust group booking, Seaforth day passes, the citations on the protected-sites page).

## 9. Review of the birdwatcher and student pages: findings and fixes

The independent review of job 3 (`wildlife-job3-review.md`) listed 41 findings: 0 wrong facts, 8 misleading, 1 house rule and 32 minor. Every fix that adds a fact was checked again against the source on 11 November 2026. 39 were applied (some with changed wording, given below), 1 was applied in part and 1 was skipped as instructed.

Commits on `main`: 4e124d7 (protected sites), 5a699c5 (Hesketh Out Marsh), fb5dac8 (calendar), 4a12986 (site guides), 7317513 (home and hub wording), 6946524 (sitemap), 0265497 (species pages). On `privacy-wording`: 4457d14.

### Applied
- **A1** Hesketh Out Marsh breeding birds: the guide and the June calendar item now use Natural England's Ribble Estuary NNR list (gulls, terns, Redshanks, Avocets, Lapwings and Skylarks) instead of the RSPB's Arctic Tern and Eider line. The calendar no longer cites the RSPB Hesketh page.
- **A3** Ribble Estuary MCZ: "Designated by the Ribble Estuary Marine Conservation Zone Designation Order 2019, made on 20 May 2019 and in force from 31 May 2019"; the Secretary of State made the order under the Marine and Coastal Access Act 2009. Links to legislation.gov.uk and gov.uk added.
- **A4, A5** Mersey Narrows: Ramsar site designated 5 July 2013 (JNCC Ramsar Information Sheet UK11042, 2,078.41 ha); the Ramsar record lists the same species, all as wintering features. Sheet linked.
- **A6** Sefton Coast SAC: Natural England record linked; area line now also gives the Standard Data Form's 4,591.59 ha.
- **A8** Ribble and Alt Ramsar features listed by name as Natural England's record gives them.
- **A9 to A11** Calendar: National Trust dropped from the source list; March warblers split from the Martin Mere item; the Twite and egret item no longer links the Birkdale guide.
- **A12** "Ainsdale beach parking ends on 30 September and reopens on 1 April. Ainsdale station is within walking distance of the beach."
- **A14** Privacy page: the contact form line now includes the subject (on `privacy-wording`).
- **A15** Sitemap: the 20 checked species pages and the home page carry 11 November 2026.
- **B1** Home: free entry to Marshside; parking £1.50 or £3, RSPB members and Blue Badge holders free (RSPB price list: adult and child £0).
- **B5** Seaforth: day-pass requests go through the Wildlife Trust to the Port of Liverpool Police.
- **B6 to B8** Martin Mere: no flamingos (WWT lists an otter enclosure and about 100 species of water birds); the tickets page cited for unlimited members' visits; the scooter deposit is non-refundable.
- **B9, B10** Marshside: RSPB Black-tailed Godwit page cited; "Two hides, a viewing platform and screens" in the birdwatching guide.
- **B11** Guide lists say "the coast north to south, then WWT Martin Mere inland" (hub, overview, birdwatching guide, and the same wording in the hub descriptions, home card and species page panel).
- **B12, B13, B15, B16** Martin Mere "inland, 10 miles from Southport"; "birds", not "waders", may roost near Hightown; squirrel pox source uses the article address; unused source entry removed.
- **B14** Formby: "The National Trust says Formby is legally protected and has basic facilities." and "All group visits must be booked in advance with the National Trust, including schools and groups arriving on foot."
- **B17** Home: "22 miles of natural coastline".
- **C3 to C8** Species: BTO population periods (Teal, Wigeon, Pintail, Sanderling; Whooper Swan's winter period left out because the BTO page prints "2015-15"); Black-tailed Godwit as a wintering Ramsar feature; Knot FAQ cites the Ramsar record; Sanderling FAQ now asks how to recognise one (BTO and RSPB wording); Seaforth pass "a week ahead if possible", forwarded to the Port of Liverpool Police; Lapwing "UK breeding population fell by 56% between 1995 and 2024" (description and FAQ).

### Applied with different wording
- **B2** Birkdale winter parking: "From October to March there is no beach parking, so use another car park or come by train." No council page is linked (standing rule).
- **B3** Ainsdale toilets: open April to September, Changing Places toilet all year. The unsourced "no facilities on the reserve" is gone. The reviewer's opening line on parking was not added, because the parking list already says it.
- **B4** Crosby: the superlative is removed rather than attributed, since the first wording of the standing rule barred naming the council: "RNLI lifeguards are on Crosby beach all year, but there is no patrolled bathing area."
- **C1** Knot: "It is Amber-listed (BTO, RSPB). The BTO gives the change in the UK winter population as +15% from 1998 to 2023 and says the long-term trend has been more or less stable since the early 1990s." The BTO page does not name the Wetland Bird Survey beside the figure, so the line does not either. The RSPB's 13% is dropped.
- **C2** Green List text: "This species is on the UK Green List in Birds of Conservation Concern 5 (December 2021), which places each species on the Red, Amber or Green List using criteria such as population and range trends, rarity and international importance (BTO). Green does not by itself mean numbers are rising: see the BTO and RSPB pages for its current trends." No fetched page states the reviewer's "does not meet the criteria" definition.
- **C9** Bat titles: `shortLocation` removed for the three bats (the reviewer's second option), so titles use "the Sefton Coast" and no lower-case badge shows.
- **A2** Privacy, Wikipedia line: replaced, not deleted. `lib/wikipedia.ts` is called only by the home page, the blog index and blog posts, and only for a post with `heroWikipediaTitle` and no `heroLocalSrc`; none of the 43 posts is like that. Species photos are local, and no rendered page references `upload.wikimedia.org` or the Wikipedia API.

### Applied in part
- **A7** Liverpool Bay SPA: code UK9020294 and the JNCC Standard Data Form added (site code, classified 2010-08). The "responsible" line was kept, now attributed: the JNCC page fetched today says the SPA "was classified by the UK Government to meet obligations" under the Birds Directive, so the reviewer's premise does not hold.

### Skipped
- **A13** Ahrefs sentence on the privacy page: unchanged, as instructed. The wording is agreed across the five sites; the reviewer's points (IP address used for location and for the daily ID without being stored, operating system, URL parameters) go to the coordinating chat.

### Privacy sentences, before and after (`privacy-wording`, 4457d14)
- Before: "Contact form: if you use the contact form, we receive your name, email address and message."
  After: "Contact form: if you use the contact form, we receive your name, email address, subject and message."
- Before: "Wikipedia / Wikimedia Commons: species images are loaded from Wikipedia's REST API. No personal data is sent to Wikipedia by this site."
  After: "Species photos: served from this site. Your browser does not connect to Wikipedia or Wikimedia Commons to show them."

### Standing rule: no links to the six organisations (11 Nov 2026)
The rule was first "do not name or link the council", then refined to "keep them, i dont want to link to any of them": naming is fine, linking is not. Commit ec672a7 (under the first wording) took the council's name and links out of this job's copy: the site guides, calendar, protected sites page, checked species pages and the review fixes. Managed sites say "the local council"; the council entries are gone from the source lists, `lib/sources.ts` and the Birkdale and Crosby "official page" boxes (now Natural England records). Commit db4dd96, "Copy: no council attributions (standing rule)", applied the approved inventory items WC1 to WC8 to older copy (five blog posts, the Pink-footed Geese seasonal page, six moth entries and Sea Buckthorn); the council's Give Birds A Break campaign line went with it. These rewordings stay as committed.

Links removed: 61 to sefton.gov.uk (30 in the guides, protected sites page and overview source lists, "official page" boxes and schema `sameAs`; 29 on the calendar, 27 of them per-item source links; 6 species source entries) and 2 plain-text mentions of sefton.gov.uk/find-parking. None to the other five organisations or their social pages existed. Commit f9b15e5 adds `lib/blocked-domains.ts` (the shared list of 18 domains) and `tests/no-blocked-links.test.mjs`. A rendered check of 331 pages on the dev server found 0 occurrences of any listed domain.

18 of the calendar's 39 items now show no source. The council pages the facts came from, all fetched on 11 November 2026:
- Nature calendar: https://www.sefton.gov.uk/around-sefton/coast-countryside/seftons-nature-calendar/ (roost areas and timings, migration, geese, amphibians, reptiles, plants, seals, disturbance advice, Twite)
- Ainsdale Beach: https://www.sefton.gov.uk/around-sefton/coast-and-countryside/visiting-our-beaches/ainsdale-beach/ (parking 1 April to 30 September, £10, closures, toilets April to September, Changing Places all year, dog-free zones, stations, the Wildlife and Countryside Act line)
- Ainsdale and Birkdale Sandhills LNR: https://www.sefton.gov.uk/around-sefton/coast-countryside/ainsdale-and-birkdale-sandhills-local-nature-reserve/ (988 ha, Velvet Trail, entrances, Shore Road toilets, plants)
- Crosby Beach: https://www.sefton.gov.uk/around-sefton/coast-and-countryside/visiting-our-beaches/crosby-beach/ (50 m rule, soft sand and mud, lifeguards all year, stations)
- Crosby Coastal Park: https://www.sefton.gov.uk/around-sefton/parks-and-greenspaces/crosby-coastal-park/ (extent, designations, stations, buses, car parks)
- Another Place: https://www.sefton.gov.uk/around-sefton/another-place-by-antony-gormley/ (100 figures, 3 km)
- Visiting our beaches: https://www.sefton.gov.uk/around-sefton/coast-countryside/visiting-our-beaches/ (22 miles of natural coastline)
- Safe beaches: https://www.sefton.gov.uk/safe-beaches (tide forecasts)
- Find car parks: https://www.sefton.gov.uk/find-parking (no longer used)

### Checks
`npx tsc --noEmit` 0 errors (baseline 0). `npx eslint .` 0 errors, 2 warnings (baseline 0 and 3; the `<img>` warning on the blog index is gone). `node --test tests/*.test.mjs` 49 of 49 (baseline 42; four em dash tests and three blocked-link tests added).

## 10. Improvements and modernising

Measured on 11 November 2026 on the dev server (port 3104) and a local production build (`next build`, `next start`), with Playwright and headless Edge: every sitemap URL (326) plus contact, advertise, legal pages, the feed and a 404; bytes, layout shift, overflow, contrast, headings, links and metadata on 26 page types at 1440 and 390. External links: 307 unique, each fetched once.

### Ranked, with effort and status
1. **Blog index downloaded every original photo**: 72.3 MB of images (43 cards, plain `<img>` of 2 to 3 MB files). Now through `next/image` with card-sized hints: 0.6 MB at 1440, 1.3 MB at 390. 15 minutes. **Done** (0f09dda, bb121ce).
2. **Wrong species links**: six NBN Atlas links on mammal and amphibian pages opened other species (the red squirrel link showed palmate newt, natterjack showed painted turtle, otter showed wood mouse; grey seal gave an error). Replaced with the records NBN's own search returns, each checked by page title; the BTO Crossbill page had moved. 15 minutes. **Done** (4506166).
3. **Em dashes in rendered text**: 888 in the species data (birds 446, insects 265, plants 177) on 257 species pages, and 1 in the mammals list headings. All replaced; rendered HTML of all 333 URLs, titles, meta, Open Graph, JSON-LD and the feed now has none. Test: `tests/no-em-dash.test.mjs`. 45 minutes. **Done** (88b00ce, 1d51542).
4. **No share image on 69 pages** (home, the four species lists, the blog index and all 43 posts, seven guides, six seasonal pages, birdwatching guide, contact, advertise): each page's own Open Graph data replaced the layout's, image included. Posts now use their photo, the rest the default; the layout's stated 1200 x 630 for a 600 x 450 file is corrected. 25 minutes. **Done** (95f8664).
5. **Text contrast**: faded grey text at 40 to 60% opacity (3.4:1 or less) in 31 places, including the postcode and car park lines on the birdwatching guide and Marshside; white on the gold advertise buttons (2.2:1); white on the amber status badges (about 2.1:1) and on green ones (about 3.8:1) at 10 to 12 px. All now 4.5:1 or better. 20 minutes. **Done** (bb54953, e51617b).
6. **Species list thumbnails**: /birds loaded 4.2 MB of 640 px files into 320 px cards at 1440; now 1.9 MB (/mammals 1.2 to 0.5 MB). At 390 the cards are full width, so no change there. 5 minutes. **Done** (bb121ce).
7. **Route prefetch**: in production each page fetched 1.1 to 3.5 MB of route data as links scrolled into view (/birds at 390: 685 requests, 3.5 MB). Species cards no longer prefetch. 5 minutes. **Done** (d8584c1). Nav and footer links: **proposed** (P6).
8. **Species schema image** pointed at Wikipedia's file redirect, not the photo on the page. 5 minutes. **Done** (f1295c2).
9. **Emoji as icons**: the pin on every species page, the eagle on the 404 page, the mammals headings and the "In Southport" menu items. 10 minutes. **Done** (7bc3e8d, 1d51542, b5865c4).
10. **Long titles and descriptions**: 62 titles over 65 characters (longest 113, /mammals) and 54 descriptions over 165 (longest 244). None missing or duplicated. **Proposed** (P1).
11. **Author "Ed"**: a named author with a biography in post bylines and in Person schema on blog, seasonal and species pages; the site does not say whether Ed is a persona. **Proposed** (P2), for Damian.
12. **Calendar sources**: 18 of 39 items show no source since the council rule. **Proposed** (P3).
13. **Main menu**: an "In Southport" dropdown of pubs, cafés and days out sits beside the species lists; the calendar and protected sites page are only inside "Nature & Coast". **Proposed** (P4).
14. **Sitemap dates**: 237 species pages carry generated dates (spread from 1 Nov 2025 to 28 Feb 2026) rather than edit dates. **Proposed** (P5).
15. **Mobile image weight on species lists**: 4.2 MB at 390 on a 1x screen, more on 3x phones. **Proposed** (P6, with prefetch).
16. **Header at 768**: the full menu wrapped to three lines and cut off the Visit Marshside button. The menu button now covers widths up to 1023 px; 1024 and up are unchanged. 5 minutes. **Done** (a03a3d7). The full-page screens at 768 were taken before this fix; `imp-nav-birds-*` show the header after it.
17. **Heading order**: h1 then h3 on the species lists and the 404 page. **Left**: minor, needs the filter panel restructured.
18. **IUCN links** answer 403 to scripts but open in a browser. **Left**.

Checked and fine: layout shift 0 to 0.005 everywhere; no sideways scroll at 1440, 1024, 768 or 390; every page has `lang="en"`, one h1 and a correct canonical; all 326 sitemap URLs return 200 with no redirects; no orphan pages; every JSON-LD block parses; no vague or empty link text; robots allows all and names the sitemap. JavaScript is 573 KB (176 KB gzipped) on the home page, mostly shared chunks; fonts 85 KB.

### Proposals (not built)
- **P1. Titles and descriptions.** Rewrite the 62 long titles to about 60 characters and the 54 long descriptions to about 155, mostly blog posts, so search results stop cutting them mid-phrase. About 2 to 3 hours of copy. Screenshot: `docs/freshen-2026-11/screens/imp-proposal-titles-1440.jpg` (mock-up of the cut results).
- **P2. The "Ed" byline.** Either say on the site that Ed is a persona and give schema an Organization author, or name the real author. 30 to 60 minutes once Damian decides. Screenshot: `imp-proposal-author-1440.jpg`.
- **P3. Re-source the calendar.** For the 18 items without a source, find the same timing on Natural England, BTO, RSPB or Wildlife Trust pages and cite it; otherwise name the council's nature calendar without a link, which the refined rule allows. About 2 to 3 hours. Screenshot: `imp-proposal-calendar-sources-1440.jpg`.
- **P4. Main menu.** Move the Southport Guide links to the footer's network block and put Month by month and Protected sites in the top level. A navigation change, about 45 minutes. Screenshots: `imp-proposal-nav-1440.jpg`, `imp-proposal-nav-390.jpg`.
- **P5. Sitemap dates.** Give unchecked species pages a real date (the data file's last change) instead of generated ones. 20 minutes, but it reverses a deliberate choice, so it is Damian's call. Screenshot: `imp-proposal-sitemap-1440.jpg`.
- **P6. Mobile data.** Cap image widths for list cards (a smaller `deviceSizes` set or a lower quality for thumbnails) and turn off prefetch on footer links. About 45 minutes plus a check of sharpness on phones. Screenshot: `imp-birds-390.jpg` (2.8 MB, kept out of the repo; in the job's scratch folder `imp\jpg`).

### Screens
Every changed page (37) was shot at 1440, 1024, 768 and 390 and checked; no sideways overflow at any width. To keep the commit under 10 MB, 31 JPEGs (8.6 MB) are committed under `docs/freshen-2026-11/screens/imp-*` (5c97433): the blog index, Birkdale Green Beach at all four widths, the calendar, protected sites, Knot, Golden Plover, mammals, the header at four widths, the privacy page on `privacy-wording` at four widths, the 404 page, advertise, Crosby and the six proposal screens. The full set is in the job's scratch folder.

## 11. Second review fixes

From the second independent review (`wildlife-review-2.md`), 11 Nov 2026, evening. Sources fetched the same evening: all 119 BTO BirdFacts pages, the BTO BoCC5 page, the RSPB Redpoll page, the council's nature calendar (last updated 12 August 2024), Ainsdale Beach, LNR, Crosby Beach, Crosby Coastal Park, Another Place, Enjoying Beaches Safely, Visiting our beaches and Find car parks pages, BDMLR, and John Dempsey's Green Sefton moth column (InYourArea, 20 July 2023).

**Commits:** f238a78 statuses, ac4fe27 calendar sources, 8da7aa4 council named again, a021a8d contrast, 34acd05 menu, 4692843 sweep repairs, 9cfcd76 hub, b31f837 privacy merge.

1. **Bird statuses (done).** 26 changed to the BTO's "UK Birds of Conservation Concern" line. Green to Amber: Marsh Harrier, Spotted Redshank, Greenshank, Sedge Warbler, Osprey, Whitethroat. Green to Red: Great Black-backed Gull. Green to none: Canada Goose (non-native, no BTO status; the page shows "Not assessed"). Amber to Red: Ringed Plover, Whimbrel, Goldeneye, Long-tailed Duck, Purple Sandpiper, Great Skua, Common Gull, Arctic Tern. Red to Amber: Eider, Kestrel, Redwing. Amber to Green: Mute Swan, Jack Snipe, Little Stint, Black Tern, Water Rail, Sand Martin, Swallow. Lesser Redpoll stays Red (the BTO's Redpoll page says it "is on the UK Red List"; RSPB Red). Status words in those species' text updated; the Skylark post said Amber and now says Red. The callout is one text, true for every bird: the BTO's list, BoCC5 (December 2021, 245 species) and the 2024 seabird addendum. None of the 26 species has `sources` or `factsChecked`, so none was added (that line claims numbers and season were checked too).
2. **Calendar sources (done).** All 39 items name a source. Of the 18 that had none, 14 name the council's nature calendar, 2 its Ainsdale Beach page, 1 (May) both, and the seals item the calendar plus a link to BDMLR; the 8 council facts shown with only a BTO or Natural England source list the calendar too. Council sources are plain text: `Source.url` is optional. "Even Ospreys" and "seal pups and adults ... keep people well away", as the calendar has them.
3. **Council named again (done, approved by the coordinating chat).** Every line ec672a7 and db4dd96 changed was checked against the council pages: 141 lines reworded and 71 added (8da7aa4: 212 added, 141 removed), plus the calendar's 2 entries in ac4fe27. The Ainsdale parking line no longer credits Natural England; the 988 ha, 22 miles, Wildlife and Countryside Act, Crosby lifeguard and planning-authority lines name the right body. 20 guide and 6 species source entries restored, unlinked; the official-page boxes, `sameAs` and records keep their Natural England links. White Satin now says what Dempsey's column says (not the unsourced 2021 and 2022 collapse); Freshfield is credited to Natural England, as the council's station list leaves it out.
4. **Contrast (done).** Before and after, headless Edge at 1440 over composited backgrounds: footer 3.51 to 7.57; species fact labels 3.15 to 6.27; stat-card labels and habitat tags 4.17 to 5.44; source lists, advertise VAT line and blog hero caption 4.49 to 5.97; blog related text 4.35 to 5.75; list chips 4.46 and 4.49 to 6.46 and 6.44; contact asterisk 3.41 to 5.74. 24 pages scanned: no pair under 4.5:1 (the white counts over the home page photos are not measurable this way).
5. **Desktop menu (done).** Nature & Coast and In Southport are disclosure buttons with `aria-expanded`: Enter or Space opens, Tab reaches all 14 items, Escape closes and returns focus, hover unchanged. Checked at 1440 and 1024.
6. **Sweep repairs (done).** 14 comma splices, the Marsh Helleborine and Fulmar meaning changes, and 39 verbless fragments joined with a colon or comma. The rest of the reviewer's estimated 70 are left, mostly short notes in tips and identification lines.
7. **Hub (done).** It now says each guide links to the managing body's page or, for Birkdale and Crosby, Natural England's record.
8. **Not done:** widening `tests/no-blocked-links.test.mjs` (parked with the six-organisations rule; the test is unchanged); the mobile menu button's `aria-expanded` and Escape (X3); m6 bat titles, m7 "should be in touch", m9 sitemap dates.
9. **Privacy merge (done).** `privacy-wording` (ca8fdc5) merged; the conflict kept `/75` and "November 2026". `/privacy` renders (200) with the branch wording.

**Checks:** `npx tsc --noEmit` 0; `npx eslint .` 0 errors, 2 warnings (as before); `node --test tests/*.test.mjs` 49 of 49; `next build` passed, 338 pages. No `sefton.gov.uk` URL or em dash added. Screens at 1440 and 390 are in the job's scratch folder, not the repo.


## 12. SEO

Checked 11 Nov 2026: the live site (older than `main`) and the dev server (port 3104) at `main` before and after the fixes. Every sitemap URL fetched without following redirects; title, description, canonical, robots and every JSON-LD block parsed and checked by page type; every FAQ question and answer and every breadcrumb name in the structured data matched against the page's own text (299 FAQ items and 959 crumbs, none missing). Commits `4b48419`, `c08aad2`, `ef464b5`, `ddcae13` and this report. Not pushed.

**Sitemap** `https://www.seftoncoastwildlife.co.uk/sitemap.xml`: 327 URLs (16 fixed pages, 11 guides and reference pages, 257 species, 43 posts).

| | URLs | 200 | Redirect | 404 | Noindex |
|---|---|---|---|---|---|
| Before (live) | 326 | 326 | 0 | 0 | 0 |
| Before (`main`, dev) | 326 | 326 | 0 | 0 | 0 |
| After (dev) | 327 | 327 | 0 | 0 | 0 |

The one added URL is `/disclosure`: indexable and linked from the footer, but missing. `/privacy` and `/terms` are noindex (since February 2026) and stay out.

**robots.txt** (unchanged): `User-Agent: *`, `Allow: /`, `Sitemap: https://www.seftoncoastwildlife.co.uk/sitemap.xml`. Nothing is disallowed, so CSS, JS and images can be fetched.

**Canonicals.** All 327 pages have one canonical: absolute, https, www, pointing at themselves. Query versions point at the clean URL and stay indexable: `/advertise?space=`, `/contact?topic=&space=`, `/birds?season=` (and the other lists' filters), `/blog?category=`. There is no pagination. `/privacy` and `/terms` are noindex with a self-canonical; no other page's canonical points at them. No canonical points at a redirect or a 404.

**Schema.**
- Species pages (257): `WebPage` (name, description, photo, breadcrumb, and `lastReviewed` on the 20 pages that print "checked on") about a `Taxon` (scientific name, the common name as `alternateName`, family and order as "At a Glance" shows them), plus `BreadcrumbList` and the printed FAQ. Before: an `Article` with a `Person` author "Ed" the page does not show, and Taxon properties schema.org does not have (`commonName`, `additionalProperty`). No status or species fact changed; the status is still printed on the page.
- Posts (43): `Article` with `datePublished` (the date shown) and now `dateModified` 2026-11-11 on the 38 posts whose words changed after publication (git, `e9b8d24` to `8da7aa4`). Not on the three unchanged since they went up (rabbits, pyramidal orchids, painted lady) or the two published on 11 Nov. `BreadcrumbList` added (Home > Blog > category, as shown). The image's made-up `width: 800` removed.
- `BreadcrumbList` added on every page that shows a trail: the four species lists, the blog index, the birdwatching guide, the ten `/nature` pages, `/seasonal`, the four seasonal guides and the calendar. A test checks that every template with a trail has one.
- Organization and WebSite once, on the home page. The Organization `logo` pointed at `/og-default.png`, which does not exist (404 live and on dev); removed.
- Article author: the birdwatching guide named "Ed", whom that page does not show; it, the calendar and the protected sites page now give the site (Organization). Posts and seasonal guides keep "Ed", who is shown there (P2 is still Damian's call).
- Site guides keep `TouristAttraction` or `Place` with the address and telephone the managing body gives (and Marshside's coordinates). No rating or review markup anywhere. No Event markup: the site lists no dated events.
- After: 327 pages, 386 blocks, 0 parse errors.

**Titles and descriptions.** Fixed: the three bat pages read "on the Sefton Coast" (was "Noctule Bat at the Sefton Coast"; review m6); the calendar and the June post had the site name twice; the June post said "Right Now" in November (now "Sefton Coast Wildlife in June 2026: What to Look For"). Meta descriptions over 190 characters cut to about 160 on 17 pages (the four lists, `/nature`, the ten guides, the calendar, the birdwatching guide), keeping each source line ("from the RSPB's own page", "from Sefton Council's pages"). Post descriptions use the summary's whole sentences up to 160 characters where that leaves at least 120 (12 posts); the summary on the blog index is unchanged. No duplicate titles or descriptions. Left as they are under the traffic-first rule: 59 titles over 65 characters (long post and guide titles plus " | Sefton Coast Wildlife") and 22 post descriptions over 165 that cannot be cut at a sentence. Dated post titles ("June 2026", "April 2026") are the posts' own dates and stay.

**Sitemap lastmod** (review m9 and P5). Before: 237 species pages carried dates spread by a formula from 1 Nov 2025 to 28 Feb 2026, and the lists, seasonal guides, blog index, contact page and the 38 posts edited on 11 Nov kept dates from October 2025 to September 2026. Now each URL carries the day its words last changed (git): 324 on 2026-11-11 (all 257 species pages, as 256 entries changed that day and every one shares the changed template; every fixed page and guide; 40 posts) and three posts their own June and July dates. The dates live in `lib/seo.ts` (`PAGE_UPDATED`, `SPECIES_PAGES_UPDATED`); a page with no known date gets no lastmod. Nothing uses the build date.

**Advertise page** (coordinator's brief: URL, title and H1 not changed). In the sitemap, self-canonical, indexable (no robots tag). Title "Advertise | Sefton Coast Wildlife", H1 "Advertise on Sefton Coast Wildlife". This is not the restored ranking form the brief describes: before the advertising build (`ff21b92`) the title was "Advertise on Sefton Coast Wildlife | Sefton Coast Network", shown with the site suffix as "... | Sefton Coast Network | Sefton Coast Wildlife". Left for the coordinating chat. The site's own link text to `/advertise` is unchanged ("Advertise", "Advertise with the Sefton Coast Network").

**Found, not changed.** The bare domain takes two hops on the live site: `http://seftoncoastwildlife.co.uk` answers 308 to https, then 307 to www (path kept). The 307 comes from the Vercel domain settings, before `next.config.ts` runs; set it to a permanent redirect there. The six-organisations checks were not run: the rule is parked (playbook 1a), and `tests/no-blocked-links.test.mjs` is unchanged.

**Tonight's URLs:** 8 new (2 posts, 5 guides and reference pages, the calendar), 122 with changed words or facts, 197 with punctuation or template changes only. Full list: `wildlife-seo-urls.md` in the job's notes folder.

**Checks.** tsc 0. eslint 0 errors, 2 warnings (as before). Tests 57 of 57, 8 new in `tests/seo.test.mjs` (breadcrumbs, descriptions, dates, species titles and schema properties, post `dateModified`, sitemap URLs and dates, a BreadcrumbList on every template with a trail). `next build` passes, 338 pages.

## Traffic: what to do next

Ranked by the visits each is likely to bring. No keyword tool or Search Console data (Semrush expired); the terms are the plain phrasing people use. Every fact in a new post comes from an official or primary page fetched at the time, as the playbook says. Checked against the site on 11 Nov 2026.

1. **Search terms not covered yet**
   1. "starling murmuration southport", "where to see a starling murmuration merseyside": the species page (`/birds/common-starling`, "Common Starling at Marshside RSPB") mentions winter murmurations near Southport and Marshside in passing; there is no post. In season now (October to March): publish in November from RSPB and BTO pages, and check the species page's unsourced "near Southport" line at the same time.
   2. "hen harrier marshside", "birds of prey southport": winter raptors on the Ribble marshes (Hen Harrier, Merlin, Peregrine, Marsh Harrier). Species pages only; the only raptor post is the Short-eared Owl. RSPB and BTO; December or January.
   3. "high tide birdwatching southport", "marshside high tide": how the tide pushes waders to the roosts, which heights matter and where to stand. The guides name the roosts at each site and the Sanderling post covers beach roosts, but nothing explains reading the tide table. RSPB and Natural England.
   4. "how to report bird sightings merseyside", "birdtrack": two paragraphs in the April swallows post only. A short post on BirdTrack, iRecord and the county recorders serves students and researchers. BTO, Biological Records Centre and the recorders' own pages.
   5. "hesketh out marsh managed realignment": the guide gives one paragraph on how the marsh was made. A post for students from RSPB, Environment Agency and Natural England pages.
2. **Pages one edit away**
   1. `/nature/martin-mere` for "martin mere swan feed", "whooper swans martin mere": the guide already covers the Whooper Swans. Add WWT's swan feed times and season, checked on WWT's page at the time, rather than a new post.
   2. The monthly posts stopped after September. Two carry 2026 in the title (June, late May) and five in the address (May, late May, June, July, August). Link each to its month in the calendar (`/seasonal/month-by-month#june` and so on; the anchors exist) and the calendar month back to the post, so they stay useful in 2027. Next year, refresh a month's post in place rather than writing a second one; the URL stays.
   3. The species checklist: 237 species pages have no sources yet. Each one checked gains a "checked on" line, `lastReviewed` in its schema and a fresh lastmod. Start with the species people look for most: red squirrel, natterjack toad, sand lizard and grey seal (none checked yet), then the birds with their own posts (little tern, oystercatcher, skylark).
   4. The 22 post summaries over 165 characters are cut short in results. A short search description on each (the summary on the blog index stays) would fix that without touching the titles.
   5. The Vercel bare-domain redirect to permanent (above).
   6. Watch in Search Console: the three bat titles and the June post title changed tonight; the 59 long titles were left.
3. **Posts a month**: two a month, one species or site and one seasonal (published two to three weeks before the season it covers), plus updating the calendar month as it comes round and continuing the species checklist. Going back to four a month from March to June, the months of natterjacks, orchids and terns, is worth it if the time is there. Rhythm so far: 6 to 9 a month March to June 2026, 4 in July, 2 in August and September, none in October, 2 in November (this job).
