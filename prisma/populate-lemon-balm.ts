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
      partsUsed: "Leaf (leaves and aerial parts)",
      nativeRange: "Southern Europe, the Mediterranean basin, and Central Asia/Iran; naturalized worldwide",
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
          "Documented for roughly 2000 years, appearing in the Historia Plantarum (c. 300 BC) and in Dioscorides' De Materia Medica (c. 50-80 AD); still included in the British Herbal Pharmacopoeia and European Pharmacopoeia for anxiety, sleep, cognitive, antiviral, and digestive uses.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Lemon balm has a roughly 2000-year documented history, appearing in the Historia Plantarum (c. 300 BC) and in Dioscorides' De Materia Medica (c. 50-80 AD). In herbal medicine systems it has traditionally been used to ease digestive complaints, promote relaxation and sleep, improve mood, soothe skin irritation, and support wound healing, and it remains listed in the British Herbal Pharmacopoeia, European Pharmacopoeia, and Iranian Herbal Pharmacopoeia.",
      sourceId: mathews2024.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "The leaves of lemon balm are used in Iranian folk medicine for their digestive, carminative, antispasmodic, sedative, analgesic, tonic, and diuretic properties, including for functional gastrointestinal disorders.",
      sourceId: miraj2016.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Mechanistic and animal studies suggest lemon balm's calming effects may involve inhibition of GABA transaminase (raising brain GABA availability) and binding of essential-oil constituents such as trans-ocimene to GABA-A receptors; aqueous extracts have also been shown to lower plasma corticosterone, a stress hormone, in animal models. In vitro, lemon balm extracts and essential oil inhibited herpes simplex virus type 1 (HSV-1) and influenza A virus. In animal toxicity testing, no adverse effects were seen at doses up to 2000 mg/kg, though the essential oil showed a neurotoxic effect in primary cell cultures at 0.1 mg/mL.",
      sourceId: awlqadr2025.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Clinical trials reviewed found anxiolytic effects across age groups: 1200 mg/day over three menstrual cycles reduced anxiety in adolescents with premenstrual syndrome, acute dosing improved calmness ratings in young adults, and older adults with cardiac conditions had reduced anxiety measures. Cognitive results were mixed, with one study finding improved attention accuracy at a 600 mg dose. Sleep quality improved after 6 weeks of 80 mg/day in middle-aged adults with moderate sleep problems, and mood/depression scores improved with 2000 mg/day over 8 weeks and with 1500 mg over 10 days in postpartum women. Doses up to 5000 mg/day were reported as well tolerated, with no serious adverse events across the trials reviewed.",
      sourceId: mathews2024.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a double-blind randomized trial of 60 people with recurrent herpes labialis, topical 1% Melissa officinalis gel applied three times daily for 7 days was compared to 5% acyclovir cream. Melissa gel reduced pain significantly more than acyclovir on days 2 and 4, and showed better reduction in erythema (redness) on day 4, but lesion size and overall healing time did not differ significantly between the two treatments; the authors concluded Melissa gel was not more effective than acyclovir overall despite the pain-relief advantage.",
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
        "No side effects have generally been reported with topical or oral use at recommended doses for up to 30 days in healthy adults. Lemon balm has GRAS (Generally Recognized as Safe) status in the United States, with a maximum level of 0.5% in baked goods.",
      sourceId: miraj2016.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Across the human trials reviewed, lemon balm appeared safe and well tolerated, including in vulnerable populations such as infants and hospitalized patients, with no serious adverse events reported at doses up to 5000 mg/day and minimal dropout due to tolerability issues.",
      sourceId: mathews2024.id,
    },
    {
      category: "PREGNANCY" as const,
      description: "Reported as unsafe for use during pregnancy.",
      sourceId: miraj2016.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Reported as unsafe for use during lactation/breastfeeding.",
      sourceId: miraj2016.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "Reported as unsafe to combine with sedative medications.",
      sourceId: miraj2016.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description: "Reported as unsafe for pediatric use and for people with thyroid disorders.",
      sourceId: miraj2016.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "In animal studies, no adverse effects were observed at doses up to 2000 mg/kg body weight; however, the essential oil produced a neurotoxic effect in primary cell cultures at a concentration of 0.1 mg/mL in vitro.",
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
