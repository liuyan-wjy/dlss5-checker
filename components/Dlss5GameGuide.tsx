import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE_EN } from "@/lib/og-image";

export type Dlss5GameGuideKey = "nba-2k27";

type GameGuide = {
  name: string;
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  fastAnswer: string;
  availability: string;
  nextProof: string;
  confirmed: string[];
  context: string[];
  visualAreas: Array<{
    title: string;
    detail: string;
  }>;
  playerAdvice: string[];
  setupSteps?: string[];
  troubleshooting?: Array<{
    issue: string;
    fix: string;
  }>;
  tradeoffs?: Array<{
    feature: string;
    role: string;
    playerCheck: string;
  }>;
  extraSections?: Array<{
    title: string;
    paragraphs: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  sources: Array<{
    label: string;
    href: string;
  }>;
};

const NVIDIA_DLSS5_ANNOUNCEMENT =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/";
const NVIDIA_NBA_DRIVER =
  "https://www.nvidia.com/en-in/geforce/news/nba-2k27-dlss-5-3d-guided-neural-rendering-geforce-game-ready-driver/";
const NVIDIA_GFN_SEPTEMBER =
  "https://blogs.nvidia.com/blog/geforce-now-thursday-september-2026-games-list/";
const NVIDIA_RTX40_UPDATE =
  "https://www.nvidia.com/en-us/geforce/forums/nvidia-app/129/583738/dlss-5-faq-932026/";
const NVIDIA_OCTOBER_MODEL =
  "https://www.nvidia.com/en-us/geforce/news/dlss-5-faster-ai-model-hogwarts-legacy-rtx-spark-laptops/";
const PCGAMER_OCTOBER_TEST =
  "https://www.pcgamer.com/hardware/i-jammed-nvidias-new-dlss-5-october-update-model-into-the-rtx-spark-and-its-25-percent-faster-at-1440p/";
const TECHPOWERUP_61742 =
  "https://www.techpowerup.com/353425/nvidia-releases-geforce-617-42-whql-game-ready-drivers";
const NBA_2K_SUPPORT =
  "https://support.nba2k.com/hc/en-us/articles/55077998389267-NBA-2K27-NVIDIA-DLSS-5";

const gameGuides: Record<Dlss5GameGuideKey, GameGuide> = {
  "nba-2k27": {
    name: "NBA 2K27",
    canonical: "/games/nba-2k27-dlss-5",
    metaTitle: "NBA 2K27 DLSS 5: Settings, GPUs, Driver, and RTX 40 Status",
    metaDescription:
      "NBA 2K27 is the first live DLSS 5 game. Check the RTX 50 requirement, driver, DLSS Neural Rendering setting, F9 toggle, October faster model, and RTX 40 status.",
    eyebrow: "Game support guide · Reviewed October 18, 2026",
    title: "NBA 2K27 DLSS 5: Settings, GPUs, Driver, and RTX 40 Status",
    description:
      "Enable DLSS 5 in NBA 2K27, compare image quality with F9, and check what to do if the setting is missing. These steps apply to local RTX 50 desktop and laptop GPUs; GeForce NOW has separate hardware and regional requirements.",
    fastAnswer:
      "NBA 2K27 supports DLSS 5 now on GeForce RTX 50 Series desktop and laptop GPUs. NVIDIA's driver page names the 616.64 WHQL Game Ready Driver and the in-game path Features → Video Settings → DLSS Neural Rendering; NVIDIA's DLSS 5 launch article says F9 toggles Neural Rendering during gameplay and replays. On October 16, 2026, NBA 2K27 became the first game to receive NVIDIA's faster October DLSS 5 model.",
    availability:
      "Available now, but the current local-PC support is limited to RTX 50 Series GPUs. RTX 40 support is planned after RTX 50 tuning work. As of October 18, 2026, NVIDIA still has not published an RTX 40 date, and the October model update names RTX 50, RTX Spark laptops, and GeForce NOW only.",
    nextProof:
      "For a local PC, the practical proof is an RTX 50 desktop or laptop GPU, driver 616.64 or newer, an updated NBA 2K27 build, and the DLSS Neural Rendering option visible in Video Settings.",
    confirmed: [
      "NVIDIA calls NBA 2K27 the debut game for DLSS 5 3D-guided Neural Rendering.",
      "The initial local support is for GeForce RTX 50 Series desktop and laptop GPUs.",
      "The official Game Ready Driver article names version 616.64 WHQL for NBA 2K27.",
      "The NBA 2K27 setting path is Features → Video Settings → DLSS Neural Rendering, with F9 used in-game to toggle Neural Rendering during gameplay and replays.",
    ],
    context: [
      "NBA 2K27's repeated camera angles make lighting and material changes easier to compare. Use the same court, players, and camera for both settings. Arena lights, polished wood, skin, jerseys, and hair offer useful detail to inspect, while fast camera pans and overlapping players help reveal whether that detail stays stable in motion.",
      "NVIDIA describes DLSS 5 3D-guided Neural Rendering as a rendering-stage feature, not a generic frame-rate mode. The model uses the game frame, color data, motion vectors, and 3D scene guidance to improve lighting and material presentation while staying tied to what the game is already rendering. That matters for NBA 2K27 because the feature should be judged on skin tone, sweat and fabric response, court reflections, arena lights, rim and backboard materials, hair, crowd edges, and player motion. It should not be judged only by whether the frame counter rises.",
      "Neural Rendering, Super Resolution, and Frame Generation solve different problems: lighting and material presentation, resolution reconstruction, and displayed smoothness. Change one option at a time so you can identify which feature affects the image or input feel. The comparison table below explains what to check for each option.",
      "The second distinction is local PC versus GeForce NOW. If you stream NBA 2K27 through GeForce NOW Ultimate in a region served by NVIDIA-operated RTX 5080 rigs, the cloud machine may provide the DLSS 5 path even when your own laptop, handheld, or desktop does not have an RTX 50 GPU. That does not upgrade the hardware inside your device. It only means the remote gaming session is running on supported cloud hardware and sending the video stream back to you.",
    ],
    visualAreas: [
      {
        title: "Skin, jerseys, and hair",
        detail:
          "Use close-ups, free throws, and replay angles to check whether skin detail, sweat, jersey fabric, and hair remain stable without waxy or over-sharp edges.",
      },
      {
        title: "Court and arena lighting",
        detail:
          "Look at polished wood, painted lines, reflections near the key, LED boards, rim materials, and bright overhead lights during camera pans.",
      },
      {
        title: "Motion and broadcast cameras",
        detail:
          "Fast breaks, player cuts, crowd edges, and quick camera movement reveal whether the visual layer stays clean while the game is in motion.",
      },
    ],
    playerAdvice: [
      "Install NBA 2K27 updates through the normal game launcher and use NVIDIA's official driver path. Do not install a third-party DLL or a file claiming to unlock DLSS 5. NVIDIA's own driver article already gives the supported route, and unofficial downloads add risk without proving compatibility.",
      "Start by turning on DLSS Neural Rendering without changing every other graphics option. Keep resolution, render scale, Super Resolution mode, Frame Generation, refresh rate, and camera angle as stable as possible. Use F9 to compare the feature during the same kind of scene, then decide whether the visual result is worth keeping for your display and preference.",
    ],
    setupSteps: [
      "Update NBA 2K27 through Steam or the store you use, then restart the game after the update finishes.",
      "Install NVIDIA GeForce Game Ready Driver 616.64 WHQL or a newer driver that explicitly carries the NBA 2K27 DLSS 5 support path.",
      "Confirm the game is running on a GeForce RTX 50 Series desktop or laptop GPU for local DLSS 5 support.",
      "From the main menu, open Features → Video Settings and look for DLSS Neural Rendering. Enable it there rather than assuming a normal DLSS Super Resolution label is the same feature.",
      "Use F9 in NBA 2K27 to toggle Neural Rendering during gameplay or replays, then judge the same arena, camera angle, and motion instead of comparing unrelated scenes.",
    ],
    troubleshooting: [
      {
        issue: "DLSS Neural Rendering is greyed out",
        fix: "A disabled control alone does not identify the cause. Check the same GPU, game-update, and driver requirements as a missing control. On a supported RTX 50 PC, restart after updates and record the game build, driver version, active GPU, and a screenshot for 2K Support if it stays disabled. This is a diagnostic checklist, not a verified workaround for a particular game bug.",
      },
      {
        issue: "DLSS Neural Rendering is missing",
        fix: "Check that the active GPU is an RTX 50 Series card, the 616.64 WHQL driver or newer is installed, NBA 2K27 is fully updated, and the game is not using an integrated GPU path.",
      },
      {
        issue: "The game shows DLSS, but not DLSS 5",
        fix: "Treat the visible label literally. Super Resolution, Frame Generation, and DLSS Neural Rendering are separate options; a generic DLSS label does not prove the DLSS 5 feature is active.",
      },
      {
        issue: "F9 does not toggle Neural Rendering",
        fix: "Test F9 during gameplay or a replay, after enabling Neural Rendering under Features → Video Settings. If the keyboard uses F9 for a media action, use its function-key mode. Test the menu switch too: if that works but F9 does not, record a keyboard or shortcut issue; if neither works, return to the GPU, driver, and game checks. F9 is not a global DLSS shortcut.",
      },
      {
        issue: "A GeForce NOW session behaves differently from the local install",
        fix: "Check whether the stream is on GeForce NOW Ultimate in a supported NVIDIA-operated RTX 5080 region. Cloud hardware support and your local GPU support are separate.",
      },
    ],
    tradeoffs: [
      {
        feature: "DLSS Neural Rendering",
        role: "Improves lighting and material presentation using DLSS 5's 3D-guided model.",
        playerCheck:
          "Compare skin, jersey fabric, polished court reflections, arena lights, and moving player edges.",
      },
      {
        feature: "DLSS Super Resolution",
        role: "Reconstructs the final image from a lower internal resolution.",
        playerCheck:
          "Check sharpness, text overlays, scoreboard clarity, and whether lower render cost is worth any softness.",
      },
      {
        feature: "Frame Generation",
        role: "Improves displayed smoothness on supported hardware by generating additional frames.",
        playerCheck:
          "Check input feel, latency-sensitive timing, camera pans, and whether your base frame rate is already stable.",
      },
    ],
    extraSections: [
      {
        title: "October 2026 update: the faster DLSS 5 model",
        paragraphs: [
          "NVIDIA announced a revised DLSS 5 Neural Rendering model in October 2026 and said it debuts in NBA 2K27 on October 16 for GeForce RTX 50 Series GPUs, RTX Spark laptops, and GeForce NOW. NVIDIA's figures: roughly half the GPU cost of the September model, a model about 24% smaller (around 118 million parameters), about 20% less VRAM at 4K, and up to 1.4x higher frame rates in NBA 2K27 with Neural Rendering enabled compared with the launch model. These are NVIDIA's numbers, measured on its own test systems.",
          "The first independent check we found is from PC Gamer, which tested a preview build of the new model on an RTX Spark laptop and reported about 25% higher frame rates at 1440p, with a noticeably smaller performance hit than the September model. That is one outlet, one game, and one laptop, so treat it as an early signal rather than a result for every RTX 50 card. The cost of turning Neural Rendering on is lower than at launch, but it has not disappeared.",
          "For scale: independent tests of the September model, from GameGPU, TweakTown, and PC Gamer, measured frame rates about 50–73% lower with Neural Rendering on and frame generation off, for example 192 FPS dropping to 76 FPS on an RTX 5090 at 4K. A 1.4x improvement on numbers like that still leaves a large cost, so treat Neural Rendering as a quality option you pay for, not a free upgrade. Our system requirements page keeps a table of the published tests.",
          "We could not find a separate switch for the new model in the sources available on October 18. NVIDIA says the faster model ships with the NBA 2K27 update and will be the default for future DLSS 5 games. In practice: keep NBA 2K27 and your NVIDIA driver up to date, then repeat the same-scene on/off comparison below. If you tested Neural Rendering in September and turned it off because of the frame-rate cost, test it again.",
        ],
      },
      {
        title: "Driver and Windows 10 note",
        paragraphs: [
          "616.64 WHQL was the launch driver. The newest Game Ready Driver we found on October 18 is 617.42 WHQL, released October 6, 2026. Its Game Ready list targets other new games, but any current official driver keeps the NBA 2K27 DLSS 5 path. Get it from the NVIDIA App or NVIDIA's driver page, never from a third-party download site.",
          "If your gaming PC still runs Windows 10, plan ahead. NVIDIA has said October 2026 brings the last Game Ready Driver for Windows 10, and Game Ready and Studio drivers from November require Windows 11. Windows 10 keeps security-only driver updates, but future game fixes, including later DLSS 5 game support, may need Windows 11.",
        ],
      },
      {
        title: "Game build and driver: what is actually verified",
        paragraphs: [
          "The launch driver documented by NVIDIA is 616.64 WHQL; that is a launch reference, not a claim that it is the newest driver today. Use the current official Game Ready Driver for your GPU and update NBA 2K27 through your store. 2K does not list a required game-build number in its setup article. Record your installed build when contacting support.",
          "For a useful support report, record your exact GPU (including Laptop GPU), installed driver version, store and game build shown on your PC, and whether you are playing locally or through GeForce NOW. Keep these details with a screenshot of the setting. These checks follow official setup documentation; they have not been tested on our own hardware.",
        ],
      },
      {
        title: "Compare Neural Rendering on vs off in the same scene",
        paragraphs: [
          "Pick one replay or practice scene and keep the arena, camera, resolution, graphics preset, Super Resolution mode, Frame Generation, and Reflex settings fixed. Start with Neural Rendering off, note the frame rate and input feel, then switch only Neural Rendering on using the menu or F9 and repeat the same camera movement. Compare skin, hair, jersey edges, court reflections, and moving player outlines rather than two unrelated screenshots.",
          "Repeat the off/on comparison once to check that an arena or camera change did not explain the result. Keep Frame Generation off for a separate base-frame-rate comparison if you want to measure render cost; a counter with generated frames enabled is not the same measurement. Record the game build and driver with your results. If Neural Rendering makes play less responsive or the image is not preferable, leave it off. 2K explicitly allows disabling the optional effect when performance drops affect play.",
        ],
      },
      {
        title: "What to watch in motion",
        paragraphs: [
          "Check player outlines during fast camera pans, crowd edges, and jersey seams. A sharper still image can hide trails or shimmering that only appear in motion. After the controlled comparison, try a second arena: different lighting may change how noticeable the effect is.",
          "Watch shot timing and responsiveness as well as the FPS counter. Generated frames can make motion look smoother without a matching improvement in input response. If NR leaves too little performance headroom, lower other graphics settings or compare Super Resolution modes separately.",
        ],
      },
      {
        title: "RTX 40 status and upgrade timing",
        paragraphs: [
          "RTX 40 cards are not the current local DLSS 5 target for NBA 2K27 in the sources checked here, and the October model update did not add them. NVIDIA has indicated that RTX 40 support is planned after RTX 50 tuning work, but no public date is available. That means an RTX 4090 can still be excellent for many DLSS 4 features while not being a confirmed local DLSS 5 NBA 2K27 card today.",
          "An RTX 40 card does not need replacing just because it lacks this one setting today. Before upgrading for NBA 2K27, compare the visual difference, measured performance, and total cost on the hardware you are considering. Waiting for RTX 40 support is an option, but there is no announced date to plan around. Current local DLSS 5 support covers RTX 50 desktop and laptop GPUs.",
        ],
      },
    ],
    faq: [
      {
        question: "Does NBA 2K27 support DLSS 5 now?",
        answer:
          "Yes. NVIDIA says NBA 2K27 is the debut game for DLSS 5 3D-guided Neural Rendering, available on GeForce RTX 50 Series desktop and laptop GPUs.",
      },
      {
        question: "Which driver do I need for NBA 2K27 DLSS 5?",
        answer:
          "NVIDIA's Game Ready Driver article names the GeForce Game Ready Driver 616.64 WHQL for NBA 2K27 DLSS 5 support. Use that driver or a newer official driver that keeps the support path.",
      },
      {
        question: "Where is the NBA 2K27 DLSS 5 setting?",
        answer:
          "2K points players to Features → Video Settings → DLSS Neural Rendering. NVIDIA's DLSS 5 launch article says F9 toggles Neural Rendering during gameplay and replays in NBA 2K27.",
      },
      {
        question: "Is DLSS 5 in NBA 2K27 faster after the October update?",
        answer:
          "NVIDIA says the October model, which debuted in NBA 2K27 on October 16, 2026, costs about half as much GPU time as the September model and raises frame rates by up to 1.4x with Neural Rendering on. PC Gamer measured about 25% at 1440p on an RTX Spark laptop. Results on your PC depend on GPU, resolution, and settings.",
      },
      {
        question: "Does NBA 2K27 DLSS 5 work on RTX 40?",
        answer:
          "Not yet. RTX 40 support is planned after RTX 50 tuning, but as of October 18, 2026 NVIDIA has not provided a public availability date, and the October model update covers RTX 50, RTX Spark laptops, and GeForce NOW only.",
      },
      {
        question: "Is GeForce NOW support the same as local PC support?",
        answer:
          "No. GeForce NOW Ultimate can run supported cloud sessions on RTX 5080-class rigs in NVIDIA-operated supported regions. That does not mean the GPU inside your local device supports DLSS 5.",
      },
      {
        question: "Should I download a DLL to unlock DLSS 5 in NBA 2K27?",
        answer:
          "No. Use official game updates and NVIDIA drivers. This guide does not recommend unofficial DLL downloads because they do not prove support and can create security or stability risk.",
      },
    ],
    sources: [
      {
        label: "2K official NBA 2K27 DLSS 5 settings and performance guidance",
        href: NBA_2K_SUPPORT,
      },
      {
        label: "NVIDIA DLSS 5 launch article",
        href: NVIDIA_DLSS5_ANNOUNCEMENT,
      },
      {
        label: "NVIDIA NBA 2K27 Game Ready Driver 616.64 note",
        href: NVIDIA_NBA_DRIVER,
      },
      {
        label: "NVIDIA October 2026 DLSS 5 model update (Hogwarts Legacy, RTX Spark)",
        href: NVIDIA_OCTOBER_MODEL,
      },
      {
        label: "PC Gamer test of the October DLSS 5 model",
        href: PCGAMER_OCTOBER_TEST,
      },
      {
        label: "GeForce 617.42 WHQL driver release (TechPowerUp)",
        href: TECHPOWERUP_61742,
      },
      {
        label: "NVIDIA GeForce NOW September games update",
        href: NVIDIA_GFN_SEPTEMBER,
      },
      {
        label: "NVIDIA RTX 40 support update",
        href: NVIDIA_RTX40_UPDATE,
      },
    ],
  },
};

export function createDlss5GameMetadata(key: Dlss5GameGuideKey): Metadata {
  const guide = gameGuides[key];
  const url = `https://www.dlss5.net${guide.canonical}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: guide.canonical,
    },
    openGraph: {
      images: [OG_IMAGE_EN],
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      url,
    },
    twitter: {
      card: "summary",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default function Dlss5GameGuide({ gameKey }: { gameKey: Dlss5GameGuideKey }) {
  const guide = gameGuides[gameKey];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
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
        name: "DLSS 5 Games",
        item: "https://www.dlss5.net/dlss-5-games",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.name,
        item: `https://www.dlss5.net${guide.canonical}`,
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

      <main className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            DLSS 5 Checker
          </Link>
          <span className="mx-2">/</span>
          <Link href="/dlss-5-games" className="transition-colors hover:text-foreground">
            Games
          </Link>
          <span className="mx-2">/</span>
          <span>{guide.name}</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">{guide.eyebrow}</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {guide.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{guide.description}</p>
          {guide.setupSteps && (
            <a href="#how-to-enable" className="mt-4 inline-block text-blue-400 underline underline-offset-4">
              Jump to setup steps
            </a>
          )}
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="mb-2 font-bold">Fast answer</h2>
            <p className="text-sm leading-relaxed text-foreground/80">{guide.fastAnswer}</p>
          </div>
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
            <h2 className="mb-2 font-bold">Available today?</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              {guide.availability}
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-2 font-bold">What proves the update</h2>
            <p className="text-sm leading-relaxed text-foreground/80">{guide.nextProof}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">What is confirmed right now</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guide.confirmed.map((item) => (
              <div key={item} className="rounded-lg border border-border p-4">
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="mr-2 text-green-400">✓</span>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">
            What DLSS 5 changes in {guide.name}
          </h2>
          {guide.context.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">The visual areas worth testing</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {guide.visualAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-border p-5">
                <h3 className="mb-2 font-semibold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Practical advice for players</h2>
          {guide.playerAdvice.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {guide.setupSteps ? (
          <section className="mb-10 rounded-lg border border-border p-5">
            <h2 id="how-to-enable" className="mb-4 scroll-mt-24 text-2xl font-bold">How to enable it</h2>
            <ol className="space-y-3 text-sm leading-relaxed text-foreground/80">
              {guide.setupSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-300">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {guide.tradeoffs ? (
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">DLSS options are not the same thing</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-4 py-3 text-left font-semibold">Option</th>
                    <th className="px-4 py-3 text-left font-semibold">What it does</th>
                    <th className="px-4 py-3 text-left font-semibold">What to check</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.tradeoffs.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border/50 ${index % 2 ? "bg-muted/15" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.role}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.playerCheck}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {guide.troubleshooting ? (
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">If the option does not show up</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {guide.troubleshooting.map((item) => (
                <div key={item.issue} className="rounded-lg border border-border p-5">
                  <h3 className="mb-2 font-semibold">{item.issue}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {guide.extraSections?.map((section) => (
          <section key={section.title} className="mb-10 space-y-4 text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-xl font-bold">Buying advice</h2>
          <p className="leading-relaxed text-foreground/80">
            If DLSS 5 in this specific game is the deciding feature, buy against the
            currently verified hardware path rather than a rumor. If you need an upgrade
            for broader play, judge it by the game&apos;s real performance, VRAM needs,
            ray-tracing workload, and the DLSS features that are already verified for your
            GPU.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-5-games"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">All announced DLSS 5 games</div>
            <p className="text-sm text-muted-foreground">
              Check the full list and the evidence level for each title.
            </p>
          </Link>
                      <Link href="/dlss-5-download" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
            <div className="mb-1 font-semibold">Official DLSS 5 download and setup paths</div>
            <p className="text-sm text-muted-foreground">Check the driver, game update, and GPU together before looking for a missing setting.</p>
          </Link>
          <Link
            href="/dlss-5-supported-cards"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">DLSS 5 GPU support</div>
            <p className="text-sm text-muted-foreground">
              Separate game integration from generation-by-generation GPU support.
            </p>
          </Link>
          <Link
            href="/dlss-5-neural-rendering"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">How Neural Rendering works</div>
            <p className="text-sm text-muted-foreground">
              Understand the input data, developer controls, and technical boundaries.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-ray-reconstruction"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">DLSS 4.5 Ray Reconstruction</div>
            <p className="text-sm text-muted-foreground">
              See the August release status, supported GPUs, and announced games.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Sources and limits</h2>
          <p className="mb-3">
            This page uses first-party NVIDIA material and labels unreleased behavior
            separately from current game features. Settings, driver requirements, and GPU
            support can change after later game patches, driver updates, or hardware-support updates.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {guide.sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="text-blue-400 hover:underline"
                rel="noreferrer"
              >
                {source.label}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Frequently asked questions</h2>
          <div className="space-y-5">
            {guide.faq.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
