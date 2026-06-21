import Link from "next/link";
import GPUChecker from "@/components/GPUChecker";
import SupportedGPUsTable from "@/components/SupportedGPUsTable";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import AdSlot from "@/components/AdSlot";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 5 is NVIDIA's next-generation AI rendering technology, announced at GTC on March 16, 2026, launching Fall 2026. Unlike DLSS 4/4.5 which focus on performance, DLSS 5 is about visual fidelity through Real-time Neural Rendering -- AI-powered enhancement of lighting and materials.",
        },
      },
      {
        "@type": "Question",
        name: "Which GPUs will support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The clearest DLSS 5 Neural Rendering path is RTX 50, with RTX 5090, 5080, 5070 Ti, and 5070 treated as confirmed in this tracker and RTX 5060 Ti / 5060 treated as expected pending final per-model documentation. RTX 40 support is unknown, RTX 20/30 support is unlikely, and DLSS 5 launches Fall 2026.",
        },
      },
      {
        "@type": "Question",
        name: "How is DLSS 5 different from DLSS 4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 4 introduced Multi Frame Generation (up to 3 additional AI frames per rendered frame) for performance. DLSS 5 is completely different -- it adds Neural Rendering for visual fidelity, using AI to enhance lighting and materials with photorealistic quality. DLSS 5 runs on top of DLSS 4.5.",
        },
      },
      {
        "@type": "Question",
        name: "Does DLSS 5 work on AMD or Intel GPUs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DLSS is an NVIDIA-exclusive technology. AMD users should use FSR 4 (FidelityFX Super Resolution 4), and Intel users should use XeSS (Xe Super Sampling) as alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "Is DLSS 5 available now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DLSS 5 was announced at GTC on March 16, 2026 and launches Fall 2026. What is available now: DLSS 4/4.5 with Multi Frame Generation for RTX 50, Frame Generation for RTX 40, and Super Resolution for RTX 20/30/40/50.",
        },
      },
      {
        "@type": "Question",
        name: "What is Multi Frame Generation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multi Frame Generation (MFG) is a DLSS 4 feature (not DLSS 5), exclusive to RTX 50 GPUs. It generates up to 3 additional AI frames per rendered frame for 4X output. DLSS 4.5 extended this to Dynamic 6X MFG with 5 additional frames.",
        },
      },
      {
        "@type": "Question",
        name: "What games will support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NVIDIA has announced an initial group of DLSS 5 games including Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem, and The Elder Scrolls IV: Oblivion Remastered. Final per-game settings still need launch documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between DLSS and FSR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS (NVIDIA) uses dedicated Tensor Cores and AI models for upscaling, frame generation, and now neural rendering. FSR (AMD) works on any GPU. For NVIDIA GPU owners, DLSS generally provides better results. Neither AMD nor Intel has announced a neural rendering feature comparable to DLSS 5.",
        },
      },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DLSS 5 GPU Compatibility Checker",
    url: "https://www.dlss5.net",
    description:
      "Check DLSS 5 GPU support with an evidence-based tracker for RTX 50, RTX 40, RTX 30, GTX, AMD, and Intel cards. See confirmed, expected, unknown, and unsupported status.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
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
              DLSS 5 Neural Rendering · Announced GTC 2026 · Coming Fall 2026
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              DLSS 5 Supported Cards &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                GPU Checker
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Check which NVIDIA cards support DLSS 5 Neural Rendering (Fall 2026),
              see current DLSS 4/4.5 performance, and find the best upgrade path.
            </p>

            {/* Tool -- main interactive area */}
            <GPUChecker />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Popular checks:</span>
              <Link
                href="/dlss-5-supported-cards"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Supported cards list
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
                href="/ai-pc/nvidia-rtx-spark"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX Spark AI PCs
              </Link>
              <Link
                href="/dlss-5-release-date"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Release date
              </Link>
              <Link
                href="/dlss-5-neural-rendering"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Neural rendering
              </Link>
              <Link
                href="/dlss-4-5-dynamic-mfg-6x"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 4.5 6X
              </Link>
              <Link
                href="/dlss-4-5-games"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 4.5 games
              </Link>
              <Link
                href="/dlss-4-5-dynamic-mfg-settings"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Dynamic MFG settings
              </Link>
              <Link
                href="/dlss-frame-generation-vs-multi-frame-generation"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Frame Gen vs MFG
              </Link>
              <Link
                href="/dlss-5-unreal-engine"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                Unreal Engine status
              </Link>
              <Link
                href="/dlss-5-vs-dlss-4-5"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 vs 4.5
              </Link>
              <Link
                href="/dlss-5-rtx-40-series"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 40 series
              </Link>
              <Link
                href="/gpu/rtx-5090"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 5090
              </Link>
              <Link
                href="/gpu/rtx-3070"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                RTX 3070
              </Link>
              <Link
                href="/dlss-5-system-requirements"
                className="rounded-full border border-border px-3 py-1 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                DLSS 5 system requirements
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
              announced by Jensen Huang at GTC on March 16, 2026. Unlike DLSS 4 and 4.5, which
              focused on <em>performance</em> through upscaling and frame generation, DLSS 5 is
              about <strong>visual fidelity</strong>. Jensen called it{" "}
              <strong>&quot;the GPT moment for graphics.&quot;</strong>
            </p>
            <p>
              The core feature of DLSS 5 is <strong>Real-time Neural Rendering</strong> --
              AI-powered enhancement of lighting and materials. DLSS 5 analyzes scene semantics
              (characters, hair, fabric, translucent skin, environmental lighting) and generates
              photoreal lighting and material responses in real time. It runs <em>on top of</em>{" "}
              DLSS 4.5, meaning you get upscaling + frame generation underneath, with neural
              rendering enhancing visual quality on top.
            </p>
            <p>
              DLSS 5 is <strong>not yet released</strong> -- it launches in <strong>Fall 2026</strong>.
              NVIDIA has confirmed the RTX 50 path for DLSS 5, while lower-tier RTX 50
              models should still be checked against final per-model launch documentation.
              The GTC demo used two RTX 5090s, but the shipping version is expected to run
              on a single supported GPU.
              NVIDIA has announced an initial group of game titles including Starfield, Hogwarts Legacy,
              Assassin&apos;s Creed Shadows, Phantom Blade Zero, and more. Developers will have
              controls for intensity, color grading, and masking.
            </p>
            <p>
              <strong>What&apos;s available today:</strong> RTX 50 series GPUs already benefit
              from DLSS 4/4.5, which includes Multi Frame Generation (up to 4X with DLSS 4,
              up to 6X with DLSS 4.5), 2nd-generation Transformer Super Resolution, and Ray
              Reconstruction. RTX 40 gets Frame Generation, and RTX 20/30 get Transformer-based
              Super Resolution. Over 250 games support current DLSS versions.
            </p>
          </div>
        </section>

        <AdSlot slot="content-mid" />

        {/* Supported GPUs */}
        <section id="supported-gpus">
          <h2 className="text-3xl font-bold mb-2">DLSS 5 Supported Cards &amp; GPU Compatibility</h2>
          <p className="text-muted-foreground mb-6">
            DLSS 5 Neural Rendering status is tracked as confirmed, expected, unknown,
            unlikely, or unsupported. Current DLSS 4/4.5 features are shown for reference.
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
