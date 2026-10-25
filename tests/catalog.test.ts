import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import { herbProducts, parseShopQuery, searchProducts } from "@/lib/marketplace/catalog";
import type { ProductStatus } from "@/generated/prisma/enums";

// Runs against the marketplace-dev branch only (see `npm test`). Products are
// created directly in the database with a unique run tag in their names.

const run = `c${Date.now()}`;
const userIds: string[] = [];
let activeSellerId: string, suspendedSellerId: string, foundingSellerId: string;
let ashwagandhaId: string, chamomileId: string;

async function makeSeller(name: string, opts: { suspended?: boolean; founding?: boolean } = {}) {
  const id = `${name}-${run}`;
  userIds.push(id);
  await prisma.user.create({ data: { id, name, email: `${id}@example.test` } });
  const app = await prisma.sellerApplication.create({
    data: {
      userId: id,
      storeName: name,
      legalBusinessName: name,
      businessType: "INDIVIDUAL",
      contactEmail: "s@example.test",
      country: "US",
      description: "Test store for automated catalog tests.",
      plannedGroups: ["DRIED_HERBS_TEAS"],
      termsVersion: "test",
      termsAcceptedAt: new Date(),
      status: "APPROVED",
    },
  });
  const seller = await prisma.seller.create({
    data: {
      userId: id,
      applicationId: app.id,
      storeName: name,
      slug: `${name.toLowerCase()}-${run}`,
      description: "Test store.",
      contactEmail: "s@example.test",
      status: opts.suspended ? "SUSPENDED" : "ACTIVE",
      isFoundingSeller: Boolean(opts.founding),
    },
  });
  return seller.id;
}

async function makeProduct(
  sellerId: string,
  name: string,
  opts: { status?: ProductStatus; herbId?: string; primary?: boolean; priceCents?: number; inventory?: number; group?: "DRIED_HERBS_TEAS" | "NON_INGESTIBLE" } = {},
) {
  return prisma.product.create({
    data: {
      sellerId,
      name: `${name} ${run}`,
      slug: `${name.toLowerCase().replace(/\W+/g, "-")}-${run}-${Math.random().toString(36).slice(2, 7)}`,
      description: "A test product for the automated catalog tests.",
      group: opts.group ?? "DRIED_HERBS_TEAS",
      priceCents: opts.priceCents ?? 1000,
      inventory: opts.inventory ?? 5,
      status: opts.status ?? "LIVE",
      herbs: { create: [{ herbId: opts.herbId ?? ashwagandhaId, isPrimary: opts.primary ?? true }] },
    },
  });
}

beforeAll(async () => {
  ashwagandhaId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Ashwagandha" } })).id;
  chamomileId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Chamomile" } })).id;
  activeSellerId = await makeSeller("Active");
  suspendedSellerId = await makeSeller("Suspended", { suspended: true });
  foundingSellerId = await makeSeller("Founding", { founding: true });

  await makeProduct(activeSellerId, "Live ashwagandha powder", { priceCents: 1999 });
  await makeProduct(activeSellerId, "Draft ashwagandha", { status: "DRAFT" });
  await makeProduct(activeSellerId, "Pending ashwagandha", { status: "PENDING_REVIEW" });
  await makeProduct(activeSellerId, "Hidden ashwagandha", { status: "HIDDEN" });
  await makeProduct(activeSellerId, "Rejected ashwagandha", { status: "REJECTED" });
  await makeProduct(suspendedSellerId, "Suspended store ashwagandha");
  await makeProduct(foundingSellerId, "Founding ashwagandha tea", { priceCents: 899, primary: false });
  await makeProduct(foundingSellerId, "Sold out ashwagandha", { inventory: 0, priceCents: 2999 });
  await makeProduct(activeSellerId, "Calming chamomile tea", { herbId: chamomileId, priceCents: 650 });
});

afterAll(async () => {
  const sellers = await prisma.seller.findMany({ where: { userId: { in: userIds } }, select: { id: true } });
  await prisma.product.deleteMany({ where: { sellerId: { in: sellers.map((s) => s.id) } } });
  await prisma.seller.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
});

const names = (ps: { name: string }[]) => ps.map((p) => p.name).filter((n) => n.endsWith(run));

describe("herb page products", () => {
  it("shows only live products from active stores, main-herb products first", async () => {
    const { products } = await herbProducts(ashwagandhaId, 50);
    const mine = names(products);
    expect(mine).toContain(`Live ashwagandha powder ${run}`);
    expect(mine).toContain(`Founding ashwagandha tea ${run}`);
    for (const hidden of ["Draft", "Pending", "Hidden", "Rejected", "Suspended store"])
      expect(mine.some((n) => n.startsWith(hidden))).toBe(false);
    expect(mine.indexOf(`Live ashwagandha powder ${run}`)).toBeLessThan(mine.indexOf(`Founding ashwagandha tea ${run}`));
  });
});

describe("shop search", () => {
  it("never returns drafts, pending, hidden, rejected or suspended-store products", async () => {
    const { products } = await searchProducts(parseShopQuery({ q: run }));
    expect(names(products).sort()).toEqual(
      [
        `Calming chamomile tea ${run}`,
        `Founding ashwagandha tea ${run}`,
        `Live ashwagandha powder ${run}`,
        `Sold out ashwagandha ${run}`,
      ].sort(),
    );
  });

  it("finds products through their linked herb's scientific name", async () => {
    const { products } = await searchProducts(parseShopQuery({ q: "Withania" }));
    expect(names(products)).toContain(`Live ashwagandha powder ${run}`);
    expect(names(products)).not.toContain(`Calming chamomile tea ${run}`);
  });

  it("filters by herb, stock, price and Founding Sellers", async () => {
    const herb = await searchProducts(parseShopQuery({ q: run, herb: chamomileId }));
    expect(names(herb.products)).toEqual([`Calming chamomile tea ${run}`]);

    const inStock = await searchProducts(parseShopQuery({ q: run, instock: "1" }));
    expect(names(inStock.products)).not.toContain(`Sold out ashwagandha ${run}`);

    const price = await searchProducts(parseShopQuery({ q: run, min: "8", max: "20" }));
    expect(names(price.products).sort()).toEqual([`Founding ashwagandha tea ${run}`, `Live ashwagandha powder ${run}`].sort());

    const founding = await searchProducts(parseShopQuery({ q: run, founding: "1" }));
    expect(names(founding.products).sort()).toEqual([`Founding ashwagandha tea ${run}`, `Sold out ashwagandha ${run}`].sort());
  });

  it("sorts by price", async () => {
    const asc = names((await searchProducts(parseShopQuery({ q: run, sort: "price-asc" }))).products);
    expect(asc[0]).toBe(`Calming chamomile tea ${run}`);
    const desc = names((await searchProducts(parseShopQuery({ q: run, sort: "price-desc" }))).products);
    expect(desc[0]).toBe(`Sold out ashwagandha ${run}`);
  });

  it("ignores invalid filter values", () => {
    const q = parseShopQuery({ category: "WEAPONS", sort: "drop table", min: "abc", page: "-4" });
    expect(q.group).toBeNull();
    expect(q.sort).toBe("newest");
    expect(q.minCents).toBeNull();
    expect(q.page).toBe(1);
  });
});
