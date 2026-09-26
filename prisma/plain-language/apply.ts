import "dotenv/config";
import { readFileSync } from "fs";
import { join } from "path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client";

// One-time migration of existing database text to the plain-language rewrite
// (see docs/CONTENT_STYLE.md). The seed and populate scripts already contain the
// new wording, so a freshly seeded database doesn't need this. For an existing
// database, every row whose text still matches the old wording is replaced;
// rows already updated are skipped, so re-running is safe.
//
//   npx tsx prisma/plain-language/apply.ts --dry-run
//   npx tsx prisma/plain-language/apply.ts

type Rewrite =
  | { herb: string; field?: "summary" | "uses" | "properties" | "cautions"; old: string; new: string }
  | { table: "preparation" | "bodySystem"; slug: string; field: "description"; old?: string; new: string };

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const dryRun = process.argv.includes("--dry-run");
const rewrites: Rewrite[] = JSON.parse(readFileSync(join(__dirname, "rewrites.json"), "utf8"));

async function main() {
  const herbs = new Map((await prisma.herb.findMany()).map((h) => [h.name, h]));
  const counts: Record<string, number> = {};
  const unmatched: string[] = [];
  const bump = (k: string, n: number) => (counts[k] = (counts[k] ?? 0) + n);

  for (const r of rewrites) {
    if ("table" in r) {
      // Match the old text if given, otherwise any value (including empty) that isn't the new text yet.
      const where = r.old
        ? { slug: r.slug, description: r.old }
        : { slug: r.slug, OR: [{ description: null }, { description: { not: r.new } }] };
      const n =
        r.table === "preparation"
          ? await prisma.preparation.count({ where })
          : await prisma.bodySystem.count({ where });
      if (n && !dryRun) {
        if (r.table === "preparation") await prisma.preparation.updateMany({ where, data: { description: r.new } });
        else await prisma.bodySystem.updateMany({ where, data: { description: r.new } });
      }
      bump(r.table, n);
      continue;
    }

    const herb = herbs.get(r.herb);
    if (!herb) {
      unmatched.push(`[no herb "${r.herb}"] ${r.old.slice(0, 60)}`);
      continue;
    }

    if (r.field) {
      if (herb[r.field] === r.old) {
        if (!dryRun) await prisma.herb.update({ where: { id: herb.id }, data: { [r.field]: r.new } });
        bump(`herb.${r.field}`, 1);
      } else if (herb[r.field] !== r.new) {
        unmatched.push(`[${r.herb}.${r.field}] ${r.old.slice(0, 60)}`);
      }
      continue;
    }

    // Free-text rows: the old wording could live in any of these places.
    const herbId = herb.id;
    const { old, new: text } = r;
    const targets: [string, () => Promise<number>, () => Promise<{ count: number }>][] = [
      ["evidence",
        () => prisma.evidenceEntry.count({ where: { herbId, summary: old } }),
        () => prisma.evidenceEntry.updateMany({ where: { herbId, summary: old }, data: { summary: text } })],
      ["safety",
        () => prisma.safetyRecord.count({ where: { herbId, description: old } }),
        () => prisma.safetyRecord.updateMany({ where: { herbId, description: old }, data: { description: text } })],
      ["tradition notes",
        () => prisma.herbTradition.count({ where: { herbId, notes: old } }),
        () => prisma.herbTradition.updateMany({ where: { herbId, notes: old }, data: { notes: text } })],
      ["constituent notes",
        () => prisma.herbConstituent.count({ where: { herbId, notes: old } }),
        () => prisma.herbConstituent.updateMany({ where: { herbId, notes: old }, data: { notes: text } })],
      ["constituent descriptions",
        () => prisma.constituent.count({ where: { description: old } }),
        () => prisma.constituent.updateMany({ where: { description: old }, data: { description: text } })],
    ];
    let matched = 0;
    for (const [label, count, update] of targets) {
      const n = dryRun ? await count() : (await update()).count;
      if (n) bump(label, n);
      matched += n;
    }
    for (const field of ["nativeRange", "partsUsed", "habitat"] as const) {
      if (herb[field] === r.old) {
        if (!dryRun) await prisma.herb.update({ where: { id: herbId }, data: { [field]: r.new } });
        bump(`herb.${field}`, 1);
        matched++;
      }
    }
    if (!matched) {
      const alreadyDone =
        (await prisma.evidenceEntry.count({ where: { herbId, summary: r.new } })) +
        (await prisma.safetyRecord.count({ where: { herbId, description: r.new } })) +
        (await prisma.herbTradition.count({ where: { herbId, notes: r.new } })) +
        (await prisma.herbConstituent.count({ where: { herbId, notes: r.new } })) +
        (await prisma.constituent.count({ where: { description: r.new } })) +
        (["nativeRange", "partsUsed", "habitat"] as const).filter((f) => herb[f] === r.new).length;
      if (!alreadyDone) unmatched.push(`[${r.herb}] ${r.old.slice(0, 60)}`);
    }
  }

  console.log(dryRun ? "Dry run — rows that would change:" : "Rows updated:");
  for (const [k, n] of Object.entries(counts)) console.log(`  ${k}: ${n}`);
  if (unmatched.length) {
    // Usually a row that's in a populate script but was never loaded into this
    // database; running that populate script adds it with the new wording.
    console.log(`\n${unmatched.length} rewrite(s) matched no row in this database:`);
    for (const u of unmatched) console.log("  " + u);
  }
}

main().finally(() => prisma.$disconnect());
