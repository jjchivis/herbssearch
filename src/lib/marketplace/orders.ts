import type Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { siteUrl, stripe } from "@/lib/stripe";
import { sendEmail, orderConfirmationEmail, sellerNewOrderEmail, orderShippedEmail } from "@/lib/email";
import { type Actor, MarketplaceError } from "@/lib/marketplace/sellers";
import { publicProductWhere } from "@/lib/marketplace/products";
import { type CartLine, type ShippingRates, newOrderNumber, planOrder, reversalCents } from "@/lib/marketplace/checkout-math";

// Cart, checkout and order rules. Payments use Stripe Checkout on the
// platform's account ("separate charges and transfers"): the customer pays
// once, then each store is sent its share once the payment has succeeded.

export const MAX_QUANTITY = 20;
const SHIPPING_TAX_CODE = "txcd_92010001"; // Stripe Tax code for shipping charges

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

export async function getCommissionBps() {
  const settings = await prisma.marketplaceSettings.findUnique({ where: { id: "default" } });
  return settings?.commissionBps ?? 700;
}

export async function setCommissionBps(actor: Actor, bps: number) {
  if (actor.role !== "admin") throw new MarketplaceError("Only admins can change the commission.");
  if (!Number.isInteger(bps) || bps < 0 || bps > 3000) throw new MarketplaceError("Enter a commission between 0% and 30%.");
  return prisma.marketplaceSettings.upsert({
    where: { id: "default" },
    create: { id: "default", commissionBps: bps, updatedById: actor.id },
    update: { commissionBps: bps, updatedById: actor.id },
  });
}

// ---------------------------------------------------------------------------
// Cart
// ---------------------------------------------------------------------------

/** A product can go in a cart only if it's public and its store can be paid. */
// Shopify products are bought through Shopify's checkout, never this cart.
const buyableWhere = {
  ...publicProductWhere,
  shopifyVariantId: null,
  seller: { status: "ACTIVE", stripeTransfersActive: true },
} as const;

export async function addToCart(userId: string, productId: string, quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 1) throw new MarketplaceError("Choose a quantity.");
  const product = await prisma.product.findFirst({ where: { id: productId, ...buyableWhere } });
  if (!product) throw new MarketplaceError("This product can't be bought right now.");
  if (product.inventory < 1) throw new MarketplaceError("This product is out of stock.");

  const existing = await prisma.cartItem.findUnique({ where: { userId_productId: { userId, productId } } });
  const wanted = Math.min((existing?.quantity ?? 0) + quantity, product.inventory, MAX_QUANTITY);
  await prisma.cartItem.upsert({
    where: { userId_productId: { userId, productId } },
    create: { userId, productId, quantity: wanted },
    update: { quantity: wanted },
  });
  return wanted;
}

/** Sets a line's quantity; 0 removes it. Only ever touches the user's own cart. */
export async function setCartQuantity(userId: string, productId: string, quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 0) throw new MarketplaceError("Choose a quantity.");
  if (quantity === 0) {
    await prisma.cartItem.deleteMany({ where: { userId, productId } });
    return;
  }
  await prisma.cartItem.updateMany({ where: { userId, productId }, data: { quantity: Math.min(quantity, MAX_QUANTITY) } });
}

export async function cartCount(userId: string) {
  const r = await prisma.cartItem.aggregate({ where: { userId }, _sum: { quantity: true } });
  return r._sum.quantity ?? 0;
}

function ratesOf(seller: ShippingRates): ShippingRates {
  const { shippingFlatCents, freeShippingOverCents, calculatedBaseCents, calculatedPerPoundCents } = seller;
  return { shippingFlatCents, freeShippingOverCents, calculatedBaseCents, calculatedPerPoundCents };
}

/**
 * The user's cart grouped by store, with shipping and any problem that would
 * stop checkout (removed product, store not taking orders, not enough stock).
 */
export async function getCart(userId: string) {
  const items = await prisma.cartItem.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
    include: {
      product: {
        include: {
          seller: true,
          images: { orderBy: { position: "asc" }, take: 1 },
          herbs: { where: { isPrimary: true }, take: 1, include: { herb: { select: { name: true, imageUrl: true } } } },
        },
      },
    },
  });

  const lines = items.map((item) => {
    const p = item.product;
    let problem: string | null = null;
    if (p.status !== "LIVE" || p.seller.status !== "ACTIVE") problem = "This product is no longer available. Remove it to check out.";
    else if (!p.seller.stripeTransfersActive) problem = "This store isn't taking orders yet. Remove it to check out.";
    else if (p.inventory < 1) problem = "Out of stock. Remove it to check out.";
    else if (p.inventory < item.quantity) problem = `Only ${p.inventory} left. Lower the quantity to check out.`;
    const image = p.images[0]
      ? { url: p.images[0].url, alt: p.images[0].alt, illustration: false }
      : p.herbs[0]?.herb.imageUrl
        ? { url: p.herbs[0].herb.imageUrl, alt: `Illustration of ${p.herbs[0].herb.name}`, illustration: true }
        : null;
    return { item, product: p, image, problem };
  });

  const commissionBps = await getCommissionBps();
  const okLines = lines.filter((l) => !l.problem);
  const cartLines: CartLine[] = okLines.map(({ item, product }) => ({
    productId: product.id,
    sellerId: product.sellerId,
    unitPriceCents: product.priceCents,
    quantity: item.quantity,
    shippingClass: product.shippingClass,
    weightGrams: product.weightGrams,
  }));
  const sellers = new Map(lines.map((l) => [l.product.sellerId, l.product.seller]));
  const plan = planOrder(cartLines, new Map([...sellers].map(([id, s]) => [id, ratesOf(s)])), commissionBps);

  const stores = [...sellers.values()].map((seller) => ({
    seller,
    lines: lines.filter((l) => l.product.sellerId === seller.id),
    plan: plan.stores.find((s) => s.sellerId === seller.id) ?? null,
  }));

  return {
    stores,
    lines,
    itemsCents: plan.itemsCents,
    shippingCents: plan.shippingCents,
    hasProblems: lines.some((l) => l.problem),
    isEmpty: lines.length === 0,
  };
}

// ---------------------------------------------------------------------------
// Checkout
// ---------------------------------------------------------------------------

async function uniqueOrderNumber() {
  for (;;) {
    const number = newOrderNumber();
    if (!(await prisma.order.findUnique({ where: { number } }))) return number;
  }
}

/** Turns the user's cart into a pending order, re-reading prices, stock and shipping. */
export async function createPendingOrder(user: { id: string; email: string }) {
  const cart = await getCart(user.id);
  if (cart.isEmpty) throw new MarketplaceError("Your cart is empty.");
  if (cart.hasProblems) throw new MarketplaceError("Some items in your cart need attention before you can check out.");

  const commissionBps = await getCommissionBps();
  return prisma.order.create({
    data: {
      number: await uniqueOrderNumber(),
      userId: user.id,
      email: user.email,
      itemsCents: cart.itemsCents,
      shippingCents: cart.shippingCents,
      commissionBps,
      sellerOrders: {
        create: cart.stores.map(({ seller, lines, plan }) => ({
          sellerId: seller.id,
          itemsCents: plan!.itemsCents,
          shippingCents: plan!.shippingCents,
          commissionCents: plan!.commissionCents,
          payoutCents: plan!.payoutCents,
          items: {
            create: lines.map(({ item, product }) => ({
              productId: product.id,
              productName: product.name,
              productSlug: product.slug,
              unitPriceCents: product.priceCents,
              quantity: item.quantity,
              shippingClass: product.shippingClass,
              weightGrams: product.weightGrams,
            })),
          },
        })),
      },
    },
    include: { sellerOrders: { include: { seller: true, items: true } } },
  });
}

/**
 * Creates a pending order and a Stripe Checkout page for it, and returns that
 * page's URL. Nothing from the browser is trusted: the order is built from the
 * cart on the server.
 */
export async function startCheckout(user: { id: string; email: string }) {
  const order = await createPendingOrder(user);
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const so of order.sellerOrders) {
    for (const item of so.items)
      lineItems.push({
        quantity: item.quantity,
        metadata: { sellerOrderId: so.id },
        price_data: {
          currency: "usd",
          unit_amount: item.unitPriceCents,
          tax_behavior: "exclusive",
          product_data: { name: item.productName, description: `Sold by ${so.seller.storeName}` },
        },
      });
    if (so.shippingCents > 0)
      lineItems.push({
        quantity: 1,
        metadata: { sellerOrderId: so.id },
        price_data: {
          currency: "usd",
          unit_amount: so.shippingCents,
          tax_behavior: "exclusive",
          product_data: { name: `Shipping from ${so.seller.storeName}`, tax_code: SHIPPING_TAX_CODE },
        },
      });
  }

  try {
    const session = await stripe().checkout.sessions.create(
      {
        mode: "payment",
        line_items: lineItems,
        customer_email: user.email,
        client_reference_id: order.id,
        metadata: { orderId: order.id, orderNumber: order.number },
        payment_intent_data: { transfer_group: order.id, metadata: { orderId: order.id, orderNumber: order.number } },
        automatic_tax: { enabled: true },
        shipping_address_collection: { allowed_countries: ["US"] },
        expires_at: Math.floor(Date.now() / 1000) + 60 * 60, // one hour
        success_url: `${siteUrl()}/orders/${order.number}?placed=1`,
        cancel_url: `${siteUrl()}/cart`,
      },
      { idempotencyKey: `checkout-${order.id}` },
    );
    await prisma.order.update({ where: { id: order.id }, data: { stripeCheckoutId: session.id } });
    if (!session.url) throw new Error("Stripe didn't return a checkout page.");
    return session.url;
  } catch (e) {
    await cancelOrder(order.id);
    throw e;
  }
}

async function cancelOrder(orderId: string) {
  await prisma.$transaction([
    prisma.order.updateMany({ where: { id: orderId, status: "PENDING_PAYMENT" }, data: { status: "CANCELED" } }),
    prisma.sellerOrder.updateMany({ where: { orderId, status: "PENDING_PAYMENT" }, data: { status: "CANCELED" } }),
  ]);
}

/** Checkout expired or the payment failed: the order is dropped, the cart is kept. */
export async function cancelCheckout(sessionId: string) {
  const order = await prisma.order.findUnique({ where: { stripeCheckoutId: sessionId } });
  if (order) await cancelOrder(order.id);
}

// ---------------------------------------------------------------------------
// After payment (called from the Stripe webhook)
// ---------------------------------------------------------------------------

type ShippingAddress = { line1: string | null; line2: string | null; city: string | null; state: string | null; postal_code: string | null; country: string | null };

/**
 * Marks the order paid, takes the stock, empties those items from the cart
 * and sends each store its share. Safe to call more than once for the same
 * session: the order only moves to PAID once, and each transfer has its own
 * idempotency key.
 */
export async function fulfillCheckout(sessionId: string) {
  const session = await stripe().checkout.sessions.retrieve(sessionId, { expand: ["payment_intent"] });
  if (session.payment_status !== "paid") return; // e.g. a bank debit still processing

  const order = await prisma.order.findUnique({ where: { stripeCheckoutId: session.id } });
  // One Stripe test account can serve several copies of the site; ignore
  // sessions that belong to another copy.
  if (!order) return console.warn(`[orders] no order for checkout session ${session.id}`);

  const lineItems = await stripe().checkout.sessions.listLineItems(session.id, { limit: 100 }).autoPagingToArray({ limit: 1000 });
  const taxBySellerOrder = new Map<string, number>();
  for (const li of lineItems) {
    const id = li.metadata?.sellerOrderId;
    if (id) taxBySellerOrder.set(id, (taxBySellerOrder.get(id) ?? 0) + li.amount_tax);
  }

  const pi = session.payment_intent as Stripe.PaymentIntent | null;
  const chargeId = typeof pi?.latest_charge === "string" ? pi.latest_charge : (pi?.latest_charge?.id ?? null);
  const shipping = session.collected_information?.shipping_details ?? null;

  const changed = await recordPayment(order.id, {
    taxCents: session.total_details?.amount_tax ?? 0,
    totalCents: session.amount_total ?? 0,
    taxBySellerOrder,
    paymentIntentId: pi?.id ?? null,
    chargeId,
    shippingName: shipping?.name ?? null,
    shippingAddress: (shipping?.address as ShippingAddress | undefined) ?? null,
  });

  if (chargeId) await sendTransfers(order.id, chargeId);
  if (changed) await sendOrderEmails(order.id);
}

export type PaymentDetails = {
  taxCents: number;
  totalCents: number;
  taxBySellerOrder: Map<string, number>;
  paymentIntentId: string | null;
  chargeId: string | null;
  shippingName: string | null;
  shippingAddress: ShippingAddress | null;
};

/**
 * The database side of a successful payment. Returns false if the order had
 * already been recorded, so a repeated webhook changes nothing.
 */
export async function recordPayment(orderId: string, p: PaymentDetails) {
  const order = await prisma.order.findUniqueOrThrow({ where: { id: orderId }, include: { sellerOrders: { include: { items: true } } } });
  return prisma.$transaction(async (tx) => {
    const moved = await tx.order.updateMany({
      where: { id: order.id, status: "PENDING_PAYMENT" },
      data: {
        status: "PAID",
        paidAt: new Date(),
        taxCents: p.taxCents,
        totalCents: p.totalCents,
        stripePaymentIntentId: p.paymentIntentId,
        stripeChargeId: p.chargeId,
        shippingName: p.shippingName,
        shippingAddress: p.shippingAddress ?? undefined,
      },
    });
    if (moved.count === 0) return false;

    for (const so of order.sellerOrders) {
      let shortfall = false;
      for (const item of so.items) {
        if (!item.productId) continue;
        const taken = await tx.product.updateMany({
          where: { id: item.productId, inventory: { gte: item.quantity } },
          data: { inventory: { decrement: item.quantity } },
        });
        if (taken.count === 0) shortfall = true;
      }
      await tx.sellerOrder.update({
        where: { id: so.id },
        data: { status: "PAID", taxCents: p.taxBySellerOrder.get(so.id) ?? 0, stockShortfall: shortfall },
      });
    }
    const productIds = order.sellerOrders.flatMap((so) => so.items.map((i) => i.productId)).filter((id): id is string => Boolean(id));
    await tx.cartItem.deleteMany({ where: { userId: order.userId, productId: { in: productIds } } });
    return true;
  });
}

/** Sends each paid store its payout, tied to the customer's charge. */
async function sendTransfers(orderId: string, chargeId: string) {
  const sellerOrders = await prisma.sellerOrder.findMany({
    where: { orderId, status: { in: ["PAID", "SHIPPED"] }, stripeTransferId: null, stockShortfall: false },
    include: { seller: true, order: true },
  });
  for (const so of sellerOrders) {
    if (!so.seller.stripeAccountId || so.payoutCents <= 0) continue;
    // source_transaction makes the transfer wait for the charge's funds, so
    // it never draws on the platform's own balance.
    const transfer = await stripe().transfers.create(
      {
        amount: so.payoutCents,
        currency: so.order.currency,
        destination: so.seller.stripeAccountId,
        source_transaction: chargeId,
        transfer_group: orderId,
        description: `Order ${so.order.number}`,
        metadata: { orderId, sellerOrderId: so.id, orderNumber: so.order.number },
      },
      { idempotencyKey: `transfer-${so.id}` },
    );
    await prisma.sellerOrder.update({ where: { id: so.id }, data: { stripeTransferId: transfer.id, transferredAt: new Date() } });
  }
}

async function sendOrderEmails(orderId: string) {
  const order = await prisma.order.findUniqueOrThrow({
    where: { id: orderId },
    include: { sellerOrders: { include: { seller: true, items: true } } },
  });
  const site = siteUrl();
  const jobs = [sendEmail({ to: order.email, ...orderConfirmationEmail(order, site) })];
  for (const so of order.sellerOrders) jobs.push(sendEmail({ to: so.seller.contactEmail, ...sellerNewOrderEmail(order, so, site) }));
  // A failed email shouldn't make Stripe retry the whole payment event.
  for (const r of await Promise.allSettled(jobs)) if (r.status === "rejected") console.error("[orders] email failed", r.reason);
}

// ---------------------------------------------------------------------------
// Customers
// ---------------------------------------------------------------------------

const orderDetail = {
  sellerOrders: {
    orderBy: { createdAt: "asc" },
    include: { seller: { select: { storeName: true, slug: true, contactEmail: true } }, items: true },
  },
} as const;

/** The user's own order by its number; another customer's number isn't found. */
export function customerOrder(userId: string, number: string) {
  return prisma.order.findFirst({ where: { number, userId }, include: orderDetail });
}

export function customerOrders(userId: string) {
  return prisma.order.findMany({
    where: { userId, status: { not: "CANCELED" } },
    orderBy: { createdAt: "desc" },
    include: orderDetail,
  });
}

// ---------------------------------------------------------------------------
// Sellers
// ---------------------------------------------------------------------------

async function ownSeller(actor: Actor) {
  const seller = await prisma.seller.findUnique({ where: { userId: actor.id } });
  if (!seller) throw new MarketplaceError("You don't have a store.");
  return seller;
}

export async function sellerOrders(actor: Actor) {
  const seller = await ownSeller(actor);
  return prisma.sellerOrder.findMany({
    where: { sellerId: seller.id, status: { in: ["PAID", "SHIPPED", "REFUNDED"] } },
    orderBy: { createdAt: "desc" },
    include: { items: true, order: { select: { number: true, shippingName: true, shippingAddress: true, email: true, paidAt: true } } },
  });
}

export async function markShipped(actor: Actor, sellerOrderId: string, carrier: string, trackingNumber: string) {
  const seller = await ownSeller(actor);
  carrier = carrier.trim();
  trackingNumber = trackingNumber.trim();
  if (carrier.length < 2 || carrier.length > 40) throw new MarketplaceError("Enter the carrier, like USPS or UPS.");
  if (trackingNumber.length < 5 || trackingNumber.length > 60) throw new MarketplaceError("Enter the tracking number.");

  const updated = await prisma.sellerOrder.updateMany({
    where: { id: sellerOrderId, sellerId: seller.id, status: { in: ["PAID", "SHIPPED"] } },
    data: { status: "SHIPPED", carrier, trackingNumber, shippedAt: new Date() },
  });
  if (updated.count === 0) throw new MarketplaceError("Order not found.");

  const so = await prisma.sellerOrder.findUniqueOrThrow({ where: { id: sellerOrderId }, include: { order: true, items: true } });
  try {
    await sendEmail({ to: so.order.email, ...orderShippedEmail(so.order, so, seller.storeName, siteUrl()) });
  } catch (e) {
    console.error("[orders] shipped email failed", e);
  }
}

export type ShippingRatesInput = ShippingRates;

export async function updateShippingRates(actor: Actor, rates: ShippingRatesInput) {
  const seller = await ownSeller(actor);
  for (const v of [rates.shippingFlatCents, rates.calculatedBaseCents, rates.calculatedPerPoundCents, rates.freeShippingOverCents ?? 0])
    if (!Number.isInteger(v) || v < 0 || v > 50_000) throw new MarketplaceError("Enter shipping amounts between $0 and $500.");
  return prisma.seller.update({ where: { id: seller.id }, data: ratesOf(rates) });
}

// ---------------------------------------------------------------------------
// Admins
// ---------------------------------------------------------------------------

export function adminOrders(status?: string) {
  return prisma.order.findMany({
    where: status ? { status: status as never } : { status: { not: "CANCELED" } },
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { sellerOrders: { include: { seller: { select: { storeName: true } } } } },
  });
}

export function adminOrder(id: string) {
  return prisma.order.findUnique({ where: { id }, include: { ...orderDetail, user: { select: { email: true, name: true } } } });
}

/**
 * Refunds one store's part of an order in full (its items, shipping and tax).
 * The store's payout is taken back first; if Stripe can't take it back (the
 * store has already been paid out and its balance is too low), nothing is
 * refunded and the admin is told why.
 */
export async function refundSellerOrder(actor: Actor, sellerOrderId: string) {
  if (actor.role !== "admin") throw new MarketplaceError("Only admins can refund orders.");
  const so = await prisma.sellerOrder.findUnique({ where: { id: sellerOrderId }, include: { order: true } });
  if (!so || !["PAID", "SHIPPED"].includes(so.status)) throw new MarketplaceError("Only paid orders can be refunded.");
  if (!so.order.stripeChargeId) throw new MarketplaceError("This order has no Stripe charge to refund.");

  const refundCents = so.itemsCents + so.shippingCents + so.taxCents - so.refundedCents;
  if (refundCents <= 0) throw new MarketplaceError("Nothing left to refund.");

  let reversed = 0;
  if (so.stripeTransferId) {
    reversed = reversalCents(refundCents, so) - so.reversedCents;
    if (reversed > 0) {
      try {
        await stripe().transfers.createReversal(
          so.stripeTransferId,
          { amount: reversed, metadata: { sellerOrderId: so.id } },
          { idempotencyKey: `reversal-${so.id}-${so.reversedCents}` },
        );
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        throw new MarketplaceError(`Stripe couldn't take the payout back from the store, so nothing was refunded: ${msg}`);
      }
    }
  }

  try {
    await stripe().refunds.create(
      { charge: so.order.stripeChargeId, amount: refundCents, metadata: { orderId: so.orderId, sellerOrderId: so.id } },
      { idempotencyKey: `refund-${so.id}-${so.refundedCents}` },
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const note = reversed > 0 ? ` The store's payout of $${(reversed / 100).toFixed(2)} was already taken back; refund the customer in Stripe.` : "";
    throw new MarketplaceError(`Stripe couldn't make the refund: ${msg}.${note}`);
  }

  await prisma.$transaction(async (tx) => {
    await tx.sellerOrder.update({
      where: { id: so.id },
      data: { status: "REFUNDED", refundedCents: { increment: refundCents }, reversedCents: { increment: Math.max(0, reversed) } },
    });
    const all = await tx.sellerOrder.findMany({ where: { orderId: so.orderId } });
    await tx.order.update({
      where: { id: so.orderId },
      data: {
        refundedCents: { increment: refundCents },
        status: all.every((s) => s.status === "REFUNDED") ? "REFUNDED" : "PARTIALLY_REFUNDED",
      },
    });
  });
}
