import type { ReactNode } from "react";

// Small shared pieces for the marketplace pages, styled with the site's tokens.

export const inputClass =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--highlight)]";

export const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-90 disabled:opacity-50";

export const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--highlight)] hover:text-[var(--highlight)] disabled:opacity-50";

export const dangerButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[var(--caution-border)] px-5 py-2 text-sm text-[var(--caution)] transition hover:bg-[var(--caution-bg)] disabled:opacity-50";

export function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-[var(--foreground)]">
        {label}
      </label>
      {hint && <p className="text-xs text-[var(--muted)]">{hint}</p>}
      {children}
      {error && (
        <p role="alert" className="text-xs text-[var(--caution)]">
          {error}
        </p>
      )}
    </div>
  );
}

export function Notice({ tone = "info", children }: { tone?: "info" | "success" | "error"; children: ReactNode }) {
  const styles = {
    info: "border-[var(--border)] text-[var(--foreground)]",
    success: "border-[var(--accent)] text-[var(--foreground)]",
    error: "border-[var(--caution-border)] bg-[var(--caution-bg)] text-[var(--caution)]",
  }[tone];
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`rounded-lg border p-4 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

const BADGE_STYLES: Record<string, string> = {
  PENDING: "border-[var(--caution-border)] text-[var(--caution)]",
  APPROVED: "border-[var(--accent)] text-[var(--accent)]",
  ACTIVE: "border-[var(--accent)] text-[var(--accent)]",
  REJECTED: "border-[var(--border)] text-[var(--muted)]",
  SUSPENDED: "border-[var(--caution-border)] text-[var(--caution)]",
  FOUNDING: "border-[var(--highlight)] text-[var(--highlight)]",
  DRAFT: "border-[var(--border)] text-[var(--muted)]",
  PENDING_REVIEW: "border-[var(--caution-border)] text-[var(--caution)]",
  LIVE: "border-[var(--accent)] text-[var(--accent)]",
  HIDDEN: "border-[var(--caution-border)] text-[var(--caution)]",
  RESTRICTED: "border-[var(--caution-border)] text-[var(--caution)]",
};

const BADGE_LABELS: Record<string, string> = {
  PENDING: "Waiting for review",
  APPROVED: "Approved",
  ACTIVE: "Active",
  REJECTED: "Not approved",
  SUSPENDED: "Suspended",
  FOUNDING: "Founding Seller",
  DRAFT: "Draft",
  PENDING_REVIEW: "Waiting for review",
  LIVE: "Live",
  HIDDEN: "Hidden by admin",
  RESTRICTED: "Not for eating or drinking",
};

export function Badge({ kind }: { kind: keyof typeof BADGE_LABELS }) {
  return (
    <span
      className={`font-mono inline-block rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-wide ${BADGE_STYLES[kind]}`}
    >
      {BADGE_LABELS[kind]}
    </span>
  );
}

export const PRODUCT_CATEGORY_LABELS: Record<string, string> = {
  DRIED_HERBS_TEAS: "Dried herbs and teas",
  SUPPLEMENTS_EXTRACTS: "Supplements and extracts",
  NON_INGESTIBLE: "Prints, books, seeds and tools",
};

export const PRODUCT_GROUP_LABELS: Record<string, string> = {
  DRIED_HERBS_TEAS: "Dried herbs and teas",
  SUPPLEMENTS_EXTRACTS: "Supplements and extracts",
  NON_INGESTIBLE: "Non-ingestible goods (prints, books, seeds, tools)",
};
