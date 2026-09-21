import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

// Reference/taxonomy data only — standard category names, not herb-specific
// medical or scientific claims. No herb is linked to any of this yet; that
// requires real per-herb sourcing and is deliberately left for later.

const bodySystems = [
  { name: "Digestive", slug: "digestive", description: "The gut, from stomach to bowel." },
  { name: "Respiratory", slug: "respiratory", description: "Airways, lungs, and breath." },
  { name: "Nervous System", slug: "nervous-system", description: "Mind, mood, and the nervous system." },
  { name: "Cardiovascular", slug: "cardiovascular", description: "Heart and circulation." },
  { name: "Immune", slug: "immune", description: "The body's defenses." },
  { name: "Skin", slug: "skin", description: "Skin, wounds, and topical care." },
  { name: "Musculoskeletal", slug: "musculoskeletal", description: "Muscles, joints, and bone." },
  { name: "Urinary", slug: "urinary", description: "Kidneys and urinary tract." },
  { name: "Reproductive", slug: "reproductive", description: "Reproductive health." },
  { name: "Metabolic", slug: "metabolic", description: "Metabolism and blood sugar." },
  { name: "Liver & Gallbladder", slug: "liver-gallbladder", description: "Liver, bile, and detoxification pathways." },
  { name: "General Wellness", slug: "general-wellness", description: "Everyday vitality and balance." },
];

const symptoms: { name: string; slug: string; bodySystem: string }[] = [
  { name: "Bloating", slug: "bloating", bodySystem: "digestive" },
  { name: "Indigestion", slug: "indigestion", bodySystem: "digestive" },
  { name: "Occasional Sleeplessness", slug: "occasional-sleeplessness", bodySystem: "nervous-system" },
  { name: "Stress", slug: "stress", bodySystem: "nervous-system" },
  { name: "Fatigue", slug: "fatigue", bodySystem: "general-wellness" },
  { name: "Cough", slug: "cough", bodySystem: "respiratory" },
  { name: "Skin Irritation", slug: "skin-irritation", bodySystem: "skin" },
  { name: "Menstrual Discomfort", slug: "menstrual-discomfort", bodySystem: "reproductive" },
  { name: "Joint Discomfort", slug: "joint-discomfort", bodySystem: "musculoskeletal" },
  { name: "Occasional Nausea", slug: "occasional-nausea", bodySystem: "digestive" },
  { name: "Seasonal Immune Support", slug: "seasonal-immune-support", bodySystem: "immune" },
  { name: "Headache", slug: "headache", bodySystem: "nervous-system" },
];

const preparations = [
  { name: "Tea / Infusion", slug: "tea-infusion" },
  { name: "Decoction", slug: "decoction" },
  { name: "Tincture", slug: "tincture" },
  { name: "Glycerite", slug: "glycerite" },
  { name: "Powder", slug: "powder" },
  { name: "Capsule", slug: "capsule" },
  { name: "Extract", slug: "extract" },
  { name: "Oil", slug: "oil" },
  { name: "Essential Oil", slug: "essential-oil" },
  { name: "Salve", slug: "salve" },
  { name: "Poultice", slug: "poultice" },
  { name: "Syrup", slug: "syrup" },
  { name: "Culinary Preparation", slug: "culinary-preparation" },
];

const traditions = [
  { name: "Western Herbalism", slug: "western-herbalism" },
  { name: "Ayurveda", slug: "ayurveda" },
  { name: "Traditional Chinese Medicine", slug: "traditional-chinese-medicine" },
  { name: "Native American Ethnobotany", slug: "native-american-ethnobotany" },
  { name: "Mediterranean Folk Medicine", slug: "mediterranean-folk-medicine" },
  { name: "European Folk Medicine", slug: "european-folk-medicine" },
  { name: "African Traditional Medicine", slug: "african-traditional-medicine" },
];

// A small, deliberately conservative starter list of well-established
// phytochemical constituent names (vocabulary only — not yet linked to any
// herb). Expanding coverage and linking constituents to specific herbs
// belongs to the sourced-content phase, not this taxonomy seed.
const constituents = [
  { name: "Menthol", slug: "menthol", type: "volatile oil" },
  { name: "Curcumin", slug: "curcumin", type: "phenolic compound" },
  { name: "Hypericin", slug: "hypericin", type: "naphthodianthrone" },
  { name: "Valerenic Acid", slug: "valerenic-acid", type: "sesquiterpenoid" },
  { name: "Linalool", slug: "linalool", type: "volatile oil" },
  { name: "Apigenin", slug: "apigenin", type: "flavonoid" },
  { name: "Gingerol", slug: "gingerol", type: "phenolic compound" },
  { name: "Thymol", slug: "thymol", type: "volatile oil" },
  { name: "Rosmarinic Acid", slug: "rosmarinic-acid", type: "phenolic compound" },
  { name: "Alkylamides", slug: "alkylamides", type: "amide" },
];

async function main() {
  for (const bs of bodySystems) {
    await prisma.bodySystem.upsert({
      where: { slug: bs.slug },
      update: bs,
      create: bs,
    });
  }
  console.log(`Seeded ${bodySystems.length} body systems.`);

  for (const s of symptoms) {
    const bodySystem = await prisma.bodySystem.findUnique({ where: { slug: s.bodySystem } });
    await prisma.symptom.upsert({
      where: { slug: s.slug },
      update: { name: s.name, bodySystemId: bodySystem?.id },
      create: { name: s.name, slug: s.slug, bodySystemId: bodySystem?.id },
    });
  }
  console.log(`Seeded ${symptoms.length} symptoms.`);

  for (const p of preparations) {
    await prisma.preparation.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
  console.log(`Seeded ${preparations.length} preparations.`);

  for (const t of traditions) {
    await prisma.traditionSystem.upsert({
      where: { slug: t.slug },
      update: t,
      create: t,
    });
  }
  console.log(`Seeded ${traditions.length} tradition systems.`);

  for (const c of constituents) {
    await prisma.constituent.upsert({
      where: { slug: c.slug },
      update: c,
      create: c,
    });
  }
  console.log(`Seeded ${constituents.length} constituents.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
