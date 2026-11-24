"use client";

import { ExternalLink } from "lucide-react";
import type { GPU } from "@/lib/gpu-search";
import {
  getGeForceNowLink,
  getGpuRetailerLinks,
  linkRel,
  trackRetailerClick,
  type RetailerLocale,
} from "@/lib/affiliates";

interface UpgradeOptionsCardProps {
  gpu: Pick<GPU, "id" | "name" | "dlss5_support">;
  placement: string;
  locale?: RetailerLocale;
  heading?: string;
  showCloudOption?: boolean;
}

const DEFAULT_RTX50_TARGET: Pick<GPU, "id" | "name"> = {
  id: "rtx-5070",
  name: "NVIDIA GeForce RTX 5070",
};

export default function UpgradeOptionsCard({
  gpu,
  placement,
  locale = "en",
  heading,
  showCloudOption = true,
}: UpgradeOptionsCardProps) {
  const isConfirmed = gpu.dlss5_support === "confirmed";
  const targetGpu = isConfirmed ? gpu : DEFAULT_RTX50_TARGET;
  const retailerLinks = getGpuRetailerLinks(targetGpu, locale);
  const gfn = getGeForceNowLink();

  const cardHeading =
    heading ??
    (isConfirmed
      ? `Check ${gpu.name.replace(/^NVIDIA GeForce\s+/i, "")} pricing & availability`
      : "Want DLSS 5 without guessing? Cloud or RTX 50 options");

  const cardBody = isConfirmed
    ? "Compare current listings before buying. Check exact VRAM capacity, laptop TGP, and return policies on the retailer page."
    : gpu.dlss5_support === "planned"
      ? "You do not need to replace an RTX 40 card today. If you want to try DLSS 5 right away, GeForce NOW Ultimate streams live DLSS 5 games without new local hardware; otherwise compare RTX 50 pricing below."
      : "Your current GPU does not run DLSS 5 locally. You can stream supported titles on GeForce NOW Ultimate or compare RTX 50 series pricing if you are already planning an upgrade.";

  return (
    <aside
      aria-label={cardHeading}
      className="mt-5 rounded-xl border border-border bg-card/60 p-4 sm:p-5 text-left"
    >
      <p className="text-sm font-semibold text-foreground">{cardHeading}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{cardBody}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {retailerLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel={linkRel(item.isAffiliate)}
            onClick={() => trackRetailerClick(item.id, placement, item.isAffiliate)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-blue-400 hover:text-blue-400"
          >
            <span>{item.label}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </a>
        ))}
        {showCloudOption && (
          <a
            href={gfn.href}
            target="_blank"
            rel={linkRel(gfn.isAffiliate)}
            onClick={() => trackRetailerClick(gfn.id, placement, gfn.isAffiliate)}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs font-medium text-green-300 transition-colors hover:border-green-400"
          >
            <span>{gfn.label}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        Disclosure: As an Amazon Associate I earn from qualifying purchases. Some retailer links may earn a commission at no extra cost to you. Compatibility labels are strictly based on official NVIDIA and publisher sources and are never influenced by commercial links.
      </p>
    </aside>
  );
}
