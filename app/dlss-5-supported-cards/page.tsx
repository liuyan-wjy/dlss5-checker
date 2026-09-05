import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import { getGpuPageHref, isEnabledGpuSlug } from "@/lib/gpu-page-config";

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
    note: "These RTX 50 desktop and laptop GPUs support DLSS 5 Neural Rendering in NBA 2K27 with the compatible game update and driver.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  planned: {
    title: "Planned, not available yet",
    label: "Planned",
    note: "RTX 40 cards already support strong current DLSS features. NVIDIA has indicated a later DLSS 5 plan for RTX 40 after RTX 50 tuning, but there is no public date and no live support yet.",
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

function CardLink({ gpu }: { gpu: GPU }) {
  if (isEnabledGpuSlug("en", gpu.id)) {
    return (
      <Link href={getGpuPageHref("en", gpu.id)} className="hover:text-blue-400 hover:underline">
        {gpu.name}
      </Link>
    );
  }

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
    dateModified: "2026-09-05",
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
          <p className="text-sm font-semibold text-blue-400 mb-3">Last checked September 5, 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Supported Cards: Confirmed, Planned, and Unsupported GPUs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page separates confirmed hardware from planned, unsupported, and no-DLSS
            unsupported groups. The goal is not to guess every future driver update, but to
            show what is official today and what each GPU generation can already do.
          </p>
        </header>

        <section
          id="dlss-5-supported-cards-short-answer"
          className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold mb-3">DLSS 5 supported cards short answer</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Last checked September 5, 2026: RTX 50 desktop and laptop GPUs are confirmed
            for DLSS 5 Neural Rendering in NBA 2K27, including RTX 5090 through RTX 5050.
            RTX 40 is planned but not available yet and has no public date. RTX 20 and
            RTX 30 have no current official DLSS 5 support, while GTX, AMD, and Intel
            cards are outside NVIDIA DLSS.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href="#status-confirmed" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 50 confirmed
            </a>
            <a href="#status-planned" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 40 planned
            </a>
            <a href="#status-unsupported" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              RTX 20/30 unsupported
            </a>
            <a href="#status-none" className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400">
              GTX, AMD, Intel unsupported
            </a>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 5 supported cards are currently safest in the RTX 50 generation. Use
              the status sections below for confirmed, planned, unsupported, and
              unsupported groups.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Why this list is cautious</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NVIDIA&apos;s current DLSS hardware table clearly separates RTX 50-only Multi
              Frame Generation from RTX 40 Frame Generation and broader RTX Super Resolution.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Best next checks</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              If you own a specific model, start with its card page. For buying decisions,
              compare this list with the requirements summary before upgrading.
            </p>
          </div>
        </section>

        <StatusTable status="confirmed" />
        <StatusTable status="planned" />
        <StatusTable status="unsupported" />
        <StatusTable status="none" />

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
              href="/gpu/rtx-4070"
              className="rounded-md border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 4070 support status</div>
              <p className="text-sm text-muted-foreground">
                Current DLSS features and what remains unconfirmed.
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
              href="https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS 5 announcement
            </a>{" "}
            and{" "}
            <a
              href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA DLSS supported hardware
            </a>
            . This is an independent compatibility guide and will need updates if NVIDIA
            expands or narrows official support in a future driver or support note.
          </p>
        </section>
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
