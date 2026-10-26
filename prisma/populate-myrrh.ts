import { run } from "./lib/populate-herb";

// Myrrh (Commiphora myrrha, listed by the EMA as Commiphora molmol), from the
// European Medicines Agency public summary (2019). Family per GBIF.

run({
  name: "Myrrh",
  profile: {
    family: "Burseraceae",
    genus: "Commiphora",
    species: "myrrha",
    nativeRange: "Northeastern Africa and the Arabian Peninsula",
    partsUsed: "The gum resin that seeps from the bark",
  },
  sources: {
    ema: {
      title: "Myrrh: summary for the public (EMA/164109/2019)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2019-08-23",
      url: "https://www.ema.europa.eu/en/medicines/herbal/myrrha",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [{ name: "Commiphora molmol", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Europe, liquid myrrh preparations (made with alcohol) are recognized traditional remedies for:\n- minor mouth ulcers and inflammation in the mouth\n- minor wounds and small boils\nThey're put on the skin or inside the mouth. This is based on long-standing use (at least 30 years), not on clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Allergic skin reactions have been reported.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "The alcohol in liquid myrrh can briefly sting or irritate the skin or the inside of the mouth.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "Only for adults and children over 12. See a doctor if symptoms last more than a week or get worse.",
      source: "ema",
    },
  ],
});
