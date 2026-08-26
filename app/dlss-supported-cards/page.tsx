import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.dlss5.net/dlss-supported-cards";
const META_TITLE = "DLSS Supported Cards: RTX 20, 30, 40 & 50 Guide";
const META_DESCRIPTION =
  "See which NVIDIA cards support DLSS Super Resolution, Ray Reconstruction, Frame Generation, Multi Frame Generation, Dynamic MFG, and DLAA by GPU.";
const NVIDIA_DLSS = "https://www.nvidia.com/en-us/geforce/technologies/dlss/";
const NVIDIA_DLSS_45 =
  "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-dynamic-multi-frame-gen-6x-2nd-gen-transformer-super-res/";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/dlss-supported-cards" },
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

const compatibilityRows = [
  {
    generation: "GeForce RTX 50 Series",
    examples: "RTX 5050 through RTX 5090, including laptop variants",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    frameGeneration: "Yes",
    multiFrameGeneration: "Yes",
    dynamicMfg: "Yes",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 40 Series",
    examples: "RTX 4050 through RTX 4090, desktop and laptop",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    frameGeneration: "Yes",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 30 Series",
    examples: "RTX 3050 through RTX 3090 Ti, desktop and laptop",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce RTX 20 Series",
    examples: "RTX 2060 through RTX 2080 Ti, plus RTX 20 laptops",
    superResolution: "Yes",
    rayReconstruction: "Yes",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "Yes",
  },
  {
    generation: "GeForce GTX and non-NVIDIA cards",
    examples: "GTX 10/16, AMD Radeon, Intel Arc",
    superResolution: "No",
    rayReconstruction: "No",
    frameGeneration: "No",
    multiFrameGeneration: "No",
    dynamicMfg: "No",
    dlaa: "No",
  },
];

const faqItems = [
  {
    question: "What graphics cards support DLSS?",
    answer:
      "DLSS is supported on NVIDIA GeForce RTX graphics cards. RTX 20, 30, 40, and 50 Series cards can use Super Resolution, Ray Reconstruction, and DLAA in compatible games. RTX 40 and 50 add Frame Generation, while Multi Frame Generation and Dynamic Multi Frame Generation are limited to RTX 50.",
  },
  {
    question: "Does the RTX 3050 support DLSS?",
    answer:
      "Yes. The RTX 3050 supports DLSS Super Resolution, DLAA, and Ray Reconstruction where a game offers them. It does not support NVIDIA DLSS Frame Generation, Multi Frame Generation, or Dynamic MFG.",
  },
  {
    question: "Does the RTX 3070 support DLSS 3 or DLSS 4?",
    answer:
      "An RTX 3070 can use newer Super Resolution and Ray Reconstruction models delivered through supported games or NVIDIA App overrides. It cannot use Frame Generation or Multi Frame Generation. A version label does not grant every feature in that version to every RTX card.",
  },
  {
    question: "Does the RTX 4060 support DLSS?",
    answer:
      "Yes. The RTX 4060 supports Super Resolution, Ray Reconstruction, DLAA, and Frame Generation. It does not support RTX 50-only Multi Frame Generation or Dynamic Multi Frame Generation.",
  },
  {
    question: "Can GTX cards use DLSS?",
    answer:
      "No. GeForce GTX cards do not contain the RTX Tensor Core path required by DLSS. A game may offer another upscaler such as FSR or XeSS, but selecting one of those is not the same as enabling DLSS.",
  },
  {
    question: "Does every game on an RTX card support DLSS?",
    answer:
      "No. Hardware eligibility is only the first requirement. The game must integrate the specific DLSS feature, and some newer model overrides also require a supported NVIDIA App profile and current driver.",
  },
];

function SupportMark({ value }: { value: string }) {
  return (
    <span className={value === "Yes" ? "font-semibold text-green-400" : "text-muted-foreground"}>
      {value}
    </span>
  );
}

export default function DlssSupportedCardsPage() {
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
      { "@type": "ListItem", position: 2, name: "DLSS Supported Cards", item: PAGE_URL },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "DLSS Supported Cards: RTX 20, 30, 40 and 50 Guide",
    url: PAGE_URL,
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
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
          <span>DLSS supported cards</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-blue-400">Compatibility guide · Updated August 26, 2026</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            DLSS Supported Cards: RTX 20, 30, 40, and 50 Series Compared
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every GeForce RTX generation supports DLSS, but not every RTX card supports every
            DLSS feature. This guide separates Super Resolution, Ray Reconstruction, Frame
            Generation, Multi Frame Generation, Dynamic MFG, and DLAA so you can check the
            feature that matters before changing settings or buying a GPU.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
          <h2 className="mb-3 text-2xl font-bold">Short answer: which cards support DLSS?</h2>
          <p className="leading-relaxed text-foreground/80">
            NVIDIA DLSS works on GeForce RTX 20, RTX 30, RTX 40, and RTX 50 Series graphics
            cards. All four generations can use DLSS Super Resolution, Ray Reconstruction,
            and DLAA when the game supports the feature. RTX 40 and RTX 50 cards can also use
            Frame Generation. Multi Frame Generation and the newer Dynamic Multi Frame
            Generation modes are RTX 50-only features. GTX cards, AMD Radeon cards, and Intel
            Arc cards do not support NVIDIA DLSS.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            That distinction matters because a game may advertise “DLSS 4” or “DLSS 4.5” while
            exposing a different set of options on each generation. An RTX 3070 can receive a
            newer Super Resolution model without gaining Frame Generation. An RTX 4060 can use
            Frame Generation without gaining Multi Frame Generation. Check the feature, not only
            the version number.
          </p>
        </section>

        <figure className="mb-10">
          <figcaption className="mb-3 text-2xl font-bold">DLSS card compatibility matrix</figcaption>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[900px] text-sm">
              <thead className="bg-muted/40 text-left">
                <tr>
                  <th className="p-3">GPU family</th><th className="p-3">Typical cards</th>
                  <th className="p-3">Super Resolution</th><th className="p-3">Ray Reconstruction</th>
                  <th className="p-3">Frame Generation</th><th className="p-3">MFG</th>
                  <th className="p-3">Dynamic MFG</th><th className="p-3">DLAA</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityRows.map((row) => (
                  <tr key={row.generation} className="border-t border-border align-top">
                    <th className="p-3 text-left font-semibold">{row.generation}</th>
                    <td className="p-3 text-muted-foreground">{row.examples}</td>
                    <td className="p-3"><SupportMark value={row.superResolution} /></td>
                    <td className="p-3"><SupportMark value={row.rayReconstruction} /></td>
                    <td className="p-3"><SupportMark value={row.frameGeneration} /></td>
                    <td className="p-3"><SupportMark value={row.multiFrameGeneration} /></td>
                    <td className="p-3"><SupportMark value={row.dynamicMfg} /></td>
                    <td className="p-3"><SupportMark value={row.dlaa} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The matrix describes hardware eligibility. A specific option still depends on the
            game, its patch level, the driver, and in some cases an NVIDIA App override.
          </p>
        </figure>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Why the DLSS version number can be misleading</h2>
          <p className="leading-relaxed">
            DLSS is a collection of technologies rather than one switch. Super Resolution
            reconstructs a higher-resolution image from a lower internal resolution. DLAA uses
            the reconstruction model at native resolution for anti-aliasing. Ray Reconstruction
            rebuilds noisy ray-traced signals. Frame Generation inserts one generated frame
            between traditionally rendered frames, while Multi Frame Generation can create
            several. Those features have different hardware paths even when NVIDIA groups them
            under one DLSS release name.
          </p>
          <p className="leading-relaxed">
            This is why “supports DLSS 3” is an incomplete answer for an RTX 3060. The card can
            use the Super Resolution improvements associated with that era, but it cannot enable
            the RTX 40-only Frame Generation feature. The same logic applies to DLSS 4 and 4.5.
            Older RTX cards can use compatible reconstruction models, yet the frame-generation
            controls remain limited by GPU generation.
          </p>
          <p className="leading-relaxed">
            Marketing pages and game menus also use labels differently. One title may show a
            single “DLSS” selector for Super Resolution, another may list Ray Reconstruction and
            Frame Generation separately, and a third may expose a newer model only through an
            NVIDIA App profile. When you troubleshoot, record the exact game version and option
            name instead of assuming that one DLSS badge guarantees the complete feature stack.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 50 Series support</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 50 is the only generation in NVIDIA&apos;s current matrix with the full stack:
                Super Resolution, DLAA, Ray Reconstruction, Frame Generation, Multi Frame
                Generation, and Dynamic Multi Frame Generation. That makes it the broadest DLSS
                choice for a new purchase.
              </p>
              <p>
                Full hardware eligibility does not make every setting sensible. Multi Frame
                Generation needs a stable base frame rate and benefits from a high-refresh-rate
                display. Dynamic MFG also depends on compatible game profiles and can conflict
                with V-Sync or external frame-rate limiters in current implementations. Test
                latency and animation consistency instead of choosing the largest multiplier by default.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 40 Series support</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 40 cards support Super Resolution, DLAA, Ray Reconstruction, and standard
                Frame Generation. This includes desktop cards such as the RTX 4060, 4070, 4080,
                and 4090 as well as laptop versions, provided the individual game supports the option.
              </p>
              <p>
                RTX 40 does not support Multi Frame Generation or Dynamic MFG. A DLSS 4.5 game may
                still provide a newer Super Resolution model and an enhanced Frame Generation model,
                so “no MFG” does not mean “no DLSS 4.5.” It means the card receives the compatible
                parts of the stack rather than the RTX 50-only multipliers.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 30 Series support</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 30 cards support Super Resolution, DLAA, and Ray Reconstruction. Models such
                as the RTX 3050, 3060, 3070, 3080, and 3090 do not support NVIDIA Frame Generation.
                They can still gain image-quality improvements when a compatible game or app
                profile supplies a newer reconstruction model.
              </p>
              <p>
                The practical limit is performance. New transformer models may be more demanding
                on RTX 20 and RTX 30 hardware because those generations do not have the same native
                FP8 acceleration as newer cards. A quality mode that looks better but reduces the
                base frame rate may not be worthwhile on every GPU. Compare the original preset,
                the new model, and a lower internal resolution in the same scene.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h2 className="mb-3 text-xl font-bold">RTX 20 Series support</h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <p>
                RTX 20 introduced the Tensor Core hardware path used by DLSS. The RTX 2060, 2070,
                2080, their Super variants, and the RTX 2080 Ti remain eligible for Super Resolution,
                DLAA, and Ray Reconstruction. They do not support Frame Generation or MFG.
              </p>
              <p>
                These cards often benefit most from sensible expectations. Super Resolution can
                extend useful life at 1080p or 1440p, but heavy path tracing may still overwhelm
                the base rendering workload. Ray Reconstruction can improve a supported ray-traced
                image; it cannot make an otherwise unplayable path-tracing preset inexpensive.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">What about GTX, Radeon, and Intel Arc?</h2>
          <p className="leading-relaxed">
            GeForce GTX cards do not support DLSS. The name “GeForce” is not enough; DLSS requires
            RTX-class hardware. This excludes popular GTX models such as the GTX 1060, GTX 1650,
            GTX 1660, GTX 1070, and GTX 1080 Ti. Replacing a game&apos;s DLSS file or forcing a menu
            flag will not add the missing Tensor Core path.
          </p>
          <p className="leading-relaxed">
            AMD Radeon and Intel Arc cards also cannot run NVIDIA DLSS. Many games provide AMD FSR
            or Intel XeSS as alternatives, sometimes even on an NVIDIA card. Those technologies can
            serve a similar user goal, such as increasing frame rate, but their supported modes,
            artifacts, and hardware rules differ. Use the option designed for the installed GPU and
            avoid unofficial downloads that claim to convert unsupported hardware into a DLSS card.
          </p>
        </section>

        <section className="mb-10 rounded-lg border border-border p-5">
          <h2 className="mb-4 text-2xl font-bold">How to verify DLSS support on your PC</h2>
          <ol className="space-y-4 text-foreground/80">
            <li><strong className="text-foreground">1. Identify the exact GPU.</strong> Open Task Manager, the NVIDIA App, or Device Manager and record the full model. Laptop and desktop cards with similar names can have different power limits even when feature support is the same.</li>
            <li><strong className="text-foreground">2. Update through NVIDIA.</strong> Install the current Game Ready Driver and NVIDIA App from official NVIDIA channels. A supported card can appear unsupported when an old driver predates the game profile.</li>
            <li><strong className="text-foreground">3. Check the game, not only the GPU.</strong> Confirm the game actually lists Super Resolution, Ray Reconstruction, or Frame Generation. Hardware support does not insert a missing game integration.</li>
            <li><strong className="text-foreground">4. Review prerequisites.</strong> Some games require hardware-accelerated GPU scheduling for Frame Generation. Ray Reconstruction normally needs ray tracing or path tracing because it reconstructs a ray-traced signal.</li>
            <li><strong className="text-foreground">5. Test a repeatable scene.</strong> Keep the resolution, preset, camera path, and frame-rate measurement consistent. Compare image stability and input response as well as the headline FPS number.</li>
          </ol>
        </section>

        <section className="mb-10 space-y-4 text-foreground/80">
          <h2 className="text-2xl font-bold text-foreground">Buying advice: choose for the feature you will use</h2>
          <p className="leading-relaxed">
            If your goal is better image quality in ordinary rasterized games, every RTX generation
            in this guide can use Super Resolution when the title supports it. A used RTX 30 card
            does not become obsolete because it lacks Frame Generation. Compare native performance,
            VRAM, power use, game support, and price before paying only for a DLSS label.
          </p>
          <p className="leading-relaxed">
            If you specifically want Frame Generation, start with RTX 40 or RTX 50. If Multi Frame
            Generation or Dynamic MFG is a firm requirement, RTX 50 is the current hardware boundary.
            These modes make the most sense when the game already has a responsive base frame rate.
            Generated frames improve presentation smoothness, but they do not replace the input and
            simulation response of genuinely rendered frames.
          </p>
          <p className="leading-relaxed">
            For ray tracing, consider the entire rendering budget. All RTX generations may be
            eligible for Ray Reconstruction, but a newer or faster GPU may be needed to run demanding
            path tracing at the resolution you want. Compatibility means the switch can work. It does
            not promise identical performance or image quality across an RTX 2060 and RTX 5090.
          </p>
        </section>

        <section className="mb-10 grid gap-3 sm:grid-cols-2">
          <Link href="/dlss-4-5-supported-cards" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 4.5 supported cards</div>
            <p className="text-sm text-muted-foreground">See the 4.5 feature split, model presets, setup, and exact GPU answers.</p>
          </Link>
          <Link href="/dlss-5-supported-cards" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">DLSS 5 supported cards status</div>
            <p className="text-sm text-muted-foreground">Track confirmed, expected, and still unknown support for Fall 2026 Neural Rendering.</p>
          </Link>
          <Link href="/dlss-frame-generation-vs-multi-frame-generation" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">Frame Generation vs MFG</div>
            <p className="text-sm text-muted-foreground">Understand the practical difference between RTX 40 and RTX 50 frame generation.</p>
          </Link>
          <Link href="/guides" className="rounded-lg border border-border p-4 hover:border-blue-400">
            <div className="mb-1 font-semibold">All DLSS guides</div>
            <p className="text-sm text-muted-foreground">Browse game, hardware, setup, and evidence guides by task.</p>
          </Link>
        </section>

        <section className="mb-10 text-sm leading-relaxed text-muted-foreground">
          <h2 className="mb-3 text-xl font-bold text-foreground">Sources and editorial method</h2>
          <p>
            This matrix follows the feature-by-generation table on the official{" "}
            <a href={NVIDIA_DLSS} rel="noreferrer" className="text-blue-400 hover:underline">NVIDIA DLSS technology page</a>
            {" "}and the model guidance in NVIDIA&apos;s{" "}
            <a href={NVIDIA_DLSS_45} rel="noreferrer" className="text-blue-400 hover:underline">DLSS 4.5 announcement</a>.
            We separate hardware eligibility from game availability and avoid treating a version
            label as support for every feature. Published and checked by the DLSS 5 Checker Editor
            on August 26, 2026. Drivers, game profiles, and feature availability can change, so the
            linked primary sources take priority over this summary.
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
