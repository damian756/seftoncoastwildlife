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
