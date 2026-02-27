import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--forest)] text-white">
      {/* Accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--marsh)] via-[var(--gold)] to-[var(--marsh)]" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-semibold text-white leading-tight mb-1">
              Sefton Coast{" "}
              <span className="text-[var(--gold)]">Wildlife</span>
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              Independent guide to birds, nature and wildlife on the Sefton Coast — from Marshside RSPB to the Formby pinewoods.
            </p>
            <p className="text-white/40 text-xs mt-4">
              Part of the{" "}
              <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="text-white/60 hover:text-white transition">
                Sefton Coast Network
              </a>
            </p>
          </div>

          {/* Species */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-4">Species</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "/birds", label: "Birds" },
                { href: "/insects", label: "Insects" },
                { href: "/plants", label: "Plants" },
                { href: "/mammals", label: "Mammals & Wildlife" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nature & Coast */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-4">Nature & Coast</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "/nature/marshside-rspb", label: "Marshside RSPB" },
                { href: "/nature/sefton-coast", label: "The Sefton Coast" },
                { href: "/birdwatching-guide", label: "Birdwatching Guide" },
                { href: "/seasonal", label: "Seasonal Guides" },
                { href: "/blog", label: "Wildlife Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-4">Sefton Coast Network</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "https://www.southportguide.co.uk", label: "SouthportGuide" },
                { href: "https://www.formbyguide.co.uk", label: "FormbyGuide" },
                { href: "https://www.seftonlinks.com", label: "SeftonLinks" },
                { href: "https://seftoncoast.network", label: "SeftonCoast.network" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener" className="hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner banner */}
        <div className="mt-12 border-t border-white/10 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/50">
            Conservation group or local business?{" "}
            <span className="text-[var(--gold)] font-semibold">Partner with the Sefton Coast Network</span>
          </p>
          <a href="mailto:hello@seftoncoast.network" className="text-[var(--gold)] hover:text-white transition font-medium text-sm">
            hello@seftoncoast.network →
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} Sefton Coast Wildlife · Built by <a href="https://churchtownmedia.co.uk" target="_blank" rel="noopener" className="hover:text-white/60 transition">Churchtown Media</a></span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
