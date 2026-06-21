import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";
import type { GPU } from "@/lib/gpu-search";
import {
  GPU_DETAIL_SLUGS,
  getGpuBySlug,
  getGpuPageHref,
  getLocalizedFeatureLabel,
  type SupportedLocale,
} from "@/lib/gpu-page-config";

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
      en: "DLSS 5 Confirmed (Coming Fall 2026)",
      pt: "DLSS 5 confirmado (chega no outono de 2026)",
    },
  },
  expected: {
    icon: Clock,
    iconColor: "text-lime-400",
    badgeClass: "bg-lime-500/10 border-lime-500/30 text-lime-300",
    cardBorder: "border-lime-500/30",
    cardBg: "bg-lime-500/5",
    label: {
      en: "Expected",
      pt: "Esperada",
    },
    heading: {
      en: "DLSS 5 Expected, Per-Model Docs Pending",
      pt: "DLSS 5 esperado, com documentação por modelo pendente",
    },
  },
  unknown: {
    icon: Clock,
    iconColor: "text-yellow-500",
    badgeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
    label: {
      en: "Unknown",
      pt: "Desconhecida",
    },
    heading: {
      en: "DLSS 5 Support Unknown",
      pt: "Suporte ao DLSS 5 desconhecido",
    },
  },
  unlikely: {
    icon: AlertCircle,
    iconColor: "text-orange-500",
    badgeClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    cardBorder: "border-orange-500/30",
    cardBg: "bg-orange-500/5",
    label: {
      en: "Unlikely",
      pt: "Pouco provável",
    },
    heading: {
      en: "DLSS 5 Support Unlikely",
      pt: "Suporte ao DLSS 5 é improvável",
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
    updatedLabel: "Last checked June 22, 2026",
    title: (gpu: GPU) => `Does the ${gpu.name} Support DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Current DLSS Features on ${gpu.name}`,
    noFeatures: (gpu: GPU) => `The ${gpu.name} does not support DLSS features today.`,
    whatIsTitle: "What is DLSS 5?",
    paragraph1:
      "DLSS 5 introduces Neural Rendering, AI-powered enhancement of lighting and materials in real time. Unlike DLSS 4, which focused on performance through frame generation, DLSS 5 is positioned as a visual-quality upgrade.",
    paragraph2:
      "DLSS 5 was announced at GTC on March 16, 2026 and is scheduled for Fall 2026. This tracker separates confirmed RTX 50 models from expected lower-tier RTX 50 cards, unknown RTX 40 support, and unlikely RTX 20/30 support.",
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
    comparisonTitle: "Adjacent model comparison",
    lastChecked: "Last checked June 22, 2026",
    relatedTitle: "Related GPUs",
    ctaText: "Check any other GPU's DLSS 5 compatibility",
    ctaButton: "Back to GPU Checker",
  },
  pt: {
    homeLabel: "DLSS 5 Checker",
    homeHref: "/pt",
    updatedLabel: "Última verificação em 22 de junho de 2026",
    title: (gpu: GPU) => `${gpu.name}: tem suporte ao DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Recursos atuais de DLSS na ${gpu.name}`,
    noFeatures: (gpu: GPU) => `A ${gpu.name} não oferece recursos de DLSS hoje.`,
    whatIsTitle: "O que é o DLSS 5?",
    paragraph1:
      "O DLSS 5 introduz o Neural Rendering, uma camada de IA voltada para melhorar iluminação e materiais em tempo real. Ao contrário do DLSS 4, que focou em desempenho com geração de quadros, o DLSS 5 tenta elevar a fidelidade visual.",
    paragraph2:
      "A NVIDIA anunciou o DLSS 5 na GTC de 16 de março de 2026, com lançamento previsto para o outono de 2026. Este tracker separa modelos RTX 50 confirmados, RTX 50 esperados, suporte RTX 40 desconhecido e RTX 20/30 improvável.",
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
    comparisonTitle: "Comparação com modelos próximos",
    lastChecked: "Última verificação em 22 de junho de 2026",
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
        "NVIDIA would need to publish a final launch matrix excluding this model or limiting DLSS 5 to narrower configurations.",
    },
  },
  "rtx-4080": {
    en: {
      title: "What this means for RTX 4080 owners",
      intro:
        "The RTX 4080 is still a very strong DLSS card, but the DLSS 5 Neural Rendering question is unknown because NVIDIA has not published a final RTX 40 launch matrix for the new visual layer.",
      rows: [
        { label: "Current useful features", value: "Frame Generation, Super Resolution, Ray Reconstruction, and DLAA" },
        { label: "Not in the RTX 40 column", value: "Multi Frame Generation and Dynamic Multi Frame Generation" },
        { label: "DLSS 5 reading", value: "Unknown until final launch documentation, not confirmed and not ruled out" },
      ],
      link: { href: "/dlss-5-rtx-40-series", label: "Read the RTX 40 series support breakdown" },
      comparison: [
        { label: "Versus RTX 4090", value: "Lower raw headroom, but the same unknown DLSS 5 status bucket." },
        { label: "Versus RTX 4070", value: "More performance and VRAM, but no clearer public DLSS 5 confirmation today." },
      ],
      changeAnswer:
        "A final NVIDIA support table or driver note listing RTX 40 cards for DLSS 5 Neural Rendering would move this from unknown to confirmed.",
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
          value: "Unknown until final launch documentation, not confirmed for Neural Rendering",
        },
      ],
      link: {
        href: "/dlss-5-rtx-40-series",
        label: "Read the RTX 40 series support breakdown",
      },
      comparison: [
        { label: "Versus RTX 4080", value: "Less raw headroom, but both remain in the same unknown DLSS 5 bucket." },
        { label: "Versus RTX 3070", value: "Adds Frame Generation today; RTX 3070 does not have that path." },
      ],
      changeAnswer:
        "A final NVIDIA launch note confirming or excluding RTX 4070 for DLSS 5 Neural Rendering would replace this unknown status.",
    },
  },
  "rtx-3070": {
    en: {
      title: "What this means for RTX 3070 owners",
      intro:
        "The RTX 3070 still has useful DLSS image-quality features, but it does not have the RTX 40 Frame Generation path or the RTX 50 Multi Frame Generation path. That makes DLSS 5 Neural Rendering a long-shot until NVIDIA says otherwise.",
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
          value: "Unlikely based on the current public hardware split",
        },
      ],
      link: {
        href: "/dlss-5-supported-cards",
        label: "Compare all card support tiers",
      },
      comparison: [
        { label: "Versus RTX 4070", value: "RTX 4070 adds Frame Generation; RTX 3070 remains on the older DLSS image-quality stack." },
        { label: "Versus RTX 3060", value: "More performance, but the same unlikely DLSS 5 Neural Rendering status." },
      ],
      changeAnswer:
        "NVIDIA would need to publish support for RTX 30 in the DLSS 5 Neural Rendering launch documentation.",
    },
  },
  "rtx-3060": {
    en: {
      title: "What this means for RTX 3060 owners",
      intro:
        "The RTX 3060 remains useful for DLSS Super Resolution, but it does not have the RTX 40 Frame Generation path or the RTX 50 MFG path. That keeps DLSS 5 Neural Rendering in the unlikely bucket.",
      rows: [
        { label: "Current useful features", value: "Super Resolution, DLAA, and Ray Reconstruction in supported titles" },
        { label: "Missing newer frame generation", value: "No Frame Generation, Multi Frame Generation, or Dynamic MFG path" },
        { label: "DLSS 5 reading", value: "Unlikely unless NVIDIA expands the launch matrix beyond the current public split" },
      ],
      link: { href: "/dlss-5-system-requirements", label: "Read the requirements breakdown" },
      comparison: [
        { label: "Versus RTX 3070", value: "Similar status, less performance headroom in demanding DLSS titles." },
        { label: "Versus RTX 4070", value: "RTX 4070 adds Frame Generation today but still has unknown DLSS 5 status." },
      ],
      changeAnswer:
        "The answer would change only if NVIDIA lists RTX 30 cards in final DLSS 5 Neural Rendering requirements.",
    },
  },
  "rtx-4090": {
    pt: {
      title: "O que isso significa para donos de RTX 4090",
      intro:
        "A RTX 4090 continua muito forte no DLSS atual, mas a pergunta sobre DLSS 5 Neural Rendering ainda é desconhecida porque a NVIDIA não publicou uma matriz final para RTX 40.",
      rows: [
        { label: "Recursos úteis hoje", value: "Frame Generation, Super Resolution, Ray Reconstruction e DLAA" },
        { label: "Fora da coluna RTX 40", value: "Multi Frame Generation e Dynamic Multi Frame Generation" },
        { label: "Leitura para DLSS 5", value: "Desconhecida até a documentação final de lançamento" },
      ],
      link: { href: "/dlss-5-rtx-40-series", label: "Ver análise da série RTX 40" },
      comparison: [
        { label: "Versus RTX 4080", value: "Mais desempenho bruto, mas o mesmo status desconhecido para DLSS 5." },
        { label: "Versus RTX 5090", value: "A RTX 5090 fica no caminho RTX 50 mais claro para DLSS 5." },
      ],
      changeAnswer:
        "Uma tabela final da NVIDIA listando RTX 40 para DLSS 5 Neural Rendering mudaria esta resposta.",
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
        { label: "Versus RTX 2060", value: "RTX 2060 já entra na família RTX e pode usar Super Resolution, mas DLSS 5 ainda é improvável." },
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
    if (gpu.dlss5_support === "unknown") {
      return "A placa roda recursos atuais de DLSS, mas a NVIDIA ainda não publicou uma matriz final de DLSS 5 para esta geração.";
    }
    return "O status usa a geração da GPU, os recursos DLSS atuais e a documentação pública da NVIDIA como fonte primária.";
  }

  if (gpu.dlss5_support === "confirmed") {
    return "This card is in the clearest RTX 50 DLSS 5 path, while final driver, game, and per-model launch documentation still matter.";
  }
  if (gpu.dlss5_support === "expected") {
    return "This card is part of the RTX 50 generation, but this tracker keeps it below confirmed until final per-model launch documentation is public.";
  }
  if (gpu.dlss5_support === "unknown") {
    return "This card has strong current DLSS support, but NVIDIA has not published final DLSS 5 Neural Rendering support details for its generation.";
  }
  if (gpu.dlss5_support === "unlikely") {
    return "This card lacks the newer frame-generation path shown for RTX 40 and RTX 50, so DLSS 5 Neural Rendering remains unlikely unless NVIDIA expands support.";
  }
  return "This card is outside NVIDIA RTX DLSS support. Use vendor alternatives such as AMD FSR or Intel XeSS where available.";
}

export default function GPUDetailPage({ gpu, locale }: GPUDetailPageProps) {
  const cfg = STATUS_CONFIG[gpu.dlss5_support];
  const Icon = cfg.icon;
  const copy = COPY[locale];
  const relatedGPUs = getRelatedGPUs(gpu, locale);
  const modelInsight = MODEL_INSIGHTS[gpu.id]?.[locale];
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
