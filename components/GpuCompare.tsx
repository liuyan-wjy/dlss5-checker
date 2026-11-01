"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeftRight, Check, ChevronDown, Minus } from "lucide-react";
import { ALL_GPUS, getGpuById, type GPU } from "@/lib/gpu-search";
import { compareGpus, shortGpuName } from "@/lib/gpu-compare";

const subscribeNever = () => () => {};
const readSearch = () => window.location.search;
const readNoSearch = () => "";

const FEATURES = [
  { id: "dlss_super_resolution", label: "DLSS Super Resolution", hint: "AI upscaling, every RTX card" },
  { id: "dlaa", label: "DLAA", hint: "AI anti-aliasing at native resolution" },
  { id: "ray_reconstruction", label: "Ray Reconstruction", hint: "AI denoising for ray tracing" },
  { id: "frame_generation", label: "Frame Generation (2X)", hint: "RTX 40 and newer" },
  { id: "multi_frame_generation_4x", label: "Multi Frame Generation (3X/4X)", hint: "RTX 50" },
  { id: "dynamic_mfg_6x", label: "Dynamic MFG and 6X", hint: "RTX 50, DLSS 4.5" },
  { id: "neural_rendering", label: "DLSS 5 Neural Rendering", hint: "RTX 50 and RTX Spark today" },
];

const STATUS: Record<GPU["dlss5_support"], { label: string; className: string }> = {
  confirmed: { label: "Supported now", className: "text-green-400" },
  planned: { label: "Planned, no date", className: "text-yellow-400" },
  unsupported: { label: "Not supported", className: "text-orange-400" },
  none: { label: "No DLSS", className: "text-red-400" },
};

const DEFAULT_PAIR = { from: "rtx-3060", to: "rtx-5070" };
const PRESETS = [
  { from: "rtx-3060", to: "rtx-5070" },
  { from: "rtx-4070", to: "rtx-5070" },
  { from: "rtx-4090", to: "rtx-5090" },
  { from: "amd-rx-7900-xtx", to: "rtx-5080" },
];

const SERIES = [...new Set(ALL_GPUS.map((gpu) => gpu.series))];

type Pair = { from: string; to: string };

function GpuSelect({ field, value, onChange }: { field: keyof Pair; value: string; onChange: (id: string) => void }) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={`compare-${field}`} className="text-sm font-semibold">
        {field === "from" ? "Current GPU" : "Target GPU"}
      </label>
      <div className="relative">
        <select
          id={`compare-${field}`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-12 w-full appearance-none rounded-lg border border-border bg-card pl-3.5 pr-10 text-[15px] text-foreground"
        >
          {SERIES.map((series) => (
            <optgroup key={series} label={series}>
              {ALL_GPUS.filter((gpu) => gpu.series === series).map((gpu) => (
                <option key={gpu.id} value={gpu.id}>{shortGpuName(gpu.name)}</option>
              ))}
            </optgroup>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      </div>
    </div>
  );
}

function Supported({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-green-400" aria-hidden="true" />Yes</span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Minus className="h-4 w-4" aria-hidden="true" />No</span>
  );
}

function memoryText(from: GPU, to: GPU, delta: number | null) {
  if (delta === null) return `${from.vram} → ${to.vram}`;
  if (delta === 0) return `${from.vram} → ${to.vram} (same)`;
  return `${from.vram} → ${to.vram} (${delta > 0 ? "+" : "−"}${Math.abs(delta)}GB)`;
}

export default function GpuCompare() {
  const search = useSyncExternalStore(subscribeNever, readSearch, readNoSearch);
  const params = new URLSearchParams(search);
  const [selection, setSelection] = useState<Pair>();
  const pair = selection ?? {
    from: getGpuById(params.get("from") ?? "")?.id ?? DEFAULT_PAIR.from,
    to: getGpuById(params.get("to") ?? "")?.id ?? DEFAULT_PAIR.to,
  };
  const from = getGpuById(pair.from)!;
  const to = getGpuById(pair.to)!;
  const comparison = compareGpus(from, to);
  const fromName = shortGpuName(from.name);
  const toName = shortGpuName(to.name);
  const fromCount = comparison.unchanged.length + comparison.removed.length;
  const toCount = comparison.unchanged.length + comparison.added.length;
  const added = FEATURES.filter((f) => comparison.added.includes(f.id));
  const lost = FEATURES.filter((f) => comparison.removed.includes(f.id));

  function choose(next: Pair) {
    if (next.from === pair.from && next.to === pair.to) return;
    setSelection(next);
    const url = new URL(window.location.href);
    url.searchParams.set("from", next.from);
    url.searchParams.set("to", next.to);
    window.history.replaceState(window.history.state, "", url);
    window.plausible?.("Compare GPUs", { props: { from: next.from, to: next.to } });
  }

  return (
    <section id="gpu-compare" className="mb-10 space-y-6" aria-labelledby="gpu-compare-heading">
      <div className="space-y-2">
        <h2 id="gpu-compare-heading" className="text-2xl font-bold">Compare two GPUs</h2>
        <p className="text-muted-foreground leading-relaxed">
          See which DLSS features you gain or lose by switching cards.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:items-center sm:overflow-visible">
        <span className="hidden text-sm text-muted-foreground sm:inline">Popular:</span>
        {PRESETS.map((preset) => {
          const active = preset.from === pair.from && preset.to === pair.to;
          return (
            <button
              key={`${preset.from}-${preset.to}`}
              type="button"
              aria-pressed={active}
              onClick={() => choose(preset)}
              className={`h-9 flex-none rounded-full border px-3.5 text-sm transition-colors ${
                active ? "border-foreground bg-foreground text-background" : "border-border hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {shortGpuName(getGpuById(preset.from)!.name)} → {shortGpuName(getGpuById(preset.to)!.name)}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] sm:items-end">
        <GpuSelect field="from" value={pair.from} onChange={(id) => choose({ ...pair, from: id })} />
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => choose({ from: pair.to, to: pair.from })}
            aria-label="Swap current and target GPU"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-blue-400 sm:h-12 sm:rounded-lg"
          >
            <ArrowLeftRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden="true" />
          </button>
        </div>
        <GpuSelect field="to" value={pair.to} onChange={(id) => choose({ ...pair, to: id })} />
      </div>

      <div aria-live="polite" className="space-y-6">
        <div className="space-y-4 rounded-xl border border-border bg-card/60 p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-lg font-bold sm:text-xl">
              {fromName} <span className="font-normal text-muted-foreground">→</span> {toName}
            </p>
            <p className="text-sm text-muted-foreground">{added.length} added · {lost.length} lost</p>
          </div>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-muted/40 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">DLSS 5 status</dt>
              <dd className="mt-1 text-sm">
                <span className={STATUS[from.dlss5_support].className}>{STATUS[from.dlss5_support].label}</span>
                {" → "}
                <span className={STATUS[to.dlss5_support].className}>{STATUS[to.dlss5_support].label}</span>
              </dd>
            </div>
            <div className="rounded-lg bg-muted/40 p-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">VRAM</dt>
              <dd className="mt-1 text-sm">{memoryText(from, to, comparison.vramDelta)}</dd>
            </div>
            <div className="col-span-2 rounded-lg bg-muted/40 p-3 sm:col-span-1">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">DLSS features</dt>
              <dd className="mt-1 text-sm">{fromCount} of {FEATURES.length} → {toCount} of {FEATURES.length}</dd>
            </div>
          </dl>
          {added.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">You gain:</span>
              {added.map((f) => (
                <span key={f.id} className="rounded-full border border-green-400/35 bg-green-500/15 px-2.5 py-1 text-xs text-green-400">+ {f.label}</span>
              ))}
            </div>
          )}
          {lost.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">You lose:</span>
              {lost.map((f) => (
                <span key={f.id} className="rounded-full border border-amber-400/35 bg-amber-500/15 px-2.5 py-1 text-xs text-amber-400">− {f.label}</span>
              ))}
            </div>
          )}
          {added.length === 0 && lost.length === 0 && (
            <p className="text-sm text-muted-foreground">Both cards support the same DLSS features.</p>
          )}
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">DLSS feature support: {fromName} compared with {toName}</caption>
            <thead className="bg-muted/40">
              <tr>
                <th scope="col" className="w-[48%] p-3 font-semibold sm:w-[44%] sm:px-4">Feature</th>
                <th scope="col" className="p-3 font-semibold break-words sm:px-4">{fromName}</th>
                <th scope="col" className="p-3 font-semibold break-words sm:px-4">{toName}</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f) => {
                const isNew = comparison.added.includes(f.id);
                const isLost = comparison.removed.includes(f.id);
                const hasFrom = comparison.unchanged.includes(f.id) || isLost;
                const hasTo = comparison.unchanged.includes(f.id) || isNew;
                return (
                  <tr key={f.id} className="border-t border-border/70">
                    <th scope="row" className="p-3 align-top font-medium sm:px-4">
                      {f.label}
                      <span className="mt-0.5 hidden text-xs font-normal text-muted-foreground sm:block">{f.hint}</span>
                    </th>
                    <td className="p-3 align-top sm:px-4"><Supported yes={hasFrom} /></td>
                    <td className={`p-3 align-top sm:px-4 ${isNew ? "bg-green-500/10" : isLost ? "bg-amber-500/10" : ""}`}>
                      <span className="flex flex-wrap items-center gap-2">
                        <Supported yes={hasTo} />
                        {isNew && <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-semibold text-green-400">New</span>}
                        {isLost && <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-400">Lost</span>}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Feature support only. This does not predict frame rates;{" "}
        <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">see published tests on the system requirements page.</Link>
      </p>
    </section>
  );
}
