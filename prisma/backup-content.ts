// Dumps every content table to a JSON file, e.g. before a bulk text rewrite.
// Usage: npx tsx prisma/backup-content.ts backups/content-YYYY-MM-DD.json
import "dotenv/config";
import { writeFileSync } from "fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
async function main() {
  const data = {
    herbs: await prisma.herb.findMany(),
    traditions: await prisma.herbTradition.findMany(),
    evidence: await prisma.evidenceEntry.findMany(),
    safety: await prisma.safetyRecord.findMany(),
    herbSymptoms: await prisma.herbSymptom.findMany(),
    herbPreparations: await prisma.herbPreparation.findMany(),
    herbConstituents: await prisma.herbConstituent.findMany(),
    constituents: await prisma.constituent.findMany(),
    preparations: await prisma.preparation.findMany(),
    actions: await prisma.herbalAction.findMany(),
    traditionSystems: await prisma.traditionSystem.findMany(),
    symptoms: await prisma.symptom.findMany(),
    bodySystems: await prisma.bodySystem.findMany(),
  };
  writeFileSync(process.argv[2], JSON.stringify(data, null, 2));
  for (const [k, v] of Object.entries(data)) console.log(k, (v as unknown[]).length);
  console.log("statuses", data.herbs.map((h) => `${h.name}:${h.contentStatus}`).join(", "));
}
main().finally(() => prisma.$disconnect());
