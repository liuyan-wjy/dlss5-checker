"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type GPU, getFeatureLabel } from "@/lib/gpu-search";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

interface CompatibilityResultProps {
  gpu: GPU;
}

const CONFIG = {
  confirmed: {
    icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
    badge: <Badge className="bg-green-500 text-white text-sm px-3 py-1">Confirmed</Badge>,
    heading: "DLSS 5 Confirmed (Available now)",
    headingColor: "text-green-500",
    cardBorder: "border-green-500/30",
    cardBg: "bg-green-500/5",
  },
  planned: {
    icon: <Clock className="w-8 h-8 text-yellow-500" />,
    badge: <Badge className="bg-yellow-500 text-white text-sm px-3 py-1">Planned</Badge>,
    heading: "DLSS 5 Planned, Not Available Yet",
    headingColor: "text-yellow-500",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
  },
  unsupported: {
    icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
    badge: <Badge className="bg-orange-500 text-white text-sm px-3 py-1">Unsupported</Badge>,
    heading: "DLSS 5 Not Officially Supported",
    headingColor: "text-orange-500",
    cardBorder: "border-orange-500/30",
    cardBg: "bg-orange-500/5",
  },
  none: {
    icon: <XCircle className="w-8 h-8 text-red-500" />,
    badge: <Badge className="bg-red-500 text-white text-sm px-3 py-1">Not Supported</Badge>,
    heading: "DLSS Not Supported",
    headingColor: "text-red-500",
    cardBorder: "border-red-500/30",
    cardBg: "bg-red-500/5",
  },
};

export default function CompatibilityResult({ gpu }: CompatibilityResultProps) {
  const cfg = CONFIG[gpu.dlss5_support];

  return (
    <div key={gpu.id} className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
      <Card className={`${cfg.cardBorder} ${cfg.cardBg} border`}>
        <CardContent className="pt-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4 text-left">
            {cfg.icon}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className={`text-2xl font-bold ${cfg.headingColor}`}>{cfg.heading}</h2>
                {cfg.badge}
              </div>
              <p className="text-lg font-semibold mt-1">{gpu.name}</p>
              <p className="text-muted-foreground text-sm mt-1">{gpu.vram} VRAM · {gpu.series}</p>
            </div>
          </div>

          {/* Summary */}
          <p className="text-foreground/80 mb-5 leading-relaxed">{gpu.summary}</p>

          {/* DLSS 5 status */}
          {gpu.dlss5_features.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-foreground/70">DLSS 5 (Available now):</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gpu.dlss5_features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{getFeatureLabel(feat)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Current DLSS features */}
          {gpu.current_dlss_features.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-foreground/70">Other DLSS features in compatible games:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gpu.current_dlss_features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{getFeatureLabel(feat)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AMD / Intel special note */}
          {gpu.brand === "AMD" && (
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-md text-sm text-blue-400">
              <strong>Note:</strong> DLSS is NVIDIA exclusive. Your AMD GPU can use{" "}
              <strong>AMD FSR</strong> where the game supports it. The available FSR
              version depends on the GPU and game; a DLSS setting cannot enable FSR.
            </div>
          )}
          {gpu.brand === "Intel" && (
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-md text-sm text-blue-400">
              <strong>Note:</strong> DLSS is NVIDIA exclusive. Your Intel GPU can use{" "}
              <strong>XeSS (Xe Super Sampling)</strong> — Intel&apos;s AI upscaling alternative.
            </div>
          )}

          <section className="mt-5 border-t border-border pt-5 text-left text-sm leading-relaxed space-y-3">
            <h3 className="font-semibold text-base">What to do next</h3>
            {gpu.dlss5_support === "confirmed" ? (
              <>
                <p>
                  For NBA 2K27, update the game and install NVIDIA&apos;s 616.64 WHQL
                  Game Ready Driver or a newer official driver that retains support.
                  Open Video Settings → DLSS Neural Rendering. These instructions are
                  specific to NBA 2K27; an RTX 50 card does not enable DLSS 5 in every game.
                </p>
                <Link href="/games/nba-2k27-dlss-5#how-to-enable" className="inline-block text-blue-400 hover:underline">
                  Follow the NBA 2K27 setup and missing-option checks →
                </Link>
              </>
            ) : gpu.dlss5_support === "planned" ? (
              <>
                <p>
                  RTX 40 support is planned, with no public date. You do not need to
                  replace your card to keep using Super Resolution, Ray Reconstruction,
                  DLAA, or Frame Generation in games that offer them. A driver update
                  alone does not unlock DLSS 5 while RTX 40 support is pending.
                </p>
                <Link href="/dlss-5-rtx-40-series" className="inline-block text-blue-400 hover:underline">
                  Check what would change the RTX 40 support status →
                </Link>
              </>
            ) : gpu.dlss5_support === "unsupported" ? (
              <>
                <p>
                  Keep using the supported DLSS features listed above. In a compatible
                  game, start with Super Resolution Quality mode, then compare motion
                  clarity and responsiveness before changing other settings. DLSS 5
                  requires a different supported GPU; downloading a replacement DLL
                  does not establish official support for this card.
                </p>
                <Link href="/dlss-supported-cards" className="inline-block text-blue-400 hover:underline">
                  Compare the features your RTX generation can use →
                </Link>
              </>
            ) : (
              <>
                <p>
                  For local play, check the game&apos;s graphics menu for a compatible
                  alternative such as FSR, XeSS, or built-in resolution scaling. Support
                  varies by game and GPU. GeForce NOW uses a remote NVIDIA GPU, so cloud
                  availability does not change this local compatibility result.
                </p>
                <Link href="/dlss-5-system-requirements" className="inline-block text-blue-400 hover:underline">
                  Compare local PC and cloud requirements →
                </Link>
              </>
            )}
            <p className="text-muted-foreground">
              This is a compatibility result, not an FPS prediction. We do not have
              verified per-game performance measurements for {gpu.name}. Before buying,
              compare tests of your exact GPU, resolution, and game settings. For a
              laptop, also match the notebook&apos;s power limit and cooling configuration.
            </p>
            <p className="text-xs text-muted-foreground">
              Support evidence reviewed September 5, 2026: {" "}
              <a href="https://www.nvidia.com/en-us/geforce/news/dlss-5-3d-guided-neural-rendering/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                NVIDIA&apos;s DLSS 5 launch details
              </a>
              {" · "}
              <Link href="/dlss-5-evidence-tracker" className="text-blue-400 hover:underline">
                Sources and support-status history
              </Link>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
