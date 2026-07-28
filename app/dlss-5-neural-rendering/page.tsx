import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 5 Neural Rendering: What 3D-Guided Rendering Means",
  description:
    "Learn what DLSS 5 3D-guided Neural Rendering means, how game frames and motion vectors guide the model, and why it differs from video generation.",
  alternates: {
    canonical: "/dlss-5-neural-rendering",
  },
};

const NVIDIA_DLSS5_NEWS =
  "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games";
const NVIDIA_DLSS_DEVELOPER = "https://developer.nvidia.com/rtx/dlss";
const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";

const inputRows = [
  {
    input: "Color frame",
    role:
      "The already-rendered scene gives the model the source pixels it must stay anchored to.",
  },
  {
    input: "Motion vectors",
    role:
      "Movement data helps the output remain stable from frame to frame instead of behaving like a new prompt each time.",
  },
  {
    input: "Scene semantics",
    role:
      "NVIDIA says the model is trained to understand elements such as hair, fabric, translucent skin, and lighting direction.",
  },
  {
    input: "Artist controls",
    role:
      "Developers can tune intensity, color grading, and masking so the result respects a game's intended look.",
  },
];

const boundaryRows = [
  {
    label: "Not just upscaling",
    detail:
      "Super Resolution reconstructs a higher-resolution image from fewer rendered pixels. The new layer is framed around lighting and material fidelity.",
  },
  {
    label: "Not just frame generation",
    detail:
      "Frame Generation and Multi Frame Generation create extra frames for smoothness. Neural rendering is aimed at how a frame looks.",
  },
  {
    label: "Not offline video AI",
    detail:
      "NVIDIA distinguishes the feature from prompt-based video models because game output needs to be real-time, predictable, and tied to the 3D scene.",
  },
  {
    label: "Not a replacement for the game engine",
    detail:
      "The engine still supplies geometry, animation, materials, color frames, and motion data. The model enhances the rendered result rather than inventing a playable world from a blank prompt.",
  },
  {
    label: "Not a final GPU matrix",
    detail:
      "The technical explanation does not replace a launch support table. Hardware support still needs a separate source.",
  },
];

const faqItems = [
  {
    question: "What is DLSS 5 Neural Rendering?",
    answer:
      "It is NVIDIA's announced real-time visual-fidelity layer that uses game color frames, motion vectors, and an AI model to improve lighting and material appearance while staying anchored to the source scene.",
  },
  {
    question: "What does 3D-guided Neural Rendering mean?",
    answer:
      "It means the AI output is guided by data produced by the real game scene, including rendered color and motion information. The engine remains responsible for the playable world, camera, geometry, animation, and interaction.",
  },
  {
    question: "Is neural rendering the same as DLSS 4.5?",
    answer:
      "No. DLSS 4.5 improves the current Super Resolution and frame-generation stack. The announced DLSS 5 layer focuses on photoreal lighting, materials, and artist-controlled visual fidelity.",
  },
  {
    question: "Does this prove my GPU will support it?",
    answer:
      "No. This page explains how the feature is described technically. Use the supported-cards and system-requirements pages for hardware status.",
  },
];

export default function Dlss5NeuralRenderingPage() {
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
        name: "Neural Rendering",
        item: "https://www.dlss5.net/dlss-5-neural-rendering",
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
          <span>Neural rendering</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Technical explainer updated July 28, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 5 Neural Rendering: What “3D-Guided” Means
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The important shift is not only more frames. NVIDIA describes the new layer as
            a real-time model that uses source game data to improve lighting and materials
            while keeping the result stable and controllable for developers.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Quick answer</h2>
          <p className="text-foreground/80 leading-relaxed">
            DLSS 5 Neural Rendering takes a game&apos;s color frame and motion vectors as
            inputs, then applies an AI model to produce photoreal lighting and material
            responses that remain tied to the original 3D scene. That makes it different
            from a generic video generator and different from the current frame-rate tools.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What the model uses</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {inputRows.map((row) => (
              <div key={row.input} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold mb-2">{row.input}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{row.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            What “3D-guided Neural Rendering” means
          </h2>
          <p>
            The phrase can sound as if an AI model is generating the entire game, but that
            is not the useful interpretation. The real-time game engine still determines
            the camera, geometry, animation, object positions, interactions, base
            materials, and rendered color. The neural model receives data from that
            controlled 3D scene and enhances the visual result.
          </p>
          <p>
            NVIDIA has publicly described color frames and motion vectors as important
            inputs. Motion vectors tell the system where game elements move between frames,
            helping details remain attached to the correct surfaces. That grounding is
            essential in a game: a reflection, strand of hair, patch of fabric, or light
            source cannot drift simply because an AI model finds another image plausible.
          </p>
          <p>
            For players, the phrase should therefore mean <strong>scene-aware and
            temporally controlled</strong>, not prompt-generated. The important launch
            tests will be motion stability, input responsiveness, preservation of art
            direction, performance cost, and whether materials remain consistent across
            gameplay, cutscenes, weather changes, and camera movement.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            Why this matters for players and developers
          </h2>
          <p>
            Most short answers say the feature improves graphics, but that does not tell a
            buyer or player what kind of improvement to expect. The specific claim is about
            materials and lighting: skin, fabric, hair, back-lit scenes, overcast scenes,
            reflections, and other hard cases where traditional real-time rendering often
            uses shortcuts.
          </p>
          <p>
            The other useful detail is control. NVIDIA says developers get intensity,
            grading, and mask controls. That matters because games are art-directed; a
            useful model has to enhance a scene without rewriting the style of the game.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Boundaries: what it is not</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Boundary</th>
                  <th className="p-3 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {boundaryRows.map((row) => (
                  <tr key={row.label} className="border-t border-border align-top">
                    <td className="p-3 font-medium">{row.label}</td>
                    <td className="p-3 text-foreground/80 leading-relaxed">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-5-unreal-engine"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Unreal Engine status</div>
            <p className="text-sm text-muted-foreground">
              Check current plugin support and what is still unconfirmed for developers.
            </p>
          </Link>
          <Link
            href="/dlss-5-release-date"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Release date status</div>
            <p className="text-sm text-muted-foreground">
              Check the Fall 2026 window and what still needs launch proof.
            </p>
          </Link>
          <Link
            href="/dlss-5-vs-dlss-4-5"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">DLSS 5 vs DLSS 4.5</div>
            <p className="text-sm text-muted-foreground">
              Compare the announced visual layer with current performance features.
            </p>
          </Link>
          <Link
            href="/dlss-5-supported-cards"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Supported cards</div>
            <p className="text-sm text-muted-foreground">
              Use the hardware page if your real question is whether a GPU qualifies.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-dynamic-mfg-6x"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Current DLSS 4.5 update</div>
            <p className="text-sm text-muted-foreground">
              See the Dynamic MFG and 6X features that are already available.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources</h2>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DLSS5_NEWS} className="text-blue-400 hover:underline">
              NVIDIA DLSS 5 newsroom announcement
            </a>
            ,{" "}
            <a href={NVIDIA_DLSS_DEVELOPER} className="text-blue-400 hover:underline">
              NVIDIA Developer DLSS page
            </a>
            , and{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA DLSS 4.5 release notes
            </a>
            . Hardware support and launch behavior can still change before public release.
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
        <ArticleTrustBlock />
      </main>
    </>
  );
}
