"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import GPUSearch from "@/components/GPUSearch";
import CompatibilityResult from "@/components/CompatibilityResult";
import AdSlot from "@/components/AdSlot";
import { getGpuById, type GPU } from "@/lib/gpu-search";

// Shared result links look like /?gpu=rtx-4070 (or /pt?gpu=rtx-4070). The
// canonical URL stays the bare page, so these links add no duplicate pages.
const GPU_PARAM = "gpu";

const subscribeNever = () => () => {};
const readSharedId = () => new URLSearchParams(window.location.search).get(GPU_PARAM);
const readNoSharedId = () => null;

function syncGpuParam(gpu: GPU | null) {
  const url = new URL(window.location.href);
  if (gpu) url.searchParams.set(GPU_PARAM, gpu.id);
  else url.searchParams.delete(GPU_PARAM);
  window.history.replaceState(window.history.state, "", url);
}

type Selection = { gpu: GPU | null; notFound: boolean };

export default function GPUChecker() {
  // Read once from the address bar; later URL updates come from our own searches.
  const sharedId = useSyncExternalStore(subscribeNever, readSharedId, readNoSharedId);
  const shared = sharedId ? getGpuById(sharedId) : undefined;
  const [selection, setSelection] = useState<Selection>();
  const result = selection ? selection.gpu : (shared ?? null);
  const notFound = selection?.notFound ?? false;
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shared) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [shared]);

  const handleSearch = (gpu: GPU | null) => {
    setSelection({ gpu, notFound: gpu === null });
    syncGpuParam(gpu);
  };

  return (
    <div className="space-y-6">
      <GPUSearch key={shared?.id ?? "empty"} onResult={handleSearch} initialQuery={shared?.name} />
      <p className="text-xs text-muted-foreground">
        Matches the model you enter against our compatibility list. It does not scan
        your hardware, installed driver, or games. Include Laptop or Ti when applicable.
      </p>

      {notFound && !result && (
        <div className="text-center text-muted-foreground text-sm py-4">
          <p>GPU not found. Try searching by model number (e.g. &quot;3060&quot;, &quot;4070&quot;, &quot;5080&quot;).</p>
          <p className="mt-1">You can also browse the full list below.</p>
        </div>
      )}

      {result && (
        <div ref={resultRef} className="scroll-mt-4 space-y-6">
          <CompatibilityResult gpu={result} />
          <AdSlot slot="result-below" />
        </div>
      )}
    </div>
  );
}
