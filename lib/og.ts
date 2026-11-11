/**
 * The share image for pages without a photo of their own. A page that sets its own `openGraph`
 * replaces the layout's, images included, so each page passes this (or its own photo) explicitly.
 * The file is already in public/; width and height are its real size.
 */
export const DEFAULT_OG_IMAGE = {
  url: "https://www.seftoncoastwildlife.co.uk/images/species/birds/pink-footed-goose.jpg",
  width: 600,
  height: 450,
  alt: "Pink-footed Geese over the Sefton Coast",
};
