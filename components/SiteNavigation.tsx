import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/dlss-5-supported-cards", label: "Supported GPUs" },
  { href: "/dlss-5-release-date", label: "Release Date" },
  { href: "/dlss-5-evidence-tracker", label: "Evidence Tracker" },
  { href: "/guides", label: "Guides" },
];

const trustLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/editorial-policy", label: "Editorial Policy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-bold tracking-tight text-foreground">
          DLSS 5 Checker
        </Link>
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
        >
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href="/pt" className="hover:text-foreground">
            Português
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/40 px-4 py-2">
        <p className="author mx-auto max-w-6xl text-xs text-foreground/80">
          By{" "}
          <Link href="/about" rel="author" className="text-blue-400 hover:underline">
            DLSS 5 Checker Editor
          </Link>
          .
        </p>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm text-muted-foreground md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold text-foreground">DLSS 5 Checker</p>
          <p className="mt-2 leading-relaxed">
            Independent DLSS compatibility and release-status resource. This site is not
            affiliated with NVIDIA, and unreleased features are tracked with cautious
            status labels.
          </p>
        </div>
        <nav
          aria-label="Site trust navigation"
          className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end"
        >
          {trustLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <a href="/sitemap.xml" className="hover:text-foreground">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
}
