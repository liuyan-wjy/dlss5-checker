import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const faqs: { q: string; a: string; link?: { href: string; text: string } }[] = [
  {
    q: "What is DLSS 5?",
    a: "DLSS 5 is NVIDIA's current Neural Rendering layer for improving lighting and materials in supported games. It launched first in NBA 2K27 for GeForce RTX 50 desktop and laptop GPUs. Unlike Super Resolution or Frame Generation, the DLSS 5 feature is primarily a visual-fidelity feature, not a generic frame-rate multiplier.",
    link: { href: "/dlss-5-neural-rendering", text: "How DLSS 5 Neural Rendering works" },
  },
  {
    q: "Which GPUs will support DLSS 5?",
    a: "The confirmed local-PC path is GeForce RTX 50 desktop and laptop GPUs, including RTX 5090 through RTX 5050, plus RTX Spark laptops. RTX 40 support is planned but not available yet and has no public date. RTX 20 and RTX 30 do not currently have official DLSS 5 Neural Rendering support, while GTX, AMD, and Intel cards do not run local NVIDIA DLSS.",
    link: { href: "/dlss-5-supported-cards", text: "Full DLSS 5 supported cards list" },
  },
  {
    q: "How is DLSS 5 different from DLSS 4 and 4.5?",
    a: "DLSS 4 introduced Multi Frame Generation and a Transformer model for Super Resolution. DLSS 4.5 added Dynamic 6X MFG and a second-generation Transformer model. DLSS 5 is different: it adds Neural Rendering for visual fidelity. Super Resolution, Frame Generation, and Neural Rendering are separate settings or feature layers, depending on the game.",
    link: { href: "/dlss-5-vs-dlss-4-5", text: "DLSS 5 vs DLSS 4.5 explained" },
  },
  {
    q: "Does DLSS 5 work on AMD or Intel GPUs?",
    a: "No. DLSS requires NVIDIA RTX hardware for local play. AMD users can check the game's FSR options, and Intel users can check for XeSS. Availability and version support depend on the GPU, driver, and game integration. These upscaling options do not enable DLSS 5 Neural Rendering.",
    link: { href: "/dlss-5-amd", text: "How AMD users can still try DLSS 5" },
  },
  {
    q: "What is Multi Frame Generation and which DLSS version introduced it?",
    a: "Multi Frame Generation (MFG) was introduced in DLSS 4 at CES 2025, NOT in DLSS 5. MFG generates up to 3 additional AI frames per rendered frame (4X total), and is exclusive to RTX 50 series GPUs. DLSS 4.5 extended this to Dynamic 6X MFG (5 additional frames). RTX 40 series gets single Frame Generation (DLSS 3). DLSS 5 is a different technology focused on neural rendering for visual quality.",
    link: { href: "/dlss-frame-generation-vs-multi-frame-generation", text: "Frame Generation vs Multi Frame Generation" },
  },
  {
    q: "Is DLSS 5 available now?",
    a: "Yes, but only where the game, driver, and GPU path support it. NBA 2K27 is the first public game with DLSS 5 3D-guided Neural Rendering, using NVIDIA's 616.64 WHQL or newer Game Ready Driver on RTX 50 desktop and laptop GPUs and RTX Spark laptops. A faster DLSS 5 model replaced the launch version in NBA 2K27 on October 16, 2026. In that game, use Video Settings > DLSS Neural Rendering, and press F9 to toggle the effect during gameplay or replay.",
    link: { href: "/dlss-5-download", text: "How to download and enable DLSS 5" },
  },
  {
    q: "What games will support DLSS 5?",
    a: "NBA 2K27 is the first verified DLSS 5 game. Hogwarts Legacy is scheduled for November 5, 2026 and Where Winds Meet for late November. Other named games remain announced or pending until each game publishes patch notes, settings, and GPU support details.",
    link: { href: "/dlss-5-games", text: "DLSS 5 games list and release dates" },
  },
  {
    q: "Should I buy an RTX 50 GPU for DLSS 5?",
    a: "RTX 50 is the cleanest current DLSS 5 path. If you already own RTX 40, wait for NVIDIA's official RTX 40 rollout details before upgrading for one feature; RTX 40 remains strong for DLSS 3/4-era Frame Generation and current reconstruction features.",
    link: { href: "/dlss-5-rtx-40-series", text: "When RTX 40 cards get DLSS 5" },
  },
];

export default function FAQSection() {
  return (
    <div className="space-y-2">
      {faqs.map((item, i) => (
        <details
          key={i}
          className="group border border-border rounded-lg overflow-hidden"
          open={i === 0}
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors">
            <h3 className="font-semibold text-sm sm:text-base pr-4">{item.q}</h3>
            <ChevronDown
              className="w-4 h-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
            <p>{item.a}</p>
            {item.link && (
              <Link href={item.link.href} className="mt-2 inline-block text-blue-400 hover:underline">
                {item.link.text} →
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
