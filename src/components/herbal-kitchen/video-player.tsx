"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KitchenVideo } from "@/content/herbal-kitchen/types";

// A 16:9 player that shows the chosen poster frame with a play button. The
// video file isn't requested until someone presses play, then it plays with
// sound and the browser's standard controls (including fullscreen).
export function VideoPlayer({ video, title, priority }: { video: KitchenVideo["video"]; title: string; priority?: boolean }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-black shadow-[0_10px_40px_-20px_rgb(31_54_22/0.5)]">
      {started ? (
        <video
          ref={ref}
          className="h-full w-full"
          controls
          autoPlay
          playsInline
          preload="auto"
          poster={video.poster.src}
          aria-label={title}
        >
          <source src={video.src} type={video.type} />
          {video.captionsSrc && <track kind="captions" src={video.captionsSrc} srcLang="en" label="English" default />}
          Your browser can&apos;t play this video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="group absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-none"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={video.poster.src}
            alt={video.poster.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
          <span
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fbf6e8]/95 shadow-lg ring-1 ring-[#dccdaa] transition-transform group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-[var(--highlight)] sm:h-24 sm:w-24"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-[#33512c] sm:h-10 sm:w-10">
              <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
