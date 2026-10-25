import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";
import { ProductGroup } from "@/generated/prisma/enums";
import { parseMoney, publicProductWhere } from "@/lib/marketplace/products";

// Read-only queries for shoppers. Every query starts from publicProductWhere,
// so drafts, products waiting for review, hidden products and products from
// suspended stores never appear.

const cardInclude = {
  seller: { select: { storeName: true, slug: true, isFoundingSeller: true } },
  images: { orderBy: { position: "asc" }, take: 1 },
  herbs: { orderBy: { isPrimary: "desc" }, include: { herb: { select: { id: true, name: true, imageUrl: true } } } },
} satisfies Prisma.ProductInclude;

type CardRow = Prisma.ProductGetPayload<{ include: typeof cardInclude }>;

export type ProductCardData = {
  slug: string;
  name: string;
  priceCents: number;
  compareAtPriceCents: number | null;
  inStock: boolean;
  storeName: string;
  isFoundingSeller: boolean;
  image: { url: string; alt: string; illustration: boolean } | null;
};

function toCard(p: CardRow): ProductCardData {
  const photo = p.images[0];
  const herb = p.herbs[0]?.herb;
  return {
    slug: p.slug,
    name: p.name,
    priceCents: p.priceCents,
    compareAtPriceCents: p.compareAtPriceCents,
    inStock: p.inventory > 0,
    storeName: p.seller.storeName,
    isFoundingSeller: p.seller.isFoundingSeller,
    image: photo
      ? { url: photo.url, alt: photo.alt, illustration: false }
      : herb?.imageUrl
        ? { url: herb.imageUrl, alt: `Illustration of ${herb.name}`, illustration: true }
        : null,
  };
}

/** Live products linked to a herb: ones where it's the main herb first, then newest. */
export async function herbProducts(herbId: string, take = 6) {
  const where: Prisma.ProductWhereInput = { ...publicProductWhere, herbs: { some: { herbId } } };
  const [rows, total] = await Promise.all([
    prisma.product.findMany({ where, include: cardInclude, orderBy: { createdAt: "desc" }, take: 50 }),
    prisma.product.count({ where }),
  ]);
  const primaryFirst = rows.sort(
    (a, b) =>
      Number(b.herbs.some((h) => h.herbId === herbId && h.isPrimary)) - Number(a.herbs.some((h) => h.herbId === herbId && h.isPrimary)),
  );
  return { products: primaryFirst.slice(0, take).map(toCard), total };
}

// ---------------------------------------------------------------------------
// Shop search
// ---------------------------------------------------------------------------

export const SORTS = {
  match: "Best match",
  newest: "Newest",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
} as const;
export type SortKey = keyof typeof SORTS;

export type ShopQuery = {
  q: string;
  group: ProductGroup | null;
  herbId: string | null;
  minCents: number | null;
  maxCents: number | null;
  inStock: boolean;
  founding: boolean;
  sort: SortKey;
  page: number;
};

export const PAGE_SIZE = 24;

/** Turns URL search params into a validated query; anything invalid is ignored. */
export function parseShopQuery(sp: Record<string, string | string[] | undefined>): ShopQuery {
  const one = (k: string) => {
    const v = sp[k];
    return (Array.isArray(v) ? v[0] : v)?.trim() ?? "";
  };
  const money = (k: string) => {
    const c = parseMoney(one(k));
    return c !== null && Number.isFinite(c) ? c : null;
  };
  const group = one("category") as ProductGroup;
  const sort = one("sort") as SortKey;
  const q = one("q").slice(0, 100);
  const page = Number(one("page"));
  return {
    q,
    group: Object.values(ProductGroup).includes(group) ? group : null,
    herbId: one("herb") || null,
    minCents: money("min"),
    maxCents: money("max"),
    inStock: one("instock") === "1",
    founding: one("founding") === "1",
    sort: sort in SORTS ? sort : q ? "match" : "newest",
    page: Number.isInteger(page) && page > 1 ? Math.min(page, 1000) : 1,
  };
}

function textMatch(q: string): Prisma.ProductWhereInput {
  const c = { contains: q, mode: "insensitive" as const };
  return {
    OR: [
      { name: c },
      { description: c },
      { herbs: { some: { herb: { OR: [{ name: c }, { scientificName: c }, { synonyms: { some: { name: c } } }] } } } },
    ],
  };
}

/** Name matches rank above herb matches, which rank above description-only matches. */
function matchScore(p: CardRow, q: string) {
  const lq = q.toLowerCase();
  if (p.name.toLowerCase().includes(lq)) return 3;
  if (p.herbs.some((h) => h.herb.name.toLowerCase().includes(lq))) return 2;
  return 1;
}

export async function searchProducts(query: ShopQuery) {
  const where: Prisma.ProductWhereInput = {
    AND: [
      publicProductWhere,
      query.q ? textMatch(query.q) : {},
      query.group ? { group: query.group } : {},
      query.herbId ? { herbs: { some: { herbId: query.herbId } } } : {},
      query.minCents !== null ? { priceCents: { gte: query.minCents } } : {},
      query.maxCents !== null ? { priceCents: { lte: query.maxCents } } : {},
      query.inStock ? { inventory: { gt: 0 } } : {},
      query.founding ? { seller: { isFoundingSeller: true } } : {},
    ],
  };
  const skip = (query.page - 1) * PAGE_SIZE;
  const total = await prisma.product.count({ where });

  if (query.sort === "match" && query.q) {
    // Ranking needs every match in memory; the marketplace is small enough, and
    // the cap keeps a broad search from loading everything.
    const rows = await prisma.product.findMany({ where, include: cardInclude, orderBy: { createdAt: "desc" }, take: 500 });
    const ranked = rows.sort((a, b) => matchScore(b, query.q) - matchScore(a, query.q));
    return { products: ranked.slice(skip, skip + PAGE_SIZE).map(toCard), total };
  }

  const orderBy: Prisma.ProductOrderByWithRelationInput =
    query.sort === "price-asc" ? { priceCents: "asc" } : query.sort === "price-desc" ? { priceCents: "desc" } : { createdAt: "desc" };
  const rows = await prisma.product.findMany({ where, include: cardInclude, orderBy, skip, take: PAGE_SIZE });
  return { products: rows.map(toCard), total };
}
