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
          text: "DLSS 5 (Deep Learning Super Sampling 5) is NVIDIA's latest AI rendering technology. It uses a Transformer AI model to upscale lower-resolution frames to higher resolutions with minimal quality loss. The flagship feature is Multi Frame Generation, which generates up to 3 AI frames per rendered frame, dramatically boosting FPS.",
        },
      },
      {
        "@type": "Question",
        name: "Which GPUs support DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All NVIDIA RTX series GPUs (RTX 20, 30, 40, and 50) support at least basic DLSS 5 Super Resolution. However, Multi Frame Generation requires an RTX 50 series GPU. Frame Generation requires RTX 40 or newer. GTX series GPUs have no DLSS support.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an RTX 50 GPU for DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. RTX 20, 30, and 40 series GPUs support DLSS 5 Super Resolution and DLAA. But the new Multi Frame Generation (which multiplies frame output by up to 4x) is exclusive to RTX 50 series GPUs.",
        },
      },
      {
        "@type": "Question",
        name: "Does DLSS 5 work on AMD or Intel GPUs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. DLSS 5 is an NVIDIA-exclusive technology. AMD users should use FSR 4 (FidelityFX Super Resolution 4), and Intel users should use XeSS (Xe Super Sampling) as alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "How much FPS boost can I expect from DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It varies by GPU and game. RTX 50 series users with Multi Frame Generation can see 150-330% FPS boosts. RTX 40 series users typically see 60-130% gains. RTX 30/20 series users with Super Resolution only see 40-85% improvements.",
        },
      },
      {
        "@type": "Question",
        name: "What is Multi Frame Generation in DLSS 5?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multi Frame Generation (MFG) is DLSS 5's most powerful feature, exclusive to RTX 50 GPUs. For every frame your GPU renders, MFG generates up to 3 additional AI frames, effectively multiplying your frame rate by 4x.",
        },
      },
      {
        "@type": "Question",
        name: "Does DLSS 5 affect image quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 5 uses a Transformer AI model that significantly improves image reconstruction quality compared to DLSS 4's CNN model. Most users find DLSS 5 Quality mode comparable to native resolution.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between DLSS 5 and FSR 4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DLSS 5 (NVIDIA) and FSR 4 (AMD) are competing technologies. DLSS 5 is hardware-accelerated on NVIDIA Tensor Cores, giving it an edge in quality and performance on NVIDIA GPUs. FSR 4 works on any GPU including AMD, Intel, and even NVIDIA.",
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
      "Check if your NVIDIA GPU supports DLSS 5. See FPS boost estimates, compare DLSS 5 vs DLSS 4, and find the best GPU upgrade path.",
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              DLSS 5 · RTX 50 Series Ready
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              DLSS 5 GPU Compatibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Checker
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl mx-auto">
              Enter your GPU model to check DLSS 5 support, see FPS boost estimates, and find
              out if it&apos;s worth upgrading.
            </p>

            {/* Tool — main interactive area */}
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
              <strong>DLSS 5 (Deep Learning Super Sampling 5)</strong> is NVIDIA&apos;s most
              advanced AI rendering technology, introduced alongside the GeForce RTX 50 series.
              Unlike previous versions that used convolutional neural networks (CNN), DLSS 5
              employs a large <strong>Transformer AI model</strong> — the same architecture
              powering modern large language models — to achieve dramatically better image quality
              and performance.
            </p>
            <p>
              The headline feature of DLSS 5 is <strong>Multi Frame Generation (MFG)</strong>,
              exclusive to RTX 50 GPUs. Instead of generating one AI frame per rendered frame
              (like DLSS 4&apos;s Frame Generation), MFG generates up to{" "}
              <strong>3 AI frames per rendered frame</strong>, effectively multiplying your frame
              rate by 4x. A GPU rendering 60 FPS can output 240 FPS with DLSS 5 Multi Frame
              Generation.
            </p>
            <p>
              DLSS 5 is backward compatible — RTX 20, 30, and 40 series GPUs can use DLSS 5
              Super Resolution and DLAA, while RTX 40 series adds Frame Generation support.
              The full DLSS 5 experience with Multi Frame Generation requires an RTX 50 series
              GPU.
            </p>
          </div>
        </section>

        <AdSlot slot="content-mid" />

        {/* Supported GPUs */}
        <section id="supported-gpus">
          <h2 className="text-3xl font-bold mb-2">DLSS 5 Supported GPUs</h2>
          <p className="text-muted-foreground mb-6">
            Complete list of NVIDIA GPUs and their DLSS 5 compatibility level.
          </p>
          <SupportedGPUsTable />
        </section>

        {/* DLSS 5 vs DLSS 4 */}
        <section id="dlss5-vs-dlss4">
          <h2 className="text-3xl font-bold mb-2">DLSS 5 vs DLSS 4</h2>
          <p className="text-muted-foreground mb-6">
            Key differences between DLSS 5 and its predecessor.
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
          <strong className="text-foreground">DLSS Checker</strong> — Independent DLSS 5
          compatibility resource. Not affiliated with NVIDIA.
        </p>
        <p className="text-xs">
          Benchmark data is estimated based on public sources. Actual performance may vary by
          system configuration, game version, and driver updates.
        </p>
        <nav aria-label="Footer navigation" className="flex justify-center gap-6 mt-4 text-xs">
          <a href="#what-is-dlss-5" className="hover:text-foreground transition-colors">
            What is DLSS 5
          </a>
          <a href="#supported-gpus" className="hover:text-foreground transition-colors">
            Supported GPUs
          </a>
          <a href="#dlss5-vs-dlss4" className="hover:text-foreground transition-colors">
            DLSS 5 vs 4
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
      </footer>
    </>
  );
}
