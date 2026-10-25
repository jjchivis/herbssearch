import { requireSeller } from "@/lib/auth-guards";
import { ShippingForm } from "./shipping-form";

const dollars = (cents: number | null) => (cents === null ? "" : (cents / 100).toFixed(2));

export default async function ShippingPage() {
  const { seller } = await requireSeller("/seller/shipping");
  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl text-[var(--foreground)]">Shipping</h1>
        <p className="max-w-2xl text-[15px] text-[var(--muted)]">
          You buy your own shipping labels and add tracking to each order. All the shipping you charge goes to you; the marketplace commission
          is only taken on item prices. Customers buying from several stores pay each store&apos;s shipping separately.
        </p>
      </header>
      <ShippingForm
        defaults={{
          flat: dollars(seller.shippingFlatCents),
          freeOver: dollars(seller.freeShippingOverCents),
          base: dollars(seller.calculatedBaseCents),
          perPound: dollars(seller.calculatedPerPoundCents),
        }}
      />
    </>
  );
}
