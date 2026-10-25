import { describe, expect, it } from "vitest";
import { type CartLine, type ShippingRates, commissionCents, newOrderNumber, planOrder, reversalCents, storeShippingCents } from "@/lib/marketplace/checkout-math";

const rates = (r: Partial<ShippingRates> = {}): ShippingRates => ({
  shippingFlatCents: 595,
  freeShippingOverCents: null,
  calculatedBaseCents: 1000,
  calculatedPerPoundCents: 150,
  ...r,
});
const line = (l: Partial<CartLine> = {}): CartLine => ({
  productId: "p",
  sellerId: "s1",
  unitPriceCents: 1000,
  quantity: 1,
  shippingClass: "STANDARD",
  weightGrams: null,
  ...l,
});

describe("shipping", () => {
  it("charges one flat rate for several lightweight items from the same store", () => {
    expect(storeShippingCents([line(), line({ productId: "q", quantity: 3 })], rates())).toBe(595);
  });

  it("makes standard shipping free once the store's items reach the threshold", () => {
    expect(storeShippingCents([line({ unitPriceCents: 2500, quantity: 2 })], rates({ freeShippingOverCents: 5000 }))).toBe(0);
    expect(storeShippingCents([line({ unitPriceCents: 2499, quantity: 2 })], rates({ freeShippingOverCents: 5000 }))).toBe(595);
  });

  it("prices calculated items by weight, rounded up to whole pounds", () => {
    // 2 × 700 g = 1.4 kg ≈ 3.09 lb → 4 lb
    const heavy = line({ shippingClass: "CALCULATED", weightGrams: 700, quantity: 2 });
    expect(storeShippingCents([heavy], rates())).toBe(1000 + 4 * 150);
  });

  it("adds the flat rate and the calculated charge when a store has both kinds", () => {
    const heavy = line({ productId: "h", shippingClass: "CALCULATED", weightGrams: 100 });
    expect(storeShippingCents([line(), heavy], rates())).toBe(595 + 1000 + 150);
  });

  it("doesn't let the free-shipping amount waive calculated shipping", () => {
    const heavy = line({ shippingClass: "CALCULATED", weightGrams: 2000, unitPriceCents: 9000 });
    expect(storeShippingCents([heavy], rates({ freeShippingOverCents: 5000 }))).toBe(1000 + 5 * 150);
  });
});

describe("order plan", () => {
  it("charges shipping separately for each store and takes commission on items only", () => {
    const plan = planOrder(
      [line({ sellerId: "a", unitPriceCents: 2000 }), line({ sellerId: "b", unitPriceCents: 1500 }), line({ sellerId: "a", productId: "x", unitPriceCents: 1000 })],
      new Map([
        ["a", rates()],
        ["b", rates({ shippingFlatCents: 400 })],
      ]),
      700,
    );
    expect(plan.stores.map((s) => s.sellerId)).toEqual(["a", "b"]);
    const [a, b] = plan.stores;
    expect(a).toMatchObject({ itemsCents: 3000, shippingCents: 595, commissionCents: 210, payoutCents: 3000 - 210 + 595 });
    expect(b).toMatchObject({ itemsCents: 1500, shippingCents: 400, commissionCents: 105, payoutCents: 1500 - 105 + 400 });
    expect(plan.itemsCents).toBe(4500);
    expect(plan.shippingCents).toBe(995);
  });

  it("rounds commission to the nearest cent", () => {
    expect(commissionCents(1999, 700)).toBe(140); // 139.93
    expect(commissionCents(1000, 0)).toBe(0);
  });
});

describe("refunds", () => {
  const store = { itemsCents: 3000, shippingCents: 595, taxCents: 240, payoutCents: 3385 };
  it("takes back the whole payout on a full refund", () => {
    expect(reversalCents(3000 + 595 + 240, store)).toBe(3385);
  });
  it("takes back a matching share on a partial refund", () => {
    expect(reversalCents(1917, store)).toBe(Math.round((3385 * 1917) / 3835));
  });
});

it("makes readable order numbers", () => {
  expect(newOrderNumber()).toMatch(/^HS-[2-9A-HJ-NP-Z]{8}$/);
});
