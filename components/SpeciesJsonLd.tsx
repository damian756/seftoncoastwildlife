import type { Species, SpeciesCategory } from "@/lib/types";
import { speciesJsonLd } from "@/lib/seo";

interface SpeciesJsonLdProps {
  species: Species;
  category: SpeciesCategory;
  slug: string;
}

/** Breadcrumb, WebPage, Taxon and FAQ structured data for a species page (built in lib/seo.ts). */
export function SpeciesJsonLd({ species, category, slug }: SpeciesJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speciesJsonLd(species, category, slug)) }}
    />
  );
}
