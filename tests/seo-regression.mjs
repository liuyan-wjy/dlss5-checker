import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const appOutput = "out";

const vercelConfig = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
assert.equal(
  vercelConfig.git?.deploymentEnabled,
  false,
  "Vercel Git deployments must stay disabled during the Cloudflare migration",
);

const newRoutes = [
  "dlss-5-download",
  "dlss-5-amd",
  "dlss-5-mods",
  "pt/como-ativar-dlss-5",
  "pt/dlss-5-amd",
  "dlss-4-5-ray-reconstruction",
  "games/nba-2k27-dlss-5",
  "de/dlss-5-grafikkarten",
  "games/hogwarts-legacy-dlss-5",
];

const compatibilityRoutes = [
  "dlss-supported-cards",
  "dlss-4-5-supported-cards",
  "pt/dlss-4-5-quais-placas",
];

const refreshedRoutes = [
  "pt", "about", "contact", "editorial-policy", "dlss-5-release-date", "dlss-5-evidence-tracker",
  "dlss-5-supported-cards", "dlss-5-rtx-40-series", "dlss-5-system-requirements",
  "dlss-5-games", "dlss-5-neural-rendering", "dlss-5-unreal-engine", "dlss-5-vs-dlss-4-5",
  "pt/dlss-5-confirmado", "pt/dlss-5-quais-placas", "pt/dlss-5-requisitos",
  "pt/dlss-5-jogos", "pt/dlss-5-vs-dlss-4-5",
  "dlss-4-5-games", "dlss-4-5-dynamic-mfg-6x", "dlss-4-5-dynamic-mfg-settings",
  "dlss-frame-generation-vs-multi-frame-generation", "guides",
];

// Thin, templated, or off-topic pages removed to improve site-level content quality.
const removedRoutes = {
  "gpu/rtx-4070": "/dlss-5-rtx-40-series",
  "gpu/rtx-4080": "/dlss-5-rtx-40-series",
  "gpu/rtx-5090": "/dlss-5-supported-cards",
  "gpu/rtx-3070": "/dlss-supported-cards",
  "gpu/rtx-3060": "/dlss-supported-cards",
  "pt/gpu/rtx-4070": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-4080": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-4090": "/pt/dlss-5-quais-placas",
  "pt/gpu/rtx-3060": "/pt/dlss-5-quais-placas",
  "pt/gpu/gtx-1060": "/pt/dlss-5-quais-placas",
  "games/resident-evil-requiem-dlss-5": "/dlss-5-games",
  "games/starfield-dlss-5": "/dlss-5-games",
  "games/assassins-creed-shadows-dlss-5": "/dlss-5-games",
};

function routePath(route) {
  return route === "index"
    ? path.join(appOutput, "index.html")
    : path.join(appOutput, `${route}.html`);
}

function readRoute(route) {
  return fs.readFileSync(routePath(route), "utf8");
}

function readGeneratedHtml(directory = appOutput) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? readGeneratedHtml(entryPath)
      : entry.name.endsWith(".html")
        ? fs.readFileSync(entryPath, "utf8")
        : [];
  });
}

function metadataValue(html, pattern, label) {
  const match = html.match(pattern);
  assert.ok(match, `Missing ${label}`);
  return match[1];
}

function decodeHtml(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (_, entity) => {
    if (entity[0] !== "#") return named[entity.toLowerCase()];
    return String.fromCodePoint(entity[1].toLowerCase() === "x"
      ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
  });
}

function visibleText(html) {
  return decodeHtml(html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function mainWords(html) {
  const main = html.match(/<main(?:\s[^>]*)?>([\s\S]*?)<\/main>/);
  assert.ok(main, "Content page must have a main landmark");
  return visibleText(main[1]).split(/\s+/).length;
}

const comparePage = readRoute("dlss-supported-cards");
const compareSection = comparePage.match(/<section id="gpu-compare"[\s\S]*?<\/section>/)?.[0];
assert.ok(compareSection, "The existing supported-cards page must include the comparison tool");
assert.match(compareSection, /<h2[^>]*>Compare two GPUs<\/h2>/);
assert.ok(comparePage.indexOf(compareSection) < comparePage.indexOf(">Frequently asked questions</h2>"), "Comparison precedes the FAQ");
assert.match(compareSection, /id="compare-from"/);
assert.match(compareSection, /id="compare-to"/);
assert.ok(visibleText(compareSection).includes("Feature support only. This does not predict frame rates; see published tests on the system requirements page."));
assert.match(compareSection, /href="\/dlss-5-system-requirements#benchmarks"/);
// With no ?from=&to= the page ships a useful default comparison instead of an empty state.
const compareText = visibleText(compareSection);
assert.ok(compareText.includes("RTX 3060 → RTX 5070"), "Default comparison must be rendered in the static HTML");
assert.ok(compareText.includes("4 added · 0 lost"), "Default comparison must summarize gained and lost features");
assert.ok(compareText.includes("+ DLSS 5 Neural Rendering"), "Default comparison must list gained features");
for (const label of ["RTX 4070 → RTX 5070", "RTX 4090 → RTX 5090", "RX 7900 XTX → RTX 5080"]) {
  assert.ok(compareText.includes(label), `Quick comparison "${label}" must be offered`);
}
assert.match(compareSection, /aria-label="Swap current and target GPU"/);
// The supported-cards guide answers model, version, laptop, frame-generation and mode questions,
// and every "On this page" link lands on a section.
for (const id of ["matrix", "gpu-compare", "dlss-versions", "popular-cards", "laptops", "frame-generation-rtx-20-30", "dlss-modes", "faq"]) {
  assert.match(comparePage, new RegExp(`id="${id}"`), `Supported-cards guide must include #${id}`);
  assert.match(comparePage, new RegExp(`href="#${id}"`), `On-this-page navigation must link #${id}`);
}
for (const id of ["rtx-2060", "rtx-3050", "rtx-3080", "rtx-4050-laptop", "gtx"]) {
  assert.match(comparePage, new RegExp(`<li[^>]*id="${id}"`), `Popular-card answer #${id} must stay linkable`);
}
assert.ok(visibleText(comparePage).includes("1707×960"), "DLSS mode table must list 1440p Quality resolution");
// Two text-based infographics: the feature ladder and the rendered-area illustration.
assert.match(comparePage, /<figure[^>]*aria-labelledby="ladder-caption"/, "Feature ladder figure must stay on the page");
assert.match(comparePage, /role="img" aria-label="Rendered area for each DLSS mode[^"]*25%/, "Rendered-area figure needs a text alternative");
assert.doesNotMatch(visibleText(comparePage), /Why the DLSS version number can be misleading/, "Merged section must not return as a duplicate");
assert.ok((comparePage.match(/<dl class="grid grid-cols-\[minmax\(0,1fr\)_auto\]/g) || []).length >= 5, "Matrix must have stacked mobile cards");

assert.equal((compareSection.match(/<optgroup /g) || []).length, 2 * new Set(JSON.parse(fs.readFileSync("data/gpu-data.json", "utf8")).gpus.map((gpu) => gpu.series)).size,
  "Both selectors must group GPUs by series");
assert.equal(metadataValue(comparePage, /<title>([^<]+)<\/title>/, "comparison page title"), "DLSS Supported Cards: RTX 20, 30, 40 &amp; 50 Guide");
assert.equal(metadataValue(comparePage, /<meta name="description" content="([^"]+)"/, "comparison page description"), "See which NVIDIA cards support DLSS Super Resolution, Neural Rendering, Ray Reconstruction, Frame Generation, MFG, Dynamic MFG, and DLAA by GPU generation.");
assert.equal(metadataValue(comparePage, /<h1[^>]*>([^<]+)<\/h1>/, "comparison page H1"), "DLSS Supported Cards: RTX 20, 30, 40, and 50 Series Compared");

function checkFaq(html, route, required = true) {
  const text = visibleText(html);
  let faqCount = 0;
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const parsed = JSON.parse(match[1]);
    const entries = Array.isArray(parsed) ? parsed : [parsed, ...(parsed["@graph"] ?? [])];
    for (const schema of entries.filter((entry) => entry["@type"] === "FAQPage")) {
      faqCount++;
      assert.ok(schema.mainEntity.length > 0, `${route} FAQ must not be empty`);
      for (const question of schema.mainEntity) {
        assert.ok(text.includes(visibleText(question.name)), `${route} FAQ question must be visible: ${question.name}`);
        assert.ok(text.includes(visibleText(question.acceptedAnswer.text)), `${route} FAQ answer must match the visible answer: ${question.name}`);
      }
    }
  }
  assert.ok(!required || faqCount > 0, `${route} FAQ schema is required`);
}

assert.ok(fs.existsSync(appOutput), "Static export output directory out/ is required");
assert.ok(fs.existsSync(path.join(appOutput, "404.html")), "Static export must include a real 404 page");
assert.ok(fs.existsSync(path.join(appOutput, "robots.txt")), "Static export must include robots.txt");
assert.ok(fs.existsSync(path.join(appOutput, "sitemap.xml")), "Static export must include sitemap.xml");

const robots = fs.readFileSync(path.join(appOutput, "robots.txt"), "utf8");
assert.match(robots, /User-Agent: \*/);
assert.match(robots, /Allow: \//);
assert.match(robots, /Sitemap: https:\/\/www\.dlss5\.net\/sitemap\.xml/);

const notFoundHtml = fs.readFileSync(path.join(appOutput, "404.html"), "utf8");
assert.match(notFoundHtml, /<html[^>]*lang="en"/);
assert.match(notFoundHtml, /name="robots" content="noindex/);
assert.match(notFoundHtml, /href="\/"/);
assert.match(notFoundHtml, /href="\/pt"/);
assert.doesNotMatch(notFoundHtml, /rel="canonical"/);
assert.match(visibleText(notFoundHtml), /404|not found|could not be found/i, "Static export must not fall back unknown paths to the homepage");

const homepage = readRoute("index");
const llms = fs.readFileSync(path.join(appOutput, "llms.txt"), "utf8");
assert.match(llms, /NBA 2K27/);
assert.match(llms, /September 3, 2026/);
assert.match(llms, /confirmed, planned, unsupported, and none/);
assert.match(llms, /RTX 40.*planned.*no public date/);
assert.match(llms, /dlss-5-3d-guided-neural-rendering\//);
assert.doesNotMatch(llms, /announced for Fall 2026|Fall 2026 launch-window|currently unknown until final|expected support|unlikely support/);
assert.equal(
  metadataValue(homepage, /<meta property="og:url" content="([^"]+)"/, "homepage og:url"),
  "https://www.dlss5.net",
);
assert.match(
  homepage,
  /<meta name="google-adsense-account" content="ca-pub-5442184426795655"/,
  "Homepage must retain AdSense ownership verification",
);
assert.doesNotMatch(homepage, /googletagmanager\.com\/gtag\/js/);
assert.match(homepage, /plausible-ly-005\.pages\.dev\/js\/pa-VclqONE0bFW-1okXx2CnS\.js/);
assert.match(homepage, /plausible\.init/);
assert.match(visibleText(homepage), /NBA 2K27/);
assert.match(visibleText(homepage), /available now|live now|now available/i);
assert.match(homepage, /href="\/dlss-5-supported-cards"/);
assert.match(visibleText(homepage), /Showing \d+ GPUs/);
assert.match(visibleText(homepage), /NVIDIA GeForce RTX 5060 Ti/);
assert.match(visibleText(readRoute("dlss-5-supported-cards")), /NVIDIA GeForce RTX 5060 Ti/);
assert.doesNotMatch(visibleText(readRoute("about")), /We have not performed independent per-GPU DLSS performance tests/);
const evidenceTracker = visibleText(readRoute("dlss-5-evidence-tracker"));
assert.match(evidenceTracker, /370 FPS/);
assert.match(evidenceTracker, /one-frame-in, one-frame-out/);
assert.doesNotMatch(visibleText(homepage), /Use FSR 4 instead|AMD users should look at FSR 4/);
assert.doesNotMatch(visibleText(readRoute("pt")), /Use FSR 4 como alternativa/);
assert.doesNotMatch(visibleText(readRoute("guides")), /future DLSS 5 neural rendering layer/);
assert.doesNotMatch(visibleText(readRoute("pt/dlss-5-quais-placas")), /mudar a matriz de suporte antes do lançamento/);
assert.doesNotMatch(visibleText(readRoute("dlss-5-supported-cards")), /no-DLSS unsupported|unsupported, and unsupported/);
checkFaq(homepage, "homepage");

const generatedPages = readGeneratedHtml();
const generatedHtml = generatedPages.join("\n");
for (const html of generatedPages) {
  const canonical = html.match(/<link rel="canonical" href="https:\/\/www\.dlss5\.net([^\"]*)"/);
  if (!canonical || /<title>404:/.test(html)) continue;
  const route = canonical[1];
  const language = /^\/pt(?:\/|$)/.test(route) ? "pt-BR" : /^\/de(?:\/|$)/.test(route) ? "de" : "en";
  assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), `${route || "/"} must declare its language in the exported HTML`);
  if (language === "pt-BR") {
    assert.match(html, /aria-label="Navegação principal"/);
    assert.match(html, /href="\/pt\/como-ativar-dlss-5"/);
  }
}
for (const [english, portuguese] of [
  ["dlss-5-download", "pt/como-ativar-dlss-5"],
  ["dlss-5-amd", "pt/dlss-5-amd"],
]) {
  for (const route of [english, portuguese]) {
    const html = readRoute(route);
    assert.match(html, new RegExp(`hrefLang="en" href="https://www\\.dlss5\\.net/${english}"`));
    assert.match(html, new RegExp(`hrefLang="pt-BR" href="https://www\\.dlss5\\.net/${portuguese}"`));
    assert.doesNotMatch(html, /name="robots" content="noindex/);
    assert.match(readRoute(route.startsWith("pt/") ? "pt" : "index"), new RegExp(`href="/${route}"`));
  }
}
assert.doesNotMatch(generatedHtml, /DLSS 5 Checker Editorial Team/);
assert.doesNotMatch(generatedHtml, /support \[at\] dlss5\.net/);
assert.doesNotMatch(
  generatedHtml,
  /(?:last checked|updated|checked) (?:may|june)(?: \d{1,2},)? 2026|última (?:verificação em|checagem:) \d{1,2} de (?:maio|junho) de 2026/i,
);

const privacy = readRoute("privacy");
for (const html of generatedPages) {
  assert.doesNotMatch(html, /adsbygoogle\.js|googlesyndication\.com/, "Exported pages must not load AdSense code");
}
assert.match(visibleText(readRoute("about")), /Everything on DLSS 5 Checker is free and has no ads\./);
assert.match(visibleText(privacy), /no ads/);
assert.match(visibleText(privacy), /does not load advertising code/);
assert.match(visibleText(privacy), /do not currently show a consent popup/);
assert.match(visibleText(privacy), /ads\.txt and the AdSense ownership verification/);
assert.doesNotMatch(visibleText(privacy), /shows ads served by Google|Google AdSense uses cookies|may change which ads you see/);
assert.equal(
  metadataValue(privacy, /<meta name="description" content="([^"]+)"/, "privacy description"),
  "Privacy policy for DLSS 5 Checker, covering aggregate analytics, optional Stripe tips, email, and service providers. The site currently shows no ads.",
);
assert.doesNotMatch(privacy, /We use Google Analytics/i);
assert.match(visibleText(privacy), /Cloudflare Web Analytics/);
assert.match(visibleText(privacy), /real.user monitoring|RUM/i);
assert.match(privacy, /https:\/\/developers.cloudflare.com\/web-analytics\//);
assert.doesNotMatch(visibleText(readRoute("about")), /Every data point on this site is sourced|estimated DLSS 4\/4\.5 benchmarks/);

for (const route of ["about", "contact"]) {
  const html = readRoute(route);
  assert.match(html, /mailto:support@dlss5\.net/);
  assert.match(html, /liuyan-wjy/);
}
// The site credits the author by name but does not link to their GitHub profile or repository.
for (const html of generatedPages) {
  assert.doesNotMatch(html, /github\.com\/liuyan-wjy/i, "pages must not link to the author's GitHub");
}

for (const route of [...new Set([...newRoutes, ...refreshedRoutes, ...compatibilityRoutes])]) {
  const html = readRoute(route);
  const language = route.startsWith("pt/") || route === "pt" ? "pt-BR" : route.startsWith("de/") ? "de" : "en";
  assert.match(html, new RegExp(`<html[^>]*lang="${language}"`), `${route} exported language`);
  const title = metadataValue(html, /<title>([^<]+)<\/title>/, `${route} title`);
  const canonical = metadataValue(
    html,
    /<link rel="canonical" href="([^"]+)"/,
    `${route} canonical`,
  );
  const openGraphTitle = metadataValue(
    html,
    /<meta property="og:title" content="([^"]+)"/,
    `${route} og:title`,
  );
  const openGraphUrl = metadataValue(
    html,
    /<meta property="og:url" content="([^"]+)"/,
    `${route} og:url`,
  );
  const twitterTitle = metadataValue(
    html,
    /<meta name="twitter:title" content="([^"]+)"/,
    `${route} twitter:title`,
  );

  assert.equal(openGraphTitle, title, `${route} must use its page title for og:title`);
  assert.equal(openGraphUrl, canonical, `${route} must use its canonical URL for og:url`);
  assert.equal(twitterTitle, title, `${route} must use its page title for twitter:title`);
  const description = metadataValue(html, /<meta name="description" content="([^"]+)"/, `${route} description`);
  assert.equal(metadataValue(html, /<meta property="og:description" content="([^"]+)"/, `${route} og:description`), description);
  assert.equal(metadataValue(html, /<meta name="twitter:description" content="([^"]+)"/, `${route} twitter:description`), description);
  assert.equal(canonical, `https://www.dlss5.net/${route}`, `${route} canonical must remain self-referencing`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have one H1`);
  assert.doesNotMatch(html, /Last checked June 22, 2026/);
  checkFaq(html, route, !["about", "contact", "editorial-policy", "guides", "dlss-5-download", "dlss-5-amd", "pt/como-ativar-dlss-5", "pt/dlss-5-amd"].includes(route));
  assert.doesNotMatch(visibleText(html), /DLSS 5 (?:itself )?is (?:scheduled|planned) for Fall 2026|DLSS 5 is still unreleased|Why the exact launch date is still open/i);

  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) {
    if (/\.[a-z0-9]+$/i.test(href)) continue;
    const linkedRoute = href.replace(/^\/|\/$/g, "") || "index";
    assert.ok(fs.existsSync(routePath(linkedRoute)), `${route} has a broken internal link: ${href}`);
  }

  if (route.startsWith("games/")) {
    assert.ok(mainWords(html) >= 1500, `${route} must contain at least 1500 visible main-content words`);
    assert.doesNotMatch(visibleText(html), /DLSS 5 (?:itself )?is (?:scheduled|planned) for Fall 2026/i);
  }
}

for (const route of compatibilityRoutes) {
  const html = readRoute(route);
  const title = metadataValue(html, /<title>([^<]+)<\/title>/, `${route} title`);
  const description = metadataValue(
    html,
    /<meta name="description" content="([^"]+)"/,
    `${route} description`,
  );
  const canonical = metadataValue(
    html,
    /<link rel="canonical" href="([^"]+)"/,
    `${route} canonical`,
  );
  const visibleHtml = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ");
  const visibleWords = visibleHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .trim()
    .split(/\s+/);

  assert.ok(title.length >= 45 && title.length <= 60, `${route} title must remain 45–60 characters`);
  assert.ok(
    description.length >= 140 && description.length <= 160,
    `${route} description must remain 140–160 characters`,
  );
  assert.equal(
    canonical,
    `https://www.dlss5.net/${route}`,
    `${route} must use a self-referencing canonical`,
  );
  assert.equal((visibleHtml.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have one H1`);
  assert.match(visibleHtml, /Frequently asked questions|Perguntas frequentes/);
  assert.ok(visibleWords.length >= 1500 && mainWords(html) >= 1500, `${route} must contain at least 1,500 visible main-content words`);
  assert.match(html, /"datePublished":"2026-08-26"/, `${route} must retain its original publication date`);
  assert.doesNotMatch(html, /name="robots" content="noindex/);
}

const dlss45English = readRoute("dlss-4-5-supported-cards");
const dlss45Portuguese = readRoute("pt/dlss-4-5-quais-placas");
assert.match(dlss45English, /hrefLang="pt-BR" href="https:\/\/www\.dlss5\.net\/pt\/dlss-4-5-quais-placas"/);
assert.match(dlss45Portuguese, /hrefLang="en" href="https:\/\/www\.dlss5\.net\/dlss-4-5-supported-cards"/);

const sitemap = fs.readFileSync(path.join(appOutput, "sitemap.xml"), "utf8");
assert.doesNotMatch(sitemap, /<lastmod>/, "Sitemap must not publish deployment time as lastmod");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
for (const url of sitemapUrls) {
  const route = new URL(url).pathname.slice(1) || "index";
  const html = readRoute(route);
  assert.doesNotMatch(html, /name="robots" content="noindex/, `${url} must be indexable`);
  assert.equal(metadataValue(html, /<link rel="canonical" href="([^"]+)"/, `${url} canonical`).replace(/\/$/, ""), url.replace(/\/$/, ""));
}

assert.equal(
  new Set(sitemapUrls).size,
  sitemapUrls.length,
  "Sitemap must not contain duplicate URLs",
);

for (const route of [...compatibilityRoutes, ...newRoutes]) {
  assert.ok(
    sitemapUrls.includes(`https://www.dlss5.net/${route}`),
    `${route} must be present in the sitemap`,
  );
}

// WP5 restores exactly one German page, with owner-approved metadata and reciprocal alternates.
const germanRoute = "de/dlss-5-grafikkarten";
const germanHtml = readRoute(germanRoute);
assert.deepEqual(fs.readdirSync(path.join(appOutput, "de"), { recursive: true }).filter((file) => file.endsWith(".html")), ["dlss-5-grafikkarten.html"]);
assert.equal(decodeHtml(metadataValue(germanHtml, /<title>([^<]+)<\/title>/, "German title")), "DLSS 5: Welche Grafikkarten werden unterstützt? [2026]");
assert.equal(decodeHtml(metadataValue(germanHtml, /<meta name="description" content="([^"]+)"/, "German description")), "Welche Grafikkarten unterstützen DLSS 5? RTX 50 und RTX Spark sind bestätigt, RTX 40 ist geplant. Status und Unterschiede zu DLSS 4.5 im Überblick.");
assert.equal(visibleText(metadataValue(germanHtml, /<h1[^>]*>([\s\S]*?)<\/h1>/, "German H1")), "Welche Grafikkarten unterstützen DLSS 5?");
assert.match(germanHtml, /aria-label="Hauptnavigation"/);
assert.match(germanHtml, /<meta property="og:locale" content="de_DE"/);
assert.match(germanHtml, /"inLanguage":"de"/);
assert.match(germanHtml, /<time dateTime="2026-11-06">/);
const germanProse = metadataValue(germanHtml, /<article\b[^>]*id="ratgeber"[^>]*>([\s\S]*?)<\/article>/, "authored German article");
const germanAuthoredText = [...germanProse.matchAll(/<(h[1-3]|p)\b([^>]*)>([\s\S]*?)<\/\1>/g)]
  .filter(([, tag, attributes]) => tag !== "p" || !/\btext-sm\b/.test(attributes))
  .map(([, , , content]) => visibleText(content)).join(" ");
const germanWordCount = germanAuthoredText.split(/\s+/).length;
assert.ok(germanWordCount >= 800, `German authored headings and prose must have >=800 words excluding GPU rows, navigation and source notes (got ${germanWordCount})`);
assert.doesNotMatch(germanProse, /data-gpu-id=/, "GPU rows must not inflate unique editorial word count");
for (const [language, target] of [
  ["en", "dlss-5-supported-cards"],
  ["pt-BR", "pt/dlss-5-quais-placas"],
  ["de", germanRoute],
  ["x-default", "dlss-5-supported-cards"],
]) {
  for (const route of ["dlss-5-supported-cards", "pt/dlss-5-quais-placas", germanRoute]) {
    assert.ok(readRoute(route).includes(`hrefLang="${language}" href="https://www.dlss5.net/${target}"`), `${route} must reciprocate ${language} hreflang`);
    if (route !== target && language !== "x-default") {
      assert.ok(readRoute(route).includes(`href="/${target}"`), `${route} must visibly link its ${language} counterpart`);
    }
  }
}
const germanGpuData = JSON.parse(fs.readFileSync("data/gpu-data.json", "utf8")).gpus;
assert.equal((germanHtml.match(/data-gpu-id=/g) || []).length, germanGpuData.length, "German guide must render each GPU once");
for (const status of ["confirmed", "planned", "unsupported", "none"]) {
  const section = metadataValue(germanHtml, new RegExp(`<section\\b[^>]*id="status-${status}"[^>]*>([\\s\\S]*?)<\\/section>`), `German ${status} section`);
  assert.deepEqual([...section.matchAll(/data-gpu-id="([^"]+)"/g)].map((match) => match[1]), germanGpuData.filter((gpu) => gpu.dlss5_support === status).map((gpu) => gpu.id));
  for (const gpu of germanGpuData.filter((gpu) => gpu.dlss5_support === status)) {
    const item = metadataValue(section, new RegExp(`<li\\b[^>]*data-gpu-id="${gpu.id}"[^>]*>([\\s\\S]*?)<\\/li>`), `German GPU ${gpu.id}`);
    assert.ok(visibleText(item).includes(gpu.name), `${gpu.id} must retain its model name`);
  }
}
for (const [id, memory] of [
  ["rtx-5060-ti", "8GB / 16GB"],
  ["rtx-4060-ti", "8GB / 16GB"],
  ["rtx-5070-laptop", "8GB oder 12GB"],
  ["rtx-spark", "Gemeinsamer Speicher mit der CPU"],
]) {
  const item = metadataValue(germanHtml, new RegExp(`<li\\b[^>]*data-gpu-id="${id}"[^>]*>([\\s\\S]*?)<\\/li>`), `German memory for ${id}`);
  assert.ok(visibleText(item).includes(memory), `${id} must preserve its memory variants`);
}
for (const source of [
  "https://www.nvidia.com/de-de/geforce/technologies/dlss/",
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/",
  "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/",
]) {
  assert.ok(germanHtml.includes(`href="${source}"`), `German guide must cite ${source}`);
}
assert.match(germanHtml, /href="https:\/\/(?:www\.nvidia\.com\/en-us\/geforce\/news\/rtx-spark-dlss-reflex-ray-tracing-games\/|developer\.nvidia\.com\/blog\/nvidia-rtx-spark-powers-neural-rendering-and-ai-characters-in-games\/?)/);
assert.doesNotMatch(germanHtml, /href="[^"]*(?:\.dll|huggingface\.co|\/releases\/)/i);

const modsHtml = readRoute("dlss-5-mods");
assert.equal(metadataValue(modsHtml, /<title>([^<]+)<\/title>/, "mods title"), "DLSS 5 Mods on RTX 40, RTX 30 and AMD: What Works and the Risks");
assert.equal(metadataValue(modsHtml, /<meta name="description" content="([^"]+)"/, "mods description"), "Unofficial tools like DLSS 5 Swapper and OptiScaler forks run Neural Rendering outside RTX 50. What they do, what NVIDIA supports, and the ban and malware risks.");
assert.equal(visibleText(metadataValue(modsHtml, /<h1[^>]*>([\s\S]*?)<\/h1>/, "mods H1")), "DLSS 5 mods: what they are and what they risk");
const modsWords = mainWords(modsHtml);
assert.ok(modsWords >= 1500 && modsWords <= 2200, `Mods guide must contain 1,500–2,200 main-content words (got ${modsWords})`);
const modsSections = new Map([...modsHtml.matchAll(/<section\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)].map((match) => [match[1], match[2]]));
for (const id of ["quick-answer", "comparison", "tools", "risks", "principles", "alternatives", "faq"]) {
  assert.ok(modsSections.has(id), `Mods guide must include ${id}`);
  assert.match(modsSections.get(id), /<h2\b/);
  assert.match(modsSections.get(id), /<h3\b/, `${id} must have an H3 subsection`);
}
const riskWords = visibleText(modsSections.get("risks")).split(/\s+/).length;
assert.ok(riskWords / modsWords >= 0.3, `Mods risks must cover at least 30% of the main content (${riskWords}/${modsWords})`);
for (const id of ["tool-swapper", "tool-optiscaler", "tool-manager", "tool-desktop", "tool-open"]) {
  const tool = metadataValue(modsSections.get("tools"), new RegExp(`<article\\b[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/article>`), id);
  assert.match(tool, /<h3\b/);
  assert.match(tool, /href="https:\/\/(?:www\.)?(?:tweaktown\.com|pcgamer\.com|pcgameshardware\.de|techradar\.com|thefpsreview\.com|pcguide\.com|techspot\.com|digitalcitizen\.life)\//, `${id} must cite a news source`);
  assert.doesNotMatch(tool, /href="https:\/\/(?:www\.)?(?:github\.com|huggingface\.co)\//, `${id} must not link to project downloads`);
}
for (const [, value] of modsHtml.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const url = decodeURIComponent(decodeHtml(value));
  assert.doesNotMatch(url, /github\.com\/[^?#]*\/releases(?:[/?#]|$)|(?:huggingface\.co|hf\.co)(?:[/:?#]|$)|\.dll(?:[/?#]|$)/i, `Mods guide must not link to binaries, releases, or model weights: ${url}`);
  assert.doesNotMatch(url, /(?:drive\.google\.com|dropbox\.com|mega\.nz|mediafire\.com|onedrive\.live\.com|1drv\.ms|pan\.baidu\.com|lanzou\w*\.com|gofile\.io|pixeldrain\.com)(?:[/:?#]|$)/i, `Mods guide must not link to file-sharing downloads: ${url}`);
}
assert.doesNotMatch(modsHtml, /<a\b[^>]*\bdownload(?:[\s=>])/i, "Mods guide must not offer download controls");
const modsFaqs = [...modsHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .flatMap((match) => {
    const schema = JSON.parse(match[1]);
    return Array.isArray(schema) ? schema : [schema, ...(schema["@graph"] ?? [])];
  }).filter((schema) => schema["@type"] === "FAQPage");
assert.equal(modsFaqs.length, 1, "Mods guide must have one FAQPage schema");
assert.ok(modsFaqs[0].mainEntity.length >= 4 && modsFaqs[0].mainEntity.length <= 6, "Mods guide must have 4–6 FAQs");
assert.match(modsHtml, /<time dateTime="2026-10-31">October 31, 2026<\/time>/);
assert.match(visibleText(modsHtml), /Sources, review status, and related pages/);
const modsSitemapEntry = metadataValue(sitemap, /<url>\s*(<loc>https:\/\/www\.dlss5\.net\/dlss-5-mods<\/loc>[\s\S]*?)<\/url>/, "mods sitemap entry");
assert.match(modsSitemapEntry, /<changefreq>weekly<\/changefreq>/);
assert.match(modsSitemapEntry, /<priority>0\.8<\/priority>/);
const corePages = llms.split("## Core Pages")[1]?.split(/\n## /)[0] ?? "";
assert.match(corePages, /https:\/\/www\.dlss5\.net\/dlss-5-mods\)/);
const setupGroup = [...readRoute("guides").matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].find((match) => /<h2[^>]*>Set up DLSS 5<\/h2>/.test(match[1]));
assert.ok(setupGroup, "Guides must retain the Set up DLSS 5 group");
assert.match(setupGroup[1], /href="\/dlss-5-mods"/);
for (const route of ["dlss-5-rtx-40-series", "dlss-5-amd"]) {
  assert.match(readRoute(route), /<main\b[^>]*>[\s\S]*href="\/dlss-5-mods"[\s\S]*<\/main>/, `${route} must link to the mods guide in its body`);
}
for (const id of ["rtx-3060", "rtx-3070", "rtx-4060", "rtx-4070", "rtx-4090"]) {
  const card = metadataValue(readRoute("dlss-5-supported-cards"), new RegExp(`<div\\b[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/div>`), `popular card ${id}`);
  assert.match(card, /href="\/dlss-5-mods"/, `${id} must link to the mods guide`);
}

const nbaHtml = readRoute("games/nba-2k27-dlss-5");
const nbaText = visibleText(nbaHtml);
const nbaWithoutJsonLd = nbaHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
assert.throws(() => checkFaq(nbaWithoutJsonLd, "games/nba-2k27-dlss-5"), /FAQ schema is required/);
assert.doesNotThrow(() => checkFaq(nbaWithoutJsonLd, "optional FAQ page", false));
assert.match(nbaHtml, /href="#how-to-enable"/, "NBA guide must link directly to setup steps");
assert.match(nbaHtml, /id="how-to-enable"/, "NBA setup link must have a target");
assert.doesNotMatch(nbaText, /check the boring things|does not invent frame-rate numbers|lower visual ambition|clean support path/i);
for (const pattern of [/616\.64/, /Video Settings/, /DLSS Neural Rendering/, /F9/, /RTX 50/, /RTX 40/, /GeForce NOW/, /Super Resolution/, /Frame Generation/]) {
  assert.match(nbaText, pattern, `NBA 2K27 guide is missing ${pattern}`);
}
assert.match(nbaText, /planned|plans to|plan to/i);
assert.match(nbaText, /no (?:official |public |announced |confirmed )*(?:release |availability |support )?date|date (?:has not|is not|remains)/i);
assert.doesNotMatch(nbaHtml, /hrefLang=/, "NBA guide must not advertise nonexistent translations");
assert.doesNotMatch(nbaHtml, /name="robots" content="noindex/, "NBA guide must be indexable");
for (const route of ["dlss-5-games", "guides"]) {
  assert.match(readRoute(route), /href="\/games\/nba-2k27-dlss-5"/, `${route} must link to the NBA guide`);
}
const hogwartsHtml = readRoute("games/hogwarts-legacy-dlss-5");
const hogwartsText = visibleText(hogwartsHtml);
assert.doesNotMatch(hogwartsHtml, /\[LAUNCH DAY:/, "Hogwarts guide must not ship launch placeholders");
for (const pattern of [/621\.14/, /Display Settings/, /Upscale Type/, /Neural Rendering/, /Shift\+Alt\+B/, /RTX 50/, /RTX Spark/, /RTX 40/, /GeForce NOW/, /DSOGaming/]) {
  assert.match(hogwartsText, pattern, `Hogwarts Legacy guide is missing ${pattern}`);
}
assert.match(hogwartsHtml, /<figure\b/, "Hogwarts guide must include the published FPS chart");
assert.match(hogwartsHtml, /og:image" content="https:\/\/www\.dlss5\.net\/og\/hogwarts-legacy-dlss-5\.png"/);
assert.ok(fs.existsSync(path.join(appOutput, "og", "hogwarts-legacy-dlss-5.png")));
for (const route of ["dlss-5-games", "guides", "index", "pt/dlss-5-jogos", "de/dlss-5-grafikkarten"]) {
  assert.match(readRoute(route), /href="\/games\/hogwarts-legacy-dlss-5"/, `${route} must link to the Hogwarts guide`);
}
assert.match(fs.readFileSync(path.join(appOutput, "sitemap.xml"), "utf8"), /\/games\/hogwarts-legacy-dlss-5</);
const rtx40Text = visibleText(readRoute("dlss-5-rtx-40-series"));
assert.match(rtx40Text, /planned|plans to|plan to/i);
assert.match(rtx40Text, /not available|not yet available|not live|no (?:release |availability |support )?date|not currently/i);
for (const route of ["dlss-4-5-dynamic-mfg-settings", "dlss-4-5-dynamic-mfg-6x"]) {
  const text = visibleText(readRoute(route));
  assert.match(text, /616\.64/);
  assert.match(text, /2\.14/);
}

const redirects = fs.readFileSync(path.join(appOutput, "_redirects"), "utf8");
assert.doesNotMatch(redirects, /^\/de\/dlss-5-grafikkarten\s/m, "Only the restored German route must lose its 301");
assert.deepEqual(redirects.split(/\r?\n/).filter((line) => line && !line.startsWith("#")), [
  ...Object.entries(removedRoutes).map(([route, target]) => `/${route} ${target} 301`),
  "/dlss5-games /dlss-5-games 301",
], "Every other existing redirect must remain intact");
for (const [route, target] of Object.entries(removedRoutes)) {
  assert.ok(!fs.existsSync(routePath(route)), `${route} must not be exported`);
  assert.match(redirects, new RegExp(`^/${route} ${target} 301$`, "m"), `${route} must 301 to ${target}`);
  assert.ok(fs.existsSync(routePath(target.slice(1))), `${route} redirect target must exist`);
}
assert.doesNotMatch(generatedHtml, /href="\/(?:pt\/)?ai-pc\//, "Off-topic RTX Spark pages must not be linked");
const noindexPages = generatedPages.filter((html) => /name="robots" content="noindex/.test(html));
assert.ok(
  noindexPages.every((html) => /<title>Page not found/.test(html)),
  "Only not-found pages may be noindex; thin pages should be improved or removed instead",
);

// Every indexable page carries the shared 1200x630 preview image in its language.
for (const [route, html] of generatedPages.map((html, i) => [i, html])) {
  if (/<title>Page not found/.test(html)) continue;
  const imageLanguage = /<html[^>]*lang="pt-BR"/.test(html) ? "pt" : /<html[^>]*lang="de"/.test(html) ? "de" : "en";
  const pageImages = ["og/hogwarts-legacy-dlss-5.png"];
  assert.ok(
    html.includes(`<meta property="og:image" content="https://www.dlss5.net/og/dlss5-checker-${imageLanguage}.png"`) ||
      (imageLanguage === "en" && pageImages.some((image) => html.includes(`<meta property="og:image" content="https://www.dlss5.net/${image}"`))),
    `page ${route} must have a social preview image in its language`,
  );
  assert.match(html, /<meta name="googlebot" content="max-image-preview:large"/, `page ${route} must allow large image previews`);
}
for (const [route, lang] of [["index", "en"], ["dlss-5-games", "en"], ["games/nba-2k27-dlss-5", "en"], ["pt", "pt"], ["pt/dlss-5-jogos", "pt"]]) {
  assert.match(readRoute(route), new RegExp(`og:image" content="https://www\\.dlss5\\.net/og/dlss5-checker-${lang}\\.png"`), `${route} must use the ${lang} preview image`);
}
assert.ok(fs.existsSync(path.join(appOutput, "og", "dlss5-checker-en.png")));
assert.ok(fs.existsSync(path.join(appOutput, "og", "dlss5-checker-pt.png")));
const germanImage = fs.readFileSync(path.join(appOutput, "og", "dlss5-checker-de.png"));
assert.equal(germanImage.subarray(1, 4).toString(), "PNG");
assert.equal(germanImage.readUInt32BE(16), 1200);
assert.equal(germanImage.readUInt32BE(20), 630);
assert.match(germanHtml, /<meta property="og:image:width" content="1200"/);
assert.match(germanHtml, /<meta property="og:image:height" content="630"/);
assert.match(germanHtml, /<meta property="og:image:alt" content="DLSS 5 Checker: RTX 50 und RTX Spark unterstützt/);

// Optional tip link: footer on every page, explained on About, disclosed in Privacy.
const supportUrl = "https://buy.stripe.com/eVq8wR6HPbc14THdJt2Ji00";
for (const html of generatedPages) {
  if (/<title>Page not found/.test(html)) continue;
  assert.ok(html.includes(`href="${supportUrl}"`), "Every page footer must link to the tip jar");
}
assert.match(visibleText(readRoute("about")), /buy me a coffee/i);
assert.match(visibleText(readRoute("privacy")), /Optional Tips Through Stripe/);
assert.match(readRoute("privacy"), /https:\/\/stripe\.com\/privacy/);
assert.doesNotMatch(generatedHtml, /js\.stripe\.com/, "No Stripe script should load on the site");

// The system requirements benchmark table renders every row of data/benchmarks.json.
const requirementsHtml = readRoute("dlss-5-system-requirements");
const requirementsText = visibleText(requirementsHtml);
for (const row of JSON.parse(fs.readFileSync("data/benchmarks.json", "utf8")).benchmarks) {
  assert.ok(requirementsText.includes(row.result), `System requirements must show benchmark ${row.id}`);
  assert.ok(requirementsHtml.includes(`href="${row.url}"`), `System requirements must link the source of ${row.id}`);
}
assert.doesNotMatch(requirementsText, /192 to 76|192 FPS/, "The unverified 192 to 76 FPS figure must not return");

console.log("SEO regression checks passed.");
