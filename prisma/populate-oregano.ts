import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Oregano, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/article
// before being written here.
//
// Tier-1 source note: NCCIH's "Herbs at a Glance" index was fetched live
// (nccih.nih.gov/health/herbsataglance, 57 herbs) and does not include
// oregano. The EMA/HMPC herbal monograph database was also checked live and
// has monographs only for two related-but-distinct Origanum species —
// Origanum dictamnus L. (Dittany of Crete) and Origanum majorana L. (sweet
// marjoram) — not for Origanum vulgare (common oregano) itself, so neither
// is used here. Instead, the NIH LiverTox database entry on Oregano
// (NCBI Bookshelf, part of the National Institute of Diabetes and Digestive
// and Kidney Diseases' LiverTox project) is used as the Tier-1 government
// source, matching the pattern of substituting an alternate real NIH
// resource when NCCIH/EMA have no dedicated monograph.

async function main() {
  const oregano = await prisma.herb.findUniqueOrThrow({ where: { name: "Oregano" } });

  // --- botanical profile ---
  // Family/genus/species per Kew POWO (Origanum vulgare L., accepted, family
  // Lamiaceae, first published Sp. Pl.: 590 (1753)) and GBIF Backbone
  // Taxonomy (family Lamiaceae, order Lamiales), both fetched live and
  // cross-checked. nativeRange and partsUsed per Kew POWO's native
  // distribution and the NIH LiverTox entry's description of the plant
  // parts used, respectively.
  await prisma.herb.update({
    where: { id: oregano.id },
    data: {
      family: "Lamiaceae",
      genus: "Origanum",
      species: "vulgare",
      nativeRange:
        "Europe, the Mediterranean region, North Africa, and temperate Asia (native range spans Macaronesia to China); introduced and naturalized in North America",
      partsUsed: "Leaf and flower (dried leaves and flowering tops)",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (Kew POWO, fetched live: 2 homotypic synonyms listed for
  // Origanum vulgare L., one of them an illegitimate/superfluous name; only
  // the two POWO-listed scientific synonyms and well-established common
  // names are recorded here) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Origanum floridum Salisb.", type: "SCIENTIFIC_SYNONYM" },
    { name: "Thymus origanum Kuntze", type: "SCIENTIFIC_SYNONYM" },
    { name: "Wild Marjoram", type: "COMMON_NAME" },
    { name: "Pot Marjoram", type: "COMMON_NAME" },
    { name: "Winter Marjoram", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: oregano.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: oregano.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government source. NCCIH has no dedicated oregano page (confirmed
  // live against the full 57-herb "Herbs at a Glance" index) and EMA/HMPC
  // has no monograph for Origanum vulgare itself (confirmed live: only
  // Origanum dictamnus and Origanum majorana monographs exist). The NIH
  // LiverTox database entry on Oregano is used instead.
  const livertox = await findOrCreateSource("https://www.ncbi.nlm.nih.gov/books/NBK591556/", {
    title: "Oregano",
    organization:
      "LiverTox: Clinical and Research Information on Drug-Induced Liver Injury, National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), National Institutes of Health (NIH)",
    publicationDate: new Date("2023-04-28"),
    pmid: "37184199",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK591556/",
    sourceType: "government",
    tier: "TIER_1_GOVERNMENT",
  });

  // Peer-reviewed narrative review of ethnopharmacology, phytochemistry, and
  // antimicrobial pharmacology.
  const phytochemistryReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8457725/",
    {
      title: "A Review of the Phytochemistry and Antimicrobial Properties of Origanum vulgare L. and Subspecies",
      author: "Leyva-López N, Gutiérrez-Grijalva EP, Vazquez-Olivo G, Heredia JB",
      organization: "Iranian Journal of Pharmaceutical Research",
      journal: "Iranian Journal of Pharmaceutical Research",
      publicationDate: new Date("2021-03-01"),
      doi: "10.22037/ijpr.2020.113874.14539",
      pmid: "34567161",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8457725/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed primary research: phenolic/flavonoid composition and
  // in vitro/in vivo (animal) biological activity of Origanum vulgare ssp.
  // vulgare.
  const chemicalCompositionStudy = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222339/",
    {
      title: "Origanum vulgare ssp. vulgare: Chemical Composition and Biological Studies",
      author: "Oniga I, Pușcaș C, Silaghi-Dumitrescu R, Olah NK, Sevastre B, Marica R, Marcus I, Sevastre-Berghian AC, Benedec D, Pop CE, Hanganu D",
      organization: "Molecules",
      journal: "Molecules",
      publicationDate: new Date("2018-08-17"),
      doi: "10.3390/molecules23082077",
      pmid: "30126246",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222339/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed human clinical study (small, open-label, uncontrolled —
  // not blinded or placebo-controlled).
  const parasiteTrial = await findOrCreateSource("https://pubmed.ncbi.nlm.nih.gov/10815019/", {
    title: "Inhibition of enteric parasites by emulsified oil of oregano in vivo",
    author: "Force M, Sparks WS, Ronzio RA",
    organization: "Phytotherapy Research",
    journal: "Phytotherapy Research",
    publicationDate: new Date("2000-05-01"),
    doi: "10.1002/(SICI)1099-1573(200005)14:3<213::AID-PTR583>3.0.CO;2-U",
    pmid: "10815019",
    url: "https://pubmed.ncbi.nlm.nih.gov/10815019/",
    sourceType: "peer_reviewed",
    tier: "TIER_3_PEER_REVIEWED",
  });

  // --- constituents (carvacrol, thymol, p-cymene, and rosmarinic-acid all
  // already exist in this database from the taxonomy seed and prior thyme
  // population; reused here by slug, not recreated) ---
  const carvacrol = await prisma.constituent.upsert({
    where: { slug: "carvacrol" },
    update: {},
    create: { name: "Carvacrol", slug: "carvacrol", type: "volatile oil" },
  });
  const thymol = await prisma.constituent.upsert({
    where: { slug: "thymol" },
    update: {},
    create: { name: "Thymol", slug: "thymol", type: "volatile oil" },
  });
  const pCymene = await prisma.constituent.upsert({
    where: { slug: "p-cymene" },
    update: {},
    create: { name: "p-Cymene", slug: "p-cymene", type: "volatile oil" },
  });
  const rosmarinicAcid = await prisma.constituent.upsert({
    where: { slug: "rosmarinic-acid" },
    update: {},
    create: { name: "Rosmarinic Acid", slug: "rosmarinic-acid", type: "phenolic compound" },
  });

  for (const constituentId of [carvacrol.id, thymol.id, pCymene.id, rosmarinicAcid.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: oregano.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: oregano.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: oregano.id, traditionId: mediterraneanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: oregano.id,
        traditionId: mediterraneanFolkMedicine.id,
        notes:
          "Native to the Mediterranean region; long-standing use across Mediterranean and Iranian folk medicine as a culinary spice and as a traditional remedy for respiratory ailments, digestive complaints, and infections.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Oregano has a long history of traditional use for respiratory disorders (colds, fever, cough, bronchitis), stomachache and digestive upset, painful menstruation, rheumatoid arthritis, urinary problems, and as an antiparasitic and antibacterial agent. In Iranian traditional medicine specifically it has been used as a tonic, expectorant, carminative, and stimulant. Historically it has also been used as a culinary spice and, in oil form, applied for bacterial and fungal infections.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "A phenolic-rich hydroalcoholic extract of Origanum vulgare ssp. vulgare (dominated by rosmarinic acid, 12.83 mg/g, plus chlorogenic acid and the flavonoids hyperoside, isoquercitrin, rutin, quercitrin, and luteolin; total polyphenol content 94.69 mg/g) showed strong antioxidant activity in vitro (CUPRAC, FRAP, and superoxide-scavenging assays) and antimicrobial activity against tested bacterial strains (inhibition zones 16-19 mm) and antifungal activity against Aspergillus niger (MIC 19.53 micrograms/mL). In a carbon-tetrachloride-induced hepatotoxicity mouse model, the extract reduced liver damage markers and restored antioxidant enzyme activity (catalase, superoxide dismutase, glutathione peroxidase) and reduced lipid peroxidation. The essential-oil constituents carvacrol and thymol are separately reported as major active components of oregano (constituting up to roughly 70% combined in some subspecies), with gamma-terpinene and p-cymene as other significant volatile constituents; the review's antimicrobial-mechanism discussion (enzyme inhibition, efflux-pump inhibition, biofilm disruption, cytoplasmic membrane damage) is based on in vitro and food-model studies. These are in vitro and animal findings, not established clinical effects in humans.",
      sourceId: chemicalCompositionStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a small, open-label (non-blinded, non-placebo-controlled) clinical study, 14 adult patients with stool tests positive for the enteric parasites Blastocystis hominis, Entamoeba hartmanni, and Endolimax nana were given 600 mg of emulsified oil of Mediterranean oregano (Origanum vulgare) daily for 6 weeks. Entamoeba hartmanni cleared completely in all 4 affected patients, Endolimax nana cleared in the 1 affected patient, and Blastocystis hominis cleared completely in 8 of 11 cases (with scores declining in 3 more). Gastrointestinal symptoms improved in 7 of the 11 patients who had tested positive for Blastocystis hominis. Because the study was small, uncontrolled, and not blinded, it should be read as preliminary evidence rather than definitive proof of efficacy.",
      sourceId: parasiteTrial.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: oregano.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: oregano.id, ...entry } });
    }
  }

  // --- safety, all traced to the NIH LiverTox entry ---
  const safetyRecords = [
    {
      category: "PREGNANCY" as const,
      description:
        "Oregano, in doses used as a dietary supplement, is an abortifacient and should not be used during pregnancy or by women of childbearing age not using effective contraception.",
    },
    {
      category: "ALLERGY" as const,
      description:
        "Rare hypersensitivity reactions have been reported. A published case describes a 45-year-old man with asthma who had an immediate systemic hypersensitivity reaction (rash, lip swelling, stridor, mild hypotension responding to epinephrine) after eating foods containing oregano and then thyme, with positive skin-prick and in-vitro testing to multiple plants of the mint family (Lamiaceae), indicating cross-reactivity risk for people sensitive to other Lamiaceae herbs.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Oregano oil is usually well tolerated, but higher doses can cause abdominal discomfort, heartburn, constipation or diarrhea, nausea and vomiting, dizziness, and headache.",
    },
    {
      category: "TOXICITY" as const,
      description:
        "Despite widespread use as a culinary herb and dietary supplement, there are no published reports of serum aminotransferase elevations or clinically apparent liver injury attributable to oregano oil; LiverTox assigns it a hepatotoxicity likelihood score of E (unlikely cause of clinically apparent liver injury), though limited prospective human dosing data exist and the mechanism by which oregano extracts might theoretically cause liver injury is unknown.",
    },
    {
      category: "DOSAGE" as const,
      description:
        "Oregano oil has not been approved as therapy for any disease or medical condition in the United States, but is available over-the-counter as a dietary supplement in multiple formulations (capsules, oil solutions). The typical recommended dose varies widely, in part based on the relative concentration of essential oils in the product.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: oregano.id, category: record.category, sourceId: livertox.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: oregano.id, sourceId: livertox.id, ...record },
      });
    }
  }

  console.log("Oregano populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
