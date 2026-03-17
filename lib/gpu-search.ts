import Fuse from "fuse.js";
import gpuData from "@/data/gpu-data.json";

export type DlssSupport = "confirmed" | "possible" | "unlikely" | "none";

export interface GPU {
  id: string;
  name: string;
  aliases: string[];
  series: string;
  dlss5_support: DlssSupport;
  dlss5_features: string[];
  current_dlss_features: string[];
  missing_features: string[];
  summary: string;
  vram: string;
  tier: string;
  brand?: string;
}

// Flatten aliases into searchable records
const searchItems = gpuData.gpus.flatMap((gpu) => [
  { ...gpu, searchKey: gpu.name },
  ...gpu.aliases.map((alias) => ({ ...gpu, searchKey: alias })),
]);

const fuse = new Fuse(searchItems, {
  keys: ["searchKey"],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
});

export function searchGPU(query: string): GPU | null {
  if (!query || query.trim().length < 2) return null;

  const trimmed = query.trim();
  const results = fuse.search(trimmed);

  if (results.length === 0) return null;

  // Return the best match (deduplicated by id)
  const seen = new Set<string>();
  for (const result of results) {
    if (!seen.has(result.item.id)) {
      seen.add(result.item.id);
      return result.item as GPU;
    }
  }
  return null;
}

export function getSuggestions(query: string): GPU[] {
  if (!query || query.trim().length < 2) return [];

  const results = fuse.search(query.trim(), { limit: 8 });

  // Deduplicate by id, preserve order
  const seen = new Set<string>();
  const unique: GPU[] = [];
  for (const result of results) {
    if (!seen.has(result.item.id)) {
      seen.add(result.item.id);
      unique.push(result.item as GPU);
    }
  }
  return unique;
}

export function getFeatureLabel(featureId: string): string {
  const descriptions = gpuData.feature_descriptions as Record<string, string>;
  return descriptions[featureId] ?? featureId;
}

export const ALL_GPUS: GPU[] = gpuData.gpus as GPU[];
