import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { getWikipediaImage } from "@/lib/wikipedia";
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

  const wikiImage = species.wikipediaTitle ? await getWikipediaImage(species.wikipediaTitle) : null;

  const canonical = `https://seftoncoastwildlife.co.uk/insects/${slug}`;
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
      ...(wikiImage && { images: [{ url: wikiImage.src, width: 800, alt: species.commonName }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(wikiImage && { images: [wikiImage.src] }),
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
  const wikiImage = species.wikipediaTitle ? await getWikipediaImage(species.wikipediaTitle) : null;
  return <SpeciesDetail category="insects" species={species} related={related} wikiImage={wikiImage} slug={slug} />;
}
