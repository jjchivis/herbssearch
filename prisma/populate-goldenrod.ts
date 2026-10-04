import { run } from "./lib/populate-herb";

// Goldenrod (Solidago virgaurea, European goldenrod), from the European
// Medicines Agency's Community herbal monograph on goldenrod herb (2008).

run({
  name: "Goldenrod",
  profile: {
    family: "Asteraceae",
    genus: "Solidago",
    species: "virgaurea",
    partsUsed: "The flowering above-ground parts, as a tea, tincture or extract",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Solidago virgaurea L., herba",
      organization: "European Medicines Agency (EMEA), Committee on Herbal Medicinal Products",
      publicationDate: "2008-09-04",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-solidago-virgaurea-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "European Goldenrod", type: "COMMON_NAME" },
    { name: "Golden Rod", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy to increase urine flow in minor urinary complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises goldenrod as a traditional herbal medicine to increase the amount of urine, alongside treatment for minor urinary complaints, in adults and teenagers. This is based on long use alone. It's traditionally taken for 2 to 4 weeks.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use goldenrod if you're allergic to it or to other plants in the daisy family (Asteraceae), or if you've been told to drink less fluid because of severe heart or kidney disease. Don't take it with prescription water pills. Not recommended for children under 12.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "See a doctor if you get a fever, pain or difficulty when urinating, cramps or blood in your urine, or if symptoms don't improve. Drink enough fluids when taking extracts.\n\nTechnical detail: infusion 3–5 g, 2–4 times daily; liquid extract or tincture 0.5–2 ml, 3 times daily; dry extract 350–450 mg, 3 times daily.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Allergic reactions and stomach or gut upset may occur.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because there isn't enough data on its safety.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "urinary-tract-infections", notes: "Recognised in Europe as a traditional remedy to increase urine flow alongside treatment for minor urinary complaints. Based on long use, not trials." },
  ],
});
