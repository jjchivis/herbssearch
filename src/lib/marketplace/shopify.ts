import { prisma } from "@/lib/prisma";
import type { ProductGroup, ProductStatus } from "@/generated/prisma/enums";
import { type Actor, MarketplaceError } from "@/lib/marketplace/sellers";
import { INGESTIBLE_GROUPS, findProhibitedTerm } from "@/lib/marketplace/products";
import { MAX_QUANTITY } from "@/lib/marketplace/orders";

// Products supplied through Syncee live in a Shopify store. This module imports
// them as HerbSearch products (one per Shopify variant) so they appear on the
// Shop page and herb pages, and sends shoppers to Shopify's checkout to buy
// them. Orders then exist in Shopify, where Syncee forwards them to the
// supplier.
//
// Everything goes through the Storefront API with the private token from
// Shopify's Headless channel, so only products published to that channel are
// imported. Server-only: the token never reaches the browser.

const API_VERSION = process.env.SHOPIFY_API_VERSION ?? "2026-07";

/** True when the Shopify store and its Headless channel private token are configured. */
export function shopifyConfigured() {
  return Boolean(process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN);
}

function storeDomain() {
  const domain = (process.env.SHOPIFY_STORE_DOMAIN ?? "").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (!/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(domain))
    throw new Error("SHOPIFY_STORE_DOMAIN must be the store's myshopify.com address, like herbssearch.myshopify.com.");
  return domain;
}

async function storefront<T>(query: string, variables: Record<string, unknown>, buyerIp?: string | null): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Shopify-Storefront-Private-Token": process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN ?? "",
  };
  // Shopify asks server-side callers to pass the shopper's IP for bot protection.
  if (buyerIp) headers["Shopify-Storefront-Buyer-IP"] = buyerIp;
  const res = await fetch(`https://${storeDomain()}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Shopify Storefront API returned ${res.status}.`);
  const body = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (body.errors?.length) throw new Error(`Shopify Storefront API: ${body.errors.map((e) => e.message).join("; ")}`);
  return body.data as T;
}

// ---------------------------------------------------------------------------
// Reading products from Shopify
// ---------------------------------------------------------------------------

export type ShopifyVariant = {
  id: string;
  title: string;
  sku: string | null;
  price: { amount: string };
  compareAtPrice: { amount: string } | null;
  availableForSale: boolean;
  quantityAvailable: number | null;
  weight: number | null;
  weightUnit: string | null;
};

export type ShopifyProduct = {
  id: string;
  title: string;
  description: string;
  productType: string;
  tags: string[];
  images: { nodes: { id: string | null; url: string; altText: string | null }[] };
  variants: { nodes: ShopifyVariant[] };
};

export type ShopifyPage = { products: ShopifyProduct[]; nextCursor: string | null };

const PRODUCTS_QUERY = `
  query Products($after: String) {
    products(first: 50, after: $after) {
      nodes {
        id title description productType tags
        images(first: 8) { nodes { id url altText } }
        variants(first: 50) {
          nodes {
            id title sku availableForSale quantityAvailable weight weightUnit
            price { amount }
            compareAtPrice { amount }
          }
        }
      }
      pageInfo { hasNextPage endCursor }
    }
  }`;

/** One page of the products published to the Headless channel. */
export async function fetchShopifyPage(after: string | null): Promise<ShopifyPage> {
  const data = await storefront<{
    products: { nodes: ShopifyProduct[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
  }>(PRODUCTS_QUERY, { after });
  return { products: data.products.nodes, nextCursor: data.products.pageInfo.hasNextPage ? data.products.pageInfo.endCursor : null };
}

// ---------------------------------------------------------------------------
// Mapping (pure, so it can be tested without Shopify)
// ---------------------------------------------------------------------------

export type ImportRow = {
  shopifyProductId: string;
  shopifyVariantId: string;
  name: string;
  description: string;
  group: ProductGroup;
  priceCents: number;
  compareAtPriceCents: number | null;
  sku: string | null;
  inventory: number;
  weightGrams: number | null;
  images: { url: string; alt: string; key: string }[];
};

/** "19.99" → 1999; null for blank or invalid. */
export function moneyToCents(v: string | null | undefined): number | null {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? Math.round(n * 100) : null;
}

const GRAMS_PER: Record<string, number> = { GRAMS: 1, KILOGRAMS: 1000, OUNCES: 28.3495, POUNDS: 453.592 };

/**
 * Supplier categories vary, so this only recognizes clear cases. Anything
 * unclear is treated as a supplement: the strictest category, with the
 * ingestible rules and the FDA disclaimer. The admin can change it in review.
 */
export function guessGroup(productType: string, tags: string[], title: string): ProductGroup {
  const text = `${productType} ${tags.join(" ")} ${title}`.toLowerCase();
  if (/\b(tea|teas|tisane|loose leaf|dried herbs?|herbal blend)\b/.test(text)) return "DRIED_HERBS_TEAS";
  if (/\b(candle|soap|book|print|poster|art|incense|diffuser|jewelry|apparel|shirt|mug|tool|seeds? for planting|planter|bag)\b/.test(text))
    return "NON_INGESTIBLE";
  return "SUPPLEMENTS_EXTRACTS";
}

export function mapShopifyProduct(p: ShopifyProduct): ImportRow[] {
  const variants = p.variants.nodes;
  const images = p.images.nodes
    .filter((m) => m.url)
    .slice(0, 8)
    .map((m, i) => ({ url: m.url, alt: (m.altText || p.title).slice(0, 200), key: m.id ?? `${p.id}#${i}` }));
  const group = guessGroup(p.productType, p.tags, p.title);
  return variants.flatMap((v) => {
    const priceCents = moneyToCents(v.price.amount);
    if (priceCents === null || priceCents < 50) return []; // Free or broken prices aren't imported.
    const compareAt = moneyToCents(v.compareAtPrice?.amount);
    const single = variants.length === 1 || v.title === "Default Title";
    return [
      {
        shopifyProductId: p.id,
        shopifyVariantId: v.id,
        name: (single ? p.title : `${p.title} – ${v.title}`).slice(0, 100),
        description: p.description.trim().slice(0, 4000),
        group,
        priceCents,
        compareAtPriceCents: compareAt !== null && compareAt > priceCents ? compareAt : null,
        sku: v.sku?.trim().slice(0, 64) || null,
        // Without the inventory permission Shopify gives no count, so an
        // in-stock variant shows as available up to the usual quantity limit.
        inventory: v.availableForSale ? Math.max(0, v.quantityAvailable ?? MAX_QUANTITY) : 0,
        weightGrams: v.weight && v.weightUnit && GRAMS_PER[v.weightUnit] ? Math.round(v.weight * GRAMS_PER[v.weightUnit]) : null,
        images,
      },
    ];
  });
}

export type HerbName = { id: string; names: string[] };

/**
 * Library herbs named in the product title, longest names first, at most 5.
 * Only whole words count, so "Sage" doesn't match "Sagebrush". The admin checks
 * and corrects these links in review.
 */
export function matchHerbs(title: string, herbs: HerbName[]): string[] {
  const t = ` ${title.toLowerCase().replace(/[^a-z0-9' ]+/g, " ")} `;
  const candidates = herbs
    .flatMap((h) => h.names.map((n) => ({ id: h.id, n: n.toLowerCase().replace(/[^a-z0-9' ]+/g, " ").trim() })))
    .filter((c) => c.n.length >= 3)
    .sort((a, b) => b.n.length - a.n.length);
  const found: string[] = [];
  let rest = t;
  for (const c of candidates) {
    if (found.includes(c.id)) continue;
    const needle = ` ${c.n} `;
    if (rest.includes(needle)) {
      found.push(c.id);
      rest = rest.replace(needle, " ");
      if (found.length === 5) break;
    }
  }
  return found;
}

// ---------------------------------------------------------------------------
// Sync
// ---------------------------------------------------------------------------

export type SyncSummary = { created: number; updated: number; sentToReview: number; blocked: number; removed: number; skipped: number };

async function libraryHerbNames(): Promise<HerbName[]> {
  const herbs = await prisma.herb.findMany({
    select: { id: true, name: true, synonyms: { where: { type: "COMMON_NAME" }, select: { name: true } } },
  });
  return herbs.map((h) => ({ id: h.id, names: [h.name, ...h.synonyms.map((s) => s.name)] }));
}

async function uniqueSlug(base: string) {
  const root =
    base
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70) || "product";
  for (let n = 1; ; n++) {
    const slug = n === 1 ? root : `${root}-${n}`;
    if (!(await prisma.product.findUnique({ where: { slug } }))) return slug;
  }
}

function blockedNote(term: string) {
  return `Imported from Shopify, but the listing mentions ${term}, which can't be sold here. Change it in Shopify or remove it from the store.`;
}

/**
 * Brings the marketplace in line with the Shopify store. New products wait for
 * admin review; changes to the name, description or photos of a live product
 * send it back to review (the same rule sellers follow); price and stock update
 * straight away. Products that use banned wording are imported as not approved
 * so they can never go live, and products no longer active in Shopify are hidden.
 */
export async function runShopifySync(fetchPage: (after: string | null) => Promise<ShopifyPage> = fetchShopifyPage): Promise<SyncSummary> {
  const settings = await prisma.marketplaceSettings.findUnique({ where: { id: "default" } });
  const seller = settings?.shopifySellerId ? await prisma.seller.findUnique({ where: { id: settings.shopifySellerId } }) : null;
  if (!seller) throw new MarketplaceError("Choose which store Shopify products are listed under in Settings first.");

  const rows: ImportRow[] = [];
  let cursor: string | null = null;
  for (let page = 0; page < 40; page++) {
    const result = await fetchPage(cursor);
    rows.push(...result.products.flatMap(mapShopifyProduct));
    if (!result.nextCursor) break;
    cursor = result.nextCursor;
  }

  const herbs = await libraryHerbNames();
  const existing = await prisma.product.findMany({
    where: { shopifyVariantId: { not: null } },
    include: { images: { orderBy: { position: "asc" } } },
  });
  const byVariant = new Map(existing.map((p) => [p.shopifyVariantId!, p]));
  const summary: SyncSummary = { created: 0, updated: 0, sentToReview: 0, blocked: 0, removed: 0, skipped: 0 };
  const now = new Date();

  for (const row of rows) {
    const prohibited = findProhibitedTerm(`${row.name}\n${row.description}`, INGESTIBLE_GROUPS.includes(row.group));
    const current = byVariant.get(row.shopifyVariantId);
    const imageRows = row.images.map((img, i) => ({ url: img.url, pathname: `shopify:${img.key}`, alt: img.alt, position: i }));

    if (!current) {
      const herbIds = matchHerbs(row.name, herbs);
      await prisma.product.create({
        data: {
          sellerId: seller.id,
          slug: await uniqueSlug(`${seller.slug}-${row.name}`),
          name: row.name,
          description: row.description || row.name,
          group: row.group,
          priceCents: row.priceCents,
          compareAtPriceCents: row.compareAtPriceCents,
          sku: row.sku,
          inventory: row.inventory,
          weightGrams: row.weightGrams,
          status: prohibited ? "REJECTED" : "PENDING_REVIEW",
          reviewNote: prohibited ? blockedNote(prohibited) : null,
          submittedAt: now,
          shopifyProductId: row.shopifyProductId,
          shopifyVariantId: row.shopifyVariantId,
          shopifySyncedAt: now,
          images: { create: imageRows },
          herbs: { create: herbIds.map((herbId, i) => ({ herbId, isPrimary: i === 0 })) },
        },
      });
      summary.created++;
      if (prohibited) summary.blocked++;
      continue;
    }

    const contentChanged =
      current.name !== row.name ||
      current.description !== (row.description || row.name) ||
      current.images.map((i) => i.url).join("|") !== row.images.map((i) => i.url).join("|");
    let status: ProductStatus = current.status;
    let reviewNote = current.reviewNote;
    if (prohibited && (status === "LIVE" || status === "PENDING_REVIEW")) {
      status = "REJECTED";
      reviewNote = blockedNote(prohibited);
      summary.blocked++;
    } else if (contentChanged && status === "LIVE") {
      status = "PENDING_REVIEW";
      summary.sentToReview++;
    }
    await prisma.$transaction([
      ...(contentChanged ? [prisma.productImage.deleteMany({ where: { productId: current.id } })] : []),
      prisma.product.update({
        where: { id: current.id },
        data: {
          name: row.name,
          description: row.description || row.name,
          priceCents: row.priceCents,
          compareAtPriceCents: row.compareAtPriceCents,
          sku: row.sku,
          inventory: row.inventory,
          weightGrams: row.weightGrams,
          status,
          reviewNote,
          submittedAt: status === "PENDING_REVIEW" && current.status !== "PENDING_REVIEW" ? now : current.submittedAt,
          shopifyProductId: row.shopifyProductId,
          shopifySyncedAt: now,
          ...(contentChanged ? { images: { create: imageRows } } : {}),
        },
      }),
    ]);
    summary.updated++;
  }

  // Anything we imported before that Shopify no longer lists as active.
  const seen = new Set(rows.map((r) => r.shopifyVariantId));
  for (const p of existing) {
    if (seen.has(p.shopifyVariantId!)) continue;
    if (p.status === "HIDDEN" && p.inventory === 0) continue;
    await prisma.product.update({
      where: { id: p.id },
      data: {
        inventory: 0,
        status: p.status === "LIVE" || p.status === "PENDING_REVIEW" ? "HIDDEN" : p.status,
        reviewNote: p.status === "LIVE" || p.status === "PENDING_REVIEW" ? "No longer active in the Shopify store." : p.reviewNote,
        shopifySyncedAt: now,
      },
    });
    summary.removed++;
  }
  return summary;
}

/** Admin-only wrapper used by the "Sync from Shopify" button. */
export async function syncShopifyAsAdmin(actor: Actor) {
  if (actor.role !== "admin") throw new MarketplaceError("Only an admin can do this.");
  if (!shopifyConfigured()) throw new MarketplaceError("Shopify isn't connected yet. Add the Shopify settings in Vercel first.");
  return runShopifySync();
}

export async function setShopifySeller(actor: Actor, sellerId: string | null) {
  if (actor.role !== "admin") throw new MarketplaceError("Only an admin can do this.");
  if (sellerId && !(await prisma.seller.findUnique({ where: { id: sellerId } }))) throw new MarketplaceError("Store not found.");
  await prisma.marketplaceSettings.upsert({
    where: { id: "default" },
    create: { id: "default", shopifySellerId: sellerId, updatedById: actor.id },
    update: { shopifySellerId: sellerId, updatedById: actor.id },
  });
}

// ---------------------------------------------------------------------------
// Checkout
// ---------------------------------------------------------------------------

const CART_CREATE = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { message }
    }
  }`;

/**
 * Creates a Shopify cart for one live Shopify product and returns its checkout
 * address. Shopify takes payment, works out shipping and tax, and creates the
 * order that Syncee forwards to the supplier.
 */
export async function startShopifyCheckout(productId: string, quantity: number, buyerIp: string | null = null): Promise<string> {
  if (!shopifyConfigured()) throw new MarketplaceError("Checkout for this product isn't switched on yet. Please try again soon.");
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) throw new MarketplaceError("Choose a quantity.");
  const product = await prisma.product.findFirst({
    where: { id: productId, status: "LIVE", seller: { status: "ACTIVE" }, shopifyVariantId: { not: null } },
  });
  if (!product) throw new MarketplaceError("This product can't be bought right now.");
  if (product.inventory < 1) throw new MarketplaceError("This product is out of stock.");

  const data = await storefront<{ cartCreate: { cart: { checkoutUrl: string } | null; userErrors: { message: string }[] } }>(
    CART_CREATE,
    { lines: [{ merchandiseId: product.shopifyVariantId, quantity }] },
    buyerIp,
  );
  if (data.cartCreate.userErrors.length || !data.cartCreate.cart)
    throw new MarketplaceError(data.cartCreate.userErrors[0]?.message ?? "Shopify couldn't start checkout.");
  const url = new URL(data.cartCreate.cart.checkoutUrl);
  if (url.protocol !== "https:") throw new Error("Unexpected checkout address from Shopify.");
  return url.toString();
}
