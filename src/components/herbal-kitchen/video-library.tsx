"use client";

import { useMemo, useState } from "react";
import { KITCHEN_CATEGORIES, type KitchenCategory, type KitchenVideo } from "@/content/herbal-kitchen/types";
import { VideoCard } from "./video-card";

// Category tabs plus a search box. Only published videos are passed in, so
// empty categories say so instead of showing placeholder content.
export function VideoLibrary({ videos }: { videos: KitchenVideo[] }) {
  const [category, setCategory] = useState<KitchenCategory | "all">("all");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return videos.filter(
      (v) =>
        (category === "all" || v.category === category) &&
        (!q || `${v.title} ${v.description} ${v.herbNames.join(" ")}`.toLowerCase().includes(q)),
    );
  }, [videos, category, query]);

  const active = KITCHEN_CATEGORIES.find((c) => c.slug === category);
  const tab = (selected: boolean) =>
    `min-h-10 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)] ${
      selected
        ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
        : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--highlight)]"
    }`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Video categories" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={category === "all"} className={tab(category === "all")} onClick={() => setCategory("all")}>
            All videos
          </button>
          {KITCHEN_CATEGORIES.map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={category === c.slug}
              className={tab(category === c.slug)}
              onClick={() => setCategory(c.slug)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-64">
          <span className="sr-only">Search videos</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search videos…"
            className="min-h-10 w-full rounded-full border border-[var(--border)] bg-[var(--background)] px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--highlight)] focus:outline-none"
          />
        </label>
      </div>

      {active && <p className="max-w-2xl text-sm text-[var(--muted)]">{active.description}</p>}

      <p className="sr-only" aria-live="polite">
        {shown.length} video{shown.length === 1 ? "" : "s"} shown
      </p>

      {shown.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((v) => (
            <VideoCard key={v.slug} video={v} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-[var(--border)] px-6 py-10 text-center text-[15px] text-[var(--muted)]">
          {query
            ? "No videos match that search yet."
            : "New videos for this shelf are still brewing. Cuervo is keeping an eye on the kettle."}
        </p>
      )}
    </div>
  );
}
