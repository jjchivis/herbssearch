import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import { isSaved, savedItems, toggleSaved } from "@/lib/marketplace/saved";

// Runs against the marketplace-dev branch only (see `npm test`).

const run = `s${Date.now()}`;
const userIds: string[] = [];
let shopper: string, otherShopper: string;
let herbId: string, liveId: string, draftId: string, sellerId: string;

async function makeUser(name: string) {
  const id = `${name}-${run}`;
  userIds.push(id);
  await prisma.user.create({ data: { id, name, email: `${id}@example.test`, role: "customer" } });
  return id;
}

async function makeProduct(name: string, status: "LIVE" | "DRAFT") {
  const p = await prisma.product.create({
    data: {
      sellerId,
      name: `${name} ${run}`,
      slug: `${name.toLowerCase()}-${run}`,
      description: "A test product for the automated saved-items tests.",
      group: "DRIED_HERBS_TEAS",
      priceCents: 1000,
      inventory: 5,
      status,
      herbs: { create: [{ herbId, isPrimary: true }] },
    },
  });
  return p.id;
}

beforeAll(async () => {
  herbId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Ashwagandha" } })).id;
  shopper = await makeUser("saver");
  otherShopper = await makeUser("othersaver");
  const sellerUser = await makeUser("savedseller");
  const app = await prisma.sellerApplication.create({
    data: {
      userId: sellerUser,
      storeName: "Saved",
      legalBusinessName: "Saved",
      businessType: "INDIVIDUAL",
      contactEmail: `${sellerUser}@example.test`,
      country: "US",
      description: "Test store for automated saved-items tests.",
      plannedGroups: ["DRIED_HERBS_TEAS"],
      termsVersion: "test",
      termsAcceptedAt: new Date(),
      status: "APPROVED",
    },
  });
  sellerId = (
    await prisma.seller.create({
      data: { userId: sellerUser, applicationId: app.id, storeName: "Saved", slug: `saved-${run}`, description: "Test store.", contactEmail: `${sellerUser}@example.test` },
    })
  ).id;
  liveId = await makeProduct("Live", "LIVE");
  draftId = await makeProduct("Draft", "DRAFT");
});

afterAll(async () => {
  await prisma.savedItem.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.product.deleteMany({ where: { sellerId } });
  await prisma.seller.deleteMany({ where: { id: sellerId } });
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
});

describe("saved items", () => {
  it("saves and unsaves a herb and a product", async () => {
    expect(await toggleSaved(shopper, { herbId })).toBe(true);
    expect(await toggleSaved(shopper, { productId: liveId })).toBe(true);
    expect(await isSaved(shopper, { herbId })).toBe(true);
    const list = await savedItems(shopper);
    expect(list.herbs.map((h) => h.id)).toEqual([herbId]);
    expect(list.products.map((p) => p.id)).toEqual([liveId]);

    expect(await toggleSaved(shopper, { herbId })).toBe(false);
    expect(await isSaved(shopper, { herbId })).toBe(false);
  });

  it("keeps each user's list separate", async () => {
    expect(await isSaved(otherShopper, { productId: liveId })).toBe(false);
    expect((await savedItems(otherShopper)).products).toEqual([]);
  });

  it("won't save products shoppers can't see, and hides ones taken down later", async () => {
    await expect(toggleSaved(shopper, { productId: draftId })).rejects.toThrow(MarketplaceError);
    await prisma.product.update({ where: { id: liveId }, data: { status: "HIDDEN" } });
    expect((await savedItems(shopper)).products).toEqual([]);
    await prisma.product.update({ where: { id: liveId }, data: { status: "LIVE" } });
  });

  it("refuses a row pointing at both a herb and a product", async () => {
    await expect(prisma.savedItem.create({ data: { userId: shopper, herbId, productId: draftId } })).rejects.toThrow();
  });
});
