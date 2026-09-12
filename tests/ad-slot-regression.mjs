import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
let frame;
const frames = [];
const host = { append: (child) => frames.push(child) };
const listeners = new Map();
const effects = [];
let loadDocument;
const testModule = { exports: {} };
const compiled = ts.transpileModule(fs.readFileSync("components/AdSlot.tsx", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText;
new Function("require", "module", "exports", compiled)((name) => name === "react" ? {
  useRef: () => ({ current: host }),
  useEffect: (effect) => effects.push(effect),
} : require(name), testModule, testModule.exports);
const AdSlot = testModule.exports.default;
globalThis.document = { createElement: (tag) => {
  assert.equal(tag, "iframe");
  frame = { contentWindow: {}, style: {}, setAttribute(name, value) { this[name] = value; }, remove() { const index = frames.indexOf(this); if (index !== -1) frames.splice(index, 1); } };
  return frame;
} };
globalThis.window = {
  location: { origin: "https://www.dlss5.net" },
  setTimeout: (callback) => { loadDocument = callback; return 1; },
  clearTimeout: () => { loadDocument = undefined; },
  addEventListener: (name, listener) => listeners.set(name, listener),
  removeEventListener: (name, listener) => {
    assert.equal(listeners.get(name), listener);
    listeners.delete(name);
  },
};

try {
  for (const slot of ["content-mid", "result-below", "sidebar"]) {
    assert.equal(AdSlot({ slot }), null);
    assert.equal(effects.pop()(), undefined);
    assert.equal(listeners.size, 0);
  }
  const element = AdSlot({ slot: "home-below" });
  assert.equal(element.props.children.some((child) => child.type === "iframe"), false, "Do not load ads before hydration");

  // Exercise the actual message handler: only this frame can resize its slot.
  const cleanup = effects.pop()();
  assert.equal(frame.title, "Advertisement");
  assert.doesNotMatch(frame.sandbox, /allow-top-navigation/);
  assert.equal(frame.srcdoc, undefined);
  loadDocument();
  assert.equal(frames.length, 1);
  assert.match(frame.srcdoc, /container-14cdbc51bb49b4b88ce7e76a6511ca87/);
  assert.match(frame.srcdoc, /pl28945033\.profitableratecpmnetwork\.com\/14cdbc51bb49b4b88ce7e76a6511ca87\/invoke\.js/);
  const resize = listeners.get("message");
  const event = { source: frame.contentWindow, origin: window.location.origin, data: { type: "dlss5-ad-height", height: 900 } };
  resize(event);
  assert.equal(frame.style.height, "900px");
  for (const invalid of [
    { ...event, source: {} }, { ...event, origin: "https://example.com" },
    { ...event, data: null }, { ...event, data: { type: "other", height: 500 } },
    ...[NaN, Infinity, "500"].map((height) => ({ ...event, data: { ...event.data, height } })),
  ]) resize(invalid);
  assert.equal(frame.style.height, "900px");
  for (const [height, expected] of [[0, "220px"], [-1, "220px"], [100000, "4000px"]]) {
    resize({ ...event, data: { ...event.data, height } });
    assert.equal(frame.style.height, expected);
  }
  cleanup();
  assert.equal(frames.length, 0);
  assert.equal(listeners.size, 0);
  AdSlot({ slot: "home-below" });
  effects.pop()()();
  assert.equal(loadDocument, undefined, "Strict Mode cleanup cancels the pending load");
  assert.equal(listeners.size, 0, "Remount must clean up its listener too");
} finally {
  delete globalThis.window;
  delete globalThis.document;
}
console.log("Ad slot checks passed: homepage-only, frame configuration, resize validation, cleanup/remount.");
