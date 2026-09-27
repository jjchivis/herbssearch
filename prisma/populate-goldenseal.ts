import { run } from "./lib/populate-herb";

// Goldenseal (Hydrastis canadensis), from verified sources: NCCIH (2025) and
// Memorial Sloan Kettering's About Herbs entry (2022). Family per GBIF /
// Catalogue of Life.

run({
  name: "Goldenseal",
  profile: {
    family: "Ranunculaceae",
    genus: "Hydrastis",
    species: "canadensis",
    nativeRange: "Native to the northeastern United States and southeastern Canada; wild plants have become scarce from heavy harvesting",
    partsUsed: "The root and bright yellow underground stem",
  },
  sources: {
    nccih: {
      title: "Goldenseal: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/goldenseal",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mskcc: {
      title: "Goldenseal",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2022-03-03",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/goldenseal",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Golden Seal", type: "COMMON_NAME" },
    { name: "Yellow Root", type: "COMMON_NAME" },
    { name: "Goldenroot", type: "COMMON_NAME" },
    { name: "Yellow Pucoon", type: "COMMON_NAME" },
    { name: "Eye Root", type: "COMMON_NAME" },
    { name: "Yellow Paint Root", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Berberine", slug: "berberine", type: "alkaloid" }],
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Used for digestive problems, wounds, skin and eye conditions, and cancer, and as a bitter tonic.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans used goldenseal on wounds and for skin and eye conditions, digestive problems and cancer. Today it is promoted for colds, upper respiratory infections, hay fever, diarrhea and constipation, and is often combined with echinacea.",
      source: "nccih",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, goldenseal and its compounds berberine and hydrastine killed bacteria and other microbes, slowed tumor growth, reduced inflammation and relaxed muscle. In the lab, goldenseal was the strongest of several herbs at stopping the stomach bacterium H. pylori. Long-term, very high doses harmed the liver and caused tumors in animals.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There isn't enough evidence to know whether goldenseal helps any health condition, because no rigorous studies have been done in people. Research on berberine for blood sugar and cholesterol may not apply, because very little berberine is absorbed when goldenseal is taken by mouth.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Although goldenseal has traditionally been used for skin and eye problems, there are no studies in people on these uses, and no evidence it helps the common cold.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Goldenseal changes how the body handles many medicines. In one study it lowered blood levels of the diabetes medicine metformin by about 25%, which could affect blood sugar control. It also affects liver enzymes that break down many common medicines. Talk with your doctor or pharmacist before using it.\n\nTechnical detail: inhibits CYP3A4 and affects CYP2D6 activity.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Goldenseal may increase the side effects of medicines broken down by certain liver enzymes, and may raise levels of the cancer medicine bosutinib.\n\nTechnical detail: CYP3A4 and CYP2D6 inhibition in healthy volunteers; CYP2C9 and CYP3A5 in lab studies; about 2-fold bosutinib exposure in simulations.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description:
        "Don't use goldenseal during pregnancy or breastfeeding, and never give it to babies: its compound berberine can harm newborns.",
      source: "nccih",
    },
    {
      category: "BREASTFEEDING",
      description: "Berberine in goldenseal may cause or worsen jaundice (yellowing of the skin) in newborns.",
      source: "mskcc",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Lab studies suggest goldenseal can make skin more sensitive to sunlight, which is more likely with products put on the skin than with supplements.",
      source: "mskcc",
    },
    {
      category: "DOSAGE",
      description:
        "In small studies, about 3 g a day for short periods caused no serious harm. Its long-term safety isn't known, and animal studies raised concerns, so avoid long-term use.",
      source: "nccih",
    },
    {
      category: "CONTAMINATION",
      description:
        "Some goldenseal products contain other herbs or ingredients instead of goldenseal, and berberine content varies widely. It's sometimes called \"turmeric root\" but is a different plant from turmeric.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes: "Used by Native Americans on wounds. There are no studies in people, and it may make skin more sensitive to sunlight.",
    },
    { slug: "skin-irritation", notes: "Traditionally used for skin and eye irritation. It hasn't been studied for this in people." },
  ],
});
