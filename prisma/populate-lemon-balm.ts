import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Lemon Balm, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, all fetched and checked against the live article before
// being written here.
//
// NCCIH does not currently publish a dedicated "Lemon Balm" page in its
// Herbs at a Glance series (confirmed by checking the live index at
// nccih.nih.gov/health/herbsataglance, which lists ~60 herbs and does not
// include lemon balm or Melissa officinalis), so no NCCIH source is cited
// here. NIH's LactMed entry for Lemon Balm (NCBI Bookshelf NBK501841) could
// not be directly fetched (it is gated behind a bot-check page that returned
// only a reCAPTCHA challenge on every attempt), so nothing from it is
// asserted here either.
//
// Taxonomy (family/genus/species) was cross-checked against a directly
// fetched peer-reviewed review (Miraj et al.) and against Kew POWO / GBIF
// Backbone Taxonomy via search (their live pages returned HTTP 403 to direct
// fetch, matching what earlier scripts in this repo also hit for POWO/GBIF).
// Scientific synonyms below come from the Kew POWO record for Melissa
// officinalis L. (urn:lsid:ipni.org:names:450084-1), consulted via search
// only, so they are recorded as-is without independent corroboration.

async function main() {
  const lemonBalm = await prisma.herb.findUniqueOrThrow({ where: { name: "Lemon Balm" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: lemonBalm.id },
    data: {
      family: "Lamiaceae",
      genus: "Melissa",
      species: "officinalis",
      partsUsed: "The leaves and other above-ground parts",
      nativeRange: "Southern Europe, the Mediterranean region, and Central Asia and Iran; now grows wild around the world",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Faucibarba officinalis (L.) Dulac", type: "SCIENTIFIC_SYNONYM" },
    { name: "Mutelia officinalis (L.) Gren. ex Mutel", type: "SCIENTIFIC_SYNONYM" },
    { name: "Thymus melissa E.H.L.Krause", type: "SCIENTIFIC_SYNONYM" },
    { name: "Bee Balm", type: "COMMON_NAME" },
    { name: "Honey Balm", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: lemonBalm.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: lemonBalm.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  const miraj2016 = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC5871149/",
    {
      title: "Melissa officinalis L: A Review Study With an Antioxidant Prospective",
      author: "Miraj S, Rafieian-Kopaei M, Kiani S",
      organization: "Journal of Evidence-Based Complementary & Alternative Medicine",
      journal: "Journal of Evidence-Based Complementary & Alternative Medicine",
      publicationDate: new Date("2017-07-01"),
      doi: "10.1177/2156587216663433",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5871149/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const mathews2024 = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC11510126/",
    {
      title: "Clinical Efficacy and Tolerability of Lemon Balm (Melissa officinalis L.) in Psychological Well-Being: A Review",
      author: "Mathews IM, Eastwood J, Lamport DJ, Le Cozannet R, Fanca-Berthon P, Williams CM",
      organization: "Nutrients",
      journal: "Nutrients",
      publicationDate: new Date("2024-10-18"),
      doi: "10.3390/nu16203545",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11510126/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  const ahadian2015 = await findOrCreateSource(
    "https://brieflands.com/journals/jjnpp/articles/18429",
    {
      title: "Therapeutic Effect of Melissa Gel and 5% Acyclovir Cream in Recurrent Herpes labialis: A Double-Blind Randomized Clinical Trial",
      author: "Ahadian H, Akhavan Karbassi MH, Ghaneh S, Hakimian R",
      organization: "Jundishapur Journal of Natural Pharmaceutical Products",
      journal: "Jundishapur Journal of Natural Pharmaceutical Products",
      publicationDate: new Date("2015-01-01"),
      doi: "10.17795/jjnpp-26160",
      url: "https://brieflands.com/journals/jjnpp/articles/18429",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  const awlqadr2025 = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC12415070/",
    {
      title: "Bioactive Compounds, Medicinal Benefits, and Contemporary Extraction Methods for Lemon Balm (Melissa officinalis)",
      author: "Awlqadr FH, Altemimi AB, Qadir SA, Mohammed OA, Saeed MN, Hesarinejad MA, Lakhssassi N",
      organization: "Food Science & Nutrition",
      journal: "Food Science & Nutrition",
      publicationDate: new Date("2025-09-07"),
      doi: "10.1002/fsn3.70864",
      pmid: "40927050",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12415070/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents (rosmarinic acid already exists in the taxonomy seed) ---
  const rosmarinicAcid = await prisma.constituent.findUniqueOrThrow({ where: { slug: "rosmarinic-acid" } });
  const citral = await prisma.constituent.upsert({
    where: { slug: "citral" },
    update: {},
    create: { name: "Citral", slug: "citral", type: "monoterpenoid aldehyde" },
  });
  const citronellal = await prisma.constituent.upsert({
    where: { slug: "citronellal" },
    update: {},
    create: { name: "Citronellal", slug: "citronellal", type: "monoterpenoid aldehyde" },
  });

  for (const constituentId of [rosmarinicAcid.id, citral.id, citronellal.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: lemonBalm.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: lemonBalm.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const westernHerbalism = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "western-herbalism" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: lemonBalm.id, traditionId: westernHerbalism.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: lemonBalm.id,
        traditionId: westernHerbalism.id,
        notes:
          "Lemon balm has been written about for about 2,000 years. It appears in the Historia Plantarum (around 300 BC) and in Dioscorides' De Materia Medica (around 50–80 AD). It is still listed in the British Herbal Pharmacopoeia and the European Pharmacopoeia for anxiety, sleep, memory and thinking, viral infections and digestion.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Lemon balm has been written about for about 2,000 years, appearing in the Historia Plantarum (around 300 BC) and in Dioscorides' De Materia Medica (around 50–80 AD). Herbalists have traditionally used it to ease digestive complaints, help people relax and sleep, lift mood, soothe irritated skin and help wounds heal. It is still listed in the British, European and Iranian herbal pharmacopoeias (official herbal reference books).",
      sourceId: mathews2024.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In Iranian folk medicine, lemon balm leaves are used to relieve gas, ease cramps, calm, relieve pain, restore strength and increase urination, including for ongoing digestive problems with no clear physical cause.\n\nTechnical detail: carminative, antispasmodic, sedative, analgesic, tonic, diuretic; functional gastrointestinal disorders.",
      sourceId: miraj2016.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Lab and animal studies suggest lemon balm's calming effect may come from raising levels of GABA, a brain chemical that quiets nerve activity, and from compounds in the oil acting on GABA receptors. Water-based extracts lowered a stress hormone in animals. In lab tests, lemon balm extracts and oil stopped the cold-sore virus (herpes simplex type 1) and flu A virus. Animal safety tests found no harm at high doses, but in the lab the essential oil damaged nerve cells at a certain concentration.\n\nTechnical detail: inhibition of GABA transaminase; trans-ocimene binding to GABA-A receptors; lowered plasma corticosterone; no adverse effects up to 2000 mg/kg; neurotoxic effect in primary cell cultures at 0.1 mg/mL.",
      sourceId: awlqadr2025.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review of trials in people found:\n- Anxiety: lemon balm reduced anxiety in several age groups, including teenagers with PMS (1200 mg a day over three menstrual cycles), young adults (who felt calmer after a single dose) and older adults with heart conditions.\n- Memory and thinking: results were mixed; one study found better attention accuracy with a 600 mg dose.\n- Sleep: sleep improved after 6 weeks of 80 mg a day in middle-aged adults with moderate sleep problems.\n- Mood: depression scores improved with 2000 mg a day for 8 weeks, and with 1500 mg for 10 days in women who had recently given birth.\nDoses up to 5000 mg a day were well tolerated, with no serious side effects in the trials reviewed.",
      sourceId: mathews2024.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a trial of 60 people with repeated cold sores, a 1% lemon balm gel used three times a day for 7 days was compared with 5% acyclovir cream, a standard antiviral treatment. The lemon balm gel relieved pain better on days 2 and 4 and reduced redness more on day 4. But cold sore size and healing time were the same with both. The authors concluded lemon balm gel was not more effective than acyclovir overall, despite better pain relief.\n\nTechnical detail: double-blind randomized trial; herpes labialis; Melissa officinalis gel.",
      sourceId: ahadian2015.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: lemonBalm.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: lemonBalm.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "In healthy adults, no side effects have generally been reported when lemon balm is used on the skin or by mouth at recommended doses for up to 30 days. In the United States, lemon balm is classed as \"Generally Recognized as Safe\" (GRAS), with a maximum level of 0.5% in baked goods.",
      sourceId: miraj2016.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Across the trials reviewed, lemon balm appeared safe and well tolerated, including in more vulnerable groups such as babies and hospital patients. There were no serious side effects at doses up to 5000 mg a day, and very few people stopped because of side effects.",
      sourceId: mathews2024.id,
    },
    {
      category: "PREGNANCY" as const,
      description: "Reported as unsafe to use during pregnancy.",
      sourceId: miraj2016.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Reported as unsafe to use while breastfeeding.",
      sourceId: miraj2016.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "Reported as unsafe to combine with sedatives (medicines that make you sleepy).",
      sourceId: miraj2016.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description: "Reported as unsafe for children and for people with thyroid conditions.",
      sourceId: miraj2016.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Animal studies found no harmful effects at doses up to 2000 mg per kg of body weight. However, in lab tests the essential oil damaged nerve cells at a concentration of 0.1 mg/mL.",
      sourceId: awlqadr2025.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: lemonBalm.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: lemonBalm.id, ...record },
      });
    }
  }

  console.log("Lemon Balm populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
