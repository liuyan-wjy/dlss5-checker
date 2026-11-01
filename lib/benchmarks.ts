import benchmarkData from "@/data/benchmarks.json";

export interface Benchmark {
  id: string;
  gpuIds: string[];
  gpu: string;
  game: string;
  model: "september-2026" | "october-2026";
  resolution: string;
  settings: string;
  result: string;
  source: string;
  url: string;
  checked: string;
  fpsOff?: number;
  fpsOn?: number;
}

export const BENCHMARK_MODEL_LABELS: Record<Benchmark["model"], string> = {
  "september-2026": "September launch model",
  "october-2026": "October model",
};

export const ALL_BENCHMARKS: Benchmark[] = benchmarkData.benchmarks as Benchmark[];

export function getBenchmarksForGpu(id: string): Benchmark[] {
  return ALL_BENCHMARKS.filter((benchmark) => benchmark.gpuIds.includes(id));
}
