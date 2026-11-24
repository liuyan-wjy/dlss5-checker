import Link from "next/link";
import SupportLink from "@/components/SupportLink";

export type NavLocale = "en" | "pt" | "de" | "ko" | "fr";

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
  { href: "/de/dlss-5-grafikkarten", label: "Grafikkarten" },
  { href: "/de/dlss-5-spiele", label: "Spiele" },
  { href: "/de/dlss-5-aktivieren", label: "Aktivieren" },
  { href: "/guides", label: "Ratgeber (Englisch)" },
];

const koreanLinks = [
  { href: "/ko/dlss-5-supported-cards", label: "지원 그래픽카드" },
  { href: "/dlss-5-games", label: "지원 게임 (영어)" },
  { href: "/dlss-5-download", label: "설정 방법 (영어)" },
  { href: "/guides", label: "가이드 (영어)" },
];

const frenchLinks = [
  { href: "/fr/dlss-5-cartes-compatibles", label: "Cartes compatibles" },
  { href: "/dlss-5-games", label: "Jeux (anglais)" },
  { href: "/dlss-5-download", label: "Installation (anglais)" },
  { href: "/guides", label: "Guides (anglais)" },
];

const LOCALE_CONFIG: Record<
  NavLocale,
  {
    htmlLang: string;
    homeHref: string;
    navAria: string;
    links: Array<{ href: string; label: string }>;
    switchHref: string;
    switchLang: string;
    switchLabel: string;
    byPrefix: string;
    authorTitle: string;
    footerDesc: string;
    footerAria: string;
    coffeeLabel: string;
    sitemapLabel: string;
    trustLabels: Record<string, string>;
  }
> = {
  en: {
    htmlLang: "en",
    homeHref: "/",
    navAria: "Primary navigation",
    links: primaryLinks,
    switchHref: "/pt",
    switchLang: "pt-BR",
    switchLabel: "Português",
    byPrefix: "By ",
    authorTitle: "About the author, liuyan-wjy",
    footerDesc:
      "Independent guide to DLSS compatibility and availability. Not affiliated with NVIDIA. Available features and planned support are listed separately.",
    footerAria: "Site information",
    coffeeLabel: "Buy me a coffee ☕",
    sitemapLabel: "Sitemap",
    trustLabels: {
      "/about": "About",
      "/contact": "Contact",
      "/privacy": "Privacy",
      "/editorial-policy": "Editorial Policy",
    },
  },
  pt: {
    htmlLang: "pt-BR",
    homeHref: "/pt",
    navAria: "Navegação principal",
    links: portugueseLinks,
    switchHref: "/",
    switchLang: "en",
    switchLabel: "English",
    byPrefix: "Por ",
    authorTitle: "Sobre o autor, liuyan-wjy",
    footerDesc:
      "Guia independente de compatibilidade e disponibilidade do DLSS. Sem vínculo com a NVIDIA. Recursos disponíveis e suporte planejado são indicados separadamente.",
    footerAria: "Informações do site",
    coffeeLabel: "Pague um café ☕",
    sitemapLabel: "Mapa do site",
    trustLabels: {
      "/about": "Sobre (em inglês)",
      "/contact": "Contato (em inglês)",
      "/privacy": "Privacidade (em inglês)",
      "/editorial-policy": "Política editorial (em inglês)",
    },
  },
  de: {
    htmlLang: "de",
    homeHref: "/de/dlss-5-grafikkarten",
    navAria: "Hauptnavigation",
    links: germanLinks,
    switchHref: "/dlss-5-supported-cards",
    switchLang: "en",
    switchLabel: "English",
    byPrefix: "Von ",
    authorTitle: "Über den Autor liuyan-wjy (Englisch)",
    footerDesc:
      "Unabhängiger Ratgeber zur DLSS-Kompatibilität und Verfügbarkeit. Keine Verbindung zu NVIDIA. Verfügbare Funktionen und geplante Unterstützung werden getrennt ausgewiesen.",
    footerAria: "Informationen zur Website",
    coffeeLabel: "Spendiere mir einen Kaffee ☕",
    sitemapLabel: "Sitemap",
    trustLabels: {
      "/about": "Über uns (Englisch)",
      "/contact": "Kontakt (Englisch)",
      "/privacy": "Datenschutz (Englisch)",
      "/editorial-policy": "Redaktionsrichtlinien (Englisch)",
    },
  },
  ko: {
    htmlLang: "ko",
    homeHref: "/ko/dlss-5-supported-cards",
    navAria: "주요 메뉴",
    links: koreanLinks,
    switchHref: "/dlss-5-supported-cards",
    switchLang: "en",
    switchLabel: "English",
    byPrefix: "작성자: ",
    authorTitle: "작성자 liuyan-wjy 소개 (영어)",
    footerDesc:
      "DLSS 호환성과 공식 지원 현황을 정리하는 독립 가이드입니다. NVIDIA와 제휴 관계가 없으며, 현재 지원 기능과 예정 사항을 명확히 구분해 안내합니다.",
    footerAria: "사이트 정보",
    coffeeLabel: "커피 한 잔 후원 ☕",
    sitemapLabel: "사이트맵",
    trustLabels: {
      "/about": "소개 (영어)",
      "/contact": "문의 (영어)",
      "/privacy": "개인정보 (영어)",
      "/editorial-policy": "편집 원칙 (영어)",
    },
  },
  fr: {
    htmlLang: "fr",
    homeHref: "/fr/dlss-5-cartes-compatibles",
    navAria: "Navigation principale",
    links: frenchLinks,
    switchHref: "/dlss-5-supported-cards",
    switchLang: "en",
    switchLabel: "English",
    byPrefix: "Par ",
    authorTitle: "À propos de l'auteur liuyan-wjy (anglais)",
    footerDesc:
      "Guide indépendant sur la compatibilité et la disponibilité de DLSS. Sans affiliation avec NVIDIA. Les fonctions disponibles et le support prévu sont distingués clairement.",
    footerAria: "Informations sur le site",
    coffeeLabel: "Offrir un café ☕",
    sitemapLabel: "Plan du site",
    trustLabels: {
      "/about": "À propos (anglais)",
      "/contact": "Contact (anglais)",
      "/privacy": "Confidentialité (anglais)",
      "/editorial-policy": "Politique éditoriale (anglais)",
    },
  },
};

const trustPaths = ["/about", "/contact", "/privacy", "/editorial-policy"] as const;

export function SiteHeader({ locale = "en" }: { locale?: NavLocale }) {
  const cfg = LOCALE_CONFIG[locale];
  return (
    <header lang={cfg.htmlLang} className="border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={cfg.homeHref} className="inline-flex min-h-11 items-center font-bold tracking-tight text-foreground">
          DLSS 5 Checker
        </Link>
        <nav
          aria-label={cfg.navAria}
          className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground"
        >
          {cfg.links.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href={cfg.switchHref} lang={cfg.switchLang} className="inline-flex min-h-11 items-center hover:text-foreground">
            {cfg.switchLabel}
          </Link>
        </nav>
      </div>
      <div className="border-t border-border/40 px-4 py-2">
        <p className="author mx-auto max-w-6xl text-xs text-foreground/80">
          {cfg.byPrefix}
          <Link href="/about" rel="author" title={cfg.authorTitle} className="text-blue-400 hover:underline">
            liuyan-wjy
          </Link>
          .
        </p>
      </div>
    </header>
  );
}

export function SiteFooter({ locale = "en" }: { locale?: NavLocale }) {
  const cfg = LOCALE_CONFIG[locale];
  return (
    <footer lang={cfg.htmlLang} className="border-t border-border/60 px-4 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm text-muted-foreground md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-semibold text-foreground">DLSS 5 Checker</p>
          <p className="mt-2 leading-relaxed">{cfg.footerDesc}</p>
        </div>
        <nav
          aria-label={cfg.footerAria}
          className="flex flex-wrap items-start gap-x-4 md:justify-end"
        >
          {trustPaths.map((href) => (
            <Link key={href} href={href} className="inline-flex min-h-11 items-center hover:text-foreground">
              {cfg.trustLabels[href]}
            </Link>
          ))}
          <SupportLink placement="footer" className="inline-flex min-h-11 items-center hover:text-foreground">
            {cfg.coffeeLabel}
          </SupportLink>
          <a href="/sitemap.xml" className="inline-flex min-h-11 items-center hover:text-foreground">
            {cfg.sitemapLabel}
          </a>
        </nav>
      </div>
    </footer>
  );
}
