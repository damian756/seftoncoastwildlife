import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/blog/posts";
import { AD_OPTIONS, activeSponsor, advertiseHref, findSlot, type SlotId } from "@/lib/ad-slots";

// One advertising space. Filled: a labelled card with a sponsored link. Empty: an "advertise here" card
// that names the space and links to /advertise. Spaces and sponsors are set in lib/ad-slots.ts.
// `id` is a fixed space (e.g. "home-card") or `post-<slug>` for the end of an eligible blog post.
export function AdSlot({ id, className = "" }: { id: SlotId; className?: string }) {
  const slot = findSlot(id, BLOG_POSTS);
  if (!slot) return null;
  const option = AD_OPTIONS[slot.option];
  const sponsor = activeSponsor(slot);

  if (sponsor) {
    return (
      <aside
        aria-label={slot.label}
        data-ad-slot={id}
        className={`rounded-2xl border border-[var(--foam)]/60 bg-white p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:items-center ${className}`}
      >
        {sponsor.image && (
          <div className="relative w-full h-40 sm:w-44 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-[var(--dune)]">
            <Image src={sponsor.image} alt={sponsor.name} fill sizes="(max-width: 640px) 100vw, 176px" className="object-cover" />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--forest)] mb-1.5">{slot.label}</p>
          <p className="font-display text-lg font-bold text-[var(--forest)] leading-snug">{sponsor.name}</p>
          <p className="text-sm text-[var(--slate)] leading-relaxed mt-1.5">{sponsor.text}</p>
          <a
            href={sponsor.url}
            target="_blank"
            rel="sponsored noopener"
            className="inline-block mt-3 text-sm font-semibold text-[var(--marsh)] hover:text-[var(--forest)] hover:underline"
          >
            Visit {sponsor.name} →
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Advertising space"
      data-ad-slot={id}
      className={`rounded-2xl border-[1.5px] border-dashed border-[var(--marsh)]/45 bg-[var(--dune)]/60 px-5 py-5 sm:px-6 flex flex-wrap items-center justify-between gap-4 ${className}`}
    >
      <div className="min-w-0 flex-[1_1_22rem]">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--marsh)] mb-1.5">{slot.kicker}</p>
        <p className="font-display text-lg font-bold text-[var(--forest)] leading-snug mb-1.5">{slot.cardTitle}</p>
        <p className="text-sm text-[var(--slate)]/80 leading-relaxed">{slot.pitch}</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="text-[13px] font-semibold text-[var(--forest)]">
          {slot.product ?? option.name} · from {option.fromMonthly ?? option.price} a month plus VAT
        </span>
        <Link
          href={advertiseHref(id, slot)}
          className="inline-block rounded-lg bg-[var(--forest)] hover:bg-[var(--marsh)] text-white text-sm font-semibold px-4 py-2.5 transition"
        >
          See advertising options
        </Link>
      </div>
    </aside>
  );
}
