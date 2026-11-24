"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export interface ComparisonSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  width: number;
  height: number;
  caption: string;
  attribution: {
    capturedBy: string;
    date: string;
    gpu: string;
    resolution?: string;
    settings?: string;
    driver?: string;
    gameBuild?: string;
    sourceLabel?: string;
    sourceHref?: string;
    copyrightNotice?: string;
  };
  priority?: boolean;
}

/**
 * Zero-dependency accessible before/after image comparison slider.
 * Only pass original captures or images with verified reuse permission.
 */
export default function ComparisonSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "DLSS 5 Off",
  afterLabel = "DLSS 5 On",
  width,
  height,
  caption,
  attribution,
  priority = false,
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function updateFromClientX(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width <= 0) return;
    const pct = Math.min(100, Math.max(0, Math.round(((clientX - rect.left) / rect.width) * 100)));
    setPosition(pct);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    updateFromClientX(event.clientX);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 1 : 5;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  }

  const loading = priority ? "eager" : "lazy";

  return (
    <figure className="my-8 space-y-3">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        className="relative select-none overflow-hidden rounded-xl border border-border bg-black touch-none cursor-ew-resize"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          draggable={false}
          className="block h-full w-full object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            draggable={false}
            className="block h-full w-full object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/75 px-2.5 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/75 px-2.5 py-1 text-xs font-semibold text-green-300">
          {afterLabel}
        </span>

        <div
          role="slider"
          tabIndex={0}
          aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
          aria-valuetext={`${position}% ${beforeLabel}`}
          onKeyDown={handleKeyDown}
          style={{ left: `${position}%` }}
          className="absolute inset-y-0 -ml-0.5 w-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/80 text-xs font-bold text-white shadow-lg"
          >
            ↔
          </span>
        </div>
      </div>

      <figcaption className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
        <p className="text-sm text-foreground/85">{caption}</p>
        <p>
          Source:{" "}
          {attribution.sourceHref ? (
            <a
              href={attribution.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {attribution.sourceLabel ?? attribution.capturedBy}
            </a>
          ) : (
            (attribution.sourceLabel ?? attribution.capturedBy)
          )}
          {" · "}
          {attribution.date} · {attribution.gpu}
          {attribution.resolution ? ` · ${attribution.resolution}` : ""}
          {attribution.settings ? ` · ${attribution.settings}` : ""}
          {attribution.driver ? ` · Driver ${attribution.driver}` : ""}
          {attribution.gameBuild ? ` · ${attribution.gameBuild}` : ""}
        </p>
        {attribution.copyrightNotice ? (
          <p className="text-[11px] text-muted-foreground/80">
            {attribution.copyrightNotice}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
