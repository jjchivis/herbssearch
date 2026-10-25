import Link from "next/link";
import { formatPrice } from "@/lib/marketplace/products";
import { Badge } from "@/components/marketplace/ui";

type SellerOrder = {
  id: string;
  status: string;
  itemsCents: number;
  shippingCents: number;
  carrier: string | null;
  trackingNumber: string | null;
  shippedAt: Date | null;
  seller: { storeName: string; slug: string; contactEmail: string };
  items: { id: string; productName: string; productSlug: string; quantity: number; unitPriceCents: number }[];
};

export type OrderForSummary = {
  number: string;
  status: string;
  createdAt: Date;
  itemsCents: number;
  shippingCents: number;
  taxCents: number;
  totalCents: number;
  refundedCents: number;
  shippingName: string | null;
  shippingAddress: unknown;
  sellerOrders: SellerOrder[];
};

type Address = { line1?: string | null; line2?: string | null; city?: string | null; state?: string | null; postal_code?: string | null };

export function formatAddress(name: string | null, address: unknown) {
  const a = (address ?? {}) as Address;
  return [name, a.line1, a.line2, [a.city, a.state, a.postal_code].filter(Boolean).join(" ")].filter(Boolean) as string[];
}

/** One order, split by store, as the customer (and admins) see it. */
export function OrderSummary({ order, sellerActions }: { order: OrderForSummary; sellerActions?: (id: string) => React.ReactNode }) {
  const address = formatAddress(order.shippingName, order.shippingAddress);
  return (
    <div className="flex flex-col gap-6">
      {order.sellerOrders.map((so) => (
        <section key={so.id} className="flex flex-col gap-3 rounded-lg border border-[var(--border)] p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-serif text-xl text-[var(--foreground)]">
              From{" "}
              <Link href={`/sellers/${so.seller.slug}`} className="hover:text-[var(--highlight)]">
                {so.seller.storeName}
              </Link>
            </h2>
            {order.status !== "PENDING_PAYMENT" && <Badge kind={so.status} />}
          </div>
          <ul className="flex flex-col gap-1 text-[15px]">
            {so.items.map((i) => (
              <li key={i.id} className="flex justify-between gap-4">
                <span>
                  {i.quantity} ×{" "}
                  <Link href={`/products/${i.productSlug}`} className="underline-offset-2 hover:underline">
                    {i.productName}
                  </Link>
                </span>
                <span>{formatPrice(i.unitPriceCents * i.quantity)}</span>
              </li>
            ))}
            <li className="flex justify-between gap-4 text-sm text-[var(--muted)]">
              <span>Shipping</span>
              <span>{so.shippingCents === 0 ? "Free" : formatPrice(so.shippingCents)}</span>
            </li>
          </ul>
          {so.trackingNumber && (
            <p className="text-sm">
              Shipped{so.shippedAt ? ` ${so.shippedAt.toLocaleDateString("en-US", { month: "long", day: "numeric" })}` : ""} by {so.carrier}. Tracking
              number: <span className="font-mono">{so.trackingNumber}</span>
            </p>
          )}
          <p className="text-xs text-[var(--muted)]">
            Questions about these items? Email the store at{" "}
            <a href={`mailto:${so.seller.contactEmail}`} className="underline underline-offset-2">
              {so.seller.contactEmail}
            </a>
            .
          </p>
          {sellerActions?.(so.id)}
        </section>
      ))}

      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        {address.length > 0 && (
          <div className="text-[15px]">
            <p className="mb-1 text-sm text-[var(--muted)]">Shipping to</p>
            {address.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        )}
        <dl className="flex w-full max-w-xs flex-col gap-1 text-[15px] sm:ml-auto">
          <div className="flex justify-between">
            <dt className="text-[var(--muted)]">Items</dt>
            <dd>{formatPrice(order.itemsCents)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--muted)]">Shipping</dt>
            <dd>{formatPrice(order.shippingCents)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--muted)]">Tax</dt>
            <dd>{order.status === "PENDING_PAYMENT" ? "—" : formatPrice(order.taxCents)}</dd>
          </div>
          <div className="flex justify-between border-t border-[var(--border)] pt-2 font-medium">
            <dt>Total</dt>
            <dd>{order.status === "PENDING_PAYMENT" ? "—" : formatPrice(order.totalCents)}</dd>
          </div>
          {order.refundedCents > 0 && (
            <div className="flex justify-between text-[var(--muted)]">
              <dt>Refunded</dt>
              <dd>−{formatPrice(order.refundedCents)}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
