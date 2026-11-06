"use client";

import { SUPPORT_URL } from "@/lib/support";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

/** Outbound link to the tip jar; reports which placement was clicked. */
export default function SupportLink({
  placement,
  className,
  children,
}: {
  placement: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener"
      className={className}
      onClick={() => window.plausible?.("Support click", { props: { placement } })}
    >
      {children}
    </a>
  );
}
