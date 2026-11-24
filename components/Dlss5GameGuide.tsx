import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";
import UpdateAlertForm from "@/components/UpdateAlertForm";
import { OG_IMAGE_EN, OG_IMAGE_HOGWARTS, OG_IMAGE_WHERE_WINDS_MEET } from "@/lib/og-image";

export type Dlss5GameGuideKey = "nba-2k27" | "hogwarts-legacy" | "where-winds-meet";

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
    chart?: {
      caption: string;
      unit: string;
      offLabel: string;
      onLabel: string;
      rows: Array<{ label: string; off: number; on: number }>;
      source: { label: string; href: string };
    };
  }>;
  video?: {
    id: string;
    title: string;
    channel: string;
    caption: string;
  };
  ogImage?: { url: string; width: number; height: number; alt: string };
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
const VIDEOCARDZ_HOGWARTS_FACES =
  "https://videocardz.com/newz/nvidia-shows-updated-dlss-5-in-hogwarts-legacy-and-the-faces-look-very-different-from-earlier-demo";
const HOTHARDWARE_HOGWARTS_PC =
  "https://hothardware.com/news/hogwarts-legacy-pc-tweaks";
const PCGH_HOGWARTS_TECH =
  "https://www.pcgameshardware.de/Hogwarts-Legacy-Spiel-73015/Specials/Hogwarts-Legacy-Tech-Test-Benchmarks-Raytracing-1413184/2/";

// Text that can only be confirmed once a game's DLSS 5 patch is public. A guide
// containing this marker must not ship: the production build fails until every
// marker is replaced (set ALLOW_LAUNCH_PLACEHOLDERS=1 to preview a draft build).
export const LAUNCH_MARKER = "[LAUNCH DAY:";

const NVIDIA_HOGWARTS_LAUNCH =
  "https://www.nvidia.com/en-us/geforce/news/hogwarts-legacy-war-thunder-dlss-5-3d-guided-neural-rendering/";
const NVIDIA_DRIVER_62114 =
  "https://www.nvidia.com/en-us/geforce/news/world-of-warcraft-forever-geforce-rtx-spark-game-ready-driver/";
const PORTKEY_HOGWARTS_DLSS5 =
  "https://portkeygamessupport.wbgames.com/hc/en-us/articles/56349775286419-Enabling-NVIDIA-DLSS-5-Neural-Rendering-in-Hogwarts-Legacy-PC-Steam-EGS-or-Windows-PC";
const DSOGAMING_HOGWARTS_DLSS5 =
  "https://www.dsogaming.com/articles/hogwarts-legacy-nvidia-dlss-5-benchmarks-comparisons/";
const PCWORLD_HOGWARTS_DLSS5 =
  "https://www.pcworld.com/article/3277879/nvidias-dlss-5-learned-a-new-spell-for-hogwarts-legacy-restraint.html";

const NVIDIA_DRIVER_62124 =
  "https://www.nvidia.com/en-us/geforce/news/warhammer-40000-dawn-of-war-4-geforce-rtx-spark-game-ready-driver/";
const WWM_OFFICIAL_DLSS5 =
  "https://www.wherewindsmeetgame.com/news/official/1123DLSS5.html";
const DSOGAMING_WWM_DLSS5 =
  "https://www.dsogaming.com/articles/where-winds-meet-has-the-best-official-dlss-5-implementation/";
const GAMEGPU_WWM_DLSS5 =
  "https://en.gamegpu.com/test-gpu/action-fps-tps/where-winds-meet-benchmarki-videokart-geforce-rtx-50-s-dlss-5";

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
          "For scale: independent tests of the September model, from GameGPU, TweakTown, and PC Gamer, measured frame rates about 50–73% lower with Neural Rendering on and frame generation off, for example 162 FPS dropping to 68 FPS on an RTX 5090 at 4K in GameGPU's test. A 1.4x improvement on numbers like that still leaves a large cost, so treat Neural Rendering as a quality option you pay for, not a free upgrade. Our system requirements page keeps a table of the published tests.",
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
  "hogwarts-legacy": {
    name: "Hogwarts Legacy",
    canonical: "/games/hogwarts-legacy-dlss-5",
    metaTitle: "Hogwarts Legacy DLSS 5: How to Enable, GPUs, and Performance",
    metaDescription:
      "Hogwarts Legacy has DLSS 5 since November 5, 2026 on RTX 50, RTX Spark, and GeForce NOW. Where the setting is, what it changes, the FPS cost, and RTX 40 status.",
    eyebrow: "Game support guide · Reviewed November 6, 2026",
    ogImage: OG_IMAGE_HOGWARTS,
    title: "Hogwarts Legacy DLSS 5: How to Enable, GPUs, and Performance",
    description:
      "Turn on DLSS 5 Neural Rendering in Hogwarts Legacy, see what it changes in the castle and on characters, and check what it costs before you keep it. These steps apply to local RTX 50 and RTX Spark PCs; GeForce NOW has its own requirements.",
    fastAnswer:
      "Hogwarts Legacy supports DLSS 5 Neural Rendering since its November 5, 2026 update on GeForce RTX 50 desktop and laptop GPUs, RTX Spark PCs, and GeForce NOW Ultimate. Turn it on in Game Settings → Display Settings: set Upscale Type to NVIDIA DLSS, then switch on Neural Rendering. Shift+Alt+B toggles it in-game. NVIDIA's driver for the update is Game Ready 621.14 WHQL.",
    availability:
      "Yes. Available since November 5, 2026 on RTX 50 and RTX Spark, and through GeForce NOW Ultimate. RTX 40 is not included; NVIDIA says RTX 40 support comes later but has not given a date. Consoles do not get DLSS 5.",
    nextProof:
      "For a local PC: an RTX 50 or RTX Spark GPU, NVIDIA driver 621.14 or newer, the November 5 game update, and the Neural Rendering switch visible in Display Settings once Upscale Type is set to NVIDIA DLSS.",
    confirmed: [
      "DLSS 5 went live in Hogwarts Legacy on November 5, 2026, the second game after NBA 2K27.",
      "NVIDIA lists GeForce RTX 50 Series desktop and laptop GPUs, RTX Spark PCs, and GeForce NOW Ultimate. RTX 40 is not on the list.",
      "WB Games' support page gives the setting path: Game Settings → Display Settings → Upscale Type: NVIDIA DLSS → Neural Rendering, with Shift+Alt+B as the in-game toggle.",
      "NVIDIA's Game Ready Driver 621.14 WHQL, released November 4, adds support for the update.",
      "The update uses NVIDIA's faster October 2026 model, which NVIDIA says needs about half the GPU time of the launch model.",
      "NVIDIA says Avalanche Software used the DLSS 5 SDK controls to keep the game's art style. Neural Rendering is added alongside the game's existing Super Resolution, Multi Frame Generation, and Ray Reconstruction options rather than replacing them.",
    ],
    context: [
      "Hogwarts Legacy is a very different test from NBA 2K27. Instead of a brightly lit arena, most of the game happens in candlelit stone halls, dim dungeons, and changing outdoor weather. Neural Rendering works on lighting and materials, so the places to look are how stone, wood, fabric, and skin respond to warm candlelight, and whether dark scenes keep their mood instead of being flattened or brightened.",
      "Faces were the most criticized part of NVIDIA's March 2026 DLSS 5 demo, because the model visibly reshaped characters. Coverage of NVIDIA's updated Hogwarts Legacy comparison images in October described much smaller changes to faces than in March. That matches what the developer controls are for: studios can mask objects and limit how strongly the effect applies. First reviews of the shipped patch agree: PCWorld described the result as restrained, and DSOGaming found Hogsmeade clearly improved but less transformative than it hoped, with thin white outlines around some characters. Check close-ups and character edges in your own scenes before you keep it on.",
      "Neural Rendering, Super Resolution, Ray Reconstruction, and Frame Generation solve different problems: lighting and material presentation, resolution, ray-traced denoising, and displayed smoothness. Change one at a time so you can tell which option changed the image or the feel. The table below explains what to check for each.",
      "GeForce NOW is separate from your own PC. If you stream Hogwarts Legacy on a supported GeForce NOW tier, the cloud machine can run DLSS 5 even when your own laptop or desktop cannot. That does not change what your local GPU supports.",
    ],
    visualAreas: [
      {
        title: "Great Hall and candlelit interiors",
        detail:
          "Warm, low light on stone, wood, and banners is where lighting and material changes are easiest to see. Check that shadows stay deep and the scene does not look washed out.",
      },
      {
        title: "Faces, hair, and robes",
        detail:
          "Use conversation close-ups to check whether characters still look like themselves, and whether hair and fabric stay stable without waxy or over-sharp detail.",
      },
      {
        title: "Highlands, weather, and spell effects",
        detail:
          "Foliage, rain, and bright spell particles in motion reveal shimmering or trails. Compare a static view and a fast camera pan.",
      },
    ],
    playerAdvice: [
      "Get the update through Steam, the Epic Games Store, or the store you bought the game from, and use NVIDIA's official driver. Do not install a mod or DLL that claims to add DLSS 5; the official patch is the supported route.",
      "Hogwarts Legacy was already demanding on PC before DLSS 5. At launch, reviewers noted stutter and high VRAM use, and found that Frame Generation smoothed the frame rate but made stutters more noticeable. Neural Rendering adds its own GPU and memory cost, so if the game already runs close to your VRAM limit, test Neural Rendering with ray tracing lowered before deciding it is too slow.",
    ],
    setupSteps: [
      "Update Hogwarts Legacy through your game store and restart it after the update finishes.",
      "Install NVIDIA Game Ready Driver 621.14 or newer from the NVIDIA App or NVIDIA's driver page.",
      "Confirm the game is running on a GeForce RTX 50 desktop or laptop GPU or an RTX Spark laptop. On a laptop, make sure it is not using integrated graphics.",
      "Open Game Settings → Display Settings, set Upscale Type to NVIDIA DLSS, then switch on Neural Rendering. The switch only appears with NVIDIA DLSS selected as the upscaler.",
      "Press Shift+Alt+B in-game to toggle Neural Rendering and compare the same scene on and off, keeping resolution, Super Resolution mode, Ray Reconstruction, and Frame Generation unchanged.",
    ],
    troubleshooting: [
      {
        issue: "The Neural Rendering option is missing",
        fix: "Check that the active GPU is an RTX 50 card or RTX Spark, the driver is current, and the game finished updating. On a laptop, set the game to use the NVIDIA GPU in Windows graphics settings or the NVIDIA App.",
      },
      {
        issue: "The option is greyed out",
        fix: "Set Upscale Type to NVIDIA DLSS first. Neural Rendering depends on it, the same way Frame Generation does in this game. If another upscaler such as FSR or XeSS is selected, the switch is unavailable.",
      },
      {
        issue: "The game stutters after turning it on",
        fix: "Lower ray tracing quality or texture quality first to free VRAM, then compare again. If Frame Generation is on, test with it off as well, since it can make existing stutter more visible.",
      },
      {
        issue: "My RTX 40 card does not show the setting",
        fix: "That is expected. RTX 40 is not included in the November 5 update, and driver 621.14 does not add it. A DLL or mod will not add official support before NVIDIA releases it for RTX 40.",
      },
      {
        issue: "GeForce NOW looks different from my local PC",
        fix: "Cloud support depends on your GeForce NOW tier, region, and the rig your session runs on. It is separate from your own GPU's support.",
      },
    ],
    tradeoffs: [
      {
        feature: "DLSS Neural Rendering",
        role: "Changes lighting and material presentation using DLSS 5's 3D-guided model.",
        playerCheck: "Compare candlelit stone, faces, robes, and dark interiors with the effect on and off.",
      },
      {
        feature: "DLSS Super Resolution",
        role: "Reconstructs the image from a lower internal resolution.",
        playerCheck: "Check sharpness of text, distant castle detail, and foliage at your target resolution.",
      },
      {
        feature: "Ray Reconstruction",
        role: "Denoises ray-traced reflections and shadows.",
        playerCheck: "Look at reflections on castle floors and windows, and noise in dark corners.",
      },
      {
        feature: "Multi Frame Generation",
        role: "Raises displayed smoothness by generating extra frames on RTX 50.",
        playerCheck: "Check input feel in combat and whether stutter becomes more noticeable.",
      },
    ],
    extraSections: [
      {
        title: "What it costs: performance and VRAM",
        paragraphs: [
          "Neural Rendering costs frame rate; it does not add any. The first independent test of the shipped patch, by DSOGaming on an RTX 5090 with driver 621.14 at 4K, DLSS Quality, and maximum settings with ray tracing, measured a 20% drop in CPU-limited Hogsmeade (123 to 98 FPS) and a 42% drop in the GPU-limited opening area (173 to 100 FPS).",
          "NVIDIA's headline of up to 300 FPS at 4K on an RTX 5090 includes 6X Multi Frame Generation, so it is not comparable with the numbers above. NVIDIA says the October model needs about half the GPU time of the launch model and about 20% less VRAM at 4K. Slower RTX 50 cards have not been tested in this game yet; we do not estimate their numbers.",
        ],
        chart: {
          caption: "Hogwarts Legacy on an RTX 5090: 4K, DLSS Quality, maximum settings with ray tracing, driver 621.14",
          unit: "FPS",
          offLabel: "Neural Rendering off",
          onLabel: "Neural Rendering on",
          rows: [
            { label: "Opening area (GPU-limited)", off: 173, on: 100 },
            { label: "Hogsmeade (CPU-limited)", off: 123, on: 98 },
          ],
          source: { label: "DSOGaming, November 2026", href: DSOGAMING_HOGWARTS_DLSS5 },
        },
      },
      {
        title: "RTX 40 owners",
        paragraphs: [
          "The November 5 update does not include RTX 40 cards. NVIDIA has said RTX 40 support will follow, but as of our last check it has no date. RTX 40 cards still run the game's Super Resolution, Ray Reconstruction, and 2X Frame Generation, so there is no reason to replace a card only for this setting before NVIDIA announces RTX 40 timing.",
        ],
      },
    ],
    faq: [
      {
        question: "Is DLSS 5 out in Hogwarts Legacy?",
        answer:
          "Yes. The DLSS 5 update went live on November 5, 2026 for RTX 50 desktop and laptop GPUs, RTX Spark PCs, and GeForce NOW Ultimate. Update the game and install NVIDIA driver 621.14 or newer.",
      },
      {
        question: "How do I turn on DLSS 5 in Hogwarts Legacy?",
        answer:
          "Update the game and install driver 621.14 or newer. Then open Game Settings → Display Settings, set Upscale Type to NVIDIA DLSS, and switch on Neural Rendering. Shift+Alt+B toggles it during play.",
      },
      {
        question: "Does Hogwarts Legacy DLSS 5 work on RTX 40?",
        answer:
          "Not at launch. RTX 40 is not included in the November 5 update, and NVIDIA has not given a date for RTX 40 support.",
      },
      {
        question: "How much FPS does DLSS 5 cost in Hogwarts Legacy?",
        answer:
          "In DSOGaming's RTX 5090 test at 4K with DLSS Quality and ray tracing, frame rates fell 20% in Hogsmeade (123 to 98 FPS) and 42% in the opening area (173 to 100 FPS). NVIDIA's 300 FPS figure includes 6X Multi Frame Generation.",
      },
      {
        question: "Does DLSS 5 change how characters look in Hogwarts Legacy?",
        answer:
          "It changes lighting and materials, which includes skin and hair. NVIDIA says Avalanche Software tuned the effect with the DLSS 5 SDK controls to keep the game's style. Early reviews of the shipped patch call the effect restrained, with much smaller face changes than NVIDIA's March demo.",
      },
      {
        question: "Is DLSS 5 available for Hogwarts Legacy on PS5 or Xbox?",
        answer:
          "No. DLSS 5 runs on supported NVIDIA RTX PCs and on GeForce NOW. Console versions do not use NVIDIA DLSS.",
      },
    ],
    sources: [
      {
        label: "NVIDIA: DLSS 5 available now in Hogwarts Legacy",
        href: NVIDIA_HOGWARTS_LAUNCH,
      },
      {
        label: "WB Games support: enabling DLSS 5 Neural Rendering in Hogwarts Legacy",
        href: PORTKEY_HOGWARTS_DLSS5,
      },
      {
        label: "NVIDIA: Game Ready Driver 621.14",
        href: NVIDIA_DRIVER_62114,
      },
      {
        label: "DSOGaming: Hogwarts Legacy DLSS 5 benchmarks",
        href: DSOGAMING_HOGWARTS_DLSS5,
      },
      {
        label: "PCWorld: DLSS 5 in Hogwarts Legacy",
        href: PCWORLD_HOGWARTS_DLSS5,
      },
      {
        label: "NVIDIA: DLSS 5 comes to Hogwarts Legacy and RTX Spark (October model)",
        href: NVIDIA_OCTOBER_MODEL,
      },
      {
        label: "VideoCardz: updated DLSS 5 faces in Hogwarts Legacy",
        href: VIDEOCARDZ_HOGWARTS_FACES,
      },
      {
        label: "HotHardware: Hogwarts Legacy PC settings and Frame Generation",
        href: HOTHARDWARE_HOGWARTS_PC,
      },
      {
        label: "PC Games Hardware: Hogwarts Legacy VRAM and ray tracing test",
        href: PCGH_HOGWARTS_TECH,
      },
    ],
  },
  "where-winds-meet": {
    name: "Where Winds Meet",
    canonical: "/games/where-winds-meet-dlss-5",
    metaTitle: "Where Winds Meet DLSS 5: Driver 621.24, Settings, GPUs & RTX 40",
    metaDescription:
      "Where Winds Meet DLSS 5 is live since November 23, 2026 on RTX 50 and RTX Spark with Driver 621.24 WHQL. See setup steps, custom controls, and RTX 40 status.",
    eyebrow: "Game support guide · Reviewed November 24, 2026",
    ogImage: OG_IMAGE_WHERE_WINDS_MEET,
    title: "Where Winds Meet DLSS 5: Driver 621.24, Settings, GPUs & RTX 40",
    description:
      "Check how DLSS 5 Neural Rendering works in Where Winds Meet, which NVIDIA Game Ready Driver and GPUs are required, how Everstone Studio tuned the Wuxia art direction, and what RTX 40, RTX 30, and console players should expect.",
    fastAnswer:
      "Where Winds Meet supports NVIDIA DLSS 5 3D-guided Neural Rendering as of November 23, 2026 (November 24 in UTC+8 regions) on GeForce RTX 50 Series desktop and laptop GPUs and RTX Spark systems. Both NVIDIA and Everstone Studio name Game Ready Driver 621.24 WHQL as the launch driver. The feature is optional, includes customizable in-game visual controls, and runs alongside the game's existing DLSS Super Resolution and Multi Frame Generation options.",
    availability:
      "Live now on GeForce RTX 50 desktop and laptop GPUs and RTX Spark PCs. NVIDIA also includes Where Winds Meet in its November DLSS 5 rollout notes alongside GeForce NOW cloud support where offered. GeForce RTX 40 cards are not included yet; NVIDIA still lists RTX 40 support as planned with no public release date. RTX 30, RTX 20, GTX, AMD, Intel, and PlayStation 5 do not run local DLSS 5.",
    nextProof:
      "For local PC play, confirm four things together: an RTX 50 or RTX Spark GPU, NVIDIA Game Ready Driver 621.24 WHQL or newer, the November 23/24 Where Winds Meet client update, and the DLSS 5 Neural Rendering toggle visible inside the in-game graphics settings.",
    confirmed: [
      "Where Winds Meet became the fourth live DLSS 5 game on November 23, 2026 (November 24 UTC+8), following NBA 2K27, Hogwarts Legacy, and War Thunder.",
      "Both NVIDIA's November 11 driver release and Where Winds Meet's official November 23 announcement name GeForce Game Ready Driver 621.24 WHQL.",
      "Confirmed local hardware is GeForce RTX 50 Series desktop and laptop GPUs and RTX Spark systems; RTX 40 is still not included.",
      "The update ships with NVIDIA's faster October 2026 Neural Rendering model (NVIDIA cites ~118M parameters, 24% smaller size, ~20% less 4K VRAM, and roughly half the GPU cost of the September launch model).",
      "Everstone Studio states that players can toggle DLSS 5 on or off freely and use customizable in-game visual settings tailored to hardware and taste.",
      "Where Winds Meet already includes DLSS Super Resolution and DLSS Multi Frame Generation, and DLSS 5 Neural Rendering is added as a separate visual-fidelity layer rather than replacing frame-rate upscaling.",
    ],
    video: {
      id: "DUp0h7TCeuM",
      title: "Where Winds Meet | NVIDIA DLSS 5 Reveal",
      channel: "NVIDIA GeForce",
      caption:
        "Official NVIDIA GeForce reveal comparing Wuxia environments, sunlight, materials, and characters with DLSS 5 3D-guided Neural Rendering.",
    },
    context: [
      "Where Winds Meet presents a distinct test case compared with NBA 2K27's stadium lights or Hogwarts Legacy's stone corridors. Everstone Studio built its open-world Jianghu around misty mountain vistas, rain-washed city alleys, wooden eaves, embroidered silk, leather armor, and shifting sunset lighting. In its November 23 technical post, the studio explicitly framed DLSS 5 around a visual trade-off: adding photorealistic lighting and material depth without erasing the poetic Wuxia art direction.",
      "That emphasis directly addresses the main criticism aimed at early DLSS 5 previews earlier in 2026, when aggressive neural rendering smoothed or reshaped character faces. Everstone Studio says its art team prioritized character identity, facial expression, and distinct material separation across fabric, leather, and metal over raw visual intensity. When an environment adjustment interfered with a character's face or outfit, the team recalibrated the model configuration to restore balance.",
      "Under the hood, NVIDIA notes that Where Winds Meet launches directly on the revised October 2026 Neural Rendering model rather than the heavier September launch model. NVIDIA describes that model as roughly 24% smaller (around 118 million parameters) with about 20% lower 4K VRAM usage and about half the GPU time of the first release. Even with those improvements, Everstone Studio openly cautions players that DLSS 5 still carries an additional GPU performance cost.",
      "Because DLSS 5 Neural Rendering, DLSS Super Resolution, and Multi Frame Generation handle separate jobs, you should evaluate them individually. Neural Rendering alters lighting, shadow contrast, and surface materials; Super Resolution lowers internal render resolution to recover GPU budget; Multi Frame Generation inserts AI frames for smoother displayed motion on RTX 50 hardware. Keeping them conceptually separate makes tuning much easier if your frame rate dips in dense towns or heavy weather.",
    ],
    visualAreas: [
      {
        title: "Sunlit eaves, shadow transitions, and highlights",
        detail:
          "Everstone Studio specifically highlights moving from bright sunlight into the shade of wooden eaves. Check whether blown-out highlights are tamed while shadows keep rich atmospheric depth rather than looking flat.",
      },
      {
        title: "Fabric, leather, metal, and architecture",
        detail:
          "Inspect robes, embroidery, leather straps, stone walls, and rain-slick streets. Look for crisp material separation that still matches the painted Wuxia palette instead of looking overly glossy.",
      },
      {
        title: "Character faces and fast combat motion",
        detail:
          "Check close-up dialogues and rapid swordplay pans. Confirm that facial likeness stays consistent with DLSS 5 off and that fast motion does not introduce distracting trails around hair or weapons.",
      },
    ],
    playerAdvice: [
      "Install NVIDIA Game Ready Driver 621.24 WHQL (or a newer official release) through the NVIDIA App or nvidia.com, and apply the official Where Winds Meet patch through Steam or the official PC launcher. Avoid third-party DLL packs or unofficial injectors claiming to unlock DLSS 5 on older cards, especially in an online live-service RPG where modified binaries create security and anti-cheat risks.",
      "Because Where Winds Meet lets you toggle DLSS 5 on or off and customize its visual style settings, test it in one stable daytime town scene and one night or rain scene before playing combat content. Hold your resolution, graphics preset, and Super Resolution mode constant while toggling DLSS 5 so you can measure the exact FPS cost and judge whether the altered lighting and material response fit your preference.",
    ],
    setupSteps: [
      "Confirm your PC runs a supported local GPU: any GeForce RTX 50 Series desktop or laptop GPU (RTX 5050 through RTX 5090) or an RTX Spark system.",
      "Install NVIDIA GeForce Game Ready Driver 621.24 WHQL or newer from the NVIDIA App or NVIDIA's official driver download page, then reboot if prompted.",
      "Update Where Winds Meet to the November 23/24, 2026 build via Steam or the official PC launcher so the native DLSS 5 integration is present.",
      "Launch the game and open its graphics / display settings menu. Confirm NVIDIA DLSS is enabled as your active upscaling path where required, then turn on DLSS 5 Neural Rendering.",
      "Adjust the game's customizable DLSS 5 visual style settings to balance Wuxia mood, surface detail, and character likeness, and pair with Super Resolution Balanced or Performance if you want more frame-rate headroom.",
    ],
    tradeoffs: [
      {
        feature: "DLSS 5 Neural Rendering",
        role: "Enhances lighting, shadow contrast, and surface materials using 3D-guided neural rendering.",
        playerCheck:
          "Compare blown-out highlights, shadowed eaves, silk and leather textures, and character faces against the native look.",
      },
      {
        feature: "DLSS Super Resolution",
        role: "Renders internally at a lower resolution and reconstructs the output image to recover frame rate.",
        playerCheck:
          "Use Quality or Balanced to offset Neural Rendering GPU cost; watch foliage, distant peaks, and UI text clarity.",
      },
      {
        feature: "DLSS Multi Frame Generation",
        role: "Generates additional displayed frames on RTX 50 hardware for higher motion smoothness.",
        playerCheck:
          "Test parry timing and camera responsiveness during combat; keep a healthy base frame rate before enabling higher multipliers.",
      },
    ],
    troubleshooting: [
      {
        issue: "DLSS 5 Neural Rendering option is missing",
        fix: "Verify three items first: your GPU is an RTX 50 Series or RTX Spark model, NVIDIA Driver 621.24 WHQL or newer is installed, and the Where Winds Meet client finished downloading the November 23/24 update.",
      },
      {
        issue: "Option is greyed out on an RTX 50 gaming laptop",
        fix: "Make sure Windows is not launching the game on integrated graphics. In Windows Settings → System → Display → Graphics, assign Where Winds Meet to High Performance (your RTX 50 GPU) or switch MUX/Optimus mode, then restart the game.",
      },
      {
        issue: "Frame rate drops noticeably with DLSS 5 enabled",
        fix: "Everstone Studio confirms DLSS 5 adds GPU overhead even with the faster October model. Lower DLSS Super Resolution one tier (for example, Quality to Balanced) or enable Multi Frame Generation rather than assuming something is broken.",
      },
      {
        issue: "Playing on RTX 40, RTX 30, AMD, or PlayStation 5",
        fix: "Local DLSS 5 will not appear on those systems. RTX 40 remains planned by NVIDIA without a release date, while RTX 30, AMD, and PS5 are not part of local DLSS 5 support. On PC, keep using Super Resolution (RTX 20–40) or Frame Generation (RTX 40), or check GeForce NOW Ultimate availability.",
      },
    ],
    extraSections: [
      {
        title: "Performance cost and early independent coverage",
        paragraphs: [
          "Everstone Studio has confirmed that DLSS 5 introduces additional performance cost in Where Winds Meet, while NVIDIA notes that the update uses its faster October 2026 model (roughly half the GPU cost of the September debut model and about 20% less VRAM at 4K). Early launch coverage from DSOGaming highlights Where Winds Meet as one of the strongest official DLSS 5 implementations so far, and GameGPU has published initial RTX 50 GPU benchmark runs for the patch.",
          "As with Hogwarts Legacy (where DSOGaming measured a 20% to 42% frame-rate reduction on an RTX 5090 depending on resolution and upscaling mode), treat DLSS 5 Neural Rendering as a visual-fidelity option with a real GPU budget rather than a free speed boost. Because Where Winds Meet is an open-world RPG with dense foliage, weather, and crowds, pair DLSS 5 with DLSS Super Resolution and, if you like the combat input feel, Multi Frame Generation on RTX 50 cards.",
        ],
      },
      {
        title: "RTX 40, RTX 30, and PlayStation 5 status",
        paragraphs: [
          "Where Winds Meet's November 23 update follows the same hardware boundary as NBA 2K27, Hogwarts Legacy, and War Thunder: GeForce RTX 50 desktop and laptop GPUs plus RTX Spark systems for local play. NVIDIA has reiterated that GeForce RTX 40 Series support is planned after RTX 50 optimization work, but there is still no public release date and no local toggle on RTX 40 cards today.",
          "RTX 30 and RTX 20 owners have no announced official DLSS 5 plan, though those GPUs can still run DLSS Super Resolution in supported PC settings. PlayStation 5 runs on AMD graphics hardware and cannot run NVIDIA DLSS 5 locally. If you want to test DLSS 5 in supported titles without upgrading your graphics card, GeForce NOW Ultimate on NVIDIA-operated RTX 5080-class cloud rigs remains the only official non-local route, subject to game catalog availability and regional server coverage.",
        ],
      },
    ],
    faq: [
      {
        question: "Is DLSS 5 live in Where Winds Meet right now?",
        answer:
          "Yes. Both NVIDIA and Everstone Studio announced November 23, 2026 (November 24 in UTC+8 regions) as the launch date for DLSS 5 3D-guided Neural Rendering in Where Winds Meet on GeForce RTX 50 Series GPUs and RTX Spark systems.",
      },
      {
        question: "Which NVIDIA driver do I need for Where Winds Meet DLSS 5?",
        answer:
          "Install GeForce Game Ready Driver 621.24 WHQL or a newer official NVIDIA driver. Both NVIDIA's November 11 driver notes and Where Winds Meet's November 23 announcement specifically name version 621.24.",
      },
      {
        question: "Does Where Winds Meet let me customize or turn off DLSS 5?",
        answer:
          "Yes. Everstone Studio states that players have full freedom to toggle DLSS 5 on or off and adjust customizable in-game visual style settings to match their hardware and Wuxia art preference.",
      },
      {
        question: "Does Where Winds Meet DLSS 5 work on RTX 40 or RTX 30?",
        answer:
          "Not locally. Current official support covers GeForce RTX 50 desktop and laptop GPUs and RTX Spark systems. NVIDIA lists RTX 40 as planned without a public date, and RTX 30 has no announced official DLSS 5 support.",
      },
      {
        question: "Does Where Winds Meet on PS5 get DLSS 5?",
        answer:
          "No. PlayStation 5 uses AMD graphics hardware and does not support NVIDIA DLSS 5. DLSS 5 Neural Rendering in Where Winds Meet is a PC feature for supported RTX 50 hardware.",
      },
      {
        question: "Will turning on DLSS 5 in Where Winds Meet reduce my FPS?",
        answer:
          "Yes, expect an additional GPU cost. Everstone Studio notes that DLSS 5 improves visual fidelity with extra performance overhead, even with NVIDIA's faster October model. Pair it with DLSS Super Resolution or Multi Frame Generation if you need higher frame rates.",
      },
    ],
    sources: [
      {
        label: "Where Winds Meet official announcement: Official DLSS 5 Custom Driver Available Now (Nov 23, 2026)",
        href: WWM_OFFICIAL_DLSS5,
      },
      {
        label: "NVIDIA: Game Ready Driver 621.24 WHQL for Where Winds Meet DLSS 5",
        href: NVIDIA_DRIVER_62124,
      },
      {
        label: "NVIDIA: DLSS 5 in Hogwarts Legacy, War Thunder & Where Winds Meet (Nov 5, 2026)",
        href: NVIDIA_HOGWARTS_LAUNCH,
      },
      {
        label: "NVIDIA: Faster October 2026 DLSS 5 model & RTX Spark details",
        href: NVIDIA_OCTOBER_MODEL,
      },
      {
        label: "DSOGaming: Where Winds Meet first DLSS 5 test and visual impressions",
        href: DSOGAMING_WWM_DLSS5,
      },
      {
        label: "GameGPU: Where Winds Meet RTX 50 DLSS 5 benchmarks",
        href: GAMEGPU_WWM_DLSS5,
      },
      {
        label: "NVIDIA: RTX 40 DLSS 5 support status FAQ",
        href: NVIDIA_RTX40_UPDATE,
      },
      {
        label: "NVIDIA GeForce NOW memberships and cloud rig overview",
        href: "https://www.nvidia.com/en-us/geforce-now/memberships/",
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
      images: [guide.ogImage ?? OG_IMAGE_EN],
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: "article",
      url,
    },
    twitter: {
      card: guide.ogImage ? "summary_large_image" : "summary",
      ...(guide.ogImage ? { images: [guide.ogImage.url] } : {}),
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

type FpsChartData = NonNullable<NonNullable<GameGuide["extraSections"]>[number]["chart"]>;

function FpsChart({ chart }: { chart: FpsChartData }) {
  const max = Math.max(...chart.rows.map((row) => Math.max(row.off, row.on)));
  return (
    <figure className="rounded-lg border border-border p-4 sm:p-5">
      <figcaption className="mb-4 text-sm font-semibold text-foreground">{chart.caption}</figcaption>
      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground" aria-hidden="true">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-muted-foreground/50" />{chart.offLabel}</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-blue-400" />{chart.onLabel}</span>
      </div>
      <dl className="space-y-4">
        {chart.rows.map((row) => {
          const drop = Math.round((1 - row.on / row.off) * 100);
          return (
            <div key={row.label}>
              <dt className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-2 text-sm">
                <span className="font-medium text-foreground">{row.label}</span>
                <span className="text-muted-foreground">−{drop}%</span>
              </dt>
              <dd className="space-y-1">
                <span className="sr-only">{chart.offLabel}: {row.off} {chart.unit}. {chart.onLabel}: {row.on} {chart.unit}.</span>
                <span aria-hidden="true" className="flex items-center gap-2">
                  <span className="h-3 rounded-sm bg-muted-foreground/50" style={{ width: `${(row.off / max) * 80}%` }} />
                  <span className="text-xs tabular-nums text-muted-foreground">{row.off}</span>
                </span>
                <span aria-hidden="true" className="flex items-center gap-2">
                  <span className="h-3 rounded-sm bg-blue-400" style={{ width: `${(row.on / max) * 80}%` }} />
                  <span className="text-xs tabular-nums text-foreground">{row.on}</span>
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="mt-4 text-xs text-muted-foreground">
        Source: <a href={chart.source.href} className="text-blue-400 hover:underline">{chart.source.label}</a>. Published third-party test, not our own measurement.
      </p>
    </figure>
  );
}

function assertLaunchReady(key: Dlss5GameGuideKey) {
  if (process.env.NODE_ENV !== "production" || process.env.ALLOW_LAUNCH_PLACEHOLDERS === "1") return;
  if (JSON.stringify(gameGuides[key]).includes(LAUNCH_MARKER)) {
    throw new Error(
      `The ${key} guide still contains ${LAUNCH_MARKER} placeholders. Replace them with verified facts before publishing.`,
    );
  }
}

export default function Dlss5GameGuide({ gameKey }: { gameKey: Dlss5GameGuideKey }) {
  assertLaunchReady(gameKey);
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
          {guide.video ? (
            <VideoEmbed
              id={guide.video.id}
              title={guide.video.title}
              channel={guide.video.channel}
              caption={guide.video.caption}
            />
          ) : null}
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
            {section.chart ? <FpsChart chart={section.chart} /> : null}
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

        <UpdateAlertForm
          defaultTopics={["games", "rtx40"]}
          sourcePage={guide.canonical}
          heading={`Get notified when more DLSS 5 games or RTX 40 support launch`}
        />

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
          {gameKey !== "where-winds-meet" && (
            <Link href="/games/where-winds-meet-dlss-5" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">Where Winds Meet DLSS 5 guide</div>
              <p className="text-sm text-muted-foreground">Live since November 23: Driver 621.24, customizable Wuxia visual tuning, and RTX 40 status.</p>
            </Link>
          )}
          {gameKey !== "hogwarts-legacy" && (
            <Link href="/games/hogwarts-legacy-dlss-5" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">Hogwarts Legacy DLSS 5 guide</div>
              <p className="text-sm text-muted-foreground">Live since November 5: Display Settings path, Shift+Alt+B toggle, and published RTX 5090 FPS cost.</p>
            </Link>
          )}
          {gameKey !== "nba-2k27" && (
            <Link href="/games/nba-2k27-dlss-5" className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400">
              <div className="mb-1 font-semibold">NBA 2K27 DLSS 5 guide</div>
              <p className="text-sm text-muted-foreground">The first live DLSS 5 game, with published performance tests.</p>
            </Link>
          )}
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
