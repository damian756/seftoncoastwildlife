export interface WikiImage {
  /** 800px display version — used for the page hero */
  src: string;
  /** Original full-resolution URL — used in the lightbox */
  fullSrc: string;
  /** Link back to the Wikimedia Commons page */
  pageUrl: string;
}

/** Lightweight thumbnail (200px) for use on species listing cards */
export async function getCardThumbnail(title: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { next: { revalidate: 604800 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const base: string | undefined = data.originalimage?.source ?? data.thumbnail?.source;
    if (!base) return null;
    return base.replace(/\/\d+px-([^/]+)$/, "/200px-$1");
  } catch {
    return null;
  }
}

export async function getWikipediaImage(title: string): Promise<WikiImage | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { next: { revalidate: 604800 } } // cache for 7 days
    );
    if (!res.ok) return null;
    const data = await res.json();

    const original: string | undefined = data.originalimage?.source;
    const thumb: string | undefined = data.thumbnail?.source;
    const base = original ?? thumb ?? null;
    if (!base) return null;

    // 800px version for the hero image on the page
    const src = base.replace(/\/\d+px-([^/]+)$/, "/800px-$1");
    // Full-resolution for the lightbox
    const fullSrc = original ?? src;
    const pageUrl =
      data.content_urls?.desktop?.page ??
      `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

    return { src, fullSrc, pageUrl };
  } catch {
    return null;
  }
}
