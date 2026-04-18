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
  possible: {
    icon: Clock,
    iconColor: "text-yellow-500",
    badgeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
    label: {
      en: "Possible — Unconfirmed",
      pt: "Possível, sem confirmação",
    },
    heading: {
      en: "DLSS 5 Support: Possible but Unconfirmed",
      pt: "Suporte ao DLSS 5: possível, mas sem confirmação",
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
    updatedLabel: "Updated April 2026",
    title: (gpu: GPU) => `Does the ${gpu.name} Support DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Current DLSS Features on ${gpu.name}`,
    noFeatures: (gpu: GPU) => `The ${gpu.name} does not support DLSS features today.`,
    whatIsTitle: "What is DLSS 5?",
    paragraph1:
      "DLSS 5 introduces Neural Rendering, AI-powered enhancement of lighting and materials in real time. Unlike DLSS 4, which focused on performance through frame generation, DLSS 5 is positioned as a visual-quality upgrade.",
    paragraph2:
      "DLSS 5 was announced at GTC on March 16, 2026 and is scheduled for Fall 2026. NVIDIA has confirmed RTX 50 series support, while support for older RTX generations remains unclear or unlikely depending on the card.",
    paragraph3:
      "That makes model-specific compatibility pages useful: users want to know whether their current GPU is confirmed, what it can do today with DLSS 4 or 4.5, and whether an upgrade is worth it.",
    faqTitle: "Frequently Asked Questions",
    faq1: (gpu: GPU) => `Does the ${gpu.name} support DLSS 5?`,
    faq2: (gpu: GPU) => `Should I upgrade from ${gpu.name} for DLSS 5?`,
    faq2Answer:
      "If DLSS 5 Neural Rendering is a must-have feature for you, RTX 50 series cards are the safest bet today. For every other GPU generation, it still makes sense to wait for official support details before buying solely for DLSS 5.",
    faq3: (gpu: GPU) => `What can the ${gpu.name} do with DLSS today?`,
    relatedTitle: "Related GPUs",
    ctaText: "Check any other GPU's DLSS 5 compatibility",
    ctaButton: "Back to GPU Checker",
  },
  pt: {
    homeLabel: "DLSS 5 Checker",
    homeHref: "/pt",
    updatedLabel: "Atualizado em abril de 2026",
    title: (gpu: GPU) => `${gpu.name}: tem suporte ao DLSS 5?`,
    currentFeaturesTitle: (gpu: GPU) => `Recursos atuais de DLSS na ${gpu.name}`,
    noFeatures: (gpu: GPU) => `A ${gpu.name} não oferece recursos de DLSS hoje.`,
    whatIsTitle: "O que é o DLSS 5?",
    paragraph1:
      "O DLSS 5 introduz o Neural Rendering, uma camada de IA voltada para melhorar iluminação e materiais em tempo real. Ao contrário do DLSS 4, que focou em desempenho com geração de quadros, o DLSS 5 tenta elevar a fidelidade visual.",
    paragraph2:
      "A NVIDIA anunciou o DLSS 5 na GTC de 16 de março de 2026, com lançamento previsto para o outono de 2026. A série RTX 50 está confirmada. Nas gerações anteriores, o cenário ainda varia entre possível, improvável ou sem suporte.",
    paragraph3:
      "Por isso as páginas por modelo ajudam tanto: quem pesquisa quer saber se a placa atual está confirmada, o que ela entrega hoje com DLSS 4 ou 4.5, e se vale gastar dinheiro em upgrade.",
    faqTitle: "Perguntas frequentes",
    faq1: (gpu: GPU) => `A ${gpu.name} suporta DLSS 5?`,
    faq2: (gpu: GPU) => `Vale trocar a ${gpu.name} por causa do DLSS 5?`,
    faq2Answer:
      "Se o DLSS 5 Neural Rendering é prioridade para você, a série RTX 50 continua sendo a aposta mais segura hoje. Para as demais gerações, faz mais sentido esperar os requisitos oficiais antes de comprar uma nova GPU só por esse motivo.",
    faq3: (gpu: GPU) => `O que a ${gpu.name} já faz com DLSS hoje?`,
    relatedTitle: "GPUs relacionadas",
    ctaText: "Confira a compatibilidade de qualquer outra GPU com DLSS 5",
    ctaButton: "Voltar ao verificador",
  },
} as const;

function getRelatedGPUs(gpu: GPU, locale: SupportedLocale): GPU[] {
  return GPU_DETAIL_SLUGS[locale]
    .filter((slug) => slug !== gpu.id)
    .map((slug) => getGpuBySlug(slug))
    .filter((candidate): candidate is GPU => Boolean(candidate))
    .filter((candidate) => candidate.series === gpu.series)
    .slice(0, 3);
}

export default function GPUDetailPage({ gpu, locale }: GPUDetailPageProps) {
  const cfg = STATUS_CONFIG[gpu.dlss5_support];
  const Icon = cfg.icon;
  const copy = COPY[locale];
  const relatedGPUs = getRelatedGPUs(gpu, locale);
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

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">{copy.whatIsTitle}</h2>
          <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
            <p>{copy.paragraph1}</p>
            <p>{copy.paragraph2}</p>
            <p>{copy.paragraph3}</p>
          </div>
        </section>

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
