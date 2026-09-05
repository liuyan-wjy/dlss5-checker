import { ALL_GPUS, getFeatureLabel, type DlssSupport, type GPU } from "@/lib/gpu-search";

export type SupportedLocale = "en" | "pt";

export const GPU_DETAIL_SLUGS: Record<SupportedLocale, string[]> = {
  en: ["rtx-4070", "rtx-4080", "rtx-5090", "rtx-3070", "rtx-3060"],
  pt: ["rtx-4070", "rtx-4080", "rtx-3060", "rtx-4090", "gtx-1060"],
};

const PT_FEATURE_LABELS: Record<string, string> = {
  dlss_super_resolution:
    "DLSS Super Resolution — upscaling por IA com Transformer de 2ª geração (DLSS 4/4.5)",
  dlaa: "DLAA — anti-aliasing por IA para imagem mais nítida",
  ray_reconstruction: "Ray Reconstruction — qualidade de ray tracing aprimorada por IA (DLSS 3.5+)",
  frame_generation: "Frame Generation — 1 quadro extra gerado por IA por quadro renderizado (DLSS 3, RTX 40)",
  multi_frame_generation_4x:
    "Multi Frame Generation — até 4x de saída com quadros gerados por IA (DLSS 4)",
  dynamic_mfg_6x:
    "Dynamic Multi Frame Generation 6X — até 6x de saída no DLSS 4.5",
  neural_rendering:
    "Neural Rendering — iluminação e materiais aprimorados por IA em tempo real",
};

const SUPPORT_TEXT: Record<SupportedLocale, Record<DlssSupport, string>> = {
  en: {
    confirmed: "Confirmed for DLSS 5",
    planned: "Planned for DLSS 5, not available yet",
    unsupported: "No official DLSS 5 support",
    none: "Not Supported",
  },
  pt: {
    confirmed: "Confirmada para DLSS 5",
    planned: "Planejada para DLSS 5, ainda indisponível",
    unsupported: "Sem suporte oficial ao DLSS 5",
    none: "Sem suporte",
  },
};

export function getGpuBySlug(slug: string): GPU | undefined {
  return ALL_GPUS.find((gpu) => gpu.id === slug);
}

export function isEnabledGpuSlug(locale: SupportedLocale, slug: string): boolean {
  return GPU_DETAIL_SLUGS[locale].includes(slug);
}

export function getGpuPageHref(locale: SupportedLocale, slug: string): string {
  return locale === "pt" ? `/pt/gpu/${slug}` : `/gpu/${slug}`;
}

export function getLocalizedFeatureLabel(
  featureId: string,
  locale: SupportedLocale
): string {
  if (locale === "pt") {
    return PT_FEATURE_LABELS[featureId] ?? getFeatureLabel(featureId);
  }

  return getFeatureLabel(featureId);
}

export function getLocalizedSupportText(
  locale: SupportedLocale,
  support: DlssSupport
): string {
  return SUPPORT_TEXT[locale][support];
}
