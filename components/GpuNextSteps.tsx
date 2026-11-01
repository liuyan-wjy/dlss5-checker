import Link from "next/link";
import type { GPU } from "@/lib/gpu-search";

// Where each feature is switched on. Paths follow the NVIDIA App and game menus
// documented on the linked guides; a game's own menu can label them differently.
const FEATURE_HOW_TO: Record<string, { name: string; where: string; href?: string }> = {
  neural_rendering: {
    name: "DLSS 5 Neural Rendering",
    where: "In NBA 2K27: Features → Video Settings → DLSS Neural Rendering, then F9 to compare on and off.",
    href: "/games/nba-2k27-dlss-5#how-to-enable",
  },
  dlss_super_resolution: {
    name: "Super Resolution (DLSS 4.5 model)",
    where: "Pick a DLSS mode in the game's graphics menu. To force the newest model, use NVIDIA App → Graphics → your game → DLSS Override - Model Presets.",
    href: "/dlss-4-5-supported-cards",
  },
  dlaa: {
    name: "DLAA",
    where: "Choose DLAA in the game's DLSS mode list when you already have frame-rate headroom and want the sharpest image.",
  },
  ray_reconstruction: {
    name: "Ray Reconstruction",
    where: "Turn it on next to ray tracing or path tracing in the game. Supported games can also use the NVIDIA App model override.",
    href: "/dlss-4-5-ray-reconstruction",
  },
  frame_generation: {
    name: "Frame Generation (2X)",
    where: "Enable Frame Generation in the game's menu. Aim for a base frame rate of about 60 FPS first so input still feels responsive.",
    href: "/dlss-frame-generation-vs-multi-frame-generation",
  },
  multi_frame_generation_4x: {
    name: "Multi Frame Generation (3X/4X)",
    where: "Select 3X or 4X in a game that offers MFG, or set it in NVIDIA App → Graphics → DLSS Override - Frame Generation Mode.",
    href: "/dlss-frame-generation-vs-multi-frame-generation",
  },
  dynamic_mfg_6x: {
    name: "Dynamic MFG and 6X",
    where: "NVIDIA App → Graphics → your game → DLSS Override - Frame Generation Mode → Dynamic, then a refresh-rate target.",
    href: "/dlss-4-5-dynamic-mfg-settings",
  },
};

// Starting points derived from the published tests summarized on the system
// requirements page (September launch model, NVIDIA's October model is lighter).
const TIER_START: Record<string, string> = {
  flagship:
    "Independent 4K tests of the launch model showed the heaviest cost here too: GameGPU measured an RTX 5090 at 76 FPS with Neural Rendering versus 192 FPS without it, before frame generation. Start at 4K with Super Resolution Quality, and add Frame Generation only if the base rate stays near 60 FPS.",
  "high-end":
    "PC Gamer measured up to 73% lower frame rates on an RTX 5080 at 1440p Ultra with ray tracing in the worst scenes. Start at 1440p or 4K with Super Resolution Balanced or Performance, then decide whether frame generation is worth the latency.",
  "mid-high":
    "GameGPU lists the RTX 5070 as the lowest desktop card that averaged above 60 FPS (66 FPS) in its maximum ray tracing test with Neural Rendering and no frame generation. Start at 1440p with Super Resolution Quality and lower ray tracing first if the frame rate drops.",
  mid:
    "Published tests of this class are thin. Start at 1080p or 1440p with Super Resolution Quality, ray tracing lowered, and compare Neural Rendering on and off in the same replay before keeping it.",
  entry:
    "No independent test of entry-level cards with Neural Rendering was available when we checked. NVIDIA's high RTX 5060 figures include 6X frame generation; TechSpot estimates its rendered rate from NVIDIA's chart at about 43 FPS at 1080p. Start at 1080p, Super Resolution Quality, medium ray tracing, and expect to trade settings for the effect.",
};

type ReadNext = { href: string; title: string; copy: string };

function readNext(gpu: GPU): ReadNext[] {
  if (gpu.brand === "AMD" || gpu.brand === "Intel") {
    return [
      { href: "/dlss-5-amd", title: "Play DLSS 5 without an NVIDIA card", copy: "GeForce NOW requirements and why mods are not official support." },
      { href: "/dlss-5-games", title: "Games with DLSS 5", copy: "Which games are live, scheduled, or only announced." },
      { href: "/dlss-5-mods", title: "Unofficial DLSS 5 mods and their risks", copy: "What community tools do on cards NVIDIA does not support." },
    ];
  }
  switch (gpu.dlss5_support) {
    case "confirmed":
      return [
        { href: "/games/nba-2k27-dlss-5", title: "NBA 2K27 setup and fixes", copy: "Menu path, F9 toggle, greyed-out option checks, October model." },
        { href: "/dlss-5-system-requirements#benchmarks", title: "Published performance tests", copy: "What Neural Rendering costs on RTX 50 cards in independent tests." },
        { href: "/dlss-5-games", title: "Next DLSS 5 games", copy: "Hogwarts Legacy on November 5 and what else is scheduled." },
      ];
    case "planned":
      return [
        { href: "/dlss-5-rtx-40-series", title: "When RTX 40 might get DLSS 5", copy: "What NVIDIA has said and what the October model could change." },
        { href: "/dlss-4-5-games", title: "DLSS 4.5 games for your card", copy: "Features you can use now, game by game." },
        { href: "/dlss-5-mods", title: "Unofficial DLSS 5 mods and their risks", copy: "What community tools do on cards NVIDIA does not support." },
      ];
    case "unsupported":
      return [
        { href: "/dlss-supported-cards", title: "Every DLSS feature by generation", copy: "What your RTX generation keeps and what it cannot run." },
        { href: "/dlss-4-5-ray-reconstruction", title: "Ray Reconstruction on your card", copy: "The newest DLSS feature that still covers all RTX GPUs." },
        { href: "/dlss-5-mods", title: "Unofficial DLSS 5 mods and their risks", copy: "What community tools do on cards NVIDIA does not support." },
      ];
    default:
      return [
        { href: "/dlss-supported-cards", title: "Which cards support DLSS", copy: "The cheapest generations that unlock each DLSS feature." },
        { href: "/dlss-5-amd", title: "Cloud play with GeForce NOW", copy: "Run DLSS 5 games on NVIDIA's servers instead." },
        { href: "/dlss-5-system-requirements", title: "DLSS 5 system requirements", copy: "GPU, driver, and Windows needs for local play." },
      ];
  }
}

function shortName(name: string) {
  return name.replace(/^NVIDIA (GeForce )?|^AMD Radeon |^Intel Arc /, "");
}

export default function GpuNextSteps({ gpu }: { gpu: GPU }) {
  const features = [...gpu.dlss5_features, ...gpu.current_dlss_features].filter(
    (feature) => FEATURE_HOW_TO[feature],
  );
  const name = shortName(gpu.name);
  const isNvidia = gpu.brand !== "AMD" && gpu.brand !== "Intel";
  const tierStart = gpu.dlss5_support === "confirmed" ? TIER_START[gpu.tier] : undefined;

  return (
    <section className="mt-5 space-y-5 border-t border-border pt-5 text-left text-sm leading-relaxed">
      {features.length > 0 && (
        <div>
          <h3 className="mb-2 text-base font-semibold">How to turn on each feature on your {name}</h3>
          <ul className="space-y-2">
            {features.map((feature) => {
              const howTo = FEATURE_HOW_TO[feature];
              return (
                <li key={feature} className="rounded-md border border-border/60 p-3">
                  <p className="font-medium text-foreground">{howTo.name}</p>
                  <p className="text-muted-foreground">{howTo.where}</p>
                  {howTo.href && (
                    <Link href={howTo.href} className="text-blue-400 hover:underline">
                      Step-by-step guide →
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div>
        <h3 className="mb-2 text-base font-semibold">Games to try</h3>
        {gpu.dlss5_support === "confirmed" ? (
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              <Link href="/games/nba-2k27-dlss-5" className="text-blue-400 hover:underline">NBA 2K27</Link>
              {" "}— live now, using NVIDIA&apos;s faster October model since October 16, 2026.
            </li>
            <li>Hogwarts Legacy — DLSS 5 update scheduled for November 5, 2026.</li>
            <li>Where Winds Meet — scheduled for late November 2026, no exact day yet.</li>
          </ul>
        ) : isNvidia && gpu.dlss5_support !== "none" ? (
          <p className="text-muted-foreground">
            DLSS 5 games will not show the Neural Rendering option on this card yet, but the
            features above work in hundreds of DLSS games. The{" "}
            <Link href="/dlss-4-5-games" className="text-blue-400 hover:underline">DLSS 4.5 games list</Link>{" "}
            shows which titles support them, and the{" "}
            <Link href="/dlss-5-games" className="text-blue-400 hover:underline">DLSS 5 tracker</Link>{" "}
            shows what you would gain later.
          </p>
        ) : (
          <p className="text-muted-foreground">
            DLSS 5 games run locally only on supported NVIDIA RTX hardware. To try NBA 2K27
            with Neural Rendering on this PC, the official route is GeForce NOW Ultimate on
            NVIDIA&apos;s RTX 5080 cloud rigs, where the region and plan allow it.
          </p>
        )}
      </div>

      {tierStart && (
        <div>
          <h3 className="mb-2 text-base font-semibold">A realistic starting point</h3>
          <p className="text-muted-foreground">{tierStart}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Based on published third-party tests of NBA 2K27, not our own measurements.
            NVIDIA says the October model is up to 1.4x faster, so these numbers are a
            conservative floor.{" "}
            <Link href="/dlss-5-system-requirements#benchmarks" className="text-blue-400 hover:underline">
              See the test summary
            </Link>
            .
          </p>
        </div>
      )}

      <div>
        <h3 className="mb-2 text-base font-semibold">Read next for your card</h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {readNext(gpu).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-border p-3 transition-colors hover:border-blue-400"
            >
              <span className="block font-medium text-foreground">{item.title}</span>
              <span className="block text-xs text-muted-foreground">{item.copy}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
