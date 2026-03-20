"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ALL_GPUS, type DlssSupport } from "@/lib/gpu-search";

const GPU_PAGES = new Set(["rtx-4070", "rtx-4080"]);

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

const supportConfig: Record<DlssSupport, { label: string; className: string }> = {
  confirmed: { label: "Confirmed", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  possible: { label: "Possible", className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  unlikely: { label: "Unlikely", className: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  none: { label: "None", className: "bg-red-500/20 text-red-400 border-red-500/30" },
};

export default function SupportedGPUsTable() {
  const [selectedSeries, setSelectedSeries] = useState("All");

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
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 font-semibold">GPU</th>
              <th className="text-left px-4 py-3 font-semibold">Series</th>
              <th className="text-left px-4 py-3 font-semibold">VRAM</th>
              <th className="text-left px-4 py-3 font-semibold">DLSS 5 Status</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Current DLSS Feature</th>
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
                    {GPU_PAGES.has(gpu.id) ? (
                      <a href={`/gpu/${gpu.id}`} className="hover:text-blue-400 hover:underline transition-colors">
                        {gpu.name}
                      </a>
                    ) : gpu.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{gpu.series}</td>
                  <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`${cfg.className} text-xs`}>
                      {cfg.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs hidden md:table-cell">
                    {gpu.dlss5_support === "confirmed"
                      ? gpu.current_dlss_features.includes("dynamic_mfg_6x")
                        ? "DLSS 4.5 Dynamic 6X MFG"
                        : "DLSS 4 Multi Frame Generation"
                      : gpu.dlss5_support === "possible"
                      ? gpu.current_dlss_features.includes("frame_generation")
                        ? "DLSS 3 Frame Generation"
                        : "DLSS Super Resolution"
                      : gpu.dlss5_support === "unlikely"
                      ? "DLSS 3.5 (Super Resolution + Ray Reconstruction)"
                      : gpu.brand === "AMD"
                      ? "Use FSR 4 instead"
                      : gpu.brand === "Intel"
                      ? "Use XeSS instead"
                      : "No DLSS support"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Showing {filtered.length} GPUs. DLSS 5 Neural Rendering is confirmed for RTX 50 series (Fall 2026). Other architectures are unconfirmed.
      </p>
    </div>
  );
}
