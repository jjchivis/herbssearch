import { requireSeller } from "@/lib/auth-guards";
import { stripeConfigured } from "@/lib/stripe";
import { getCommissionBps } from "@/lib/marketplace/orders";
import { refreshPayoutStatus } from "@/lib/marketplace/payouts";
import { Notice, buttonClass, secondaryButtonClass } from "@/components/marketplace/ui";

export default async function PayoutsPage() {
  let { seller } = await requireSeller("/seller/payouts");
  const configured = stripeConfigured();
  // Check with Stripe on each visit, so finishing onboarding shows up at once.
  if (configured && seller.stripeAccountId) {
    try {
      seller = await refreshPayoutStatus(seller.id);
    } catch (e) {
      console.error("[payouts] status check failed", e);
    }
  }
  const commission = (await getCommissionBps()) / 100;

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl text-[var(--foreground)]">Payouts</h1>
        <p className="max-w-2xl text-[15px] text-[var(--muted)]">
          Payments go through Stripe. When a customer pays, you receive your item prices minus the {commission}% marketplace commission, plus
          all of the shipping you charged. Stripe then pays out to your bank account. Your bank and identity details go to Stripe, not to us.
        </p>
      </header>

      {!configured ? (
        <Notice>Payouts aren&apos;t switched on yet. You&apos;ll be able to set them up here soon.</Notice>
      ) : seller.stripeTransfersActive ? (
        <div className="flex flex-col gap-4">
          <Notice tone="success">
            Your store can take orders and receive payments.
            {!seller.stripePayoutsActive && " Stripe still needs a few details before it can send money to your bank."}
          </Notice>
          <div className="flex flex-wrap gap-3">
            <a href="/seller/payouts/dashboard" className={buttonClass}>
              Open your Stripe dashboard
            </a>
            <a href="/seller/payouts/connect" className={secondaryButtonClass}>
              Update your details
            </a>
          </div>
          <p className="text-sm text-[var(--muted)]">Your Stripe dashboard shows your balance, payouts, bank details and tax forms.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <Notice>
            {seller.stripeAccountId
              ? "Stripe is still waiting for some details, or is checking them. Your products can't be bought until this is done."
              : "Set up payouts to start taking orders. Your products can't be bought until this is done."}
          </Notice>
          <div>
            <a href="/seller/payouts/connect" className={buttonClass}>
              {seller.stripeAccountId ? "Continue setup with Stripe" : "Set up payouts with Stripe"}
            </a>
          </div>
          <p className="text-sm text-[var(--muted)]">It takes about five minutes. Stripe asks for your name, address, tax ID and bank account.</p>
        </div>
      )}
    </>
  );
}
