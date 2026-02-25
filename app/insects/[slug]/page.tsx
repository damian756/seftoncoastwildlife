import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs("insects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("insects", slug);
  if (!species) return {};

  const location = species.shortLocation ?? "the Sefton Coast";
  const title = `${species.commonName} at ${location} | Sefton Coast Wildlife`;
  const description = species.faq?.[0]?.answer
    ? species.faq[0].answer.substring(0, 160)
    : `${species.commonName} (${species.scientificName}) on the Sefton Coast — where to see it, identification tips, and seasonal presence. ${species.seasonalPresence}.`;

  const canonical = `https://seftoncoastwildlife.co.uk/insects/${slug}`;
  const ogImage = species.wikipediaTitle
    ? `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(species.wikipediaTitle)}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Sefton Coast Wildlife",
      type: "article",
      ...(ogImage && { images: [{ url: ogImage, width: 800, alt: species.commonName }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function InsectPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("insects", slug);
  if (!species) notFound();
  const all = getAllSpecies("insects");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  return <SpeciesDetail category="insects" species={species} related={related} slug={slug} />;
}
