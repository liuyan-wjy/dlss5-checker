import Script from "next/script";

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
  const isInlineNetworkSlot = slot === "result-below";

  return (
    <div className={`w-full ${heights[slot]} ${className}`} data-ad-slot={slot}>
      {isInlineNetworkSlot ? (
        <>
          <div id="container-14cdbc51bb49b4b88ce7e76a6511ca87" />
          <Script
            id="profitable-cpm-inline"
            async
            data-cfasync="false"
            src="https://pl28945033.profitablecpmratenetwork.com/14cdbc51bb49b4b88ce7e76a6511ca87/invoke.js"
            strategy="afterInteractive"
          />
        </>
      ) : null}
    </div>
  );
}
