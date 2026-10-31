import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import { OG_IMAGE_EN } from "@/lib/og-image";

const PAGE_URL = "https://www.dlss5.net/dlss-5-supported-cards";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards: RTX 50 Confirmed, RTX 40 Planned [2026]",
  description:
    "See which GPUs are confirmed, planned, unsupported, or outside NVIDIA DLSS for DLSS 5. Includes RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel status notes.",
  alternates: {
    canonical: "/dlss-5-supported-cards",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
    },
  },
  openGraph: {
    images: [OG_IMAGE_EN],
    title: "DLSS 5 Supported Cards: RTX 50 Confirmed, RTX 40 Planned [2026]",
    description:
      "See which GPUs are confirmed, planned, unsupported, or outside NVIDIA DLSS for DLSS 5. Includes RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel status notes.",
    type: "article",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: "DLSS 5 Supported Cards: RTX 50 Confirmed, RTX 40 Planned [2026]",
    description:
      "See which GPUs are confirmed, planned, unsupported, or outside NVIDIA DLSS for DLSS 5. Includes RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel status notes.",
  },
};

const STATUS_COPY: Record<
  DlssSupport,
  {
    title: string;
    label: string;
    note: string;
    className: string;
  }
> = {
  confirmed: {
    title: "Confirmed cards",
    label: "Confirmed",
    note: "RTX 50 desktop and laptop GPUs and RTX Spark laptops support DLSS 5 Neural Rendering in NBA 2K27 with the compatible game update and driver. Hogwarts Legacy is scheduled for November 5, 2026.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  planned: {
    title: "Planned, not available yet",
    label: "Planned",
    note: "RTX 40 supports Super Resolution, Ray Reconstruction, and Frame Generation today. NVIDIA plans DLSS 5 support after RTX 50 optimization; there is no public date or local setup available yet.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unsupported: {
    title: "No current official DLSS 5 support",
    label: "Unsupported",
    note: "RTX 20 and RTX 30 cards remain useful for current DLSS features, but the sources checked here do not list them for current DLSS 5 Neural Rendering support.",
    className: "border-orange-500/30 bg-orange-500/5 text-orange-300",
  },
  none: {
    title: "No DLSS support",
    label: "No DLSS",
    note: "GTX, AMD, and Intel cards do not run NVIDIA DLSS. AMD users should look at FSR, and Intel users should look at XeSS.",
    className: "border-red-500/30 bg-red-500/5 text-red-300",
  },
};

function getCardsByStatus(status: DlssSupport): GPU[] {
  return ALL_GPUS.filter((gpu) => gpu.dlss5_support === status);
}

function getFeatureSummary(gpu: GPU): string {
  if (gpu.current_dlss_features.includes("dynamic_mfg_6x")) {
    return "DLSS 4.5 Dynamic MFG, Multi Frame Generation, Super Resolution";
  }

  if (gpu.current_dlss_features.includes("frame_generation")) {
    return "Frame Generation, Super Resolution, Ray Reconstruction";
  }

  if (gpu.current_dlss_features.includes("ray_reconstruction")) {
    return "Super Resolution, Ray Reconstruction, DLAA";
  }

  if (gpu.brand === "AMD") {
    return "Use AMD FSR instead";
  }

  if (gpu.brand === "Intel") {
    return "Use Intel XeSS instead";
  }

  return "No DLSS feature support";
}

// Ordered by Search Console impressions for "<model> dlss 5" queries (October 2026).
const popularCards = [
  {
    id: "rtx-3060",
    name: "RTX 3060 and RTX 3060 Ti",
    answer: "No DLSS 5 support",
    answerClass: "text-orange-400",
    detail:
      "RTX 30 cards have no official DLSS 5 Neural Rendering support, and NVIDIA has not announced plans to add it. A Ti suffix or 12GB of VRAM does not change that. They keep DLSS 4.5 Super Resolution, DLAA, and Ray Reconstruction in supported games, but not NVIDIA Frame Generation.",
  },
  {
    id: "rtx-4060",
    name: "RTX 4060 and RTX 4060 Ti",
    answer: "Planned, no date yet",
    answerClass: "text-yellow-400",
    detail:
      "RTX 40 support is planned, but NVIDIA's October 2026 update still left RTX 40 out. When it arrives, the 8GB models will be the tightest fit, since Neural Rendering adds VRAM use at higher resolutions. Today they support Super Resolution, Ray Reconstruction, and 2X Frame Generation.",
  },
  {
    id: "rtx-4070",
    name: "RTX 4070, 4070 SUPER, and 4070 Ti",
    answer: "Planned, no date yet",
    answerClass: "text-yellow-400",
    detail:
      "Same RTX 40 status as every other 40-series card: Ti and SUPER variants do not get DLSS 5 earlier. If DLSS 5 is the only reason to upgrade, waiting for NVIDIA's RTX 40 date is reasonable; the card already runs every other current DLSS feature except Multi Frame Generation.",
  },
  {
    id: "rtx-3070",
    name: "RTX 3070 and RTX 3080",
    answer: "No DLSS 5 support",
    answerClass: "text-orange-400",
    detail:
      "Like the rest of RTX 30, no official DLSS 5. These cards still benefit from the DLSS 4.5 Super Resolution model; in ray-traced games, Ray Reconstruction is the newest DLSS feature they can use.",
  },
  {
    id: "rtx-5060",
    name: "RTX 5060, 5060 Ti, and 5050",
    answer: "Supported now",
    answerClass: "text-green-400",
    detail:
      "Every RTX 50 card is supported, including the entry models. The catch is speed: independent tests showed Neural Rendering roughly halving frame rates on the launch model, so on these cards start at 1080p with Super Resolution and check the 8GB vs 16GB version of a 5060 Ti before comparing results.",
  },
  {
    id: "rtx-5070",
    name: "RTX 5070 desktop and laptop",
    answer: "Supported now",
    answerClass: "text-green-400",
    detail:
      "Both are supported. In GameGPU's NBA 2K27 test the desktop RTX 5070 was the lowest card averaging above 60 FPS with Neural Rendering and maximum ray tracing, without frame generation. The laptop version is a different chip, so compare laptop results, not desktop ones.",
  },
  {
    id: "rtx-4090",
    name: "RTX 4090 and RTX 4080",
    answer: "Planned, no date yet",
    answerClass: "text-yellow-400",
    detail:
      "The fastest RTX 40 cards are in the same planned group as the rest of the series. Raw performance is not the blocker; NVIDIA simply has not released the RTX 40 version yet.",
  },
];

function CardLink({ gpu }: { gpu: GPU }) {
  return <span>{gpu.name}</span>;
}

function StatusTable({ status }: { status: DlssSupport }) {
  const copy = STATUS_COPY[status];
  const cards = getCardsByStatus(status);

  return (
    <section id={`status-${status}`} className="mb-10 scroll-mt-24">
      <div className={`rounded-lg border p-5 mb-4 ${copy.className}`}>
        <h2 className="text-2xl font-bold text-foreground mb-2">{copy.title}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">{copy.note}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <caption className="sr-only">{copy.title} table</caption>
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-semibold">Card</th>
              <th className="px-4 py-3 text-left font-semibold">Series</th>
              <th className="px-4 py-3 text-left font-semibold">VRAM</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Current useful features</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((gpu, index) => (
              <tr
                key={gpu.id}
                className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
              >
                <td className="px-4 py-3 font-medium">
                  <CardLink gpu={gpu} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.series}</td>
                <td className="px-4 py-3 text-muted-foreground">{gpu.vram}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-1 text-xs ${copy.className}`}>
                    {copy.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{getFeatureSummary(gpu)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Which cards support DLSS 5?",
    answer:
      "The confirmed cards in this guide are RTX 50 desktop and laptop models. RTX 40 support is planned but not live and has no public date. RTX 20 and RTX 30 have no current official DLSS 5 Neural Rendering support.",
  },
  {
    question: "Does RTX 4070 support DLSS 5?",
    answer:
      "RTX 4070 is in the RTX 40 group: planned for later, not available today, and still without a public date. It supports current DLSS features such as Frame Generation, Super Resolution, Ray Reconstruction, and DLAA.",
  },
  {
    question: "Do GTX cards support DLSS?",
    answer:
      "No. GTX cards do not support NVIDIA DLSS because DLSS relies on RTX hardware.",
  },
];

export default function Dlss5SupportedCardsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "DLSS 5 Checker",
        item: "https://www.dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DLSS 5 Supported Cards",
        item: PAGE_URL,
      },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DLSS 5 Supported Cards",
    url: PAGE_URL,
    inLanguage: "en",
    dateModified: "2026-10-18",
    isPartOf: {
      "@type": "WebSite",
      name: "DLSS 5 Checker",
      url: "https://www.dlss5.net",
    },
    about: [
      "DLSS 5 supported cards",
      "RTX 50 DLSS 5 support",
      "RTX 40 DLSS 5 status",
      "GPU compatibility",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>Supported cards</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">Last checked October 18, 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Supported Cards: Confirmed, Planned, and Unsupported GPUs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RTX 50 desktop and laptop GPUs support DLSS 5 Neural Rendering in NBA 2K27.
            RTX 40 support is planned without a release date. Compare the features your
            card can use now, then check the exact game and driver before enabling them.
          </p>
        </header>

        <section
          id="dlss-5-supported-cards-short-answer"
          className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold mb-3">DLSS 5 supported cards short answer</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Last checked October 18, 2026: RTX 50 desktop and laptop GPUs are confirmed
            for DLSS 5 Neural Rendering in NBA 2K27, including RTX 5090 through RTX 5050,
            and RTX Spark laptops joined with the faster October model. RTX 40 is planned
            but not available yet and still has no public date. RTX 20 and
            RTX 30 have no current official DLSS 5 support, while GTX, AMD, and Intel
            cards are outside NVIDIA DLSS.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href="#status-confirmed" className="rounded-full border border-border px-3 py-3 hover:border-blue-400 hover:text-blue-400">
              RTX 50 confirmed
            </a>
            <a href="#status-planned" className="rounded-full border border-border px-3 py-3 hover:border-blue-400 hover:text-blue-400">
              RTX 40 planned
            </a>
            <a href="#status-unsupported" className="rounded-full border border-border px-3 py-3 hover:border-blue-400 hover:text-blue-400">
              RTX 20/30 unsupported
            </a>
            <a href="#status-none" className="rounded-full border border-border px-3 py-3 hover:border-blue-400 hover:text-blue-400">
              GTX, AMD, Intel unsupported
            </a>
          </div>
        </section>

        <section className="mb-10" id="feature-matrix">
          <h2 className="text-2xl font-bold mb-4">Which DLSS features does each GPU support?</h2>
          <p className="mb-4 text-foreground/80 leading-relaxed">
            Neural Rendering (NR) changes lighting and materials. It is separate from
            Super Resolution (SR), Ray Reconstruction (RR), Frame Generation (FG), and
            Multi Frame Generation (MFG). Each feature also needs game support.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border" tabIndex={0} role="region" aria-label="DLSS feature compatibility table">
            <table className="w-full min-w-[640px] text-sm">
              <caption className="sr-only">Local NVIDIA DLSS feature eligibility by GPU generation</caption>
              <thead className="bg-muted/40 text-left">
                <tr>{["GPU", "SR / DLAA", "RR", "FG", "MFG / Dynamic / 6X", "DLSS 5 NR"].map((label) => <th key={label} scope="col" className="p-3">{label}</th>)}</tr>
              </thead>
              <tbody>
                {[
                  ["RTX 50", "Yes", "Yes", "Yes", "Yes", "Live in NBA 2K27"],
                  ["RTX 40", "Yes", "Yes", "Yes", "No", "Planned; no date"],
                  ["RTX 30 / RTX 20", "Yes", "Yes", "No", "No", "No official support"],
                  ["GTX / AMD / Intel", "No", "No", "No", "No", "No local support"],
                ].map(([gpu, ...features]) => (
                  <tr key={gpu} className="border-t border-border align-top">
                    <th scope="row" className="p-3 text-left font-semibold">{gpu}</th>
                    {features.map((feature, index) => <td key={index} className="p-3 text-foreground/80">{feature}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Scroll horizontally for all features. For model presets and older RTX cards,
            see the <Link href="/dlss-4-5-supported-cards" className="text-blue-400 hover:underline">DLSS 4.5 hardware and preset guide</Link>.
          </p>
        </section>

        <section id="popular-cards" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-2">Quick answers for the most-searched cards</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            These are the models people search for most with &quot;DLSS 5&quot;. For any other card, use the{" "}
            <Link href="/" className="text-blue-400 hover:underline">GPU checker</Link>.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {popularCards.map((card) => (
              <div key={card.id} id={card.id} className="scroll-mt-24 rounded-lg border border-border p-5">
                <h3 className="text-lg font-bold mb-1">{card.name}</h3>
                <p className={`mb-2 text-sm font-semibold ${card.answerClass}`}>{card.answer}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {card.detail}
                  {/^rtx-[34]/.test(card.id) && <> Read about <Link href="/dlss-5-mods" className="text-blue-400 hover:underline">unofficial mods and their risks</Link>.</>}
                </p>
              </div>
            ))}
          </div>
        </section>
        <p className="mb-10 text-foreground/80 leading-relaxed">
          Ready to play? Follow the <Link href="/dlss-5-download" className="text-blue-400 hover:underline">official DLSS 5 download and setup steps</Link>.
          On Radeon hardware, see <Link href="/dlss-5-amd" className="text-blue-400 hover:underline">AMD local support and GeForce NOW options</Link>.
        </p>

        <StatusTable status="confirmed" />
        <StatusTable status="planned" />
        <StatusTable status="unsupported" />
        <StatusTable status="none" />

        <section id="status-history" className="mb-10 space-y-4 text-foreground/80 leading-relaxed scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground">How these status labels changed over time</h2>
          <p>
            The labels on this page come from a public data file, and every change to it is
            recorded in the site&apos;s{" "}
            <a href="https://github.com/liuyan-wjy/dlss5-checker/commits/main/data/gpu-data.json" className="text-blue-400 hover:underline">
              GitHub history
            </a>
            . Seeing how the answer moved is useful: it shows which claims were guesses
            before launch and which are now backed by NVIDIA documentation.
          </p>
          <ol className="space-y-3 text-sm">
            <li className="rounded-lg border border-border p-4">
              <strong>March 17, 2026, after GTC.</strong> First labels. Higher-end RTX 50
              cards were marked confirmed from NVIDIA&apos;s announcement, RTX 40 and RTX 30
              were marked possible or unlikely, and GTX had no DLSS. The same day we moved
              the RTX 5060 and 5060 Ti down to unlikely after rereading the GTC material. The
              September launch article later showed that was too cautious.
            </li>
            <li className="rounded-lg border border-border p-4">
              <strong>June 22, 2026.</strong> We dropped guess-style labels such as
              &quot;possible&quot; and &quot;unlikely&quot; in favour of &quot;expected&quot; and
              &quot;unknown&quot;, because NVIDIA had not published a hardware list and the
              earlier wording read like predictions.
            </li>
            <li className="rounded-lg border border-border p-4">
              <strong>September 5, 2026, after the NBA 2K27 launch.</strong> NVIDIA&apos;s launch
              article named every RTX 50 desktop and laptop GPU, so all of them became
              confirmed. RTX 40 became planned, based on NVIDIA&apos;s FAQ, and RTX 20 and RTX 30
              became unsupported for DLSS 5 while keeping their other DLSS features.
            </li>
            <li className="rounded-lg border border-border p-4">
              <strong>October 18, 2026.</strong> RTX Spark laptops were added as confirmed
              after NVIDIA&apos;s October model update named them. RTX 40 stayed planned because
              the same update did not include it.
            </li>
          </ol>
          <p className="text-sm text-muted-foreground">
            What would move RTX 40 to confirmed: an NVIDIA driver note, game patch, or
            support table that names RTX 40 GPUs for Neural Rendering. A forum post, a
            leaked menu, or a mod is not enough.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Related pages</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/dlss-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">All current DLSS supported cards</div>
              <p className="text-sm text-muted-foreground">
                Compare today&apos;s Super Resolution, Ray Reconstruction, Frame Generation, and MFG support.
              </p>
            </Link>
            <Link
              href="/dlss-4-5-supported-cards"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 4.5 supported cards</div>
              <p className="text-sm text-muted-foreground">
                Check which parts of DLSS 4.5 work on each GeForce RTX generation.
              </p>
            </Link>
            <Link
              href="/dlss-5-rtx-40-series"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Will DLSS 5 be on RTX 40?</div>
              <p className="text-sm text-muted-foreground">
                A closer look at RTX 4090, 4080, 4070, and 4060 status.
              </p>
            </Link>
            <Link
              href="/dlss-5-system-requirements"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">System requirements</div>
              <p className="text-sm text-muted-foreground">
                The difference between a full PC spec and a GPU support list.
              </p>
            </Link>
            <Link
              href="/dlss-5-games"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 games list</div>
              <p className="text-sm text-muted-foreground">
                See announced titles and what game support actually means.
              </p>
            </Link>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                Check which compatibility claims are confirmed, announced, or still open.
              </p>
            </Link>
            <Link
              href="/dlss-5-vs-dlss-4-5"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 vs DLSS 4.5</div>
              <p className="text-sm text-muted-foreground">
                Separate Neural Rendering from current DLSS features.
              </p>
            </Link>
            <Link
              href="/pt/dlss-5-quais-placas"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Portuguese card list</div>
              <p className="text-sm text-muted-foreground">
                Lista em português para consultas do Brasil e Portugal.
              </p>
            </Link>
          </div>
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

        <section className="text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Sources:{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 launch and hardware support
            </a>{" "}
            and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS supported hardware
            </a>
            ; the <a href="https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/" className="text-blue-400 hover:underline">September 3 NVIDIA FAQ</a> documents the RTX 40 plan.
            These are compatibility statements, not measured performance results.
          </p>
        </section>
        <ArticleTrustBlock reviewedAt="2026-10-18" />
      </main>
    </>
  );
}
