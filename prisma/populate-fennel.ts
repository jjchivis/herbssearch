import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Fennel, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/document
// before being written here.
//
// Tier-1 source note: NCCIH's "Herbs at a Glance" index was fetched and
// checked; it does not include a dedicated fennel fact sheet (confirmed
// live: fennel does not appear between "Fenugreek" and "Feverfew" in the
// alphabetical list). Instead, the EMA/HMPC "European Union herbal
// monograph on Foeniculum vulgare Miller subsp. vulgare var. dulce (Mill.)
// Batt. & Trab., fructus" (Final, Revision 1, EMEA/HMPC/372839/2016,
// adopted 31 January 2024) is used as the Tier-1 government source. The
// full PDF was fetched and read directly from the EMA website before
// writing this file.
//
// Taxonomy note: family/genus/species cross-checked against Kew POWO
// (search snapshot: native range "Mediterranean to Ethiopia and W. Nepal",
// family Apiaceae), GBIF Backbone Taxonomy (species/103356016, family
// Apiaceae, genus Foeniculum, type species of the genus), and NCBI
// Taxonomy (Taxonomy ID 2849586, family Apiaceae; NCBI currently treats
// "Anethum foeniculum L., 1753" as the accepted name with "Foeniculum
// vulgare Mill., 1768" as a heterotypic synonym, though Foeniculum vulgare
// remains the name used by POWO/GBIF and throughout the botanical/medical
// literature, so it is kept as the primary name here per the existing
// seed).

async function main() {
  const fennel = await prisma.herb.findUniqueOrThrow({ where: { name: "Fennel" } });

  // --- botanical profile ---
  await prisma.herb.update({
    where: { id: fennel.id },
    data: {
      family: "Apiaceae",
      genus: "Foeniculum",
      species: "vulgare",
      nativeRange: "From the Mediterranean region east to Ethiopia and western Nepal; now grown and growing wild worldwide, including across Asia, Europe and North America",
      partsUsed: "The dried ripe seeds (botanically small fruits, called \"Foeniculi fructus\" in herbal references), which are the official medicinal part in the European monograph. The leaves, stems, root and bulb are eaten as food.",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME" | "TRADITIONAL_NAME"; language?: string; region?: string }[] = [
    { name: "Anethum foeniculum L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Foeniculum officinale All.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Meum foeniculum (L.) Spreng.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Sweet Fennel", type: "COMMON_NAME" },
    { name: "Bitter Fennel", type: "COMMON_NAME" },
    { name: "Fenouil", type: "COMMON_NAME", language: "French" },
    { name: "Finocchio", type: "COMMON_NAME", language: "Italian" },
    { name: "Hui Xiang", type: "COMMON_NAME", language: "Chinese" },
    { name: "Saunf", type: "COMMON_NAME", language: "Hindi", region: "India" },
    { name: "Madhurika", type: "TRADITIONAL_NAME", language: "Sanskrit" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: fennel.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: {
          herbId: fennel.id,
          name: syn.name,
          type: syn.type,
          language: syn.language,
          region: syn.region,
        },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government source. NCCIH has no dedicated fennel page (confirmed
  // live against the "Herbs at a Glance" index), so the EMA/HMPC European
  // Union herbal monograph on sweet fennel fruit is used instead.
  const ema = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf",
    {
      title:
        "European Union herbal monograph on Foeniculum vulgare Miller subsp. vulgare var. dulce (Mill.) Batt. & Trab., fructus — Final, Revision 1 (EMEA/HMPC/372839/2016)",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2024-01-31"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed botany/phytochemistry/pharmacology/toxicology review.
  const phytochemistryReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/",
    {
      title:
        "Foeniculum vulgare Mill: A Review of Its Botany, Phytochemistry, Pharmacology, Contemporary Application, and Toxicology",
      author: "Badgujar SB, Patel VV, Bandivdekar AH",
      organization: "BioMed Research International",
      journal: "BioMed Research International",
      publicationDate: new Date("2014-01-01"),
      doi: "10.1155/2014/842674",
      pmid: "25162032",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4137549/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized, placebo-controlled clinical trial (infantile colic).
  const colicTrial = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/12868253/",
    {
      title:
        "The effect of fennel (Foeniculum vulgare) seed oil emulsion in infantile colic: a randomized, placebo-controlled study",
      author: "Alexandrovich I, Rakovitskaya O, Kolmo E, Sidorova T, Shushunov S",
      organization: "Alternative Therapies in Health and Medicine",
      journal: "Alternative Therapies in Health and Medicine",
      publicationDate: new Date("2003-07-01"),
      pmid: "12868253",
      url: "https://pubmed.ncbi.nlm.nih.gov/12868253/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // Peer-reviewed systematic review and meta-analysis (primary dysmenorrhea).
  const dysmenorrheaMetaAnalysis = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7697926/",
    {
      title: "Fennel for Reducing Pain in Primary Dysmenorrhea: A Systematic Review and Meta-Analysis of Randomized Controlled Trials",
      author: "Lee HW, Ang L, Lee MS, Alimoradi Z, Kim E",
      organization: "Nutrients",
      journal: "Nutrients",
      publicationDate: new Date("2020-11-10"),
      doi: "10.3390/nu12113438",
      pmid: "33182553",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7697926/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (anethole and fenchone are new; estragole and limonene
  // already exist in the taxonomy seed / basil & dill populate scripts and
  // are reused/linked here — all four are documented fennel essential-oil
  // constituents per both the EMA monograph and the Badgujar et al. review) ---
  const anethole = await prisma.constituent.upsert({
    where: { slug: "anethole" },
    update: {},
    create: { name: "Anethole", slug: "anethole", type: "phenylpropanoid" },
  });
  const fenchone = await prisma.constituent.upsert({
    where: { slug: "fenchone" },
    update: {},
    create: { name: "Fenchone", slug: "fenchone", type: "volatile oil" },
  });
  const estragole = await prisma.constituent.findUniqueOrThrow({ where: { slug: "estragole" } });
  const limonene = await prisma.constituent.findUniqueOrThrow({ where: { slug: "limonene" } });

  for (const constituentId of [anethole.id, fenchone.id, estragole.id, limonene.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: fennel.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: fennel.id, constituentId },
      });
    }
  }

  // --- traditions ---
  const ayurveda = await prisma.traditionSystem.findUniqueOrThrow({ where: { slug: "ayurveda" } });
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });

  const traditionLinks = [
    {
      traditionId: ayurveda.id,
      notes:
        "Fennel seed is listed in the Ayurvedic Pharmacopoeia of India as an important ingredient in multi-herb formulas. Its Sanskrit names include Madhurika and Shatapushpa, and in Hindi it is widely known as saunf or badi saunf.",
    },
    {
      traditionId: mediterraneanFolkMedicine.id,
      notes:
        "Fennel is native to the Mediterranean region (from the Mediterranean to Ethiopia and western Nepal, according to Kew and GBIF). Mediterranean and European folk medicine has long used it to aid digestion and relieve gas, for stomach upsets and constipation, for breathing problems, to reduce inflammation, and to increase breast milk in nursing mothers.\n\nTechnical detail: carminative, galactagogue.",
    },
  ];
  for (const link of traditionLinks) {
    const existing = await prisma.herbTradition.findFirst({
      where: { herbId: fennel.id, traditionId: link.traditionId },
    });
    if (!existing) {
      await prisma.herbTradition.create({ data: { herbId: fennel.id, ...link } });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The European Medicines Agency recognizes fennel tea for three uses, based only on its long history of traditional use:\n- Mild digestive cramps, including bloating and gas\n- Minor cramps during menstrual periods\n- To help loosen mucus in a cough that comes with a cold\nThe agency did not recognize any use as proven by clinical studies.\n\nTechnical detail: \"traditional-use\" registration; expectorant; no \"well-established use\" recognized.",
      sourceId: ema.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "A research review found fennel has been used traditionally for more than 40 kinds of health problems in Ayurvedic, Unani, Siddha and Mediterranean/European folk medicine. These include aiding digestion and relieving gas, stomach pain, diarrhea, breathing problems, eye problems, kidney problems, fever and arthritis, and increasing breast milk. It is also widely used as a cooking spice.\n\nTechnical detail: carminative, galactagogue.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "A research review describes these lab and animal findings:\n- In animals, a fennel extract reduced inflammation.\n- The essential oil protected the liver in rats with chemical liver damage, bringing liver enzyme levels down.\n- The essential oil lowered high blood sugar in diabetic rats.\n- A water-based extract improved memory in rodents with drug-induced memory loss.\n- In lab tests, the oil and extracts slowed the growth of bacteria such as Staphylococcus aureus, E. coli and Bacillus.\n- In mice, the essential oil helped prevent blood clots.\nThese are animal and lab findings, not established effects in people.\n\nTechnical detail: methanolic extract 200 mg/kg oral (acute and subacute inflammation); reduced AST, ALT, ALP and bilirubin in carbon-tetrachloride-induced liver injury (hepatoprotective); 30 mg/kg in streptozotocin-induced diabetic rats; aqueous extract 50–200 mg/kg in scopolamine-induced amnesia; antithrombotic activity in mice.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In animal studies, fennel acted like the hormone estrogen, causing estrogen-like changes in the reproductive tissues and breast glands. The compounds responsible are forms of anethole, the main flavor compound in fennel. This is cited as a possible reason for fennel's traditional use to increase breast milk and for menstrual and menopausal complaints, but it has not been shown to work this way in people.\n\nTechnical detail: acetone extracts induced vaginal cornification, increased mammary gland weight and raised nucleic acid levels; active components identified as the anethole polymers dianethole and photoanethole.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In one trial, 125 babies aged 2–12 weeks with colic were given either a fennel seed oil emulsion or a placebo. Colic went away in 65% of babies given fennel, compared with about 24% given placebo. No side effects were reported in either group. The authors concluded fennel seed oil worked better than placebo for reducing colic. This was a supervised clinical trial; see the safety section about giving fennel to young children.\n\nTechnical detail: randomized, placebo-controlled; infants met Wessel's criteria for colic; 40/62 vs. 14/59 (p<0.01); absolute risk reduction 41% (95% CI 25–57); number needed to treat 2 (95% CI 2–4).",
      sourceId: colicTrial.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "A review that combined 12 trials found fennel reduced period pain (primary dysmenorrhea) more than placebo. In 7 trials comparing fennel with standard pain relievers such as mefenamic acid or ibuprofen, fennel worked about as well. Only 3 of the 12 trials looked at side effects; one reported minor nausea and vomiting, equally common with fennel and placebo. The authors noted that there is a big gap in safety data for fennel.\n\nTechnical detail: systematic review and meta-analysis of randomized controlled trials. Fennel vs. placebo: n=468, SMD −3.27 (95% CI −5.28 to −1.26), p=0.001. Fennel vs. conventional drugs: n=502, SMD 0.07 (95% CI −0.08 to 0.21), p=0.37.",
      sourceId: dysmenorrheaMetaAnalysis.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      // Match on summary too: one source can back several entries in the same
      // category (two Badgujar et al. preclinical entries here).
      where: { herbId: fennel.id, category: entry.category, sourceId: entry.sourceId, summary: entry.summary },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: fennel.id, ...entry } });
    }
  }

  // --- safety ---
  const safetyRecords = [
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Don't use fennel if you are allergic to it, to anethole (its main flavor compound), or to other plants in the carrot family (Apiaceae), such as aniseed, caraway, celery, coriander or dill. People allergic to mugwort pollen should also avoid it, because the allergies can overlap.\n\nTechnical detail: the Apiaceae family is also called Umbelliferae.",
      sourceId: ema.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Fennel has not been shown to be safe during pregnancy, so using it as a medicine while pregnant is not recommended. There is no data on its effects on fertility. In a study in pregnant mice, a water-based fennel seed extract caused birth defects and harm to the developing embryos, and the effect grew with the dose. Proper reproductive-safety testing has not been done in people.\n\nTechnical detail: BALB/c mice, days 6–15 of gestation; dose-dependent teratogenic/embryotoxic effects (morphological changes, skeletal disorders, cellular alterations).",
      sourceId: ema.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Fennel has not been shown to be safe while breastfeeding, so using it as a medicine while breastfeeding is not recommended. There is evidence that trans-anethole, fennel's main flavor compound, passes into breast milk.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "European guidance does not recommend fennel tea products for children under 4, because there isn't enough data. Its use for period cramps in children under 12 has not been established either. This official guidance differs from the traditional use of fennel for baby colic (see the infant trial under research in people, which was medically supervised). Don't give fennel to babies or young children without medical advice.",
      sourceId: ema.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Allergic reactions to fennel, affecting the skin or breathing, can happen. How often is not known.",
      sourceId: ema.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "Fennel essential oil contains estragole, a natural compound that caused liver tumors in mice and damages DNA in rodents. Anethole, fennel's main flavor compound, showed weak DNA-damaging activity in lab animals, although a water-based fennel extract tested negative in a standard lab test for DNA damage. Suggested limits for estragole:\n- Everyone: keep exposure as low as practically possible.\n- Pregnant or breastfeeding women: under 0.05 mg a day.\n- Children under 12: under 1 microgram per kg of body weight a day.\n\nTechnical detail: estragole is considered a genotoxic carcinogen in rodents, with suggestive but indirect evidence of carcinogenicity in rats; fennel aqueous extract was negative in the Ames test (Salmonella typhimurium TA98, TA100).",
      sourceId: ema.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "How much to use, according to the European Medicines Agency (as a tea):\n- Adults and teens: 1.5 g of fennel seed in 250 ml of boiling water, steeped for 15 minutes, 3 times a day (4.5 g a day). Don't use for more than 2 weeks.\n- Children 4–12: 1.0 g in 100 ml of boiling water, 3 times a day (3.0 g a day), only for mild, short-lived symptoms and for less than a week.\nIf symptoms last or get worse, see a doctor or qualified health professional.",
      sourceId: ema.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "In animal studies, fennel acted like the hormone estrogen (from forms of anethole, its main flavor compound). This comes from animals, not from studies in people, but it is the traditional reason for caution about fennel for people with hormone-sensitive conditions.\n\nTechnical detail: acetone extracts induced vaginal cornification and increased mammary gland weight; attributed to dianethole and photoanethole.",
      sourceId: phytochemistryReview.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: fennel.id, category: record.category, sourceId: record.sourceId, description: record.description },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: fennel.id, ...record },
      });
    }
  }

  console.log("Fennel populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
