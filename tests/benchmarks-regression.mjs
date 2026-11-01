import assert from "node:assert/strict";
import fs from "node:fs";

const { benchmarks } = JSON.parse(fs.readFileSync("data/benchmarks.json", "utf8"));
const { gpus } = JSON.parse(fs.readFileSync("data/gpu-data.json", "utf8"));
const gpuIds = new Set(gpus.map((gpu) => gpu.id));
const ids = new Set();

assert.ok(benchmarks.length >= 5, "Benchmark data must keep at least the published rows");
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

// Exact FPS fields must appear in the visible result sentence, so the data and
// the text cannot drift apart.
for (const row of benchmarks) {
  if (row.fpsOff !== undefined) assert.notEqual(row.fpsOn, undefined, `${row.id}: an NR-off figure needs its NR-on pair`);
  for (const field of ["fpsOff", "fpsOn"]) {
    if (row[field] !== undefined) assert.ok(row.result.includes(`${row[field]} FPS`), `${row.id}: result must state ${field}`);
  }
}
const measured5070 = benchmarks.find((row) => row.id === "gamegpu-nba2k27-5070");
assert.equal(measured5070.fpsOff, undefined, "The RTX 5070 row does not provide an NR-off measurement");
assert.equal(measured5070.resolution, "Not specified in the existing summary", "Do not invent the RTX 5070 resolution");

console.log(`Benchmark regression checks passed (${benchmarks.length} rows).`);
