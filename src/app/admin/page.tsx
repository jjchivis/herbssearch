import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminOverviewPage() {
  const [pending, active, suspended, founding] = await Promise.all([
    prisma.sellerApplication.count({ where: { status: "PENDING" } }),
    prisma.seller.count({ where: { status: "ACTIVE" } }),
    prisma.seller.count({ where: { status: "SUSPENDED" } }),
    prisma.seller.count({ where: { isFoundingSeller: true } }),
  ]);

  const stats = [
    { label: "Applications waiting", value: pending, href: "/admin/applications" },
    { label: "Active sellers", value: active, href: "/admin/sellers" },
    { label: "Suspended sellers", value: suspended, href: "/admin/sellers" },
    { label: "Founding Sellers", value: founding, href: "/admin/sellers" },
  ];

  return (
    <>
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Overview</h1>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              className="flex flex-col gap-1 rounded-lg border border-[var(--border)] p-4 transition-colors hover:border-[var(--highlight)]"
            >
              <span className="font-serif text-3xl text-[var(--foreground)]">{s.value}</span>
              <span className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{s.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-[15px] text-[var(--muted)]">
        Products, orders, commission settings and payouts will appear here in later phases.
      </p>
    </>
  );
}
