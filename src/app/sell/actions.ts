"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getCurrentUser, toActor } from "@/lib/auth-guards";
import { type FieldErrors, MarketplaceError, parseApplication, submitApplication } from "@/lib/marketplace/sellers";

// `values` echoes the submission back, because React resets a form after its
// action runs; without it one typo would clear everything the person typed.
export type ApplicationState = { errors?: FieldErrors; message?: string; values?: Record<string, string | string[]> };

function echo(form: FormData) {
  const values: Record<string, string | string[]> = {};
  for (const key of new Set(form.keys())) {
    if (key.startsWith("$")) continue;
    const all = form.getAll(key).map(String);
    values[key] = key === "plannedGroups" ? all : all[0];
  }
  return values;
}

export async function submitApplicationAction(_prev: ApplicationState, form: FormData): Promise<ApplicationState> {
  const user = await getCurrentUser();
  if (!user) return { message: "Your session ended. Sign in again to apply.", values: echo(form) };

  const parsed = parseApplication(form);
  if (!parsed.ok) return { errors: parsed.errors, message: "Please fix the highlighted fields.", values: echo(form) };

  try {
    await submitApplication(toActor(user), parsed.data);
  } catch (e) {
    if (e instanceof MarketplaceError) return { message: e.message, values: echo(form) };
    throw e;
  }
  revalidatePath("/sell");
  revalidatePath("/admin/applications");
  redirect("/sell?submitted=1");
}
