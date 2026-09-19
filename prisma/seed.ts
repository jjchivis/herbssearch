import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

const herbs = [
  {
    name: "Basil",
    scientificName: "Ocimum basilicum",
    category: "Culinary",
    summary: "A fragrant, warm-weather herb central to Italian and Southeast Asian cooking.",
    uses: "Pesto, tomato dishes, teas, aromatherapy",
    properties: "Anti-inflammatory, antioxidant, antibacterial",
    cautions: "Generally safe in culinary amounts.",
    imageUrl: null,
  },
  {
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    category: "Medicinal",
    summary: "A daisy-like flower long used to promote relaxation and digestive comfort.",
    uses: "Sleep aid, calming tea, skin soothing",
    properties: "Mild sedative, anti-inflammatory, antispasmodic",
    cautions: "May cause allergic reaction in people sensitive to ragweed.",
    imageUrl: null,
  },
  {
    name: "Peppermint",
    scientificName: "Mentha piperita",
    category: "Medicinal",
    summary: "A cooling, menthol-rich herb used for digestion and headache relief.",
    uses: "Digestive tea, headache relief, aromatherapy",
    properties: "Antispasmodic, analgesic, carminative",
    cautions: "Can worsen acid reflux in some people.",
    imageUrl: null,
  },
  {
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    category: "Culinary",
    summary: "A woody, pine-scented herb popular in roasted dishes and hair care.",
    uses: "Roasted meats and vegetables, hair rinses, memory support",
    properties: "Antioxidant, antimicrobial, circulatory stimulant",
    cautions: "High doses may stimulate uterine contractions; avoid in pregnancy.",
    imageUrl: null,
  },
  {
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    category: "Aromatic",
    summary: "A calming purple-flowered herb prized for its scent and relaxing effects.",
    uses: "Aromatherapy, sleep support, skin care",
    properties: "Anxiolytic, sedative, antiseptic",
    cautions: "Essential oil should not be ingested undiluted.",
    imageUrl: null,
  },
  {
    name: "Ginger",
    scientificName: "Zingiber officinale",
    category: "Medicinal",
    summary: "A spicy, warming rhizome widely used to ease nausea and inflammation.",
    uses: "Nausea relief, teas, cooking, anti-inflammatory support",
    properties: "Anti-emetic, anti-inflammatory, digestive stimulant",
    cautions: "May interact with blood-thinning medication at high doses.",
    imageUrl: null,
  },
  {
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    category: "Medicinal",
    summary: "A purple coneflower traditionally used to support immune function.",
    uses: "Cold and flu support, tinctures, teas",
    properties: "Immunostimulant, anti-inflammatory",
    cautions: "Not recommended for autoimmune conditions without medical advice.",
    imageUrl: null,
  },
  {
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    category: "Culinary",
    summary: "A small-leaved, earthy herb used widely in savory cooking and remedies for coughs.",
    uses: "Soups and stews, cough remedies, antiseptic gargle",
    properties: "Antimicrobial, expectorant, antispasmodic",
    cautions: "Essential oil is potent; use diluted.",
    imageUrl: null,
  },
  {
    name: "Sage",
    scientificName: "Salvia officinalis",
    category: "Culinary",
    summary: "A silvery-leaved herb with a savory, slightly peppery flavor.",
    uses: "Stuffing and sausages, sore throat gargle, memory support",
    properties: "Antioxidant, antimicrobial, astringent",
    cautions: "Avoid large medicinal doses during pregnancy.",
    imageUrl: null,
  },
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    category: "Medicinal",
    summary: "A golden rhizome known for its active compound curcumin and anti-inflammatory reputation.",
    uses: "Curries, golden milk, joint support",
    properties: "Anti-inflammatory, antioxidant",
    cautions: "May interact with blood thinners; can upset stomach in high doses.",
    imageUrl: null,
  },
  {
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    category: "Medicinal",
    summary: "A citrus-scented mint relative used to ease stress and support sleep.",
    uses: "Calming tea, stress relief, cold sore topical use",
    properties: "Mild sedative, antiviral, carminative",
    cautions: "May interact with thyroid medication.",
    imageUrl: null,
  },
  {
    name: "Dill",
    scientificName: "Anethum graveolens",
    category: "Culinary",
    summary: "A feathery, tangy herb often paired with fish and pickles.",
    uses: "Pickling, fish dishes, digestive tea",
    properties: "Carminative, mild antispasmodic",
    cautions: "Generally safe in culinary amounts.",
    imageUrl: null,
  },
  {
    name: "Valerian",
    scientificName: "Valeriana officinalis",
    category: "Medicinal",
    summary: "A root traditionally used as a natural sleep aid.",
    uses: "Sleep support, anxiety relief",
    properties: "Sedative, anxiolytic",
    cautions: "Can cause drowsiness; avoid combining with alcohol or sedatives.",
    imageUrl: null,
  },
  {
    name: "Oregano",
    scientificName: "Origanum vulgare",
    category: "Culinary",
    summary: "A pungent Mediterranean herb central to pizza and pasta sauces.",
    uses: "Italian and Greek cooking, antimicrobial oil",
    properties: "Antimicrobial, antioxidant",
    cautions: "Oil form is potent and should be diluted.",
    imageUrl: null,
  },
  {
    name: "Nettle",
    scientificName: "Urtica dioica",
    category: "Medicinal",
    summary: "A mineral-rich plant with a history of use for allergies and joint health.",
    uses: "Allergy relief tea, nutritive infusions",
    properties: "Anti-inflammatory, diuretic, nutritive",
    cautions: "Fresh plant causes skin irritation on contact; cook or dry before use.",
    imageUrl: null,
  },
  {
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    category: "Culinary",
    summary: "A bright, citrusy herb (coriander leaf) common in Latin American and Asian cuisine.",
    uses: "Salsas, curries, garnish",
    properties: "Antioxidant, mild digestive aid",
    cautions: "Some people perceive a soapy taste due to genetics.",
    imageUrl: null,
  },
  {
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    category: "Medicinal",
    summary: "A yellow-flowered herb traditionally used to support mood.",
    uses: "Mood support, topical wound salves",
    properties: "Antidepressant-like, anti-inflammatory",
    cautions: "Interacts with many medications, including antidepressants and contraceptives.",
    imageUrl: null,
  },
  {
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    category: "Culinary",
    summary: "An anise-flavored plant whose seeds and bulb are both widely used.",
    uses: "Digestive tea, salads, roasted bulb dishes",
    properties: "Carminative, mild estrogenic, antispasmodic",
    cautions: "Avoid concentrated forms during pregnancy.",
    imageUrl: null,
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    category: "Medicinal",
    summary: "An adaptogenic root used in Ayurvedic tradition to support stress resilience.",
    uses: "Stress adaptogen, sleep support, energy balance",
    properties: "Adaptogenic, anxiolytic, anti-inflammatory",
    cautions: "Avoid in pregnancy and with certain thyroid or autoimmune conditions.",
    imageUrl: null,
  },
  {
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    category: "Culinary",
    summary: "A versatile, mild herb used as both a garnish and a flavor base.",
    uses: "Garnish, tabbouleh, stocks and sauces",
    properties: "Diuretic, rich in vitamin K and C",
    cautions: "Medicinal doses (not culinary) should be avoided during pregnancy.",
    imageUrl: null,
  },
];

async function main() {
  for (const herb of herbs) {
    await prisma.herb.upsert({
      where: { name: herb.name },
      update: herb,
      create: herb,
    });
  }
  console.log(`Seeded ${herbs.length} herbs.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
