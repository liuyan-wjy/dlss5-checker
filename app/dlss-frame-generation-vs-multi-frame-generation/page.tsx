import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frame Generation vs Multi Frame Generation in DLSS",
  description:
    "Compare DLSS Frame Generation, Multi Frame Generation, Dynamic MFG, and 6X mode so RTX 40 and RTX 50 users can separate current features from DLSS 5 claims.",
  alternates: {
    canonical: "/dlss-frame-generation-vs-multi-frame-generation",
  },
};

const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";
const NVIDIA_DLSS_TECH = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";

const comparisonRows = [
  {
    feature: "Frame Generation",
    output: "Adds one AI-generated frame between rendered frames",
    hardware: "RTX 40 and RTX 50 feature tier",
    intent: "Improve smoothness and FPS in supported games",
  },
  {
    feature: "Multi Frame Generation",
    output: "Adds multiple generated frames per rendered frame",
    hardware: "RTX 50 feature tier",
    intent: "Push high-refresh output beyond the older 2X path",
  },
  {
    feature: "Dynamic MFG",
    output: "Shifts between multipliers to target a display or custom rate",
    hardware: "RTX 50 path in the current NVIDIA App story",
    intent: "Balance frame rate, clarity, and responsiveness during gameplay",
  },
  {
    feature: "6X mode",
    output: "Can generate five additional frames for each rendered frame",
    hardware: "RTX 50 plus compatible title or profile",
    intent: "Use high-refresh 4K, 1440p, or 1080p displays more fully",
  },
  {
    feature: "Neural rendering",
    output: "Targets lighting and material fidelity rather than only more frames",
    hardware: "Fall 2026 support matrix still pending",
    intent: "Improve visual realism while staying tied to the game scene",
  },
];

const decisionCards = [
  {
    title: "RTX 40 owner",
    copy:
      "You should think in terms of Frame Generation, Super Resolution, Ray Reconstruction, and DLAA. Do not assume the RTX 50 multi-frame path is available.",
  },
  {
    title: "RTX 50 owner",
    copy:
      "You can watch for Dynamic MFG, 4X, and 6X options, but the exact menu still depends on the game, driver, and app profile.",
  },
  {
    title: "DLSS 5 searcher",
    copy:
      "The next visual layer is a different question. A frame-generation feature being live today does not mean the Fall 2026 feature is available.",
  },
];

const faqItems = [
  {
    question: "What does Frame Generation vs Multi Frame Generation mean?",
    answer:
      "Frame Generation vs Multi Frame Generation means one generated frame versus several generated frames. Frame Generation is the older one-extra-frame path used by RTX 40 and RTX 50. Multi Frame Generation is the RTX 50 path that can create several generated frames per rendered frame in compatible titles.",
  },
  {
    question: "Is 6X mode the same as DLSS 5?",
    answer:
      "No. 6X mode belongs to the current 4.5 frame-generation story. The next visual layer is announced for Fall 2026 and focuses on lighting and materials rather than only frame count.",
  },
  {
    question: "Why does Dynamic MFG matter?",
    answer:
      "Dynamic mode can shift between multipliers instead of staying fixed. That can help target a refresh rate, but it also means external frame limiters and V-Sync need careful handling.",
  },
];

export default function DlssFrameGenerationVsMultiFrameGenerationPage() {
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
        item: "https://dlss5.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Frame Generation vs Multi Frame Generation",
        item: "https://dlss5.net/dlss-frame-generation-vs-multi-frame-generation",
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
          <span>Frame Generation vs MFG</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Feature comparison updated June 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Frame Generation vs Multi Frame Generation in DLSS
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Frame Generation vs Multi Frame Generation is now a real compatibility question,
            not just wording. This page separates the older one-frame path, the RTX 50
            multi-frame path, Dynamic mode, 6X, and the upcoming visual-fidelity layer.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Quick answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Frame Generation vs Multi Frame Generation comes down to one generated frame
              versus several. Dynamic mode changes the multiplier automatically. 6X is the
              newest high-end target, not the Fall 2026 visual layer.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Hardware split</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              RTX 40 belongs to the Frame Generation tier. RTX 50 is where the newer
              multi-frame features live in current public NVIDIA material.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">SEO reason</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Search results often merge these names. A clean comparison helps readers avoid
              buying or waiting for the wrong feature.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Feature comparison table</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            Use this Frame Generation vs Multi Frame Generation table when a game page says
            only that frame generation is supported. The output behavior and hardware tier
            are the details that matter.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">Output behavior</th>
                  <th className="p-3 font-semibold">Hardware signal</th>
                  <th className="p-3 font-semibold">Main intent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-border align-top ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 text-foreground/80">{row.output}</td>
                    <td className="p-3 text-foreground/80">{row.hardware}</td>
                    <td className="p-3 text-muted-foreground">{row.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {decisionCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-border p-5">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">{card.copy}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Why the names are easy to mix up</h2>
          <p>
            The confusion comes from one word: generation. In one context it means a GPU
            family, such as RTX 40 or RTX 50. In another, it means the software creates
            additional frames. A page that only says &quot;supports generation&quot; is not specific
            enough for a buyer.
          </p>
          <p>
            The safer reading is feature-first. Ask whether the game exposes Super
            Resolution, Frame Generation, Multi Frame Generation, Dynamic mode, or a model
            preset. Then ask whether your GPU tier can use that exact path.
            Frame Generation vs Multi Frame Generation should be answered after both checks,
            not from a generic badge.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="text-xl font-bold mb-3">Bottom line for compatibility searches</h2>
          <p className="text-sm text-foreground/80 leading-relaxed">
            If your search is about FPS today, focus on the current frame features and your
            GPU tier. If your search is about visual fidelity in Fall 2026, use the evidence
            tracker and supported-cards pages instead. Frame Generation vs Multi Frame
            Generation and the Fall 2026 visual layer answer different questions.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-3">Which wording should you trust?</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            The clearest wording names both the feature and the hardware tier. For example,
            a page that says RTX 40 supports one generated-frame path is making a different
            claim than a page that says RTX 50 supports a multi-frame path. A vague phrase
            such as &quot;AI frame generation&quot; should be treated as incomplete until it names
            the mode.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            When reading a game listing, also check whether the mode is native, exposed
            through an app override, or coming in a future patch. Those three states can all
            appear in marketing, but they create very different buying advice. A useful
            listing should name the state instead of hiding it behind a single support badge.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-4-5-dynamic-mfg-settings"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Dynamic MFG settings</div>
            <p className="text-sm text-muted-foreground">
              Learn how Dynamic, Fixed, Max refresh rate, and Custom targets differ.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-dynamic-mfg-6x"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">6X mode overview</div>
            <p className="text-sm text-muted-foreground">
              See what is available now for the current RTX 50 path.
            </p>
          </Link>
          <Link
            href="/dlss-5-vs-dlss-4-5"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">DLSS 5 vs 4.5</div>
            <p className="text-sm text-muted-foreground">
              Separate the upcoming visual layer from current frame features.
            </p>
          </Link>
          <Link
            href="/dlss-5-supported-cards"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Supported cards</div>
            <p className="text-sm text-muted-foreground">
              Check each GPU generation before assuming a feature is available.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA 4.5 Dynamic MFG release notes
            </a>
            ,{" "}
            <a href={NVIDIA_RTX_GAMES} className="text-blue-400 hover:underline">
              NVIDIA RTX games and features list
            </a>
            , and{" "}
            <a href={NVIDIA_DLSS_TECH} className="text-blue-400 hover:underline">
              NVIDIA DLSS technology page
            </a>
            . Final behavior can still depend on the game, driver, app profile, and GPU.
            This Frame Generation vs Multi Frame Generation guide uses current public
            wording and avoids treating announced features as already available.
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
      </main>
    </>
  );
}
