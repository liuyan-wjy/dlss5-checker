import type { Metadata } from "next";
import Link from "next/link";

export type Dlss5GameGuideKey =
  | "nba-2k27"
  | "resident-evil-requiem"
  | "starfield"
  | "assassins-creed-shadows";

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
  "https://www.reddit.com/r/nvidia/comments/1w4bcvp/nvidia_dlss_5_available_september_3rd_dlss/?sort=new";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";
const NVIDIA_RAY_RECONSTRUCTION =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-ray-reconstruction-1000-rtx-games-apps-out-now/";
const NVIDIA_CAPCOM_PATH_TRACING = "https://developer.nvidia.com/blog/?p=119888";

const gameGuides: Record<Dlss5GameGuideKey, GameGuide> = {
  "nba-2k27": {
    name: "NBA 2K27",
    canonical: "/games/nba-2k27-dlss-5",
    metaTitle: "NBA 2K27 DLSS 5: Settings, GPUs, Driver, and RTX 40 Status",
    metaDescription:
      "NBA 2K27 is the first live DLSS 5 game. Check the RTX 50 GPU requirement, 616.64 driver, DLSS Neural Rendering setting, F9 toggle, RTX 40 status, and GeForce NOW caveats.",
    eyebrow: "Game support guide · Reviewed September 5, 2026",
    title: "NBA 2K27 DLSS 5: Settings, GPUs, Driver, and RTX 40 Status",
    description:
      "Enable DLSS 5 in NBA 2K27, compare image quality with F9, and check what to do if the setting is missing. These steps apply to local RTX 50 desktop and laptop GPUs; GeForce NOW has separate hardware and regional requirements.",
    fastAnswer:
      "NBA 2K27 supports DLSS 5 now on GeForce RTX 50 Series desktop and laptop GPUs. NVIDIA's driver page names the 616.64 WHQL Game Ready Driver and the in-game path Video Settings → DLSS Neural Rendering; NVIDIA's DLSS 5 launch article says F9 toggles Neural Rendering during gameplay and replays.",
    availability:
      "Available now, but the current local-PC support is limited to RTX 50 Series GPUs. RTX 40 support is planned after RTX 50 tuning work, with no official public date in the sources checked for this guide.",
    nextProof:
      "For a local PC, the practical proof is an RTX 50 desktop or laptop GPU, driver 616.64 or newer, an updated NBA 2K27 build, and the DLSS Neural Rendering option visible in Video Settings.",
    confirmed: [
      "NVIDIA calls NBA 2K27 the debut game for DLSS 5 3D-guided Neural Rendering.",
      "The initial local support is for GeForce RTX 50 Series desktop and laptop GPUs.",
      "The official Game Ready Driver article names version 616.64 WHQL for NBA 2K27.",
      "The NBA 2K27 setting path is Video Settings → DLSS Neural Rendering, with F9 used in-game to toggle Neural Rendering during gameplay and replays.",
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
      "Open Video Settings and look for DLSS Neural Rendering. Enable it there rather than assuming a normal DLSS Super Resolution label is the same feature.",
      "Use F9 in NBA 2K27 to toggle Neural Rendering during gameplay or replays, then judge the same arena, camera angle, and motion instead of comparing unrelated scenes.",
    ],
    troubleshooting: [
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
        fix: "Use it inside NBA 2K27 after enabling the feature in Video Settings. Do not assume F9 is a global DLSS shortcut for every game or every NVIDIA feature.",
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
        title: "Quality comparison: what to look for",
        paragraphs: [
          "Use NBA 2K27's repeatable camera work to your advantage. A good comparison starts with the same arena, the same graphics preset, the same resolution, and the same camera. Free throws, replay angles, practice mode, and early possessions are better than a highlight montage because they let you focus on one visual change at a time. Watch skin, sweat, jersey seams, hair, crowd rows, the backboard, rim, court varnish, and the way bright lights roll across glossy materials.",
          "Avoid treating a single screenshot as the verdict. Neural Rendering is partly about how lighting and materials behave over time, so motion matters. If a still frame looks sharper but moving players leave trails or crowd edges shimmer, that is not automatically a win. Likewise, if the feature looks subtle on one court, test another arena before deciding it does nothing. Different lighting rigs can expose different strengths and weaknesses.",
        ],
      },
      {
        title: "Performance and input latency",
        paragraphs: [
          "The support announcement does not establish the frame rate or latency you will get on your own PC. Your CPU, GPU, resolution, display, and graphics preset all affect the result. Record a baseline first, then change one feature at a time. Start with native resolution or your usual Super Resolution mode, enable DLSS Neural Rendering, and only then test Frame Generation if your setup supports it.",
          "Smooth camera motion, clean player outlines, readable UI, stable crowd detail, and responsive shot timing all matter alongside frame rate. If Frame Generation makes motion look smoother but input timing feels worse, turn it off and compare the same scene again. Test lower graphics settings separately. If Neural Rendering leaves too little performance headroom, compare Super Resolution modes one at a time while keeping the other settings fixed.",
        ],
      },
      {
        title: "RTX 40 status and upgrade timing",
        paragraphs: [
          "RTX 40 cards are not the current local DLSS 5 target for NBA 2K27 in the sources checked here. NVIDIA has indicated that RTX 40 support is planned after RTX 50 tuning work, but no public date is available. That means an RTX 4090 can still be excellent for many DLSS 4 features while not being a confirmed local DLSS 5 NBA 2K27 card today.",
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
          "NVIDIA points players to Video Settings → DLSS Neural Rendering. NVIDIA's DLSS 5 launch article says F9 toggles Neural Rendering during gameplay and replays in NBA 2K27.",
      },
      {
        question: "Does NBA 2K27 DLSS 5 work on RTX 40?",
        answer:
          "Not as current local support in the checked sources. RTX 40 support is planned after RTX 50 tuning, but NVIDIA has not provided a public availability date.",
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
        label: "NVIDIA DLSS 5 launch article",
        href: NVIDIA_DLSS5_ANNOUNCEMENT,
      },
      {
        label: "NVIDIA NBA 2K27 Game Ready Driver 616.64 note",
        href: NVIDIA_NBA_DRIVER,
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
  "resident-evil-requiem": {
    name: "Resident Evil Requiem",
    canonical: "/games/resident-evil-requiem-dlss-5",
    metaTitle: "Resident Evil Requiem DLSS 5: Support and Settings",
    metaDescription:
      "Check Resident Evil Requiem DLSS 5 support, current path tracing and Ray Reconstruction evidence, expected settings, GPU caveats, and what to verify.",
    eyebrow: "Game support guide · Reviewed September 5, 2026",
    title: "Resident Evil Requiem DLSS 5: Support, Path Tracing, and Settings",
    description:
      "Resident Evil Requiem is an officially announced DLSS 5 title, but the sources checked for this guide do not show a live public game patch yet. This guide separates the confirmed announcement from current path-tracing technology and shows players exactly what to check when the update arrives.",
    fastAnswer:
      "Yes, NVIDIA names Resident Evil Requiem as a DLSS 5 game, but this page still treats support as announced rather than live until Capcom patch notes and a visible public settings menu confirm it.",
    availability:
      "Current Capcom and NVIDIA material documents path tracing, DLSS Ray Reconstruction, and Multi Frame Generation in the RE ENGINE pipeline. Those are not interchangeable with the future DLSS 5 Neural Rendering option.",
    nextProof:
      "A Capcom patch note, compatible NVIDIA driver note for this game, and a visible in-game DLSS 5 or Neural Rendering control are still needed before players should treat support as live.",
    confirmed: [
      "NVIDIA includes Resident Evil Requiem in the first announced group of DLSS 5 games.",
      "DLSS 5 is now public first through NBA 2K27, but that launch does not prove Resident Evil Requiem has shipped its own patch.",
      "Capcom built a game-oriented RE ENGINE path tracer for Resident Evil Requiem and PRAGMATA.",
      "The documented rendering pipeline uses DLSS Ray Reconstruction as a denoising foundation.",
    ],
    context: [
      "Resident Evil Requiem is a useful test case because its horror presentation depends on controlled darkness, indirect illumination, reflections, skin, hair, and small light sources. A graphics feature can technically increase detail while still hurting the intended mood, so the important question is not simply whether a toggle exists. Players need to know whether the implementation preserves shadow detail, avoids unstable highlights, and keeps faces and hair consistent during movement.",
      "Capcom told NVIDIA that its newer path tracer handles both direct and indirect lighting. The studio also described a smaller gap between gameplay and cutscenes, more dimensional character shadows, and real-time light transmission through strand hair. Those are current, concrete rendering details. DLSS 5 is a separate announced visual layer that NVIDIA says will use the game frame and motion data to enhance lighting and materials while remaining anchored to the source scene.",
      "That distinction matters when choosing settings. Ray Reconstruction replaces multiple hand-tuned denoisers in a ray-traced or path-traced pipeline. DLSS Super Resolution reconstructs resolution. Frame Generation improves displayed smoothness. DLSS 5 Neural Rendering is aimed at the appearance of lighting and materials. A future Resident Evil Requiem menu may expose several of these controls, and turning on one will not necessarily turn on all the others.",
    ],
    visualAreas: [
      {
        title: "Dark-room lighting",
        detail:
          "Check whether indirect light reveals believable room shape without lifting black levels or flattening the horror atmosphere.",
      },
      {
        title: "Faces and strand hair",
        detail:
          "Capcom specifically discussed character grounding and light transmission through hair, making close-ups a strong stability test.",
      },
      {
        title: "Reflections and fine geometry",
        detail:
          "Mirrors, wet surfaces, damaged materials, lampshades, and thin geometry can expose denoising errors or delayed temporal detail.",
      },
    ],
    playerAdvice: [
      "If you already own the game, wait for Capcom's actual patch notes before changing drivers or settings solely for DLSS 5. An NVIDIA announcement confirms integration intent, but it does not establish the public build number, exact menu label, or supported GPU tiers.",
      "When the update arrives, compare the same checkpoint rather than relying on a fast-moving trailer. Use a dark interior with a face, moving hair, reflective material, and one strong light source. Keep resolution, ray-tracing level, frame-generation mode, and camera position consistent so the Neural Rendering comparison is meaningful.",
      "For lower-end RTX hardware, prioritize a stable base frame rate before enabling Frame Generation. Ray Reconstruction and DLSS 5 may improve image quality, but they do not remove the CPU and GPU cost of the underlying path-traced scene. The best-looking preset is not automatically the best way to play.",
      "If you see a normal DLSS or Ray Reconstruction setting before Capcom names DLSS 5, read that label literally. It is useful, but it is not proof that this specific DLSS 5 path is live.",
    ],
    faq: [
      {
        question: "Does Resident Evil Requiem support DLSS 5 now?",
        answer:
          "NVIDIA has announced Resident Evil Requiem as a DLSS 5 title. Treat support as announced, not verified live, until Capcom publishes a patch and the option appears in a public game build.",
      },
      {
        question: "Is Ray Reconstruction the same as DLSS 5 in Resident Evil Requiem?",
        answer:
          "No. Ray Reconstruction is the neural denoising and reconstruction path used with ray tracing or path tracing. DLSS 5 Neural Rendering is a separate announced layer focused on lighting and material appearance.",
      },
      {
        question: "Will every RTX card get the same Resident Evil Requiem options?",
        answer:
          "That is not confirmed. DLSS 4.5 Ray Reconstruction is announced for all GeForce RTX GPUs, but Frame Generation, Multi Frame Generation, and future DLSS 5 features can have different hardware requirements.",
      },
      {
        question: "What should I test after the DLSS 5 update?",
        answer:
          "Check motion stability, hair, faces, dark-room lighting, reflections, base frame rate, latency, and whether the result still matches the game's intended atmosphere.",
      },
    ],
    sources: [
      {
        label: "NVIDIA DLSS 5 announcement",
        href: NVIDIA_DLSS5_ANNOUNCEMENT,
      },
      {
        label: "NVIDIA and Capcom RE ENGINE path-tracing Q&A",
        href: NVIDIA_CAPCOM_PATH_TRACING,
      },
      {
        label: "NVIDIA DLSS 4.5 Ray Reconstruction announcement",
        href: NVIDIA_RAY_RECONSTRUCTION,
      },
    ],
  },
  starfield: {
    name: "Starfield",
    canonical: "/games/starfield-dlss-5",
    metaTitle: "Starfield DLSS 5: Support Status and Update Guide",
    metaDescription:
      "Check Starfield DLSS 5 support, expected update timing, current DLSS feature differences, GPU caveats, and what players should verify after the patch.",
    eyebrow: "Game support guide · Reviewed September 5, 2026",
    title: "Starfield DLSS 5: Support Status, Update Timing, and Player Checklist",
    description:
      "Starfield is on NVIDIA's announced DLSS 5 list. This page explains what that announcement confirms, what Bethesda still needs to document, and how to evaluate the feature without confusing Neural Rendering with the DLSS options already available in the game.",
    fastAnswer:
      "Starfield is officially planned to receive DLSS 5, but the sources checked for this guide do not show a live Starfield patch. There is no safe reason to call the integration live until a public update and settings menu confirm it.",
    availability:
      "Starfield already has a history of DLSS updates, but an existing Super Resolution or Frame Generation option is not evidence that DLSS 5 Neural Rendering has shipped.",
    nextProof:
      "The decisive evidence will be Bethesda patch notes naming DLSS 5, a driver or NVIDIA App path, and repeatable settings in the current public build.",
    confirmed: [
      "NVIDIA includes Starfield in its announced DLSS 5 game lineup.",
      "NVIDIA describes DLSS 5 as a lighting and material feature that first launched publicly in NBA 2K27.",
      "Game support and GPU support are separate; a listed title does not guarantee identical features on every RTX generation.",
      "The exact Starfield patch date, final controls, performance cost, and supported cards remain unconfirmed.",
    ],
    context: [
      "Starfield moves rapidly between dark interiors, brightly lit settlements, reflective spacecraft, volumetric effects, spacesuits, faces, and large exterior scenes. That variety makes it a strong visual test, but it also makes one screenshot a weak verdict. A useful evaluation has to cover several locations and both camera motion and static detail.",
      "NVIDIA's description of DLSS 5 emphasizes photoreal lighting and material behavior rather than another frame-rate multiplier. In Starfield, that could matter for metal, glass, cloth, skin, helmet visors, indirect interior light, and the transition between extreme lighting conditions. Those are evaluation targets, not promises about the final implementation.",
      "Players should also separate the feature from current DLSS controls. Super Resolution changes how a higher-resolution frame is reconstructed from a lower rendering resolution. Frame Generation inserts generated frames to improve smoothness. Ray Reconstruction improves denoising in supported ray-traced pipelines. DLSS 5 Neural Rendering is a different layer, and Bethesda may choose its own labels or presets when integration becomes public.",
    ],
    visualAreas: [
      {
        title: "Interior and exterior transitions",
        detail:
          "Move between a dim ship, a lit settlement, and an outdoor scene to check exposure, temporal stability, and indirect lighting.",
      },
      {
        title: "Spacesuits and hard surfaces",
        detail:
          "Metal panels, glass, fabric, helmet visors, and small emissive controls can reveal whether material detail stays coherent in motion.",
      },
      {
        title: "Faces and camera movement",
        detail:
          "Conversation close-ups and third-person movement are good places to look for unstable skin detail, hair, ghosting, or over-sharpening.",
      },
    ],
    playerAdvice: [
      "Do not download a third-party file advertised as a DLSS 5 mod or DLL simply because Starfield is on the official list. The verified release path should come from Bethesda, NVIDIA, the game's normal update channel, or an official NVIDIA App feature.",
      "After the patch, note the game version and driver version before comparing screenshots. Test one controlled scene with Frame Generation off first; that makes it easier to judge the visual layer without generated-frame motion changing the comparison.",
      "If you are deciding whether to buy a GPU for Starfield, wait for the final support matrix and independent tests. An announced game partnership does not yet answer whether an RTX 40-series or older card receives the same DLSS 5 path as an RTX 50-series card.",
      "For troubleshooting, avoid changing mods, render scale, frame generation, and upscaling quality all at once. Starfield players often run custom INI files or visual mods, so a clean comparison should start from the current public build, official updates, and one repeatable location. If DLSS 5 later appears in the menu, capture the driver version and game version before judging quality or reporting a bug. Also check one vanilla save before blaming the feature, because a visual mod can change lighting, material response, sharpening, exposure, color grading, texture detail, or camera filters in ways that look like a DLSS issue.",
    ],
    faq: [
      {
        question: "Is DLSS 5 available in Starfield?",
        answer:
          "Not yet based on the public evidence tracked here. NVIDIA has announced Starfield support, but Bethesda still needs to ship and document the game update.",
      },
      {
        question: "Will Starfield DLSS 5 be a free update?",
        answer:
          "No official source cited here has confirmed pricing or packaging. DLSS integrations are commonly delivered through game updates, but that pattern is not a substitute for a Bethesda announcement.",
      },
      {
        question: "Is Starfield's current DLSS setting already DLSS 5?",
        answer:
          "No. Current DLSS Super Resolution or Frame Generation labels should be read as their named features. They should not be relabeled as DLSS 5 without a specific game update.",
      },
      {
        question: "What is the best Starfield DLSS 5 setting?",
        answer:
          "There is no verified best setting before the patch and independent testing. Start with a stable native base frame rate, then compare image quality and latency at the same location.",
      },
    ],
    sources: [
      {
        label: "NVIDIA DLSS 5 announcement",
        href: NVIDIA_DLSS5_ANNOUNCEMENT,
      },
      {
        label: "NVIDIA RTX games and applications list",
        href: NVIDIA_RTX_GAMES,
      },
    ],
  },
  "assassins-creed-shadows": {
    name: "Assassin's Creed Shadows",
    canonical: "/games/assassins-creed-shadows-dlss-5",
    metaTitle: "Assassin's Creed Shadows DLSS 5: Support Guide",
    metaDescription:
      "Check Assassin's Creed Shadows DLSS 5 support, release status, likely visual test areas, current DLSS feature differences, and player setup advice.",
    eyebrow: "Game support guide · Reviewed September 5, 2026",
    title: "Assassin's Creed Shadows DLSS 5: Support Status and Settings Guide",
    description:
      "Assassin's Creed Shadows is officially named for DLSS 5, but the practical player questions are still open: when the update lands, which GPUs qualify, what the control is called, and whether the visual result remains stable through changing weather, foliage, and fast traversal.",
    fastAnswer:
      "NVIDIA has announced Assassin's Creed Shadows for DLSS 5. Players should treat the game as confirmed for planned support rather than assume the option is already active until Ubisoft ships a public patch.",
    availability:
      "Existing DLSS or ray-tracing settings are current technologies. They do not silently become DLSS 5 just because the game appears in a future-support announcement.",
    nextProof:
      "Ubisoft patch notes, a supported driver path, an in-game Neural Rendering control, and generation-specific GPU guidance are still required.",
    confirmed: [
      "NVIDIA names Assassin's Creed Shadows as an announced DLSS 5 title.",
      "The feature is described as improving lighting and material fidelity with developer controls.",
      "The DLSS 5 launch in NBA 2K27 is not a confirmed Assassin's Creed Shadows patch date.",
      "No final public support matrix or trustworthy per-GPU benchmark is available yet.",
    ],
    context: [
      "Assassin's Creed Shadows combines dense vegetation, weather, day-and-night changes, skin, fabric, armor, reflective wet surfaces, and quick camera movement. Those are difficult conditions for any temporal reconstruction system. A strong implementation should improve local lighting and material response without causing foliage shimmer, texture boiling, ghost trails, or a look that conflicts with the game's art direction.",
      "NVIDIA says developers can control DLSS 5 intensity, color grading, and masking. That matters here because the same visual treatment may not suit a sunlit landscape, a dark interior, rain, snow, and a close-up cinematic. Ubisoft's final tuning will be more important than the existence of the model alone.",
      "The game may ultimately expose DLSS 5 beside Super Resolution, Frame Generation, ray tracing, and other quality settings. These controls answer different problems. Players should change one feature at a time, record the base frame rate, and avoid judging the visual layer only while Multi Frame Generation is changing perceived smoothness.",
    ],
    visualAreas: [
      {
        title: "Foliage and traversal",
        detail:
          "Trees, grass, particles, and thin geometry during fast movement are the clearest places to check shimmer and temporal breakup.",
      },
      {
        title: "Weather and time of day",
        detail:
          "Rain, snow, wet surfaces, dawn, and night scenes can show whether lighting improvements remain consistent across conditions.",
      },
      {
        title: "Skin, cloth, and armor",
        detail:
          "Character close-ups help reveal whether fine materials gain depth without becoming waxy, over-sharpened, or unstable.",
      },
    ],
    playerAdvice: [
      "Keep the game and NVIDIA driver current through their official update channels, but do not install an unofficial 'DLSS 5 download.' Planned support does not require a mystery executable or replacement file from an unknown site.",
      "When the option becomes available, begin with a repeatable save location. Compare a foliage-heavy exterior, a dark interior, wet material, and one character close-up. Leave camera position and quality settings unchanged between captures.",
      "Competitive-looking frame-rate numbers can hide latency and artifact tradeoffs. First establish a comfortable base frame rate, then test Frame Generation separately from DLSS 5 Neural Rendering. That gives a more useful answer than switching every RTX option on at once.",
      "If a future patch exposes several DLSS choices, start with the official preset you already trust and then enable Neural Rendering alone. Assassin's Creed Shadows has dense foliage, weather, and traversal, so stacking every RTX option at once can make it hard to tell whether a problem comes from the new visual layer, frame generation, ray tracing, or the base game settings.",
      "For laptops, also confirm that Windows and the vendor control panel are using the discrete NVIDIA GPU. As a general system check, review hybrid graphics and power profiles because they can change which adapter the game sees. Treat that as normal PC troubleshooting, not as a game-specific NVIDIA DLSS 5 rule. If a menu option appears only after changing adapters, record that configuration before comparing image quality, latency, reflections, foliage stability, and traversal smoothness in a repeatable scene with the same weather and camera route. That makes later comparisons easier to trust and repeat.",
    ],
    faq: [
      {
        question: "Does Assassin's Creed Shadows support DLSS 5?",
        answer:
          "NVIDIA has announced the game for DLSS 5. Public availability still needs a Ubisoft patch and visible game setting.",
      },
      {
        question: "Can I enable DLSS 5 in Assassin's Creed Shadows now?",
        answer:
          "Do not assume so from an existing DLSS label. Wait for official patch notes and a specific DLSS 5 or Neural Rendering option in the current game build.",
      },
      {
        question: "Will DLSS 5 improve frame rate in Assassin's Creed Shadows?",
        answer:
          "DLSS 5 is presented primarily as a lighting and material fidelity feature. Super Resolution and Frame Generation remain the clearer performance-focused tools. Final performance still needs testing.",
      },
      {
        question: "What should I compare after the update?",
        answer:
          "Test foliage in motion, weather transitions, wet materials, character skin and cloth, base frame rate, latency, and visual consistency between bright and dark scenes.",
      },
    ],
    sources: [
      {
        label: "NVIDIA DLSS 5 announcement",
        href: NVIDIA_DLSS5_ANNOUNCEMENT,
      },
      {
        label: "NVIDIA RTX games and applications list",
        href: NVIDIA_RTX_GAMES,
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
            {gameKey === "nba-2k27"
              ? `What DLSS 5 changes in ${guide.name}`
              : `What DLSS 5 could change in ${guide.name}`}
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
          {gameKey !== "nba-2k27" ? (
            <Link
              href="/games/nba-2k27-dlss-5"
              className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
            >
              <div className="mb-1 font-semibold">NBA 2K27 DLSS 5 setup</div>
              <p className="text-sm text-muted-foreground">
                See the first live DLSS 5 game, driver requirement, setting path, and RTX
                40 status.
              </p>
            </Link>
          ) : null}
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
