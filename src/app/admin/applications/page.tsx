import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/marketplace/ui";

const FILTERS = [
  { value: "PENDING", label: "Waiting" },
  { value: "APPROVED", label: "Approved" },
  { value: "REJECTED", label: "Not approved" },
] as const;

export default async function ApplicationsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status: raw } = await searchParams;
  const status = FILTERS.find((f) => f.value === raw)?.value ?? "PENDING";
  const applications = await prisma.sellerApplication.findMany({
    where: { status },
    orderBy: { createdAt: status === "PENDING" ? "asc" : "desc" },
    include: { user: { select: { email: true } } },
  });

  return (
    <>
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Seller applications</h1>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Link
              key={f.value}
              href={`/admin/applications?status=${f.value}`}
              className={`font-mono rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide ${
                f.value === status
                  ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--highlight)]"
              }`}
            >
              {f.label}
            </Link>
          ))}
        </div>
      </header>

      {applications.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">Nothing here.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {applications.map((a) => (
            <li key={a.id}>
              <Link href={`/admin/applications/${a.id}`} className="flex flex-wrap items-center justify-between gap-3 py-4 hover:text-[var(--highlight)]">
                <span className="flex flex-col">
                  <span className="font-serif text-xl">{a.storeName}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {a.user.email} · applied {a.createdAt.toLocaleDateString("en-US", { dateStyle: "medium" })}
                  </span>
                </span>
                <Badge kind={a.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
