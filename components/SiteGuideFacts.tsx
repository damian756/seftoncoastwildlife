import Link from "next/link";
import type { ReactNode } from "react";
import { getSpeciesBySlug } from "@/lib/species";

export interface GuideSeason {
  season: string;
  text: ReactNode;
  /** Bird species page slugs (content/species/birds.json) to link under this season. */
  birds?: string[];
}

export interface SiteGuideFactsProps {
  /** Short name of the site, used in headings. */
  name: string;
  managedBy: ReactNode;
  official: { label: string; url: string }[];
  gettingThere: ReactNode[];
  parking: ReactNode[];
  paths: ReactNode[];
  seasons: GuideSeason[];
  tide?: ReactNode[];
  access: ReactNode[];
  dogs: ReactNode[];
  /** Date the practical facts were checked against the managing body's page. */
  checked: string;
}

function birdLinks(slugs: string[]) {
  return slugs.map((slug) => {
    const s = getSpeciesBySlug("birds", slug);
    if (!s) throw new Error(`SiteGuideFacts: no bird species page for "${slug}"`);
    return { slug, name: s.commonName };
  });
}

const label = "text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2";
const h2 = "font-display text-2xl font-bold text-[var(--forest)] mb-4";

function Paras({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 text-sm text-[var(--slate)] leading-relaxed list-disc pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * The standard birdwatcher's site guide: who manages the site, how to get there and park,
 * paths and hides, what is seen by season, tides, access rules and dogs, and the managing
 * body's own page. Every fact passed in should come from that body's page.
 */
export function SiteGuideFacts(props: SiteGuideFactsProps) {
  const { name, managedBy, official, gettingThere, parking, paths, seasons, tide, access, dogs, checked } = props;
  return (
    <div className="space-y-10">
      <section className="bg-[var(--dune)] rounded-xl p-6">
        <p className={label}>Site guide</p>
        <dl className="grid gap-3 text-sm text-[var(--slate)] sm:grid-cols-[10rem_1fr]">
          <dt className="font-semibold text-[var(--forest)]">Managed by</dt>
          <dd className="leading-relaxed">{managedBy}</dd>
          <dt className="font-semibold text-[var(--forest)]">Official page</dt>
          <dd className="leading-relaxed">
            {official.map((o, i) => (
              <span key={o.url}>
                {i > 0 && <br />}
                <a href={o.url} target="_blank" rel="noopener" className="text-[var(--marsh)] underline underline-offset-2">
                  {o.label}
                </a>
              </span>
            ))}
          </dd>
          <dt className="font-semibold text-[var(--forest)]">Facts checked</dt>
          <dd>{checked}. The main sources are listed under Sources. Times and charges change: check before you go.</dd>
        </dl>
      </section>

      <section>
        <p className={label}>Getting there</p>
        <h2 className={h2}>How to get to {name}</h2>
        <Paras items={gettingThere} />
        <h3 className="font-semibold text-[var(--forest)] mt-6 mb-2">Parking</h3>
        <Paras items={parking} />
      </section>

      <section>
        <p className={label}>On site</p>
        <h2 className={h2}>Paths, hides and viewpoints</h2>
        <Paras items={paths} />
      </section>

      <section>
        <p className={label}>By season</p>
        <h2 className={h2}>What is seen here</h2>
        <div className="space-y-5">
          {seasons.map((s) => (
            <div key={s.season} className="border-l-4 border-[var(--foam)] pl-5">
              <h3 className="font-semibold text-[var(--forest)] mb-1">{s.season}</h3>
              <p className="text-sm text-[var(--slate)] leading-relaxed">{s.text}</p>
              {s.birds && s.birds.length > 0 && (
                <p className="text-xs text-[var(--slate)]/80 mt-2 leading-relaxed">
                  Species pages:{" "}
                  {birdLinks(s.birds).map((b, i) => (
                    <span key={b.slug}>
                      {i > 0 && ", "}
                      <Link href={`/birds/${b.slug}`} className="text-[var(--marsh)] underline underline-offset-2">
                        {b.name}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {tide && tide.length > 0 && (
        <section>
          <p className={label}>Tides</p>
          <h2 className={h2}>When the tide matters</h2>
          <Paras items={tide} />
        </section>
      )}

      <section>
        <p className={label}>Rules</p>
        <h2 className={h2}>Access and dogs</h2>
        <Paras items={access} />
        <h3 className="font-semibold text-[var(--forest)] mt-6 mb-2">Dogs</h3>
        <Paras items={dogs} />
      </section>
    </div>
  );
}
