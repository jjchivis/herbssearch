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
        "Native to Algeria, Greece, Morocco and the northwestern Balkans; now grown and growing wild around the world",
      partsUsed:
        "Mainly the fresh or dried leaves and the dried root, used in cooking and as medicine. The seeds (botanically small fruits) and their concentrated essential oil have a separate history of medicinal use, including to cause miscarriage, and carry their own serious safety concerns.",
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
        "A major natural compound in the essential oil of parsley leaf and seed. In concentrated form (for example parsley seed essential oil), it damages the nerves, liver and kidneys. It has been used, and is still misused, to cause miscarriage, and has caused deaths and organ damage in mothers at high doses.\n\nTechnical detail: neurotoxic, hepatotoxic, nephrotoxic; abortifacient.",
    },
  });
  const myristicin = await prisma.constituent.upsert({
    where: { slug: "myristicin" },
    update: {},
    create: {
      name: "Myristicin",
      slug: "myristicin",
      type: "volatile oil",
      description: "A major natural compound in the essential oil of parsley leaf and seed, along with apiol.",
    },
  });
  const bergapten = await prisma.constituent.upsert({
    where: { slug: "bergapten" },
    update: {},
    create: {
      name: "Bergapten",
      slug: "bergapten",
      type: "furanocoumarin",
      description: "A natural compound in parsley (a furanocoumarin) that can cause a skin rash when the skin is then exposed to sunlight.\n\nTechnical detail: 5-methoxypsoralen; photocontact dermatitis.",
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
        "Native to the central and eastern Mediterranean (Algeria, Greece, Morocco and the northwestern Balkans, according to Kew). The ancient Greeks and Romans used it for urinary complaints and to prevent kidney stones, and its medical use is recorded as far back as the Ebers Papyrus, an ancient Egyptian medical text.",
    },
    {
      traditionId: europeanFolkMedicine.id,
      notes:
        "In European herbal medicine, parsley has long been used to flush the urinary tract, increase urination, and prevent or treat kidney gravel (small kidney stones). Germany's Commission E formally recognized this use for parsley leaf and root on March 2, 1989.\n\nTechnical detail: diuretic.",
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
        "Germany's Commission E, an official expert panel on herbal medicines, recognizes parsley leaf and root for flushing the urinary tract and for preventing and treating kidney gravel (small kidney stones). This reflects long-standing European use rather than clinical trials.",
      sourceId: commissionE.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "In traditional and folk medicine, parsley has been used to relieve gas, strengthen the stomach, increase urination, fight urinary infections, prevent kidney stones, counter poisons and reduce inflammation. It has also been used for missing or painful periods, digestive problems, high blood pressure, heart disease, urinary disease, ear infections, sniffles, diabetes and various skin conditions.\n\nTechnical detail: carminative, gastric tonic, diuretic, urinary-tract antiseptic, anti-urolithiasis, antidote; amenorrhea, dysmenorrhea, otitis.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "TRADITIONAL" as const,
      summary:
        "The ancient Greeks and Romans used parsley for urinary infections and to prevent kidney stones, and its medical use is also recorded in the Ebers Papyrus, an ancient Egyptian medical text. A research review also notes its traditional use in Chinese and Ayurvedic medicine for high blood pressure and inflammation.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In several rodent studies, parsley extracts reduced oxidative stress (a type of cell damage) and helped protect the kidneys, including from reduced blood flow, damage caused by drugs, and kidney problems linked to high uric acid. These are animal findings, not established effects in people.\n\nTechnical detail: ischemia/reperfusion injury, drug-induced nephrotoxicity, hyperuricemia-induced renal dysfunction; improved renal biomarkers.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "A research review lists many effects of parsley extracts and compounds in lab and animal studies:\n- Antioxidant activity\n- Protecting the liver, brain and stomach\n- Lowering blood sugar and blood pressure\n- Relieving pain and cramps\n- Calming the immune system and making blood less likely to clot\n- Acting as a laxative, increasing urination and estrogen-like effects\n- Fighting bacteria and fungi These are lab and animal findings, not established effects in people.\n\nTechnical detail: hepatoprotective, anti-diabetic, analgesic, spasmolytic, immunosuppressant, anti-platelet, gastroprotective, cytoprotective, laxative, estrogenic, diuretic, hypotensive, antibacterial, antifungal.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "Studies in people have had mixed results:\n- Eating parsley increased the antioxidant activity of certain body enzymes (Nielsen et al., 1999).\n- Obese women who ate bread with added parsley seed had better kidney health markers (Essa et al., 2024).\n- Another study found no difference in urine measurements compared with a control group (Alyami and Rabah, 2011).\nOverall, the review describes the evidence for parsley's effects on the kidneys in people as limited and mixed.\n\nTechnical detail: Nielsen et al. also documented increased urinary apigenin excretion.",
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
        "The serious safety concerns about parsley, including miscarriage, apply mainly to concentrated seed extracts and pure essential oil, which are rich in a compound called apiol. Normal cooking with fresh or dried parsley leaf involves much smaller amounts. Commission E itself warns that \"the essential oil should not be used in isolation because of its toxicity.\"",
      sourceId: commissionE.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Commission E says parsley leaf and root medicines should not be used during pregnancy. Separately, concentrated parsley products and apiol-rich essential oil have a history of being used to cause miscarriage (especially in South America and Italy), which sometimes ended in death from severe bleeding. In pregnant rabbits, oral doses of 5–14 g caused severe bleeding and miscarriage.\n\nTechnical detail: abortifacient; apiole.",
      sourceId: commissionE.id,
    },
    {
      category: "PREGNANCY" as const,
      description:
        "Apiol seems to cause miscarriage mainly at doses that also damage the mother's liver, partly by causing bleeding in the placenta. Because no safe level has been established for people, the review authors recommend avoiding apiol-rich parsley oil in any form throughout pregnancy and breastfeeding.\n\nTechnical detail: maternally hepatotoxic doses; indirect induction of placental hemorrhage.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "BREASTFEEDING" as const,
      description:
        "Apiol-rich parsley essential oil and concentrated parsley products should be avoided while breastfeeding as well as during pregnancy, because no safe level has been established for people.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "CONTRAINDICATION" as const,
      description:
        "Don't use parsley medicines if you have an inflammatory kidney condition. Parsley flushing therapy should not be used for swelling (edema) caused by heart or kidney problems, and it requires drinking large amounts of fluid at the same time.",
      sourceId: commissionE.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description: "Allergic reactions of the skin or the lining of the mouth and nose have occasionally been reported.",
      sourceId: commissionE.id,
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description:
        "Bergapten, a natural compound in parsley, can cause a skin rash when the skin is then exposed to sunlight.\n\nTechnical detail: 5-methoxypsoralen, a furanocoumarin; photocontact dermatitis.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "TOXICITY" as const,
      description:
        "In large amounts, apiol (a major compound in parsley essential oil) damages the nerves, liver and kidneys, and has caused deaths in the past. Signs of poisoning include confusion, vision problems, dizziness, ringing in the ears, clumsiness, headache and loss of balance, and at higher doses seizures, paralysis and death. In mice, a single dose of the oil killed all the animals within 60 hours from liver and kidney damage.\n\nTechnical detail: neurotoxic, hepatotoxic, nephrotoxic; vertigo, tinnitus, ataxia; mouse gavage dose 10 mL/kg.",
      sourceId: reproductiveToxicityReview.id,
    },
    {
      category: "DRUG_INTERACTION" as const,
      description:
        "In one reported case, a transplant patient who ate large amounts of parsley had higher blood levels of the anti-rejection medicine sirolimus. Parsley may have slowed a liver enzyme that breaks down many medicines.\n\nTechnical detail: possible CYP3A4 inhibition.",
      sourceId: renalHealthReview.id,
    },
    {
      category: "DOSAGE" as const,
      description:
        "Daily amount referenced by Commission E (unless a professional advises otherwise): 6 g of prepared parsley leaf or root, crushed for tea or used in other preparations that contain only a small amount of essential oil, taken by mouth. For flushing therapy, you must drink large amounts of fluid at the same time.\n\nTechnical detail: galenical preparations.",
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
