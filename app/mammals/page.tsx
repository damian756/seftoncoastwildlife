import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

// Rebuilt at most once a day, so an advertising sponsor whose `until` has passed drops off within a day.
export const revalidate = 86400;

const title = "Sefton Coast Mammals & Wildlife: Red Squirrels, Seals, Sand Lizards, Natterjack Toads";
const description = "Mammals, reptiles and amphibians of the Sefton Coast: Red Squirrels at Formby, Grey Seals, Sand Lizards and the Natterjack Toad chorus. Where and when to see them.";
const url = "https://www.seftoncoastwildlife.co.uk/mammals";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function MammalsPage() {
  const species = getAllSpecies("mammals");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mammals of the Sefton Coast",
    description: "Mammals, reptiles and amphibians of the Sefton Coast, including Red Squirrels, Grey Seals, Natterjack Toads, Otters and bats.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://www.seftoncoastwildlife.co.uk/mammals/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="mammals" species={species}  />
    </>
  );
}
