import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";

const title = "Sefton Coast Plants — Dune & Marsh Flora Species Guide";
const description = "Dune and marsh plants of the Sefton Coast — including nationally rare species like Grass of Parnassus and Round-leaved Wintergreen at Ainsdale NNR. Identification guides and where to find them.";
const url = "https://seftoncoastwildlife.co.uk/plants";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function PlantsPage() {
  const species = getAllSpecies("plants");


  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Plants of the Sefton Coast",
    description: "Dune and saltmarsh flora of the Sefton Coast — strandline annuals, orchids, dune slack specialists and nationally rare plants at Ainsdale NNR.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://seftoncoastwildlife.co.uk/plants/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="plants" species={species}  />
    </>
  );
}
