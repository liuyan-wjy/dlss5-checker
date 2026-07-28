import type { Metadata } from "next";
import Link from "next/link";
import ArticleTrustBlock from "@/components/ArticleTrustBlock";

export const metadata: Metadata = {
  title: "DLSS 4.5 Ray Reconstruction: Release Date, GPUs, Games",
  description:
    "DLSS 4.5 Ray Reconstruction explained: August 2026 release, all RTX GPU support, 27 announced games, NVIDIA App setup, image quality, and performance.",
  alternates: {
    canonical: "/dlss-4-5-ray-reconstruction",
  },
};

const NVIDIA_RAY_RECONSTRUCTION =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-ray-reconstruction-1000-rtx-games-apps-out-now/";
const NVIDIA_RTX_GAMES =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-rtx-games-engines-apps/";
const NVIDIA_DLSS_DEVELOPER = "https://developer.nvidia.com/rtx/dlss";

const announcedGames = [
  "Alan Wake 2",
  "Enlisted",
  "NTE: Neverness to Everness",
  "Avatar: Frontiers of Pandora",
  "EVERSPACE 2",
  "Portal with RTX",
  "Backrooms: Escape Together",
  "F1 25",
  "PRAGMATA",
  "Call of Duty: Black Ops 7",
  "FBC: Firebreak",
  "Resident Evil Requiem",
  "Crimson Desert",
  "Half-Life 2 RTX",
  "Samson",
  "Cyberpunk 2077",
  "Hogwarts Legacy",
  "Star Wars Outlaws",
  "Death Relives",
  "Incursion Red River",
  "Subliminal",
  "Directive 8020",
  "Indiana Jones and the Great Circle",
  "Sword of Justice",
  "DOOM: The Dark Ages",
  "NARAKA: BLADEPOINT",
  "The First Descendant",
];

const improvementRows = [
  {
    area: "Denoising model",
    change:
      "A second-generation transformer replaces the prior Ray Reconstruction model.",
    userMeaning:
      "The target is cleaner and more stable ray-traced detail without returning to separate hand-tuned denoisers.",
  },
  {
    area: "Model capacity",
    change: "NVIDIA states 35% more compute capability and 20% more parameters.",
    userMeaning:
      "The model can use more scene information, but the headline numbers are not a promise of 35% more frame rate.",
  },
  {
    area: "Temporal stability",
    change:
      "The model has deeper spatial awareness and uses engine sampling and motion data more intelligently.",
    userMeaning:
      "Look for less shimmer, clearer moving detail, and fewer delayed reflections rather than only sharper still images.",
  },
  {
    area: "Developer control",
    change: "Developers receive finer control over temporal accumulation.",
    userMeaning:
      "A studio can tune the response for its game instead of relying on one universal setting.",
  },
  {
    area: "Performance target",
    change: "NVIDIA says the larger model maintains performance similar to the prior model.",
    userMeaning:
      "Expect game-by-game results. Similar model cost does not erase the cost of ray tracing or path tracing.",
  },
];

const setupSteps = [
  {
    title: "Wait for the August release",
    detail:
      "The second-generation model is announced for August 2026. Before that release, an existing Ray Reconstruction option is not automatically the new 4.5 model.",
  },
  {
    title: "Update through official channels",
    detail:
      "Use the current NVIDIA App and compatible driver. Do not install a third-party DLL or executable advertised as an early DLSS 4.5 download.",
  },
  {
    title: "Check the game's support path",
    detail:
      "Some titles may expose the model natively; others may receive an NVIDIA App override. Confirm the game version and profile before testing.",
  },
  {
    title: "Enable ray tracing or path tracing",
    detail:
      "Ray Reconstruction needs a ray-traced signal to reconstruct. If every ray-traced effect is off, the feature has no relevant input to denoise.",
  },
  {
    title: "Compare one variable at a time",
    detail:
      "Keep resolution, ray-tracing preset, camera position, Super Resolution mode, and Frame Generation mode unchanged between captures.",
  },
  {
    title: "Test movement, not only screenshots",
    detail:
      "Pan the camera around reflections, fine geometry, hair, foliage, particles, and emissive lights to reveal temporal instability.",
  },
];

const faqItems = [
  {
    question: "When is DLSS 4.5 Ray Reconstruction released?",
    answer:
      "NVIDIA says the second-generation DLSS 4.5 Ray Reconstruction model will be available in August 2026. A specific global rollout day has not been confirmed in the cited announcement.",
  },
  {
    question: "Which GPUs support DLSS 4.5 Ray Reconstruction?",
    answer:
      "NVIDIA says the new Ray Reconstruction model will be available for all GeForce RTX GPUs. That statement applies to Ray Reconstruction, not necessarily Dynamic Multi Frame Generation, 6X mode, or future DLSS 5 features.",
  },
  {
    question: "Does DLSS 4.5 Ray Reconstruction increase FPS?",
    answer:
      "Its main job is image reconstruction and denoising in ray-traced scenes. NVIDIA says the larger model maintains performance similar to the previous model, but final frame rate depends on the game, resolution, GPU, and ray-tracing preset.",
  },
  {
    question: "Is DLSS 4.5 Ray Reconstruction the same as DLSS 5?",
    answer:
      "No. Ray Reconstruction is a current-generation denoising and reconstruction feature for ray-traced and path-traced content. DLSS 5 is a separate Fall 2026 Neural Rendering layer focused on lighting and material appearance.",
  },
  {
    question: "Can I use Ray Reconstruction without ray tracing?",
    answer:
      "Ray Reconstruction is designed to replace denoisers for ray-traced or path-traced effects. A game may still offer DLSS Super Resolution without ray tracing, but that is a different feature.",
  },
  {
    question: "Will Blender support DLSS 4.5 Ray Reconstruction?",
    answer:
      "NVIDIA says Blender Cycles will add the model as a denoiser in Blender 5.3, planned for Fall 2026.",
  },
];

export default function Dlss45RayReconstructionPage() {
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
        name: "DLSS 4.5 Ray Reconstruction",
        item: "https://www.dlss5.net/dlss-4-5-ray-reconstruction",
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
          <span>DLSS 4.5 Ray Reconstruction</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">
            Release and compatibility guide · Updated July 28, 2026
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS 4.5 Ray Reconstruction: Release Date, GPUs, Games, and Setup
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The second-generation Ray Reconstruction model is one of the most useful DLSS
            4.5 updates for players who use ray tracing or path tracing. Here is what is
            confirmed for August, which GPUs and games are included, and how to judge image
            quality without confusing it with Frame Generation or DLSS 5.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="mb-2 font-bold">Release date</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              NVIDIA says DLSS 4.5 Ray Reconstruction arrives in August 2026. The cited
              announcement does not give a single worldwide release day.
            </p>
          </div>
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5">
            <h2 className="mb-2 font-bold">Supported GPUs</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The new model is announced for all GeForce RTX GPUs, including older RTX
              generations. Other DLSS 4.5 features can still have narrower requirements.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-2 font-bold">Supported games</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              NVIDIA lists 27 games that the model can enhance at launch. Native support,
              app overrides, and individual rollout timing can still differ by title.
            </p>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">
            What Ray Reconstruction actually does
          </h2>
          <p className="leading-relaxed">
            Ray-traced effects begin with incomplete and noisy light samples because a
            real-time game cannot trace an unlimited number of rays for every pixel.
            Traditional pipelines use several denoisers for reflections, global
            illumination, shadows, and other effects. Each denoiser can lose detail or
            disagree with another one, especially while the camera moves.
          </p>
          <p className="leading-relaxed">
            DLSS Ray Reconstruction replaces those separate denoisers with a
            supercomputer-trained AI model. It analyzes spatial and temporal engine data,
            motion information, and sampled pixels to reconstruct a higher-quality final
            image. In practical terms, the target is more stable reflections, clearer
            indirect lighting, less ghosting, and better fine detail in motion.
          </p>
          <p className="leading-relaxed">
            This is an image-quality feature, not a new frame multiplier. Super Resolution
            reconstructs resolution, Frame Generation creates additional displayed frames,
            and Ray Reconstruction rebuilds noisy ray-traced information. A supported game
            can combine these features, but the menu and hardware rules for each one remain
            separate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">What changes in the 4.5 model</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3 font-semibold">Area</th>
                  <th className="p-3 font-semibold">Official change</th>
                  <th className="p-3 font-semibold">What players should look for</th>
                </tr>
              </thead>
              <tbody>
                {improvementRows.map((row) => (
                  <tr key={row.area} className="border-t border-border align-top">
                    <td className="p-3 font-medium">{row.area}</td>
                    <td className="p-3 leading-relaxed text-foreground/80">{row.change}</td>
                    <td className="p-3 leading-relaxed text-muted-foreground">
                      {row.userMeaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Performance expectations</h2>
          <div className="space-y-4 leading-relaxed text-foreground/80">
            <p>
              NVIDIA says the new model has 35% more compute capability and 20% more
              parameters while maintaining performance similar to the previous model. Read
              that as a model-efficiency claim, not a universal benchmark result.
            </p>
            <p>
              The expensive part of a path-traced preset can still be the rays, geometry,
              lighting, resolution, and base game workload. Test the same scene with the
              same Super Resolution and Frame Generation settings before deciding whether
              the new model is free, faster, or slower on your GPU.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold">
            Announced DLSS 4.5 Ray Reconstruction games
          </h2>
          <p className="mb-5 leading-relaxed text-foreground/80">
            NVIDIA listed the following 27 games when it announced the model. This is a
            launch-target list, not a promise that every title exposes the same switch on
            the same day. Confirm the game patch, driver, and NVIDIA App profile before
            treating one entry as active.
          </p>
          <div className="grid gap-2 rounded-lg border border-border p-5 sm:grid-cols-2 lg:grid-cols-3">
            {announcedGames.map((game) => (
              <div key={game} className="flex gap-2 text-sm text-foreground/80">
                <span className="text-green-400">✓</span>
                <span>{game}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">
            How to enable and verify the new model
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {setupSteps.map((step, index) => (
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
          <h2 className="text-2xl font-bold text-foreground">
            What image-quality problems should improve?
          </h2>
          <p className="leading-relaxed">
            Start with reflections that contain fine lines, text, particles, or rapidly
            changing light. Also inspect chain-link fences, hair, foliage, transparent
            materials, emissive signs, and surfaces revealed from behind the camera. These
            are common places where a temporal denoiser can smear detail or take several
            frames to catch up.
          </p>
          <p className="leading-relaxed">
            A sharper image is not automatically a better image. Watch for flicker,
            over-sharpened edges, crawling noise, trails behind moving objects, and detail
            that changes when you stop the camera. A good result should remain coherent
            during ordinary play and preserve the lighting style chosen by the developer.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Blender 5.3 support</h2>
          <p className="leading-relaxed text-foreground/80">
            NVIDIA says Blender Cycles will integrate DLSS 4.5 Ray Reconstruction as a new
            denoiser in Blender 5.3, planned for Fall 2026. The creator use case is different
            from a game: artists can interact with a scene while seeing a cleaner
            near-final lighting result during look development. Final workflow quality and
            GPU behavior still need testing after the Blender release.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dlss-4-5-games"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">All current DLSS 4.5 game features</div>
            <p className="text-sm text-muted-foreground">
              Check current support signals across Super Resolution, MFG, and ray tracing.
            </p>
          </Link>
          <Link
            href="/dlss-4-5-dynamic-mfg-settings"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">NVIDIA App settings guide</div>
            <p className="text-sm text-muted-foreground">
              Understand app overrides and the current Dynamic MFG controls.
            </p>
          </Link>
          <Link
            href="/dlss-5-vs-dlss-4-5"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">DLSS 5 vs DLSS 4.5</div>
            <p className="text-sm text-muted-foreground">
              Keep the August Ray Reconstruction update separate from Fall Neural Rendering.
            </p>
          </Link>
          <Link
            href="/games/resident-evil-requiem-dlss-5"
            className="rounded-lg border border-border p-4 transition-colors hover:border-blue-400"
          >
            <div className="mb-1 font-semibold">Resident Evil Requiem guide</div>
            <p className="text-sm text-muted-foreground">
              See how path tracing, Ray Reconstruction, and future DLSS 5 support differ.
            </p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Sources and limits</h2>
          <p>
            Primary sources:{" "}
            <a
              href={NVIDIA_RAY_RECONSTRUCTION}
              className="text-blue-400 hover:underline"
              rel="noreferrer"
            >
              NVIDIA&apos;s DLSS 4.5 Ray Reconstruction announcement
            </a>
            ,{" "}
            <a
              href={NVIDIA_RTX_GAMES}
              className="text-blue-400 hover:underline"
              rel="noreferrer"
            >
              NVIDIA&apos;s RTX games and applications list
            </a>
            , and{" "}
            <a
              href={NVIDIA_DLSS_DEVELOPER}
              className="text-blue-400 hover:underline"
              rel="noreferrer"
            >
              NVIDIA&apos;s DLSS developer overview
            </a>
            . The game list, app override path, and driver requirements can change after
            publication.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqItems.map((item) => (
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
