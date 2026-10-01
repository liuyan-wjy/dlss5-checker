import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Unreal Engine Status: What Developers Know Now",
  description:
    "See DLSS 5 Unreal Engine status, current DLSS 4.5 UE plugin support, Streamline details, and what remains separate from the NBA 2K27 player launch.",
  alternates: {
    canonical: "/dlss-5-unreal-engine",
  },
  openGraph: {
    title: "DLSS 5 Unreal Engine Status: What Developers Know Now",
    description:
      "See DLSS 5 Unreal Engine status, current DLSS 4.5 UE plugin support, Streamline details, and what remains separate from the NBA 2K27 player launch.",
    type: "article",
    url: "https://www.dlss5.net/dlss-5-unreal-engine",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLSS 5 Unreal Engine Status: What Developers Know Now",
    description:
      "See DLSS 5 Unreal Engine status, current DLSS 4.5 UE plugin support, Streamline details, and what remains separate from the NBA 2K27 player launch.",
  },
};

const NVIDIA_DEVELOPER_DLSS = "https://developer.nvidia.com/rtx/dlss";
const NVIDIA_DLSS5 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";

const pluginRows = [
  {
    item: "Unreal Engine 5 plugin",
    currentStatus: "Official 4.5 package listed by NVIDIA",
    developerMeaning: "Use this for current Multi Frame Generation, Dynamic MFG, Super Resolution, DLAA, Reflex, and related paths.",
  },
  {
    item: "UE 5.7, 5.6, 5.5, 5.4 downloads",
    currentStatus: "Listed on the developer page",
    developerMeaning: "Choose the package that matches the project version instead of assuming one binary covers every engine branch.",
  },
  {
    item: "Streamline",
    currentStatus: "Open integration path",
    developerMeaning: "Useful for integrating multiple upscaling or rendering effects through one framework.",
  },
  {
    item: "DLSS 5 integration",
    currentStatus: "Live in NBA 2K27; UE developer package details still separate",
    developerMeaning: "Do not infer a downloadable DLSS 5 UE plugin solely from the NBA 2K27 player launch.",
  },
];

const implementationChecklist = [
  "Confirm the target Unreal Engine version before downloading a plugin package.",
  "Decide whether the project needs native plugin integration, Streamline, or both.",
  "Test Super Resolution, Frame Generation, Reflex, and Ray Reconstruction separately.",
  "Record which settings are exposed in the shipping graphics menu.",
  "Track each game's launch notes before making public DLSS 5 promises.",
];

const openQuestions = [
  "Which public UE plugin package will expose the DLSS 5 feature first?",
  "Will the new visual layer require a new engine-side buffer path?",
  "Which GPU tiers will expose the mode in shipping games?",
  "How will developers tune intensity, masks, and color grading in public tools?",
];

const faqItems = [
  {
    question: "What is the DLSS 5 Unreal Engine status now?",
    answer:
      "DLSS 5 is live for players in NBA 2K27, but NVIDIA's public developer page currently documents the official DLSS 4.5 Unreal Engine plugin. Treat public UE integration details as separate from one game's player launch.",
  },
  {
    question: "What does the current Unreal Engine plugin include?",
    answer:
      "NVIDIA lists Multi Frame Generation, Dynamic Multi Frame Generation, Ray Reconstruction, Super Resolution, DLAA, Reflex Low Latency, and NVIDIA Image Scaling for the current UE plugin package.",
  },
  {
    question: "Should developers market a game as DLSS 5 ready?",
    answer:
      "Use cautious wording unless NVIDIA or the publisher has public game or developer documentation. Current 4.5 UE support is not the same as a confirmed DLSS 5 UE plugin package.",
  },
];

export default function Dlss5UnrealEnginePage() {
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
        name: "DLSS 5 Unreal Engine",
        item: "https://www.dlss5.net/dlss-5-unreal-engine",
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
          <span>Unreal Engine status</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Developer status checked September 5, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Unreal Engine Status: What Developers Know
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This DLSS 5 Unreal Engine status page keeps the current official 4.5 plugin
            separate from the NBA 2K27 player launch. DLSS 5 is live in that game, but
            developers still need public UE-specific documentation before treating a plugin
            package as confirmed.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Quick answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              For Unreal Engine work, NVIDIA lists an official DLSS 4.5 Unreal Engine
              plugin today. NBA 2K27&apos;s DLSS 5 launch does not by itself confirm a public
              DLSS 5 UE plugin package.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Current plugin path</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The developer page lists UE 5.7, 5.6, 5.5, and 5.4 downloads plus Streamline
              resources for current integrations. DLSS 5 Unreal Engine claims should still
              wait for public developer notes.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Cautious wording</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Say &quot;current plugin support&quot; for 4.5 features and &quot;available in NBA 2K27&quot;
              for the player launch. Do not merge those into a UE plugin claim.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Developer status table</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            The DLSS 5 Unreal Engine question has two layers: what the public plugin
            supports now, and what public DLSS 5 developer documentation still needs to cover.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Item</th>
                  <th className="p-3 font-semibold">Current public status</th>
                  <th className="p-3 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {pluginRows.map((row, index) => (
                  <tr
                    key={row.item}
                    className={`border-t border-border align-top ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="p-3 font-medium">{row.item}</td>
                    <td className="p-3 text-foreground/80">{row.currentStatus}</td>
                    <td className="p-3 text-muted-foreground">{row.developerMeaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-[1fr_1fr]">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-2xl font-bold mb-4">Implementation checklist</h2>
            <ol className="space-y-3 text-sm text-foreground/80">
              {implementationChecklist.map((item) => (
                <li key={item} className="rounded-md bg-muted/30 p-3">
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h2 className="text-2xl font-bold mb-4">Open questions</h2>
            <div className="space-y-3">
              {openQuestions.map((item) => (
                <div key={item} className="rounded-md bg-background/60 p-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            Why this page is useful for non-developers too
          </h2>
          <p>
            Players often see a game engine headline and assume it proves consumer
            compatibility. It does not. Engine support, game integration, driver support,
            and GPU eligibility are separate layers.
          </p>
          <p>
            That distinction matters for titles built in Unreal Engine. A game can use the
            current plugin for Super Resolution or Frame Generation without confirming the
            DLSS 5 Neural Rendering developer package. Good DLSS 5 Unreal Engine answers
            should keep those states separate.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-3">Developer handoff notes</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            If you are documenting a project for a producer, publisher, or store page, keep
            the integration note separate from the marketing note. The integration note can
            say which UE version, plugin package, driver branch, and Streamline path were
            tested. The marketing note should wait until the public feature name, supported
            GPUs, and launch timing are confirmed.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            This matters because a game team may have a working development build before a
            consumer-facing setting is stable. A private build, a technology preview, and a
            shipping menu option are three different states. Treating them as one state
            creates poor search answers and can mislead players who only want to know
            whether their card will expose a mode.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A useful release note should also name the test environment. Engine version,
            plugin version, driver branch, operating system, GPU tier, and graphics menu
            wording can all affect what a player actually sees. Without those details, an
            engine claim is only a direction of travel, not a compatibility answer for
            real players.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            For now, the safest public documentation pattern is status-based: available for
            current plugin features, available in NBA 2K27 for the player feature, and
            unconfirmed for UE-specific package details that lack final NVIDIA notes.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-4-5-games"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Current 4.5 games</div>
            <p className="text-sm text-muted-foreground">
              See current and announced game-level support signals.
            </p>
          </Link>
          <Link
            href="/dlss-5-evidence-tracker"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Evidence tracker</div>
            <p className="text-sm text-muted-foreground">
              Check confirmed support, future plans, and the evidence still missing.
            </p>
          </Link>
          <Link
            href="/dlss-5-games"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">DLSS 5 games</div>
            <p className="text-sm text-muted-foreground">
              Track NBA 2K27 and other named games separately from engine support.
            </p>
          </Link>
          <Link
            href="/dlss-5-neural-rendering"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Neural rendering explainer</div>
            <p className="text-sm text-muted-foreground">
              Understand what the neural rendering layer changes for players and developers.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DEVELOPER_DLSS} className="text-blue-400 hover:underline">
              NVIDIA Developer DLSS page
            </a>
            ,{" "}
            <a href={NVIDIA_DLSS5} className="text-blue-400 hover:underline">
              NVIDIA DLSS 5 announcement
            </a>
            , and{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA 4.5 release notes
            </a>
            . This page does not treat one game launch as final UE developer behavior.
            This DLSS 5 Unreal Engine page should therefore be treated as a status page, not
            as launch documentation.
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
