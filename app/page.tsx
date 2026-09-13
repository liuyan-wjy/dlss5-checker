import type { Metadata } from "next";
import Link from "next/link";
import GPUChecker from "@/components/GPUChecker";
import SupportedGPUsTable from "@/components/SupportedGPUsTable";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection, { faqs } from "@/components/FAQSection";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  openGraph: {
    title: "DLSS 5 GPU Compatibility Checker",
    description:
      "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards.",
    type: "website",
    locale: "en_US",
    url: "https://www.dlss5.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 GPU Compatibility Checker",
    description: "Check confirmed, planned, unsupported, and no-DLSS status for DLSS 5.",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DLSS 5 GPU Compatibility Checker",
    url: "https://www.dlss5.net",
    description:
      "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, planned, unsupported, and no-DLSS status.",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "GPU compatibility checker",
    operatingSystem: "Any",
    inLanguage: "en",
    isAccessibleForFree: true,
    featureList: [
      "DLSS 5 supported cards status",
      "RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel GPU checks",
      "Current DLSS 4 and DLSS 4.5 feature notes",
      "GPU-specific setup advice and support sources",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-background via-background to-muted/20 px-4">
          <div className="max-w-3xl mx-auto w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              DLSS 5 Neural Rendering · Available now in NBA 2K27 · RTX 50 support
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              DLSS 5 Supported Cards &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                GPU Checker
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Check which NVIDIA cards support DLSS 5 Neural Rendering now,
              see RTX 40 planned status, and find out what you can enable in your games.
            </p>

            {/* Tool -- main interactive area */}
            <GPUChecker />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Popular checks:</span>
              <Link
                href="/dlss-5-supported-cards"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 supported cards list
              </Link>
              <Link
                href="/dlss-5-games"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 games
              </Link>
              <Link
                href="/dlss-5-evidence-tracker"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Evidence tracker
              </Link>
              <Link
                href="/games/nba-2k27-dlss-5"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                NBA 2K27 DLSS 5 guide
              </Link>
              <Link
                href="/ai-pc/nvidia-rtx-spark"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX Spark AI PCs
              </Link>
              <Link
                href="/dlss-5-release-date"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 release date
              </Link>
              <Link
                href="/dlss-5-neural-rendering"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Neural rendering
              </Link>
              <Link
                href="/dlss-5-vs-dlss-4-5"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 vs 4.5
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CONTENT SECTIONS ===== */}
        <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">

        {/* What is DLSS 5 */}
        <section id="what-is-dlss-5">
          <h2 className="text-3xl font-bold mb-4">What is DLSS 5?</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              <strong>DLSS 5</strong> is NVIDIA&apos;s next-generation AI rendering technology,
              first announced by Jensen Huang at GTC on March 16, 2026 and launched in
              NBA 2K27 on September 3, 2026 Pacific time. Unlike Super Resolution or Frame
              Generation, DLSS 5 Neural Rendering is about <strong>visual fidelity</strong>:
              it improves the final rendered image with game-aware AI.
            </p>
            <p>
              The core feature is <strong>3D-guided Neural Rendering</strong>. NVIDIA says it
              uses source color and motion data from the game, then applies a real-time model
              at the final rendering stage. In NBA 2K27 it is separate from Super Resolution
              and Frame Generation: players enable the game&apos;s DLSS Neural Rendering option,
              while the other DLSS performance settings remain their own choices.
            </p>
            <p>
              DLSS 5 is <strong>available now</strong> in NBA 2K27 for RTX 50 desktop and
              laptop GPUs. NVIDIA&apos;s launch article says the shipping path runs on a single
              supported GPU. RTX 40 is in NVIDIA&apos;s follow-up support plan, but there is no
              public date or player setting for RTX 40 yet. Other announced games should stay
              in an announced or pending state until their own patch notes are public.
            </p>
            <p>
              <strong>What else is available today:</strong> RTX 50 GPUs also keep the current
              DLSS stack, including Super Resolution, Multi Frame Generation, Ray Reconstruction,
              DLAA, and Reflex where games support them. RTX 40 keeps Frame Generation and the
              older DLSS feature set; RTX 20 and RTX 30 keep Super Resolution and other supported
              non-MFG features. GeForce NOW is separate from local support because NVIDIA runs
              the server GPU in the cloud.
            </p>
          </div>
        </section>

        <AdSlot slot="content-mid" />

        {/* Supported GPUs */}
        <section id="supported-gpus">
          <h2 className="text-3xl font-bold mb-2">DLSS 5 Supported Cards &amp; GPU Compatibility</h2>
          <p className="text-muted-foreground mb-6">
            DLSS 5 Neural Rendering status is tracked as confirmed, planned, unsupported,
            or no local DLSS. Current DLSS 4/4.5 features are shown for reference.
          </p>
          <SupportedGPUsTable />
        </section>

        {/* DLSS Comparison */}
        <section id="dlss5-vs-dlss4">
          <h2 className="text-3xl font-bold mb-2">DLSS 3 vs 4 vs 4.5 vs 5</h2>
          <p className="text-muted-foreground mb-6">
            How each DLSS generation compares. MFG is a DLSS 4 feature. Neural Rendering is the DLSS 5 feature.
          </p>
          <ComparisonTable />
        </section>

        <AdSlot slot="content-mid" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <FAQSection />
        </section>
        </div>
      </main>

    </>
  );
}
