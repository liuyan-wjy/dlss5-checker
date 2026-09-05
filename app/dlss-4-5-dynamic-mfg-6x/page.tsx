import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 4.5 Dynamic MFG 6X: What Is Available Now for RTX",
  description:
    "DLSS 4.5 Dynamic Multi Frame Generation and 6X mode are live for RTX 50 owners. See requirements, driver notes, differences from DLSS 5, and game caveats.",
  alternates: {
    canonical: "/dlss-4-5-dynamic-mfg-6x",
  },
  openGraph: {
    title: "DLSS 4.5 Dynamic MFG 6X: What Is Available Now for RTX",
    description:
      "DLSS 4.5 Dynamic Multi Frame Generation and 6X mode are live for RTX 50 owners. See requirements, driver notes, differences from DLSS 5, and game caveats.",
    type: "article",
    url: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-6x",
  },
  twitter: {
    card: "summary",
    title: "DLSS 4.5 Dynamic MFG 6X: What Is Available Now for RTX",
    description:
      "DLSS 4.5 Dynamic Multi Frame Generation and 6X mode are live for RTX 50 owners. See requirements, driver notes, differences from DLSS 5, and game caveats.",
  },
};

const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const NVIDIA_DLSS_DEVELOPER = "https://developer.nvidia.com/rtx/dlss";
const NVIDIA_DLSS5_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/death-stranding-2-crimson-desert-dlss-4-multi-frame-gen/";

const featureRows = [
  {
    feature: "Dynamic Multi Frame Generation",
    status: "Available now through the NVIDIA app",
    note:
      "Automatically changes the frame-generation multiplier to target your display refresh rate or a custom frame-rate target.",
  },
  {
    feature: "6X Multi Frame Generation",
    status: "Available on GeForce RTX 50 series GPUs",
    note:
      "Generates five additional frames for every rendered frame in compatible titles.",
  },
  {
    feature: "Enhanced Frame Generation model",
    status: "Available for selected RTX 40 and RTX 50 use cases",
    note:
      "Uses extra UI buffers in selected game engines to improve clarity for interface elements.",
  },
  {
    feature: "Second-generation Super Resolution model",
    status: "Available across GeForce RTX GPUs",
    note:
      "Improves stability, anti-aliasing, lighting detail, and motion clarity in the current DLSS stack.",
  },
];

const faqItems = [
  {
    question: "Is DLSS 4.5 Dynamic MFG the same as DLSS 5?",
    answer:
      "No. DLSS 4.5 Dynamic Multi Frame Generation is a live performance feature in the current DLSS stack. DLSS 5 Neural Rendering is a separate visual-fidelity feature, first documented in NBA 2K27 on RTX 50 GPUs.",
  },
  {
    question: "What GPU do I need for 6X Multi Frame Generation?",
    answer:
      "NVIDIA describes the 6X mode as a GeForce RTX 50 series feature. You also need the NVIDIA app update, a compatible game, and a recent driver.",
  },
  {
    question: "Why should I separate DLSS 4.5 from DLSS 5?",
    answer:
      "Players often mix frame-generation features with Neural Rendering. Separating them prevents a 6X or Dynamic MFG option from being mistaken for DLSS 5 support.",
  },
];

export default function Dlss45DynamicMfg6xPage() {
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
        name: "DLSS 4.5 Dynamic MFG 6X",
        item: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-6x",
      },
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

      <main className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <span>DLSS 4.5 Dynamic MFG 6X</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Current feature status checked September 5, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 4.5 Dynamic MFG 6X: What Is Available Now
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DLSS 4.5 Dynamic Multi Frame Generation, 6X mode, and the updated model stack
            are frame-performance features. DLSS 5 Neural Rendering is separate, so a game
            can support one without automatically supporting the other.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Fast answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Dynamic MFG and 6X mode are available now through the NVIDIA app for
              compatible RTX 50 setups and games.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Driver note</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NVIDIA lists 595.97 WHQL for the March 31 release. Dynamic MFG with V-Sync
              or frame limiters needs the newer NVIDIA App path, 616.64 WHQL or later, and
              Streamline 2.14 or later.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Do not mix feature names</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Dynamic MFG changes generated-frame behavior. DLSS 5 Neural Rendering changes
              the final rendered image. Keep those decisions separate when tuning a game.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Feature status table</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">Current status</th>
                  <th className="p-3 font-semibold">What to know</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.feature} className="border-t border-border align-top">
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3">{row.status}</td>
                    <td className="p-3 text-foreground/80 leading-relaxed">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            How Dynamic MFG differs from a fixed multiplier
          </h2>
          <p>
            Fixed frame generation uses the multiplier you select. Dynamic mode can shift
            between multipliers based on the gap between your GPU output and your target
            refresh rate. That is why NVIDIA compares it to an automatic transmission: it
            can add more generated frames during heavy scenes and less work when the GPU
            is already close to the target.
          </p>
          <p>
            The practical use case is high-refresh gaming. If your display is 120Hz,
            144Hz, 240Hz, or higher, the setting tries to use only the amount of frame
            generation needed to reach the target while preserving clarity and latency.
            NVIDIA&apos;s newer guidance now supports Dynamic MFG with V-Sync and frame rate
            limiters when the NVIDIA App, driver, game integration, and Streamline 2.14+
            path are all current. If the app tooltip still says Dynamic is not compatible
            with limiters or V-Sync, treat that setup as missing a required component.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="text-xl font-bold mb-3">Why this matters when you tune a game</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            DLSS 4.5 is the baseline users can test today. It tells us how NVIDIA is
            improving frame pacing, model quality, and app-level overrides before the
            DLSS 5 support. It does not prove which GPUs or games expose Neural Rendering,
            so hardware and game questions should still be checked separately.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-4-5-dynamic-mfg-settings"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Dynamic MFG settings</div>
            <p className="text-sm text-muted-foreground">
              See how Dynamic, Fixed, Max refresh rate, and Custom targets work in the app.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-games"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Current DLSS 4.5 games</div>
            <p className="text-sm text-muted-foreground">
              Track game-level support signals and verification caveats.
            </p>
          </Link>
          <Link
            href="/dlss-5-release-date"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">DLSS 5 release date</div>
            <p className="text-sm text-muted-foreground">
              See the current launch status and what still needs proof.
            </p>
          </Link>
          <Link
            href="/dlss-5-neural-rendering"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Neural rendering explainer</div>
            <p className="text-sm text-muted-foreground">
              Understand the visual-fidelity feature that is separate from frame generation.
            </p>
          </Link>
          <Link
            href="/dlss-5-supported-cards"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Supported cards</div>
            <p className="text-sm text-muted-foreground">
              Check the GPU status instead of assuming all RTX cards qualify.
            </p>
          </Link>
          <Link
            href="/dlss-5-evidence-tracker"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Evidence tracker</div>
            <p className="text-sm text-muted-foreground">
              See what is confirmed, inferred, and still open.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources</h2>
          <p className="mb-3">
            NVIDIA&apos;s{" "}
            <a href="https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/" className="text-blue-400 hover:underline">
              September 3, 2026 driver update
            </a>{" "}
            documents NBA 2K27 support and the newer Dynamic MFG requirements for V-Sync and frame limiters.
          </p>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA DLSS 4.5 Dynamic MFG release notes
            </a>
            ,{" "}
            <a href={NVIDIA_DLSS_DEVELOPER} className="text-blue-400 hover:underline">
              NVIDIA Developer DLSS page
            </a>
            , and{" "}
            <a href={NVIDIA_DLSS5_GAMES} className="text-blue-400 hover:underline">
              NVIDIA DLSS 5 GTC games article
            </a>
            . Current app and driver behavior can change with later updates.
          </p>
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
        <ArticleTrustBlock reviewedAt="2026-09-05" />
      </main>
    </>
  );
}
