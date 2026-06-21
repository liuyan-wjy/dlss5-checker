import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 4.5 Games: Current Support and Verification [2026]",
  description:
    "Track DLSS 4.5 games, current feature support, NVIDIA App override caveats, verification steps, and how to avoid confusing current support with DLSS 5.",
  alternates: {
    canonical: "/dlss-4-5-games",
  },
};

const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const NVIDIA_DLSS45_GDC =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-rtx-path-tracing-game-announcements-gdc-2026/";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";

const gameRows = [
  {
    title: "007 First Light",
    signal: "Launch support announced",
    feature: "Path tracing and 4.5 feature set",
    caveat: "Wait for launch settings and performance notes.",
  },
  {
    title: "CONTROL Resonant",
    signal: "Coming this year",
    feature: "Path tracing and current-generation image features",
    caveat: "Needs final release notes before calling it verified.",
  },
  {
    title: "Tides of Annihilation",
    signal: "Launch support announced",
    feature: "Path tracing plus updated rendering stack",
    caveat: "Check whether Frame Generation modes are exposed at launch.",
  },
  {
    title: "Where Winds Meet",
    signal: "Upgrade announced",
    feature: "Super Resolution update",
    caveat: "Use a patch note or graphics menu screenshot as final proof.",
  },
  {
    title: "Starfield",
    signal: "Listed in enhanced model examples",
    feature: "Frame Generation model upgrade signal",
    caveat: "This is not the same as Fall 2026 neural-rendering support.",
  },
  {
    title: "Hogwarts Legacy",
    signal: "Listed in enhanced model examples",
    feature: "UI-aware Frame Generation model signal",
    caveat: "Game support and GPU support still need separate checks.",
  },
  {
    title: "The Outer Worlds 2",
    signal: "Enhanced model example",
    feature: "Improved UI handling with the new model",
    caveat: "Useful for checking maps, HUD text, and static UI clarity.",
  },
  {
    title: "Monster Hunter Wilds",
    signal: "Listed in supported examples",
    feature: "Enhanced Frame Generation model signal",
    caveat: "Verify app override, driver path, and in-game option.",
  },
];

const verificationSteps = [
  {
    step: "Read the game note",
    detail:
      "Start with a first-party publisher note or NVIDIA article. Marketing copy is useful, but the exact mode still matters.",
  },
  {
    step: "Open the graphics menu",
    detail:
      "Look for Super Resolution, Frame Generation, Multi Frame Generation, Dynamic mode, or a model preset entry.",
  },
  {
    step: "Check the GPU tier",
    detail:
      "RTX 50 can use the newest multi-frame paths. RTX 40 may get the newer Frame Generation model, but not every 50-series feature.",
  },
  {
    step: "Separate app override from native support",
    detail:
      "A NVIDIA App override can unlock a path in selected titles, while native support means the game exposes it directly.",
  },
];

const relatedLinks = [
  {
    href: "/dlss-4-5-dynamic-mfg-6x",
    title: "Dynamic MFG and 6X status",
    copy: "Use this for the current 4.5 feature summary.",
  },
  {
    href: "/dlss-4-5-dynamic-mfg-settings",
    title: "NVIDIA App settings guide",
    copy: "See Dynamic, Fixed, Max refresh rate, and Custom target behavior.",
  },
  {
    href: "/dlss-frame-generation-vs-multi-frame-generation",
    title: "Frame Generation vs MFG",
    copy: "Separate 2X, 4X, 6X, fixed mode, and dynamic mode.",
  },
  {
    href: "/dlss-5-games",
    title: "DLSS 5 games tracker",
    copy: "Use this for announced Fall 2026 titles, not current 4.5 support.",
  },
];

const faqItems = [
  {
    question: "What DLSS 4.5 games are supported right now?",
    answer:
      "For DLSS 4.5 games, NVIDIA lists current and upcoming support signals across its 4.5 announcements, including examples such as Starfield, Hogwarts Legacy, The Outer Worlds 2, Monster Hunter Wilds, and newly announced titles from GDC 2026. The safest wording is current or announced support until each title exposes a public setting or patch note.",
  },
  {
    question: "Is a DLSS 4.5 game the same as a DLSS 5 game?",
    answer:
      "No. The 4.5 stack is available through current game, driver, plugin, and NVIDIA App paths. The next visual layer is announced for Fall 2026 and still needs final game documentation.",
  },
  {
    question: "How do I verify support in a specific game?",
    answer:
      "Check the game version, driver version, GPU tier, NVIDIA App override, and visible graphics menu. A game can support Super Resolution without exposing Dynamic Multi Frame Generation or 6X.",
  },
];

export default function Dlss45GamesPage() {
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
        name: "DLSS 4.5 Games",
        item: "https://www.dlss5.net/dlss-4-5-games",
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
          <span>DLSS 4.5 games</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            Current feature tracker updated June 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 4.5 Games: Current Support and Verification
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For DLSS 4.5 games, this page tracks the current support story separately from
            the Fall 2026 feature. The goal is to show which support signals are live,
            announced, or still waiting for a patch note.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="font-bold mb-2">Quick answer</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              NVIDIA has current and announced game support for the 4.5 stack. Treat DLSS
              4.5 games as verified only after the game build, app path, and graphics menu
              line up.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Why this is separate</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              DLSS 4.5 games answer a different search intent than the next neural
              rendering launch. Mixing the two creates bad upgrade advice.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="font-bold mb-2">Best evidence</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              The strongest proof is a visible setting in a public build, backed by NVIDIA
              App or driver behavior and publisher notes.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Support signals by game</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            NVIDIA&apos;s March 2026 material named new titles and examples across Super
            Resolution, path tracing, Dynamic MFG, and the enhanced Frame Generation model.
            The table uses cautious labels because the same title can expose different
            features on different hardware. Use it as a DLSS 4.5 games shortlist, not as a
            final compatibility promise.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Game</th>
                  <th className="p-3 font-semibold">Current signal</th>
                  <th className="p-3 font-semibold">Feature bucket</th>
                  <th className="p-3 font-semibold">Verification caveat</th>
                </tr>
              </thead>
              <tbody>
                {gameRows.map((row, index) => (
                  <tr
                    key={row.title}
                    className={`border-t border-border align-top ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="p-3 font-medium">{row.title}</td>
                    <td className="p-3 text-foreground/80">{row.signal}</td>
                    <td className="p-3 text-foreground/80">{row.feature}</td>
                    <td className="p-3 text-muted-foreground">{row.caveat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">How to verify one title</h2>
          <p className="mb-4 text-sm text-foreground/80 leading-relaxed">
            A DLSS 4.5 games claim is strongest when the public build, driver path, and
            NVIDIA App profile all point to the same feature.
          </p>
          <div className="grid gap-4 md:grid-cols-4">
            {verificationSteps.map((item, index) => (
              <div key={item.step}>
                <h3 className="font-semibold mb-1">
                  {index + 1}. {item.step}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Minimum evidence before publishing a claim</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A launch trailer or news paragraph is useful, but it is not enough for a final
            compatibility answer. Before calling one title verified, look for at least two
            independent signals: a publisher patch note, a graphics menu screenshot, a
            current NVIDIA App profile, or a driver note that names the game.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            If only one signal exists, label the entry as announced or expected. That
            wording protects readers from assuming every mode, GPU tier, and display target
            is already available.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            What current support does not prove
          </h2>
          <p>
            A current 4.5 title does not prove that the same game has the Fall 2026 visual
            layer. It also does not prove that every RTX card receives the same menu. RTX
            50, RTX 40, and older cards sit in different feature tiers.
          </p>
          <p>
            The useful reader answer is therefore conditional: the current stack can improve
            frame rate, image reconstruction, UI handling, and ray-traced output in supported
            games, while the next layer still needs launch documentation.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold mb-1">{link.title}</div>
              <p className="text-sm text-muted-foreground">{link.copy}</p>
            </Link>
          ))}
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA 4.5 Dynamic MFG release notes
            </a>
            ,{" "}
            <a href={NVIDIA_DLSS45_GDC} className="text-blue-400 hover:underline">
              NVIDIA GDC 2026 game announcements
            </a>
            , and{" "}
            <a href={NVIDIA_RTX_GAMES} className="text-blue-400 hover:underline">
              NVIDIA RTX games and features list
            </a>
            . Game menus and app overrides can change after updates.
            This DLSS 4.5 games page keeps announced support separate from verified menu
            evidence for that reason.
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
