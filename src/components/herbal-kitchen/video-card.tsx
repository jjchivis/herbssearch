import Image from "next/image";
import Link from "next/link";
import { KITCHEN_CATEGORIES, type KitchenVideo } from "@/content/herbal-kitchen/types";

export function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function VideoCard({ video }: { video: KitchenVideo }) {
  const category = KITCHEN_CATEGORIES.find((c) => c.slug === video.category);
  return (
    <Link
      href={`/herbal-kitchen/${video.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] transition-colors hover:border-[var(--highlight)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)]"
    >
      <span className="relative block aspect-video overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={video.video.poster.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fbf6e8]/95 shadow ring-1 ring-[#dccdaa]"
        >
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-[#33512c]">
            <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
          </svg>
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[11px] text-white">
          {formatDuration(video.durationSeconds)}
        </span>
      </span>
      <span className="flex flex-1 flex-col gap-1.5 p-4">
        {category && <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--highlight)]">{category.label}</span>}
        <span className="font-serif text-xl leading-snug text-[var(--foreground)] group-hover:text-[var(--highlight)]">{video.title}</span>
        <span className="line-clamp-3 text-sm text-[var(--muted)]">{video.description}</span>
      </span>
    </Link>
  );
}
