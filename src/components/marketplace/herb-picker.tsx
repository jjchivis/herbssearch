"use client";

import { useMemo, useState } from "react";
import { Badge, inputClass } from "@/components/marketplace/ui";

export type PickerHerb = { id: string; name: string; scientificName: string; restricted: boolean };

/** Search the library and link up to 5 herbs; one is marked as the main herb. */
export function HerbPicker({
  herbs,
  defaultIds,
  defaultPrimary,
  name = "herbIds",
}: {
  herbs: PickerHerb[];
  defaultIds: string[];
  defaultPrimary: string | null;
  name?: string;
}) {
  const byId = useMemo(() => new Map(herbs.map((h) => [h.id, h])), [herbs]);
  const [selected, setSelected] = useState<string[]>(defaultIds.filter((id) => byId.has(id)));
  const [primary, setPrimary] = useState<string | null>(defaultPrimary ?? defaultIds[0] ?? null);
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return herbs
      .filter((h) => !selected.includes(h.id) && (h.name.toLowerCase().includes(q) || h.scientificName.toLowerCase().includes(q)))
      .slice(0, 8);
  }, [herbs, query, selected]);

  const effectivePrimary = primary && selected.includes(primary) ? primary : selected[0] ?? null;

  return (
    <div className="flex flex-col gap-3">
      {selected.map((id) => (
        <input key={id} type="hidden" name={name} value={id} />
      ))}
      {effectivePrimary && <input type="hidden" name="primaryHerbId" value={effectivePrimary} />}

      {selected.length > 0 && (
        <ul className="flex flex-col gap-2">
          {selected.map((id) => {
            const herb = byId.get(id)!;
            return (
              <li key={id} className="flex flex-wrap items-center gap-3 rounded-lg border border-[var(--border)] px-3 py-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="primaryChoice"
                    checked={effectivePrimary === id}
                    onChange={() => setPrimary(id)}
                    className="accent-[var(--accent)]"
                  />
                  <span className="font-medium">{herb.name}</span>
                  <span className="italic text-[var(--muted)]">{herb.scientificName}</span>
                </label>
                {herb.restricted && <Badge kind="RESTRICTED" />}
                <button
                  type="button"
                  onClick={() => setSelected(selected.filter((s) => s !== id))}
                  className="ml-auto text-xs text-[var(--muted)] underline underline-offset-2 hover:text-[var(--caution)]"
                >
                  Remove
                </button>
              </li>
            );
          })}
          <li className="text-xs text-[var(--muted)]">The selected circle marks the main herb.</li>
        </ul>
      )}

      {selected.length < 5 && (
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the library, e.g. ashwagandha"
            aria-label="Search herbs to link"
            className={inputClass}
          />
          {matches.length > 0 && (
            <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-sm">
              {matches.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected([...selected, h.id]);
                      setQuery("");
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[var(--highlight-soft)]"
                  >
                    <span>{h.name}</span>
                    <span className="italic text-[var(--muted)]">{h.scientificName}</span>
                    {h.restricted && <span className="ml-auto text-xs text-[var(--caution)]">not for eating or drinking</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
