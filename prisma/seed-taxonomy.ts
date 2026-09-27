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
  { name: "Liver & Gallbladder", slug: "liver-gallbladder", description: "Liver, gallbladder and bile." },
  { name: "General Wellness", slug: "general-wellness", description: "General health and wellbeing." },
];

// Descriptions are shown to visitors. For symptoms that can signal something
// serious, say when to get medical care (docs/CONTENT_STYLE.md, "Symptom search").
const symptoms: { name: string; slug: string; bodySystem: string; description?: string }[] = [
  { name: "Bloating", slug: "bloating", bodySystem: "digestive" },
  { name: "Indigestion", slug: "indigestion", bodySystem: "digestive" },
  { name: "Occasional Sleeplessness", slug: "occasional-sleeplessness", bodySystem: "nervous-system" },
  { name: "Stress", slug: "stress", bodySystem: "nervous-system" },
  { name: "Fatigue", slug: "fatigue", bodySystem: "general-wellness" },
  { name: "Cough", slug: "cough", bodySystem: "respiratory" },
  { name: "Skin Irritation", slug: "skin-irritation", bodySystem: "skin" },
  {
    name: "Menstrual Discomfort",
    slug: "menstrual-discomfort",
    bodySystem: "reproductive",
    description:
      "Period pain, cramps and related discomfort. See a doctor for severe pain, very heavy bleeding, bleeding between periods, or any bleeding after menopause.",
  },
  { name: "Joint Discomfort", slug: "joint-discomfort", bodySystem: "musculoskeletal" },
  { name: "Occasional Nausea", slug: "occasional-nausea", bodySystem: "digestive" },
  { name: "Seasonal Immune Support", slug: "seasonal-immune-support", bodySystem: "immune" },
  { name: "Headache", slug: "headache", bodySystem: "nervous-system" },
  {
    name: "High Blood Pressure",
    slug: "high-blood-pressure",
    bodySystem: "cardiovascular",
    description:
      "Blood pressure that stays higher than normal. It often causes no symptoms but raises the risk of heart attack and stroke, so it needs diagnosis and regular checks by a health professional. Don't stop or replace prescribed blood pressure medicine with herbs.",
  },
  {
    name: "High Cholesterol",
    slug: "high-cholesterol",
    bodySystem: "cardiovascular",
    description:
      "Higher-than-healthy levels of fats such as LDL (\"bad\") cholesterol in the blood, which can build up in the arteries. It's found with a blood test; talk to a health professional about how to manage it.",
  },
  {
    name: "Poor Circulation",
    slug: "poor-circulation",
    bodySystem: "cardiovascular",
    description:
      "Cold hands and feet, or heavy, tired legs, that can come with minor circulation problems. Leg pain when walking, sudden swelling, or changes in skin color need medical attention.",
  },
  {
    name: "Heart Palpitations",
    slug: "heart-palpitations",
    bodySystem: "cardiovascular",
    description:
      "A heartbeat you can notice, which may feel fast, fluttering or pounding. It's often harmless, for example with stress, but get medical help right away if it comes with chest pain, fainting or shortness of breath.",
  },
  {
    name: "Heart Failure",
    slug: "heart-failure",
    bodySystem: "cardiovascular",
    description:
      "A long-term condition in which the heart doesn't pump as well as it should. It must be treated by a doctor. Herbs studied for it have only been tested alongside standard treatment.",
  },
  {
    name: "PMS (Premenstrual Syndrome)",
    slug: "premenstrual-syndrome",
    bodySystem: "reproductive",
    description:
      "Physical and emotional symptoms, such as breast tenderness, bloating, irritability and mood changes, in the days before a period. See a doctor if symptoms are severe or get in the way of daily life.",
  },
  {
    name: "Menopause Symptoms",
    slug: "menopause-symptoms",
    bodySystem: "reproductive",
    description:
      "Hot flashes, night sweats and other changes around menopause. Talk to a health professional about your options, especially if you've had a hormone-sensitive cancer. Any bleeding after menopause needs medical attention.",
  },
  {
    name: "Fertility",
    slug: "fertility",
    bodySystem: "reproductive",
    description:
      "Trying to conceive, or concerns about fertility in men or women. Fertility problems have many possible causes and need a medical assessment. Herbs are not a reliable way to prevent pregnancy, and some can harm a pregnancy.",
  },
  {
    name: "Sexual Health",
    slug: "sexual-health",
    bodySystem: "reproductive",
    description:
      "Low sex drive or problems with sexual function in men or women. These can have medical causes, including medicines, that are worth checking with a health professional.",
  },
  {
    name: "Breast Milk Supply",
    slug: "breast-milk-supply",
    bodySystem: "reproductive",
    description:
      "Concerns about making enough breast milk. A lactation consultant or health professional can first check things like feeding frequency and the baby's latch, which often make the biggest difference.",
  },
  {
    name: "Pregnancy and Childbirth",
    slug: "pregnancy-and-childbirth",
    bodySystem: "reproductive",
    description:
      "Many herbs aren't safe in pregnancy. Herbs are listed here either because they're traditionally used in pregnancy or because they carry specific pregnancy warnings. Always check with your midwife or doctor before using any herb while pregnant.",
  },
  {
    name: "High Blood Sugar",
    slug: "high-blood-sugar",
    bodySystem: "metabolic",
    description:
      "Blood sugar (glucose) above the healthy range, as in diabetes or prediabetes. It needs diagnosis and monitoring by a health professional. Some herbs may add to the effects of diabetes medicines.",
  },
];

// Descriptions double as the plain-language definitions shown to visitors.
const preparations = [
  { name: "Tea / Infusion", slug: "tea-infusion", description: "Made by pouring hot water over plant material and letting it steep." },
  { name: "Decoction", slug: "decoction", description: "Made by simmering tougher plant parts, such as roots, bark or seeds, in water." },
  { name: "Tincture", slug: "tincture", description: "A concentrated liquid made by soaking plant material in alcohol, glycerin or another liquid." },
  { name: "Glycerite", slug: "glycerite", description: "A tincture made with glycerin instead of alcohol." },
  { name: "Powder", slug: "powder", description: "Dried plant material ground into a fine powder." },
  { name: "Capsule", slug: "capsule", description: "Powdered herb or extract sealed in a capsule to swallow." },
  { name: "Extract", slug: "extract", description: "A concentrated preparation made by drawing a plant's compounds out with a liquid such as water or alcohol." },
  { name: "Oil", slug: "oil", description: "Plant material soaked in a carrier oil, such as olive oil. This is different from an essential oil." },
  { name: "Essential Oil", slug: "essential-oil", description: "A concentrated oil containing the aromatic compounds from a plant." },
  { name: "Salve", slug: "salve", description: "A thick ointment for the skin, made from herb-infused oil and wax." },
  { name: "Poultice", slug: "poultice", description: "Mashed or moistened plant material placed directly on the skin." },
  { name: "Syrup", slug: "syrup", description: "An herbal preparation mixed with sugar or honey." },
  { name: "Culinary Preparation", slug: "culinary-preparation", description: "Used as food or seasoning in cooking." },
];

const traditions = [
  { name: "Western Herbalism", slug: "western-herbalism" },
  { name: "Ayurveda", slug: "ayurveda" },
  { name: "Traditional Chinese Medicine", slug: "traditional-chinese-medicine" },
  { name: "Native American Ethnobotany", slug: "native-american-ethnobotany" },
  { name: "Mediterranean Folk Medicine", slug: "mediterranean-folk-medicine" },
  { name: "European Folk Medicine", slug: "european-folk-medicine" },
  { name: "African Traditional Medicine", slug: "african-traditional-medicine" },
  { name: "Caribbean Folk Medicine", slug: "caribbean-folk-medicine" },
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
      update: { name: s.name, description: s.description, bodySystemId: bodySystem?.id },
      create: { name: s.name, slug: s.slug, description: s.description, bodySystemId: bodySystem?.id },
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
