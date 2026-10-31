import { prisma } from "@/lib/prisma";
import { getCommissionBps } from "@/lib/marketplace/orders";
import { stripeConfigured } from "@/lib/stripe";
import { shopifyConfigured } from "@/lib/marketplace/shopify";
import { setCommissionAction, setShopifySellerAction, syncShopifyAction } from "../actions";
import { Field, Notice, buttonClass, inputClass, secondaryButtonClass } from "@/components/marketplace/ui";

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ done?: string; error?: string }> }) {
  const { done, error } = await searchParams;
  const [bps, settings, sellers, shopifyCounts] = await Promise.all([
    getCommissionBps(),
    prisma.marketplaceSettings.findUnique({ where: { id: "default" } }),
    prisma.seller.findMany({ where: { status: "ACTIVE" }, orderBy: { storeName: "asc" }, select: { id: true, storeName: true } }),
    prisma.product.groupBy({ by: ["status"], where: { shopifyVariantId: { not: null } }, _count: true }),
  ]);
  const lastSync = await prisma.product.aggregate({ where: { shopifyVariantId: { not: null } }, _max: { shopifySyncedAt: true } });
  const counts = Object.fromEntries(shopifyCounts.map((c) => [c.status, c._count]));

  return (
    <>
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Settings</h1>
      {done && <Notice tone="success">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}
      <form action={setCommissionAction} className="flex max-w-md flex-col gap-4">
        <Field
          label="Marketplace commission (%)"
          htmlFor="percent"
          hint="Taken from item prices only, never from shipping. Changes apply to new orders; past orders keep their rate."
        >
          <input id="percent" name="percent" inputMode="decimal" defaultValue={(bps / 100).toString()} className={inputClass} />
        </Field>
        <div>
          <button type="submit" className={buttonClass}>
            Save
          </button>
        </div>
      </form>
      <p className="text-sm text-[var(--muted)]">
        Stripe: {stripeConfigured() ? "connected" : "not connected yet (add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET)"}.
      </p>

      <section className="flex max-w-xl flex-col gap-4 border-t border-[var(--border)] pt-6">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Shopify products (Syncee)</h2>
        <p className="text-[15px] text-[var(--muted)]">
          Products published to your Shopify store&apos;s Headless channel are imported here for review. Once approved, shoppers buy them through Shopify&apos;s
          checkout, and Syncee sends the orders to your suppliers.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Shopify:{" "}
          {shopifyConfigured()
            ? "connected"
            : "not connected yet (add SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_PRIVATE_TOKEN)"}
          .
        </p>
        <form action={setShopifySellerAction} className="flex flex-col gap-3">
          <Field label="List Shopify products under this store" htmlFor="sellerId" hint="Usually your own store.">
            <select id="sellerId" name="sellerId" defaultValue={settings?.shopifySellerId ?? ""} className={inputClass}>
              <option value="">Choose a store…</option>
              {sellers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.storeName}
                </option>
              ))}
            </select>
          </Field>
          <div>
            <button type="submit" className={secondaryButtonClass}>
              Save store
            </button>
          </div>
        </form>
        <form action={syncShopifyAction} className="flex flex-col gap-2">
          <div>
            <button type="submit" className={buttonClass} disabled={!shopifyConfigured() || !settings?.shopifySellerId}>
              Sync from Shopify now
            </button>
          </div>
          <p className="text-sm text-[var(--muted)]">
            {lastSync._max.shopifySyncedAt
              ? `Last synced ${lastSync._max.shopifySyncedAt.toLocaleString("en-US")}. `
              : "Not synced yet. "}
            Imported: {counts.LIVE ?? 0} live, {counts.PENDING_REVIEW ?? 0} waiting for review, {counts.REJECTED ?? 0} not approved,{" "}
            {counts.HIDDEN ?? 0} hidden.
          </p>
        </form>
      </section>
    </>
  );
}
