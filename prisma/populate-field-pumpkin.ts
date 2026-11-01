import { run } from "./lib/populate-herb";

// Field Pumpkin (Cucurbita pepo), from the EMA herbal monograph on pumpkin
// seed, the Native American Ethnobotany Database (Moerman, BRIT), a 2026
// review of Cucurbita compounds (Kolarš et al.) and a 2025 study of pumpkin
// seed extracts (Grasu et al.). Family per GBIF.

run({
  name: "Field Pumpkin",
  profile: {
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "pepo",
    nativeRange: "North America",
    partsUsed: "The seeds, seed oil, flesh and flowers",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Cucurbita pepo L., semen (EMA/HMPC/136024/2010)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2013-03-25",
      url: "https://www.ema.europa.eu/en/medicines/herbal/cucurbitae-semen",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    naeb: {
      title: "Native American Ethnobotany Database: Cucurbita pepo",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Cucurbita+pepo",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    kolars: {
      title: "Bioactive Compounds from Cucurbita spp. and Their Processing By-Products: A Critical Review",
      author: "Kolarš B, Minaković I, Bosanac M, et al.",
      journal: "Metabolites",
      publicationDate: "2026-10-08",
      doi: "10.3390/metabo16100754",
      pmid: "42941229",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13707147/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    grasu: {
      title: "Profiling Hydrophilic Cucurbita pepo Seed Extracts: A Study of European Cultivar Variability",
      author: "Grasu AE, Senn R, Halbsguth C, Schenk A, Butterweck V, Miron A",
      journal: "Plants",
      publicationDate: "2025-07-26",
      doi: "10.3390/plants14152308",
      pmid: "40805657",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12348540/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pumpkin", type: "COMMON_NAME" },
    { name: "Pumpkin Seed", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Pumpkin seed is an EU traditional herbal medicine for urinary symptoms." },
    { slug: "native-american-ethnobotany", notes: "Seeds used by the Cherokee, Iroquois and Menominee for urinary problems and worms." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes pumpkin seed as a traditional herbal medicine to relieve urinary symptoms from an enlarged prostate or an overactive bladder, once a doctor has ruled out serious conditions. It can be used long term.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The Menominee drank ground seeds in water to ease the passage of urine, the Iroquois gave a seed tea to children who weren't urinating enough, and the Cherokee ate browned seeds for bedwetting and the seeds for worms.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Native peoples ate the flesh fresh, roasted, dried in strips and baked into breads and puddings, and the Apache ate the blossoms. The Pima used a ground seed paste to clean and soften the skin.",
      source: "naeb",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Human research on pumpkin products is strongest for urinary symptoms, and results depend on the exact preparation. Evidence for blood sugar and other effects is limited or inconsistent.",
      source: "kolars",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Seed extracts vary a lot between pumpkin varieties. The European Pharmacopoeia recommends the Styrian oil pumpkin (Cucurbita pepo var. styriaca), but several other varieties had similar compounds.",
      source: "grasu",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Mild stomach upset is common, affecting about 4% of people. No interactions with medicines and no overdoses have been reported.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description:
        "Pumpkin seed medicines aren't recommended during pregnancy or breastfeeding because their safety hasn't been established, though eating pumpkin seeds and oil as food hasn't raised concerns about birth defects.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Not recommended for people under 18. See a doctor if urinary symptoms get worse or if fever, spasms, blood in the urine, painful urination or trouble passing urine occur.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "EU monograph doses for adults: 2.5 to 7.5 g of seed twice a day, or 1 to 1.2 g of seed oil three times a day.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "enlarged-prostate",
      notes: "An EU traditional herbal medicine for urinary symptoms from an enlarged prostate; human evidence depends on the preparation.",
    },
    { slug: "urinary", notes: "Used in Europe and by Native Americans for urinary problems, including an overactive bladder." },
    { slug: "sibo-and-parasites", notes: "The Cherokee ate the seeds for worms. Not studied in people." },
  ],
  preparations: [{ slug: "oil", notes: "Seed oil, 1 to 1.2 g three times a day in the EU monograph.", source: "ema" }],
});
