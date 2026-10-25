import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/auth-guards";
import { customerOrders } from "@/lib/marketplace/orders";
import { formatPrice } from "@/lib/marketplace/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/marketplace/ui";

export const metadata: Metadata = { title: "Your orders", robots: { index: false } };

export default async function OrdersPage() {
  const user = await requireUser("/orders");
  const orders = (await customerOrders(user.id)).filter((o) => o.status !== "PENDING_PAYMENT");

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Your account", href: "/account" }, { label: "Your orders" }]} />
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Your orders</h1>
      {orders.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">
          No orders yet.{" "}
          <Link href="/shop" className="underline underline-offset-2 hover:text-[var(--highlight)]">
            Browse the shop
          </Link>
          .
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {orders.map((o) => (
            <li key={o.id}>
              <Link href={`/orders/${o.number}`} className="flex flex-wrap items-center justify-between gap-3 py-4 hover:text-[var(--highlight)]">
                <span className="flex flex-col">
                  <span className="font-mono text-sm">{o.number}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {o.createdAt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} ·{" "}
                    {o.sellerOrders.map((s) => s.seller.storeName).join(", ")}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <Badge kind={o.status} />
                  <span>{formatPrice(o.totalCents)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
