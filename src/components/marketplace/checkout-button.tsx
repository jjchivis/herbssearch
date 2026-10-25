"use client";

import { useActionState } from "react";
import { type CartState, checkoutAction } from "@/app/cart/actions";
import { Notice, buttonClass } from "@/components/marketplace/ui";

export function CheckoutButton({ disabled }: { disabled: boolean }) {
  const [state, action, pending] = useActionState<CartState>(checkoutAction, {});
  return (
    <form action={action} className="flex flex-col gap-3">
      <button type="submit" disabled={disabled || pending} className={buttonClass}>
        {pending ? "Opening secure checkout…" : "Check out"}
      </button>
      {state.message && <Notice tone="error">{state.message}</Notice>}
    </form>
  );
}
