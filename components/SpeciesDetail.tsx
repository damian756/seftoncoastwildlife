import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";
import { WikiImage } from "@/components/WikiImage";
import { SpeciesJsonLd } from "@/components/SpeciesJsonLd";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals",
};

const statusConfig = {
  red: {
    label: "Red List",
    bg: "bg-red-600",
    text: "text-white",
    callout: "bg-red-50 border-red-200",
    calloutText: "text-red-900",
    calloutHead: "text-red-700",
  },
  amber: {
    label: "Amber List",
    bg: "bg-amber-500",
    text: "text-white",
    callout: "bg-amber-50 border-amber-200",
    calloutText: "text-amber-900",
    calloutHead: "text-amber-700",
  },
  green: {
    label: "Green List",
    bg: "bg-emerald-600",
    text: "text-white",
    callout: "bg-emerald-50 border-emerald-200",
    calloutText: "text-emerald-900",
    calloutHead: "text-emerald-700",
  },
  unknown: {
    label: "Status Unknown",
    bg: "bg-gray-400",
    text: "text-white",
    callout: "bg-gray-50 border-gray-200",
    calloutText: "text-gray-800",
    calloutHead: "text-gray-600",
  },
};

const difficultyLabel: Record<string, string> = {
  easy: "Easy to see",
  moderate: "Moderate",
  specialist: "Specialist",
};

const difficultyColor: Record<string, string> = {
  easy: "text-emerald-700 bg-emerald-50 border-emerald-200",
  moderate: "text-amber-700 bg-amber-50 border-amber-200",
  specialist: "text-red-700 bg-red-50 border-red-200",
};

interface SpeciesDetailProps {
  category: SpeciesCategory;
  species: Species;
  related: Species[];
  slug: string;
}

export function SpeciesDetail({ category, species, related, slug }: SpeciesDetailProps) {
  const label = categoryLabels[category];
  const status = species.conservationStatus ?? "unknown";
  const sc = statusConfig[status];

  const hasAtAGlance =
    species.order ||
    species.family ||
    species.ukPopulation ||
    species.seftonPopulation ||
    species.diet ||
    (species.habitat && species.habitat.length > 0);

  return (
    <>
      {/* JSON-LD structured data */}
      <SpeciesJsonLd
        species={species}
        category={category}
        slug={slug}
      />

      <article>
        {/* ── HERO HEADER ── */}
        <div className="bg-[var(--forest)] text-white">
          <div className="mx-auto max-w-5xl px-4 py-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/50 mb-5 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white/80 transition">Home</Link>
              <span>/</span>
              <Link href={`/${category}`} className="hover:text-white/80 transition">{label}</Link>
              <span>/</span>
              <span className="text-white/80">{species.commonName}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Left: name + pills */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {species.commonName}
                </h1>
                <p className="text-lg italic text-white/60 mt-1">{species.scientificName}</p>

                {/* Status + difficulty pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {species.conservationStatus && species.conservationStatus !== "unknown" && (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${sc.bg} ${sc.text}`}>
                      UK {sc.label}
                    </span>
                  )}
                  {species.difficulty && (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColor[species.difficulty]}`}>
                      {difficultyLabel[species.difficulty]}
                    </span>
                  )}
                  {species.shortLocation && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">
                      📍 {species.shortLocation}
                    </span>
                  )}
                </div>

                {/* Quick facts strip */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/8 rounded-lg p-3 border border-white/10">
                    <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Season</div>
                    <div className="text-sm text-white/90">{species.seasonalPresence}</div>
                  </div>
                  {species.bestTimeOfDay && (
                    <div className="bg-white/8 rounded-lg p-3 border border-white/10">
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Best time of day</div>
                      <div className="text-sm text-white/90">{species.bestTimeOfDay}</div>
                    </div>
                  )}
                  {species.seftonPopulation && (
                    <div className="bg-white/8 rounded-lg p-3 border border-white/10">
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">Sefton Coast</div>
                      <div className="text-sm text-white/90">{species.seftonPopulation}</div>
                    </div>
                  )}
                  {species.ukPopulation && (
                    <div className="bg-white/8 rounded-lg p-3 border border-white/10">
                      <div className="text-xs uppercase tracking-wider text-white/40 mb-0.5">UK population</div>
                      <div className="text-sm text-white/90">{species.ukPopulation}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Wikipedia image — fetched client-side, always available */}
              {species.wikipediaTitle && (
                <div className="lg:w-72 flex-shrink-0">
                  <WikiImage title={species.wikipediaTitle} alt={species.commonName} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">

          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Overview</h2>
            <div className="prose prose-slate max-w-none text-[var(--slate)] leading-relaxed">
              <p>{species.description}</p>
            </div>
          </section>

          {/* At a Glance table */}
          {hasAtAGlance && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">At a Glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {species.order && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)] w-40">Order</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.order}</td>
                      </tr>
                    )}
                    {species.family && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">Family</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.family}</td>
                      </tr>
                    )}
                    {species.habitat && species.habitat.length > 0 && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">Habitat</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.habitat.join(" · ")}</td>
                      </tr>
                    )}
                    {species.diet && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">Diet</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.diet}</td>
                      </tr>
                    )}
                    {species.ukPopulation && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">UK population</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.ukPopulation}</td>
                      </tr>
                    )}
                    {species.seftonPopulation && (
                      <tr className="border-b border-[var(--dune)]">
                        <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">Sefton Coast</td>
                        <td className="py-2.5 text-[var(--slate)]">{species.seftonPopulation}</td>
                      </tr>
                    )}
                    <tr className="border-b border-[var(--dune)]">
                      <td className="py-2.5 pr-6 font-medium text-[var(--forest)]">Conservation</td>
                      <td className="py-2.5">
                        {species.conservationStatus && species.conservationStatus !== "unknown" ? (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${sc.bg} ${sc.text}`}>
                            UK {sc.label}
                          </span>
                        ) : (
                          <span className="text-[var(--slate)]">Not assessed</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Where to see */}
          <section>
            <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Where to See It</h2>
            <p className="text-[var(--slate)] leading-relaxed">{species.whereToSee}</p>
            {species.shortLocation && (
              <div className="mt-4">
                {species.shortLocation.includes("Marshside") && (
                  <Link href="/nature/marshside-rspb" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition">
                    → Marshside RSPB reserve guide
                  </Link>
                )}
                {species.shortLocation.includes("Formby") && (
                  <Link href="/nature/sefton-coast" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition">
                    → Formby & Sefton Coast guide
                  </Link>
                )}
                {species.shortLocation.includes("Formby") && category === "mammals" && (
                  <a
                    href="https://www.formbyguide.co.uk/red-squirrels-formby"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition"
                  >
                    → Visiting the Formby red squirrel reserve — practical guide
                  </a>
                )}
                {species.shortLocation.includes("Ainsdale") && (
                  <Link href="/nature/sefton-coast" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--marsh)] hover:text-[var(--forest)] transition">
                    → Ainsdale NNR & Sefton Coast guide
                  </Link>
                )}
              </div>
            )}
          </section>

          {/* Identification */}
          {species.identification && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Identification</h2>
              <p className="text-[var(--slate)] leading-relaxed">{species.identification}</p>
            </section>
          )}

          {/* Tips */}
          {species.tips && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Viewing & Photography Tips</h2>
              <div className="bg-[var(--dune)]/40 rounded-xl p-5 border border-[var(--dune)]">
                <p className="text-[var(--slate)] leading-relaxed">{species.tips}</p>
              </div>
            </section>
          )}

          {/* Conservation callout */}
          {species.conservationStatus && species.conservationStatus !== "unknown" && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Conservation Status</h2>
              <div className={`rounded-xl p-5 border ${sc.callout}`}>
                <h3 className={`font-semibold text-sm mb-1 ${sc.calloutHead}`}>
                  UK {sc.label}
                </h3>
                <p className={`text-sm leading-relaxed ${sc.calloutText}`}>
                  {category === "birds" && status === "red" && "This species is on the UK Red List for Birds (BoCC5), indicating serious concern about its population decline or unfavourable conservation status. Monitoring this species on the Sefton Coast contributes to national population tracking."}
                  {category === "birds" && status === "amber" && "This species is on the UK Amber List for Birds (BoCC5), indicating moderate concern. Population monitoring and habitat management remain important for its continued recovery."}
                  {category === "birds" && status === "green" && "This species is on the UK Green List, indicating a healthy population status in the UK context. It remains an important component of Sefton Coast biodiversity."}
                  {category !== "birds" && status === "red" && "This species is of serious conservation concern in the UK. Its presence on the Sefton Coast is important for local and national monitoring and habitat management."}
                  {category !== "birds" && status === "amber" && "This species is of moderate conservation concern. Population monitoring and habitat management on the Sefton Coast support its continued recovery."}
                  {category !== "birds" && status === "green" && "This species has a favourable conservation status in the UK and remains an important part of Sefton Coast biodiversity."}
                </p>
                {species.externalLinks && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    {species.externalLinks.bto && (
                      <a href={species.externalLinks.bto} target="_blank" rel="noopener noreferrer" className={`text-xs font-medium underline ${sc.calloutHead}`}>BTO species page →</a>
                    )}
                    {species.externalLinks.rspb && (
                      <a href={species.externalLinks.rspb} target="_blank" rel="noopener noreferrer" className={`text-xs font-medium underline ${sc.calloutHead}`}>RSPB species guide →</a>
                    )}
                    {species.externalLinks.iucn && (
                      <a href={species.externalLinks.iucn} target="_blank" rel="noopener noreferrer" className={`text-xs font-medium underline ${sc.calloutHead}`}>IUCN Red List →</a>
                    )}
                    {species.externalLinks.nbnatlas && (
                      <a href={species.externalLinks.nbnatlas} target="_blank" rel="noopener noreferrer" className={`text-xs font-medium underline ${sc.calloutHead}`}>NBN Atlas records →</a>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* FAQ */}
          {species.faq && species.faq.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {species.faq.map((item, i) => (
                  <div key={i} className="border border-[var(--dune)] rounded-xl p-5 bg-white">
                    <h3 className="font-semibold text-[var(--forest)] mb-2">{item.question}</h3>
                    <p className="text-sm text-[var(--slate)] leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related species */}
          {related.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-[var(--forest)] mb-4 pb-2 border-b border-[var(--dune)]">Related Species</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/${category}/${r.id}`}
                    className="block p-4 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] hover:shadow-sm transition group"
                  >
                    <div className="font-medium text-[var(--forest)] group-hover:text-[var(--marsh)] transition">{r.commonName}</div>
                    <div className="text-xs italic text-[var(--slate)]/60 mt-0.5">{r.scientificName}</div>
                    {r.seasonalPresence && (
                      <div className="text-xs text-[var(--slate)]/50 mt-1.5 leading-snug">{r.seasonalPresence.split('.')[0]}</div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="bg-[var(--forest)] rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl font-bold mb-2">Plan your visit to the Sefton Coast</h2>
            <p className="text-white/70 text-sm mb-5 max-w-xl">
              Marshside RSPB, Formby pinewoods, Ainsdale NNR — practical guides to getting there, what to bring, and the best spots for each season.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/birdwatching-guide" className="inline-flex items-center gap-2 bg-white text-[var(--forest)] text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[var(--sand)] transition">
                Birdwatching guide →
              </Link>
              <Link href="/nature/marshside-rspb" className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition">
                Marshside RSPB
              </Link>
              <Link href={`/${category}`} className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition">
                All {label} →
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
