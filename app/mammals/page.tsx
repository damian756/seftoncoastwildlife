import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";

const title = "Sefton Coast Mammals & Wildlife — Red Squirrels, Seals, Sand Lizards, Natterjack Toads";
const description = "Mammals, reptiles and amphibians of the Sefton Coast — Red Squirrels at Formby NT pinewoods, Grey Seals on the beach, Sand Lizards at Ainsdale NNR and the Natterjack Toad chorus. Where to see them, ID tips and seasonal guidance.";
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
      <SpeciesList category="mammals" species={species}  />
    </>
  );
}
