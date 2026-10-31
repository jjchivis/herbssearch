"use client";

import { useActionState } from "react";
import { type CartState, buyOnShopifyAction } from "@/app/cart/actions";
import { buttonClass, inputClass } from "@/components/marketplace/ui";

export function BuyOnShopify({ productId, max }: { productId: string; max: number }) {
  const [state, action, pending] = useActionState<CartState, FormData>(buyOnShopifyAction, {});
  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="productId" value={productId} />
      <div className="flex items-center gap-3">
        <label htmlFor="quantity" className="text-sm text-[var(--muted)]">
          Quantity
        </label>
        <select id="quantity" name="quantity" defaultValue="1" className={`${inputClass} w-20`}>
          {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <button type="submit" disabled={pending} className={`${buttonClass} whitespace-nowrap`}>
          {pending ? "Opening checkout…" : "Buy now"}
        </button>
      </div>
      <p className="text-xs text-[var(--muted)]">You&apos;ll finish your order on our secure Shopify checkout.</p>
      {state.message && (
        <p role="alert" className="text-sm text-[var(--caution)]">
          {state.message}
        </p>
      )}
    </form>
  );
}
