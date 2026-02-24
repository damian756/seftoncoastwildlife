import type { Species, SpeciesCategory } from "@/lib/types";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals",
};

interface SpeciesJsonLdProps {
  species: Species;
  category: SpeciesCategory;
  slug: string;
  imageUrl?: string | null;
}

export function SpeciesJsonLd({ species, category, slug, imageUrl }: SpeciesJsonLdProps) {
  const baseUrl = "https://seftoncoastwildlife.co.uk";
  const pageUrl = `${baseUrl}/${category}/${slug}`;
  const categoryLabel = categoryLabels[category];

  const graph: object[] = [];

  // ── BreadcrumbList ────────────────────────────────────────────────────────
  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: categoryLabel, item: `${baseUrl}/${category}` },
      { "@type": "ListItem", position: 3, name: species.commonName, item: pageUrl },
    ],
  });

  // ── Taxon (schema.org/Taxon) ──────────────────────────────────────────────
  const taxon: Record<string, unknown> = {
    "@type": "Taxon",
    "@id": pageUrl,
    name: species.scientificName,
    commonName: species.commonName,
    taxonRank: "https://www.wikidata.org/entity/Q7432", // species
    url: pageUrl,
  };
  if (species.order) {
    taxon.parentTaxon = {
      "@type": "Taxon",
      name: species.order,
      taxonRank: "order",
    };
  }
  if (species.externalLinks?.wikipedia) {
    taxon.sameAs = species.externalLinks.wikipedia;
  } else if (species.wikipediaTitle) {
    taxon.sameAs = `https://en.wikipedia.org/wiki/${encodeURIComponent(species.wikipediaTitle)}`;
  }
  if (species.conservationStatus && species.conservationStatus !== "unknown") {
    const value =
      category === "birds"
        ? `${species.conservationStatus.charAt(0).toUpperCase() + species.conservationStatus.slice(1)} List (BoCC5)`
        : `${species.conservationStatus.charAt(0).toUpperCase() + species.conservationStatus.slice(1)} List`;
    taxon.additionalProperty = {
      "@type": "PropertyValue",
      name: "UK Conservation Status",
      value,
    };
  }
  graph.push(taxon);

  // ── Article ───────────────────────────────────────────────────────────────
  const article: Record<string, unknown> = {
    "@type": "Article",
    headline: `${species.commonName} on the Sefton Coast`,
    description: species.description,
    about: { "@id": pageUrl },
    publisher: {
      "@type": "Organization",
      name: "Sefton Coast Wildlife",
      url: baseUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };
  if (imageUrl) {
    article.image = { "@type": "ImageObject", url: imageUrl };
  }
  graph.push(article);

  // ── FAQPage ───────────────────────────────────────────────────────────────
  if (species.faq && species.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: species.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
    />
  );
}
