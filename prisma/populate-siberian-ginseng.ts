import { run } from "./lib/populate-herb";

// Siberian Ginseng (Eleutherococcus senticosus, eleuthero), from the EMA
// summary on eleutherococcus root. Family per GBIF.

run({
  name: "Siberian Ginseng",
  profile: {
    family: "Araliaceae",
    genus: "Eleutherococcus",
    species: "senticosus",
    nativeRange: "Northeast Asia, including Siberia, China, Korea and Japan",
    partsUsed: "The root",
  },
  sources: {
    ema: {
      title: "Eleutherococcus root (Eleutherococci radix): summary for the public (EMA/283374/2014)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-02-10",
      url: "https://www.ema.europa.eu/en/medicines/herbal/eleutherococci-radix",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Eleuthero", type: "COMMON_NAME" }, { name: "Eleutherococcus", type: "COMMON_NAME" }],
  traditions: [{ slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional medicine for tiredness and weakness." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes Siberian ginseng root as a traditional herbal medicine to relieve tiredness and weakness, for adults and children over 12, for no more than 2 months.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Many clinical studies have tested it. They suggested a possible effect on tiredness and weakness, but flaws in their design stopped any firm conclusions.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "Don't take it for more than 2 months, and see a doctor if symptoms last more than 2 weeks of use. It isn't for children under 12.",
      source: "ema",
    },
  ],
});
