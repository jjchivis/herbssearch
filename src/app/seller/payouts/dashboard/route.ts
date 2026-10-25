import { redirect } from "next/navigation";
import { requireSeller, toActor } from "@/lib/auth-guards";
import { expressDashboardUrl } from "@/lib/marketplace/payouts";

// One-time sign-in link to the seller's Stripe Express dashboard.
export async function GET() {
  const { user } = await requireSeller("/seller/payouts");
  redirect(await expressDashboardUrl(toActor(user)));
}
