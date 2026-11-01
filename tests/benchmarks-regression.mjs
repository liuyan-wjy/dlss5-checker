import assert from "node:assert/strict";
import fs from "node:fs";

const { benchmarks } = JSON.parse(fs.readFileSync("data/benchmarks.json", "utf8"));
const { gpus } = JSON.parse(fs.readFileSync("data/gpu-data.json", "utf8"));
const gpuIds = new Set(gpus.map((gpu) => gpu.id));
const ids = new Set();

assert.equal(benchmarks.length, 5, "WP2 must migrate exactly the five existing benchmark rows");
for (const row of benchmarks) {
  assert.match(row.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Benchmark IDs must be kebab-case");
  assert.ok(!ids.has(row.id), `Duplicate benchmark ID: ${row.id}`);
  ids.add(row.id);
  assert.ok(Array.isArray(row.gpuIds) && row.gpuIds.length > 0, `${row.id} needs GPU mappings`);
  assert.equal(new Set(row.gpuIds).size, row.gpuIds.length, `${row.id} has duplicate GPU mappings`);
  for (const id of row.gpuIds) assert.ok(gpuIds.has(id), `${row.id} references unknown GPU ${id}`);
  for (const field of ["gpu", "game", "resolution", "settings", "result", "source"]) {
    assert.equal(typeof row[field], "string", `${row.id}: ${field} must be text`);
    assert.ok(row[field].trim(), `${row.id}: ${field} must not be empty`);
  }
  assert.equal(new URL(row.url).protocol, "https:", `${row.id} needs an HTTPS source`);
  assert.ok(["september-2026", "october-2026"].includes(row.model), `${row.id}: unexpected model`);
  assert.match(row.checked, /^\d{4}-\d{2}-\d{2}$/, `${row.id}: checked must be YYYY-MM-DD`);
  const checked = new Date(`${row.checked}T00:00:00Z`);
  assert.ok(Number.isFinite(checked.getTime()), `${row.id}: invalid checked date`);
  assert.equal(checked.toISOString().slice(0, 10), row.checked, `${row.id}: invalid calendar date`);
  assert.ok(checked <= new Date(), `${row.id}: checked must not be in the future`);
  for (const field of ["fpsOff", "fpsOn"]) {
    if (row[field] === undefined) continue;
    assert.ok(Number.isFinite(row[field]) && row[field] > 0, `${row.id}: ${field} must be a positive measurement`);
  }
}

const measured5090 = benchmarks.find((row) => row.source === "GameGPU" && row.gpu === "RTX 5090");
assert.equal(measured5090.fpsOff, 192);
assert.equal(measured5090.fpsOn, 76);
const measured5070 = benchmarks.find((row) => row.gpu === "RTX 5070");
assert.equal(measured5070.fpsOn, 66);
assert.equal(measured5070.fpsOff, undefined, "The RTX 5070 row does not provide an NR-off measurement");
assert.equal(measured5070.resolution, "Not specified in the existing summary", "Do not invent the RTX 5070 resolution");
for (const row of benchmarks.filter((row) => row !== measured5090 && row !== measured5070)) {
  assert.equal(row.fpsOff, undefined, `${row.id}: ranges and relative improvements are not exact FPS measurements`);
  assert.equal(row.fpsOn, undefined, `${row.id}: ranges and relative improvements are not exact FPS measurements`);
}

console.log(`Benchmark regression checks passed (${benchmarks.length} migrated rows).`);
