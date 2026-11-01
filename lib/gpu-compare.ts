import type { GPU } from "@/lib/gpu-search";

function availableFeatures(gpu: GPU) {
  const features = new Set([...gpu.current_dlss_features, ...gpu.dlss5_features]);
  // RTX 50 data uses MFG as its frame-generation path; the support matrix also includes FG.
  if (features.has("multi_frame_generation_4x") || features.has("dynamic_mfg_6x")) {
    features.add("frame_generation");
  }
  return features;
}

export function compareGpus(from: GPU, to: GPU) {
  const current = availableFeatures(from);
  const target = availableFeatures(to);
  const fromMemory = from.vram.match(/^(\d+)GB$/);
  const toMemory = to.vram.match(/^(\d+)GB$/);

  return {
    added: [...target].filter((feature) => !current.has(feature)),
    removed: [...current].filter((feature) => !target.has(feature)),
    unchanged: [...current].filter((feature) => target.has(feature)),
    // Only single, dedicated-memory capacities have an unambiguous numeric difference.
    vramDelta: fromMemory && toMemory ? Number(toMemory[1]) - Number(fromMemory[1]) : null,
  };
}
