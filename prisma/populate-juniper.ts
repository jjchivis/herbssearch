import { run } from "./lib/populate-herb";

// Juniper (Juniperus communis), from the European Union herbal monograph on
// juniper berry (EMA/HMPC, revision adopted 15 March 2023). Family per GBIF.

run({
  name: "Juniper",
  profile: {
    family: "Cupressaceae",
    genus: "Juniperus",
    species: "communis",
    nativeRange: "Much of the Northern Hemisphere",
    partsUsed: "The ripe berries (cones)",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Juniperus communis L., galbulus (pseudo-fructus) (EMA/HMPC/241320/2021)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2023-03-15",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-juniperus-communis-l-pseudo-fructus-galbulus-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Juniper Berry", type: "COMMON_NAME" },
    { name: "Common Juniper", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Europe, juniper berry is a recognized traditional herbal medicine:\n- to increase urination and flush the urinary tract in minor urinary complaints\n- for indigestion and gas\nThis is based on long-standing use, not clinical trials. It's taken as a tea (2–2.5 g of crushed berries in 150 mL boiling water, 1–3 times a day) or as a liquid extract.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Not recommended with severe kidney disease, including kidney infections. See a doctor if you get a fever, pain or spasms when urinating, or blood in your urine. Not recommended if your doctor has told you to limit fluids.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been established.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description: "Not recommended for anyone under 18. See a doctor if symptoms last more than 2 weeks or get worse.",
      source: "ema",
    },
  ],
  preparations: [{ slug: "tea-infusion", notes: "2–2.5 g of crushed berries steeped in 150 mL of boiling water.", source: "ema" }],
});
