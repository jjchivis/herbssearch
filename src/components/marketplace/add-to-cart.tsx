"use client";

import { useActionState } from "react";
import { type CartState, addToCartAction } from "@/app/cart/actions";
import { buttonClass, inputClass } from "@/components/marketplace/ui";

export function AddToCart({ productId, slug, max }: { productId: string; slug: string; max: number }) {
  const [state, action, pending] = useActionState<CartState, FormData>(addToCartAction, {});
  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="slug" value={slug} />
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
        <button type="submit" disabled={pending} className={buttonClass}>
          {pending ? "Adding…" : "Add to cart"}
        </button>
      </div>
      {state.message && (
        <p role="alert" className="text-sm text-[var(--caution)]">
          {state.message}
        </p>
      )}
    </form>
  );
}
