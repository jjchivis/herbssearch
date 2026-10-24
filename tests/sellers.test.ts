import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";
import {
  type Actor,
  type ApplicationInput,
  MarketplaceError,
  approveApplication,
  parseApplication,
  rejectApplication,
  setFoundingSeller,
  setSellerStatus,
  submitApplication,
  updateOwnStoreProfile,
} from "@/lib/marketplace/sellers";

// Runs against the marketplace-dev branch only (see `npm test`). Every record
// is created with a unique run id and removed afterwards.

const run = `t${Date.now()}`;
const emails: string[] = [];

async function makeUser(name: string, role: Actor["role"] = "customer"): Promise<Actor> {
  const email = `${name}-${run}@example.test`;
  emails.push(email);
  const user = await prisma.user.create({ data: { id: `${name}-${run}`, name, email, role } });
  return { id: user.id, role };
}

function application(storeName: string): ApplicationInput {
  return {
    storeName,
    legalBusinessName: `${storeName} LLC`,
    businessType: "COMPANY",
    contactEmail: "shop@example.test",
    phone: null,
    website: "https://example.test",
    country: "US",
    region: "NY",
    description: "We grow and dry organic culinary herbs on a small family farm.",
    plannedGroups: ["DRIED_HERBS_TEAS"],
  };
}

let admin: Actor, alice: Actor, bob: Actor, mallory: Actor;

beforeAll(async () => {
  admin = await makeUser("admin", "admin");
  alice = await makeUser("alice");
  bob = await makeUser("bob");
  mallory = await makeUser("mallory");
});

afterAll(async () => {
  const users = await prisma.user.findMany({ where: { email: { in: emails } }, select: { id: true } });
  const ids = users.map((u) => u.id);
  await prisma.seller.deleteMany({ where: { userId: { in: ids } } });
  await prisma.user.deleteMany({ where: { id: { in: ids } } });
});

describe("application form validation", () => {
  it("rejects an incomplete form and requires the terms", () => {
    const result = parseApplication(new FormData());
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.storeName).toBeDefined();
      expect(result.errors.contactEmail).toBeDefined();
      expect(result.errors.plannedGroups).toBeDefined();
      expect(result.errors.terms).toBeDefined();
    }
  });

  it("rejects unknown product groups and non-http websites", () => {
    const form = new FormData();
    form.set("website", "javascript:alert(1)");
    form.append("plannedGroups", "WEAPONS");
    const result = parseApplication(form);
    expect(!result.ok && result.errors.website).toBeTruthy();
    expect(!result.ok && result.errors.plannedGroups).toBeTruthy();
  });
});

describe("seller applications", () => {
  it("lets a customer apply once while pending", async () => {
    await submitApplication(alice, application(`Alice Herbs ${run}`));
    await expect(submitApplication(alice, application("Again"))).rejects.toThrow(MarketplaceError);
  });

  it("does not let a customer approve or reject applications", async () => {
    const app = await submitApplication(mallory, application(`Mallory ${run}`));
    await expect(approveApplication(mallory, app.id, null)).rejects.toThrow("Only an admin");
    await expect(rejectApplication(mallory, app.id, "no")).rejects.toThrow("Only an admin");
    expect((await prisma.sellerApplication.findUnique({ where: { id: app.id } }))?.status).toBe("PENDING");
  });

  it("lets an admin approve once, creating the store", async () => {
    const app = await prisma.sellerApplication.findFirstOrThrow({ where: { userId: alice.id } });
    const seller = await approveApplication(admin, app.id, "Welcome");
    expect(seller.userId).toBe(alice.id);
    expect(seller.status).toBe("ACTIVE");
    expect(seller.slug).toMatch(/^alice-herbs-/);
    await expect(approveApplication(admin, app.id, null)).rejects.toThrow(MarketplaceError);
    await expect(submitApplication(alice, application("Second store"))).rejects.toThrow("already have a store");
  });

  it("requires a note to reject", async () => {
    const app = await submitApplication(bob, application(`Bob ${run}`));
    await expect(rejectApplication(admin, app.id, "  ")).rejects.toThrow(MarketplaceError);
    await rejectApplication(admin, app.id, "Please add your business license.");
    const saved = await prisma.sellerApplication.findUniqueOrThrow({ where: { id: app.id } });
    expect(saved.status).toBe("REJECTED");
    expect(saved.reviewedById).toBe(admin.id);
  });
});

describe("store permissions", () => {
  it("only admins can suspend sellers or set the Founding Seller badge", async () => {
    const seller = await prisma.seller.findUniqueOrThrow({ where: { userId: alice.id } });
    await expect(setSellerStatus(mallory, seller.id, "SUSPENDED")).rejects.toThrow("Only an admin");
    await expect(setFoundingSeller(alice, seller.id, true)).rejects.toThrow("Only an admin");
    await setFoundingSeller(admin, seller.id, true);
    expect((await prisma.seller.findUniqueOrThrow({ where: { id: seller.id } })).isFoundingSeller).toBe(true);
  });

  it("a user without a store can't edit anyone's store", async () => {
    const before = await prisma.seller.findUniqueOrThrow({ where: { userId: alice.id } });
    await expect(
      updateOwnStoreProfile(mallory, {
        storeName: "Hijacked",
        description: "This should never be saved to anyone's store at all.",
        website: null,
        contactEmail: "evil@example.test",
      }),
    ).rejects.toThrow("don't have a store");
    const after = await prisma.seller.findUniqueOrThrow({ where: { id: before.id } });
    expect(after.storeName).toBe(before.storeName);
  });

  it("a seller edits only their own store, and not while suspended", async () => {
    const profile = {
      storeName: "Alice's Apothecary",
      description: "Small-batch dried herbs and teas from our family farm.",
      website: null,
      contactEmail: "alice@example.test",
    };
    const updated = await updateOwnStoreProfile(alice, profile);
    expect(updated.userId).toBe(alice.id);
    expect(updated.storeName).toBe("Alice's Apothecary");

    await setSellerStatus(admin, updated.id, "SUSPENDED");
    await expect(updateOwnStoreProfile(alice, profile)).rejects.toThrow("suspended");
  });
});
