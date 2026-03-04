import Link from "next/link";
import type { Metadata } from "next";
import { getAllSpecies } from "@/lib/species";
import { getWikipediaImage } from "@/lib/wikipedia";
import { BLOG_POSTS } from "@/content/blog/posts";
import { PhotoGallery } from "@/components/PhotoGallery";

const title = "Sefton Coast Wildlife — Birds, Nature & Wildlife Guide";
const description =
  "Independent guide to wildlife on the Sefton Coast — Marshside RSPB, bird species database, insects, plants and mammals from Southport to Formby.";
const url = "https://www.seftoncoastwildlife.co.uk";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.seftoncoastwildlife.co.uk/#website",
      url: "https://www.seftoncoastwildlife.co.uk",
      name: "Sefton Coast Wildlife",
      description: "Independent guide to wildlife on the Sefton Coast — birds, insects, plants and mammals from Southport to Formby.",
      publisher: { "@id": "https://www.seftoncoastwildlife.co.uk/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": "https://www.seftoncoastwildlife.co.uk/#organization",
      name: "Sefton Coast Wildlife",
      url: "https://www.seftoncoastwildlife.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.seftoncoastwildlife.co.uk/og-default.png",
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://www.southportguide.co.uk",
        "https://www.formbyguide.co.uk",
        "https://www.seftonlinks.com",
        "https://seftoncoast.network",
        "https://www.linkedin.com/company/churchtownmedia",
        "https://churchtownmedia.co.uk",
      ],
    },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function HomePage() {
  const birdCount = getAllSpecies("birds").length;
  const insectCount = getAllSpecies("insects").length;
  const plantCount = getAllSpecies("plants").length;
  const mammalCount = getAllSpecies("mammals").length;
  const totalCount = birdCount + insectCount + plantCount + mammalCount;

  // Fetch 3 recent blog post hero images
  const recentPosts = BLOG_POSTS.slice(-3).reverse();
  const blogImages = await Promise.all(
    recentPosts.map((p) =>
      p.heroLocalSrc
        ? Promise.resolve(p.heroLocalSrc)
        : p.heroWikipediaTitle != null
          ? getWikipediaImage(p.heroWikipediaTitle).then((img) => img?.src ?? null)
          : Promise.resolve(null)
    )
  );

  const speciesCategories = [
    {
      href: "/birds",
      label: "Birds",
      count: birdCount,
      desc: "Waders, wildfowl, raptors and passerines",
      localImage: "/images/species/birds/dunlin.jpg",
    },
    {
      href: "/insects",
      label: "Insects",
      count: insectCount,
      desc: "Butterflies, moths and invertebrates",
      localImage: "/images/species/insects/six-spot-burnet-moth.jpg",
    },
    {
      href: "/plants",
      label: "Plants",
      count: plantCount,
      desc: "Saltmarsh and dune flora",
      localImage: "/images/species/plants/sea-holly.jpg",
    },
    {
      href: "/mammals",
      label: "Mammals",
      count: mammalCount,
      desc: "Including red squirrels at Formby",
      localImage: "/images/species/mammals/red-squirrel.jpg",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* Left panel */}
          <div className="bg-[var(--forest)] flex flex-col justify-center px-8 md:px-14 py-16 lg:py-20 relative z-10">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-4">
              Marshside · Ainsdale · Formby
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Wildlife on the<br />
              <span className="text-[var(--gold)]">Sefton Coast.</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              {totalCount}+ species recorded. An independent guide to the birds, insects, plants
              and mammals of the marshes, reserves and coastline from Southport to Formby.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nature/marshside-rspb"
                className="rounded-lg bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--forest)] hover:opacity-90 transition"
              >
                Marshside RSPB →
              </Link>
              <Link
                href="/birds"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Species database
              </Link>
            </div>
          </div>

          {/* Right panel — hero image */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden bg-[var(--forest)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/species/birds/pink-footed-goose.jpg"
              alt="Pink-footed Geese in flight over the Sefton Coast"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--forest)]/40 via-transparent to-transparent lg:from-transparent" />
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 lg:h-10">
            <path d="M0 40 Q360 0 720 20 Q1080 40 1440 10 L1440 40 Z" fill="var(--sand)" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[var(--dune)] border-b border-[var(--foam)]/30">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-wrap gap-6 md:gap-10 items-center justify-center md:justify-start text-sm text-[var(--slate)]">
            <span className="flex items-center gap-2">
              <strong className="text-[var(--forest)] font-bold">{totalCount}+</strong> species recorded
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--forest)] font-bold">80,000+</strong> Pink-footed Geese (peak winter)
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--forest)] font-bold">Free entry</strong> to Marshside RSPB
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--forest)] font-bold">67km</strong> of protected coastline
            </span>
          </div>
        </div>
      </section>

      {/* ── SPECIES DATABASE ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Species database
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--forest)] mb-3">
          What lives here
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mb-8 leading-relaxed">
          From Pink-footed Geese arriving from Iceland in October to Red Squirrels in the Formby pinewoods — the Sefton Coast holds some of the most important wildlife in northwest England.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {speciesCategories.map(({ href, label, count, desc, localImage }) => (
            <Link
              key={href}
              href={href}
              className="card-hover group relative rounded-2xl overflow-hidden border border-[var(--dune)] bg-white block"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[var(--dune)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={localImage}
                  alt={label}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-2xl font-bold text-white">
                  {count}
                </span>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--forest)] mb-0.5">{label}</h3>
                <p className="text-sm text-[var(--slate)]/80 leading-snug">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NATURE & COAST ───────────────────────────────────── */}
      <section className="bg-[var(--dune)] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
            Reserves & guides
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--forest)] mb-8">
            Nature & coast
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                href: "/nature/marshside-rspb",
                title: "Marshside RSPB",
                desc: "Free entry. Managed lagoons, Avocets, and 80,000+ Pink-footed Geese in winter. The best birdwatching in the North West.",
                tag: "Reserve guide",
              },
              {
                href: "/nature/sefton-coast",
                title: "The Sefton Coast",
                desc: "67km of dunes, slacks, pinewoods and saltmarsh — one of England's most significant coastal wildlife habitats.",
                tag: "Habitat overview",
              },
              {
                href: "/birdwatching-guide",
                title: "Birdwatching Guide",
                desc: "Best spots by season, what to bring, and how to get started — from a birder who has watched these marshes for decades.",
                tag: "Practical guide",
              },
              {
                href: "/seasonal",
                title: "Seasonal Guides",
                desc: "Pink-footed Geese, wader migration, breeding birds and winter wildfowl — when to come and what to expect.",
                tag: "4 guides",
              },
            ].map(({ href, title, desc, tag }) => (
              <Link
                key={href}
                href={href}
                className="card-hover group block rounded-2xl border border-[var(--foam)]/40 bg-white p-5 hover:border-[var(--marsh)]/50"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--marsh)] bg-[var(--marsh)]/10 px-2 py-0.5 rounded-full mb-3">
                  {tag}
                </span>
                <h3 className="font-semibold text-[var(--forest)] mb-2 group-hover:text-[var(--marsh)] transition">
                  {title}
                </h3>
                <p className="text-sm text-[var(--slate)]/80 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
              From the blog
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--forest)]">
              Ed&apos;s notes
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition hidden sm:block"
          >
            All posts →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-hover group block rounded-2xl border border-[var(--dune)] bg-white overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden bg-[var(--dune)]">
                {blogImages[i] ? (
                  <img
                    src={blogImages[i]!}
                    alt={post.heroAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--marsh)] to-[var(--forest)]" />
                )}
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--marsh)]">
                  {post.categoryLabel}
                </span>
                <h3 className="mt-1 font-semibold text-[var(--forest)] leading-snug mb-2 group-hover:text-[var(--marsh)] transition">
                  {post.title}
                </h3>
                <p className="text-xs text-[var(--slate)]/60">{formatDate(post.date)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition"
          >
            All posts →
          </Link>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="bg-[var(--dune)] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
                From the reserve
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--forest)] mb-1">
                Photos from Marshside
              </h2>
              <p className="text-[var(--slate)] text-sm">Real shots. No stock, no AI. Click any photo to enlarge.</p>
            </div>
            <Link
              href="/nature/marshside-rspb"
              className="text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition hidden sm:block"
            >
              Reserve guide →
            </Link>
          </div>
          <PhotoGallery
            photos={[
              { src: "/images/reserves/marshside/hero-coastal-reflection.jpg", alt: "Tidal pool reflection on the Marshside coastal path", caption: "The coastal saltmarsh path at Marshside — sky reflected in a tidal pool." },
              { src: "/images/reserves/marshside/nels-hide-lifestyle.jpg", alt: "Birdwatcher in Nel's Hide with flask and telephoto lens", caption: "Nel's Hide — bring a flask. No café on site." },
              { src: "/images/reserves/marshside/coastal-path-walk.jpg", alt: "Dog walker on the Marshside coastal saltmarsh path", caption: "The coastal path looking north — big estuary sky, flat marsh." },
              { src: "/images/reserves/marshside/dog-in-water.jpg", alt: "Black Labrador in a tidal pool on the Marshside coastal path", caption: "Dogs love this path. Keep them on leads near the saltmarsh." },
              { src: "/images/reserves/marshside/nels-hide-exterior.jpg", alt: "Nel's Hide exterior — RSPB Marshside", caption: "Nel's Hide from the reserve path — corrugated metal, wooden decking." },
              { src: "/images/reserves/marshside/nels-hide-interior.jpg", alt: "Inside Nel's Hide — viewing shelf and windows over the marsh", caption: "Inside Nel's Hide — blue chairs, viewing shelf, windows over the scrape." },
              { src: "/images/reserves/marshside/halfway-viewpoint.jpg", alt: "Halfway Viewpoint at Marshside RSPB", caption: "Halfway Viewpoint — Nel's Hide visible ahead on the path." },
              { src: "/images/reserves/marshside/junction-viewpoint-bench.jpg", alt: "Bench at the Junction Viewpoint, Marshside RSPB", caption: "Junction Viewpoint bench — looking out over the flooded winter marsh." },
              { src: "/images/reserves/marshside/car-park-pricing.jpg", alt: "RSPB Marshside car park pricing sign", caption: "Car park: £1.50 up to 2hrs, £3 over 2hrs. RSPB members free." },
              { src: "/images/reserves/marshside/coastal-driftwood.jpg", alt: "Driftwood on the Marshside coastal strandline", caption: "Driftwood on the strandline — Ribble Estuary brings in plenty." },
              { src: "/images/reserves/marshside/coastal-timber-shell.jpg", alt: "Old sea-defence timber on the Marshside foreshore", caption: "Barnacle-encrusted timber — remnants of old sea defences." },
              { src: "/images/reserves/marshside/memorial-bench-plaque.jpg", alt: "Memorial plaque for Stan and Peggy Scott, Marshside RSPB", caption: "In Memory of Stan and Peggy Scott — Founder Members, North Cheshire Group RSPB 1976–1999." },
            ]}
          />
          <div className="mt-5 sm:hidden text-center">
            <Link href="/nature/marshside-rspb" className="text-sm text-[var(--marsh)] font-medium">Reserve guide →</Link>
          </div>
        </div>
      </section>

      {/* ── NETWORK BANNER ───────────────────────────────────── */}
      <section className="bg-[var(--forest)] text-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-2">
            Sefton Coast Network
          </p>
          <p className="text-white/80 text-sm max-w-2xl mb-5">
            Also from Churchtown Media — local guides covering the wider Sefton Coast.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { href: "https://www.southportguide.co.uk", label: "SouthportGuide" },
              { href: "https://www.formbyguide.co.uk", label: "FormbyGuide" },
              { href: "https://www.seftonlinks.com", label: "SeftonLinks" },
              { href: "https://seftoncoast.network", label: "SeftonCoast.network" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 rounded-lg px-4 py-2 text-white/70 hover:text-white hover:border-white/40 transition"
              >
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
