"use client";

import { useState, useEffect, useCallback } from "react";

interface WikiImageData {
  src: string;
  fullSrc: string;
  pageUrl: string;
}

interface WikiImageProps {
  title: string;
  alt: string;
  /** Local image path from /public — if provided, skips the Wikipedia API fetch */
  localSrc?: string;
}

export function WikiImage({ title, alt, localSrc }: WikiImageProps) {
  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

  const [image, setImage] = useState<WikiImageData | null>(
    localSrc ? { src: localSrc, fullSrc: localSrc, pageUrl: wikiUrl } : null
  );
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localSrc) return;
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
        );
        if (!res.ok) return;
        const data = await res.json();
        const original: string | undefined = data.originalimage?.source;
        const thumb: string | undefined = data.thumbnail?.source;
        const base = original ?? thumb;
        if (!base || cancelled) return;
        const src = base.replace(/\/\d+px-([^/]+)$/, "/800px-$1");
        const fullSrc = original ?? src;
        const pageUrl =
          data.content_urls?.desktop?.page ?? wikiUrl;
        if (!cancelled) setImage({ src, fullSrc, pageUrl });
      } catch {
        /* silently fail */
      }
    }
    load();
    return () => { cancelled = true; };
  }, [title, localSrc, wikiUrl]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!image || error) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 block focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Enlarge photo of ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition group-hover:scale-[1.02]"
          loading="lazy"
          onError={() => setError(true)}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-end justify-end p-2">
          <span className="opacity-0 group-hover:opacity-100 transition bg-black/75 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a1 1 0 01-2 0V5a4 4 0 014-4h2a1 1 0 010 2H5zM15 3a1 1 0 010-2h2a4 4 0 014 4v2a1 1 0 01-2 0V5a2 2 0 00-2-2h-2zM3 13a1 1 0 012 0v2a2 2 0 002 2h2a1 1 0 010 2H5a4 4 0 01-4-4v-2zM15 17a1 1 0 010 2h2a4 4 0 004-4v-2a1 1 0 01-2 0v2a2 2 0 01-2 2h-2z" />
            </svg>
            Enlarge
          </span>
        </div>
      </button>
      <p className="text-xs text-white/30 mt-1.5 text-right">
        Tap image to enlarge ·{" "}
        <a
          href={image.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60"
        >
          Wikimedia Commons
        </a>
      </p>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo of ${alt}`}
        >
          <div
            className="relative flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition text-sm flex items-center gap-1.5"
              aria-label="Close"
            >
              Press Esc or click outside to close
              <span className="bg-white/10 rounded-full w-7 h-7 flex items-center justify-center text-base hover:bg-white/20 transition ml-1">✕</span>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.fullSrc}
              alt={alt}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
            <p className="text-xs text-white/40 mt-3 flex items-center gap-2">
              <span className="font-medium text-white/60">{alt}</span>
              <span>·</span>
              <a
                href={image.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/70 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Wikimedia Commons
              </a>
              <span>· Licensed CC BY-SA</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
