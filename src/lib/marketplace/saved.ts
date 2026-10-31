import { prisma } from "@/lib/prisma";
import { MarketplaceError } from "@/lib/marketplace/sellers";
import { publicProductWhere } from "@/lib/marketplace/products";

// Herbs and products a signed-in user has saved. Every function takes the
// user's id from the session, so a user only ever sees or changes their own list.

export type SaveTarget = { herbId: string } | { productId: string };

function where(userId: string, target: SaveTarget) {
  return "herbId" in target
    ? { userId_herbId: { userId, herbId: target.herbId } }
    : { userId_productId: { userId, productId: target.productId } };
}

export async function isSaved(userId: string, target: SaveTarget) {
  return Boolean(await prisma.savedItem.findUnique({ where: where(userId, target) }));
}

/** Saves the herb or product, or removes it if it's already saved. Returns the new state. */
export async function toggleSaved(userId: string, target: SaveTarget): Promise<boolean> {
  const existing = await prisma.savedItem.findUnique({ where: where(userId, target) });
  if (existing) {
    await prisma.savedItem.delete({ where: { id: existing.id } });
    return false;
  }
  if ("herbId" in target) {
    if (!(await prisma.herb.findUnique({ where: { id: target.herbId } }))) throw new MarketplaceError("That herb wasn't found.");
  } else {
    // Only products shoppers can see can be saved.
    const product = await prisma.product.findFirst({ where: { id: target.productId, ...publicProductWhere } });
    if (!product) throw new MarketplaceError("That product isn't available.");
  }
  await prisma.savedItem.create({ data: { userId, ...target } });
  return true;
}

/** The user's saved herbs and products, newest first. Products that are no longer live are left out. */
export async function savedItems(userId: string) {
  const items = await prisma.savedItem.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      herb: { select: { id: true, name: true, scientificName: true, imageUrl: true } },
      product: {
        select: {
          id: true,
          slug: true,
          name: true,
          priceCents: true,
          status: true,
          seller: { select: { storeName: true, status: true } },
        },
      },
    },
  });
  return {
    herbs: items.flatMap((i) => (i.herb ? [i.herb] : [])),
    products: items.flatMap((i) =>
      i.product && i.product.status === "LIVE" && i.product.seller.status === "ACTIVE" ? [i.product] : [],
    ),
  };
}
