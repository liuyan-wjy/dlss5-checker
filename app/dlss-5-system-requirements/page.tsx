import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 System Requirements: What We Know So Far [2026]",
  description:
    "Looking for DLSS 5 system requirements? See the confirmed GPU requirements, what NVIDIA has not confirmed yet, and whether RTX 40, RTX 30, or GTX cards can realistically expect support.",
  alternates: {
    canonical: "/dlss-5-system-requirements",
    languages: {
      en: "https://www.dlss5.net/dlss-5-system-requirements",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-requisitos",
    },
  },
};

export default function Dlss5SystemRequirementsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the DLSS 5 system requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NVIDIA has only confirmed RTX 50 series support for DLSS 5 Neural Rendering. Exact minimum hardware requirements beyond that have not been fully published yet.",
        },
      },
      {
        "@type": "Question",
        name: "Will RTX 40 cards support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NVIDIA has not officially confirmed DLSS 5 Neural Rendering support for RTX 40 GPUs. At the moment they should be treated as unknown until final launch documentation is public.",
        },
      },
      {
        "@type": "Question",
        name: "Can RTX 30 or GTX cards run DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RTX 30 support looks unlikely for DLSS 5 Neural Rendering, and GTX cards do not support DLSS at all because DLSS requires RTX hardware.",
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
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>DLSS 5 system requirements</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          DLSS 5 System Requirements: What We Know So Far
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The short version: confirmed support currently sits in the RTX 50 family,
          while lower-tier SKUs and older generations still need final launch details.
        </p>

        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-2">Requirements are not the same as a card list</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              A requirement page should answer what the PC needs to run the feature. A
              supported-card page should answer which GPU families are confirmed, expected,
              unknown, unlikely, or outside the DLSS path. Right now, the confirmed requirement is the GPU
              family, not a full public spec sheet.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-2">Best page for card-by-card status</h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              If your question is about a specific model or generation, use the compatibility
              list instead of treating this as a full desktop build checklist.
            </p>
            <Link
              href="/dlss-5-supported-cards"
              className="text-sm font-semibold text-blue-400 hover:underline"
            >
              View the DLSS 5 supported cards list
            </Link>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Confirmed requirement today</h2>
          <p>
            NVIDIA has confirmed <strong>RTX 50 family support</strong> for DLSS 5 Neural
            Rendering. In this guide, the safest listed cards are the RTX 5090, RTX 5080,
            RTX 5070 Ti, and RTX 5070. Lower-tier models should still be checked against
            final launch requirements before you buy only for DLSS 5.
          </p>
          <p>
            What NVIDIA has <strong>not</strong> fully published yet is the complete
            minimum spec sheet beyond architecture. There is still no final public matrix
            that tells us exactly how much VRAM, what driver branch, or what per-game
            implementation limits will matter at launch.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to think about each GPU generation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
              <h3 className="font-semibold text-green-400 mb-2">RTX 50</h3>
              <p className="text-sm">
                Confirmed family for DLSS 5. Check individual SKUs if you are buying a
                lower-tier card only for this feature.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">RTX 40</h3>
              <p className="text-sm">
                Unknown until final launch documentation. Good current DLSS 4 cards, but
                not confirmed for DLSS 5 Neural Rendering.
              </p>
            </div>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h3 className="font-semibold text-orange-400 mb-2">RTX 30 / RTX 20</h3>
              <p className="text-sm">
                Likely limited to existing DLSS features such as Super Resolution and Ray
                Reconstruction. Neural Rendering support looks unlikely.
              </p>
            </div>
            <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <h3 className="font-semibold text-red-400 mb-2">GTX / non-RTX</h3>
              <p className="text-sm">
                No DLSS support. GTX cards do not meet the baseline hardware requirement
                for any version of DLSS.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">What users usually need from this page</h2>
          <p>
            Most readers are not looking for a full PC spec sheet yet. They want to know
            one of three things: whether their current GPU qualifies, whether they need
            RTX 50, and whether they should upgrade now or wait for official confirmation.
          </p>
          <p>
            That means the most useful answer is not a fake checklist. It is a clear status
            breakdown by GPU family, plus links to model-specific pages for cards people
            already own.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Recommended next checks</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/gpu/rtx-5090"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 5090 DLSS 5 support</div>
              <p className="text-sm text-muted-foreground">
                Confirmed path for DLSS 5 Neural Rendering.
              </p>
            </Link>
            <Link
              href="/gpu/rtx-3070"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX 3070 DLSS 5 support</div>
              <p className="text-sm text-muted-foreground">
                Useful if you are checking whether RTX 30 can stretch into DLSS 5.
              </p>
            </Link>
            <Link
              href="/dlss-5-rtx-40-series"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Will RTX 40 support DLSS 5?</div>
              <p className="text-sm text-muted-foreground">
                Better page for RTX 4090, 4080, 4070, and 4060 owners.
              </p>
            </Link>
            <Link
              href="/dlss-5-supported-cards"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">All supported cards</div>
              <p className="text-sm text-muted-foreground">
                Full status table grouped by confirmed, expected, unknown, unlikely, and none.
              </p>
            </Link>
            <Link
              href="/dlss-5-games"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 games list</div>
              <p className="text-sm text-muted-foreground">
                Announced titles, release timing, and support caveats.
              </p>
            </Link>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                A claim-by-claim source table for what is confirmed and still unknown.
              </p>
            </Link>
            <Link
              href="/ai-pc/nvidia-rtx-spark"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">RTX Spark AI PCs</div>
              <p className="text-sm text-muted-foreground">
                Separate DLSS requirements from NVIDIA&apos;s new Windows AI PC platform.
              </p>
            </Link>
            <Link
              href="/dlss-5-vs-dlss-4-5"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 vs DLSS 4.5</div>
              <p className="text-sm text-muted-foreground">
                Clarify what belongs to the current DLSS stack versus the announced layer.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
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
            . Driver, game, and launch requirements can still change before public release.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">What are the DLSS 5 system requirements?</h3>
              <p className="text-sm text-foreground/80">
                RTX 50 series is the only officially confirmed hardware family so far. Full
                launch requirements beyond that are still pending from NVIDIA.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Will RTX 40 support DLSS 5?</h3>
              <p className="text-sm text-foreground/80">
                Treat RTX 40 as unknown until NVIDIA publishes final launch documentation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Can GTX cards run DLSS 5?</h3>
              <p className="text-sm text-foreground/80">
                No. GTX cards do not support DLSS because DLSS requires RTX hardware.
              </p>
            </div>
          </div>
        </section>

        <div className="border border-border rounded-lg p-5 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want to check a specific card instead of a whole requirement summary?
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            ← Back to GPU Checker
          </Link>
        </div>
        <ArticleTrustBlock />
      </main>
    </>
  );
}
