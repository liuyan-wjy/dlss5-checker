import Link from "next/link";
import SupportLink from "@/components/SupportLink";

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

const germanLinks = [
  { href: "/de/dlss-5-grafikkarten", label: "Unterstützte Grafikkarten" },
  { href: "/dlss-5-games", label: "Spiele (Englisch)" },
  { href: "/dlss-5-download", label: "Einrichtung (Englisch)" },
  { href: "/guides", label: "Ratgeber (Englisch)" },
];

const trustLinks = [
  { href: "/about", label: "About", ptLabel: "Sobre (em inglês)", deLabel: "Über uns (Englisch)" },
  { href: "/contact", label: "Contact", ptLabel: "Contato (em inglês)", deLabel: "Kontakt (Englisch)" },
  { href: "/privacy", label: "Privacy", ptLabel: "Privacidade (em inglês)", deLabel: "Datenschutz (Englisch)" },
  { href: "/editorial-policy", label: "Editorial Policy", ptLabel: "Política editorial (em inglês)", deLabel: "Redaktionsrichtlinien (Englisch)" },
];

export function SiteHeader({ locale = "en" }: { locale?: "en" | "pt" | "de" }) {
  const pt = locale === "pt";
  const de = locale === "de";
  return (
    <header lang={pt ? "pt-BR" : locale} className="border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={pt ? "/pt" : de ? "/de/dlss-5-grafikkarten" : "/"} className="inline-flex min-h-11 items-center font-bold tracking-tight text-foreground">
          DLSS 5 Checker
        </Link>
        <nav
          aria-label={pt ? "Navegação principal" : de ? "Hauptnavigation" : "Primary navigation"}
          className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground"
        >
          {(pt ? portugueseLinks : de ? germanLinks : primaryLinks).map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href={pt ? "/" : de ? "/dlss-5-supported-cards" : "/pt"} lang={pt || de ? "en" : "pt-BR"} className="inline-flex min-h-11 items-center hover:text-foreground">
            {pt || de ? "English" : "Português"}
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/40 px-4 py-2">
        <p className="author mx-auto max-w-6xl text-xs text-foreground/80">
          {pt ? "Por " : de ? "Von " : "By "}
          <Link href="/about" rel="author" title={de ? "Über den Autor liuyan-wjy (Englisch)" : "About the author, liuyan-wjy"} className="text-blue-400 hover:underline">
            liuyan-wjy
          </Link>
          .
        </p>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: "en" | "pt" | "de" }) {
  const pt = locale === "pt";
  const de = locale === "de";
  return (
    <footer lang={pt ? "pt-BR" : locale} className="border-t border-border/60 px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm text-muted-foreground md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold text-foreground">DLSS 5 Checker</p>
          <p className="mt-2 leading-relaxed">
            {pt
              ? "Guia independente de compatibilidade e disponibilidade do DLSS. Sem vínculo com a NVIDIA. Recursos disponíveis e suporte planejado são indicados separadamente."
              : de
                ? "Unabhängiger Ratgeber zur DLSS-Kompatibilität und Verfügbarkeit. Keine Verbindung zu NVIDIA. Verfügbare Funktionen und geplante Unterstützung werden getrennt ausgewiesen."
                : "Independent guide to DLSS compatibility and availability. Not affiliated with NVIDIA. Available features and planned support are listed separately."}
          </p>
        </div>
        <nav
          aria-label={pt ? "Informações do site" : de ? "Informationen zur Website" : "Site information"}
          className="flex flex-wrap items-start gap-x-4 md:justify-end"
        >
          {trustLinks.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {pt ? link.ptLabel : de ? link.deLabel : link.label}
            </Link>
          ))}
          <SupportLink placement="footer" className="inline-flex min-h-11 items-center hover:text-foreground">
            {pt ? "Pague um café ☕" : de ? "Spendiere mir einen Kaffee ☕" : "Buy me a coffee ☕"}
          </SupportLink>
          <a href="/sitemap.xml" className="inline-flex min-h-11 items-center hover:text-foreground">
            {pt ? "Mapa do site" : "Sitemap"}
          </a>
        </nav>
      </div>
    </footer>
  );
}
