import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 4.5 Dynamic MFG Settings: NVIDIA App Guide 2026",
  description:
    "Learn DLSS 4.5 Dynamic MFG settings in the NVIDIA App, including Dynamic, Fixed, Max refresh rate, Custom targets, 6X mode, V-Sync, and limiter caveats.",
  alternates: {
    canonical: "/dlss-4-5-dynamic-mfg-settings",
  },
};

const NVIDIA_DLSS45_NOW =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-generation-6x-mode-released/";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";

const settingRows = [
  {
    setting: "Dynamic",
    where: "DLSS Override - Frame Generation Mode",
    useCase: "Targets the display refresh rate or a custom frame-rate cap.",
    caveat: "NVIDIA says Dynamic mode is not currently compatible with V-Sync or frame rate limiters.",
  },
  {
    setting: "Fixed",
    where: "DLSS Override - Frame Generation Mode",
    useCase: "Runs the multiplier selected by the player.",
    caveat: "Use this when you want predictable behavior instead of automatic shifting.",
  },
  {
    setting: "Max refresh rate",
    where: "Dynamic mode target",
    useCase: "Lets the app synchronize toward the maximum refresh rate of the display.",
    caveat: "Best for high-refresh panels when the game can feed enough rendered frames.",
  },
  {
    setting: "Custom",
    where: "Dynamic mode target",
    useCase: "Lets the player type a maximum frame-rate target.",
    caveat: "The target is not a guarantee if the base game performance is too low.",
  },
  {
    setting: "Preset B",
    where: "DLSS Override - Model Presets",
    useCase: "Uses the newer Frame Generation model in selected games.",
    caveat: "Look for UI clarity changes, not just average FPS.",
  },
];

const setupSteps = [
  "Update the NVIDIA App and install a current Game Ready Driver.",
  "Open the Graphics tab and choose the game or global profile you want to test.",
  "Find DLSS Override - Frame Generation Mode.",
  "Choose Dynamic for automatic shifting or Fixed for a selected multiplier.",
  "If Dynamic is selected, choose Max refresh rate or type a Custom target.",
  "Launch the game and confirm Frame Generation is enabled in the game menu when required.",
];

const troubleRows = [
  {
    symptom: "No Dynamic option",
    likelyCause: "The GPU, driver, app version, or selected game does not expose that path.",
  },
  {
    symptom: "6X is missing",
    likelyCause: "The title may not use a recent enough Frame Generation DLL or compatible profile.",
  },
  {
    symptom: "Frame pacing feels odd",
    likelyCause: "Check V-Sync, frame limiters, monitor refresh rate, and base game performance.",
  },
  {
    symptom: "UI looks blurry",
    likelyCause: "Try the newer Frame Generation model preset if the game is in the supported group.",
  },
];

const testMatrixRows = [
  {
    scenario: "High-refresh display",
    startingPoint: "Dynamic plus Max refresh rate",
    whatToRecord:
      "Monitor refresh rate, average FPS, base rendered FPS if available, and whether the game can hold the target without large frame-time swings.",
  },
  {
    scenario: "Repeatable benchmark",
    startingPoint: "Fixed multiplier",
    whatToRecord:
      "One scene, one route, one graphics preset, and the exact multiplier. This makes before-and-after captures easier to compare.",
  },
  {
    scenario: "Comfort target",
    startingPoint: "Dynamic plus Custom target",
    whatToRecord:
      "The custom frame-rate number, Reflex state, V-Sync state, and whether input timing feels consistent during camera pans.",
  },
  {
    scenario: "UI clarity check",
    startingPoint: "Preset B where available",
    whatToRecord:
      "Map screens, subtitles, HUD text, menus, and static overlays. NVIDIA highlights UI handling as part of the newer model story.",
  },
];

const faqItems = [
  {
    question: "Where are DLSS 4.5 Dynamic MFG settings?",
    answer:
      "DLSS 4.5 Dynamic MFG settings live in the NVIDIA App Graphics tab. Choose a global or per-game profile, then use DLSS Override - Frame Generation Mode. Select Dynamic, then choose Max refresh rate or a Custom target if the option is available for your setup.",
  },
  {
    question: "Should I use Dynamic or Fixed mode?",
    answer:
      "Use Dynamic if your goal is to follow a refresh-rate or frame-rate target. Use Fixed if you want a known multiplier and easier comparison testing between runs.",
  },
  {
    question: "Why does NVIDIA warn about V-Sync and frame limiters?",
    answer:
      "Dynamic mode is meant to control the frame-generation target itself. External limiters or V-Sync can conflict with that behavior, so NVIDIA says they are not currently compatible with Dynamic mode.",
  },
];

export default function Dlss45DynamicMfgSettingsPage() {
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
        name: "Dynamic MFG Settings",
        item: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-settings",
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
          <span>Dynamic MFG settings</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-3">
            NVIDIA App guide updated June 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 4.5 Dynamic MFG Settings: NVIDIA App Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This DLSS 4.5 Dynamic MFG settings guide starts with the NVIDIA App because the
            feature is not controlled only through an in-game menu. It explains the current
            options and the limitations that matter when you test a title.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Quick answer</h2>
          <p className="text-foreground/80 leading-relaxed">
            For DLSS 4.5 Dynamic MFG settings, open the NVIDIA App Graphics tab, choose a
            game or global profile, then use{" "}
            <strong>DLSS Override - Frame Generation Mode</strong>. Dynamic mode can target
            Max refresh rate or a Custom number. Fixed mode uses the selected multiplier.
            NVIDIA says Dynamic mode is not currently compatible with V-Sync or frame rate
            limiters.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Settings table</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            The important DLSS 4.5 Dynamic MFG settings are about target behavior, not only
            a bigger frame multiplier. Dynamic, Fixed, Max refresh rate, and Custom targets
            can produce different test results.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Setting</th>
                  <th className="p-3 font-semibold">Where it appears</th>
                  <th className="p-3 font-semibold">Best use</th>
                  <th className="p-3 font-semibold">Caveat</th>
                </tr>
              </thead>
              <tbody>
                {settingRows.map((row, index) => (
                  <tr
                    key={row.setting}
                    className={`border-t border-border align-top ${index % 2 ? "bg-muted/15" : ""}`}
                  >
                    <td className="p-3 font-medium">{row.setting}</td>
                    <td className="p-3 text-foreground/80">{row.where}</td>
                    <td className="p-3 text-foreground/80">{row.useCase}</td>
                    <td className="p-3 text-muted-foreground">{row.caveat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-2xl font-bold mb-4">Setup checklist</h2>
            <p className="mb-4 text-sm text-foreground/80 leading-relaxed">
              Use this DLSS 4.5 Dynamic MFG settings sequence before comparing screenshots
              or frame pacing.
            </p>
            <ol className="space-y-3 text-sm text-foreground/80">
              {setupSteps.map((step) => (
                <li key={step} className="rounded-md bg-muted/30 p-3">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="text-2xl font-bold mb-4">Common problems</h2>
            <div className="space-y-3">
              {troubleRows.map((row) => (
                <div key={row.symptom} className="rounded-md bg-muted/30 p-3 text-sm">
                  <div className="font-semibold mb-1">{row.symptom}</div>
                  <div className="text-foreground/80">{row.likelyCause}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to test without fooling yourself</h2>
          <p>
            Compare one variable at a time. If you are testing Dynamic mode, do not also
            change resolution, ray tracing, Reflex, V-Sync, and game quality presets during
            the same run. Frame pacing can feel different even when average FPS looks good.
          </p>
          <p>
            For high-refresh monitors, Max refresh rate is the natural first test. For a
            more controlled benchmark, Custom can be easier because you decide the target
            before launching the game. Fixed mode is useful when you want a repeatable
            multiplier for screenshots or side-by-side capture. In other words, DLSS 4.5
            Dynamic MFG settings should be logged with the same care as resolution or ray
            tracing settings.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Recommended test matrix</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            Use this DLSS 4.5 Dynamic MFG settings matrix when you want a cleaner answer
            than a single FPS screenshot. The goal is to separate app behavior, game menu
            behavior, and monitor behavior before judging whether Dynamic or Fixed is better
            for one title.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {testMatrixRows.map((row) => (
              <div key={row.scenario} className="rounded-md bg-muted/30 p-4">
                <h3 className="font-semibold mb-2">{row.scenario}</h3>
                <p className="text-sm text-foreground/80 mb-2">
                  <strong>Start with:</strong> {row.startingPoint}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {row.whatToRecord}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-foreground/80 leading-relaxed">
            Repeat each DLSS 4.5 Dynamic MFG settings run after a driver update or game
            patch. Profiles can change, and a title that exposes Dynamic mode today may
            alter its recommended defaults later.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            When Fixed can be the better answer
          </h2>
          <p>
            DLSS 4.5 Dynamic MFG settings are useful when the display target is the main
            goal, but Dynamic is not automatically the best choice for every game. If the
            base frame rate is unstable, a mode that constantly changes multipliers can make
            the result harder to read. In that case, Fixed mode is often the cleaner first
            test because the multiplier stays known.
          </p>
          <p>
            Start with Dynamic when you are tuning for a high-refresh panel and the game
            already feels responsive. Start with Fixed when you are comparing visual
            artifacts, measuring latency, capturing video, or checking whether a specific
            title exposes 4X or 6X correctly. DLSS 4.5 Dynamic MFG settings should be judged
            by frame pacing, HUD stability, and input feel, not only by the highest number
            in an overlay.
          </p>
          <p>
            The practical rule is simple: keep one profile for comfort and one profile for
            evidence. A comfort profile can prioritize Max refresh rate or a Custom target.
            An evidence profile should freeze resolution, graphics settings, Reflex,
            V-Sync, frame limiters, and the selected multiplier. That makes DLSS 4.5 Dynamic
            MFG settings easier to compare after later driver or game updates.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-frame-generation-vs-multi-frame-generation"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Frame Generation vs MFG</div>
            <p className="text-sm text-muted-foreground">
              Understand why 2X, 4X, 6X, Dynamic, and Fixed are not the same thing.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-games"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Current 4.5 games</div>
            <p className="text-sm text-muted-foreground">
              Check game-level support before changing global app settings.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-dynamic-mfg-6x"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Dynamic MFG 6X overview</div>
            <p className="text-sm text-muted-foreground">
              See what is available now and what still depends on title support.
            </p>
          </Link>
          <Link
            href="/dlss-5-system-requirements"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Hardware requirements</div>
            <p className="text-sm text-muted-foreground">
              Confirm whether your GPU tier can expose the feature path.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
          <p>
            Primary sources:{" "}
            <a href={NVIDIA_DLSS45_NOW} className="text-blue-400 hover:underline">
              NVIDIA 4.5 Dynamic MFG release notes
            </a>{" "}
            and{" "}
            <a href={NVIDIA_RTX_GAMES} className="text-blue-400 hover:underline">
              NVIDIA RTX games and features list
            </a>
            . App wording, supported games, and driver requirements can change with later
            releases.
            This DLSS 4.5 Dynamic MFG settings page should be read as a current guide, not
            a permanent driver contract.
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
