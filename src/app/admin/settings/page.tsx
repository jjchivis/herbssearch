import { getCommissionBps } from "@/lib/marketplace/orders";
import { stripeConfigured } from "@/lib/stripe";
import { setCommissionAction } from "../actions";
import { Field, Notice, buttonClass, inputClass } from "@/components/marketplace/ui";

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ done?: string; error?: string }> }) {
  const { done, error } = await searchParams;
  const bps = await getCommissionBps();

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
    </>
  );
}
