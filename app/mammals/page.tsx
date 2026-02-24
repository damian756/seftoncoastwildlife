import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import { getCardThumbnail } from "@/lib/wikipedia";
import type { Metadata } from "next";

const title = "Sefton Coast Mammals — Red Squirrels, Seals, Otters & More";
const description = "Mammals of the Sefton Coast — Red Squirrels at Formby NT pinewoods, Grey Seals on the beach, Natterjack Toads at Ainsdale NNR and Brown Hares on the marshland. Where to see them and ID tips.";
const url = "https://seftoncoastwildlife.co.uk/mammals";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function MammalsPage() {
  const species = getAllSpecies("mammals");

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
    name: "Mammals of the Sefton Coast",
    description: "Mammals, reptiles and amphibians of the Sefton Coast — including Red Squirrels, Grey Seals, Natterjack Toads, Otters and bats.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://seftoncoastwildlife.co.uk/mammals/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="mammals" species={species} imageMap={imageMap} />
    </>
  );
}
