import Link from "next/link";

const nav = [
  { label: "Birds", href: "/birds" },
  { label: "Insects", href: "/insects" },
  { label: "Plants", href: "/plants" },
  { label: "Mammals", href: "/mammals" },
  {
    label: "Nature & Coast",
    href: "/nature",
    children: [
      { label: "Marshside RSPB", href: "/nature/marshside-rspb" },
      { label: "Sefton Coast", href: "/nature/sefton-coast" },
      { label: "Birdwatching Guide", href: "/birdwatching-guide" },
      { label: "Seasonal Guides", href: "/seasonal" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--dune)] bg-[var(--sand)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--sand)]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-[var(--forest)] hover:text-[var(--marsh)] transition"
        >
          Sefton Coast Wildlife
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <span className="text-sm font-medium text-[var(--slate)] cursor-default">
                  {item.label}
                </span>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-[var(--dune)] rounded shadow-lg py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[var(--slate)] hover:bg-[var(--dune)] hover:text-[var(--forest)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--slate)] hover:text-[var(--forest)] transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
