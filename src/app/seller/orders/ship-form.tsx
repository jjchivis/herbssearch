"use client";

import { useActionState } from "react";
import { type ShipState, markShippedAction } from "../actions";
import { buttonClass, inputClass } from "@/components/marketplace/ui";

export function ShipForm({ sellerOrderId, carrier, trackingNumber }: { sellerOrderId: string; carrier?: string; trackingNumber?: string }) {
  const [state, action, pending] = useActionState<ShipState, FormData>(markShippedAction, {});
  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="sellerOrderId" value={sellerOrderId} />
      <div className="flex flex-col gap-2 sm:flex-row">
        <input name="carrier" defaultValue={carrier} placeholder="Carrier, e.g. USPS" aria-label="Carrier" className={`${inputClass} sm:w-40`} />
        <input name="trackingNumber" defaultValue={trackingNumber} placeholder="Tracking number" aria-label="Tracking number" className={inputClass} />
        <button type="submit" disabled={pending} className={buttonClass}>
          {pending ? "Saving…" : trackingNumber ? "Update tracking" : "Mark shipped"}
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
