"use client";

import { useActionState } from "react";
import type { ProductFormState } from "./actions";
import { HerbPicker, type PickerHerb } from "@/components/marketplace/herb-picker";
import { Field, Notice, PRODUCT_CATEGORY_LABELS, buttonClass, inputClass } from "@/components/marketplace/ui";

export type ProductDefaults = {
  name: string;
  description: string;
  group: string;
  price: string;
  compareAtPrice: string;
  sku: string;
  inventory: string;
  weightGrams: string;
  shippingNote: string;
  shippingClass: string;
  herbIds: string[];
  primaryHerbId: string | null;
};

export const EMPTY_PRODUCT: ProductDefaults = {
  name: "",
  description: "",
  group: "",
  price: "",
  compareAtPrice: "",
  sku: "",
  inventory: "0",
  weightGrams: "",
  shippingNote: "",
  shippingClass: "STANDARD",
  herbIds: [],
  primaryHerbId: null,
};

export function ProductForm({
  action,
  defaults,
  herbs,
  submitLabel,
  disabled = false,
  liveNote = false,
}: {
  action: (prev: ProductFormState, form: FormData) => Promise<ProductFormState>;
  defaults: ProductDefaults;
  herbs: PickerHerb[];
  submitLabel: string;
  disabled?: boolean;
  liveNote?: boolean;
}) {
  const [state, formAction, pending] = useActionState<ProductFormState, FormData>(action, {});
  const e = state.errors ?? {};
  const v = state.values ?? {};
  const val = (k: keyof ProductDefaults) => (typeof v[k] === "string" ? (v[k] as string) : (defaults[k] as string));
  const herbIds = Array.isArray(v.herbIds) ? (v.herbIds as string[]) : defaults.herbIds;
  const primary = typeof v.primaryHerbId === "string" ? v.primaryHerbId : defaults.primaryHerbId;

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      <fieldset disabled={disabled} className="flex flex-col gap-5">
        <Field label="Product name" htmlFor="name" error={e.name}>
          <input id="name" name="name" defaultValue={val("name")} maxLength={100} className={inputClass} />
        </Field>
        <Field label="Category" htmlFor="group" error={e.group}>
          <select key={val("group")} id="group" name="group" defaultValue={val("group")} className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            {Object.entries(PRODUCT_CATEGORY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Description"
          htmlFor="description"
          hint="Describe what it is: the plant part, how it's grown or made, size and form. Don't claim it treats, cures or prevents any disease."
          error={e.description}
        >
          <textarea id="description" name="description" rows={6} maxLength={4000} defaultValue={val("description")} className={inputClass} />
        </Field>
        <Field
          label="Linked herbs"
          hint="Link the herbs in this product, so it appears with them in the library. Up to 5."
          error={e.herbIds}
        >
          <HerbPicker key={herbIds.join()} herbs={herbs} defaultIds={herbIds} defaultPrimary={primary} />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Price (USD)" htmlFor="price" error={e.priceCents}>
            <input id="price" name="price" inputMode="decimal" placeholder="19.99" defaultValue={val("price")} className={inputClass} />
          </Field>
          <Field label="Compare-at price" htmlFor="compareAtPrice" hint="Optional: an earlier, higher price." error={e.compareAtPriceCents}>
            <input id="compareAtPrice" name="compareAtPrice" inputMode="decimal" defaultValue={val("compareAtPrice")} className={inputClass} />
          </Field>
          <Field label="In stock" htmlFor="inventory" error={e.inventory}>
            <input id="inventory" name="inventory" inputMode="numeric" defaultValue={val("inventory")} className={inputClass} />
          </Field>
          <Field label="SKU" htmlFor="sku" hint="Optional: your own product code." error={e.sku}>
            <input id="sku" name="sku" defaultValue={val("sku")} className={inputClass} />
          </Field>
          <Field label="Packed weight (grams)" htmlFor="weightGrams" hint="Needed for weight-priced shipping." error={e.weightGrams}>
            <input id="weightGrams" name="weightGrams" inputMode="numeric" defaultValue={val("weightGrams")} className={inputClass} />
          </Field>
        </div>
        <Field
          label="Shipping"
          htmlFor="shippingClass"
          hint="Standard items share your one flat shipping charge. Use weight-priced shipping for heavy, oversized, fragile or costly items."
          error={e.shippingClass}
        >
          <select id="shippingClass" name="shippingClass" defaultValue={val("shippingClass")} className={inputClass}>
            <option value="STANDARD">Standard (lightweight)</option>
            <option value="CALCULATED">Priced by weight (heavy, oversized, fragile or costly)</option>
          </select>
        </Field>
        <Field label="Shipping note" htmlFor="shippingNote" hint="Optional, e.g. ships in 2 business days." error={e.shippingNote}>
          <input id="shippingNote" name="shippingNote" defaultValue={val("shippingNote")} maxLength={500} className={inputClass} />
        </Field>
      </fieldset>

      {liveNote && (
        <p className="text-xs text-[var(--muted)]">
          This product is live. Changing price, stock, SKU, weight or shipping keeps it live. Changing anything else sends it
          back for review.
        </p>
      )}
      {state.saved && <Notice tone="success">Saved.</Notice>}
      {state.message && <Notice tone="error">{state.message}</Notice>}

      <div>
        <button type="submit" disabled={pending || disabled} className={buttonClass}>
          {pending ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
