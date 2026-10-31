"use client";

import { useActionState } from "react";
import { type SaveState, toggleSavedAction } from "@/app/account/saved/actions";
import { secondaryButtonClass } from "@/components/marketplace/ui";

export function SaveButton({
  kind,
  id,
  returnTo,
  initiallySaved,
}: {
  kind: "herb" | "product";
  id: string;
  returnTo: string;
  initiallySaved: boolean;
}) {
  const [state, action, pending] = useActionState<SaveState, FormData>(toggleSavedAction, { saved: initiallySaved });
  const saved = state.saved ?? initiallySaved;
  return (
    <form action={action} className="flex flex-col gap-1">
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="returnTo" value={returnTo} />
      <button type="submit" disabled={pending} aria-pressed={saved} className={`${secondaryButtonClass} w-fit gap-2`}>
        <span aria-hidden="true">{saved ? "♥" : "♡"}</span>
        {saved ? "Saved" : "Save"}
      </button>
      {state.message && (
        <p role="alert" className="text-sm text-[var(--caution)]">
          {state.message}
        </p>
      )}
    </form>
  );
}
