import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";
import type { GPU } from "@/lib/gpu-search";
import {
  GPU_DETAIL_SLUGS,
  getGpuBySlug,
  getGpuPageHref,
  getLocalizedFeatureLabel,
  getLocalizedSupportText,
  type SupportedLocale,
} from "@/lib/gpu-page-config";

const SITE_URL = "https://www.dlss5.net";

interface GPUDetailPageProps {
  gpu: GPU;
  locale: SupportedLocale;
}

const STATUS_CONFIG = {
  confirmed: {
    icon: CheckCircle2,
    iconColor: "text-green-500",
    badgeClass: "bg-green-500/10 border-green-500/30 text-green-400",
    cardBorder: "border-green-500/30",
    cardBg: "bg-green-500/5",
    label: {
      en: "Confirmed",
      pt: "Confirmada",
    },
    heading: {
      en: "DLSS 5 Confirmed (Available now)",
      pt: "DLSS 5 confirmado e disponível em jogos compatíveis",
    },
  },
  planned: {
    icon: Clock,
    iconColor: "text-yellow-500",
    badgeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
    label: {
      en: "Planned",
      pt: "Planejada",
    },
    heading: {
      en: "DLSS 5 Planned, Not Available Yet",
      pt: "DLSS 5 planejado, ainda indisponível",
    },
  },
  unsupported: {
    icon: AlertCircle,
    iconColor: "text-orange-500",
    badgeClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    cardBorder: "border-orange-500/30",
    cardBg: "bg-orange-500/5",
    label: {
      en: "Unsupported",
      pt: "Sem suporte oficial",
    },
    heading: {
      en: "No Official DLSS 5 Support",
      pt: "Sem suporte oficial ao DLSS 5",
    },
  },
  none: {
    icon: XCircle,
    iconColor: "text-red-500",
    badgeClass: "bg-red-500/10 border-red-500/30 text-red-400",
    cardBorder: "border-red-500/30",
    cardBg: "bg-red-500/5",
    label: {
      en: "Not Supported",
      pt: "Sem suporte",
    },
    heading: {
      en: "DLSS Not Supported",
      pt: "DLSS não é suportado",
    },
  },
} as const;

const COPY = {
  en: {
    homeLabel: "DLSS 5 Checker",
    homeHref: "/",
    updatedLabel: "Last checked September 5, 2026",
    title: (gpu: GPU) => `Does the ${gpu.name} Support DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Current DLSS Features on ${gpu.name}`,
    noFeatures: (gpu: GPU) => `The ${gpu.name} does not support DLSS features today.`,
    whatIsTitle: "What is DLSS 5?",
    paragraph1:
      "DLSS 5 introduces Neural Rendering, AI-powered enhancement of lighting and materials in real time. Unlike DLSS 4, which focused on performance through frame generation, DLSS 5 is positioned as a visual-quality upgrade.",
    paragraph2:
      "DLSS 5 Neural Rendering is available now in NBA 2K27 for GeForce RTX 50 desktop and laptop GPUs. This tracker separates confirmed RTX 50 models from RTX 40 planned support, RTX 20/30 with no current official DLSS 5 support, and non-RTX cards with no local DLSS path.",
    paragraph3:
      "That makes model-specific compatibility pages useful: users want to know whether their current GPU is confirmed, what it can do today with DLSS 4 or 4.5, and whether an upgrade is worth it.",
    faqTitle: "Frequently Asked Questions",
    faq1: (gpu: GPU) => `Does the ${gpu.name} support DLSS 5?`,
    faq2: (gpu: GPU) => `Should I upgrade from ${gpu.name} for DLSS 5?`,
    faq2Answer:
      "If DLSS 5 Neural Rendering is a must-have feature for you, RTX 50 series cards are the safest bet today. For every other GPU generation, it still makes sense to wait for official support details before buying solely for DLSS 5.",
    faq3: (gpu: GPU) => `What can the ${gpu.name} do with DLSS today?`,
    statusBasisTitle: "Status basis",
    sourceTitle: "Primary sources",
    changeTitle: "What would change this answer",
    rtx40AvailabilityNote:
      "An announced date alone does not make DLSS 5 available on RTX 40. This status changes to available only when NVIDIA confirms that support is live and the required game update and driver are publicly released.",
    comparisonTitle: "Adjacent model comparison",
    lastChecked: "Last checked September 5, 2026",
    relatedTitle: "Related GPUs",
    ctaText: "Check any other GPU's DLSS 5 compatibility",
    ctaButton: "Back to GPU Checker",
  },
  pt: {
    homeLabel: "DLSS 5 Checker",
    homeHref: "/pt",
    updatedLabel: "Última verificação em 5 de setembro de 2026",
    title: (gpu: GPU) => `${gpu.name}: tem suporte ao DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Recursos atuais de DLSS na ${gpu.name}`,
    noFeatures: (gpu: GPU) => `A ${gpu.name} não oferece recursos de DLSS hoje.`,
    whatIsTitle: "O que é o DLSS 5?",
    paragraph1:
      "O DLSS 5 introduz o Neural Rendering, uma camada de IA voltada para melhorar iluminação e materiais em tempo real. Ao contrário do DLSS 4, que focou em desempenho com geração de quadros, o DLSS 5 tenta elevar a fidelidade visual.",
    paragraph2:
      "O DLSS 5 Neural Rendering já está disponível em NBA 2K27 para GPUs GeForce RTX 50 de desktop e notebook. Este tracker separa modelos RTX 50 confirmados, suporte RTX 40 planejado, RTX 20/30 sem suporte oficial atual ao DLSS 5 e placas fora da linha RTX sem DLSS local.",
    paragraph3:
      "Por isso as páginas por modelo ajudam tanto: quem pesquisa quer saber se a placa atual está confirmada, o que ela entrega hoje com DLSS 4 ou 4.5, e se vale gastar dinheiro em upgrade.",
    faqTitle: "Perguntas frequentes",
    faq1: (gpu: GPU) => `A ${gpu.name} suporta DLSS 5?`,
    faq2: (gpu: GPU) => `Vale trocar a ${gpu.name} por causa do DLSS 5?`,
    faq2Answer:
      "Se o DLSS 5 Neural Rendering é prioridade para você, a série RTX 50 continua sendo a aposta mais segura hoje. Para as demais gerações, faz mais sentido esperar os requisitos oficiais antes de comprar uma nova GPU só por esse motivo.",
    faq3: (gpu: GPU) => `O que a ${gpu.name} já faz com DLSS hoje?`,
    statusBasisTitle: "Base do status",
    sourceTitle: "Fontes principais",
    changeTitle: "O que mudaria esta resposta",
    rtx40AvailabilityNote:
      "Uma data anunciada, por si só, não significa que o DLSS 5 já esteja disponível nas RTX 40. O status só muda para disponível quando a NVIDIA confirma a liberação do suporte e as atualizações necessárias do jogo e do driver estão disponíveis ao público.",
    comparisonTitle: "Comparação com modelos próximos",
    lastChecked: "Última verificação em 5 de setembro de 2026",
    relatedTitle: "GPUs relacionadas",
    ctaText: "Confira a compatibilidade de qualquer outra GPU com DLSS 5",
    ctaButton: "Voltar ao verificador",
  },
} as const;

type ModelInsight = {
  title: string;
  intro: string;
  rows: Array<{ label: string; value: string }>;
  link: { href: string; label: string };
  comparison: Array<{ label: string; value: string }>;
  changeAnswer: string;
};

const MODEL_INSIGHTS: Partial<Record<string, Partial<Record<SupportedLocale, ModelInsight>>>> = {
  "rtx-5090": {
    en: {
      title: "What this means for RTX 5090 owners",
      intro:
        "The RTX 5090 is the cleanest individual-card DLSS 5 answer on the site: it is the flagship RTX 50 path, has the largest VRAM pool in this list, and already supports the current DLSS 4.5 frame-generation stack.",
      rows: [
        { label: "Official status", value: "Confirmed path for DLSS 5 Neural Rendering" },
        { label: "Current useful features", value: "DLSS 4.5 Dynamic MFG, Multi Frame Generation, Super Resolution, Ray Reconstruction, and DLAA" },
        { label: "Best-fit use", value: "4K, ultrawide, creator preview workloads, and high-refresh games where frame generation is useful" },
      ],
      link: { href: "/dlss-5-supported-cards", label: "Compare every GPU support tier" },
      comparison: [
        { label: "Versus RTX 5080", value: "More VRAM headroom and flagship positioning; both stay in the clearest RTX 50 DLSS 5 group." },
        { label: "Versus RTX 5070 Ti", value: "Better fit for heavy 4K settings if DLSS 5 launch titles are demanding." },
      ],
      changeAnswer:
        "NVIDIA would need to update its public support table or driver notes to exclude this model or limit DLSS 5 to narrower configurations.",
    },
  },
  "rtx-4080": {
    en: {
      title: "What this means for RTX 4080 owners",
      intro:
        "The RTX 4080 is still a very strong DLSS card, but DLSS 5 Neural Rendering is not live on RTX 40 today. NVIDIA says RTX 40 support is planned later, with no public date.",
      rows: [
        { label: "Current useful features", value: "Frame Generation, Super Resolution, Ray Reconstruction, and DLAA" },
        { label: "Not in the RTX 40 column", value: "Multi Frame Generation and Dynamic Multi Frame Generation" },
        { label: "DLSS 5 reading", value: "Planned later for RTX 40, not available today and no public date" },
      ],
      link: { href: "/dlss-5-rtx-40-series", label: "Read the RTX 40 series support breakdown" },
      comparison: [
        { label: "Versus RTX 4090", value: "Lower raw headroom, but both share the same planned-not-live RTX 40 status." },
        { label: "Versus RTX 4070", value: "More performance and VRAM, but no earlier DLSS 5 availability today." },
      ],
      changeAnswer: COPY.en.rtx40AvailabilityNote,
    },
    pt: {
      title: "O que isso significa para donos de RTX 4080",
      intro:
        "A RTX 4080 continua sendo uma placa forte para o DLSS atual, mas o DLSS 5 Neural Rendering ainda não está disponível em RTX 40. A NVIDIA fala em suporte posterior, sem data pública.",
      rows: [
        { label: "Recursos úteis hoje", value: "Frame Generation, Super Resolution, Ray Reconstruction e DLAA" },
        { label: "Fora da coluna RTX 40", value: "Multi Frame Generation e Dynamic Multi Frame Generation" },
        { label: "Leitura para DLSS 5", value: "Planejada para RTX 40 mais adiante, ainda indisponível e sem data pública" },
      ],
      link: { href: "/pt/dlss-5-quais-placas", label: "Comparar todas as placas em português" },
      comparison: [
        { label: "Versus RTX 4090", value: "Menos desempenho bruto, mas o mesmo status planejado e ainda indisponível para DLSS 5." },
        { label: "Versus RTX 4070", value: "Mais desempenho e VRAM, mas sem disponibilidade de DLSS 5 antes das outras RTX 40." },
      ],
      changeAnswer: COPY.pt.rtx40AvailabilityNote,
    },
  },
  "rtx-4070": {
    en: {
      title: "What this means for RTX 4070 owners",
      intro:
        "The RTX 4070 is a strong current DLSS card, but its confirmed feature class is still RTX 40. That matters because NVIDIA separates RTX 40 Frame Generation from RTX 50 Multi Frame Generation in the public hardware table.",
      rows: [
        {
          label: "Current useful features",
          value: "Frame Generation, Super Resolution, Ray Reconstruction, and DLAA",
        },
        {
          label: "Not in the RTX 40 column",
          value: "Multi Frame Generation and Dynamic Multi Frame Generation",
        },
        {
          label: "DLSS 5 reading",
          value: "Planned later for RTX 40, not available today and no public date",
        },
      ],
      link: {
        href: "/dlss-5-rtx-40-series",
        label: "Read the RTX 40 series support breakdown",
      },
      comparison: [
        { label: "Versus RTX 4080", value: "Less raw headroom, but both share the same planned-not-live RTX 40 status." },
        { label: "Versus RTX 3070", value: "Adds Frame Generation today; RTX 3070 does not have that path." },
      ],
      changeAnswer: COPY.en.rtx40AvailabilityNote,
    },
    pt: {
      title: "O que isso significa para donos de RTX 4070",
      intro:
        "A RTX 4070 é uma placa forte para o DLSS atual, mas sua classe pública ainda é RTX 40. Isso importa porque a NVIDIA separa Frame Generation na RTX 40 de Multi Frame Generation na RTX 50.",
      rows: [
        { label: "Recursos úteis hoje", value: "Frame Generation, Super Resolution, Ray Reconstruction e DLAA" },
        { label: "Fora da coluna RTX 40", value: "Multi Frame Generation e Dynamic Multi Frame Generation" },
        { label: "Leitura para DLSS 5", value: "Planejada para RTX 40 mais adiante, ainda indisponível e sem data pública" },
      ],
      link: { href: "/pt/dlss-5-quais-placas", label: "Ver a lista completa de placas" },
      comparison: [
        { label: "Versus RTX 4080", value: "Menos desempenho bruto, mas ambas ficam no mesmo grupo planejado e ainda indisponível para DLSS 5." },
        { label: "Versus RTX 3060", value: "A RTX 4070 tem Frame Generation hoje; a RTX 3060 não tem esse caminho." },
      ],
      changeAnswer: COPY.pt.rtx40AvailabilityNote,
    },
  },
  "rtx-3070": {
    en: {
      title: "What this means for RTX 3070 owners",
      intro:
        "The RTX 3070 still has useful DLSS image-quality features, but it does not have the RTX 40 Frame Generation path or the RTX 50 Multi Frame Generation path. It is currently unsupported for DLSS 5 Neural Rendering.",
      rows: [
        {
          label: "Current useful features",
          value: "Super Resolution, Ray Reconstruction, and DLAA",
        },
        {
          label: "Missing newer frame generation",
          value: "No Frame Generation, Multi Frame Generation, or Dynamic MFG support",
        },
        {
          label: "DLSS 5 reading",
          value: "Unsupported for current DLSS 5 Neural Rendering",
        },
      ],
      link: {
        href: "/dlss-5-supported-cards",
        label: "Compare all card support tiers",
      },
      comparison: [
        { label: "Versus RTX 4070", value: "RTX 4070 adds Frame Generation; RTX 3070 remains on the older DLSS image-quality stack." },
        { label: "Versus RTX 3060", value: "More performance, but the same unsupported current DLSS 5 Neural Rendering status." },
      ],
      changeAnswer:
        "NVIDIA would need to publish RTX 30 support for DLSS 5 Neural Rendering.",
    },
  },
  "rtx-3060": {
    en: {
      title: "What this means for RTX 3060 owners",
      intro:
        "The RTX 3060 remains useful for DLSS Super Resolution, but it does not have the RTX 40 Frame Generation path or the RTX 50 MFG path. It is currently unsupported for DLSS 5 Neural Rendering.",
      rows: [
        { label: "Current useful features", value: "Super Resolution, DLAA, and Ray Reconstruction in supported titles" },
        { label: "Missing newer frame generation", value: "No Frame Generation, Multi Frame Generation, or Dynamic MFG path" },
        { label: "DLSS 5 reading", value: "Unsupported for current DLSS 5 Neural Rendering" },
      ],
      link: { href: "/dlss-5-system-requirements", label: "Read the requirements breakdown" },
      comparison: [
        { label: "Versus RTX 3070", value: "Similar status, less performance headroom in demanding DLSS titles." },
        { label: "Versus RTX 4070", value: "RTX 4070 adds Frame Generation today and has planned, not-live DLSS 5 status." },
      ],
      changeAnswer:
        "The answer would change only if NVIDIA lists RTX 30 cards for DLSS 5 Neural Rendering.",
    },
    pt: {
      title: "O que isso significa para donos de RTX 3060",
      intro:
        "A RTX 3060 ainda é útil para DLSS Super Resolution, mas não tem o caminho de Frame Generation da RTX 40 nem o caminho de MFG da RTX 50. No status atual, ela fica sem suporte oficial ao DLSS 5 Neural Rendering.",
      rows: [
        { label: "Recursos úteis hoje", value: "Super Resolution, DLAA e Ray Reconstruction em jogos compatíveis" },
        { label: "Geração de quadros mais nova", value: "Sem Frame Generation, Multi Frame Generation ou Dynamic MFG" },
        { label: "Leitura para DLSS 5", value: "Sem suporte oficial atual ao DLSS 5 Neural Rendering" },
      ],
      link: { href: "/pt/dlss-5-requisitos", label: "Ler os requisitos do DLSS 5" },
      comparison: [
        { label: "Versus RTX 3070", value: "Status parecido, com menos folga de desempenho em jogos pesados." },
        { label: "Versus RTX 4070", value: "A RTX 4070 adiciona Frame Generation hoje e tem DLSS 5 planejado, mas ainda indisponível." },
      ],
      changeAnswer:
        "A resposta só mudaria se a NVIDIA listasse placas RTX 30 para DLSS 5 Neural Rendering.",
    },
  },
  "rtx-4090": {
    pt: {
      title: "O que isso significa para donos de RTX 4090",
      intro:
        "A RTX 4090 continua muito forte no DLSS atual, mas o DLSS 5 Neural Rendering ainda não está disponível em RTX 40. A NVIDIA fala em suporte posterior, sem data pública.",
      rows: [
        { label: "Recursos úteis hoje", value: "Frame Generation, Super Resolution, Ray Reconstruction e DLAA" },
        { label: "Fora da coluna RTX 40", value: "Multi Frame Generation e Dynamic Multi Frame Generation" },
        { label: "Leitura para DLSS 5", value: "Planejada para RTX 40 mais adiante, ainda indisponível e sem data pública" },
      ],
      link: { href: "/dlss-5-rtx-40-series", label: "Ver análise da série RTX 40" },
      comparison: [
        { label: "Versus RTX 4080", value: "Mais desempenho bruto, mas o mesmo status planejado e ainda indisponível para DLSS 5." },
        { label: "Versus RTX 5090", value: "A RTX 5090 fica no caminho RTX 50 mais claro para DLSS 5." },
      ],
      changeAnswer: COPY.pt.rtx40AvailabilityNote,
    },
  },
  "gtx-1060": {
    pt: {
      title: "O que isso significa para donos de GTX 1060",
      intro:
        "A GTX 1060 não faz parte da família RTX e não tem suporte ao NVIDIA DLSS. A resposta útil aqui é separar DLSS de alternativas como FSR e XeSS.",
      rows: [
        { label: "Status oficial", value: "Sem suporte ao NVIDIA DLSS" },
        { label: "Limite de hardware", value: "DLSS depende de hardware RTX, que a GTX 1060 não possui" },
        { label: "Alternativa prática", value: "Verificar FSR no jogo específico, quando disponível" },
      ],
      link: { href: "/pt/dlss-5-quais-placas", label: "Voltar para a lista de placas" },
      comparison: [
        { label: "Versus RTX 2060", value: "RTX 2060 já entra na família RTX e pode usar Super Resolution, mas também não tem suporte oficial atual ao DLSS 5." },
        { label: "Versus RTX 3060", value: "RTX 3060 tem DLSS atual; GTX 1060 não tem DLSS." },
      ],
      changeAnswer:
        "Esta resposta só mudaria se a NVIDIA mudasse a exigência básica de hardware RTX para DLSS, o que não é indicado hoje.",
    },
  },
};

function getRelatedGPUs(gpu: GPU, locale: SupportedLocale): GPU[] {
  return GPU_DETAIL_SLUGS[locale]
    .filter((slug) => slug !== gpu.id)
    .map((slug) => getGpuBySlug(slug))
    .filter((candidate): candidate is GPU => Boolean(candidate))
    .filter((candidate) => candidate.series === gpu.series)
    .slice(0, 3);
}

function getStatusBasis(gpu: GPU, locale: SupportedLocale): string {
  if (locale === "pt") {
    if (gpu.dlss5_support === "none") {
      return "A placa não pertence à família NVIDIA RTX, então não há caminho para NVIDIA DLSS.";
    }
    if (gpu.dlss5_support === "planned") {
      return "A placa roda recursos atuais de DLSS e a NVIDIA comunicou planos para RTX 40, mas o DLSS 5 ainda não está disponível nessa geração e não há data pública.";
    }
    if (gpu.dlss5_support === "unsupported") {
      return "A placa roda recursos atuais de DLSS, mas não tem suporte oficial atual ao DLSS 5 Neural Rendering.";
    }
    return "O status usa a geração da GPU, os recursos DLSS atuais e a documentação pública da NVIDIA como fonte primária.";
  }

  if (gpu.dlss5_support === "confirmed") {
    return "This card is in the clearest RTX 50 DLSS 5 path, while final driver, game, and per-model launch documentation still matter.";
  }
  if (gpu.dlss5_support === "planned") {
    return "This card has strong current DLSS support and RTX 40 is on NVIDIA's later DLSS 5 plan, but DLSS 5 is not available on it yet and no release date has been announced.";
  }
  if (gpu.dlss5_support === "unsupported") {
    return "This card supports older DLSS features, but it has no current official DLSS 5 Neural Rendering support.";
  }
  return "This card is outside NVIDIA RTX DLSS support. Use vendor alternatives such as AMD FSR or Intel XeSS where available.";
}

export default function GPUDetailPage({ gpu, locale }: GPUDetailPageProps) {
  const cfg = STATUS_CONFIG[gpu.dlss5_support];
  const Icon = cfg.icon;
  const copy = COPY[locale];
  const relatedGPUs = getRelatedGPUs(gpu, locale);
  const modelInsight = MODEL_INSIGHTS[gpu.id]?.[locale];
  const homeUrl = `${SITE_URL}${copy.homeHref === "/" ? "" : copy.homeHref}`;
  const pageHref = `${SITE_URL}${getGpuPageHref(locale, gpu.id)}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: copy.faq1(gpu),
        acceptedAnswer: {
          "@type": "Answer",
          text: gpu.summary,
        },
      },
      {
        "@type": "Question",
        name: copy.faq3(gpu),
        acceptedAnswer: {
          "@type": "Answer",
          text:
            gpu.current_dlss_features.length > 0
              ? gpu.current_dlss_features
                  .map((feature) => getLocalizedFeatureLabel(feature, locale))
                  .join("; ")
              : copy.noFeatures(gpu),
        },
      },
      ...(modelInsight
        ? [
            {
              "@type": "Question",
              name: copy.changeTitle,
              acceptedAnswer: {
                "@type": "Answer",
                text: modelInsight.changeAnswer,
              },
            },
          ]
        : []),
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DLSS 5 Checker",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: gpu.name,
        item: pageHref,
      },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title(gpu),
    url: pageHref,
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    dateModified: "2026-09-05",
    isPartOf: {
      "@type": "WebSite",
      name: "DLSS 5 Checker",
      url: homeUrl,
    },
    about: [
      gpu.name,
      "DLSS 5 compatibility",
      "GPU support status",
      getLocalizedSupportText(locale, gpu.dlss5_support),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={copy.homeHref} className="hover:text-foreground transition-colors">
            {copy.homeLabel}
          </Link>
          <span className="mx-2">/</span>
          <span>{gpu.name}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          {copy.title(gpu)}
        </h1>
        <p className="text-muted-foreground mb-8">
          {gpu.vram} VRAM · {gpu.series} · {copy.updatedLabel}
        </p>

        <div className={`rounded-lg border ${cfg.cardBorder} ${cfg.cardBg} p-6 mb-8`}>
          <div className="flex items-start gap-4 mb-4">
            <Icon className={`w-8 h-8 shrink-0 ${cfg.iconColor}`} />
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-bold">{cfg.heading[locale]}</h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.badgeClass}`}
                >
                  {cfg.label[locale]}
                </span>
              </div>
              <p className="text-foreground/80 mt-2 leading-relaxed">{gpu.summary}</p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">{copy.currentFeaturesTitle(gpu)}</h2>
          {gpu.current_dlss_features.length > 0 ? (
            <div className="space-y-3">
              {gpu.current_dlss_features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-3 rounded-md bg-muted/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {getLocalizedFeatureLabel(feature, locale)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-foreground/80">{copy.noFeatures(gpu)}</p>
          )}
        </section>

        {modelInsight && (
          <section className="mb-8 rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-3">{modelInsight.title}</h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              {modelInsight.intro}
            </p>
            <div className="grid gap-3">
              {modelInsight.rows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-md bg-muted/30 p-3 text-sm"
                >
                  <div className="font-semibold mb-1">{row.label}</div>
                  <div className="text-foreground/80">{row.value}</div>
                </div>
              ))}
            </div>
            <Link
              href={modelInsight.link.href}
              className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:underline"
            >
              {modelInsight.link.label}
            </Link>
          </section>
        )}

        <section className="mb-8 rounded-lg border border-border p-5">
          <h2 className="text-xl font-bold mb-3">{copy.statusBasisTitle}</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">{getStatusBasis(gpu, locale)}</p>
          <p className="mt-3 text-xs text-muted-foreground">{copy.lastChecked}</p>
        </section>

        {modelInsight && (
          <section className="mb-8 rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-4">{copy.comparisonTitle}</h2>
            <div className="grid gap-3">
              {modelInsight.comparison.map((row) => (
                <div key={row.label} className="rounded-md bg-muted/30 p-3 text-sm">
                  <div className="font-semibold mb-1">{row.label}</div>
                  <div className="text-foreground/80">{row.value}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">{copy.whatIsTitle}</h2>
          <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
            <p>{copy.paragraph1}</p>
            <p>{copy.paragraph2}</p>
            <p>{copy.paragraph3}</p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-border p-5">
          <h2 className="text-xl font-bold mb-4">{copy.sourceTitle}</h2>
          <div className="grid gap-3 text-sm">
            <a
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 announcement and launch-window details
            </a>
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline"
            >
              NVIDIA DLSS technology and supported hardware table
            </a>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-md bg-muted/30 p-3 text-blue-400 hover:underline"
            >
              DLSS 5 Evidence Tracker
            </Link>
          </div>
        </section>

        {modelInsight && (
          <section className="mb-8 rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-3">{copy.changeTitle}</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {modelInsight.changeAnswer}
            </p>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">{copy.faqTitle}</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">{copy.faq1(gpu)}</h3>
              <p className="text-sm text-foreground/80">{gpu.summary}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">{copy.faq2(gpu)}</h3>
              <p className="text-sm text-foreground/80">{copy.faq2Answer}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">{copy.faq3(gpu)}</h3>
              <p className="text-sm text-foreground/80">
                {gpu.current_dlss_features.length > 0
                  ? gpu.current_dlss_features
                      .map((feature) => getLocalizedFeatureLabel(feature, locale))
                      .join("; ")
                  : copy.noFeatures(gpu)}
              </p>
            </div>
          </div>
        </section>

        {relatedGPUs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">{copy.relatedTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedGPUs.map((related) => {
                const relatedConfig = STATUS_CONFIG[related.dlss5_support];
                return (
                  <Link
                    key={related.id}
                    href={getGpuPageHref(locale, related.id)}
                    className="flex items-center justify-between p-3 rounded-md border border-border hover:border-foreground/30 transition-colors"
                  >
                    <span className="text-sm font-medium">{related.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${relatedConfig.badgeClass}`}
                    >
                      {relatedConfig.label[locale]}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="border border-border rounded-lg p-5 text-center">
          <p className="text-sm text-muted-foreground mb-3">{copy.ctaText}</p>
          <Link
            href={copy.homeHref}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            {`← ${copy.ctaButton}`}
          </Link>
        </div>
      </main>
    </>
  );
}
