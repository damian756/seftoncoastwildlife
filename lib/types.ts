export type SpeciesCategory = 'birds' | 'insects' | 'plants' | 'mammals';

export type ConservationStatus = 'red' | 'amber' | 'green' | 'unknown';

export type ViewingDifficulty = 'easy' | 'moderate' | 'specialist';

export interface SpeciesFaq {
  question: string;
  answer: string;
}

export interface SpeciesExternalLinks {
  bto?: string;
  rspb?: string;
  iucn?: string;
  nbnatlas?: string;
  wikipedia?: string;
}

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  conservationStatus?: ConservationStatus;

  // Taxonomy
  order?: string;
  family?: string;

  // Presence & location
  seasonalPresence: string;
  bestTimeOfDay?: string;
  whereToSee: string;
  /** Short primary location for meta titles e.g. "Marshside RSPB", "Formby Beach" */
  shortLocation?: string;

  // Population
  ukPopulation?: string;
  seftonPopulation?: string;

  // Ecology
  habitat?: string[];
  diet?: string;

  // Content
  description: string;
  identification?: string;
  tips?: string;

  // Viewing
  difficulty?: ViewingDifficulty;

  // Rich content
  faq?: SpeciesFaq[];

  // Related & links
  relatedSpecies?: string[];
  externalLinks?: SpeciesExternalLinks;

  /** Wikipedia article title for image fetching e.g. "Pink-footed goose" */
  wikipediaTitle?: string;

  /** Local image path served from /public, e.g. "/images/species/birds/pink-footed-goose.jpg" */
  localImage?: string;

  /** Sub-group within a category e.g. "mammal" | "reptile" | "amphibian" */
  group?: string;
}

export const SPECIES_CATEGORIES: SpeciesCategory[] = ['birds', 'insects', 'plants', 'mammals'];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
