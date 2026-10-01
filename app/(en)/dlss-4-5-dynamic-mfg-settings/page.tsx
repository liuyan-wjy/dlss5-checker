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
  openGraph: {
    title: "DLSS 4.5 Dynamic MFG Settings: NVIDIA App Guide 2026",
    description:
      "Learn DLSS 4.5 Dynamic MFG settings in the NVIDIA App, including Dynamic, Fixed, Max refresh rate, Custom targets, 6X mode, V-Sync, and limiter caveats.",
    type: "article",
    url: "https://www.dlss5.net/dlss-4-5-dynamic-mfg-settings",
  },
  twitter: {
    card: "summary",
    title: "DLSS 4.5 Dynamic MFG Settings: NVIDIA App Guide 2026",
    description:
      "Learn DLSS 4.5 Dynamic MFG settings in the NVIDIA App, including Dynamic, Fixed, Max refresh rate, Custom targets, 6X mode, V-Sync, and limiter caveats.",
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
    caveat: "Supported with V-Sync or frame limiters only on the newer NVIDIA App path with 616.64 WHQL+ and Streamline 2.14+.",
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
  "Update the NVIDIA App and install a current Game Ready Driver. For Dynamic MFG with V-Sync or frame limiters, use 616.64 WHQL or later.",
  "Open Graphics, select your game, then scroll to Driver Settings. Start with a per-game profile so the change only affects that title.",
  "Find DLSS Override - Frame Generation Mode.",
  "Choose Dynamic for automatic shifting or Fixed for a selected multiplier.",
  "If Dynamic is selected, choose Max refresh rate or type a Custom target.",
  "Launch the game and confirm Frame Generation is enabled in the game menu when required.",
  "If the Dynamic tooltip still warns about V-Sync or frame limiters, reboot and check the downloaded Streamline version using the instructions below.",
];

const troubleRows = [
  {
    symptom: "No Dynamic option",
    likelyCause: "Confirm RTX 50 first. RTX 40 supports standard FG, but not Dynamic MFG. On RTX 50, check the current app, driver, and supported game profile.",
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
      "Older Dynamic MFG paths warned that V-Sync and frame limiters were not compatible. NVIDIA's newer September 2026 driver note says support requires the new NVIDIA App path, 616.64 WHQL or later, and Streamline 2.14 or later; if the old tooltip remains, the setup is not current.",
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
            NVIDIA App guide updated October 1, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            DLSS 4.5 Dynamic MFG Settings: NVIDIA App Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            On RTX 50, open NVIDIA App → Graphics → your game → Driver Settings →
            DLSS Override - Frame Generation Mode. Choose Dynamic to follow a frame-rate
            target or Fixed to keep one multiplier. The game must support the selected mode.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="text-2xl font-bold mb-3">Quick answer</h2>
          <p className="text-foreground/80 leading-relaxed">
            Open the NVIDIA App Graphics tab, choose your
            game, then use{" "}
            <strong>DLSS Override - Frame Generation Mode</strong>. Dynamic mode can target
            Max refresh rate or a Custom number. Fixed mode uses the selected multiplier.
            Dynamic MFG with V-Sync or frame rate limiters requires the newer NVIDIA App
            path, 616.64 WHQL or later, and Streamline 2.14 or later.
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
              Confirm an RTX 50 GPU and a compatible game before changing the profile.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-foreground/80">
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
          <h2 className="text-2xl font-bold text-foreground">V-Sync warning still showing? Check Streamline</h2>
          <p>
            NVIDIA&apos;s September 3 update requires the updated NVIDIA App, driver 616.64
            WHQL or newer, and Streamline 2.14 or newer for Dynamic MFG with V-Sync or
            frame limiters. NVIDIA says the Streamline component downloads automatically
            after a system reboot.
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Restart after updating the app and driver, then reopen your game&apos;s Dynamic setting.</li>
            <li>If the incompatibility tooltip remains, open <code className="break-all">C:\ProgramData\NVIDIA\NGX\models\nvngx_config.txt</code> in a text editor.</li>
            <li>Find <code>sl_dlss_g_0</code> and check for version <code>2.14.0</code> or later. Read the value; do not edit it to force compatibility.</li>
          </ol>
          <p>
            To use ordinary 2X Frame Generation instead, select <strong>Use 3D app setting</strong>
            in the override and enable FG in the game. To undo an override, restore that
            game profile&apos;s previous setting and restart the game.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">How to compare frame rate and responsiveness</h2>
          <p>
            Compare one variable at a time. If you are testing Dynamic mode, do not also
            change resolution, ray tracing, Reflex, V-Sync, frame limits, and game quality presets during
            the same run. Frame pacing can feel different even when average FPS looks good.
          </p>
          <p>
            For high-refresh monitors, Max refresh rate is the natural first test. For a
            more controlled benchmark, Custom can be easier because you decide the target
            before launching the game. Fixed mode is useful when you want a repeatable
            multiplier for side-by-side capture. Record the selected mode and target alongside
            resolution and ray-tracing settings.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="text-2xl font-bold mb-4">Recommended test matrix</h2>
          <p className="mb-5 text-foreground/80 leading-relaxed">
            Choose a starting point for your display or test. Record the base rendered
            frame rate separately from the FPS shown with generated frames; they measure
            different things.
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
            Repeat the comparison if a driver update or game patch changes the behavior.
            Profiles can change their available modes or recommended defaults.
          </p>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">
            When Fixed can be the better answer
          </h2>
          <p>
            Dynamic aims for a display target, but it is not automatically the best choice
            for every game. If the base frame rate is unstable, a mode that constantly changes multipliers can make
            the result harder to read. In that case, Fixed mode is often the cleaner first
            test because the multiplier stays known.
          </p>
          <p>
            Start with Dynamic when you are tuning for a high-refresh panel and the game
            already feels responsive. Start with Fixed when you are comparing visual
            artifacts, measuring latency, capturing video, or checking whether a specific
            title exposes 4X or 6X correctly. Judge the result by frame pacing, HUD stability,
            and input feel, not only by the highest number in an overlay.
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
            href="/dlss-4-5-supported-cards"
            className="rounded-lg border border-border p-4 hover:border-blue-400 transition-colors"
          >
            <div className="font-semibold mb-1">Hardware requirements</div>
            <p className="text-sm text-muted-foreground">
              Compare SR, RR, FG, and MFG eligibility across RTX generations.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-xl font-bold text-foreground mb-3">Sources and limits</h2>
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
              NVIDIA 4.5 Dynamic MFG release notes
            </a>{" "}
            and{" "}
            <a href={NVIDIA_RTX_GAMES} className="text-blue-400 hover:underline">
              NVIDIA RTX games and features list
            </a>
            . App wording, supported games, and driver requirements can change with later
            releases.
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
        <ArticleTrustBlock reviewedAt="2026-10-01" />
      </main>
    </>
  );
}
