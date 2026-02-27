"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";
import { classifySeason, type SeasonTag } from "@/lib/season";

function SpeciesCardImage({ species }: { species: Species }) {
  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    const title = species.wikipediaTitle ?? species.commonName;
    let cancelled = false;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (cancelled || !data) return;
        const base = data.originalimage?.source ?? data.thumbnail?.source;
        if (base) setThumb(base.replace(/\/\d+px-([^/]+)$/, "/200px-$1"));
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [species.id, species.wikipediaTitle, species.commonName]);

  if (!thumb) return null;
  return (
    <div className="aspect-[4/3] overflow-hidden bg-[var(--dune)]">
      <img
        src={thumb}
        alt={species.commonName}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        loading="lazy"
      />
    </div>
  );
}

const GROUP_CONFIG: Record<string, { label: string; icon: string }> = {
  mammal:    { label: "Mammals",    icon: "🐾" },
  reptile:   { label: "Reptiles",   icon: "🦎" },
  amphibian: { label: "Amphibians", icon: "🐸" },
};
const GROUP_ORDER = ["mammal", "reptile", "amphibian"];

const statusConfig = {
  red: { label: "Red", bg: "bg-red-600", text: "text-white", pill: "bg-red-100 text-red-800 border-red-200" },
  amber: { label: "Amber", bg: "bg-amber-500", text: "text-white", pill: "bg-amber-100 text-amber-800 border-amber-200" },
  green: { label: "Green", bg: "bg-emerald-600", text: "text-white", pill: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  unknown: { label: "", bg: "", text: "", pill: "" },
};

type StatusFilter = "all" | "red" | "amber" | "green";

type SortOption = "default" | "alpha" | "rarity" | "season" | "scientific";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default",    label: "Default" },
  { value: "alpha",      label: "A–Z (common name)" },
  { value: "rarity",     label: "Rarity (Red first)" },
  { value: "season",     label: "Season (year-round first)" },
  { value: "scientific", label: "Scientific name (A–Z)" },
];

const STATUS_ORDER: Record<string, number> = { red: 0, amber: 1, green: 2, unknown: 3 };

const SEASON_ORDER: Record<string, number> = {
  "year-round": 0,
  winter: 1,
  summer: 2,
  passage: 3,
  spring: 4,
  autumn: 5,
};

interface SeasonOption {
  value: SeasonTag | "all";
  label: string;
  pillClass: string;
}

const birdSeasonOptions: SeasonOption[] = [
  { value: "all", label: "All seasons", pillClass: "bg-[var(--dune)] text-[var(--slate)] border-[var(--foam)]" },
  { value: "year-round", label: "Year-round", pillClass: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { value: "winter", label: "Winter visitor", pillClass: "bg-sky-100 text-sky-800 border-sky-200" },
  { value: "summer", label: "Summer visitor", pillClass: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "passage", label: "Passage", pillClass: "bg-slate-100 text-slate-700 border-slate-200" },
];

const insectSeasonOptions: SeasonOption[] = [
  { value: "all", label: "All seasons", pillClass: "bg-[var(--dune)] text-[var(--slate)] border-[var(--foam)]" },
  { value: "spring", label: "Spring (Mar–May)", pillClass: "bg-lime-100 text-lime-800 border-lime-200" },
  { value: "summer", label: "Summer (Jun–Aug)", pillClass: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "autumn", label: "Autumn (Sep–Oct)", pillClass: "bg-orange-100 text-orange-800 border-orange-200" },
];

const plantSeasonOptions: SeasonOption[] = [
  { value: "all", label: "All", pillClass: "bg-[var(--dune)] text-[var(--slate)] border-[var(--foam)]" },
  { value: "year-round", label: "Year-round", pillClass: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { value: "spring", label: "Spring flowering", pillClass: "bg-lime-100 text-lime-800 border-lime-200" },
  { value: "summer", label: "Summer flowering", pillClass: "bg-amber-100 text-amber-800 border-amber-200" },
  { value: "autumn", label: "Autumn flowering", pillClass: "bg-orange-100 text-orange-800 border-orange-200" },
];

const seasonOptionsByCategory: Partial<Record<SpeciesCategory, SeasonOption[]>> = {
  birds: birdSeasonOptions,
  insects: insectSeasonOptions,
  plants: plantSeasonOptions,
};

interface SpeciesListClientProps {
  category: SpeciesCategory;
  species: Species[];
}

export function SpeciesListClient({ category, species }: SpeciesListClientProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [seasonFilter, setSeasonFilter] = useState<SeasonTag | "all">("all");
  const [habitatFilter, setHabitatFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const seasonOptions = seasonOptionsByCategory[category] ?? null;

  const habitats = useMemo(
    () => ["all", ...Array.from(new Set(species.flatMap((s) => s.habitat ?? []))).sort()],
    [species]
  );

  const filtered = useMemo(() => {
    const result = species.filter((s) => {
      if (query) {
        const q = query.toLowerCase();
        if (
          !s.commonName.toLowerCase().includes(q) &&
          !s.scientificName.toLowerCase().includes(q)
        ) return false;
      }
      if (statusFilter !== "all" && s.conservationStatus !== statusFilter) return false;
      if (habitatFilter !== "all" && !s.habitat?.includes(habitatFilter)) return false;
      if (seasonFilter !== "all") {
        const tag = classifySeason(s.seasonalPresence, category);
        if (tag !== seasonFilter) return false;
      }
      return true;
    });

    if (sortBy === "default") return result;

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "alpha":
          return a.commonName.localeCompare(b.commonName);
        case "rarity": {
          const ra = STATUS_ORDER[a.conservationStatus ?? "unknown"] ?? 3;
          const rb = STATUS_ORDER[b.conservationStatus ?? "unknown"] ?? 3;
          return ra !== rb ? ra - rb : a.commonName.localeCompare(b.commonName);
        }
        case "season": {
          const sa = SEASON_ORDER[classifySeason(a.seasonalPresence, category) ?? ""] ?? 99;
          const sb = SEASON_ORDER[classifySeason(b.seasonalPresence, category) ?? ""] ?? 99;
          return sa !== sb ? sa - sb : a.commonName.localeCompare(b.commonName);
        }
        case "scientific":
          return a.scientificName.localeCompare(b.scientificName);
        default:
          return 0;
      }
    });
  }, [species, query, statusFilter, seasonFilter, habitatFilter, category, sortBy]);

  const hasActiveFilter =
    query !== "" || statusFilter !== "all" || seasonFilter !== "all" || habitatFilter !== "all" || sortBy !== "default";

  function clearAll() {
    setQuery("");
    setStatusFilter("all");
    setSeasonFilter("all");
    setHabitatFilter("all");
    setSortBy("default");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Search */}
      <div className="relative mb-5">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--slate)]/40"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          placeholder={`Search ${species.length} ${category}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[var(--dune)] bg-white text-sm text-[var(--slate)] placeholder:text-[var(--slate)]/40 focus:outline-none focus:border-[var(--marsh)] focus:ring-1 focus:ring-[var(--marsh)]"
        />
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap gap-3 mb-5 items-start">
        {/* Conservation status pills */}
        <div className="flex flex-wrap gap-1.5">
          {(["all", "red", "amber", "green"] as const).map((s) => {
            const active = statusFilter === s;
            const cfg = s === "all" ? null : statusConfig[s];
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                  active
                    ? s === "all"
                      ? "bg-[var(--forest)] text-white border-[var(--forest)]"
                      : `${cfg!.bg} ${cfg!.text} border-transparent`
                    : s === "all"
                    ? "bg-white text-[var(--slate)] border-[var(--dune)] hover:border-[var(--marsh)]"
                    : `bg-white ${cfg!.text.replace("text-white", "text-[var(--slate)]")} border-[var(--dune)] hover:border-[var(--marsh)]`
                }`}
              >
                {s === "all" ? "All status" : cfg!.label + " List"}
              </button>
            );
          })}
        </div>

        {/* Season pills */}
        {seasonOptions && (
          <div className="flex flex-wrap gap-1.5">
            {seasonOptions.map((opt) => {
              const active = seasonFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setSeasonFilter(opt.value)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                    active
                      ? opt.value === "all"
                        ? "bg-[var(--forest)] text-white border-[var(--forest)]"
                        : `${opt.pillClass} border-transparent font-bold`
                      : `bg-white text-[var(--slate)] border-[var(--dune)] hover:border-[var(--marsh)]`
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Habitat dropdown */}
        {habitats.length > 2 && (
          <select
            value={habitatFilter}
            onChange={(e) => setHabitatFilter(e.target.value)}
            className="text-xs border border-[var(--dune)] rounded-full px-3 py-1.5 bg-white text-[var(--slate)] focus:outline-none focus:border-[var(--marsh)] cursor-pointer"
          >
            {habitats.map((h) => (
              <option key={h} value={h}>
                {h === "all" ? "All habitats" : h}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Results count + arrange by */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <p className="text-sm text-[var(--slate)]/60">
          {hasActiveFilter ? (
            <>
              Showing <strong className="text-[var(--slate)]">{filtered.length}</strong> of {species.length} species
              {" · "}
              <button onClick={clearAll} className="text-[var(--marsh)] hover:underline font-medium">
                Clear
              </button>
            </>
          ) : (
            <>{species.length} species</>
          )}
        </p>

        {/* Arrange by */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <label htmlFor="sort-select" className="text-xs text-[var(--slate)]/60 hidden sm:block whitespace-nowrap">
            Arrange by
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-xs border border-[var(--dune)] rounded-lg px-3 py-1.5 bg-white text-[var(--slate)] focus:outline-none focus:border-[var(--marsh)] cursor-pointer transition"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid or grouped sections */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-[var(--slate)]/60 text-sm">No species match your filters.</p>
          <button onClick={clearAll} className="mt-3 text-sm text-[var(--marsh)] hover:underline font-medium">
            Clear filters
          </button>
        </div>
      ) : category === "mammals" && !hasActiveFilter ? (
        /* Sub-grouped view for mammals when no filters active */
        <div className="space-y-10">
          {GROUP_ORDER.filter((g) => filtered.some((s) => s.group === g)).map((group) => {
            const groupSpecies = filtered.filter((s) => s.group === group);
            const cfg = GROUP_CONFIG[group];
            return (
              <section key={group}>
                <h2 className="text-lg font-bold text-[var(--forest)] mb-4 flex items-center gap-2 border-b border-[var(--dune)] pb-2">
                  <span>{cfg.icon}</span>
                  <span>{cfg.label}</span>
                  <span className="text-sm font-normal text-[var(--slate)]/50 ml-1">— {groupSpecies.length} species</span>
                </h2>
                <SpeciesGrid category={category} species={groupSpecies} />
              </section>
            );
          })}
        </div>
      ) : (
        <SpeciesGrid category={category} species={filtered} />
      )}
    </div>
  );
}

function SpeciesGrid({ category, species }: { category: SpeciesCategory; species: Species[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {species.map((s) => {
        const sc = s.conservationStatus ? statusConfig[s.conservationStatus] : null;
        return (
          <li key={s.id}>
            <Link
              href={`/${category}/${s.id}`}
              className="card-hover block rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] transition group h-full overflow-hidden"
            >
              <SpeciesCardImage species={s} />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-semibold text-[var(--forest)] group-hover:text-[var(--marsh)] transition leading-snug">
                    {s.commonName}
                  </span>
                  {sc && sc.label && (
                    <span className={`flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${sc.bg} ${sc.text} uppercase tracking-wide mt-0.5`}>
                      {sc.label}
                    </span>
                  )}
                </div>
                <span className="text-xs italic text-[var(--slate)]/60 block mb-2">{s.scientificName}</span>
                {s.habitat && s.habitat.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {s.habitat.slice(0, 2).map((h) => (
                      <span key={h} className="text-[10px] bg-[var(--dune)] text-[var(--slate)]/70 px-1.5 py-0.5 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                {s.seasonalPresence && (
                  <span className="text-xs text-[var(--slate)]/55 leading-snug block">
                    {s.seasonalPresence.split(".")[0]}
                  </span>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
