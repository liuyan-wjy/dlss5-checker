import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

// Exercise the actual TypeScript module without adding a test runtime dependency.
const require = createRequire(import.meta.url);
const filename = path.resolve("lib/gpu-search.ts");
const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  fileName: filename,
}).outputText;
const testModule = { exports: {} };
new Function("require", "module", "exports", compiled)(
  (specifier) => require(specifier.startsWith("@/") ? path.resolve(specifier.slice(2)) : specifier),
  testModule,
  testModule.exports,
);
const { searchGPU, getSuggestions, ALL_GPUS } = testModule.exports;

const cases = [
  ["RTX 5050", "rtx-5050"],
  ["RTX 5060", "rtx-5060"],
  ["5060ti", "rtx-5060-ti"],
  ["  nViDiA  GeForce RTX 5060 Ti  ", "rtx-5060-ti"],
  ["RTX 5060 Laptop", "rtx-5060-laptop"],
  ["RTX 5090 Notebook", "rtx-5090-laptop"],
  ["RTX 5070 Ti Laptop GPU", "rtx-5070-ti-laptop"],
  ["RTX 5090", "rtx-5090"],
  ["rtx5060", "rtx-5060"],
  ["RTX 5060 SUPER", null],
  ["RTX 5070 Ti Super", null],
  ["RTX 4070 Laptop", null],
  ["4070", "rtx-4070"],
  ["RTX 4070 Super", "rtx-4070-super"],
  ["RTX 5055", null],
  ["RTX 5090 Ti", null],
  ["RTX 5060 Ti Laptop", null],
  ["RTX 50", null],
  ["", null],
  ["   ", null],
  ["not a graphics card", null],
];

for (const [query, expected] of cases) {
  assert.equal(searchGPU(query)?.id ?? null, expected, `Wrong result for ${JSON.stringify(query)}`);
}

assert.equal(getSuggestions("RTX 5050")[0]?.id, "rtx-5050");
assert.equal(getSuggestions("RTX 5060 Laptop")[0]?.id, "rtx-5060-laptop");
assert.deepEqual(getSuggestions(""), []);
assert.equal(new Set(ALL_GPUS.map((gpu) => gpu.id)).size, ALL_GPUS.length);
const statuses = new Set(["confirmed", "planned", "unsupported", "none"]);
for (const gpu of ALL_GPUS) {
  assert.ok(statuses.has(gpu.dlss5_support), `Unexpected status for ${gpu.id}`);
  if (gpu.series === "RTX 50") assert.equal(gpu.dlss5_support, "confirmed", gpu.id);
  if (gpu.series === "RTX 40") {
    assert.equal(gpu.dlss5_support, "planned", gpu.id);
    assert.ok(gpu.current_dlss_features.includes("frame_generation"), gpu.id);
  }
  if (["RTX 20", "RTX 30"].includes(gpu.series)) {
    assert.equal(gpu.dlss5_support, "unsupported", gpu.id);
    assert.ok(gpu.current_dlss_features.includes("dlss_super_resolution"), gpu.id);
  }
}
for (const model of ["5090", "5080", "5070-ti", "5070", "5060", "5050"]) {
  assert.ok(ALL_GPUS.some((gpu) => gpu.id === `rtx-${model}-laptop`), `Missing laptop ${model}`);
}
const laptopVram = searchGPU("RTX 5070 Laptop").vram;
assert.match(laptopVram, /8/);
assert.match(laptopVram, /12/, "RTX 5070 Laptop must retain both official memory variants");
const benchmarks = JSON.parse(fs.readFileSync("data/benchmark-data.json", "utf8"));
assert.match(benchmarks.note, /not DLSS 5/);
for (const benchmark of Object.values(benchmarks.benchmarks)) {
  assert.equal(benchmark.data["rtx-5050"], undefined, "No unverified desktop 5050 benchmark");
  for (const model of ["5090", "5080", "5070-ti", "5070", "5060", "5050"]) {
    assert.equal(benchmark.data[`rtx-${model}-laptop`], undefined, "No borrowed laptop benchmark");
  }
}

console.log(`GPU search regression checks passed (${cases.length} queries).`);
