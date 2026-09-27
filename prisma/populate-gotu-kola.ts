import { run } from "./lib/populate-herb";

// Gotu kola (Centella asiatica), from a verified source: Memorial Sloan
// Kettering's About Herbs entry (2022). Family per GBIF / Catalogue of Life. No
// source covering pregnancy or breastfeeding was used, so none is stated.

run({
  name: "Gotu Kola",
  profile: {
    family: "Apiaceae",
    genus: "Centella",
    species: "asiatica",
    nativeRange: "Common in East Asia and many parts of South Africa",
    partsUsed: "The leaves and whole plant",
  },
  sources: {
    mskcc: {
      title: "Gotu Kola",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2022-02-23",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/gotu-kola",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Gotukola", type: "COMMON_NAME" },
    { name: "Indian Pennywort", type: "COMMON_NAME" },
    { name: "Hydrocotyle asiatica", type: "SCIENTIFIC_SYNONYM" },
    { name: "Mandukaparni", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gotu kola is popular in traditional medicine. Extracts of the leaf and whole plant are used for poor vein circulation, varicose veins, wound healing, scleroderma and scars.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, gotu kola protected nerve cells, showed antioxidant activity and reduced inflammation. A compound from it (asiaticoside) helped wounds heal, and in mice with Alzheimer's-like disease a water extract prevented the buildup of harmful brain proteins.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A few human studies suggest:\n- It may reduce leg swelling and vein pressure in people with poor vein circulation.\n- It may help wounds heal, and improved symptoms in burn patients.\n- It may ease generalized anxiety disorder and improve thinking and mood in older people, but a meta-analysis didn't find strong enough evidence for thinking.\nA cream didn't prevent skin damage from radiation therapy. Larger, well-designed studies are needed.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Liver damage has been reported with gotu kola.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description: "Gotu kola can cause skin rashes (contact dermatitis).",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description: "In lab tests, gotu kola slowed liver enzymes that break down many medicines, which may increase their side effects. Whether this matters in people isn't known.",
      source: "mskcc",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Don't confuse gotu kola with kola nut: gotu kola contains no caffeine and hasn't been shown to be a stimulant. The amount of active compounds varies widely depending on where it's grown.",
      source: "mskcc",
    },
  ],
  symptoms: [
    { slug: "memory-and-thinking", notes: "A preliminary study suggests benefit, but a meta-analysis found the evidence isn't strong enough." },
    { slug: "anxiety", notes: "A small study suggests it may ease generalized anxiety disorder; larger studies are needed." },
    { slug: "liver-safety-warnings", notes: "Liver damage has been reported with gotu kola." },
  ],
});
