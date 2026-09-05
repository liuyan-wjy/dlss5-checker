import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
  description:
    "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
  alternates: {
    canonical: "/dlss-5-system-requirements",
    languages: {
      en: "https://www.dlss5.net/dlss-5-system-requirements",
      "pt-BR": "https://www.dlss5.net/pt/dlss-5-requisitos",
    },
  },
  openGraph: {
    title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
    description:
      "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-system-requirements",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 System Requirements: RTX 50, Driver, and Game Support",
    description:
      "Looking for DLSS 5 system requirements? See RTX 50 support, the NBA 2K27 616.64 WHQL driver, RTX 40 planned status, and local vs GeForce NOW support.",
  },
};

const faqItems = [
  {
    question: "What are the DLSS 5 system requirements?",
    answer:
      "For local play today, DLSS 5 Neural Rendering requires a supported game, NVIDIA's 616.64 WHQL or newer compatible driver path for NBA 2K27, and a GeForce RTX 50 desktop or laptop GPU.",
  },
  {
    question: "Will RTX 40 support DLSS 5?",
    answer:
      "RTX 40 support is planned, but it is not available yet and has no public release date. RTX 40 cards still support current DLSS features.",
  },
  {
    question: "Can RTX 30, RTX 20, GTX, AMD, or Intel cards run DLSS 5?",
    answer:
      "RTX 30 and RTX 20 cards have no current official DLSS 5 support. GTX, AMD, and Intel GPUs do not run local DLSS because DLSS requires NVIDIA RTX hardware.",
  },
];

export default function Dlss5SystemRequirementsPage() {
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
          DLSS 5 System Requirements: What You Need Now
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The short version: local DLSS 5 is live in NBA 2K27 on GeForce RTX 50 desktop
          and laptop GPUs with NVIDIA&apos;s 616.64 WHQL driver path. RTX 40 is planned,
          not available yet.
        </p>

        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-xl font-bold mb-2">Start with your GPU, game, and driver</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              For local play, you need three things at the same time: a GeForce RTX 50
              desktop or laptop GPU, a game that exposes DLSS 5, and the right NVIDIA
              driver path for that game. NBA 2K27 is the verified example today.
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
            Rendering in NBA 2K27, including desktop and laptop RTX 50 GPUs. For that game,
            NVIDIA points players to the 616.64 WHQL Game Ready Driver and the in-game{" "}
            <strong>Video Settings &gt; DLSS Neural Rendering</strong> option.
          </p>
          <p>
            What still varies is game support. NBA 2K27 is verified; other announced games
            need their own patch notes before they should be treated as live. GeForce NOW
            is also separate from local play because NVIDIA supplies the cloud GPU.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to think about each GPU generation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
              <h3 className="font-semibold text-green-400 mb-2">RTX 50</h3>
              <p className="text-sm">
                Confirmed family for local DLSS 5 in NBA 2K27, including desktop and
                laptop RTX 50 cards.
              </p>
            </div>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">RTX 40</h3>
              <p className="text-sm">
                Planned, but not available yet. Good current DLSS cards, but no public
                RTX 40 DLSS 5 date or player setup path.
              </p>
            </div>
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h3 className="font-semibold text-orange-400 mb-2">RTX 30 / RTX 20</h3>
              <p className="text-sm">
                No current official DLSS 5 support. They keep existing DLSS features such
                as Super Resolution and Ray Reconstruction where games support them.
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
          <h2 className="text-2xl font-bold text-foreground">How to use this answer</h2>
          <p>
            If you already own RTX 50, check the game and driver next. If you own RTX 40,
            keep using your current DLSS features and wait for NVIDIA&apos;s RTX 40 rollout
            details. If you own RTX 20 or RTX 30, treat DLSS 5 as unsupported today.
          </p>
          <p>
            If you are shopping, do not buy from a benchmark chart alone. Check whether the
            exact game you care about lists DLSS Neural Rendering, then confirm your GPU is
            in the supported group.
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
                Full status table grouped by confirmed, planned, unsupported, and no-DLSS.
              </p>
            </Link>
            <Link
              href="/dlss-5-games"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">DLSS 5 games list</div>
              <p className="text-sm text-muted-foreground">
                NBA 2K27 verification, announced titles, and support caveats.
              </p>
            </Link>
            <Link
              href="/dlss-5-evidence-tracker"
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">Evidence tracker</div>
              <p className="text-sm text-muted-foreground">
                A claim-by-claim source table for what is confirmed, planned, and unsupported.
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
              href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/"
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
            ,{" "}
            <a
              href="https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/"
              className="text-blue-400 hover:underline"
            >
              NVIDIA&apos;s NBA 2K27 616.64 WHQL driver note
            </a>
            , and{" "}
            <a
              href="https://www.reddit.com/r/nvidia/comments/1w4bcvp/nvidia_dlss_5_available_september_3rd_dlss/?sort=new"
              className="text-blue-400 hover:underline"
            >
              NVIDIA&apos;s RTX 40 support plan update
            </a>
            . Driver, game, and RTX 40 rollout requirements can still change.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold mb-1">{item.question}</h3>
                <p className="text-sm text-foreground/80">{item.answer}</p>
              </div>
            ))}
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
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
