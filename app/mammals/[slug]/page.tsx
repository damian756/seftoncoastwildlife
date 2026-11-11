import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";
import { speciesTitle } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const BASE = "https://www.seftoncoastwildlife.co.uk";

function truncateAtSentence(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastDot = cut.lastIndexOf(".");
  if (lastDot > max * 0.4) return cut.slice(0, lastDot + 1);
  return cut.replace(/\s+\S*$/, "") + "...";
}

export function generateStaticParams() {
  return getAllSlugs("mammals").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("mammals", slug);
  if (!species) return {};

  const title = speciesTitle(species);
  const description = truncateAtSentence(
    species.description || `${species.commonName} (${species.scientificName}) on the Sefton Coast. ${species.seasonalPresence}.`,
    155
  );

  const canonical = `${BASE}/mammals/${slug}`;
  const image = species.localImage
    ? `${BASE}${species.localImage}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Sefton Coast Wildlife`,
      description,
      url: canonical,
      siteName: "Sefton Coast Wildlife",
      type: "article",
      ...(image && { images: [{ url: image, width: 800, alt: species.commonName }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Sefton Coast Wildlife`,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function MammalPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("mammals", slug);
  if (!species) notFound();
  const all = getAllSpecies("mammals");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  return <SpeciesDetail category="mammals" species={species} related={related} slug={slug} />;
}
