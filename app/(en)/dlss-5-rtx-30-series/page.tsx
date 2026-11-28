import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import UpgradeOptionsCard from "@/components/UpgradeOptionsCard";
import VideoEmbed from "@/components/VideoEmbed";
import { ALL_GPUS, getFeatureLabel } from "@/lib/gpu-search";
import { OG_IMAGE_EN } from "@/lib/og-image";

const title = "DLSS 5 on RTX 3060, 3070, 3080 & 3090: Supported?";
const description =
  "RTX 30 and RTX 20 cards have no official DLSS 5 support. See what an RTX 3060, 3070, 3080 or 2060 can turn on today, how to try DLSS 5 without upgrading, and when an upgrade makes sense.";
const PAGE_URL = "https://www.dlss5.net/dlss-5-rtx-30-series";
const REVIEWED = "2026-11-18";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dlss-5-rtx-30-series" },
  openGraph: { images: [OG_IMAGE_EN], title, description, type: "article", url: PAGE_URL },
  twitter: { card: "summary_large_image", title, description },
};

const NVIDIA_LAUNCH = "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_NOVEMBER = "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/";
const NVIDIA_WWM_DRIVER = "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/";
const NVIDIA_DLSS45_GUIDE = "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const PCGAMER_DESKTOP_APP = "https://www.pcgamer.com/hardware/you-can-now-apply-dlss-5-to-your-entire-desktop-with-a-free-app-and-it-even-works-with-rtx-30-series-cards/";
const GFN_REQS = "https://www.nvidia.com/en-us/geforce-now/system-reqs/";

const rtx30 = ALL_GPUS.filter((gpu) => gpu.series === "RTX 30");
const rtx20 = ALL_GPUS.filter((gpu) => gpu.series === "RTX 20");

// Feature ladder shown as an infographic. Values mirror data/gpu-data.json and NVIDIA's DLSS table.
const ladder: { feature: string; rtx20: boolean; rtx30: boolean; rtx40: boolean; rtx50: boolean }[] = [
  { feature: "Super Resolution (incl. Transformer models)", rtx20: true, rtx30: true, rtx40: true, rtx50: true },
  { feature: "DLAA", rtx20: true, rtx30: true, rtx40: true, rtx50: true },
  { feature: "Ray Reconstruction", rtx20: true, rtx30: true, rtx40: true, rtx50: true },
  { feature: "Frame Generation (2X)", rtx20: false, rtx30: false, rtx40: true, rtx50: true },
  { feature: "Multi Frame Generation / Dynamic 6X", rtx20: false, rtx30: false, rtx40: false, rtx50: true },
  { feature: "DLSS 5 Neural Rendering", rtx20: false, rtx30: false, rtx40: false, rtx50: true },
];

const faqItems = [
  {
    question: "Does the RTX 3060 support DLSS 5?",
    answer:
      "No. As of November 18, 2026 the RTX 3060 (8 GB and 12 GB), RTX 3060 Ti and RTX 3060 Laptop GPU have no official DLSS 5 Neural Rendering support. NVIDIA lists RTX 50 GPUs, RTX Spark laptops and GeForce NOW Ultimate for every live DLSS 5 game. The RTX 3060 still supports DLSS Super Resolution, DLAA and Ray Reconstruction.",
  },
  {
    question: "Will RTX 30 series ever get DLSS 5?",
    answer:
      "NVIDIA has not announced any plan for RTX 30. Its only announced expansion is RTX 40, which is planned with no date. Until NVIDIA says otherwise, treat RTX 30 and RTX 20 as unsupported rather than waiting for an update.",
  },
  {
    question: "Does more VRAM, like the RTX 3090's 24 GB, make a difference?",
    answer:
      "No. Support is decided by GPU generation, not memory. An RTX 3090 or RTX 3060 12GB is in the same unsupported group as an RTX 3050. Extra VRAM still helps current games with high textures and ray tracing.",
  },
  {
    question: "Can I play a DLSS 5 game on an RTX 30 PC through GeForce NOW?",
    answer:
      "Yes, if you have a GeForce NOW Ultimate membership in a region with NVIDIA-operated RTX 5080 servers and own a supported game. NVIDIA confirms DLSS 5 on GeForce NOW Ultimate for NBA 2K27 and Hogwarts Legacy. The cloud server renders the effect; your RTX 30 card only decodes the video stream.",
  },
  {
    question: "Can RTX 30 cards use frame generation?",
    answer:
      "Not NVIDIA DLSS Frame Generation, which starts with RTX 40. Many games also offer AMD FSR frame generation, which runs on RTX 30 cards and can be combined with DLSS Super Resolution in some games.",
  },
  {
    question: "Do DLSS 5 mods work on RTX 30?",
    answer:
      "Some community tools claim to run a DLSS 5-style effect on RTX 30 cards. They are not NVIDIA support, are not available in the official game menus, and carry malware and anti-cheat risks. We have not tested them.",
  },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 font-bold text-green-500" aria-label="Yes">✓</span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 font-bold text-red-400" aria-label="No">✕</span>
  );
}

export default function Dlss5Rtx30SeriesPage() {
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
      { "@type": "ListItem", position: 2, name: "RTX 30 and RTX 20 DLSS 5 status", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DLSS 5 on RTX 30 and RTX 20 Series",
    url: PAGE_URL,
    inLanguage: "en",
    datePublished: REVIEWED,
    dateModified: REVIEWED,
    author: { "@type": "Person", name: "liuyan-wjy", url: "https://www.dlss5.net/about" },
    publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
    about: ["RTX 3060 DLSS 5", "RTX 3070 DLSS 5", "RTX 3080 DLSS 5", "RTX 3090 DLSS 5", "RTX 2060 DLSS 5"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link> / RTX 30 and RTX 20
        </nav>

        <header className="mb-8">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            Last checked <time dateTime={REVIEWED}>November 18, 2026</time>
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 on RTX 30 and RTX 20 Series: Not Supported, and What to Use Instead
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your RTX 3060, 3070, 3080, 3090 or RTX 20 card cannot run DLSS 5 Neural Rendering in the
            official game menus, and NVIDIA has announced no plan to add it. This page explains what
            those cards can still switch on today, how to see DLSS 5 without buying a new GPU, and how to
            decide whether an upgrade is worth it for you.
          </p>
        </header>

        <section className="mb-10 grid gap-4 sm:grid-cols-3" aria-label="Quick answer">
          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-5">
            <h2 className="mb-2 font-bold">Official DLSS 5</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Not supported on any RTX 30 or RTX 20 desktop or laptop GPU. No plan announced.
            </p>
          </div>
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="mb-2 font-bold">Still works today</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              DLSS Super Resolution, DLAA and Ray Reconstruction, including newer models through the NVIDIA App.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-2 font-bold">See DLSS 5 anyway</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              GeForce NOW Ultimate streams NBA 2K27 and Hogwarts Legacy with Neural Rendering from cloud RTX 5080s.
            </p>
          </div>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">What NVIDIA has said about older RTX cards</h2>
          <p>
            Every NVIDIA DLSS 5 announcement so far names the same hardware. The{" "}
            <a href={NVIDIA_LAUNCH} className="text-blue-400 hover:underline">September launch article</a> made
            DLSS 5 available &quot;for GeForce RTX 50 Series PCs and laptops&quot; and GeForce NOW Ultimate. The{" "}
            <a href={NVIDIA_NOVEMBER} className="text-blue-400 hover:underline">November 5 update</a> for Hogwarts
            Legacy and the <a href={NVIDIA_WWM_DRIVER} className="text-blue-400 hover:underline">621.24 driver note</a>{" "}
            for Where Winds Meet list RTX 50 and RTX Spark systems. None of them mentions RTX 30 or RTX 20.
          </p>
          <p>
            NVIDIA has said RTX 40 support is planned, with no date (see our{" "}
            <Link href="/dlss-5-rtx-40-series" className="text-blue-400 hover:underline">RTX 40 status page</Link>).
            It has not published a reason for leaving RTX 30 and RTX 20 out, and it has not said they will never
            get DLSS 5. We label them <strong>unsupported</strong>, not <strong>planned</strong>, because there is no
            announcement to wait for.
          </p>
          <p>
            For context only: NVIDIA already notes that its newest DLSS 4.5 Super Resolution models cost more
            on RTX 20 and RTX 30 because those generations lack the FP8 acceleration of RTX 40 and RTX 50
            (<a href={NVIDIA_DLSS45_GUIDE} className="text-blue-400 hover:underline">NVIDIA setup guide</a>).
            Neural Rendering is a much heavier model than upscaling, and NVIDIA&apos;s own figures show it costs
            frame rate even on RTX 50. That is our reading of the published facts, not NVIDIA&apos;s explanation.
          </p>
        </section>

        <figure className="mb-10 rounded-lg border border-border p-4 sm:p-5" aria-labelledby="ladder-30-caption">
          <figcaption id="ladder-30-caption" className="mb-4">
            <span className="block text-lg font-bold">Which DLSS features each RTX generation can use</span>
            <span className="block text-sm text-muted-foreground">
              Official NVIDIA features only, November 2026. RTX 30 and RTX 20 keep every feature in the first three rows.
            </span>
          </figcaption>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="text-left">
                  <th scope="col" className="py-2 pr-2 font-semibold">Feature</th>
                  <th scope="col" className="px-0.5 py-2 text-center font-semibold"><span className="sr-only sm:not-sr-only">RTX </span>20</th>
                  <th scope="col" className="px-0.5 py-2 text-center font-semibold"><span className="sr-only sm:not-sr-only">RTX </span>30</th>
                  <th scope="col" className="px-0.5 py-2 text-center font-semibold"><span className="sr-only sm:not-sr-only">RTX </span>40</th>
                  <th scope="col" className="px-0.5 py-2 text-center font-semibold"><span className="sr-only sm:not-sr-only">RTX </span>50</th>
                </tr>
              </thead>
              <tbody>
                {ladder.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <th scope="row" className="py-2 pr-2 text-left font-medium">{row.feature}</th>
                    <td className="px-0.5 py-2 text-center"><Mark on={row.rtx20} /></td>
                    <td className="px-0.5 py-2 text-center"><Mark on={row.rtx30} /></td>
                    <td className="px-0.5 py-2 text-center"><Mark on={row.rtx40} /></td>
                    <td className="px-0.5 py-2 text-center"><Mark on={row.rtx50} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            RTX 40 Neural Rendering is planned without a date. Full matrix:{" "}
            <Link href="/dlss-supported-cards#matrix" className="text-blue-400 hover:underline">DLSS supported cards</Link>.
          </p>
        </figure>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">RTX 30 and RTX 20 cards, model by model</h2>
          <p className="mb-4 leading-relaxed text-foreground/80">
            Ti, SUPER, 8 GB or 12 GB variants and the matching Laptop GPUs all share their generation&apos;s
            status. To check a specific card, type it into the <Link href="/" className="text-blue-400 hover:underline">GPU checker</Link>.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[...rtx30, ...rtx20].map((gpu) => (
              <div key={gpu.id} id={gpu.id} className="scroll-mt-24 rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{gpu.name.replace("NVIDIA GeForce ", "")}</h3>
                  <span className="shrink-0 text-xs text-muted-foreground">{gpu.vram}</span>
                </div>
                <p className="mt-1 text-sm text-red-400">DLSS 5: not supported</p>
                <p className="mt-1 text-sm text-foreground/80">
                  Can use: {gpu.current_dlss_features.map((f) => getFeatureLabel(f)).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Best DLSS settings for an RTX 30 card today</h2>
          <p>
            You can still make games look and run better with the features your card supports. A practical order to try them:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Turn on DLSS Super Resolution at Quality.</strong> At 1440p it renders internally at about
              1707×960 and reconstructs the full image. Drop to Balanced or Performance only if you need more
              frames. Our <Link href="/dlss-supported-cards#dlss-modes" className="text-blue-400 hover:underline">mode table</Link> lists
              every internal resolution.
            </li>
            <li>
              <strong>Pick the upscaling model in the NVIDIA App.</strong> RTX 30 can use the Transformer models
              through the App&apos;s DLSS override. The newest 4.5 models cost more on RTX 30, so compare frame
              times against the previous model in the same scene. See{" "}
              <Link href="/dlss-4-5-supported-cards" className="text-blue-400 hover:underline">DLSS 4.5 on RTX 20 and 30</Link>.
            </li>
            <li>
              <strong>Use Ray Reconstruction when you enable ray tracing.</strong> It replaces hand-tuned denoisers
              and often looks cleaner at the same cost. Details in our{" "}
              <Link href="/dlss-4-5-ray-reconstruction" className="text-blue-400 hover:underline">Ray Reconstruction guide</Link>.
            </li>
            <li>
              <strong>For smoother motion, try the game&apos;s FSR frame generation.</strong> NVIDIA Frame Generation
              needs RTX 40, but many games include AMD FSR frame generation, which runs on RTX 30. It works best when
              the game already runs near 60 FPS and does not reduce input lag. More in{" "}
              <Link href="/dlss-supported-cards#frame-generation-rtx-20-30" className="text-blue-400 hover:underline">frame generation on RTX 20/30</Link>.
            </li>
            <li>
              <strong>Use DLAA if you have headroom.</strong> On lighter games, DLAA runs at native resolution and
              gives the cleanest anti-aliasing DLSS offers.
            </li>
          </ol>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">How to see DLSS 5 without upgrading</h2>
          <p>
            <strong>GeForce NOW Ultimate</strong> is the only official route. The game runs on an NVIDIA-operated
            RTX 5080 server and your PC receives a video stream, so the RTX 30 card does not need to support anything.
            NVIDIA confirms Neural Rendering for Ultimate members in{" "}
            <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">NBA 2K27</Link> and{" "}
            <Link href="/games/hogwarts-legacy-dlss-5" className="text-blue-400 hover:underline">Hogwarts Legacy</Link>.
            You still need to own the game, live in a region NVIDIA serves directly, and have a fast connection.
            NVIDIA asks for 25 Mbps for 1080p60 and 45 Mbps for 4K at 120 FPS, with under 80 ms latency to a data
            center (<a href={GFN_REQS} className="text-blue-400 hover:underline">GeForce NOW requirements</a>).
          </p>
          <p>
            <strong>Community tools.</strong> Several free apps and mods claim to apply a DLSS 5-style effect on RTX 30
            cards; PC Gamer reported one that works on{" "}
            <a href={PCGAMER_DESKTOP_APP} className="text-blue-400 hover:underline">the entire desktop, including RTX 30</a>.
            These are not NVIDIA&apos;s Neural Rendering inside a game&apos;s own integration. They can rely on leaked or
            modified NVIDIA files, trigger anti-cheat bans in online games, and some download mirrors have carried
            malware. Read <Link href="/dlss-5-mods" className="text-blue-400 hover:underline">DLSS 5 mods and their risks</Link> first.
          </p>
        </section>

        <VideoEmbed
          id="58FagrSqC4M"
          title="DLSS 5 | Introducing 3D-Guided Neural Rendering"
          channel="NVIDIA GeForce"
          caption="NVIDIA's own overview of what Neural Rendering changes in lighting and materials, so you can judge whether the effect matters to you before spending money."
        />

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Should you upgrade from RTX 30 for DLSS 5?</h2>
          <p>
            Only four games had DLSS 5 on November 24, 2026: NBA 2K27, Hogwarts Legacy, War Thunder and Where
            Winds Meet. If none of these is a game you play, DLSS 5 alone is a weak reason to buy a
            card. An upgrade makes more sense when you also want what RTX 40 and RTX 50 already offer: Frame
            Generation, Multi Frame Generation and more VRAM for current games.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <caption className="sr-only">Upgrade decision guide for RTX 30 owners</caption>
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th scope="col" className="p-3">If you…</th>
                  <th scope="col" className="p-3">Consider</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border align-top">
                  <td className="p-3">Play a DLSS 5 game and want it locally now</td>
                  <td className="p-3">An RTX 50 card. Every desktop and laptop RTX 50 model is supported.</td>
                </tr>
                <tr className="border-t border-border align-top">
                  <td className="p-3">Only want to see DLSS 5 in one or two games</td>
                  <td className="p-3">A month of GeForce NOW Ultimate before buying hardware.</td>
                </tr>
                <tr className="border-t border-border align-top">
                  <td className="p-3">Mainly want higher frame rates</td>
                  <td className="p-3">Frame Generation (RTX 40 or 50) helps more than DLSS 5, which costs frames.</td>
                </tr>
                <tr className="border-t border-border align-top">
                  <td className="p-3">Are happy with your current performance</td>
                  <td className="p-3">Keep the card and use Super Resolution, Ray Reconstruction and FSR frame generation.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Compare exactly which features you would gain with our GPU comparer, for example{" "}
            <Link href="/dlss-supported-cards?from=rtx-3060&to=rtx-5060-ti#gpu-compare" className="text-blue-400 hover:underline">RTX 3060 → RTX 5060 Ti</Link> or{" "}
            <Link href="/dlss-supported-cards?from=rtx-3080&to=rtx-5070-ti#gpu-compare" className="text-blue-400 hover:underline">RTX 3080 → RTX 5070 Ti</Link>.
            We do not predict frame rates; for measured numbers see the{" "}
            <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">published DLSS 5 tests</Link>.
          </p>
          <UpgradeOptionsCard
            gpu={{ id: "rtx-3060", name: "NVIDIA GeForce RTX 3060", dlss5_support: "unsupported" }}
            placement="rtx-30-series-guide"
          />
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">RTX 20, GTX and laptop owners</h2>
          <p>
            <strong>RTX 20 (2060 to 2080 Ti, including SUPER):</strong> same answer as RTX 30. No DLSS 5, no NVIDIA
            Frame Generation, but Super Resolution, DLAA and Ray Reconstruction work. With 6 GB of VRAM, the RTX 2060
            benefits most from DLSS Performance mode in new games.
          </p>
          <p>
            <strong>GTX cards (GTX 1060, 1070, 1080, 1650, 1660):</strong> no version of DLSS runs on GTX hardware,
            because DLSS needs the Tensor Cores that arrived with RTX. Use FSR or XeSS upscaling in your games, or
            GeForce NOW. A GTX card cannot be upgraded to DLSS by a driver or a download.
          </p>
          <p>
            <strong>Laptops:</strong> an RTX 3050, 3060, 3070 or 3080 Laptop GPU follows its desktop generation. Check
            the GPU name in Device Manager or the NVIDIA App, not the laptop&apos;s marketing name: only RTX 50 Laptop
            GPUs and RTX Spark laptops support DLSS 5.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold mb-1">{item.question}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Related checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/dlss-5-supported-cards", t: "DLSS 5 supported cards", d: "Every GPU grouped as confirmed, planned, unsupported or no DLSS." },
              { href: "/dlss-5-rtx-40-series", t: "DLSS 5 on RTX 40", d: "Planned without a date: what RTX 4060 to 4090 owners can expect." },
              { href: "/dlss-5-ps5", t: "DLSS 5 on PS5, Mac and phones", d: "Every way to play a DLSS 5 game without an RTX 50 PC." },
              { href: "/dlss-5-games", t: "DLSS 5 games", d: "Live, scheduled and announced games." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors">
                <div className="font-semibold mb-1">{l.t}</div>
                <p className="text-sm text-muted-foreground">{l.d}</p>
              </Link>
            ))}
          </div>
        </section>

        <ArticleTrustBlock reviewedAt={REVIEWED} />
      </main>
    </>
  );
}
