"use client";

import { useState } from "react";
import GPUSearch from "@/components/GPUSearch";
import CompatibilityResult from "@/components/CompatibilityResult";
import AdSlot from "@/components/AdSlot";
import { type GPU } from "@/lib/gpu-search";

export default function GPUChecker() {
  const [result, setResult] = useState<GPU | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (gpu: GPU | null) => {
    if (gpu === null) {
      setNotFound(true);
      setResult(null);
    } else {
      setNotFound(false);
      setResult(gpu);
    }
  };

  return (
    <div className="space-y-6">
      <GPUSearch onResult={handleSearch} />
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
        <div className="space-y-6">
          <CompatibilityResult gpu={result} />
          <AdSlot slot="result-below" />
        </div>
      )}
    </div>
  );
}
