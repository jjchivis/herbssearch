import { redirect } from "next/navigation";
import { requireSeller, toActor } from "@/lib/auth-guards";
import { payoutOnboardingUrl } from "@/lib/marketplace/payouts";

// Sends the signed-in seller to Stripe's onboarding. Stripe also sends people
// back here when an onboarding link has expired, to get a fresh one.
export async function GET() {
  const { user } = await requireSeller("/seller/payouts");
  redirect(await payoutOnboardingUrl(toActor(user)));
}
