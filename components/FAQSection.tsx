"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is DLSS 5?",
    a: "DLSS 5 is NVIDIA's next-generation AI rendering technology, announced at GTC on March 16, 2026, launching Fall 2026. Unlike DLSS 4/4.5 which focus on performance (upscaling and frame generation), DLSS 5 is about visual fidelity. Its core feature is Real-time Neural Rendering -- AI-powered enhancement of lighting and materials that generates photoreal lighting, translucent skin, fabric detail, and environmental effects. Jensen Huang called it 'the GPT moment for graphics.'",
  },
  {
    q: "Which GPUs will support DLSS 5?",
    a: "NVIDIA has confirmed DLSS 5 Neural Rendering for RTX 50 series GPUs. Support for RTX 40 series has been hinted at but is NOT confirmed. RTX 20/30 series support is unlikely based on current information. DLSS 5 has not shipped yet -- it launches Fall 2026. The GTC demo used two RTX 5090s (one for the game, one for DLSS 5), but the shipping version will run on a single GPU.",
  },
  {
    q: "How is DLSS 5 different from DLSS 4 and 4.5?",
    a: "DLSS 4 (CES 2025) introduced Multi Frame Generation (up to 3 additional AI frames) and the first Transformer model for Super Resolution. DLSS 4.5 (CES 2026) added Dynamic 6X MFG (5 additional frames) and a 2nd-gen Transformer model. DLSS 5 is completely different -- it's about visual fidelity, not performance. It adds Neural Rendering that analyzes scene semantics (characters, hair, fabric, lighting) and generates photoreal material responses. DLSS 5 runs on top of DLSS 4.5 (upscaling + frame gen underneath, neural rendering on top).",
  },
  {
    q: "Does DLSS 5 work on AMD or Intel GPUs?",
    a: "No. DLSS is an NVIDIA-exclusive technology. AMD users should look at FSR 4 (FidelityFX Super Resolution 4), and Intel users should look at XeSS (Xe Super Sampling) -- both are competing upscaling technologies, though neither has announced a neural rendering equivalent to DLSS 5.",
  },
  {
    q: "What is Multi Frame Generation and which DLSS version introduced it?",
    a: "Multi Frame Generation (MFG) was introduced in DLSS 4 at CES 2025, NOT in DLSS 5. MFG generates up to 3 additional AI frames per rendered frame (4X total), and is exclusive to RTX 50 series GPUs. DLSS 4.5 extended this to Dynamic 6X MFG (5 additional frames). RTX 40 series gets single Frame Generation (DLSS 3). DLSS 5 is a different technology focused on neural rendering for visual quality.",
  },
  {
    q: "Is DLSS 5 available now?",
    a: "No. DLSS 5 was announced at GTC on March 16, 2026 and is expected to launch in Fall 2026. What IS available now: DLSS 4 with Multi Frame Generation for RTX 50 series, DLSS 4.5 with Dynamic 6X MFG for RTX 50, DLSS 3 Frame Generation for RTX 40, and Transformer-based Super Resolution for RTX 20/30/40/50. Over 250 games support current DLSS versions.",
  },
  {
    q: "What games will support DLSS 5?",
    a: "NVIDIA has confirmed 16+ titles for DLSS 5 Neural Rendering at launch, including Starfield, Hogwarts Legacy, Assassin's Creed Shadows, Phantom Blade Zero, Delta Force, Resident Evil Requiem, and The Elder Scrolls IV: Oblivion Remastered. Developers will have controls for intensity, color grading, and masking. More titles are expected to be announced before the Fall 2026 launch.",
  },
  {
    q: "Should I buy an RTX 50 GPU for DLSS 5?",
    a: "RTX 50 series GPUs are the only confirmed architecture for DLSS 5. But you don't need to wait for Fall 2026 to benefit -- RTX 50 GPUs already run DLSS 4/4.5 with Multi Frame Generation (up to 6X), delivering massive performance gains in 250+ games today. When DLSS 5 ships, RTX 50 owners will get the Neural Rendering upgrade on top of these existing benefits.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="border border-border rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-sm sm:text-base pr-4">{item.q}</span>
            <ChevronDown
              className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
