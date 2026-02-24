import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import { getCardThumbnail } from "@/lib/wikipedia";
import type { Metadata } from "next";

const title = "Sefton Coast Insects — Butterflies, Moths & Beetles Guide";
const description = "Butterflies, moths and beetles of the Sefton Coast dunes and heathland — Dark Green Fritillary, Grayling, Six-spot Burnet, Dune Tiger Beetle and more. Where to see them and identification tips.";
const url = "https://seftoncoastwildlife.co.uk/insects";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function InsectsPage() {
  const species = getAllSpecies("insects");

  const thumbnails = await Promise.all(
    species.map(async (s) => ({
      id: s.id,
      src: s.wikipediaTitle ? await getCardThumbnail(s.wikipediaTitle) : null,
    }))
  );
  const imageMap = new Map(thumbnails.map((t) => [t.id, t.src]));

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Insects of the Sefton Coast",
    description: "Butterflies, moths, dragonflies, beetles and bees recorded on the Sefton Coast dunes, heathland and dune slacks.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://seftoncoastwildlife.co.uk/insects/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="insects" species={species} imageMap={imageMap} />
    </>
  );
}
