export interface Source {
  /** Organisation that publishes the page, e.g. "RSPB" or "Natural England". */
  publisher: string;
  /** Title of the page or document as the publisher gives it. */
  title: string;
  /** Omitted for sites the network names but does not link (lib/blocked-domains.ts); the title then shows as plain text. */
  url?: string;
  /** What this page took from the source, in a few words. */
  used?: string;
}

interface SourceListProps {
  sources: Source[];
  accessed: string;
  heading?: string;
  id?: string;
}

/** Numbered list of sources at the foot of a guide or reference page. */
export function SourceList({ sources, accessed, heading = "Sources", id = "sources" }: SourceListProps) {
  return (
    <section id={id} className="mt-12 pt-6 border-t border-[var(--dune)]">
      <h2 className="font-display text-xl font-bold text-[var(--forest)] mb-2">{heading}</h2>
      <p className="text-xs text-[var(--slate)]/80 mb-4">All accessed {accessed}. Where a source is linked, follow the link for the full text and the latest details.</p>
      <ol className="list-decimal pl-5 space-y-2 text-sm text-[var(--slate)] leading-relaxed">
        {sources.map((s) => (
          <li key={s.url ?? `${s.publisher}: ${s.title}`}>
            {s.publisher},{" "}
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener" className="text-[var(--marsh)] underline underline-offset-2 break-words">
                {s.title}
              </a>
            ) : (
              <span className="break-words">{s.title}</span>
            )}
            {s.used ? <span className="text-[var(--slate)]/80">. Used for: {s.used}.</span> : "."}
          </li>
        ))}
      </ol>
    </section>
  );
}
