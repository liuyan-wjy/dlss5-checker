"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube video ID from an official channel. */
  id: string;
  /** The video's title as published on YouTube. */
  title: string;
  /** Channel that published the video. */
  channel: string;
  /** One sentence on why the reader should watch it. */
  caption: string;
  locale?: "en" | "pt";
}

const copy = {
  en: { play: "Play video", plays: "plays from YouTube", watch: "Watch on YouTube" },
  pt: { play: "Reproduzir vídeo", plays: "reproduz pelo YouTube", watch: "Ver no YouTube" },
} as const;

/**
 * Click-to-load YouTube player. Nothing is requested from YouTube until the
 * reader presses play, so the page stays light on mobile data and no
 * third-party cookies are set by simply viewing the article. The player uses
 * the youtube-nocookie.com domain once loaded.
 */
export default function VideoEmbed({ id, title, channel, caption, locale = "en" }: VideoEmbedProps) {
  const t = copy[locale];
  const [playing, setPlaying] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-900 via-zinc-800 to-green-950 p-4 text-center text-white"
            aria-label={`${t.play}: ${title}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-black shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
              <Play className="ml-1 h-7 w-7" aria-hidden="true" />
            </span>
            <span className="max-w-md text-base font-semibold leading-snug sm:text-lg">{title}</span>
            <span className="text-xs text-white/70">{channel} · {t.plays}</span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {caption}{" "}
        <a href={watchUrl} className="text-blue-400 hover:underline" rel="noreferrer">
          {t.watch}
        </a>
        .
      </figcaption>
    </figure>
  );
}
