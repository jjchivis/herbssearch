"use client";

import Image from "next/image";
import { useRef } from "react";
import type { KitchenVideo } from "@/content/herbal-kitchen/types";

// The illustrated recipe card, full width, with a button that opens it larger.
// It's decorative: the written recipe on the page is the accurate version.
export function RecipeCardImage({ card, title }: { card: NonNullable<KitchenVideo["recipeCard"]>; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <figure className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[var(--border)] shadow-[0_10px_40px_-24px_rgb(31_54_22/0.6)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[var(--highlight)]"
        aria-label={`Enlarge the illustrated recipe card for ${title}`}
      >
        <Image
          src={card.src}
          alt={card.alt}
          width={card.width}
          height={card.height}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="h-auto w-full"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-[#fbf6e8]/95 px-3 py-1 text-xs font-medium text-[#33512c] shadow ring-1 ring-[#dccdaa] transition group-hover:bg-white">
          Enlarge
        </span>
      </button>
      <figcaption className="text-xs text-[var(--muted)]">
        Illustrated recipe card. The written recipe is the version to follow.
      </figcaption>

      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-[95vh] w-[min(96vw,1400px)] max-w-none overflow-auto rounded-xl bg-[#fbf6e8] p-2 backdrop:bg-black/70"
        aria-label={`Illustrated recipe card for ${title}`}
      >
        <div className="flex justify-end p-1">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="rounded-full border border-[#dccdaa] bg-white px-4 py-1.5 text-sm text-[#1f3616] hover:border-[#ab5030]"
          >
            Close
          </button>
        </div>
        <Image src={card.src} alt={card.alt} width={card.width} height={card.height} sizes="96vw" className="h-auto w-full" />
      </dialog>
    </figure>
  );
}
