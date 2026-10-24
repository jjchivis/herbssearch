"use client";

import { useActionState } from "react";
import { updateStoreProfileAction, type ProfileState } from "../actions";
import { Field, Notice, buttonClass, inputClass } from "@/components/marketplace/ui";

type Profile = { storeName: string; description: string; website: string | null; contactEmail: string };

export function ProfileForm({ profile, disabled }: { profile: Profile; disabled: boolean }) {
  const [state, action, pending] = useActionState<ProfileState, FormData>(updateStoreProfileAction, {});
  const e = state.errors ?? {};
  const v = state.values ?? {};

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>
      <fieldset disabled={disabled} className="flex flex-col gap-5">
        <Field label="Store name" htmlFor="storeName" error={e.storeName}>
          <input id="storeName" name="storeName" defaultValue={v.storeName ?? profile.storeName} maxLength={60} className={inputClass} />
        </Field>
        <Field label="About your store" htmlFor="description" error={e.description}>
          <textarea id="description" name="description" rows={6} maxLength={2000} defaultValue={v.description ?? profile.description} className={inputClass} />
        </Field>
        <Field label="Website" htmlFor="website" hint="Optional." error={e.website}>
          <input id="website" name="website" type="url" defaultValue={v.website ?? profile.website ?? ""} placeholder="https://" className={inputClass} />
        </Field>
        <Field label="Contact email" htmlFor="contactEmail" hint="Shown to customers with questions about an order." error={e.contactEmail}>
          <input id="contactEmail" name="contactEmail" type="email" defaultValue={v.contactEmail ?? profile.contactEmail} className={inputClass} />
        </Field>
      </fieldset>

      {state.saved && <Notice tone="success">Saved.</Notice>}
      {state.message && <Notice tone="error">{state.message}</Notice>}

      <div>
        <button type="submit" disabled={pending || disabled} className={buttonClass}>
          {pending ? "Saving…" : "Save changes"}
        </button>
      </div>
    </form>
  );
}
