import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import type { Actor } from "@/lib/marketplace/sellers";
import { approveProduct, setProductGroupAsAdmin, updateProduct } from "@/lib/marketplace/products";
import { addToCart } from "@/lib/marketplace/orders";
import {
  type ShopifyPage,
  type ShopifyProduct,
  guessGroup,
  mapShopifyProduct,
  matchHerbs,
  moneyToCents,
  runShopifySync,
  startShopifyCheckout,
} from "@/lib/marketplace/shopify";

// Runs against the marketplace-dev branch only (see `npm test`). Shopify itself
// is never called: the sync is given a fake page of products instead.

const run = `s${Date.now()}`;
const userIds: string[] = [];
let admin: Actor, owner: Actor;
let sellerId: string;
let previousShopifySellerId: string | null | undefined;

async function makeUser(name: string, role: Actor["role"] = "customer"): Promise<Actor> {
  const id = `${name}-${run}`;
  userIds.push(id);
  await prisma.user.create({ data: { id, name, email: `${id}@example.test`, role } });
  return { id, role };
}

function shopifyProduct(n: number, overrides: Partial<ShopifyProduct> = {}, variant: Partial<ShopifyProduct["variants"]["nodes"][0]> = {}): ShopifyProduct {
  return {
    id: `gid://shopify/Product/${run}${n}`,
    title: "Organic Ashwagandha Capsules",
    description: "Sixty capsules of organic ashwagandha root powder in a glass bottle.",
    productType: "Supplements",
    tags: [],
    images: { nodes: [{ id: `gid://shopify/ProductImage/${run}${n}`, url: `https://cdn.shopify.com/s/files/${run}-${n}.jpg`, altText: null }] },
    variants: {
      nodes: [
        {
          id: `gid://shopify/ProductVariant/${run}${n}`,
          title: "Default Title",
          sku: `SKU-${n}`,
          price: { amount: "24.99" },
          compareAtPrice: null,
          availableForSale: true,
          quantityAvailable: 12,
          weight: 4,
          weightUnit: "OUNCES",
          ...variant,
        },
      ],
    },
    ...overrides,
  };
}

const onePage =
  (products: ShopifyProduct[]) =>
  async (): Promise<ShopifyPage> => ({ products, nextCursor: null });

beforeAll(async () => {
  admin = await makeUser("admin", "admin");
  owner = await makeUser("owner");
  const app = await prisma.sellerApplication.create({
    data: {
      userId: owner.id,
      storeName: "HerbSearch Apothecary",
      legalBusinessName: "HerbSearch Apothecary",
      businessType: "INDIVIDUAL",
      contactEmail: "s@example.test",
      country: "US",
      description: "Test store for automated Shopify import tests.",
      plannedGroups: ["SUPPLEMENTS_EXTRACTS"],
      termsVersion: "test",
      termsAcceptedAt: new Date(),
      status: "APPROVED",
    },
  });
  sellerId = (
    await prisma.seller.create({
      data: {
        userId: owner.id,
        applicationId: app.id,
        storeName: "HerbSearch Apothecary",
        slug: `apothecary-${run}`,
        description: "Test store.",
        contactEmail: "s@example.test",
      },
    })
  ).id;
  // The settings row is shared with the test site, so put it back afterwards.
  previousShopifySellerId = (await prisma.marketplaceSettings.findUnique({ where: { id: "default" } }))?.shopifySellerId;
  await prisma.marketplaceSettings.upsert({
    where: { id: "default" },
    create: { id: "default", shopifySellerId: sellerId },
    update: { shopifySellerId: sellerId },
  });
});

afterAll(async () => {
  await prisma.marketplaceSettings.update({ where: { id: "default" }, data: { shopifySellerId: previousShopifySellerId ?? null } });
  await prisma.product.deleteMany({ where: { sellerId } });
  await prisma.seller.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
});

describe("mapping Shopify products", () => {
  it("converts prices and skips free or broken ones", () => {
    expect(moneyToCents("24.99")).toBe(2499);
    expect(moneyToCents("5")).toBe(500);
    expect(moneyToCents(null)).toBeNull();
    expect(moneyToCents("abc")).toBeNull();
    expect(mapShopifyProduct(shopifyProduct(1, {}, { price: { amount: "0.00" } }))).toHaveLength(0);
  });

  it("makes one product per variant and keeps sensible names, weights and compare-at prices", () => {
    const single = mapShopifyProduct(shopifyProduct(1, {}, { compareAtPrice: { amount: "20.00" } }))[0];
    expect(single.name).toBe("Organic Ashwagandha Capsules");
    expect(single.priceCents).toBe(2499);
    expect(single.compareAtPriceCents).toBeNull(); // Lower than the price, so ignored.
    expect(single.weightGrams).toBe(113);
    expect(single.images[0].url).toContain("cdn.shopify.com");

    const multi = shopifyProduct(2);
    multi.variants.nodes.push({ ...multi.variants.nodes[0], id: `${multi.variants.nodes[0].id}b`, title: "120 capsules", price: { amount: "39.99" } });
    multi.variants.nodes[0].title = "60 capsules";
    const rows = mapShopifyProduct(multi);
    expect(rows.map((r) => r.name)).toEqual(["Organic Ashwagandha Capsules – 60 capsules", "Organic Ashwagandha Capsules – 120 capsules"]);
  });

  it("handles stock without the inventory permission, and sold-out variants", () => {
    expect(mapShopifyProduct(shopifyProduct(1, {}, { quantityAvailable: null }))[0].inventory).toBe(20);
    expect(mapShopifyProduct(shopifyProduct(1, {}, { availableForSale: false, quantityAvailable: 5 }))[0].inventory).toBe(0);
  });

  it("guesses categories, treating anything unclear as a supplement", () => {
    expect(guessGroup("Tea", [], "Chamomile Loose Leaf")).toBe("DRIED_HERBS_TEAS");
    expect(guessGroup("Candles", [], "Lavender Soy Candle")).toBe("NON_INGESTIBLE");
    expect(guessGroup("", [], "Elderberry Gummies")).toBe("SUPPLEMENTS_EXTRACTS");
  });

  it("links herbs named in the title as whole words, longest names first", () => {
    const herbs = [
      { id: "sage", names: ["Sage"] },
      { id: "white-sage", names: ["White Sage"] },
      { id: "ginger", names: ["Ginger"] },
      { id: "tulsi", names: ["Holy Basil", "Tulsi"] },
    ];
    expect(matchHerbs("White Sage Smudge Bundle", herbs)).toEqual(["white-sage"]);
    expect(matchHerbs("Sagebrush Honey", herbs)).toEqual([]);
    expect(matchHerbs("Tulsi & Ginger Tea", herbs).sort()).toEqual(["ginger", "tulsi"]);
  });
});

describe("syncing the Shopify store", () => {
  it("imports new products for review, linked to library herbs, and blocks banned wording", async () => {
    const summary = await runShopifySync(
      onePage([shopifyProduct(1), shopifyProduct(2, { title: "Full-Spectrum CBD Tincture", description: "A CBD oil tincture with a dropper bottle." })]),
    );
    expect(summary.created).toBe(2);
    expect(summary.blocked).toBe(1);

    const ash = await prisma.product.findUniqueOrThrow({
      where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}1` },
      include: { herbs: { include: { herb: true } }, images: true },
    });
    expect(ash.status).toBe("PENDING_REVIEW");
    expect(ash.sellerId).toBe(sellerId);
    expect(ash.herbs.map((h) => h.herb.name)).toContain("Ashwagandha");
    expect(ash.images[0].pathname.startsWith("shopify:")).toBe(true);

    const cbd = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}2` } });
    expect(cbd.status).toBe("REJECTED");
    expect(cbd.reviewNote).toMatch(/CBD/);
  });

  it("keeps a live product live when only price or stock change, but re-reviews new wording", async () => {
    const variantId = `gid://shopify/ProductVariant/${run}1`;
    const ash = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: variantId } });
    await approveProduct(admin, ash.id);

    await runShopifySync(onePage([shopifyProduct(1, {}, { price: { amount: "21.50" }, quantityAvailable: 3 })]));
    let p = await prisma.product.findUniqueOrThrow({ where: { id: ash.id } });
    expect(p.status).toBe("LIVE");
    expect(p.priceCents).toBe(2150);
    expect(p.inventory).toBe(3);

    await runShopifySync(onePage([shopifyProduct(1, { description: "Now with a new supplier's description of the capsules." })]));
    p = await prisma.product.findUniqueOrThrow({ where: { id: ash.id } });
    expect(p.status).toBe("PENDING_REVIEW");
  });

  it("hides products that are no longer active in Shopify", async () => {
    const summary = await runShopifySync(onePage([]));
    expect(summary.removed).toBeGreaterThanOrEqual(1);
    const ash = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}1` } });
    expect(ash.status).toBe("HIDDEN");
    expect(ash.inventory).toBe(0);
  });

  it("won't approve an imported product without herb links or with a restricted herb", async () => {
    await runShopifySync(onePage([shopifyProduct(3, { title: "Evening Calm Capsules" }), shopifyProduct(4, { title: "Belladonna Drops" })]));
    const unlinked = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}3` } });
    await expect(approveProduct(admin, unlinked.id)).rejects.toThrow(/at least one herb/);
    const belladonna = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}4` } });
    await expect(approveProduct(admin, belladonna.id)).rejects.toThrow(/Belladonna/);
    // Correcting the category to a non-ingestible one would allow it (e.g. a print).
    await setProductGroupAsAdmin(admin, belladonna.id, "NON_INGESTIBLE");
    await expect(approveProduct(admin, belladonna.id)).resolves.toBeUndefined();
  });

  it("keeps Shopify products out of the seller form and the HerbSearch cart", async () => {
    const p = await prisma.product.findUniqueOrThrow({
      where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}4` },
      include: { herbs: true },
    });
    await expect(
      updateProduct(owner, p.id, {
        name: p.name,
        description: p.description,
        group: p.group,
        priceCents: p.priceCents,
        compareAtPriceCents: null,
        sku: null,
        inventory: 5,
        weightGrams: null,
        shippingNote: null,
        shippingClass: "STANDARD",
        herbIds: p.herbs.map((h) => h.herbId),
        primaryHerbId: p.herbs[0]?.herbId ?? null,
      }),
    ).rejects.toThrow(/Shopify/);
    await expect(addToCart(admin.id, p.id, 1)).rejects.toThrow(/can't be bought/);
  });

  it("explains that checkout is off until Shopify is connected", async () => {
    const p = await prisma.product.findUniqueOrThrow({ where: { shopifyVariantId: `gid://shopify/ProductVariant/${run}4` } });
    await expect(startShopifyCheckout(p.id, 1)).rejects.toThrow(/isn't switched on yet/);
  });
});
