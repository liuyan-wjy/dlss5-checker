import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";
import { ALL_GPUS, getFeatureLabel } from "@/lib/gpu-search";
import type { GPU } from "@/lib/gpu-search";

// Only generate these two pages for now
const ENABLED_SLUGS = ["rtx-4070", "rtx-4080"];

export function generateStaticParams() {
  return ENABLED_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gpu = ALL_GPUS.find((g) => g.id === slug);
  if (!gpu) return {};

  const statusText =
    gpu.dlss5_support === "confirmed"
      ? "Confirmed for DLSS 5"
      : gpu.dlss5_support === "possible"
      ? "Possible (Unconfirmed)"
      : gpu.dlss5_support === "unlikely"
      ? "Unlikely to Support DLSS 5"
      : "Not Supported";

  return {
    title: `${gpu.name} & DLSS 5: ${statusText} [2026]`,
    description: `Does the ${gpu.name} support DLSS 5 Neural Rendering? Status: ${statusText}. See current DLSS 4/4.5 features available today and what's coming Fall 2026.`,
    alternates: { canonical: `/gpu/${slug}` },
  };
}

const STATUS_CONFIG = {
  confirmed: {
    icon: CheckCircle2,
    iconColor: "text-green-500",
    badgeClass: "bg-green-500/10 border-green-500/30 text-green-400",
    cardBorder: "border-green-500/30",
    cardBg: "bg-green-500/5",
    label: "Confirmed",
    heading: "DLSS 5 Confirmed (Coming Fall 2026)",
  },
  possible: {
    icon: Clock,
    iconColor: "text-yellow-500",
    badgeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
    label: "Possible — Unconfirmed",
    heading: "DLSS 5 Support: Possible but Unconfirmed",
  },
  unlikely: {
    icon: AlertCircle,
    iconColor: "text-orange-500",
    badgeClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    cardBorder: "border-orange-500/30",
    cardBg: "bg-orange-500/5",
    label: "Unlikely",
    heading: "DLSS 5 Support Unlikely",
  },
  none: {
    icon: XCircle,
    iconColor: "text-red-500",
    badgeClass: "bg-red-500/10 border-red-500/30 text-red-400",
    cardBorder: "border-red-500/30",
    cardBg: "bg-red-500/5",
    label: "Not Supported",
    heading: "DLSS Not Supported",
  },
};

function getRelatedGPUs(gpu: GPU): GPU[] {
  return ALL_GPUS.filter(
    (g) =>
      g.id !== gpu.id &&
      g.series === gpu.series &&
      ENABLED_SLUGS.includes(g.id)
  ).slice(0, 3);
}

export default async function GPUPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!ENABLED_SLUGS.includes(slug)) notFound();

  const gpu = ALL_GPUS.find((g) => g.id === slug);
  if (!gpu) notFound();

  const cfg = STATUS_CONFIG[gpu.dlss5_support];
  const Icon = cfg.icon;
  const relatedGPUs = getRelatedGPUs(gpu);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does the ${gpu.name} support DLSS 5?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: gpu.summary,
        },
      },
      {
        "@type": "Question",
        name: `What DLSS features does the ${gpu.name} support right now?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            gpu.current_dlss_features.length > 0
              ? `The ${gpu.name} currently supports: ${gpu.current_dlss_features.map(getFeatureLabel).join(", ")}.`
              : `The ${gpu.name} does not support DLSS features.`,
        },
      },
      {
        "@type": "Question",
        name: "When does DLSS 5 launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 5 Neural Rendering was announced at GTC on March 16, 2026, and is scheduled to launch Fall 2026. NVIDIA has confirmed RTX 50 series support.",
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

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </a>
          <span className="mx-2">/</span>
          <span>{gpu.name}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Does the {gpu.name} Support DLSS 5?
        </h1>
        <p className="text-muted-foreground mb-8">
          {gpu.vram} VRAM · {gpu.series} · Updated March 2026
        </p>

        {/* Status Card */}
        <div
          className={`rounded-lg border ${cfg.cardBorder} ${cfg.cardBg} p-6 mb-8`}
        >
          <div className="flex items-start gap-4 mb-4">
            <Icon className={`w-8 h-8 shrink-0 ${cfg.iconColor}`} />
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-bold">{cfg.heading}</h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.badgeClass}`}
                >
                  {cfg.label}
                </span>
              </div>
              <p className="text-foreground/80 mt-2 leading-relaxed">
                {gpu.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Current DLSS Features */}
        {gpu.current_dlss_features.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Current DLSS Features on {gpu.name}
            </h2>
            <div className="space-y-3">
              {gpu.current_dlss_features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 p-3 rounded-md bg-muted/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{getFeatureLabel(feat)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DLSS 5 explanation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">What is DLSS 5?</h2>
          <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
            <p>
              <strong className="text-foreground">DLSS 5</strong> introduces{" "}
              <strong className="text-foreground">Neural Rendering</strong> —
              AI-powered enhancement of lighting and materials in real time.
              Unlike DLSS 4 which focused on performance (frame generation),
              DLSS 5 is about visual fidelity: AI replaces traditional rasterized
              lighting with photorealistic results.
            </p>
            <p>
              DLSS 5 was announced at GTC on March 16, 2026 and launches{" "}
              <strong className="text-foreground">Fall 2026</strong>. NVIDIA has
              confirmed RTX 50 series support. RTX 40 series status remains{" "}
              <strong className="text-foreground">unconfirmed</strong> — NVIDIA
              has not published minimum GPU requirements yet.
            </p>
            <p>
              16+ games have been confirmed for DLSS 5 including Starfield,
              Hogwarts Legacy, Assassin&apos;s Creed Shadows, and Phantom Blade Zero.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">
                Does the {gpu.name} support DLSS 5?
              </h3>
              <p className="text-sm text-foreground/80">{gpu.summary}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Should I upgrade from {gpu.name} to RTX 50 for DLSS 5?
              </h3>
              <p className="text-sm text-foreground/80">
                If DLSS 5 Neural Rendering is important to you, RTX 50 series
                (5080, 5090, 5070) are the only confirmed options. However,
                DLSS 5 doesn&apos;t launch until Fall 2026 and RTX 40 series support
                is not ruled out. It&apos;s worth waiting for official specs before
                upgrading.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                What can the {gpu.name} do with DLSS today?
              </h3>
              <p className="text-sm text-foreground/80">
                {gpu.current_dlss_features.length > 0
                  ? `The ${gpu.name} supports ${gpu.current_dlss_features.length} DLSS features today: ${gpu.current_dlss_features.map(getFeatureLabel).join("; ")}.`
                  : `The ${gpu.name} does not support DLSS features.`}
              </p>
            </div>
          </div>
        </section>

        {/* Related GPUs */}
        {relatedGPUs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Related GPUs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedGPUs.map((related) => {
                const relCfg = STATUS_CONFIG[related.dlss5_support];
                return (
                  <a
                    key={related.id}
                    href={`/gpu/${related.id}`}
                    className="flex items-center justify-between p-3 rounded-md border border-border hover:border-foreground/30 transition-colors"
                  >
                    <span className="text-sm font-medium">{related.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${relCfg.badgeClass}`}
                    >
                      {relCfg.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="border border-border rounded-lg p-5 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Check any other GPU&apos;s DLSS 5 compatibility
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            ← Back to GPU Checker
          </a>
        </div>
      </main>
    </>
  );
}
