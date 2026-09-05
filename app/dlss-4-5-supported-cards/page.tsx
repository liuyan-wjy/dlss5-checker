import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.dlss5.net/dlss-4-5-supported-cards";
const META_TITLE = "DLSS 4.5 Supported Cards: RTX 20–50 GPU Guide";
const META_DESCRIPTION =
  "Check DLSS 4.5 support on RTX 20, 30, 40, and 50 cards. Compare Super Resolution, Ray Reconstruction, Frame Generation, MFG, and setup needs.";
const NVIDIA_DLSS = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";
const NVIDIA_DLSS_45 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/";
const NVIDIA_DYNAMIC_MFG =
  "https://www.nvidia.com/en-us/geforce/news/nvidia-app-dlss-4-5-dynamic-multi-frame-generation-available-now/";
const NVIDIA_RR_NEWS =
  "https://www.nvidia.com/en-gb/geforce/news/gamescom-2026-dlss-4-5-ray-reconstruction-release-announcements-trailers/";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/dlss-4-5-supported-cards",
    languages: {
      en: PAGE_URL,
      "pt-BR": "https://www.dlss5.net/pt/dlss-4-5-quais-placas",
    },
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "article",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const matrixRows = [
  {
    cards: "RTX 50 Series",
    examples: "RTX 5050, 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090 and laptop models",
    sr: "Yes, Models M/L/K",
    rr: "Yes",
    fg: "Yes",
    mfg: "Yes, including Dynamic MFG",
    bestUse: "Complete DLSS 4.5 feature stack and high-refresh gaming",
  },
  {
    cards: "RTX 40 Series",
    examples: "RTX 4050, 4060, 4070, 4080, 4090 and laptop models",
    sr: "Yes, Models M/L/K",
    rr: "Yes",
    fg: "Yes",
    mfg: "No",
    bestUse: "New reconstruction models plus standard Frame Generation",
  },
  {
    cards: "RTX 30 Series",
    examples: "RTX 3050, 3060, 3070, 3080, 3090 and Ti/laptop variants",
    sr: "Yes, heavier Models M/L/K",
    rr: "Yes",
    fg: "No",
    mfg: "No",
    bestUse: "Image reconstruction, with performance checked per game",
  },
  {
    cards: "RTX 20 Series",
    examples: "RTX 2060, 2070, 2080, Super variants, 2080 Ti and laptops",
    sr: "Yes, heavier Models M/L/K",
    rr: "Yes",
    fg: "No",
    mfg: "No",
    bestUse: "Super Resolution and selective Ray Reconstruction",
  },
];

const modelRows = [
  {
    model: "Model K",
    intendedMode: "Quality, Balanced, and native-resolution DLAA modes",
    practicalAdvice: "Start here for ordinary image-quality testing. Compare motion stability, fine lines, text, foliage, and transparent effects.",
  },
  {
    model: "Model M",
    intendedMode: "Performance mode",
    practicalAdvice: "Designed for lower internal resolution than Quality mode. It can be useful at 4K, but older RTX cards may feel the model cost more strongly.",
  },
  {
    model: "Model L",
    intendedMode: "Ultra Performance mode",
    practicalAdvice: "Best reserved for very high output resolution or a demanding ray-traced workload. Inspect fine detail carefully because the input resolution is low.",
  },
];

const faqItems = [
  {
    question: "Which cards support DLSS 4.5?",
    answer:
      "GeForce RTX 20, 30, 40, and 50 Series cards support the DLSS 4.5 Super Resolution and Ray Reconstruction path in compatible games. RTX 40 and RTX 50 also support Frame Generation. Multi Frame Generation, Dynamic MFG, and 6X modes require RTX 50.",
  },
  {
    question: "Does the RTX 4060 support DLSS 4.5?",
    answer:
      "Yes. An RTX 4060 can use compatible DLSS 4.5 Super Resolution models, Ray Reconstruction, DLAA, and Frame Generation. It cannot use Multi Frame Generation or Dynamic Multi Frame Generation, which are RTX 50-only.",
  },
  {
    question: "Does the RTX 3070 support DLSS 4.5?",
    answer:
      "Yes, but only the features available to RTX 30. The RTX 3070 can use supported Super Resolution, DLAA, and Ray Reconstruction models. It does not gain Frame Generation, MFG, or Dynamic MFG.",
  },
  {
    question: "Does the RTX 4050 laptop GPU support DLSS 4.5?",
    answer:
      "Yes. RTX 4050 laptop GPUs are part of the RTX 40 generation and can use Super Resolution, Ray Reconstruction, DLAA, and Frame Generation in compatible laptop and game configurations. They do not support MFG or Dynamic MFG.",
  },
  {
    question: "Do I need the NVIDIA App for DLSS 4.5?",
    answer:
      "Not for every native game integration. The NVIDIA App is required when you want to use a supported model override or an Early Access option supplied through the app. A current driver and a compatible game profile are still required.",
  },
  {
    question: "Is DLSS 4.5 the same as DLSS 5?",
    answer:
      "No. DLSS 4.5 is the reconstruction and frame-generation stack. DLSS 5 Neural Rendering launched separately in September 2026 for real-time neural rendering of lighting and materials.",
  },
];

export default function Dlss45SupportedCardsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "DLSS 5 Checker", item: "https://www.dlss5.net" },
      { "@type": "ListItem", position: 2, name: "DLSS 4.5 Supported Cards", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "DLSS 4.5 Supported Cards: RTX 20 to RTX 50 GPU Guide",
    url: PAGE_URL,
    datePublished: "2026-08-26",
    dateModified: "2026-09-05",
    inLanguage: "en",
    author: { "@type": "Person", name: "DLSS 5 Checker Editor" },
    publisher: { "@type": "Organization", name: "DLSS 5 Checker", url: "https://www.dlss5.net" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">DLSS 5 Checker</Link>
          <span className="mx-2">/</span>
          <span>DLSS 4.5 supported cards</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">Hardware and setup guide · Reviewed September 5, 2026</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS 4.5 Supported Cards: What Every RTX Generation Can Use
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            DLSS 4.5 supports every GeForce RTX generation, but feature support is not
            identical. This guide shows what works on RTX 20, 30, 40, and 50 cards, explains
            the Model M, L, and K presets, and gives you a reliable setup path for a specific game.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-green-500/30 bg-green-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">DLSS 4.5 supported cards: direct answer</h2>
          <p className="leading-relaxed text-foreground/80">
            RTX 20, RTX 30, RTX 40, and RTX 50 Series cards can use DLSS 4.5 Super Resolution,
            DLAA, and Ray Reconstruction when the game or supported NVIDIA App profile provides
            them. RTX 40 and RTX 50 also support standard Frame Generation. RTX 50 is required
            for Multi Frame Generation, Dynamic Multi Frame Generation, and the 6X mode.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Support is therefore a feature matrix, not a yes-or-no badge. An RTX 3070 and RTX
            5090 can both run a DLSS 4.5 reconstruction model, but only the RTX 5090 has the full
            multi-frame stack. An RTX 4060 sits between them: it can use Frame Generation, but
            not MFG. The table below gives the useful answer for each generation.
          </p>
        </section>

        <figure className="mb-10">
          <figcaption className="mb-3 text-2xl font-bold">DLSS 4.5 GPU compatibility matrix</figcaption>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3">Cards</th><th className="p-3">Examples</th>
                  <th className="p-3">Super Resolution</th><th className="p-3">Ray Reconstruction</th>
                  <th className="p-3">Frame Generation</th><th className="p-3">Multi Frame Generation</th>
                  <th className="p-3">Best fit</th>
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row) => (
                  <tr key={row.cards} className="border-t border-border align-top">
                    <th className="p-3 text-left font-semibold">{row.cards}</th>
                    <td className="p-3 text-muted-foreground">{row.examples}</td>
                    <td className="p-3 text-green-400">{row.sr}</td>
                    <td className="p-3 text-green-400">{row.rr}</td>
                    <td className="p-3">{row.fg}</td>
                    <td className="p-3">{row.mfg}</td>
                    <td className="p-3 text-muted-foreground">{row.bestUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            “Yes” means the generation is eligible. The game still needs the relevant integration
            or an NVIDIA App override, and performance varies by model, resolution, and preset.
          </p>
        </figure>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">What “supports DLSS 4.5” actually means</h2>
          <p className="leading-relaxed">
            DLSS 4.5 is an update to several parts of the DLSS stack. The second-generation
            transformer Super Resolution model reconstructs a higher-resolution image from fewer
            rendered pixels. Ray Reconstruction applies a newer model to noisy ray-traced and
            path-traced signals. Frame Generation improves smoothness by creating an additional
            displayed frame, while the RTX 50-only multi-frame modes create more than one.
          </p>
          <p className="leading-relaxed">
            A card does not need every feature to benefit from DLSS 4.5. RTX 20 and RTX 30 owners
            can use supported reconstruction updates even though the Frame Generation switch stays
            unavailable. RTX 40 owners receive reconstruction plus Frame Generation, including an
            enhanced Frame Generation model in selected titles. RTX 50 owners receive those updates
            and the expanded MFG controls.
          </p>
          <p className="leading-relaxed">
            Game support is equally important. A driver cannot invent motion vectors, engine data,
            and integration points that a title does not provide. NVIDIA App overrides can select a
            newer model for supported profiles, but they are not universal mods. If a title is absent
            from the app&apos;s compatible profile list, treat the game&apos;s own settings and patch notes as
            the authority.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Super Resolution Models M, L, and K</h2>
          <p className="mb-5 leading-relaxed text-foreground/80">
            DLSS 4.5 uses different models for different input-resolution ranges. NVIDIA identifies
            Model M with Performance mode, Model L with Ultra Performance, and Model K with other
            modes. That mapping is more useful than choosing the newest letter blindly because each
            preset solves a different rendering problem.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {modelRows.map((row) => (
              <div key={row.model} className="rounded-lg border border-border p-5">
                <h3 className="mb-2 text-lg font-bold">{row.model}</h3>
                <p className="mb-3 text-sm font-medium text-blue-400">{row.intendedMode}</p>
                <p className="text-sm leading-relaxed text-foreground/80">{row.practicalAdvice}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-foreground/80">
            RTX 40 and RTX 50 cards have native FP8 acceleration that suits the new models. RTX 20
            and RTX 30 cards can still run them, but NVIDIA notes that Models M and L have a greater
            performance cost on those older generations. Do not interpret compatibility as a promise
            that the most demanding model will improve the overall experience on every card.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 50: all DLSS 4.5 features</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 50 cards are eligible for the complete feature set, including Dynamic MFG and
                the 6X option. Dynamic MFG changes the multiplier according to the GPU workload and
                the monitor&apos;s refresh target rather than holding one fixed multiplier for every scene.
              </p>
              <p>
                Use it when the base game is already responsive and the display can show the added
                frames. A 60 Hz screen does not gain the same value as a 240 Hz or 360 Hz panel.
                Current Dynamic MFG guidance also requires care with V-Sync and external frame caps,
                so verify the current profile notes before troubleshooting uneven pacing.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 40: reconstruction plus Frame Generation</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 40 cards, including RTX 4050 laptops and desktop RTX 4060 through RTX 4090
                models, can combine DLSS 4.5 reconstruction with standard Frame Generation. They do
                not become MFG cards through a driver update because NVIDIA&apos;s hardware matrix keeps
                MFG on RTX 50.
              </p>
              <p>
                This is still a meaningful upgrade path. In compatible titles, an RTX 40 card can
                use the newer Super Resolution model, Ray Reconstruction, and an enhanced Frame
                Generation model. Choose settings around the card&apos;s native performance and VRAM
                rather than treating the lack of MFG as a reason to replace a capable GPU.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 30: supported with clear limits</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 3050, 3060, 3070, 3080, and 3090-class cards can use the DLSS 4.5 Super
                Resolution and Ray Reconstruction path. They do not support Frame Generation or
                either MFG mode. The most important test is whether the new transformer model&apos;s
                image improvement justifies its cost on the exact GPU.
              </p>
              <p>
                At 1440p, Quality mode may offer the best balance. At 4K, Performance mode can
                recover more frame rate, but Model M is relatively heavier on RTX 30. Use a built-in
                benchmark when available, then inspect gameplay with camera movement. A still image
                can hide shimmer, ghosting, and delayed detail.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 20: eligible, but test the workload</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 2060 through RTX 2080 Ti cards remain within the Super Resolution, DLAA, and
                Ray Reconstruction support group. They lack Frame Generation, and their lower
                performance headroom makes aggressive ray tracing the main constraint in many new games.
              </p>
              <p>
                Start from a stable rasterized preset, add the ray-traced effect you actually value,
                and then select a DLSS mode. Ray Reconstruction can clean up supported effects, but it
                does not remove the base cost of tracing them. Lowering one expensive ray-tracing
                setting may help more than choosing Ultra Performance automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">August 2026 Ray Reconstruction status</h2>
          <div className="space-y-4 leading-relaxed text-foreground/80">
            <p>
              NVIDIA announced that the second-generation DLSS 4.5 Ray Reconstruction model is
              available through NVIDIA App Early Access in August 2026, with the regular release
              planned for September. NVIDIA&apos;s Gamescom guidance lists driver 580.88 or newer for
              this Early Access path. It is an all-RTX feature, so RTX 20, 30, 40, and 50 cards are
              within the stated hardware group.
            </p>
            <p>
              Early Access availability is not the same as every game switching models at once.
              NVIDIA&apos;s current path is to open the game&apos;s Graphics profile in the NVIDIA App, use
              Driver Settings, choose DLSS Override Model Presets, select Custom, and apply the
              recommended Ray Reconstruction preset where the profile supports it. If those controls
              are absent, confirm the app version, driver, game profile, and regional rollout before
              assuming the GPU is incompatible.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">How to enable DLSS 4.5 safely</h2>
          <ol className="space-y-4 text-foreground/80">
            <li><strong className="text-foreground">1. Confirm the GPU generation.</strong> Use the NVIDIA App or Windows Task Manager. The exact series determines which frame-generation controls can appear.</li>
            <li><strong className="text-foreground">2. Update official software.</strong> Install the current NVIDIA Game Ready Driver and NVIDIA App. NVIDIA listed driver 580.88 or newer for the August Ray Reconstruction Early Access path; later releases should use the current supported driver rather than an archived package.</li>
            <li><strong className="text-foreground">3. Update the game.</strong> Read the game&apos;s patch notes and look for the exact feature. “DLSS supported” may refer only to Super Resolution.</li>
            <li><strong className="text-foreground">4. Check the NVIDIA App profile.</strong> Use an override only when the game profile exposes it. Choose the game, open Graphics, and review the DLSS override controls.</li>
            <li><strong className="text-foreground">5. Set a healthy base frame rate.</strong> Lower the heaviest graphics settings before enabling Frame Generation or MFG. Generated frames do not repair slow input response from a very low base rate.</li>
            <li><strong className="text-foreground">6. Compare like with like.</strong> Keep output resolution, camera path, and ray-tracing preset fixed. Measure frame rate, frame pacing, input feel, and moving image quality.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Common reasons the option is missing</h2>
          <p className="leading-relaxed">
            The most common reason is a feature mismatch. An RTX 3070 will never show NVIDIA Frame
            Generation because RTX 30 is outside that hardware group, even though Super Resolution
            works. An RTX 4060 will not show MFG for the same reason. Verify the row in the matrix
            before reinstalling drivers or changing Windows settings.
          </p>
          <p className="leading-relaxed">
            The second reason is game support. Some titles include only Super Resolution, some add
            Frame Generation, and a smaller set supports Ray Reconstruction or NVIDIA App overrides.
            A feature may also be limited to DirectX 12, require hardware-accelerated GPU scheduling,
            or appear only after ray tracing is enabled. Follow the title&apos;s own setup notes.
          </p>
          <p className="leading-relaxed">
            Finally, remove unofficial DLL swaps while troubleshooting. Community tools can be useful
            for experimentation, but they change the test conditions and may trigger anti-cheat or
            stability problems. Establish whether the official game, app, and driver path works first.
            That gives you a clean baseline and avoids mistaking a mod conflict for missing GPU support.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link href="/dlss-supported-cards" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">All DLSS supported cards</div>
            <p className="text-sm text-muted-foreground">Compare every current DLSS feature across RTX 20, 30, 40, and 50.</p>
          </Link>
          <Link href="/pt/dlss-4-5-quais-placas" hrefLang="pt-BR" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Versão em português do Brasil</div>
            <p className="text-sm text-muted-foreground">Veja a lista de placas e as orientações com termos usados no Brasil.</p>
          </Link>
          <Link href="/dlss-4-5-ray-reconstruction" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 4.5 Ray Reconstruction</div>
            <p className="text-sm text-muted-foreground">Check the current model, announced games, setup, and moving-image tests.</p>
          </Link>
          <Link href="/dlss-4-5-dynamic-mfg-settings" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Dynamic MFG settings</div>
            <p className="text-sm text-muted-foreground">Configure RTX 50 multipliers and avoid common frame-pacing conflicts.</p>
          </Link>
          <Link href="/dlss-4-5-games" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 4.5 games</div>
            <p className="text-sm text-muted-foreground">Check whether a title supplies the feature that your card can use.</p>
          </Link>
          <Link href="/dlss-5-vs-dlss-4-5" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5 vs DLSS 4.5</div>
            <p className="text-sm text-muted-foreground">Separate current reconstruction features from launched DLSS 5 Neural Rendering.</p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Primary sources and limits</h2>
          <p>
            Compatibility is based on NVIDIA&apos;s official{" "}
            <a href={NVIDIA_DLSS} rel="noreferrer" className="text-blue-400 hover:underline">DLSS feature matrix</a>,{" "}
            <a href={NVIDIA_DLSS_45} rel="noreferrer" className="text-blue-400 hover:underline">DLSS 4.5 model announcement</a>,{" "}
            <a href={NVIDIA_DYNAMIC_MFG} rel="noreferrer" className="text-blue-400 hover:underline">Dynamic MFG release guidance</a>, and{" "}
            <a href={NVIDIA_RR_NEWS} rel="noreferrer" className="text-blue-400 hover:underline">Gamescom 2026 Ray Reconstruction update</a>.
            Published by the DLSS 5 Checker Editor on August 26, 2026 and reviewed on September 5,
            2026. A supported GPU
            does not guarantee a feature in every game, and app profiles, driver requirements, and
            Early Access availability can change after publication.
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
      </main>
    </>
  );
}
