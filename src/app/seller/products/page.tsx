import Link from "next/link";
import { requireSeller } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/marketplace/products";
import { Badge, PRODUCT_CATEGORY_LABELS, buttonClass } from "@/components/marketplace/ui";

export default async function SellerProductsPage() {
  const { seller } = await requireSeller("/seller/products");
  const products = await prisma.product.findMany({
    where: { sellerId: seller.id },
    orderBy: { updatedAt: "desc" },
    include: { herbs: { where: { isPrimary: true }, include: { herb: { select: { name: true } } } } },
  });

  return (
    <>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl text-[var(--foreground)]">Products</h1>
          <p className="text-[15px] text-[var(--muted)]">Every product is reviewed before it goes live.</p>
        </div>
        {seller.status === "ACTIVE" && (
          <Link href="/seller/products/new" className={buttonClass}>
            Add product
          </Link>
        )}
      </header>

      {products.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">No products yet.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {products.map((p) => (
            <li key={p.id}>
              <Link href={`/seller/products/${p.id}`} className="flex flex-wrap items-center justify-between gap-3 py-4 hover:text-[var(--highlight)]">
                <span className="flex flex-col">
                  <span className="font-serif text-xl">{p.name}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {formatPrice(p.priceCents)} · {p.inventory} in stock · {PRODUCT_CATEGORY_LABELS[p.group]}
                    {p.herbs[0] && ` · ${p.herbs[0].herb.name}`}
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
