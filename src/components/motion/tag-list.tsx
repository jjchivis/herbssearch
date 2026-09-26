import type { ReactNode } from "react";

// Plain list: tags render visible immediately rather than fading in on scroll.
export function TagList({ tags }: { tags: string[] }): ReactNode {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--foreground)]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
