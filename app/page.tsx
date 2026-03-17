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
          text: "NVIDIA has confirmed DLSS 5 Neural Rendering for RTX 50 series GPUs. RTX 40 series support has been hinted at but is not confirmed. RTX 20/30 series support is unlikely. DLSS 5 launches Fall 2026.",
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
          text: "NVIDIA confirmed 16+ titles for DLSS 5 including Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem, and The Elder Scrolls IV: Oblivion Remastered.",
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
    url: "https://dlss5.net",
    description:
      "Check if your NVIDIA GPU is confirmed for DLSS 5 Neural Rendering (Fall 2026). See current DLSS 4/4.5 performance data and find the best GPU upgrade path.",
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
              DLSS 5 GPU Compatibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Checker
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Check if your GPU is confirmed for DLSS 5 Neural Rendering, see current
              DLSS 4/4.5 performance data, and find the best upgrade path.
            </p>

            {/* Tool -- main interactive area */}
            <GPUChecker />
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
              NVIDIA has confirmed RTX 50 series support. The GTC demo used two RTX 5090s (one
              for the game, one for DLSS 5), but the shipping version will run on a single GPU.
              There are 16+ confirmed game titles including Starfield, Hogwarts Legacy,
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
          <h2 className="text-3xl font-bold mb-2">DLSS 5 GPU Compatibility</h2>
          <p className="text-muted-foreground mb-6">
            DLSS 5 Neural Rendering is confirmed for RTX 50 series (Fall 2026). Other architectures are unconfirmed.
            Current DLSS 4/4.5 features shown for reference.
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

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border/50 py-8 px-4 text-center text-muted-foreground text-sm">
        <p className="mb-2">
          <strong className="text-foreground">DLSS Checker</strong> -- Independent DLSS 5
          compatibility resource. Not affiliated with NVIDIA.
        </p>
        <p className="text-xs">
          Performance data reflects current DLSS 4/4.5 benchmarks (estimated). DLSS 5 Neural Rendering
          is not yet released and has no benchmark data. Actual performance may vary by
          system configuration, game version, and driver updates.
        </p>
        <nav aria-label="Footer navigation" className="flex justify-center gap-6 mt-4 text-xs">
          <a href="#what-is-dlss-5" className="hover:text-foreground transition-colors">
            What is DLSS 5
          </a>
          <a href="#supported-gpus" className="hover:text-foreground transition-colors">
            GPU Compatibility
          </a>
          <a href="#dlss5-vs-dlss4" className="hover:text-foreground transition-colors">
            DLSS 3 vs 4 vs 4.5 vs 5
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
      </footer>
    </>
  );
}
