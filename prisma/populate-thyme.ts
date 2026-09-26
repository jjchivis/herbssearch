import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// Thyme, populated from four real, verified sources.
// Nothing here is invented — every claim traces to one of the four Source
// records below, each fetched and checked against the live page/article
// before being written here.
//
// Tier-1 source note: NCCIH has no dedicated thyme page (confirmed live:
// nccih.nih.gov/health/herbsataglance was fetched and its full 59-herb index
// does not include thyme). The EMA/HMPC "Thymi herba" traditional-use
// monograph (EMA/HMPC/342332/2013) is used instead, matching the pattern
// used for rosemary in this project.

async function main() {
  const thyme = await prisma.herb.findUniqueOrThrow({ where: { name: "Thyme" } });

  // --- botanical profile ---
  // Family/genus/species per GBIF Backbone Taxonomy (species match for
  // "Thymus vulgaris", status ACCEPTED, family Lamiaceae, genus Thymus) and
  // Kew POWO listing Thymus vulgaris L. as an accepted name in Lamiaceae.
  // partsUsed per the EMA/HMPC Thymi herba monograph, which covers the dried
  // leaf and flower / aerial parts ("herba") of Thymus vulgaris L. and
  // Thymus zygis L.
  await prisma.herb.update({
    where: { id: thyme.id },
    data: {
      family: "Lamiaceae",
      genus: "Thymus",
      species: "vulgaris",
      partsUsed: "The leaves and flowering tops, dried or fresh",
      contentStatus: "VERIFIED",
    },
  });

  // --- synonyms (no accepted scientific synonyms found on Kew POWO/GBIF for
  // Thymus vulgaris L.; only common names are recorded here) ---
  const synonyms: { name: string; type: "SCIENTIFIC_SYNONYM" | "COMMON_NAME"; }[] = [
    { name: "Common Thyme", type: "COMMON_NAME" },
    { name: "Garden Thyme", type: "COMMON_NAME" },
    { name: "German Thyme", type: "COMMON_NAME" },
  ];
  for (const syn of synonyms) {
    const existing = await prisma.herbSynonym.findFirst({
      where: { herbId: thyme.id, name: syn.name },
    });
    if (!existing) {
      await prisma.herbSynonym.create({
        data: { herbId: thyme.id, name: syn.name, type: syn.type },
      });
    }
  }

  // --- sources ---
  async function findOrCreateSource(url: string, data: Parameters<typeof prisma.source.create>[0]["data"]) {
    const existing = await prisma.source.findFirst({ where: { url } });
    if (existing) return existing;
    return prisma.source.create({ data });
  }

  // Tier 1 government/regulatory source. NCCIH has no dedicated thyme page
  // (confirmed live against the full "Herbs at a Glance" index), so the
  // EMA/HMPC traditional-use monograph is used instead, as with rosemary.
  const ema = await findOrCreateSource(
    "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-thymus-vulgaris-l-and-thymus-zygis-l-herba_en.pdf",
    {
      title: "Community herbal monograph on Thymus vulgaris L. and Thymus zygis L., herba",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: new Date("2013-11-12"),
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-thymus-vulgaris-l-and-thymus-zygis-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    }
  );

  // Peer-reviewed ethnopharmacology/phytochemistry/traditional-use review.
  const ethnopharmacologyReview = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8141878/",
    {
      title: "A systematic review on ethnopharmacology, phytochemistry and pharmacological aspects of Thymus vulgaris Linn.",
      author: "Patil SM, Ramu R, Shirahatti PS, Shivamallu C, Amachawadi RG",
      organization: "Heliyon",
      journal: "Heliyon",
      publicationDate: new Date("2021-05-18"),
      doi: "10.1016/j.heliyon.2021.e07054",
      pmid: "34041399",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8141878/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed primary research on thyme essential oil composition and
  // in vitro biological activity (antioxidant, antimicrobial, antibiofilm).
  const essentialOilStudy = await findOrCreateSource(
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8467294/",
    {
      title: "Thymus vulgaris Essential Oil and Its Biological Activity",
      author: "Galovicova L, Borotova P, Valkova V, Vukovic NL, Vukic M, Stefanikova J, Duranova H, Kowalczewski PL, Cmikova N, Kacaniova M",
      organization: "Plants (Basel)",
      journal: "Plants (Basel)",
      publicationDate: new Date("2021-09-17"),
      doi: "10.3390/plants10091959",
      pmid: "34579491",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8467294/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    }
  );

  // Peer-reviewed randomized, double-blind, placebo-controlled human trial.
  const bronchitisTrial = await findOrCreateSource(
    "https://pubmed.ncbi.nlm.nih.gov/17966760/",
    {
      title:
        "Evaluation of efficacy and tolerability of a fixed combination of dry extracts of thyme herb and primrose root in adults suffering from acute bronchitis with productive cough. A prospective, double-blind, placebo-controlled multicentre clinical trial",
      author: "Kemmerich B",
      organization: "Arzneimittelforschung",
      journal: "Arzneimittelforschung",
      publicationDate: new Date("2007-01-01"),
      doi: "10.1055/s-0031-1296656",
      pmid: "17966760",
      url: "https://pubmed.ncbi.nlm.nih.gov/17966760/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    }
  );

  // --- constituents (thymol already exists in the taxonomy seed; add
  // carvacrol and p-cymene, both documented as major thyme oil components
  // in the phytochemistry sources above) ---
  const thymol = await prisma.constituent.findUniqueOrThrow({ where: { slug: "thymol" } });
  const carvacrol = await prisma.constituent.upsert({
    where: { slug: "carvacrol" },
    update: {},
    create: { name: "Carvacrol", slug: "carvacrol", type: "volatile oil" },
  });
  const pCymene = await prisma.constituent.upsert({
    where: { slug: "p-cymene" },
    update: {},
    create: { name: "p-Cymene", slug: "p-cymene", type: "volatile oil" },
  });

  for (const constituentId of [thymol.id, carvacrol.id, pCymene.id]) {
    const existing = await prisma.herbConstituent.findFirst({
      where: { herbId: thyme.id, constituentId },
    });
    if (!existing) {
      await prisma.herbConstituent.create({
        data: { herbId: thyme.id, constituentId },
      });
    }
  }

  // --- tradition ---
  const mediterraneanFolkMedicine = await prisma.traditionSystem.findUniqueOrThrow({
    where: { slug: "mediterranean-folk-medicine" },
  });
  const existingTradition = await prisma.herbTradition.findFirst({
    where: { herbId: thyme.id, traditionId: mediterraneanFolkMedicine.id },
  });
  if (!existingTradition) {
    await prisma.herbTradition.create({
      data: {
        herbId: thyme.id,
        traditionId: mediterraneanFolkMedicine.id,
        notes:
          "Native to the Mediterranean region. The ancient Egyptians, Greeks and Romans used thyme for embalming, purification and disinfection. It has a long history of folk use across the Mediterranean and Europe for breathing problems, upset stomach, intestinal worms and minor wounds.",
      },
    });
  }

  // --- evidence, kept strictly separated by category ---
  const evidenceEntries = [
    {
      category: "TRADITIONAL" as const,
      summary:
        "Thyme's traditional use goes back to ancient Egypt, Greece and Rome, where it was used to heal wounds and disinfect (including burning bundles of it for purification), and for skin problems during plague outbreaks. Traditionally, it has been used for:\n- Breathing problems, including bronchitis, asthma, whooping cough and sore throat\n- Digestive complaints and intestinal worms\n- Rheumatic aches, applied to the skin or used as aromatherapy\n- Preserving food, because it helps fight germs\n\nTechnical detail: pharyngitis; ethnomedicinal use.",
      sourceId: ethnopharmacologyReview.id,
    },
    {
      category: "PRECLINICAL" as const,
      summary:
        "In lab tests, thyme essential oil (rich in thymol) showed strong antioxidant activity and slowed the growth of many bacteria and yeasts, including ones that form protective films (biofilms). It worked best against Bacillus subtilis, Enterococcus faecalis and Staphylococcus aureus. Thyme oil vapor also stopped mold on bread and bacteria on stored carrots, and disrupted the biofilms of Salmonella and Pseudomonas bacteria. These are lab and food-testing findings, not established effects in people.\n\nTechnical detail: Thymus vulgaris thymol chemotype: thymol 48.1%, p-cymene 11.7%, 1,8-cineole 6.7%, gamma-terpinene 6.1%, carvacrol 5.5%. DPPH assay 85.2% inhibition; inhibition zones 9.89–22.44 mm against gram-positive and gram-negative bacteria and yeasts; vapor-phase inhibition of Penicillium and Serratia marcescens; MALDI-TOF showed disrupted biofilm protein profiles in Salmonella Enteritidis and Pseudomonas fluorescens.",
      sourceId: essentialOilStudy.id,
    },
    {
      category: "HUMAN_RESEARCH" as const,
      summary:
        "In a trial of 361 adults with acute bronchitis and a wet (mucus-producing) cough, people took either tablets combining thyme and primrose root, or a placebo, three times a day for 11 days. On days 7–9, coughing fits dropped by about 67% with the thyme combination compared with about 51% with placebo. The thyme group reached half as many coughing fits about two days sooner, and more of them improved on a bronchitis severity score by the end (about 93% vs. 76%). Note that this tested thyme combined with primrose, not thyme alone.\n\nTechnical detail: prospective, double-blind, placebo-controlled, multicentre phase IV trial; 183 active vs. 178 placebo; 67.1% vs. 51.3%, p < 0.0001; Bronchitis Severity Score responder rate 92.9% vs. 75.8%, p < 0.0001.",
      sourceId: bronchitisTrial.id,
    },
  ];
  for (const entry of evidenceEntries) {
    const existing = await prisma.evidenceEntry.findFirst({
      where: { herbId: thyme.id, category: entry.category, sourceId: entry.sourceId },
    });
    if (!existing) {
      await prisma.evidenceEntry.create({ data: { herbId: thyme.id, ...entry } });
    }
  }

  // --- safety, all traced to the EMA/HMPC Thymi herba monograph ---
  const safetyRecords = [
    {
      category: "CONTRAINDICATION" as const,
      description: "Don't use thyme medicines if you are allergic to thyme or to other plants in the mint family (Lamiaceae).\n\nTechnical detail: Lamiaceae is also called Labiatae.",
    },
    {
      category: "DOSAGE" as const,
      description:
        "Most thyme medicines taken by mouth (tinctures, extracts, and the chopped herb as tea) are not recommended for children under 12, because there isn't enough data. For some liquid extracts, use in children under 4 is not recommended and you should get medical advice. See a doctor or qualified health professional if symptoms last more than a week, or if you get short of breath, have a fever, or cough up pus-like mucus.\n\nTechnical detail: dyspnoea, purulent sputum.",
    },
    {
      category: "ADVERSE_EFFECT" as const,
      description: "Stomach upset can happen; how often is not known. If you get any other side effects, see a doctor or qualified health professional.",
    },
    {
      category: "DRUG_INTERACTION" as const,
      description: "No interactions between thyme medicines and other medicines have been reported.",
    },
    {
      category: "PREGNANCY" as const,
      description: "Thyme has not been shown to be safe during pregnancy, so using it as a medicine while pregnant is not recommended. There is no data on fertility.",
    },
    {
      category: "BREASTFEEDING" as const,
      description: "Thyme has not been shown to be safe while breastfeeding, so using it as a medicine while breastfeeding is not recommended.",
    },
  ];
  for (const record of safetyRecords) {
    const existing = await prisma.safetyRecord.findFirst({
      where: { herbId: thyme.id, category: record.category, sourceId: ema.id },
    });
    if (!existing) {
      await prisma.safetyRecord.create({
        data: { herbId: thyme.id, sourceId: ema.id, ...record },
      });
    }
  }

  console.log("Thyme populated from 4 verified sources.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
