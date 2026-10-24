"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitApplicationAction, type ApplicationState } from "./actions";
import { Field, Notice, PRODUCT_GROUP_LABELS, buttonClass, inputClass } from "@/components/marketplace/ui";

export function ApplicationForm({ defaultEmail }: { defaultEmail: string }) {
  const [state, action, pending] = useActionState<ApplicationState, FormData>(submitApplicationAction, {});
  const e = state.errors ?? {};
  const v = state.values ?? {};
  const val = (name: string) => (typeof v[name] === "string" ? (v[name] as string) : undefined);

  return (
    <form action={action} className="flex flex-col gap-6" noValidate>
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-3 font-serif text-xl text-[var(--foreground)]">Your store</legend>
        <Field label="Store name" htmlFor="storeName" hint="Shown to shoppers." error={e.storeName}>
          <input id="storeName" name="storeName" defaultValue={val("storeName")} required maxLength={60} className={inputClass} />
        </Field>
        <Field label="Website" htmlFor="website" hint="Optional." error={e.website}>
          <input id="website" name="website" defaultValue={val("website")} type="url" placeholder="https://" className={inputClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="About your store"
            htmlFor="description"
            hint="What you sell, how it's grown or made, and anything that sets you apart."
            error={e.description}
          >
            <textarea id="description" name="description" defaultValue={val("description")} required rows={5} maxLength={2000} className={inputClass} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="What do you plan to sell?" error={e.plannedGroups}>
            <div className="flex flex-col gap-2 pt-1">
              {Object.entries(PRODUCT_GROUP_LABELS).map(([value, label]) => (
                <label key={value} className="flex items-center gap-2.5 text-sm text-[var(--foreground)]">
                  <input type="checkbox" name="plannedGroups" value={value} defaultChecked={(v.plannedGroups ?? []).includes(value)} className="h-4 w-4 accent-[var(--accent)]" />
                  {label}
                </label>
              ))}
            </div>
          </Field>
        </div>
      </fieldset>

      <fieldset className="grid gap-5 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
        <legend className="mb-3 font-serif text-xl text-[var(--foreground)]">Business details</legend>
        <Field label="Legal name" htmlFor="legalBusinessName" hint="Your name, or your registered business name." error={e.legalBusinessName}>
          <input id="legalBusinessName" name="legalBusinessName" defaultValue={val("legalBusinessName")} required className={inputClass} />
        </Field>
        <Field label="Business type" htmlFor="businessType" error={e.businessType}>
          <select
            // A select ignores a changed defaultValue after React's form reset, so remount it.
            key={val("businessType") ?? ""}
            id="businessType"
            name="businessType"
            required
            defaultValue={val("businessType") ?? ""} className={inputClass}>
            <option value="" disabled>
              Choose one
            </option>
            <option value="INDIVIDUAL">Individual / sole proprietor</option>
            <option value="COMPANY">Company</option>
          </select>
        </Field>
        <Field label="Contact email" htmlFor="contactEmail" error={e.contactEmail}>
          <input id="contactEmail" name="contactEmail" type="email" required defaultValue={val("contactEmail") ?? defaultEmail} className={inputClass} />
        </Field>
        <Field label="Phone" htmlFor="phone" hint="Optional. Only we see it." error={e.phone}>
          <input id="phone" name="phone" defaultValue={val("phone")} type="tel" className={inputClass} />
        </Field>
        <Field label="Country" htmlFor="country" error={e.country}>
          <input id="country" name="country" defaultValue={val("country")} required autoComplete="country-name" className={inputClass} />
        </Field>
        <Field label="State or region" htmlFor="region" hint="Optional." error={e.region}>
          <input id="region" name="region" defaultValue={val("region")} autoComplete="address-level1" className={inputClass} />
        </Field>
      </fieldset>

      <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-6">
        <label className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
          <input type="checkbox" name="terms" defaultChecked={v.terms === "on"} className="mt-0.5 h-4 w-4 accent-[var(--accent)]" />
          <span>
            I agree to the{" "}
            <Link href="/sell/terms" target="_blank" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              seller terms
            </Link>
            , including that product listings make no claims to treat, cure or prevent any disease.
          </span>
        </label>
        {e.terms && (
          <p role="alert" className="text-xs text-[var(--caution)]">
            {e.terms}
          </p>
        )}
      </div>

      {state.message && <Notice tone="error">{state.message}</Notice>}

      <div>
        <button type="submit" disabled={pending} className={buttonClass}>
          {pending ? "Submitting…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}
