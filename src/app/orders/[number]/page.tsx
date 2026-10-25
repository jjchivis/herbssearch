import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth-guards";
import { customerOrder } from "@/lib/marketplace/orders";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OrderSummary } from "@/components/marketplace/order-summary";
import { Badge, Notice } from "@/components/marketplace/ui";

export const metadata: Metadata = { title: "Your order", robots: { index: false } };

export default async function OrderPage({
  params,
  searchParams,
}: {
  params: Promise<{ number: string }>;
  searchParams: Promise<{ placed?: string }>;
}) {
  const { number } = await params;
  const user = await requireUser(`/orders/${number}`);
  const order = await customerOrder(user.id, number);
  if (!order) notFound();
  const placed = (await searchParams).placed === "1";

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Your orders", href: "/orders" }, { label: order.number }]} />
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Order {order.number}</h1>
        <p className="flex flex-wrap items-center gap-3 text-[15px] text-[var(--muted)]">
          Placed {order.createdAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          <Badge kind={order.status} />
        </p>
      </header>
      {placed && order.status === "PAID" && (
        <Notice tone="success">Thank you! Your order is confirmed and we&apos;ve emailed you a receipt.</Notice>
      )}
      {placed && order.status === "PENDING_PAYMENT" && (
        <Notice>Thank you! We&apos;re waiting for Stripe to confirm your payment. Refresh this page in a moment.</Notice>
      )}
      {order.status === "CANCELED" && <Notice>This checkout wasn&apos;t completed, so you weren&apos;t charged. Your cart is unchanged.</Notice>}
      <OrderSummary order={order} />
    </main>
  );
}
