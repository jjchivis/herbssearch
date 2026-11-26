import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

// Herb pages live at /herbs/<name>, e.g. /herbs/basil or /herbs/st-johns-wort.
// The address is worked out from the herb's name, so every herb gets one
// automatically. Older /herbs/<database id> links forward permanently to it.
export function herbSlug(name: string) {
  return name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // drop accents: "Açaí" -> "Acai"
    .toLowerCase()
    .replace(/['’]/g, "") // "St. John's Wort" -> "st-johns-wort", not "st-john-s-wort"
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function herbPath(herb: { name: string }) {
  return `/herbs/${herbSlug(herb.name)}`;
}

// Renaming a herb changes its address. Add the old address here
// ("old-slug": "new-slug") so links and search results that use it still work.
export const RENAMED_HERB_SLUGS: Record<string, string> = {};

// Address <-> database id for every herb, looked up once per deployment and
// refreshed daily, so resolving an address (or rejecting a made-up one) costs
// no database query per visit.
export const getHerbSlugIndex = unstable_cache(
  async () => {
    const herbs = await prisma.herb.findMany({
      select: { id: true, name: true },
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    });
    const idBySlug: Record<string, string> = {};
    const slugById: Record<string, string> = {};
    for (const herb of herbs) {
      const slug = herbSlug(herb.name);
      // Two herbs with the same address are caught by the sitemap build check;
      // until one is renamed, the older herb keeps the address.
      if (!slug || idBySlug[slug]) continue;
      idBySlug[slug] = herb.id;
      slugById[herb.id] = slug;
    }
    return { idBySlug, slugById };
  },
  ["herb-slug-index", process.env.VERCEL_DEPLOYMENT_ID ?? "local"],
  { revalidate: 86400 },
);

// Throws during the build if two herbs would share an address, so the problem
// is fixed (by renaming one) before it can send visitors to the wrong herb.
export function assertUniqueHerbSlugs(herbs: { id: string; name: string }[]) {
  const seen = new Map<string, string>();
  for (const herb of herbs) {
    const slug = herbSlug(herb.name);
    if (!slug) throw new Error(`Herb ${herb.id} ("${herb.name}") has no usable address; give it a name with letters or numbers.`);
    const other = seen.get(slug);
    if (other) {
      throw new Error(
        `Two herbs would share the address /herbs/${slug}: "${other}" and "${herb.name}". Rename one of them.`,
      );
    }
    seen.set(slug, herb.name);
  }
}
