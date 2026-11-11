import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/og";

// Rebuilt at most once a day, so an advertising sponsor whose `until` has passed drops off within a day.
export const revalidate = 86400;

const title = "Sefton Coast Birds: Species Guide, Where to See & ID Tips";
const description = "119 bird species recorded on the Sefton Coast: Pink-footed Geese at Marshside RSPB, Avocets, Peregrines, waders and wildfowl. Seasons, ID and viewing tips.";
const url = "https://www.seftoncoastwildlife.co.uk/birds";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { images: [DEFAULT_OG_IMAGE], title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function BirdsPage() {
  const species = getAllSpecies("birds");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Birds of the Sefton Coast",
    description: "Species database of birds recorded on the Sefton Coast: Marshside RSPB, the marshes, dunes and coastline from Southport to Formby.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://www.seftoncoastwildlife.co.uk/birds/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="birds" species={species} />
    </>
  );
}
