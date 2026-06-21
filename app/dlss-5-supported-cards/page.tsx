import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";
import { ALL_GPUS, type DlssSupport, type GPU } from "@/lib/gpu-search";
import { getGpuPageHref, isEnabledGpuSlug } from "@/lib/gpu-page-config";

export const metadata: Metadata = {
  title: "DLSS 5 Supported Cards: Confirmed, Expected, Unknown GPUs [2026]",
  description:
    "See which GPUs are confirmed, expected, unknown, unlikely, or not supported for DLSS 5. Includes RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel status notes.",
  alternates: {
    canonical: "/dlss-5-supported-cards",
    languages: {
      en: "https://www.dlss5.net/dlss-5-supported-cards",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-quais-placas",
    },
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
    note: "These RTX 50 models have the clearest official DLSS 5 path today, with final driver and game documentation still relevant at launch.",
    className: "border-green-500/30 bg-green-500/5 text-green-300",
  },
  expected: {
    title: "Expected, per-model docs pending",
    label: "Expected",
    note: "These lower-tier RTX 50 models are on the RTX 50 generation path, but should still be checked against NVIDIA's final per-model launch documentation.",
    className: "border-lime-500/30 bg-lime-500/5 text-lime-300",
  },
  unknown: {
    title: "Unknown until final launch documentation",
    label: "Unknown",
    note: "RTX 40 cards already support strong current DLSS features, but DLSS 5 Neural Rendering support should not be treated as confirmed until NVIDIA publishes final launch details.",
    className: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
  },
  unlikely: {
    title: "Unlikely for the new DLSS 5 layer",
    label: "Unlikely",
    note: "RTX 20 and RTX 30 cards remain useful for current DLSS features, but they lack the newer frame-generation hardware path used by RTX 40 and RTX 50.",
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
    <section className="mb-10">
      <div className={`rounded-lg border p-5 mb-4 ${copy.className}`}>
        <h2 className="text-2xl font-bold text-foreground mb-2">{copy.title}</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">{copy.note}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
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

export default function Dlss5SupportedCardsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which cards support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The confirmed cards in this guide are RTX 50 models with clear public support. RTX 5060 and RTX 5060 Ti are treated as expected but pending per-model documentation, RTX 40 is unknown, and RTX 20/30 are unlikely for the new DLSS 5 layer.",
        },
      },
      {
        "@type": "Question",
        name: "Does RTX 4070 support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 4070 support for DLSS 5 has not been confirmed. It supports current DLSS features such as Frame Generation, Super Resolution, Ray Reconstruction, and DLAA.",
        },
      },
      {
        "@type": "Question",
        name: "Do GTX cards support DLSS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. GTX cards do not support NVIDIA DLSS because DLSS relies on RTX hardware.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          <p className="text-sm font-semibold text-blue-400 mb-3">Last checked June 22, 2026</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Supported Cards: Confirmed, Expected, Unknown, and Unlikely GPUs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page separates confirmed hardware from expected, unknown, unlikely, and
            unsupported groups. The goal is not to guess every future driver update, but to
            show what is official today and what each GPU generation can already do.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The confirmed group below is made of RTX 50 models. RTX 40 is worth watching,
              but should be treated as unknown until NVIDIA publishes final launch support
              documentation.
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
        <StatusTable status="expected" />
        <StatusTable status="unknown" />
        <StatusTable status="unlikely" />
        <StatusTable status="none" />

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Related pages</h2>
          <div className="grid gap-3 sm:grid-cols-2">
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
                Separate the upcoming visual layer from current DLSS features.
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
            expands or narrows official support before launch.
          </p>
        </section>
        <ArticleTrustBlock />
      </main>
    </>
  );
}
