import { run } from "./lib/populate-herb";

// Black cohosh (Actaea racemosa), from verified sources: NCCIH, the EMA/HMPC
// public summary (2018) and a Cochrane review for menopausal symptoms (Leach &
// Moore 2012). Family per GBIF / Catalogue of Life. No illustration was
// supplied for this herb.

run({
  name: "Black Cohosh",
  profile: {
    family: "Ranunculaceae",
    genus: "Actaea",
    species: "racemosa",
    partsUsed: "The root and rhizome (underground stem)",
  },
  sources: {
    nccih: {
      title: "Black Cohosh: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/black-cohosh",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    ema: {
      title: "Black cohosh (Cimicifuga racemosa (L.) Nutt., rhizoma): summary of the HMPC conclusions (EMA/265439/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-06-05",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/black-cohosh-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Black cohosh (Cimicifuga spp.) for menopausal symptoms",
      author: "Leach MJ, Moore V",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane Database of Systematic Reviews",
      publicationDate: "2012-09-01",
      doi: "10.1002/14651858.CD007244.pub2",
      pmid: "22972105",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6599854/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Cimicifuga racemosa", type: "SCIENTIFIC_SYNONYM" },
    { name: "Black Snakeroot", type: "COMMON_NAME" },
    { name: "Bugbane", type: "COMMON_NAME" },
    { name: "Rattleweed", type: "COMMON_NAME" },
    { name: "Macrotys", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used by Native Americans for kidney problems, malaria, sore throat and menstrual cramps.",
    },
    {
      slug: "european-folk-medicine",
      notes: "Used as a medicine in Germany since the late 1800s. The European Medicines Agency recognizes it for menopausal hot flushes and heavy sweating.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans used black cohosh for kidney problems, malaria, sore throat and menstrual cramps. It has been used as a medicine in Germany since the late 19th century.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Based on around 20 clinical studies with more than 6,000 patients, the European Medicines Agency concluded that black cohosh extracts can treat menopausal complaints such as hot flushes and heavy sweating.\n\nTechnical detail: \"well-established use\" for dry extracts.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review found black cohosh products may help overall menopause symptoms, improving hot flashes but not anxiety or depression. It's unclear whether it helps hot flashes caused by breast cancer treatment, and there isn't enough data for other uses.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2012 Cochrane review of 16 trials with 2,027 women found black cohosh didn't reduce hot flashes or menopause symptom scores more than placebo, and hormone therapy worked better. Because the quality of the trials was unclear, the reviewers concluded there isn't enough evidence to support black cohosh for menopause symptoms, though more research is justified.\n\nTechnical detail: median dose 40 mg/day for a mean of 23 weeks; hot flushes MD 0.07 per day (95% CI −0.43 to 0.56), 3 trials, 393 women; symptom scores SMD −0.10 (95% CI −0.32 to 0.11), 4 trials.",
      source: "cochrane",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Cases of liver damage have been reported in people taking black cohosh, though it's not certain black cohosh caused them. Watch for signs such as dark urine and tiredness.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description:
        "Stop taking black cohosh and see a doctor straight away if you get signs of liver problems: tiredness, loss of appetite, yellow skin or eyes, severe upper stomach pain with nausea and vomiting, or dark urine.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Other side effects include allergic skin reactions (rash, itching), swelling of the face, hands or feet, indigestion and diarrhea.",
      source: "ema",
    },
    {
      category: "CONTAMINATION",
      description:
        "Some black cohosh products have contained the wrong herb or ingredients not listed on the label. Blue cohosh is a different herb that may cause serious side effects.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Black cohosh may interact with some medicines. Check with your health care provider before using it.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description: "Its safety is uncertain for people with hormone-sensitive cancers, such as some breast cancers, and during pregnancy or breastfeeding.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "Black cohosh medicines are for adult women. Don't take them for more than 6 months without talking to a doctor.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "menopause-symptoms",
      notes: "Recognized in Europe for hot flushes and sweating, but a Cochrane review found too little evidence. Watch for liver warning signs.",
    },
    { slug: "menstrual-discomfort", notes: "Traditionally used by Native Americans for menstrual cramps." },
  ],
});
