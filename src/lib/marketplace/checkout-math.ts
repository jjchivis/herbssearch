import type { ShippingClass } from "@/generated/prisma/enums";

// Money rules for checkout, kept free of database and Stripe calls so they can
// be tested on their own. All amounts are whole cents.
//
// Shipping, per the marketplace rules:
// - Lightweight (standard) items from one store share one flat charge, which
//   is free once that store's items reach its free-shipping amount.
// - Each store charges its own shipping.
// - Oversized, heavy, fragile or costly (calculated) items are priced by weight:
//   the store's base charge plus a rate per pound, rounded up to whole pounds.
// - Shipping goes to the store that ships it. Commission is on items only.

export type CartLine = {
  productId: string;
  sellerId: string;
  unitPriceCents: number;
  quantity: number;
  shippingClass: ShippingClass;
  weightGrams: number | null;
};

export type ShippingRates = {
  shippingFlatCents: number;
  freeShippingOverCents: number | null;
  calculatedBaseCents: number;
  calculatedPerPoundCents: number;
};

const GRAMS_PER_POUND = 453.59237;

export function lineCents(line: Pick<CartLine, "unitPriceCents" | "quantity">) {
  return line.unitPriceCents * line.quantity;
}

export function itemsCents(lines: Pick<CartLine, "unitPriceCents" | "quantity">[]) {
  return lines.reduce((sum, l) => sum + lineCents(l), 0);
}

/** Shipping for one store's lines. */
export function storeShippingCents(lines: CartLine[], rates: ShippingRates) {
  let cents = 0;
  const standard = lines.filter((l) => l.shippingClass === "STANDARD");
  const calculated = lines.filter((l) => l.shippingClass === "CALCULATED");

  if (standard.length > 0) {
    const free = rates.freeShippingOverCents !== null && itemsCents(lines) >= rates.freeShippingOverCents;
    if (!free) cents += rates.shippingFlatCents;
  }
  if (calculated.length > 0) {
    const grams = calculated.reduce((sum, l) => sum + (l.weightGrams ?? 0) * l.quantity, 0);
    const pounds = Math.max(1, Math.ceil(grams / GRAMS_PER_POUND));
    cents += rates.calculatedBaseCents + pounds * rates.calculatedPerPoundCents;
  }
  return cents;
}

export function commissionCents(items: number, commissionBps: number) {
  return Math.round((items * commissionBps) / 10_000);
}

export type StorePlan = {
  sellerId: string;
  lines: CartLine[];
  itemsCents: number;
  shippingCents: number;
  commissionCents: number;
  /** What the store receives: items minus commission, plus all of its shipping. */
  payoutCents: number;
};

/** Splits a cart into one plan per store, in the order stores first appear. */
export function planOrder(lines: CartLine[], ratesBySeller: Map<string, ShippingRates>, commissionBps: number) {
  const bySeller = new Map<string, CartLine[]>();
  for (const line of lines) bySeller.set(line.sellerId, [...(bySeller.get(line.sellerId) ?? []), line]);

  const stores: StorePlan[] = [...bySeller].map(([sellerId, storeLines]) => {
    const rates = ratesBySeller.get(sellerId);
    if (!rates) throw new Error(`No shipping rates for store ${sellerId}`);
    const items = itemsCents(storeLines);
    const shipping = storeShippingCents(storeLines, rates);
    const commission = commissionCents(items, commissionBps);
    return { sellerId, lines: storeLines, itemsCents: items, shippingCents: shipping, commissionCents: commission, payoutCents: items - commission + shipping };
  });

  return {
    stores,
    itemsCents: stores.reduce((s, p) => s + p.itemsCents, 0),
    shippingCents: stores.reduce((s, p) => s + p.shippingCents, 0),
  };
}

/** How much of a store's payout to take back when refunding part of its order. */
export function reversalCents(refundCents: number, store: { itemsCents: number; shippingCents: number; taxCents: number; payoutCents: number }) {
  const paid = store.itemsCents + store.shippingCents + store.taxCents;
  if (paid <= 0) return 0;
  return Math.min(store.payoutCents, Math.round((store.payoutCents * refundCents) / paid));
}

const ORDER_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // no 0/O or 1/I

export function newOrderNumber(random: () => number = Math.random) {
  let s = "";
  for (let i = 0; i < 8; i++) s += ORDER_ALPHABET[Math.floor(random() * ORDER_ALPHABET.length)];
  return `HS-${s}`;
}

const usd = (cents: number) => `$${(cents / 100).toFixed(2)}`;

/** Plain-language shipping summary for a product page. */
export function describeShipping(rates: ShippingRates, shippingClass: ShippingClass) {
  if (shippingClass === "CALCULATED")
    return `Shipping is priced by weight: ${usd(rates.calculatedBaseCents)} plus ${usd(rates.calculatedPerPoundCents)} per pound, added at checkout.`;
  if (rates.shippingFlatCents === 0) return "Free shipping from this store.";
  const free = rates.freeShippingOverCents !== null ? `, free on orders from this store over ${usd(rates.freeShippingOverCents)}` : "";
  return `Shipping is ${usd(rates.shippingFlatCents)} per order from this store, however many items you buy${free}.`;
}
