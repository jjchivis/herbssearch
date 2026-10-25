import Stripe from "stripe";

// Server-only Stripe client. The secret key never reaches the browser: this
// module is only imported by server actions, route handlers and server pages.

let client: Stripe | null = null;

/** True when a Stripe secret key is configured, so checkout and payouts can run. */
export function stripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function stripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set.");
  if (process.env.VERCEL_ENV === "preview" && !key.startsWith("sk_test_"))
    throw new Error("Test sites must use a Stripe test key (sk_test_…).");
  client ??= new Stripe(key, { appInfo: { name: "Discover the Power of Plants marketplace" } });
  return client;
}

export function siteUrl() {
  return (process.env.BETTER_AUTH_URL ?? "http://localhost:3001").replace(/\/$/, "");
}
