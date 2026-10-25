import { requireSeller, toActor } from "@/lib/auth-guards";
import { sellerOrders } from "@/lib/marketplace/orders";
import { formatPrice } from "@/lib/marketplace/products";
import { formatAddress } from "@/components/marketplace/order-summary";
import { Badge, Notice } from "@/components/marketplace/ui";
import { ShipForm } from "./ship-form";

export default async function SellerOrdersPage() {
  const { user } = await requireSeller("/seller/orders");
  const orders = await sellerOrders(toActor(user));
  const toShip = orders.filter((o) => o.status === "PAID").length;

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl text-[var(--foreground)]">Orders</h1>
        <p className="text-[15px] text-[var(--muted)]">
          {toShip > 0 ? `${toShip} ${toShip === 1 ? "order" : "orders"} to ship.` : "Nothing to ship right now."} Buy a label from your carrier,
          then add the tracking number here; we email it to the customer.
        </p>
      </header>
      {orders.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">No orders yet.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {orders.map((so) => (
            <li key={so.id} className="flex flex-col gap-3 rounded-lg border border-[var(--border)] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-sm">{so.order.number}</span>
                <span className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  {so.order.paidAt?.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  <Badge kind={so.status} />
                </span>
              </div>
              {so.stockShortfall && (
                <Notice tone="error">
                  You didn&apos;t have enough stock for this order when it was paid. Don&apos;t ship it yet; we&apos;ll contact you.
                </Notice>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <ul className="flex flex-col gap-1 text-[15px]">
                  {so.items.map((i) => (
                    <li key={i.id}>
                      {i.quantity} × {i.productName}
                      {i.shippingClass === "CALCULATED" && <span className="text-sm text-[var(--muted)]"> (weight-priced)</span>}
                    </li>
                  ))}
                </ul>
                <div className="text-[15px]">
                  <p className="text-sm text-[var(--muted)]">Ship to</p>
                  {formatAddress(so.order.shippingName, so.order.shippingAddress).map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Items {formatPrice(so.itemsCents)} · shipping {formatPrice(so.shippingCents)} · commission −{formatPrice(so.commissionCents)} ·{" "}
                <span className="text-[var(--foreground)]">you receive {formatPrice(so.payoutCents)}</span>
                {so.reversedCents > 0 && ` (−${formatPrice(so.reversedCents)} taken back for a refund)`}
              </p>
              {(so.status === "PAID" || so.status === "SHIPPED") && !so.stockShortfall && (
                <ShipForm sellerOrderId={so.id} carrier={so.carrier ?? undefined} trackingNumber={so.trackingNumber ?? undefined} />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
