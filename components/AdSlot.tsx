"use client";

import { useEffect, useRef } from "react";

// A separate document also disposes of the provider's timers/navigation listeners.
const adDocument = `<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>
body{margin:0;display:flow-root;font:14px Arial,sans-serif;color:#e5e7eb}a{color:inherit}
</style></head><body>
<div id="container-14cdbc51bb49b4b88ce7e76a6511ca87"></div>
<p id="unavailable" hidden>Advertisement unavailable.</p>
<script>
new ResizeObserver(() => parent.postMessage({type:'dlss5-ad-height',height:Math.ceil(document.body.getBoundingClientRect().height)}, '*')).observe(document.body);
</script>
<script async data-cfasync="false" src="https://pl28945033.profitableratecpmnetwork.com/14cdbc51bb49b4b88ce7e76a6511ca87/invoke.js" onerror="document.getElementById('unavailable').hidden=false"></script>
</body></html>`;

interface AdSlotProps {
  slot: "home-below" | "result-below" | "content-mid" | "sidebar";
  className?: string;
}

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (slot !== "home-below" || !host) return;
    const frame = document.createElement("iframe");
    frame.title = "Advertisement";
    frame.className = "block h-[220px] w-full border-0";
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
    const resize = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow || event.origin !== window.location.origin) return;
      const data = event.data;
      if (data?.type !== "dlss5-ad-height" || typeof data.height !== "number" || !Number.isFinite(data.height)) return;
      frame.style.height = `${Math.max(220, Math.min(4000, data.height))}px`;
    };
    window.addEventListener("message", resize);
    // Listen before loading the document; cancel Strict Mode's first setup.
    const timer = window.setTimeout(() => {
      frame.srcdoc = adDocument;
      host.append(frame);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", resize);
      frame.remove();
    };
  }, [slot]);

  if (slot !== "home-below") return null;

  return (
    <aside aria-label="Advertisement" className={`my-8 w-full min-w-0 text-left ${className}`}>
      <p className="mb-3 text-center text-xs text-muted-foreground">Advertisement</p>
      <div ref={hostRef} className="min-h-[220px] w-full" />
    </aside>
  );
}
