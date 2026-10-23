import Link from "next/link";
import { HerbImage } from "@/components/herb-image";
import { PlainText } from "@/components/plain-text";

type Item = {
  key: string;
  herb: { id: string; name: string; scientificName: string; imageUrl: string | null };
  notes?: string | null;
};

// Herbs linked to a topic, compound or tradition, each with the note that
// explains the link (shown in plain language, like on the herb page).
export function HerbNoteList({ items }: { items: Item[] }) {
  const glossaryUsed = new Set<string>();
  return (
    <ul className="flex flex-col gap-3">
      {items.map(({ key, herb, notes }) => (
        <li key={key}>
          <Link
            href={`/herbs/${herb.id}`}
            className="group flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--highlight)]"
          >
            <HerbImage
              src={herb.imageUrl}
              alt=""
              className="aspect-[3/4] w-14 shrink-0 bg-[var(--surface-2)]"
              sizes="56px"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <span className="font-serif text-lg text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                {herb.name}
              </span>
              <span className="font-mono text-xs italic text-[var(--muted)]">{herb.scientificName}</span>
              {notes && (
                <div className="text-sm text-[var(--muted)]">
                  <PlainText glossaryUsed={glossaryUsed} text={notes} />
                </div>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
