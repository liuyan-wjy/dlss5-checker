"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ALL_GPUS, type DlssSupport } from "@/lib/gpu-search";
import { getGpuPageHref, isEnabledGpuSlug, type SupportedLocale } from "@/lib/gpu-page-config";

const SERIES_OPTIONS = [
  "All",
  "RTX 50",
  "RTX 40",
  "RTX 30",
  "RTX 20",
  "GTX 10",
  "AMD RX 7000",
  "Intel Arc Battlemage",
];

const supportConfig: Record<DlssSupport, { label: Record<SupportedLocale, string>; className: string }> = {
  confirmed: {
    label: { en: "Confirmed", pt: "Confirmada" },
    className: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  planned: {
    label: { en: "Planned", pt: "Planejada" },
    className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  unsupported: {
    label: { en: "Unsupported", pt: "Sem suporte oficial" },
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  none: {
    label: { en: "None", pt: "Sem DLSS" },
    className: "bg-red-500/20 text-red-400 border-red-500/30",
  },
};

const tableCopy = {
  en: {
    all: "All",
    gpu: "GPU",
    series: "Series",
    vram: "VRAM",
    status: "DLSS 5 Status",
    currentFeature: "Current DLSS Feature",
    showing: (count: number) =>
      `Showing ${count} GPUs. DLSS 5 Neural Rendering status is split into confirmed, planned, unsupported, and no-DLSS groups.`,
  },
  pt: {
    all: "Todas",
    gpu: "GPU",
    series: "Série",
    vram: "VRAM",
    status: "Status do DLSS 5",
    currentFeature: "Recurso DLSS atual",
    showing: (count: number) =>
      `Mostrando ${count} GPUs. O status do DLSS 5 Neural Rendering é dividido em confirmado, planejado, sem suporte oficial e sem DLSS.`,
  },
};

interface SupportedGPUsTableProps {
  locale?: SupportedLocale;
}

function getSeriesLabel(series: string, locale: SupportedLocale) {
  return series === "All" ? tableCopy[locale].all : series;
}

function getCurrentFeatureText(gpu: (typeof ALL_GPUS)[number], locale: SupportedLocale) {
  if (locale === "pt") {
    if (gpu.dlss5_support === "confirmed") {
      return gpu.current_dlss_features.includes("dynamic_mfg_6x")
        ? "DLSS 4.5 Dynamic 6X MFG"
        : "DLSS 4 Multi Frame Generation";
    }

    if (gpu.dlss5_support === "planned") {
      return gpu.current_dlss_features.includes("frame_generation")
        ? "DLSS 3 Frame Generation"
        : "DLSS Super Resolution";
    }

    if (gpu.dlss5_support === "unsupported") {
      return "DLSS 3.5 (Super Resolution + Ray Reconstruction)";
    }

    if (gpu.brand === "AMD") {
      return "Use FSR 4 como alternativa";
    }

    if (gpu.brand === "Intel") {
      return "Use XeSS como alternativa";
    }

    return "Sem suporte ao DLSS";
  }

  if (gpu.dlss5_support === "confirmed") {
    return gpu.current_dlss_features.includes("dynamic_mfg_6x")
      ? "DLSS 4.5 Dynamic 6X MFG"
      : "DLSS 4 Multi Frame Generation";
  }

  if (gpu.dlss5_support === "planned") {
    return gpu.current_dlss_features.includes("frame_generation")
      ? "DLSS 3 Frame Generation"
      : "DLSS Super Resolution";
  }

  if (gpu.dlss5_support === "unsupported") {
    return "DLSS 3.5 (Super Resolution + Ray Reconstruction)";
  }

  if (gpu.brand === "AMD") {
    return "Use FSR 4 instead";
  }

  if (gpu.brand === "Intel") {
    return "Use XeSS instead";
  }

  return "No DLSS support";
}

export default function SupportedGPUsTable({
  locale = "en",
}: SupportedGPUsTableProps) {
  const [selectedSeries, setSelectedSeries] = useState("All");
  const copy = tableCopy[locale];

  const filtered =
    selectedSeries === "All"
      ? ALL_GPUS
      : ALL_GPUS.filter((g) => g.series === selectedSeries);

  return (
    <div>
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SERIES_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setSelectedSeries(s)}
            className={`px-3 py-1 rounded-full text-sm border transition-colors ${
              selectedSeries === s
                ? "bg-green-500 text-white border-green-500"
                : "border-border text-muted-foreground hover:border-green-500/50"
            }`}
          >
            {getSeriesLabel(s, locale)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <caption className="sr-only">{copy.status} by GPU model</caption>
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 font-semibold">{copy.gpu}</th>
              <th className="text-left px-4 py-3 font-semibold">{copy.series}</th>
              <th className="text-left px-4 py-3 font-semibold">{copy.vram}</th>
              <th className="text-left px-4 py-3 font-semibold">{copy.status}</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">{copy.currentFeature}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((gpu, i) => {
              const cfg = supportConfig[gpu.dlss5_support];
              return (
                <tr
                  key={gpu.id}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/20"} hover:bg-muted/40 transition-colors`}
                >
                  <td className="px-4 py-3 font-medium">
                    {isEnabledGpuSlug(locale, gpu.id) ? (
                      <Link
                        href={getGpuPageHref(locale, gpu.id)}
                        className="hover:text-blue-400 hover:underline transition-colors"
                      >
                        {gpu.name}
                      </Link>
                    ) : gpu.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{gpu.series}</td>
                  <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`${cfg.className} text-xs`}>
                      {cfg.label[locale]}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">
                    {getCurrentFeatureText(gpu, locale)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        {copy.showing(filtered.length)}
      </p>
    </div>
  );
}
