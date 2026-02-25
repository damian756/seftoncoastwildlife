"use client";

import { useState, useEffect, useCallback } from "react";
import type { WikiImage } from "@/lib/wikipedia";

interface ImageLightboxProps {
  image: WikiImage;
  alt: string;
}

export function ImageLightbox({ image, alt }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

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

  if (imgError) return null;

  return (
    <>
      {/* Thumbnail — plain <img> to bypass Next.js image proxy */}
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
          onError={() => setImgError(true)}
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

      {/* Lightbox overlay */}
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
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition text-sm flex items-center gap-1.5"
              aria-label="Close"
            >
              Press Esc or click outside to close
              <span className="bg-white/10 rounded-full w-7 h-7 flex items-center justify-center text-base hover:bg-white/20 transition ml-1">✕</span>
            </button>

            {/* Full-resolution image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.fullSrc}
              alt={alt}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />

            {/* Caption & Wikimedia attribution */}
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
