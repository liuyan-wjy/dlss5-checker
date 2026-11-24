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
  const gfn = getGeForceNowLink(locale);
  const shortName = gpu.name.replace(/^NVIDIA GeForce\s+/i, "");

  const cardHeading =
    heading ??
    (locale === "de"
      ? isConfirmed
        ? `Aktuelle Preise & Verfügbarkeit für ${shortName}`
        : "DLSS 5 nutzen: GeForce NOW Ultimate oder RTX-50-Preise vergleichen"
      : locale === "fr"
        ? isConfirmed
          ? `Prix et disponibilité actuels pour la ${shortName}`
          : "Profiter du DLSS 5 : GeForce NOW Ultimate ou cartes RTX 50"
        : isConfirmed
          ? `Check ${shortName} pricing & availability`
          : "Want DLSS 5 without guessing? Cloud or RTX 50 options");

  const cardBody =
    locale === "de"
      ? "Vergleiche vor einem Kauf aktuelle Angebote, VRAM-Ausstattung und bei Notebooks die genaue GPU-TGP. Alternativ läuft DLSS 5 ohne Hardware-Upgrade über GeForce NOW Ultimate."
      : locale === "fr"
        ? "Comparez les offres actuelles, la capacité de VRAM et le TGP sur PC portable avant d'acheter. Sinon, GeForce NOW Ultimate permet d'essayer DLSS 5 en streaming sans changer de carte."
        : isConfirmed
          ? "Compare current listings before buying. Check exact VRAM capacity, laptop TGP, and return policies on the retailer page."
          : gpu.dlss5_support === "planned"
            ? "You do not need to replace an RTX 40 card today. If you want to try DLSS 5 right away, GeForce NOW Ultimate streams live DLSS 5 games without new local hardware; otherwise compare RTX 50 pricing below."
            : "Your current GPU does not run DLSS 5 locally. You can stream supported titles on GeForce NOW Ultimate or compare RTX 50 series pricing if you are already planning an upgrade.";

  const disclosureText =
    locale === "de"
      ? "Hinweis (Werbung / Affiliate-Links): Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Für dich entstehen keine Mehrkosten. Kompatibilitätsangaben beruhen ausschließlich auf offiziellen NVIDIA- und Publisher-Quellen."
      : locale === "fr"
        ? "Transparence (liens affiliés) : En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises, sans surcoût pour vous. Les statuts de compatibilité reposent uniquement sur les sources officielles NVIDIA et éditeurs."
        : "Disclosure: As an Amazon Associate I earn from qualifying purchases. Some retailer links may earn a commission at no extra cost to you. Compatibility labels are strictly based on official NVIDIA and publisher sources and are never influenced by commercial links.";

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
        {disclosureText}
      </p>
    </aside>
  );
}
