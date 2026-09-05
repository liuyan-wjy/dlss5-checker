import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import upgradeData from "@/data/upgrade-recommendations.json";
import { type GPU } from "@/lib/gpu-search";
import { ArrowUpCircle } from "lucide-react";

interface UpgradeRecommendationsProps {
  gpu: GPU;
}

export default function UpgradeRecommendations({ gpu }: UpgradeRecommendationsProps) {
  // Only show when support is not confirmed
  if (gpu.dlss5_support === "confirmed") return null;

  return (
    <div>
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
        <ArrowUpCircle className="w-5 h-5 text-blue-400" />
        Upgrade to RTX 50 for DLSS 5
        <span className="ml-auto text-[10px] font-normal text-yellow-500/80 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full">
          Estimated pricing
        </span>
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Your {gpu.name}{" "}
        {gpu.dlss5_support === "none"
          ? "doesn't support DLSS at all"
          : gpu.dlss5_support === "planned"
          ? "is on NVIDIA's later RTX 40 plan, but DLSS 5 is not available for it yet"
          : "does not currently have official DLSS 5 support"}
        . These RTX 50 upgrade options are the clearest DLSS 5 path and also support the current DLSS 4/4.5 feature stack:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {upgradeData.tiers.map((tier) => (
          <Card key={tier.gpu_id} className="border-border hover:border-green-500/50 transition-colors">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs">
                  {tier.label}
                </Badge>
                <span className="text-lg font-bold text-green-400">{tier.price_range}</span>
              </div>
              <div className="text-xl font-bold mb-1">{tier.gpu_name}</div>
              <div className="text-3xl font-extrabold text-blue-400 mb-2">{tier.fps_boost}</div>
              <div className="text-xs text-muted-foreground mb-2">avg. FPS boost with DLSS 4 MFG (available now)</div>
              <div className="text-xs text-foreground/70 leading-relaxed">{tier.highlight}</div>
              <div className="text-xs text-muted-foreground mt-2">{tier.vram} VRAM</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
