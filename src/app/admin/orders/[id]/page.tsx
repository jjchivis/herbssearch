import { notFound } from "next/navigation";
import { adminOrder } from "@/lib/marketplace/orders";
import { formatPrice } from "@/lib/marketplace/products";
import { refundSellerOrderAction } from "../../actions";
import { OrderSummary } from "@/components/marketplace/order-summary";
import { Badge, Notice, dangerButtonClass } from "@/components/marketplace/ui";

export default async function AdminOrderPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ done?: string; error?: string }>;
}) {
  const [{ id }, { done, error }] = await Promise.all([params, searchParams]);
  const order = await adminOrder(id);
  if (!order) notFound();

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Order {order.number}</h1>
        <p className="flex flex-wrap items-center gap-3 text-[15px] text-[var(--muted)]">
          {order.user.email} · {order.createdAt.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
          <Badge kind={order.status} />
        </p>
        <p className="text-sm text-[var(--muted)]">
          Commission rate {order.commissionBps / 100}%{order.stripePaymentIntentId && ` · Stripe payment ${order.stripePaymentIntentId}`}
        </p>
      </header>
      {done && <Notice tone="success">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}
      <OrderSummary
        order={order}
        sellerActions={(soId) => {
          const so = order.sellerOrders.find((s) => s.id === soId)!;
          const refundable = so.status === "PAID" || so.status === "SHIPPED";
          return (
            <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-3 text-sm">
              {so.stockShortfall && (
                <Notice tone="error">The store was short of stock when this was paid, so its payout was held. Refund it or ask the store.</Notice>
              )}
              <p className="text-[var(--muted)]">
                Tax {formatPrice(so.taxCents)} · commission {formatPrice(so.commissionCents)} · payout {formatPrice(so.payoutCents)}
                {so.stripeTransferId ? ` (sent, ${so.stripeTransferId})` : " (not sent)"}
                {so.refundedCents > 0 && ` · refunded ${formatPrice(so.refundedCents)}, payout taken back ${formatPrice(so.reversedCents)}`}
              </p>
              {refundable && (
                <form action={refundSellerOrderAction}>
                  <input type="hidden" name="orderId" value={order.id} />
                  <input type="hidden" name="sellerOrderId" value={so.id} />
                  <button type="submit" className={dangerButtonClass}>
                    Refund this store&apos;s part ({formatPrice(so.itemsCents + so.shippingCents + so.taxCents)})
                  </button>
                </form>
              )}
            </div>
          );
        }}
      />
    </>
  );
}
