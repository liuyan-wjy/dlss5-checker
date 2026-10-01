import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/dlss-5-supported-cards", label: "Supported GPUs" },
  { href: "/dlss-5-games", label: "Games" },
  { href: "/dlss-5-download", label: "Download & Setup" },
  { href: "/guides", label: "Guides" },
];

const portugueseLinks = [
  { href: "/pt", label: "Início" },
  { href: "/pt/dlss-5-quais-placas", label: "Placas compatíveis" },
  { href: "/pt/dlss-5-jogos", label: "Jogos" },
  { href: "/pt/como-ativar-dlss-5", label: "Como ativar" },
  { href: "/pt/dlss-5-amd", label: "DLSS 5 na AMD" },
];

const trustLinks = [
  { href: "/about", label: "About", ptLabel: "Sobre (em inglês)" },
  { href: "/contact", label: "Contact", ptLabel: "Contato (em inglês)" },
  { href: "/privacy", label: "Privacy", ptLabel: "Privacidade (em inglês)" },
  { href: "/editorial-policy", label: "Editorial Policy", ptLabel: "Política editorial (em inglês)" },
];

export function SiteHeader({ locale = "en" }: { locale?: "en" | "pt" }) {
  const pt = locale === "pt";
  return (
    <header lang={pt ? "pt-BR" : "en"} className="border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={pt ? "/pt" : "/"} className="inline-flex min-h-11 items-center font-bold tracking-tight text-foreground">
          DLSS 5 Checker
        </Link>
        <nav
          aria-label={pt ? "Navegação principal" : "Primary navigation"}
          className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground"
        >
          {(pt ? portugueseLinks : primaryLinks).map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href={pt ? "/" : "/pt"} lang={pt ? "en" : "pt-BR"} className="inline-flex min-h-11 items-center hover:text-foreground">
            {pt ? "English" : "Português"}
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/40 px-4 py-2">
        <p className="author mx-auto max-w-6xl text-xs text-foreground/80">
          {pt ? "Por " : "By "}
          <Link href="/about" rel="author" className="text-blue-400 hover:underline">
            {pt ? "Editor do DLSS 5 Checker" : "DLSS 5 Checker Editor"}
          </Link>
          .
        </p>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: "en" | "pt" }) {
  const pt = locale === "pt";
  return (
    <footer lang={pt ? "pt-BR" : "en"} className="border-t border-border/60 px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm text-muted-foreground md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold text-foreground">DLSS 5 Checker</p>
          <p className="mt-2 leading-relaxed">
            {pt
              ? "Guia independente de compatibilidade e disponibilidade do DLSS. Sem vínculo com a NVIDIA. Recursos disponíveis e suporte planejado são indicados separadamente."
              : "Independent guide to DLSS compatibility and availability. Not affiliated with NVIDIA. Available features and planned support are listed separately."}
          </p>
        </div>
        <nav
          aria-label={pt ? "Informações do site" : "Site information"}
          className="flex flex-wrap items-start gap-x-4 md:justify-end"
        >
          {trustLinks.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {pt ? link.ptLabel : link.label}
            </Link>
          ))}
          <a href="/sitemap.xml" className="inline-flex min-h-11 items-center hover:text-foreground">
            {pt ? "Mapa do site" : "Sitemap"}
          </a>
        </nav>
      </div>
    </footer>
  );
}
