import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export type Dlss5GameGuideKey =
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
  "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";
const NVIDIA_RAY_RECONSTRUCTION =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-ray-reconstruction-1000-rtx-games-apps-out-now/";
const NVIDIA_CAPCOM_PATH_TRACING = "https://developer.nvidia.com/blog/?p=119888";

const gameGuides: Record<Dlss5GameGuideKey, GameGuide> = {
  "resident-evil-requiem": {
    name: "Resident Evil Requiem",
    canonical: "/games/resident-evil-requiem-dlss-5",
    metaTitle: "Resident Evil Requiem DLSS 5: Support and Settings",
    metaDescription:
      "Check Resident Evil Requiem DLSS 5 support, current path tracing and Ray Reconstruction evidence, expected settings, GPU caveats, and what to verify.",
    eyebrow: "Game support guide · Updated July 28, 2026",
    title: "Resident Evil Requiem DLSS 5: Support, Path Tracing, and Settings",
    description:
      "Resident Evil Requiem is an officially announced DLSS 5 title, but that does not mean the new feature is available in the public game today. This guide separates the confirmed announcement from current path-tracing technology and shows players exactly what to check when the update arrives.",
    fastAnswer:
      "Yes, NVIDIA names Resident Evil Requiem as a planned DLSS 5 game. DLSS 5 itself is scheduled for Fall 2026, so the correct current status is announced, not verified in a public settings menu.",
    availability:
      "Current Capcom and NVIDIA material documents path tracing, DLSS Ray Reconstruction, and Multi Frame Generation in the RE ENGINE pipeline. Those are not interchangeable with the future DLSS 5 Neural Rendering option.",
    nextProof:
      "A Capcom patch note, compatible NVIDIA driver, and a visible in-game DLSS 5 or Neural Rendering control are still needed before players should treat support as live.",
    confirmed: [
      "NVIDIA includes Resident Evil Requiem in the first announced group of DLSS 5 games.",
      "NVIDIA says DLSS 5 is planned for Fall 2026 rather than being generally available now.",
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
      "If you already own the game, wait for Capcom's actual patch notes before changing drivers or settings solely for DLSS 5. An NVIDIA announcement confirms planned integration, but it does not establish the public build number, exact menu label, or supported GPU tiers.",
      "When the update arrives, compare the same checkpoint rather than relying on a fast-moving trailer. Use a dark interior with a face, moving hair, reflective material, and one strong light source. Keep resolution, ray-tracing level, frame-generation mode, and camera position consistent so the Neural Rendering comparison is meaningful.",
      "For lower-end RTX hardware, prioritize a stable base frame rate before enabling Frame Generation. Ray Reconstruction and DLSS 5 may improve image quality, but they do not remove the CPU and GPU cost of the underlying path-traced scene. The best-looking preset is not automatically the best way to play.",
    ],
    faq: [
      {
        question: "Does Resident Evil Requiem support DLSS 5 now?",
        answer:
          "NVIDIA has announced Resident Evil Requiem as a DLSS 5 title, but DLSS 5 is scheduled for Fall 2026. Treat support as announced until Capcom publishes a patch and the option appears in a public game build.",
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
    eyebrow: "Game support guide · Updated July 28, 2026",
    title: "Starfield DLSS 5: Support Status, Update Timing, and Player Checklist",
    description:
      "Starfield is on NVIDIA's announced DLSS 5 list. This page explains what that announcement confirms, what Bethesda still needs to document, and how to evaluate the feature without confusing Neural Rendering with the DLSS options already available in the game.",
    fastAnswer:
      "Starfield is officially planned to receive DLSS 5, but NVIDIA has only given a Fall 2026 window for the technology. There is no safe reason to call the Starfield integration live until a public update and settings menu confirm it.",
    availability:
      "Starfield already has a history of DLSS updates, but an existing Super Resolution or Frame Generation option is not evidence that DLSS 5 Neural Rendering has shipped.",
    nextProof:
      "The decisive evidence will be Bethesda patch notes naming DLSS 5, a driver or NVIDIA App path, and repeatable settings in the current public build.",
    confirmed: [
      "NVIDIA includes Starfield in its announced DLSS 5 game lineup.",
      "NVIDIA describes DLSS 5 as a Fall 2026 technology focused on lighting and materials.",
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
    ],
    faq: [
      {
        question: "Is DLSS 5 available in Starfield?",
        answer:
          "Not yet based on the public evidence tracked here. NVIDIA has announced Starfield support and a Fall 2026 DLSS 5 window, but Bethesda still needs to ship and document the game update.",
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
    eyebrow: "Game support guide · Updated July 28, 2026",
    title: "Assassin's Creed Shadows DLSS 5: Support Status and Settings Guide",
    description:
      "Assassin's Creed Shadows is officially named for DLSS 5, but the practical player questions are still open: when the update lands, which GPUs qualify, what the control is called, and whether the visual result remains stable through changing weather, foliage, and fast traversal.",
    fastAnswer:
      "NVIDIA has announced Assassin's Creed Shadows for DLSS 5. The technology is planned for Fall 2026, so players should treat the game as confirmed for planned support rather than assume the option is already active.",
    availability:
      "Existing DLSS or ray-tracing settings are current technologies. They do not silently become DLSS 5 just because the game appears in a future-support announcement.",
    nextProof:
      "Ubisoft patch notes, a supported driver path, an in-game Neural Rendering control, and generation-specific GPU guidance are still required.",
    confirmed: [
      "NVIDIA names Assassin's Creed Shadows as an announced DLSS 5 title.",
      "The feature is described as improving lighting and material fidelity with developer controls.",
      "The announced timing is Fall 2026, not a confirmed game-specific patch date.",
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
    ],
    faq: [
      {
        question: "Does Assassin's Creed Shadows support DLSS 5?",
        answer:
          "NVIDIA has announced the game for DLSS 5, with the technology planned for Fall 2026. Public availability still needs a Ubisoft patch and visible game setting.",
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

const featureRows = [
  {
    feature: "DLSS 5 Neural Rendering",
    purpose: "Enhances lighting and material appearance using game data and an AI model.",
    currentStatus: "Announced for Fall 2026; per-game settings still need verification.",
  },
  {
    feature: "DLSS 4.5 Ray Reconstruction",
    purpose: "Replaces multiple denoisers in supported ray-traced and path-traced scenes.",
    currentStatus: "Second-generation model announced for August 2026 on GeForce RTX GPUs.",
  },
  {
    feature: "DLSS Super Resolution",
    purpose: "Reconstructs a higher-resolution image from a lower internal render resolution.",
    currentStatus: "Already available in many games; model and override support vary.",
  },
  {
    feature: "Frame Generation / Multi Frame Generation",
    purpose: "Generates additional frames to improve displayed smoothness.",
    currentStatus: "Hardware tier and game support determine which modes are available.",
  },
];

const verificationSteps = [
  {
    title: "Confirm the game build",
    detail:
      "Read the publisher's patch notes and record the version number. A general NVIDIA announcement is not proof that your installed build contains the feature.",
  },
  {
    title: "Confirm the driver path",
    detail:
      "Install the compatible Game Ready Driver and check whether NVIDIA documents a native integration or NVIDIA App override.",
  },
  {
    title: "Find the exact setting",
    detail:
      "Look for a named DLSS 5, Neural Rendering, or related developer control. Do not infer it from a generic DLSS preset.",
  },
  {
    title: "Hold other settings steady",
    detail:
      "Compare the same resolution, camera position, ray-tracing preset, and Frame Generation mode so one variable changes at a time.",
  },
  {
    title: "Check motion and latency",
    detail:
      "A still image can hide ghosting, shimmer, delayed detail, and responsiveness issues. Test normal play, not only photo mode.",
  },
  {
    title: "Save the evidence",
    detail:
      "Keep the patch note, menu screenshot, driver version, GPU model, and test scene together so the result can be reproduced later.",
  },
];

export function createDlss5GameMetadata(key: Dlss5GameGuideKey): Metadata {
  const guide = gameGuides[key];

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: guide.canonical,
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
            What DLSS 5 could change in {guide.name}
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

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">Do not confuse the DLSS controls</h2>
          <p className="mb-5 leading-relaxed text-foreground/80">
            The DLSS name covers several technologies that solve different problems. Read
            the exact menu label before deciding what changed in {guide.name}.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">What it does</th>
                  <th className="p-3 font-semibold">Status to verify</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.feature} className="border-t border-border align-top">
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 leading-relaxed text-foreground/80">{row.purpose}</td>
                    <td className="p-3 leading-relaxed text-muted-foreground">
                      {row.currentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">
            How to verify the {guide.name} update
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {verificationSteps.map((step, index) => (
              <div key={step.title}>
                <h3 className="mb-1 font-semibold">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
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

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-xl font-bold">Buying advice</h2>
          <p className="leading-relaxed text-foreground/80">
            Do not buy a GPU for this one announced feature until NVIDIA and the game
            publisher publish the final hardware matrix. If you need an upgrade now, judge
            it by the game&apos;s current performance, VRAM needs, ray-tracing workload, and
            the DLSS features that are already verified.
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
            support can change when the public update ships.
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

        <ArticleTrustBlock />
      </main>
    </>
  );
}
