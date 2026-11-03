import type { Metadata } from "next";
import Link from "next/link";
import GpuCompare from "@/components/GpuCompare";
import { OG_IMAGE_EN } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/dlss-supported-cards";
const META_TITLE = "DLSS Supported Cards: RTX 20, 30, 40 & 50 Guide";
const META_DESCRIPTION =
  "See which NVIDIA cards support DLSS Super Resolution, Neural Rendering, Ray Reconstruction, Frame Generation, MFG, Dynamic MFG, and DLAA by GPU generation.";
const NVIDIA_DLSS = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";
const NVIDIA_DLSS_45 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/";
const NVIDIA_DLSS5_LAUNCH =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS_4 =
  "https://www.nvidia.com/en-us/geforce/news/dlss4-multi-frame-generation-ai-innovations/";
const AMD_FSR3_LAUNCH =
  "https://overclock3d.net/news/software/amds-fidelityfx-super-resolution-3-technology-is-launching-today-in-two-games/";
const DLSS_MODES_EXPLAINER =
  "https://www.benq.com/en-us/knowledge-center/knowledge/dlss-presets-performance-quality-balanced.html";
const NVIDIA_RTX40_UPDATE =
  "https://www.reddit.com/r/nvidia/comments/1w4bcvp/nvidia_dlss_5_available_september_3rd_dlss/?sort=new";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/dlss-supported-cards" },
  openGraph: {
    images: [OG_IMAGE_EN],
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "article",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const compatibilityRows = [
  {
    generation: "GeForce RTX 50 Series",
    examples: "RTX 5050 through RTX 5090, laptop variants and RTX Spark laptops",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    neuralRendering: "Yes, in DLSS 5 games",
    frameGeneration: "Yes",
    multiFrameGeneration: "Yes",
    dynamicMfg: "Yes",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 40 Series",
    examples: "RTX 4050 through RTX 4090, desktop and laptop",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    neuralRendering: "Planned, no public date",
    frameGeneration: "Yes",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 30 Series",
    examples: "RTX 3050 through RTX 3090 Ti, desktop and laptop",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    neuralRendering: "No official current support",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 20 Series",
    examples: "RTX 2060 through RTX 2080 Ti, plus RTX 20 laptops",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    neuralRendering: "No official current support",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce GTX and non-NVIDIA cards",
    examples: "GTX 10/16, AMD Radeon, Intel Arc",
    superResolution: "No",
    rayReconstruction: "No",
    neuralRendering: "No",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "No",
  },
];

const versionRows = [
  {
    release: "DLSS 2",
    added: "AI Super Resolution (upscaling)",
    rtx2030: "Yes",
    rtx40: "Yes",
    rtx50: "Yes",
  },
  {
    release: "DLSS 3",
    added: "Frame Generation (one generated frame per rendered frame)",
    rtx2030: "No",
    rtx40: "Yes",
    rtx50: "Yes",
  },
  {
    release: "DLSS 3.5",
    added: "Ray Reconstruction (AI denoising for ray tracing)",
    rtx2030: "Yes",
    rtx40: "Yes",
    rtx50: "Yes",
  },
  {
    release: "DLSS 4",
    added: "Transformer models for Super Resolution, Ray Reconstruction and DLAA; Multi Frame Generation",
    rtx2030: "Transformer models only",
    rtx40: "Transformer models and improved Frame Generation",
    rtx50: "Yes, including Multi Frame Generation",
  },
  {
    release: "DLSS 4.5",
    added: "Second-generation transformer Super Resolution, updated Ray Reconstruction, Dynamic Multi Frame Generation and 6X",
    rtx2030: "New Super Resolution and Ray Reconstruction models; no frame generation",
    rtx40: "New models and Frame Generation; no Dynamic MFG or 6X",
    rtx50: "Yes, including Dynamic MFG and 6X",
  },
  {
    release: "DLSS 5",
    added: "Neural Rendering (lighting and materials)",
    rtx2030: "No official support",
    rtx40: "Planned, no public date",
    rtx50: "Yes, in games that ship it",
  },
];

const popularCards = [
  { id: "rtx-2060", name: "RTX 2060", answer: "Super Resolution, DLAA and Ray Reconstruction, including the DLSS 4 and 4.5 upscaling models. No Frame Generation." },
  { id: "rtx-3050", name: "RTX 3050 (desktop and laptop)", answer: "Super Resolution, DLAA and Ray Reconstruction with the newest upscaling models. No NVIDIA Frame Generation; the newer models cost more on this entry card, so compare them in the same scene." },
  { id: "rtx-3060", name: "RTX 3060 and 3060 Ti", answer: "Same feature set as every RTX 30 card: Super Resolution, DLAA and Ray Reconstruction, but no Frame Generation." },
  { id: "rtx-3070", name: "RTX 3070", answer: "Gets the DLSS 4 and 4.5 Super Resolution models. Frame Generation and Multi Frame Generation stay unavailable." },
  { id: "rtx-3080", name: "RTX 3080 and 3090", answer: "RTX 30 features only: Super Resolution, DLAA and Ray Reconstruction. Raw speed does not unlock Frame Generation." },
  { id: "rtx-4050-laptop", name: "RTX 4050 Laptop", answer: "Full RTX 40 feature set, including Frame Generation. Laptop power limits change performance, not features." },
  { id: "rtx-4060", name: "RTX 4060 and 4060 Ti", answer: "Super Resolution, DLAA, Ray Reconstruction and Frame Generation. No Multi Frame Generation; DLSS 5 is planned for RTX 40 without a date." },
  { id: "rtx-4070", name: "RTX 4070 to RTX 4090", answer: "Same features as the RTX 4060. A faster card gives more headroom for Frame Generation, not extra DLSS features." },
  { id: "rtx-5060", name: "RTX 5050 to RTX 5090 and RTX Spark", answer: "Every DLSS feature, including Multi Frame Generation, Dynamic MFG and DLSS 5 Neural Rendering in supported games." },
  { id: "gtx", name: "GTX 1060, GTX 1080 Ti and GTX 16 Series", answer: "No DLSS. These cards lack Tensor Cores. Use FSR or XeSS upscaling where a game offers it." },
];

const modeRows = [
  { mode: "DLAA", scale: "100%", p1080: "1920×1080", p1440: "2560×1440", p2160: "3840×2160" },
  { mode: "Quality", scale: "66.7%", p1080: "1280×720", p1440: "1707×960", p2160: "2560×1440" },
  { mode: "Balanced", scale: "58%", p1080: "1114×626", p1440: "1485×835", p2160: "2227×1253" },
  { mode: "Performance", scale: "50%", p1080: "960×540", p1440: "1280×720", p2160: "1920×1080" },
  { mode: "Ultra Performance", scale: "33.3%", p1080: "640×360", p1440: "853×480", p2160: "1280×720" },
];

const ladderFeatures = [
  { id: "sr", label: "Super Resolution", tone: "border-blue-400/50 bg-blue-500/15 text-blue-200" },
  { id: "dlaa", label: "DLAA", tone: "border-blue-400/50 bg-blue-500/15 text-blue-200" },
  { id: "rr", label: "Ray Reconstruction", tone: "border-blue-400/50 bg-blue-500/15 text-blue-200" },
  { id: "fg", label: "Frame Generation", tone: "border-green-400/50 bg-green-500/15 text-green-200" },
  { id: "mfg", label: "Multi Frame Gen", tone: "border-green-400/50 bg-green-500/15 text-green-200" },
  { id: "dmfg", label: "Dynamic MFG", tone: "border-green-400/50 bg-green-500/15 text-green-200" },
  { id: "nr", label: "DLSS 5 Neural Rendering", tone: "border-violet-400/50 bg-violet-500/15 text-violet-200" },
];

const IMAGE_QUALITY = { sr: "yes", dlaa: "yes", rr: "yes" } as const;
const ladderColumns: { name: string; features: Record<string, "yes" | "planned"> }[] = [
  { name: "GTX, AMD, Intel", features: {} },
  { name: "RTX 20 / 30", features: { ...IMAGE_QUALITY } },
  { name: "RTX 40", features: { ...IMAGE_QUALITY, fg: "yes", nr: "planned" } },
  { name: "RTX 50 / Spark", features: { ...IMAGE_QUALITY, fg: "yes", mfg: "yes", dmfg: "yes", nr: "yes" } },
];

const modeBoxes = [
  { mode: "Quality", scale: 66.7, pixels: "44%" },
  { mode: "Balanced", scale: 58, pixels: "34%" },
  { mode: "Performance", scale: 50, pixels: "25%" },
  { mode: "Ultra Perf.", scale: 33.3, pixels: "11%" },
];

const tocLinks = [
  { href: "#matrix", label: "Feature matrix" },
  { href: "#gpu-compare", label: "Compare two GPUs" },
  { href: "#dlss-versions", label: "DLSS versions" },
  { href: "#popular-cards", label: "Popular cards" },
  { href: "#laptops", label: "Laptop GPUs" },
  { href: "#frame-generation-rtx-20-30", label: "Frame Generation on RTX 20/30" },
  { href: "#dlss-modes", label: "DLSS modes" },
  { href: "#faq", label: "FAQ" },
];

const faqItems = [
  {
    question: "What graphics cards support DLSS?",
    answer:
      "DLSS is supported on NVIDIA GeForce RTX graphics cards. RTX 20, 30, 40, and 50 Series cards can use Super Resolution, Ray Reconstruction, and DLAA in compatible games. RTX 40 and 50 add Frame Generation, while Multi Frame Generation and Dynamic Multi Frame Generation are limited to RTX 50.",
  },
  {
    question: "Does the RTX 3050 support DLSS?",
    answer:
      "Yes. The RTX 3050 supports DLSS Super Resolution, DLAA, and Ray Reconstruction where a game offers them. It does not support NVIDIA DLSS Frame Generation, Multi Frame Generation, or Dynamic MFG.",
  },
  {
    question: "Does the RTX 3070 support DLSS 3 or DLSS 4?",
    answer:
      "An RTX 3070 can use newer Super Resolution and Ray Reconstruction models delivered through supported games or NVIDIA App overrides. It cannot use Frame Generation or Multi Frame Generation. A version label does not grant every feature in that version to every RTX card.",
  },
  {
    question: "Does the RTX 4060 support DLSS?",
    answer:
      "Yes. The RTX 4060 supports Super Resolution, Ray Reconstruction, DLAA, and Frame Generation. It does not support RTX 50-only Multi Frame Generation or Dynamic Multi Frame Generation.",
  },
  {
    question: "Which cards support DLSS 5 Neural Rendering?",
    answer:
      "For local PC play today, DLSS 5 Neural Rendering is confirmed for GeForce RTX 50 desktop and laptop GPUs in games that ship the feature. RTX 40 is planned for a future expansion with no public availability date. RTX 20 and RTX 30 have no official current DLSS 5 support.",
  },
  {
    question: "Can GTX cards use DLSS?",
    answer:
      "No. GeForce GTX cards do not contain the RTX Tensor Core path required by DLSS. A game may offer another upscaler such as FSR or XeSS, but selecting one of those is not the same as enabling DLSS.",
  },
  {
    question: "Does every game on an RTX card support DLSS?",
    answer:
      "No. Hardware eligibility is only the first requirement. The game must integrate the specific DLSS feature, and some newer model overrides also require a supported NVIDIA App profile and current driver.",
  },
  {
    question: "Which DLSS version does my RTX 30 card support?",
    answer:
      "RTX 30 cards get the Super Resolution, DLAA and Ray Reconstruction parts of every DLSS release, including the DLSS 4 and DLSS 4.5 transformer models. They do not get the Frame Generation parts of DLSS 3, 4 or 4.5, and they have no official DLSS 5 support.",
  },
  {
    question: "Can RTX 20 or RTX 30 cards use frame generation?",
    answer:
      "Not NVIDIA DLSS Frame Generation, which starts with RTX 40. In games that offer AMD FSR 3 frame generation, AMD lists RTX 20 and newer as supported and RTX 30 and newer as recommended, so RTX 20 and 30 owners can use that option instead.",
  },
  {
    question: "Do laptop GPUs support the same DLSS features as desktop cards?",
    answer:
      "Yes. A laptop GPU supports the same DLSS features as the desktop generation it belongs to, so an RTX 4050 Laptop GPU has Frame Generation and an RTX 3050 Laptop GPU does not. Laptop power and cooling limits change performance, not the feature list.",
  },
  {
    question: "What resolution does DLSS Quality render at?",
    answer:
      "DLSS Quality renders at about 66.7% of the output resolution on each axis: 1280×720 for 1080p, about 1707×960 for 1440p and 2560×1440 for 4K. Balanced uses about 58%, Performance 50% and Ultra Performance about 33.3%.",
  },
];

function SupportMark({ value }: { value: string }) {
  const tone = value.startsWith("Yes") ? "font-semibold text-green-400" : value.startsWith("No") ? "text-muted-foreground" : "text-foreground";
  return <span className={tone}>{value}</span>;
}

export default function DlssSupportedCardsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "DLSS 5 Checker", item: "https://www.dlss5.net" },
      { "@type": "ListItem", position: 2, name: "DLSS Supported Cards", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "DLSS Supported Cards: RTX 20, 30, 40 and 50 Guide",
    url: PAGE_URL,
    datePublished: "2026-08-26",
    dateModified: "2026-11-01",
    inLanguage: "en",
    author: { "@type": "Person", name: "liuyan-wjy", url: "https://www.dlss5.net/about" },
    publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link>
          <span className="mx-2">/</span>
          <span>DLSS supported cards</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">Compatibility guide · Reviewed November 1, 2026</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS Supported Cards: RTX 20, 30, 40, and 50 Series Compared
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every GeForce RTX generation supports DLSS, but not every RTX card supports every
            DLSS feature. This guide separates Super Resolution, Ray Reconstruction, Frame
            Generation, Multi Frame Generation, Dynamic MFG, DLAA, and DLSS 5 Neural Rendering
            so you can check the
            feature that matters before changing settings or buying a GPU.
          </p>
        </header>

        <nav aria-label="On this page" className="mb-10">
          <p className="mb-2 text-sm font-semibold text-muted-foreground">On this page</p>
          <ul className="flex flex-wrap gap-2">
            {tocLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-9 items-center rounded-full border border-border px-3 text-sm hover:border-blue-400 hover:text-blue-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Short answer: which cards support DLSS?</h2>
          <p className="leading-relaxed text-foreground/80">
            NVIDIA DLSS works on GeForce RTX 20, RTX 30, RTX 40, and RTX 50 Series graphics
            cards. All four generations can use DLSS Super Resolution, Ray Reconstruction,
            and DLAA when the game supports the feature. RTX 40 and RTX 50 cards can also use
            Frame Generation. Multi Frame Generation and the newer Dynamic Multi Frame
            Generation modes are RTX 50-only features, and RTX Spark laptops share the RTX 50
            feature set. DLSS 5 Neural Rendering is confirmed locally on RTX 50 desktop and laptop
            GPUs and RTX Spark laptops in supported games such as NBA 2K27; RTX 40 is planned for
            later with no public date. GTX cards, AMD Radeon cards, and Intel
            Arc cards do not support NVIDIA DLSS.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            That distinction matters because a game may advertise “DLSS 4” or “DLSS 4.5” while
            exposing a different set of options on each generation. An RTX 3070 can receive a
            newer Super Resolution model without gaining Frame Generation. An RTX 4060 can use
            Frame Generation without gaining Multi Frame Generation. Check the feature, not only
            the version number.
          </p>
        </section>

        <figure className="mb-10" aria-labelledby="ladder-caption">
          <figcaption id="ladder-caption" className="mb-1 text-xl font-bold">DLSS features by GPU generation at a glance</figcaption>
          <p className="mb-4 text-sm text-muted-foreground">Each newer generation keeps everything below it and adds the features on top.</p>
          <div className="grid grid-cols-4 items-end gap-2 sm:gap-4">
            {ladderColumns.map((column) => (
              <div key={column.name} className="flex flex-col justify-end gap-1.5">
                {[...ladderFeatures].reverse().map((feature) => {
                  const state = column.features[feature.id];
                  if (!state) return null;
                  return (
                    <div
                      key={feature.id}
                      className={`rounded-md border px-1.5 py-2 text-center text-[11px] leading-tight sm:px-2 sm:text-xs ${
                        state === "planned"
                          ? "border-dashed border-muted-foreground/50 text-muted-foreground"
                          : feature.tone
                      }`}
                    >
                      {feature.label}
                      {state === "planned" && <span className="block text-[10px] sm:text-[11px]">planned</span>}
                    </div>
                  );
                })}
                {Object.keys(column.features).length === 0 && (
                  <div className="rounded-md border border-dashed border-border px-1.5 py-6 text-center text-[11px] text-muted-foreground sm:text-xs">No DLSS</div>
                )}
                <p className="mt-1 border-t border-border pt-2 text-center text-xs font-semibold sm:text-sm">{column.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm border border-blue-400/50 bg-blue-500/15" aria-hidden="true" />Image quality</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm border border-green-400/50 bg-green-500/15" aria-hidden="true" />Frame generation</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm border border-violet-400/50 bg-violet-500/15" aria-hidden="true" />DLSS 5</span>
          </div>
        </figure>

        <figure id="matrix" className="mb-10 scroll-mt-24">
          <figcaption className="mb-3 text-2xl font-bold">DLSS card compatibility matrix</figcaption>
          <ul className="space-y-3 md:hidden">
            {compatibilityRows.map((row) => (
              <li key={row.generation} className="rounded-lg border border-border p-4">
                <p className="font-semibold">{row.generation}</p>
                <p className="mb-3 text-sm text-muted-foreground">{row.examples}</p>
                <dl className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5 text-sm">
                  <dt>Super Resolution</dt><dd className="text-right"><SupportMark value={row.superResolution} /></dd>
                  <dt>DLAA</dt><dd className="text-right"><SupportMark value={row.dlaa} /></dd>
                  <dt>Ray Reconstruction</dt><dd className="text-right"><SupportMark value={row.rayReconstruction} /></dd>
                  <dt>Frame Generation</dt><dd className="text-right"><SupportMark value={row.frameGeneration} /></dd>
                  <dt>Multi Frame Generation</dt><dd className="text-right"><SupportMark value={row.multiFrameGeneration} /></dd>
                  <dt>Dynamic MFG</dt><dd className="text-right"><SupportMark value={row.dynamicMfg} /></dd>
                  <dt>DLSS 5 Neural Rendering</dt><dd className="text-right"><SupportMark value={row.neuralRendering} /></dd>
                </dl>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto rounded-lg border border-border md:block">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3">GPU family</th><th className="p-3">Typical cards</th>
                  <th className="p-3">Super Resolution</th><th className="p-3">Ray Reconstruction</th>
                  <th className="p-3">DLSS 5 Neural Rendering</th>
                  <th className="p-3">Frame Generation</th><th className="p-3">MFG</th>
                  <th className="p-3">Dynamic MFG</th><th className="p-3">DLAA</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityRows.map((row) => (
                  <tr key={row.generation} className="border-t border-border align-top">
                    <th className="p-3 text-left font-semibold">{row.generation}</th>
                    <td className="p-3 text-muted-foreground">{row.examples}</td>
                    <td className="p-3"><SupportMark value={row.superResolution} /></td>
                    <td className="p-3"><SupportMark value={row.rayReconstruction} /></td>
                    <td className="p-3">{row.neuralRendering}</td>
                    <td className="p-3"><SupportMark value={row.frameGeneration} /></td>
                    <td className="p-3"><SupportMark value={row.multiFrameGeneration} /></td>
                    <td className="p-3"><SupportMark value={row.dynamicMfg} /></td>
                    <td className="p-3"><SupportMark value={row.dlaa} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The matrix describes hardware eligibility. A specific option still depends on the
            game, its patch level, the driver, and in some cases an NVIDIA App override.
          </p>
        </figure>

        <GpuCompare />

        <section id="dlss-versions" className="mb-10 scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">Which DLSS version does my card support?</h2>
          <p className="leading-relaxed text-foreground/80">
            &quot;DLSS 4&quot; or &quot;DLSS 4.5&quot; on a game&apos;s store page is a bundle of
            features, not a single switch. Every RTX card gets the image-quality parts of each release,
            but the frame-generation parts depend on the generation, so an RTX 3070 can run the DLSS 4
            upscaling model without gaining DLSS 4 Multi Frame Generation. NVIDIA confirms that the{" "}
            <a href={NVIDIA_DLSS_4} rel="noreferrer" className="text-blue-400 hover:underline">DLSS 4 transformer models</a>{" "}
            run on all RTX GPUs while Multi Frame Generation is RTX 50-only.
          </p>
          <ul className="space-y-3">
            {versionRows.map((row) => (
              <li key={row.release} className="rounded-lg border border-border p-4">
                <h3 className="font-semibold">{row.release}</h3>
                <p className="mb-3 text-sm text-muted-foreground">Added: {row.added}</p>
                <dl className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm sm:grid-cols-3 sm:gap-2">
                  <div className="contents sm:block sm:rounded-md sm:bg-muted/40 sm:px-3 sm:py-2"><dt className="text-muted-foreground sm:text-xs">RTX 20/30</dt><dd><SupportMark value={row.rtx2030} /></dd></div>
                  <div className="contents sm:block sm:rounded-md sm:bg-muted/40 sm:px-3 sm:py-2"><dt className="text-muted-foreground sm:text-xs">RTX 40</dt><dd><SupportMark value={row.rtx40} /></dd></div>
                  <div className="contents sm:block sm:rounded-md sm:bg-muted/40 sm:px-3 sm:py-2"><dt className="text-muted-foreground sm:text-xs">RTX 50, Spark</dt><dd><SupportMark value={row.rtx50} /></dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </section>

        <section id="popular-cards" className="mb-10 scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">Popular cards at a glance</h2>
          <p className="leading-relaxed text-foreground/80">
            Short answers for the models people ask about most. For any other card, use the{" "}
            <Link href="/" className="text-blue-400 hover:underline">GPU checker</Link> or the comparison above.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {popularCards.map((card) => (
              <li key={card.id} id={card.id} className="scroll-mt-24 rounded-lg border border-border p-4">
                <h3 className="mb-1 font-semibold">{card.name}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{card.answer}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-border bg-muted/20 p-4">
            <h3 className="mb-2 font-semibold">Good to know by generation</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
              <li><strong className="text-foreground">RTX 50:</strong> Multi Frame Generation works best when the game already runs at a stable base frame rate on a high-refresh display. Dynamic MFG can conflict with V-Sync or external frame-rate limiters, so test latency rather than picking the largest multiplier.</li>
              <li><strong className="text-foreground">RTX 40:</strong> &quot;No MFG&quot; does not mean &quot;no DLSS 4.5&quot;. These cards still get the newer upscaling and Ray Reconstruction models and the improved Frame Generation model.</li>
              <li><strong className="text-foreground">RTX 20 and 30:</strong> The newer transformer models cost more on these cards because they lack the FP8 acceleration of newer GPUs. Compare the new model with the older preset, or with one mode lower, in the same scene.</li>
              <li><strong className="text-foreground">Ray tracing on older cards:</strong> Ray Reconstruction improves a ray-traced image on every RTX card, but it cannot make heavy path tracing cheap on an RTX 2060 or 3060.</li>
            </ul>
          </div>
        </section>

        <section id="laptops" className="mb-10 scroll-mt-24 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Laptop GPUs: same features, different performance</h2>
          <p className="leading-relaxed">
            A laptop GPU supports the same DLSS features as the desktop generation it belongs to.
            An RTX 4050 Laptop GPU has Frame Generation because it is an RTX 40 part; an RTX 3050
            Laptop GPU does not, because it is an RTX 30 part. RTX 50 laptops and RTX Spark laptops
            get Multi Frame Generation and DLSS 5 Neural Rendering like RTX 50 desktop cards.
          </p>
          <p className="leading-relaxed">
            What changes is performance. Laptop GPUs run at much lower power than desktop cards with
            similar names, and two laptops with the same GPU can perform very differently depending on
            power limit and cooling. Compare reviews of laptops with a similar power rating, and on
            laptops with integrated graphics make sure the game runs on the NVIDIA GPU, or the DLSS
            options will not appear.
          </p>
        </section>

        <section id="frame-generation-rtx-20-30" className="mb-10 scroll-mt-24 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Can RTX 20 and RTX 30 cards use frame generation?</h2>
          <p className="leading-relaxed">
            Not NVIDIA&apos;s. DLSS Frame Generation starts with RTX 40, and Multi Frame Generation with
            RTX 50; no driver or setting adds them to older cards. Many games, however, also include
            AMD FSR 3 frame generation, which is not tied to AMD hardware. At launch,{" "}
            <a href={AMD_FSR3_LAUNCH} rel="noreferrer" className="text-blue-400 hover:underline">AMD listed</a>{" "}
            NVIDIA RTX 20 Series and newer as supported and RTX 30 Series and newer as recommended.
          </p>
          <p className="leading-relaxed">
            So an RTX 3060 or RTX 3080 owner can often turn on frame generation by choosing the
            game&apos;s FSR frame generation option, and some games let you combine it with DLSS
            Super Resolution. As with any frame generation, it smooths motion best when the base frame
            rate is already around 60 FPS, and it does not improve input response. Community tools that
            claim to add NVIDIA Frame Generation to RTX 30 are unofficial; see our{" "}
            <Link href="/dlss-5-mods" className="text-blue-400 hover:underline">notes on community mods and their risks</Link>.
          </p>
        </section>

        <section id="dlss-modes" className="mb-10 scroll-mt-24 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">DLSS modes: what resolution does each one render at?</h2>
          <p className="leading-relaxed">
            Super Resolution renders at a lower internal resolution and reconstructs your output
            resolution. Lower internal resolution means more speed and, at some point, a softer image.
            The table shows the internal resolution for each output resolution, using the standard
            scale factors per axis; some games use their own values or offer a custom slider.
          </p>
          <figure className="max-w-2xl space-y-2" aria-labelledby="render-area-caption">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted/20" role="img" aria-label="Rendered area for each DLSS mode compared with the output frame: Quality renders about 44% of the pixels, Balanced 34%, Performance 25% and Ultra Performance 11%.">
              <span className="absolute bottom-1.5 right-2 text-[11px] text-muted-foreground sm:text-xs">Output frame (100%)</span>
              {modeBoxes.map((box) => (
                <div
                  key={box.mode}
                  className="absolute left-0 top-0 rounded-br-md border-b border-r border-blue-400/60 bg-blue-500/10"
                  style={{ width: `${box.scale}%`, height: `${box.scale}%` }}
                >
                  <span className="absolute bottom-1 right-1.5 hidden whitespace-nowrap text-xs text-blue-200 sm:block">
                    {box.mode} · {box.pixels}
                  </span>
                </div>
              ))}
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground sm:hidden">
              {modeBoxes.map((box) => (
                <li key={box.mode}><span className="text-blue-200">{box.mode}</span> · {box.pixels} of pixels</li>
              ))}
            </ul>
            <figcaption id="render-area-caption" className="text-sm text-muted-foreground">
              Nested boxes show the share of the output frame&apos;s pixels each mode actually renders,
              measured from the top-left corner. Performance draws a quarter of the pixels
              of the output frame, which is why it is so much faster, and why the reconstruction model
              matters so much for image quality.
            </figcaption>
          </figure>
          <div className="overflow-x-auto rounded-lg border border-border" tabIndex={0} role="region" aria-label="DLSS mode internal resolutions">
            <table className="w-full text-xs sm:text-sm">
              <caption className="sr-only">Internal render resolution for each DLSS mode at 1080p, 1440p and 4K output</caption>
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th scope="col" className="p-2 sm:p-3">Mode</th>
                  <th scope="col" className="p-2 sm:p-3">1080p</th>
                  <th scope="col" className="p-2 sm:p-3">1440p</th>
                  <th scope="col" className="p-2 sm:p-3">4K</th>
                </tr>
              </thead>
              <tbody>
                {modeRows.map((row) => (
                  <tr key={row.mode} className="border-t border-border">
                    <th scope="row" className="p-2 text-left font-semibold sm:p-3">
                      {row.mode}
                      <span className="block text-xs font-normal text-muted-foreground">{row.scale}</span>
                    </th>
                    <td className="p-2 tabular-nums sm:p-3">{row.p1080}</td>
                    <td className="p-2 tabular-nums sm:p-3">{row.p1440}</td>
                    <td className="p-2 tabular-nums sm:p-3">{row.p2160}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            A practical starting point: Quality at 1080p and 1440p, Performance at 4K, and Balanced
            when you need a little more speed. NVIDIA designed the transformer models used since DLSS 4
            to keep more detail than earlier models, so if you last chose a mode years ago, try one step
            lower and compare the same scene before deciding. Scale factors follow the commonly published{" "}
            <a href={DLSS_MODES_EXPLAINER} rel="noreferrer" className="text-blue-400 hover:underline">DLSS preset values</a>.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">What about GTX, Radeon, and Intel Arc?</h2>
          <p className="leading-relaxed">
            None of them can run NVIDIA DLSS. GTX cards such as the GTX 1060, GTX 1660 and GTX 1080 Ti
            lack the Tensor Cores DLSS needs, and replacing a game&apos;s DLSS file or forcing a menu
            flag will not add them. AMD Radeon and Intel Arc cards use their own upscalers instead: pick
            FSR or XeSS in the game&apos;s menu, and avoid unofficial downloads that claim to turn
            unsupported hardware into a DLSS card.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">How to verify DLSS support on your PC</h2>
          <ol className="space-y-4 text-foreground/80">
            <li><strong className="text-foreground">1. Identify the exact GPU.</strong> Open Task Manager, the NVIDIA App, or Device Manager and record the full model. Laptop and desktop cards with similar names can have different power limits even when feature support is the same.</li>
            <li><strong className="text-foreground">2. Update through NVIDIA.</strong> Install the current Game Ready Driver and NVIDIA App from official NVIDIA channels. A supported card can appear unsupported when an old driver predates the game profile.</li>
            <li><strong className="text-foreground">3. Check the game, not only the GPU.</strong> Confirm the game actually lists Super Resolution, Ray Reconstruction, or Frame Generation. Hardware support does not insert a missing game integration.</li>
            <li><strong className="text-foreground">4. Review prerequisites.</strong> Some games require hardware-accelerated GPU scheduling for Frame Generation. Ray Reconstruction normally needs ray tracing or path tracing because it reconstructs a ray-traced signal.</li>
            <li><strong className="text-foreground">5. Test a repeatable scene.</strong> Keep the resolution, preset, camera path, and frame-rate measurement consistent. Compare image stability and input response as well as the headline FPS number.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Buying advice: choose for the feature you will use</h2>
          <p className="leading-relaxed">
            If your goal is better image quality in ordinary rasterized games, every RTX generation
            in this guide can use Super Resolution when the title supports it. A used RTX 30 card
            does not become obsolete because it lacks Frame Generation. Compare native performance,
            VRAM, power use, game support, and price before paying only for a DLSS label.
          </p>
          <p className="leading-relaxed">
            If you specifically want Frame Generation, start with RTX 40 or RTX 50. If Multi Frame
            Generation or Dynamic MFG is a firm requirement, RTX 50 is the current hardware boundary.
            These modes make the most sense when the game already has a responsive base frame rate.
            Generated frames improve presentation smoothness, but they do not replace the input and
            simulation response of genuinely rendered frames.
          </p>
          <p className="leading-relaxed">
            For ray tracing, consider the entire rendering budget. All RTX generations may be
            eligible for Ray Reconstruction, but a newer or faster GPU may be needed to run demanding
            path tracing at the resolution you want. Compatibility means the switch can work. It does
            not promise identical performance or image quality across an RTX 2060 and RTX 5090.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link href="/dlss-4-5-supported-cards" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 4.5 supported cards</div>
            <p className="text-sm text-muted-foreground">See the 4.5 feature split, model presets, setup, and exact GPU answers.</p>
          </Link>
          <Link href="/dlss-5-supported-cards" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5 supported cards status</div>
            <p className="text-sm text-muted-foreground">Track confirmed, planned, and unsupported status for DLSS 5 Neural Rendering.</p>
          </Link>
          <Link href="/dlss-frame-generation-vs-multi-frame-generation" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Frame Generation vs MFG</div>
            <p className="text-sm text-muted-foreground">Understand the practical difference between RTX 40 and RTX 50 frame generation.</p>
          </Link>
          <Link href="/guides" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">All DLSS guides</div>
            <p className="text-sm text-muted-foreground">Browse game, hardware, setup, and evidence guides by task.</p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Sources and editorial method</h2>
          <p>
            This matrix follows the feature-by-generation table on the official{" "}
            <a href={NVIDIA_DLSS} rel="noreferrer" className="text-blue-400 hover:underline">NVIDIA DLSS technology page</a>
            {" "}and the model guidance in NVIDIA&apos;s{" "}
            <a href={NVIDIA_DLSS_45} rel="noreferrer" className="text-blue-400 hover:underline">DLSS 4.5 announcement</a>. DLSS 5 Neural Rendering status follows NVIDIA&apos;s{" "}
            <a href={NVIDIA_DLSS5_LAUNCH} rel="noreferrer" className="text-blue-400 hover:underline">DLSS 5 launch post</a>{" "}
            and NVIDIA&apos;s public{" "}
            <a href={NVIDIA_RTX40_UPDATE} rel="noreferrer" className="text-blue-400 hover:underline">RTX 40 expansion note</a>.
            We separate hardware eligibility from game availability and avoid treating a version
            label as support for every feature. FSR frame generation support follows AMD&apos;s published
            hardware list. Published and checked by liuyan-wjy on August 26, 2026 and reviewed on
            November 1, 2026. Drivers, game profiles, and feature availability can change, so the
            linked primary sources take priority over this summary.
          </p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
