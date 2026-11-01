"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ALL_GPUS, getFeatureLabel, getGpuById } from "@/lib/gpu-search";
import { compareGpus } from "@/lib/gpu-compare";

const subscribeNever = () => () => {};
const readSearch = () => window.location.search;
const readNoSearch = () => "";
const features = [
  "dlss_super_resolution", "dlaa", "ray_reconstruction", "frame_generation",
  "multi_frame_generation_4x", "dynamic_mfg_6x", "neural_rendering",
];
const supportLabels = {
  confirmed: "Confirmed (available now)",
  planned: "Planned, no public date",
  unsupported: "Not officially supported",
  none: "No DLSS support",
};
type Pair = { from: string; to: string };

export default function GpuCompare() {
  const search = useSyncExternalStore(subscribeNever, readSearch, readNoSearch);
  const params = new URLSearchParams(search);
  const [selection, setSelection] = useState<Pair>();
  const pair = selection ?? {
    from: getGpuById(params.get("from") ?? "")?.id ?? "",
    to: getGpuById(params.get("to") ?? "")?.id ?? "",
  };
  const from = getGpuById(pair.from);
  const to = getGpuById(pair.to);
  const comparison = from && to ? compareGpus(from, to) : null;

  function selectGpu(field: keyof Pair, value: string | null) {
    const next = { ...pair, [field]: getGpuById(value ?? "")?.id ?? "" };
    setSelection(next);
    const url = new URL(window.location.href);
    for (const key of ["from", "to"] as const) {
      if (next[key]) url.searchParams.set(key, next[key]);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(window.history.state, "", url);
    if (next.from && next.to && (next.from !== pair.from || next.to !== pair.to)) {
      window.plausible?.("Compare GPUs", { props: { from: next.from, to: next.to } });
    }
  }

  return (
    <section id="gpu-compare" className="mb-10" aria-labelledby="gpu-compare-heading">
      <h2 id="gpu-compare-heading" className="mb-4 text-2xl font-bold">Compare two GPUs</h2>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {(["from", "to"] as const).map((field) => (
          <div key={field} className="min-w-0">
            <label id={`compare-${field}-label`} htmlFor={`compare-${field}`} className="mb-2 block text-sm font-medium">
              {field === "from" ? "Current GPU" : "Target GPU"}
            </label>
            <Select value={pair[field] || null} onValueChange={(value) => selectGpu(field, value)}>
              <SelectTrigger id={`compare-${field}`} aria-labelledby={`compare-${field}-label`} className="h-10 w-full">
                <SelectValue>{getGpuById(pair[field])?.name ?? "Choose a GPU"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {ALL_GPUS.map((gpu) => <SelectItem key={gpu.id} value={gpu.id}>{gpu.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <div aria-live="polite">
        {from && to && comparison ? (
          <table className="mb-4 w-full table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">Feature support comparison: {from.name} to {to.name}</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="w-[34%] p-2 align-top">Feature</th>
                <th scope="col" className="p-2 align-top break-words">{from.name}</th>
                <th scope="col" className="p-2 align-top break-words">{to.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <th scope="row" className="p-2 align-top font-medium">VRAM</th>
                <td className="p-2 align-top break-words">{from.vram}</td>
                <td className="p-2 align-top break-words">
                  {to.vram}
                  {comparison.vramDelta !== null && comparison.vramDelta !== 0 && (
                    <span className="mt-1 block text-xs font-medium">
                      {Math.abs(comparison.vramDelta)}GB {comparison.vramDelta > 0 ? "more" : "less"}
                    </span>
                  )}
                </td>
              </tr>
              <tr className="border-b border-border">
                <th scope="row" className="p-2 align-top font-medium">DLSS 5 status</th>
                <td className="p-2 align-top">{supportLabels[from.dlss5_support]}</td>
                <td className="p-2 align-top">{supportLabels[to.dlss5_support]}</td>
              </tr>
              {features.map((feature) => {
                const added = comparison.added.includes(feature);
                const removed = comparison.removed.includes(feature);
                const same = comparison.unchanged.includes(feature);
                return (
                  <tr key={feature} className="border-b border-border">
                    <th scope="row" className="p-2 align-top font-medium break-words">{getFeatureLabel(feature).split(" -- ")[0]}</th>
                    <td className="p-2 align-top">{same || removed ? "Yes" : "No"}</td>
                    <td className={`p-2 align-top ${added ? "bg-green-500/10 font-semibold text-green-400" : removed ? "bg-amber-500/10 text-amber-400" : ""}`}>
                      {added ? "Yes — Added" : removed ? "No — Lost" : same ? "Yes" : "No"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <p className="mb-4 text-sm text-muted-foreground">Choose both cards to compare their available features.</p>}
      </div>
      <p className="text-sm text-muted-foreground">
        Feature support only. This does not predict frame rates;{" "}
        <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">see published tests on the system requirements page.</Link>
      </p>
    </section>
  );
}
