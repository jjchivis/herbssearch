import { run } from "./lib/populate-herb";

// Astragalus (Astragalus membranaceus), from a verified source: NCCIH (2025).
// Family per GBIF / Catalogue of Life.

run({
  name: "Astragalus",
  profile: {
    family: "Fabaceae",
    genus: "Astragalus",
    species: "membranaceus",
    partsUsed: "The root",
  },
  sources: {
    nccih: {
      title: "Astragalus: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-05-01",
      url: "https://www.nccih.nih.gov/health/astragalus",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Huang Qi", type: "TRADITIONAL_NAME" },
    { name: "Milk Vetch", type: "COMMON_NAME" },
    { name: "Astragale", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "The root (huang qi) has been used for centuries, often combined with other herbs." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Astragalus root has been used in traditional Chinese medicine for centuries, often combined with other herbs. It is promoted for colds and other upper respiratory infections, hay fever, asthma, chronic fatigue, chronic kidney disease and diabetes, to strengthen the immune system, and on the skin for wound healing.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There isn't enough reliable evidence to know whether astragalus helps any health condition. Recent reviews found:\n- Added to metformin, it lowered blood sugar more than metformin alone in diabetes studies, though most were of poor quality.\n- It boosted immune responses and lowered inflammation markers, but the studies were small and varied.\n- Added to standard care, it improved some measures in kidney disorders.",
      source: "nccih",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description: "Astragalus may be safe by mouth. Up to 60 grams a day for up to 4 months doesn't seem to cause side effects.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description: "Avoid astragalus if you have an autoimmune disease, because it might worsen symptoms.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "Astragalus may interact with medicines that suppress the immune system.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "There's not enough information on its safety during pregnancy or breastfeeding, and animal research suggests it may harm an unborn baby.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "seasonal-immune-support",
      notes: "Promoted to strengthen the immune system; small studies suggest it boosts immune responses, but evidence isn't reliable enough to know if it helps.",
    },
  ],
});
