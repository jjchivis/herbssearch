import { prisma } from "@/lib/prisma";
import { siteUrl, stripe } from "@/lib/stripe";
import { type Actor, MarketplaceError } from "@/lib/marketplace/sellers";

// Seller payouts through Stripe Connect. Each store gets a Stripe account that
// can receive transfers (a "recipient"), with the Express dashboard for bank
// details, payouts and tax forms. Stripe collects the identity and bank
// information; none of it passes through this site.

async function ownSeller(actor: Actor) {
  const seller = await prisma.seller.findUnique({ where: { userId: actor.id }, include: { user: { select: { email: true } } } });
  if (!seller) throw new MarketplaceError("You don't have a store.");
  return seller;
}

/** Creates the store's Stripe account if needed and returns a Stripe onboarding link. */
export async function payoutOnboardingUrl(actor: Actor) {
  const seller = await ownSeller(actor);
  if (seller.status !== "ACTIVE") throw new MarketplaceError("Your store is suspended. Contact us to restore it.");

  let accountId = seller.stripeAccountId;
  if (!accountId) {
    const account = await stripe().v2.core.accounts.create(
      {
        display_name: seller.storeName,
        contact_email: seller.contactEmail,
        dashboard: "express",
        identity: { country: "us" },
        configuration: { recipient: { capabilities: { stripe_balance: { stripe_transfers: { requested: true } } } } },
        defaults: {
          currency: "usd",
          responsibilities: { fees_collector: "application", losses_collector: "application" },
        },
        metadata: { sellerId: seller.id },
      },
      { idempotencyKey: `account-${seller.id}` },
    );
    accountId = account.id;
    await prisma.seller.update({ where: { id: seller.id }, data: { stripeAccountId: accountId } });
  }

  const link = await stripe().v2.core.accountLinks.create({
    account: accountId,
    use_case: {
      type: "account_onboarding",
      account_onboarding: {
        refresh_url: `${siteUrl()}/seller/payouts/connect`,
        return_url: `${siteUrl()}/seller/payouts?returned=1`,
      },
    },
  });
  return link.url;
}

/** Asks Stripe whether the store can receive money yet, and saves the answer. */
export async function refreshPayoutStatus(sellerId: string) {
  const seller = await prisma.seller.findUniqueOrThrow({ where: { id: sellerId } });
  if (!seller.stripeAccountId) return seller;
  const account = await stripe().v2.core.accounts.retrieve(seller.stripeAccountId, { include: ["configuration.recipient", "requirements"] });
  const balance = account.configuration?.recipient?.capabilities?.stripe_balance;
  return prisma.seller.update({
    where: { id: seller.id },
    data: {
      stripeTransfersActive: balance?.stripe_transfers?.status === "active",
      stripePayoutsActive: balance?.payouts?.status === "active",
      stripeCheckedAt: new Date(),
    },
  });
}

/** A one-time link into the store's Stripe Express dashboard. */
export async function expressDashboardUrl(actor: Actor) {
  const seller = await ownSeller(actor);
  if (!seller.stripeAccountId) throw new MarketplaceError("Set up payouts first.");
  const link = await stripe().accounts.createLoginLink(seller.stripeAccountId);
  return link.url;
}
