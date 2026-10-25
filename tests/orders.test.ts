import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import {
  addToCart,
  createPendingOrder,
  getCart,
  getCommissionBps,
  markShipped,
  recordPayment,
  refundSellerOrder,
  setCartQuantity,
  setCommissionBps,
} from "@/lib/marketplace/orders";

// Runs against the marketplace-dev branch only (see `npm test`). Stripe isn't
// called: these tests cover the cart and the database side of orders.

const run = `o${Date.now()}`;
const userIds: string[] = [];
let ashwagandhaId: string;
let shopper: string, otherShopper: string, admin: string, sellerUser: string, otherSellerUser: string;
let readySellerId: string, otherReadySellerId: string, notReadySellerId: string;
let teaId: string, powderId: string, heavyId: string, notReadyId: string, draftId: string, otherStoreId: string;
let originalCommission: number;

async function makeUser(name: string, role = "customer") {
  const id = `${name}-${run}`;
  userIds.push(id);
  await prisma.user.create({ data: { id, name, email: `${id}@example.test`, role } });
  return id;
}

async function makeSeller(userId: string, name: string, ready: boolean, rates: Record<string, number | null> = {}) {
  const app = await prisma.sellerApplication.create({
    data: {
      userId,
      storeName: name,
      legalBusinessName: name,
      businessType: "INDIVIDUAL",
      contactEmail: `${userId}@example.test`,
      country: "US",
      description: "Test store for automated order tests.",
      plannedGroups: ["DRIED_HERBS_TEAS"],
      termsVersion: "test",
      termsAcceptedAt: new Date(),
      status: "APPROVED",
    },
  });
  const seller = await prisma.seller.create({
    data: {
      userId,
      applicationId: app.id,
      storeName: name,
      slug: `${name.toLowerCase()}-${run}`,
      description: "Test store.",
      contactEmail: `${userId}@example.test`,
      stripeTransfersActive: ready,
      shippingFlatCents: 595,
      calculatedBaseCents: 1000,
      calculatedPerPoundCents: 150,
      ...rates,
    },
  });
  return seller.id;
}

async function makeProduct(sellerId: string, name: string, opts: { priceCents?: number; inventory?: number; status?: "LIVE" | "DRAFT"; calculated?: boolean } = {}) {
  const p = await prisma.product.create({
    data: {
      sellerId,
      name: `${name} ${run}`,
      slug: `${name.toLowerCase().replace(/\W+/g, "-")}-${run}`,
      description: "A test product for the automated order tests.",
      group: "DRIED_HERBS_TEAS",
      priceCents: opts.priceCents ?? 1000,
      inventory: opts.inventory ?? 10,
      status: opts.status ?? "LIVE",
      shippingClass: opts.calculated ? "CALCULATED" : "STANDARD",
      weightGrams: opts.calculated ? 1000 : 100,
      herbs: { create: [{ herbId: ashwagandhaId, isPrimary: true }] },
    },
  });
  return p.id;
}

const actor = (id: string, role: "customer" | "admin" = "customer") => ({ id, role });

beforeAll(async () => {
  ashwagandhaId = (await prisma.herb.findUniqueOrThrow({ where: { name: "Ashwagandha" } })).id;
  originalCommission = await getCommissionBps();
  shopper = await makeUser("shopper");
  otherShopper = await makeUser("othershopper");
  admin = await makeUser("admin", "admin");
  sellerUser = await makeUser("seller");
  otherSellerUser = await makeUser("otherseller");
  const notReadyUser = await makeUser("notready");

  readySellerId = await makeSeller(sellerUser, "Ready", true, { freeShippingOverCents: 5000 });
  otherReadySellerId = await makeSeller(otherSellerUser, "Other", true, { shippingFlatCents: 400 });
  notReadySellerId = await makeSeller(notReadyUser, "NotReady", false);

  teaId = await makeProduct(readySellerId, "Tea", { priceCents: 1200, inventory: 3 });
  powderId = await makeProduct(readySellerId, "Powder", { priceCents: 1800 });
  heavyId = await makeProduct(readySellerId, "Heavy jar", { priceCents: 3000, calculated: true });
  draftId = await makeProduct(readySellerId, "Draft", { status: "DRAFT" });
  notReadyId = await makeProduct(notReadySellerId, "Waiting");
  otherStoreId = await makeProduct(otherReadySellerId, "Other tea", { priceCents: 900 });
});

afterAll(async () => {
  const sellers = await prisma.seller.findMany({ where: { userId: { in: userIds } }, select: { id: true } });
  const sellerIds = sellers.map((s) => s.id);
  await prisma.order.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.product.deleteMany({ where: { sellerId: { in: sellerIds } } });
  await prisma.seller.deleteMany({ where: { id: { in: sellerIds } } });
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
  await prisma.marketplaceSettings.upsert({
    where: { id: "default" },
    create: { id: "default", commissionBps: originalCommission },
    update: { commissionBps: originalCommission },
  });
});

describe("cart", () => {
  it("only accepts live products from stores that can be paid", async () => {
    await expect(addToCart(shopper, draftId, 1)).rejects.toThrow(MarketplaceError);
    await expect(addToCart(shopper, notReadyId, 1)).rejects.toThrow(/can't be bought/);
  });

  it("never puts more in the cart than the store has", async () => {
    expect(await addToCart(shopper, teaId, 2)).toBe(2);
    expect(await addToCart(shopper, teaId, 5)).toBe(3); // only 3 in stock
  });

  it("only changes the user's own cart", async () => {
    await setCartQuantity(otherShopper, teaId, 0);
    expect((await getCart(shopper)).lines[0].item.quantity).toBe(3);
  });

  it("groups by store with one shipping charge per store", async () => {
    await addToCart(shopper, powderId, 1);
    await addToCart(shopper, otherStoreId, 1);
    const cart = await getCart(shopper);
    expect(cart.stores).toHaveLength(2);
    const ready = cart.stores.find((s) => s.seller.id === readySellerId)!;
    // $54 reaches this store's $50 free-shipping amount
    expect(ready.plan).toMatchObject({ itemsCents: 3 * 1200 + 1800, shippingCents: 0 });
    const other = cart.stores.find((s) => s.seller.id === otherReadySellerId)!;
    expect(other.plan).toMatchObject({ itemsCents: 900, shippingCents: 400 });
    expect(cart.shippingCents).toBe(400);
  });

  it("prices weight-priced items by weight, adding the flat rate only for standard items", async () => {
    await addToCart(admin, heavyId, 1);
    // 1,000 g ≈ 2.2 lb → 3 lb; no standard items, so no flat rate
    expect((await getCart(admin)).shippingCents).toBe(1000 + 3 * 150);
    await addToCart(admin, powderId, 1);
    expect((await getCart(admin)).shippingCents).toBe(595 + 1000 + 3 * 150);
    await setCartQuantity(admin, heavyId, 0);
    await setCartQuantity(admin, powderId, 0);
  });

  it("flags lines that can no longer be bought, and blocks checkout", async () => {
    await prisma.product.update({ where: { id: teaId }, data: { inventory: 1 } });
    const cart = await getCart(shopper);
    expect(cart.hasProblems).toBe(true);
    expect(cart.lines.find((l) => l.product.id === teaId)!.problem).toMatch(/Only 1 left/);
    await expect(createPendingOrder({ id: shopper, email: "x@example.test" })).rejects.toThrow(/need attention/);
    await prisma.product.update({ where: { id: teaId }, data: { inventory: 3 } });
  });
});

describe("orders", () => {
  let orderId: string;

  it("builds one store order per store, with commission on items only", async () => {
    await setCommissionBps(actor(admin, "admin"), 700);
    const order = await createPendingOrder({ id: shopper, email: "shopper@example.test" });
    orderId = order.id;
    expect(order.status).toBe("PENDING_PAYMENT");
    const ready = order.sellerOrders.find((s) => s.sellerId === readySellerId)!;
    expect(ready).toMatchObject({ itemsCents: 5400, shippingCents: 0, commissionCents: 378, payoutCents: 5400 - 378 });
    expect(order.sellerOrders.find((s) => s.sellerId === otherReadySellerId)).toMatchObject({ shippingCents: 400, commissionCents: 63, payoutCents: 900 - 63 + 400 });
  });

  it("records a payment once: takes stock, empties the cart and keeps each store's tax", async () => {
    const order = await prisma.order.findUniqueOrThrow({ where: { id: orderId }, include: { sellerOrders: true } });
    const readySo = order.sellerOrders.find((s) => s.sellerId === readySellerId)!;
    const details = {
      taxCents: 500,
      totalCents: 5400 + 900 + 400 + 500,
      taxBySellerOrder: new Map([[readySo.id, 420]]),
      paymentIntentId: `pi_${run}`,
      chargeId: `ch_${run}`,
      shippingName: "Test Shopper",
      shippingAddress: { line1: "1 Main St", line2: null, city: "Hudson", state: "NY", postal_code: "12534", country: "US" },
    };
    expect(await recordPayment(orderId, details)).toBe(true);
    expect(await recordPayment(orderId, details)).toBe(false); // a repeated webhook changes nothing

    expect((await prisma.product.findUniqueOrThrow({ where: { id: teaId } })).inventory).toBe(0);
    expect((await prisma.product.findUniqueOrThrow({ where: { id: powderId } })).inventory).toBe(9);
    expect((await getCart(shopper)).isEmpty).toBe(true);
    const paid = await prisma.sellerOrder.findUniqueOrThrow({ where: { id: readySo.id } });
    expect(paid).toMatchObject({ status: "PAID", taxCents: 420, stockShortfall: false });
  });

  it("flags a store order when stock ran out before payment", async () => {
    await prisma.product.update({ where: { id: powderId }, data: { inventory: 1 } });
    await addToCart(otherShopper, powderId, 1);
    const order = await createPendingOrder({ id: otherShopper, email: "o@example.test" });
    await prisma.product.update({ where: { id: powderId }, data: { inventory: 0 } }); // sold elsewhere meanwhile
    await recordPayment(order.id, {
      taxCents: 0,
      totalCents: 1800,
      taxBySellerOrder: new Map(),
      paymentIntentId: `pi2_${run}`,
      chargeId: null,
      shippingName: null,
      shippingAddress: null,
    });
    const so = await prisma.sellerOrder.findFirstOrThrow({ where: { orderId: order.id } });
    expect(so.stockShortfall).toBe(true);
    expect((await prisma.product.findUniqueOrThrow({ where: { id: powderId } })).inventory).toBe(0);
  });

  it("lets only the store that sold it add tracking", async () => {
    const so = await prisma.sellerOrder.findFirstOrThrow({ where: { orderId, sellerId: readySellerId } });
    await expect(markShipped(actor(otherSellerUser), so.id, "USPS", "9400100000000000000000")).rejects.toThrow(/not found/);
    await markShipped(actor(sellerUser), so.id, "USPS", "9400100000000000000000");
    expect(await prisma.sellerOrder.findUniqueOrThrow({ where: { id: so.id } })).toMatchObject({ status: "SHIPPED", carrier: "USPS" });
  });

  it("lets only admins refund or change the commission", async () => {
    const so = await prisma.sellerOrder.findFirstOrThrow({ where: { orderId } });
    await expect(refundSellerOrder(actor(shopper), so.id)).rejects.toThrow(/Only admins/);
    await expect(setCommissionBps(actor(sellerUser), 0)).rejects.toThrow(/Only admins/);
    await expect(setCommissionBps(actor(admin, "admin"), 5000)).rejects.toThrow(/between 0% and 30%/);
  });
});
