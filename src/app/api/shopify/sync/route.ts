import { runShopifySync, shopifyConfigured } from "@/lib/marketplace/shopify";
import { MarketplaceError } from "@/lib/marketplace/sellers";

// Daily Shopify sync, called by Vercel Cron (see vercel.json). Vercel sends
// CRON_SECRET as a bearer token; without a matching secret nothing runs.
// Vercel only runs cron jobs on the live site, not on test sites.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  if (!shopifyConfigured()) return Response.json({ skipped: "Shopify isn't connected." });
  try {
    return Response.json(await runShopifySync());
  } catch (e) {
    if (e instanceof MarketplaceError) return Response.json({ skipped: e.message });
    console.error("[shopify cron]", e);
    return new Response("Sync failed", { status: 500 });
  }
}
