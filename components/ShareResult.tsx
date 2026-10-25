"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import type { GPU } from "@/lib/gpu-search";

type Status = "idle" | "copied" | "failed";

const STATUS_TEXT: Record<GPU["dlss5_support"], string> = {
  confirmed: "supports DLSS 5",
  planned: "is planned for DLSS 5",
  unsupported: "has no official DLSS 5 support",
  none: "does not support DLSS",
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function shareUrl(gpu: GPU) {
  const url = new URL(window.location.pathname, window.location.origin);
  url.searchParams.set("gpu", gpu.id);
  return url.toString();
}

const subscribeNever = () => () => {};
const hasNativeShare = () => typeof navigator.share === "function";
const noNativeShare = () => false;

// Render with key={gpu.id} so the copied state resets for each new result.
export default function ShareResult({ gpu }: { gpu: GPU }) {
  const [status, setStatus] = useState<Status>("idle");
  const canNativeShare = useSyncExternalStore(subscribeNever, hasNativeShare, noNativeShare);

  const track = (method: string) => {
    window.plausible?.("Share result", { props: { gpu: gpu.id, method } });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl(gpu));
      setStatus("copied");
      track("copy");
    } catch {
      setStatus("failed");
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: `${gpu.name} DLSS 5 support`,
        text: `${gpu.name} ${STATUS_TEXT[gpu.dlss5_support]}. Full result and how to turn each DLSS feature on:`,
        url: shareUrl(gpu),
      });
      track("native");
    } catch {
      // The user closed the share sheet; nothing to report.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {canNativeShare && (
        <button
          type="button"
          onClick={nativeShare}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 hover:border-blue-400 hover:text-blue-400"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share result
        </button>
      )}
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-3 hover:border-blue-400 hover:text-blue-400"
      >
        {status === "copied" ? (
          <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
        {status === "copied" ? "Link copied" : "Copy link"}
      </button>
      <span role="status" className="text-xs text-muted-foreground">
        {status === "failed" ? `Copy this link: ${shareUrl(gpu)}` : ""}
      </span>
    </div>
  );
}
