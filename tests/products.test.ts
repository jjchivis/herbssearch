import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import type { Actor } from "@/lib/marketplace/sellers";
import {
  type ProductInput,
  addProductImage,
  approveProduct,
  createProduct,
  findDiseaseClaim,
  findProhibitedTerm,
  imagePathPrefix,
  parseMoney,
  parseProduct,
  publicProductWhere,
  rejectProduct,
  setProductHidden,
  submitProductForReview,
  updateProduct,
} from "@/lib/marketplace/products";

// Runs against the marketplace-dev branch only (see `npm test`).

const run = `p${Date.now()}`;
const userIds: string[] = [];
let admin: Actor, alice: Actor, bob: Actor;
let aliceSellerId: string;
let ashwagandhaId: string, belladonnaId: string;

async function makeUser(name: string, role: Actor["role"] = "customer"): Promise<Actor> {
  const id = `${name}-${run}`;
  userIds.push(id);
  await prisma.user.create({ data: { id, name, email: `${id}@example.test`, role } });
  return { id, role };
}

async function makeSeller(actor: Actor, storeName: string) {
  const app = await prisma.sellerApplication.create({
    data: {
      userId: actor.id,
      storeName,
      legalBusinessName: storeName,
      businessType: "INDIVIDUAL",
      contactEmail: "s@example.test",
      country: "US",
      description: "Test store for automated product permission tests.",
      plannedGroups: ["DRIED_HERBS_TEAS"],
      termsVersion: "test",
      termsAcceptedAt: new Date(),
      status: "APPROVED",
    },
  });
  return prisma.seller.create({
    data: {
      userId: actor.id,
      applicationId: app.id,
      storeName,
      slug: `${storeName.toLowerCase()}-${run}`,
      description: "Test store.",
      contactEmail: "s@example.test",
    },
  });
}

function product(overrides: Partial<ProductInput> = {}): ProductInput {
  return {
    name: "Organic Ashwagandha Root Powder",
    description: "Finely ground organic ashwagandha root, packed in a resealable 4 oz pouch.",
    group: "SUPPLEMENTS_EXTRACTS",
    priceCents: 1999,
    compareAtPriceCents: null,
    sku: null,
    inventory: 10,
    weightGrams: 113,
    shippingNote: null,
    herbIds: [ashwagandhaId],
    primaryHerbId: ashwagandhaId,
    ...overrides,
  };
}

beforeAll(async () => {
  admin = await makeUser("admin", "admin");
  alice = await makeUser("alice");
  bob = await makeUser("bob");
  aliceSellerId = (await makeSeller(alice, "Alice")).id;
  await makeSeller(bob, "Bob");
  ashwagandhaId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Ashwagandha" } })).id;
  belladonnaId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Belladonna" } })).id;
});

afterAll(async () => {
  const sellers = await prisma.seller.findMany({ where: { userId: { in: userIds } }, select: { id: true } });
  await prisma.product.deleteMany({ where: { sellerId: { in: sellers.map((s) => s.id) } } });
  await prisma.seller.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
});

describe("listing text rules", () => {
  it("blocks disease claims but allows ordinary wording", () => {
    expect(findDiseaseClaim("Cures headaches fast")).toMatch(/cure/i);
    expect(findDiseaseClaim("Helps treat diabetes naturally")).toMatch(/treat/i);
    expect(findDiseaseClaim("Prevents cancer")).toBeTruthy();
    expect(findDiseaseClaim("A calming evening tea. Prevents clumping with a dry scoop.")).toBeNull();
    expect(findDiseaseClaim("A sweet treat for tea lovers")).toBeNull();
  });

  it("blocks CBD, THC, synthetic derivatives and raw hemp, but allows refined hemp", () => {
    expect(findProhibitedTerm("Full-spectrum CBD tincture")).toBe("CBD");
    expect(findProhibitedTerm("Cannabidiol body balm")).toBe("CBD");
    expect(findProhibitedTerm("CBG and CBN gummies")).toBe("cannabinoids");
    expect(findProhibitedTerm("Delta-8 gummies")).toMatch(/synthetic/);
    expect(findProhibitedTerm("HHC vape")).toMatch(/synthetic/);
    expect(findProhibitedTerm("THC-O tincture")).toBe("THC");
    expect(findProhibitedTerm("Smokable hemp flower, 7 g")).toMatch(/raw or unrefined hemp/);
    expect(findProhibitedTerm("Unrefined hemp, whole plant")).toMatch(/raw or unrefined hemp/);
    expect(findProhibitedTerm("Hemp seed oil, cold pressed")).toBeNull();
    expect(findProhibitedTerm("Shelled hemp hearts and hemp protein powder")).toBeNull();
    expect(findProhibitedTerm("Hemp twine and hemp paper journal")).toBeNull();
    expect(findProhibitedTerm("Methyl salicylate; a spicy chai blend")).toBeNull();
  });

  it("allows poppy seeds but not opium, pods or unwashed seeds to eat or drink", () => {
    expect(findProhibitedTerm("Organic blue poppy seeds for baking, 8 oz")).toBeNull();
    expect(findProhibitedTerm("Unwashed poppy seeds, 1 lb")).toMatch(/poppy/);
    expect(findProhibitedTerm("Dried poppy pods for tea")).toMatch(/poppy/);
    expect(findProhibitedTerm("Dried poppy pods for floral arrangements", false)).toBeNull();
    expect(findProhibitedTerm("Opium poppy botanical art print", false)).toBeNull();
    expect(findProhibitedTerm("Opium poppy seeds", true)).toBe("opium poppy");
    expect(findProhibitedTerm("Raw opium resin", false)).toBe("opium");
  });

  it("allows cannabis artwork but not cannabis substances in non-ingestible goods", () => {
    expect(findProhibitedTerm("Vintage cannabis botanical print with hemp leaves", false)).toBeNull();
    expect(findProhibitedTerm("Vintage cannabis botanical print with hemp leaves", true)).toBe("cannabis");
    expect(findProhibitedTerm("CBD massage oil", false)).toBe("CBD");
    expect(findProhibitedTerm("Hemp flower potpourri", false)).toMatch(/raw or unrefined hemp/);
  });

  it("parses prices in dollars", () => {
    expect(parseMoney("$19.99")).toBe(1999);
    expect(parseMoney("32")).toBe(3200);
    expect(parseMoney("")).toBeNull();
    expect(parseMoney("1.999")).toBeNaN();
  });

  it("rejects an incomplete form", () => {
    const result = parseProduct(new FormData());
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.priceCents).toBeDefined();
      expect(result.errors.herbIds).toBeDefined();
    }
  });
});

describe("restricted herbs", () => {
  it("blocks eat-or-drink products linked to a restricted herb", async () => {
    await expect(
      createProduct(alice, product({ name: "Belladonna tea", herbIds: [belladonnaId], primaryHerbId: belladonnaId, group: "DRIED_HERBS_TEAS" })),
    ).rejects.toThrow(/can't be sold to eat or drink/);
  });

  it("allows non-ingestible goods for a restricted herb", async () => {
    const p = await createProduct(
      alice,
      product({ name: "Belladonna botanical print", group: "NON_INGESTIBLE", herbIds: [belladonnaId], primaryHerbId: belladonnaId }),
    );
    expect(p.status).toBe("DRAFT");
  });

  it("blocks CBD in every category, including non-ingestible goods", async () => {
    await expect(createProduct(alice, product({ description: "Ashwagandha blended with CBD isolate for a calm evening." }))).rejects.toThrow(
      /CBD/,
    );
    await expect(
      createProduct(alice, product({ group: "NON_INGESTIBLE", name: "Soothing CBD body balm", description: "A rich body balm made with shea butter and CBD." })),
    ).rejects.toThrow(/in any category/);
    const print = await createProduct(
      alice,
      product({ group: "NON_INGESTIBLE", name: "Cannabis sativa botanical print", description: "Archival giclée print of a vintage cannabis botanical plate, 11 x 14 in." }),
    );
    expect(print.status).toBe("DRAFT");
  });

  it("allows refined hemp products", async () => {
    const p = await createProduct(
      alice,
      product({ group: "DRIED_HERBS_TEAS", name: "Shelled hemp hearts", description: "Raw shelled hemp hearts, 8 oz, ready to sprinkle on salads." }),
    );
    expect(p.status).toBe("DRAFT");
  });
});

describe("product permissions", () => {
  it("a customer without a store can't create products", async () => {
    const carol = await makeUser("carol");
    await expect(createProduct(carol, product())).rejects.toThrow("don't have a store");
  });

  it("a seller can't edit, submit or add photos to another seller's product", async () => {
    const p = await createProduct(alice, product());
    await expect(updateProduct(bob, p.id, product({ name: "Hijacked product name" }))).rejects.toThrow("Product not found");
    await expect(submitProductForReview(bob, p.id)).rejects.toThrow("Product not found");
    await expect(
      addProductImage(bob, p.id, {
        url: `https://x.public.blob.vercel-storage.com/${imagePathPrefix(aliceSellerId, p.id)}a.jpg`,
        pathname: `${imagePathPrefix(aliceSellerId, p.id)}a.jpg`,
        alt: "",
      }),
    ).rejects.toThrow("Product not found");
    expect((await prisma.product.findUniqueOrThrow({ where: { id: p.id } })).name).toBe("Organic Ashwagandha Root Powder");
  });

  it("refuses photo records outside the product's own upload folder or blob store", async () => {
    const p = await createProduct(alice, product());
    await expect(
      addProductImage(alice, p.id, { url: "https://evil.example/x.jpg", pathname: `${imagePathPrefix(aliceSellerId, p.id)}x.jpg`, alt: "" }),
    ).rejects.toThrow("doesn't belong");
    await expect(
      addProductImage(alice, p.id, {
        url: "https://x.public.blob.vercel-storage.com/sellers/other/products/x/y.jpg",
        pathname: "sellers/other/products/x/y.jpg",
        alt: "",
      }),
    ).rejects.toThrow("doesn't belong");
  });

  it("only admins can approve, reject or hide", async () => {
    const p = await createProduct(alice, product());
    await submitProductForReview(alice, p.id);
    await expect(approveProduct(alice, p.id)).rejects.toThrow("Only an admin");
    await expect(rejectProduct(bob, p.id, "no")).rejects.toThrow("Only an admin");
    await expect(setProductHidden(alice, p.id, true, null)).rejects.toThrow("Only an admin");
    await approveProduct(admin, p.id);
    expect((await prisma.product.findUniqueOrThrow({ where: { id: p.id } })).status).toBe("LIVE");
  });
});

describe("re-review rule and visibility", () => {
  it("price and stock edits keep a live product live; content edits send it back", async () => {
    const p = await createProduct(alice, product());
    await submitProductForReview(alice, p.id);
    await approveProduct(admin, p.id);

    const priceOnly = await updateProduct(alice, p.id, product({ priceCents: 2499, inventory: 3 }));
    expect(priceOnly.status).toBe("LIVE");

    const renamed = await updateProduct(alice, p.id, product({ priceCents: 2499, inventory: 3, name: "Ashwagandha Root Powder 8 oz" }));
    expect(renamed.status).toBe("PENDING_REVIEW");
  });

  it("hides live products of a suspended seller from the public", async () => {
    const p = await createProduct(alice, product({ name: "Visibility test powder" }));
    await submitProductForReview(alice, p.id);
    await approveProduct(admin, p.id);
    const visible = () => prisma.product.count({ where: { id: p.id, ...publicProductWhere } });
    expect(await visible()).toBe(1);
    await prisma.seller.update({ where: { id: aliceSellerId }, data: { status: "SUSPENDED" } });
    expect(await visible()).toBe(0);
    await prisma.seller.update({ where: { id: aliceSellerId }, data: { status: "ACTIVE" } });
  });

  it("unhiding sends a product back to review, not straight to live", async () => {
    const p = await createProduct(alice, product({ name: "Hide test powder" }));
    await submitProductForReview(alice, p.id);
    await approveProduct(admin, p.id);
    await setProductHidden(admin, p.id, true, "Checking a report");
    await expect(updateProduct(alice, p.id, product({ name: "Hide test powder" }))).rejects.toThrow("hidden by an admin");
    await setProductHidden(admin, p.id, false, null);
    expect((await prisma.product.findUniqueOrThrow({ where: { id: p.id } })).status).toBe("PENDING_REVIEW");
  });
});
