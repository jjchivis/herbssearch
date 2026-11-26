import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { publishedVideos } from "@/content/herbal-kitchen/videos";
import { absoluteUrl } from "@/lib/site-url";
import { assertUniqueHerbSlugs, herbPath } from "@/lib/herb-slugs";

// Served at /sitemap.xml so search engines can find every herb and topic page.
// Built during each deployment and refreshed at most once a day, so it costs
// almost no database time.
export const revalidate = 86400;

const SECTION_PAGES = [
  "/herbs",
  "/topics",
  "/traditions",
  "/compounds",
  "/preparations",
  "/sources",
  "/glossary",
  "/herbal-kitchen",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Topic, tradition, compound and preparation pages are listed only when at
  // least one herb is linked, so empty pages aren't offered to search engines.
  const withHerbs = { herbs: { some: {} } };
  const [herbs, topics, traditions, compounds, preparations] = await Promise.all([
    prisma.herb.findMany({ select: { id: true, name: true, updatedAt: true }, orderBy: { name: "asc" } }),
    prisma.symptom.findMany({ where: withHerbs, select: { slug: true }, orderBy: { name: "asc" } }),
    prisma.traditionSystem.findMany({ where: withHerbs, select: { slug: true }, orderBy: { name: "asc" } }),
    prisma.constituent.findMany({ where: withHerbs, select: { slug: true }, orderBy: { name: "asc" } }),
    prisma.preparation.findMany({ where: withHerbs, select: { slug: true }, orderBy: { name: "asc" } }),
  ]);

  assertUniqueHerbSlugs(herbs);

  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...SECTION_PAGES.map((path) => ({ url: absoluteUrl(path), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...herbs.map((h) => ({ url: absoluteUrl(herbPath(h)), lastModified: h.updatedAt, priority: 0.7 })),
    ...topics.map((t) => ({ url: absoluteUrl(`/topics/${t.slug}`), priority: 0.6 })),
    ...traditions.map((t) => ({ url: absoluteUrl(`/traditions/${t.slug}`), priority: 0.5 })),
    ...compounds.map((c) => ({ url: absoluteUrl(`/compounds/${c.slug}`), priority: 0.5 })),
    ...preparations.map((p) => ({ url: absoluteUrl(`/preparations/${p.slug}`), priority: 0.5 })),
    ...publishedVideos().map((v) => ({
      url: absoluteUrl(`/herbal-kitchen/${v.slug}`),
      lastModified: v.publishedAt,
      priority: 0.6,
    })),
  ];
}
