import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/marketplace/products";
import { Badge, PRODUCT_CATEGORY_LABELS } from "@/components/marketplace/ui";

const FILTERS = [
  { value: "PENDING_REVIEW", label: "Waiting" },
  { value: "LIVE", label: "Live" },
  { value: "REJECTED", label: "Not approved" },
  { value: "HIDDEN", label: "Hidden" },
  { value: "DRAFT", label: "Drafts" },
] as const;

export default async function AdminProductsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status: raw } = await searchParams;
  const status = FILTERS.find((f) => f.value === raw)?.value ?? "PENDING_REVIEW";
  const products = await prisma.product.findMany({
    where: { status },
    orderBy: status === "PENDING_REVIEW" ? { submittedAt: "asc" } : { updatedAt: "desc" },
    include: { seller: { select: { storeName: true } } },
  });

  return (
    <>
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Products</h1>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Link
              key={f.value}
              href={`/admin/products?status=${f.value}`}
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

      {products.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">Nothing here.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {products.map((p) => (
            <li key={p.id}>
              <Link href={`/admin/products/${p.id}`} className="flex flex-wrap items-center justify-between gap-3 py-4 hover:text-[var(--highlight)]">
                <span className="flex flex-col">
                  <span className="font-serif text-xl">{p.name}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {p.seller.storeName} · {formatPrice(p.priceCents)} · {PRODUCT_CATEGORY_LABELS[p.group]}
                  </span>
                </span>
                <Badge kind={p.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
