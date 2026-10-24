import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { approveApplicationAction, rejectApplicationAction } from "../../actions";
import {
  Badge,
  Field,
  Notice,
  PRODUCT_GROUP_LABELS,
  buttonClass,
  dangerButtonClass,
  inputClass,
} from "@/components/marketplace/ui";

export default async function ApplicationDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ done?: string; error?: string }>;
}) {
  const [{ id }, { done, error }] = await Promise.all([params, searchParams]);
  const a = await prisma.sellerApplication.findUnique({
    where: { id },
    include: { user: { select: { email: true } }, reviewedBy: { select: { email: true } }, seller: true },
  });
  if (!a) notFound();

  const rows: [string, string | null][] = [
    ["Account email", a.user.email],
    ["Legal name", a.legalBusinessName],
    ["Business type", a.businessType === "COMPANY" ? "Company" : "Individual / sole proprietor"],
    ["Contact email", a.contactEmail],
    ["Phone", a.phone],
    ["Website", a.website],
    ["Location", [a.region, a.country].filter(Boolean).join(", ")],
    ["Plans to sell", a.plannedGroups.map((g) => PRODUCT_GROUP_LABELS[g]).join("; ")],
    ["Terms accepted", `${a.termsVersion} on ${a.termsAcceptedAt.toLocaleString("en-US")}`],
    ["Applied", a.createdAt.toLocaleString("en-US")],
  ];

  return (
    <>
      <Link href="/admin/applications" className="text-sm text-[var(--muted)] hover:text-[var(--highlight)]">
        ← All applications
      </Link>
      <header className="flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{a.storeName}</h1>
        <Badge kind={a.status} />
      </header>
      {done && <Notice tone="success">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}

      <dl className="grid gap-x-6 gap-y-3 text-[15px] sm:grid-cols-[12rem_1fr]">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-[var(--muted)]">{label}</dt>
            <dd className="text-[var(--foreground)]">
              {label === "Website" && value ? (
                <a href={value} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2">
                  {value}
                </a>
              ) : (
                value || "—"
              )}
            </dd>
          </div>
        ))}
      </dl>

      <section className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">About the store</h2>
        <p className="whitespace-pre-line text-[15px] leading-relaxed">{a.description}</p>
      </section>

      {a.status === "PENDING" ? (
        <section className="flex flex-col gap-6 border-t border-[var(--border)] pt-6">
          <form action={approveApplicationAction} className="flex flex-col gap-3">
            <input type="hidden" name="applicationId" value={a.id} />
            <Field label="Note to the seller (optional)" htmlFor="approve-note">
              <textarea id="approve-note" name="note" rows={2} className={inputClass} />
            </Field>
            <div>
              <button type="submit" className={buttonClass}>
                Approve and create store
              </button>
            </div>
          </form>
          <form action={rejectApplicationAction} className="flex flex-col gap-3 border-t border-[var(--border)] pt-6">
            <input type="hidden" name="applicationId" value={a.id} />
            <Field label="Reason for not approving" htmlFor="reject-note" hint="Required. The applicant sees this note.">
              <textarea id="reject-note" name="note" rows={2} required className={inputClass} />
            </Field>
            <div>
              <button type="submit" className={dangerButtonClass}>
                Don&apos;t approve
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section className="flex flex-col gap-1 border-t border-[var(--border)] pt-6 text-[15px]">
          <p>
            Reviewed by {a.reviewedBy?.email ?? "—"} on {a.reviewedAt?.toLocaleString("en-US") ?? "—"}.
          </p>
          {a.reviewNote && <p className="text-[var(--muted)]">Note: {a.reviewNote}</p>}
          {a.seller && (
            <p>
              <Link href="/admin/sellers" className="underline underline-offset-2 hover:text-[var(--highlight)]">
                Manage this seller
              </Link>
            </p>
          )}
        </section>
      )}
    </>
  );
}
