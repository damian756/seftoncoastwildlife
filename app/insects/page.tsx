import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

// Rebuilt at most once a day, so an advertising sponsor whose `until` has passed drops off within a day.
export const revalidate = 86400;

const title = "Sefton Coast Insects: Butterflies, Moths & Beetles Guide";
const description = "Butterflies, moths and beetles of the Sefton Coast dunes and heathland: Dark Green Fritillary, Grayling, Dune Tiger Beetle. Where to see them and ID tips.";
const url = "https://www.seftoncoastwildlife.co.uk/insects";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function InsectsPage() {
  const species = getAllSpecies("insects");


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
      url: `https://www.seftoncoastwildlife.co.uk/insects/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="insects" species={species}  />
    </>
  );
}
