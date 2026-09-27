import { run } from "./lib/populate-herb";

// English plantain (Plantago lanceolata, ribwort plantain), from a verified
// source: the EU herbal monograph, Revision 1 (EMA/HMPC, 2025), which added
// minor skin inflammation as a traditional use. Family per GBIF / Catalogue of
// Life. No source reporting clinical studies was used, so none is stated.

run({
  name: "English Plantain",
  profile: {
    family: "Plantaginaceae",
    genus: "Plantago",
    species: "lanceolata",
    partsUsed: "The leaves",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Plantago lanceolata L., folium, Revision 1 (EMA/HMPC/887979/2022)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2025-07-09",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-plantaginis-lanceolatae-folium-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Ribwort Plantain", type: "COMMON_NAME" },
    { name: "Ribwort", type: "COMMON_NAME" },
    { name: "Narrowleaf Plantain", type: "COMMON_NAME" },
    { name: "Plantain", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "european-folk-medicine",
      notes: "Recognized in Europe as a traditional herbal medicine for sore throats, dry and cold-related coughs, and minor skin inflammation.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes plantain leaf as a traditional herbal medicine for:\n- Soothing irritation of the mouth and throat and the dry cough that goes with it\n- Relieving cough with a cold\n- Minor skin inflammation (used on the skin)",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Don't use it if you're allergic to plantain leaf or to ribwort plantain pollen.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects are known. See a doctor if you notice any.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "Plantain on the skin isn't recommended for children under 3. Taken by mouth, some forms aren't recommended under 3, 6 or 12, depending on the product. See a doctor if you get shortness of breath, fever or colored phlegm.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "Recognized in Europe in 2025 as a traditional medicine for minor skin inflammation." },
    { slug: "cough", notes: "Recognized in Europe as a traditional medicine for dry cough and cough with a cold." },
  ],
});
