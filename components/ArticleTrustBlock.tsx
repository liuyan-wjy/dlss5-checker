import Link from "next/link";

interface ArticleTrustBlockProps {
  locale?: "en" | "pt";
}

const copy = {
  en: {
    title: "Sources, review status, and related pages",
    byline: "Author: DLSS 5 Checker Editorial Team",
    lastChecked: "Last checked June 22, 2026",
    reviewNote: "Reviewed against primary NVIDIA sources and corrected when launch documentation changes.",
    primarySources: "Primary sources",
    changeTitle: "What would change this answer",
    change:
      "A new NVIDIA launch post, driver note, game patch note, or official supported-hardware table can change the status labels on this page.",
    related: "Related pages",
    sourceOne: "NVIDIA DLSS 5 announcement",
    sourceTwo: "NVIDIA DLSS technology and supported hardware",
    evidence: "DLSS 5 Evidence Tracker",
    cards: "Supported GPU list",
  },
  pt: {
    title: "Fontes, revisão e páginas relacionadas",
    byline: "Autor: DLSS 5 Checker Editorial Team",
    lastChecked: "Última verificação em 22 de junho de 2026",
    reviewNote: "Revisado contra fontes primárias da NVIDIA e corrigido quando a documentação muda.",
    primarySources: "Fontes principais",
    changeTitle: "O que mudaria esta resposta",
    change:
      "Uma nova publicação da NVIDIA, nota de driver, patch de jogo ou tabela oficial de hardware pode mudar os status desta página.",
    related: "Páginas relacionadas",
    sourceOne: "Anúncio do NVIDIA DLSS 5",
    sourceTwo: "Tecnologia DLSS e hardware suportado",
    evidence: "Rastreador de evidências DLSS 5",
    cards: "Lista de GPUs suportadas",
  },
} as const;

export default function ArticleTrustBlock({ locale = "en" }: ArticleTrustBlockProps) {
  const t = copy[locale];
  const evidenceHref = locale === "pt" ? "/pt/dlss-5-confirmado" : "/dlss-5-evidence-tracker";
  const cardsHref = locale === "pt" ? "/pt/dlss-5-quais-placas" : "/dlss-5-supported-cards";

  return (
    <section className="mt-12 rounded-lg border border-border p-5 text-sm">
      <h2 className="mb-2 text-xl font-bold">{t.title}</h2>
      <p className="author mb-1 font-medium text-foreground/90">
        {t.byline.replace("DLSS 5 Checker Editorial Team", "")}
        <Link href="/about" rel="author" className="text-blue-400 hover:underline">
          DLSS 5 Checker Editorial Team
        </Link>
      </p>
      <p className="mb-5 text-muted-foreground">
        {t.lastChecked}. {t.reviewNote}
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">{t.primarySources}</h3>
          <div className="space-y-2">
            <a
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="block text-blue-400 hover:underline"
            >
              {t.sourceOne}
            </a>
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="block text-blue-400 hover:underline"
            >
              {t.sourceTwo}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">{t.changeTitle}</h3>
          <p className="leading-relaxed text-muted-foreground">{t.change}</p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">{t.related}</h3>
          <div className="space-y-2">
            <Link href={evidenceHref} className="block text-blue-400 hover:underline">
              {t.evidence}
            </Link>
            <Link href={cardsHref} className="block text-blue-400 hover:underline">
              {t.cards}
            </Link>
            <Link href="/editorial-policy" className="block text-blue-400 hover:underline">
              Editorial Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
