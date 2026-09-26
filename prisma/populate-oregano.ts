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
        "Europe, the Mediterranean region, North Africa and temperate Asia (from the Atlantic islands off Africa east to China); introduced and growing wild in North America",
      partsUsed: "The dried leaves and flowering tops",
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
          "Native to the Mediterranean region. It has long been used in Mediterranean and Iranian folk medicine, both as a cooking spice and as a traditional remedy for breathing problems, digestive complaints and infections.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Oregano has a long history of traditional use for:\n- Breathing problems: colds, fever, cough and bronchitis\n- Stomach ache and digestive upset\n- Painful periods\n- Rheumatoid arthritis\n- Urinary problems\n- Parasites and bacterial infections\nIn Iranian traditional medicine, it has been used to restore strength, loosen mucus, relieve gas and stimulate the body. It has also long been used as a cooking spice, and oregano oil has been applied for bacterial and fungal infections.\n\nTechnical detail: tonic, expectorant, carminative, stimulant; antiparasitic and antibacterial.",
      sourceId: phytochemistryReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests, an oregano extract rich in natural plant compounds (mainly rosmarinic acid) showed strong antioxidant activity and slowed the growth of bacteria and of a common mold (Aspergillus niger). In mice with chemically damaged livers, the extract reduced signs of liver damage and restored the liver's own protective enzymes. Oregano's essential oil is rich in carvacrol and thymol, which can make up about 70% of the oil in some types. Research on how these compounds fight germs comes from lab and food studies. These are lab and animal findings, not established effects in people.\n\nTechnical detail: Origanum vulgare ssp. vulgare hydroalcoholic extract: rosmarinic acid 12.83 mg/g, plus chlorogenic acid, hyperoside, isoquercitrin, rutin, quercitrin and luteolin; total polyphenols 94.69 mg/g. CUPRAC, FRAP and superoxide-scavenging assays; bacterial inhibition zones 16–19 mm; Aspergillus niger MIC 19.53 µg/mL. Carbon-tetrachloride hepatotoxicity model: restored catalase, superoxide dismutase and glutathione peroxidase and reduced lipid peroxidation. Other volatiles: gamma-terpinene, p-cymene. Proposed antimicrobial mechanisms: enzyme inhibition, efflux-pump inhibition, biofilm disruption, membrane damage.",
      sourceId: chemicalCompositionStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a small study, 14 adults with gut parasites found in stool tests took 600 mg of oregano oil a day for 6 weeks. One parasite (Entamoeba hartmanni) cleared in all 4 people who had it, another (Endolimax nana) cleared in the 1 person who had it, and a third (Blastocystis hominis) cleared in 8 of 11 people, with levels falling in 3 more. Digestive symptoms improved in 7 of the 11 people with Blastocystis. The study was small, had no comparison group and everyone knew what they were taking, so it is early evidence, not proof.\n\nTechnical detail: open-label, not blinded, not placebo-controlled; emulsified oil of Mediterranean oregano (Origanum vulgare).",
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
        "At the doses used in supplements, oregano can cause miscarriage. It should not be used as a supplement during pregnancy, or by women who could become pregnant and aren't using effective birth control.\n\nTechnical detail: abortifacient.",
    },
    {
      category: "ALLERGY" as const,
      description:
        "Rare allergic reactions have been reported. In one case, a 45-year-old man with asthma had a sudden whole-body allergic reaction (rash, swollen lips, noisy breathing and a drop in blood pressure that needed an epinephrine injection) after eating foods with oregano and then thyme. Tests showed he was allergic to several plants in the mint family (Lamiaceae). People allergic to other mint-family herbs may also react to oregano.\n\nTechnical detail: stridor, mild hypotension; positive skin-prick and in-vitro tests; cross-reactivity.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Oregano oil is usually well tolerated, but higher doses can cause stomach discomfort, heartburn, constipation or diarrhea, nausea and vomiting, dizziness and headache.",
    },
    {
      category: "TOXICITY" as const,
      description:
        "Although oregano is widely used in food and supplements, there are no published reports of oregano oil causing liver damage. The NIH's LiverTox database rates it as an unlikely cause of liver injury. However, there is little data from careful studies of people taking it.\n\nTechnical detail: no reports of serum aminotransferase elevations or clinically apparent liver injury; LiverTox hepatotoxicity likelihood score E; mechanism of any potential liver injury is unknown.",
    },
    {
      category: "DOSAGE" as const,
      description:
        "Oregano oil is not approved to treat any disease or medical condition in the United States. It is sold over the counter as a supplement, as capsules or oil. The usual recommended dose varies a lot, partly because products contain different amounts of essential oil.",
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
