import Link from "next/link";
import { adminOrders } from "@/lib/marketplace/orders";
import { formatPrice } from "@/lib/marketplace/products";
import { Badge } from "@/components/marketplace/ui";

export default async function AdminOrdersPage() {
  const orders = await adminOrders();
  return (
    <>
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Orders</h1>
      {orders.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">No orders yet.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {orders.map((o) => (
            <li key={o.id}>
              <Link href={`/admin/orders/${o.id}`} className="flex flex-wrap items-center justify-between gap-3 py-4 hover:text-[var(--highlight)]">
                <span className="flex flex-col">
                  <span className="font-mono text-sm">{o.number}</span>
                  <span className="text-sm text-[var(--muted)]">
                    {o.createdAt.toLocaleDateString("en-US", { dateStyle: "medium" })} · {o.email} ·{" "}
                    {o.sellerOrders.map((s) => `${s.seller.storeName}${s.stockShortfall ? " (short of stock)" : ""}`).join(", ")}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <Badge kind={o.status} />
                  <span>{o.status === "PENDING_PAYMENT" ? "—" : formatPrice(o.totalCents)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
