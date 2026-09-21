import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Parsley, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/article
// before being written here.
//
// Tier-1 source note: NCCIH has no dedicated parsley page (confirmed live:
// nccih.nih.gov/health/herbsataglance was fetched and its full 57-herb index
// does not include parsley), and the EMA/HMPC has not published a
// "Petroselini fructus/folium/radix" (parsley fruit/leaf/root) Community
// herbal monograph (confirmed by full-text search of both the EMA's 2018
// HMPC paediatric-uses overview document, which lists recommendations from
// every published EU herbal monograph, and the EMA's general EU-monographs
// list page — neither contains a Petroselinum entry). Instead, the German
// Commission E monograph "Parsley herb and root" (Petroselini herba/radix),
// an official national drug-regulatory-agency monograph analogous in
// standing to the WHO-monograph fallback used elsewhere in this project, is
// used as the Tier-1 government source. Its full text (composition,
// approved uses, contraindications, side effects, interactions, dosage,
// irrigation-therapy warning) was fetched and read from the American
// Botanical Council's HerbalGram reproduction before writing this file.

async function main() {
  const parsley = await prisma.herb.findUniqueOrThrow({ where: { name: "Parsley" } });

  // --- botanical profile ---
  // Family/genus/species cross-checked against GBIF Backbone Taxonomy
  // (species match for "Petroselinum crispum", status ACCEPTED, family
  // Apiaceae, genus Petroselinum, usageKey 7828157), NCBI Taxonomy (TaxID
  // 4043, family Apiaceae, genus Petroselinum, common name "parsley"), and
  // Kew POWO (accepted name "Petroselinum crispum (Mill.) Fuss").
  // nativeRange per Kew POWO's native-distribution data for the accepted
  // taxon: native to Algeria, Greece, Morocco, and the north-western Balkan
  // Peninsula, introduced/naturalized across a very wide secondary range.
  // partsUsed per the Commission E monograph, which separately defines
  // "Parsley" (fresh or dried plant section, i.e. leaf/herb) and "Parsley
  // root" (dried root) as the drugs covered, plus the Dosoky & Setzer 2021
  // review's discussion of parsley seed/fruit essential oil.
  await prisma.herb.update({
    where: { id: parsley.id },
    data: {
      family: "Apiaceae",
      genus: "Petroselinum",
      species: "crispum",
      nativeRange:
        "Native to Algeria, Greece, Morocco, and the north-western Balkan Peninsula; naturalized and cultivated worldwide",
      partsUsed:
        "Fresh or dried leaf (\"herb\") and dried root are the primary parts used, culinarily and medicinally; the fruit (seed) and its concentrated essential oil have a separate history of medicinal/abortifacient use and carry distinct toxicity concerns",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms ---
  // Scientific synonyms taken from Kew POWO's homotypic-synonym list for
  // the accepted name "Petroselinum crispum (Mill.) Fuss" and from GBIF's
  // synonym list for the matched, accepted GBIF usage (key 7828157).
  // Common names cross-checked across POWO, GBIF, and general botanical
  // references (Missouri Botanical Garden Plant Finder, Wisconsin
  // Horticulture Extension) for the English forms, and confirmed "persil"
  // as the standard French common name.
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; language?: string }[] = [
    { name: "Apium crispum Mill.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Petroselinum sativum L.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Garden Parsley", type: "COMMON_NAME" },
    { name: "Curly Parsley", type: "COMMON_NAME" },
    { name: "Persil", type: "COMMON_NAME", language: "French" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: parsley.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: {
          herbId: parsley.id,
          name: syn.name,
          type: syn.type,
          language: syn.language,
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

  // Tier 1 government source. NCCIH has no dedicated parsley page and
  // EMA/HMPC has not published a parsley (Petroselini fructus/folium/radix)
  // monograph, so the German Commission E monograph is used instead.
  const commissionE = await findOrCreateSource(
    "https://www.herbalgram.org/resources/commission-e-monographs/monograph-approved-herbs/parsley-herb-and-root/",
    {
      title: "Parsley herb and root (Petroselini herba/radix) — German Commission E Monograph",
      organization: "German Commission E, reproduced by the American Botanical Council",
      publicationDate: new Date("1989-03-02"),
      url: "https://www.herbalgram.org/resources/commission-e-monographs/monograph-approved-herbs/parsley-herb-and-root/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed ethnopharmacology/phytochemistry review.
  const ethnopharmacologyReview = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/24660617/",
    {
      title: "Parsley: a review of ethnopharmacology, phytochemistry and biological activities",
      author: "Farzaei MH, Abbasabadi Z, Ardekani MR, Rahimi R, Farzaei F",
      organization: "Journal of Traditional Chinese Medicine",
      journal: "Journal of Traditional Chinese Medicine",
      publicationDate: new Date("2013-12-01"),
      doi: "10.1016/s0254-6272(14)60018-2",
      pmid: "24660617",
      url: "https://pubmed.ncbi.nlm.nih.gov/24660617/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed review focused on renal effects and covering traditional,
  // preclinical, and human-research evidence separately.
  const renalHealthReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC11672790/",
    {
      title: "Renal health benefits and therapeutic effects of parsley (Petroselinum crispum): a review",
      author: "Alobaidi S",
      organization: "Frontiers in Medicine",
      journal: "Frontiers in Medicine (Lausanne)",
      publicationDate: new Date("2024-12-12"),
      doi: "10.3389/fmed.2024.1494740",
      pmid: "39735703",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11672790/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed toxicology review specifically covering parsley
  // (apiole-rich) essential oil and its maternal/reproductive toxicity.
  const reproductiveToxicityReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC7956842/",
    {
      title: "Maternal Reproductive Toxicity of Some Essential Oils and Their Constituents",
      author: "Dosoky NS, Setzer WN",
      organization: "International Journal of Molecular Sciences",
      journal: "International Journal of Molecular Sciences",
      publicationDate: new Date("2021-02-27"),
      doi: "10.3390/ijms22052380",
      pmid: "33673548",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7956842/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // --- constituents ---
  // Apigenin already exists in the taxonomy seed (added via chamomile) and
  // is reused/linked here — the Farzaei review names apigenin (plus apiin
  // and 6''-acetylapiin) as major identified flavonoids/phenolics. Apiol
  // and myristicin (the two essential-oil constituents both the Farzaei and
  // Alobaidi reviews name as the plant's characteristic volatile-oil
  // components, and the ones with documented toxicity significance) and
  // bergapten (a furanocoumarin the Alobaidi review specifically ties to
  // photocontact dermatitis) are new and created here.
  const apiol = await prisma.constituent.upsert({
    where: { slug: "apiol" },
    update: {},
    create: {
      name: "Apiol",
      slug: "apiol",
      type: "volatile oil",
      description:
        "Major essential-oil constituent of parsley leaf and seed; in concentrated/isolated form (e.g. parsley seed essential oil) it is neurotoxic, hepatotoxic, nephrotoxic, and historically used — and still misused — as an abortifacient, with documented fatalities and maternal organ injury at high doses.",
    },
  });
  const myristicin = await prisma.constituent.upsert({
    where: { slug: "myristicin" },
    update: {},
    create: {
      name: "Myristicin",
      slug: "myristicin",
      type: "volatile oil",
      description: "Major essential-oil constituent of parsley leaf and seed, alongside apiol.",
    },
  });
  const bergapten = await prisma.constituent.upsert({
    where: { slug: "bergapten" },
    update: {},
    create: {
      name: "Bergapten",
      slug: "bergapten",
      type: "furanocoumarin",
      description: "5-methoxypsoralen; a furanocoumarin identified in parsley that can cause photocontact dermatitis.",
    },
  });
  const apigenin = await prisma.constituent.findUniqueOrThrow({ where: { slug: "apigenin" } });

  for (const constituentId of [apiol.id, myristicin.id, bergapten.id, apigenin.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: parsley.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: parsley.id, constituentId },
      });
    }
  }

  // --- traditions ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const europeanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "european-folk-medicine" },
  });

  const traditionLinks = [
    {
      traditionId: mediterraneanFolkMedicine.id,
      notes:
        "Native to the central/eastern Mediterranean (Algeria, Greece, Morocco, north-western Balkans per Kew POWO). Ancient Greek and Roman use for urinary-tract complaints and kidney-stone prevention is documented, and therapeutic applications are recorded as far back as the Ebers Papyrus.",
    },
    {
      traditionId: europeanFolkMedicine.id,
      notes:
        "Long-standing European herbal-medicine use as a urinary-tract \"flushing\" agent and diuretic for prevention/treatment of kidney gravel, formally recognized in the German Commission E monograph for parsley herb and root (approved March 2, 1989).",
    },
  ];
  for (const link of traditionLinks) {
    const existing = await prisma.herbTradition.findFirst({
      where: { herbId: parsley.id, traditionId: link.traditionId },
    });
    if (!existing) {
      await prisma.herbTradition.create({ data: { herbId: parsley.id, ...link } });
    }
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "The German Commission E monograph recognizes parsley herb and root for flushing out the efferent urinary tract and for the prevention and treatment of kidney gravel, reflecting long-standing European medicinal use rather than a specific clinical trial base.",
      sourceId: commissionE.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Parsley has been used in traditional and folk medicine as a carminative, gastric tonic, diuretic, urinary-tract antiseptic, anti-urolithiasis agent, antidote, and anti-inflammatory, and for amenorrhea, dysmenorrhea, gastrointestinal disorders, hypertension, cardiac disease, urinary disease, otitis, sniffles, diabetes, and various dermal conditions.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "Ancient Greeks and Romans used parsley for urinary-tract infections and kidney-stone prevention, with therapeutic applications also recorded in the Ebers Papyrus. The review also notes traditional Chinese and Ayurvedic use for hypertension and inflammation, alongside the plant's Mediterranean origin.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "Animal studies reviewed by Alobaidi (2024) show parsley extracts/preparations reduce oxidative stress, improve renal biomarkers, and support kidney function, including protective effects against ischemia/reperfusion injury, drug-induced nephrotoxicity, and hyperuricemia-induced renal dysfunction across multiple rodent models. These are animal findings, not established human clinical effects.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "The Farzaei et al. review catalogs a wide range of pharmacological activities demonstrated for parsley extracts and isolated compounds in laboratory (in vitro/animal) studies, including antioxidant, hepatoprotective, brain-protective, anti-diabetic, analgesic, spasmolytic, immunosuppressant, anti-platelet, gastroprotective, cytoprotective, laxative, estrogenic, diuretic, hypotensive, antibacterial, and antifungal effects. These are preclinical findings and are not established human clinical effects.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Human studies summarized by Alobaidi (2024) show mixed results: Nielsen et al. (1999) documented increased urinary apigenin excretion and enhanced antioxidant enzyme activity after parsley consumption; Essa et al. (2024) found improved renal health markers in obese women given parsley-seed-supplemented bread; but Alyami and Rabah (2011) found no significant difference in urinary parameters compared with a control group. The review characterizes the overall human evidence base for parsley's renal effects as limited and mixed.",
      sourceId: renalHealthReview.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: parsley.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: parsley.id, ...entry } });
    }
  }

  // --- safety ---
  // The dose/preparation distinction is represented explicitly: ordinary
  // culinary use of the fresh/dried leaf is not the same risk profile as
  // concentrated parsley-seed extracts or isolated essential oil, which is
  // where the apiol-driven toxicity and abortifacient concerns concentrate.
  const safetyRecords = [
    {
      category: "PREPARATION_SPECIFIC" as const,
      description:
        "The toxicity and abortifacient concerns associated with parsley are concentrated in concentrated seed (fruit) extracts and isolated essential oil, which are rich in apiol; ordinary culinary use of the fresh or dried leaf is a distinct, much lower-exposure preparation. The Commission E monograph itself warns that \"the essential oil should not be used in isolation because of its toxicity.\"",
      sourceId: commissionE.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Commission E lists pregnancy as a contraindication for parsley herb/root preparations. Separately, concentrated parsley preparations and apiole-rich essential oil have a documented history of use as an abortifacient (notably in South America and Italy), historically ending in death in some cases from severe post-abortive vaginal bleeding; in animal studies, oral doses of 5-14 g induced severe hemorrhage and abortion in pregnant rabbits.",
      sourceId: commissionE.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Because apiole's abortifacient action appears to occur mainly at maternally hepatotoxic doses (via mechanisms including indirect induction of placental hemorrhage), the reviewing authors recommend avoiding apiole-rich parsley oil by all routes throughout pregnancy and breastfeeding, since a safe human threshold has not been established.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Apiole-rich parsley essential oil/concentrated preparations are recommended to be avoided throughout breastfeeding as well as pregnancy, as a safe human exposure threshold has not been established.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Contraindicated in existing inflammatory kidney conditions. Irrigation (flushing) therapy with parsley should not be carried out in cases of edema caused by impaired heart or kidney function, and requires concurrent intake of large amounts of fluid.",
      sourceId: commissionE.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description: "Occasional allergic skin or mucous membrane reactions have been reported.",
      sourceId: commissionE.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Bergapten (5-methoxypsoralen), a furanocoumarin present in parsley, may induce photocontact dermatitis.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "In excess, apiol (a major parsley essential-oil constituent) is neurotoxic, hepatotoxic, and nephrotoxic, with fatalities recorded historically. Reported poisoning signs include cognitive and visual disturbances, vertigo, tinnitus, ataxia, headache, giddiness, and loss of balance, with convulsions, paralysis, and death at higher doses. In a mouse study, a single gavage dose of 10 mL/kg of the oil killed all treated animals within 60 hours via liver and kidney toxicity.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "A case report describes elevated blood levels of the immunosuppressant sirolimus in a transplant patient who consumed large quantities of parsley, suggesting possible inhibition of the CYP3A4 drug-metabolizing enzyme.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Commission E-referenced daily dose (unless otherwise prescribed): 6 g of the prepared herb/root drug, as the crushed drug for infusions or other galenical preparations with a comparably small proportion of essential oil, taken orally. For irrigation (flushing) therapy, large amounts of fluid must be taken concurrently.",
      sourceId: commissionE.id,
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: parsley.id, category: record.category, sourceId: record.sourceId },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: parsley.id, ...record },
      });
    }
  }

  console.log("Parsley populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
