interface AdSlotProps {
  slot: "result-below" | "content-mid" | "sidebar";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  const heights: Record<string, string> = {
    "result-below": "h-[90px]",
    "content-mid": "h-[90px]",
    sidebar: "h-[600px]",
  };

  return (
    <div
      className={`w-full ${className}`}
      data-ad-slot={slot}
      aria-hidden="true"
    >
      {/* AdSense code will be injected here after approval */}
    </div>
  );
}
