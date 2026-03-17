"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type GPU, getFeatureLabel } from "@/lib/gpu-search";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";

interface CompatibilityResultProps {
  gpu: GPU;
}

const CONFIG = {
  confirmed: {
    icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
    badge: <Badge className="bg-green-500 text-white text-sm px-3 py-1">Confirmed</Badge>,
    heading: "DLSS 5 Confirmed (Coming Fall 2026)",
    headingColor: "text-green-500",
    cardBorder: "border-green-500/30",
    cardBg: "bg-green-500/5",
  },
  possible: {
    icon: <Clock className="w-8 h-8 text-yellow-500" />,
    badge: <Badge className="bg-yellow-500 text-white text-sm px-3 py-1">Possible</Badge>,
    heading: "DLSS 5 Support Possible (Unconfirmed)",
    headingColor: "text-yellow-500",
    cardBorder: "border-yellow-500/30",
    cardBg: "bg-yellow-500/5",
  },
  unlikely: {
    icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
    badge: <Badge className="bg-orange-500 text-white text-sm px-3 py-1">Unlikely</Badge>,
    heading: "DLSS 5 Support Unlikely",
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
  const [visible, setVisible] = useState(false);
  const cfg = CONFIG[gpu.dlss5_support];

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [gpu.id]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card className={`${cfg.cardBorder} ${cfg.cardBg} border`}>
        <CardContent className="pt-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            {cfg.icon}
            <div className="flex-1">
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
              <h3 className="text-sm font-semibold mb-2 text-foreground/70">DLSS 5 (Coming Fall 2026):</h3>
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
              <h3 className="text-sm font-semibold mb-2 text-foreground/70">Available Now (DLSS 4/4.5):</h3>
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
              <strong>FSR 4 (FidelityFX Super Resolution 4)</strong> — AMD&apos;s competing
              upscaling technology with similar quality improvements.
            </div>
          )}
          {gpu.brand === "Intel" && (
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-md text-sm text-blue-400">
              <strong>Note:</strong> DLSS is NVIDIA exclusive. Your Intel GPU can use{" "}
              <strong>XeSS (Xe Super Sampling)</strong> — Intel&apos;s AI upscaling alternative.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
