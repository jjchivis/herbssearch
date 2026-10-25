"use client";

import { useActionState } from "react";
import { type ShippingState, updateShippingAction } from "../actions";
import { Field, Notice, buttonClass, inputClass } from "@/components/marketplace/ui";

export function ShippingForm({ defaults }: { defaults: { flat: string; freeOver: string; base: string; perPound: string } }) {
  const [state, action, pending] = useActionState<ShippingState, FormData>(updateShippingAction, {});
  return (
    <form action={action} className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 font-serif text-xl">Standard items</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Flat shipping per order ($)" htmlFor="flat" hint="One charge however many standard items a customer buys from you. 0 for free.">
            <input id="flat" name="flat" inputMode="decimal" defaultValue={defaults.flat} className={inputClass} />
          </Field>
          <Field label="Free shipping over ($)" htmlFor="freeOver" hint="Optional. Leave blank for no free-shipping amount.">
            <input id="freeOver" name="freeOver" inputMode="decimal" defaultValue={defaults.freeOver} className={inputClass} />
          </Field>
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 font-serif text-xl">Weight-priced items</legend>
        <p className="text-sm text-[var(--muted)]">
          For heavy, oversized, fragile or costly items. Charged on top of the flat rate, using each product&apos;s packed weight, rounded up to
          whole pounds.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Base charge ($)" htmlFor="base">
            <input id="base" name="base" inputMode="decimal" defaultValue={defaults.base} className={inputClass} />
          </Field>
          <Field label="Per pound ($)" htmlFor="perPound">
            <input id="perPound" name="perPound" inputMode="decimal" defaultValue={defaults.perPound} className={inputClass} />
          </Field>
        </div>
      </fieldset>
      {state.saved && <Notice tone="success">Saved.</Notice>}
      {state.message && <Notice tone="error">{state.message}</Notice>}
      <div>
        <button type="submit" disabled={pending} className={buttonClass}>
          {pending ? "Saving…" : "Save shipping"}
        </button>
      </div>
    </form>
  );
}
