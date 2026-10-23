import { run } from "./lib/populate-herb";

// Witch hazel (Hamamelis virginiana), from the Community herbal monograph on
// Hamamelis virginiana L., folium (EMA/HMPC/114586/2008).

run({
  name: "Witch Hazel",
  profile: {
    family: "Hamamelidaceae",
    genus: "Hamamelis",
    species: "virginiana",
    partsUsed: "The leaves, as creams, liquids, dressings, suppositories and gargles",
  },
  sources: {
    emaMonograph: {
      title: "Community herbal monograph on Hamamelis virginiana L., folium (EMA/HMPC/114586/2008)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2009-11-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-hamamelis-virginiana-l-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Hamamelis", type: "COMMON_NAME" },
    { name: "Hamamelis virginiana", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for minor skin inflammation, itchy piles and mouth inflammation." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes witch hazel leaf as a traditional herbal medicine:\n- On the skin, for minor skin inflammation and dry skin (age 6 and up)\n- For itching and burning from piles (haemorrhoids), as creams, dressings or suppositories (adults only)\n- As a mouthwash or gargle for minor inflammation inside the mouth (age 12 and up)\nThis rests on long-standing use, not on proof from clinical trials.",
      source: "emaMonograph",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Allergic skin rashes (contact dermatitis) have been reported. How often isn't known. Don't use it if you're allergic to witch hazel.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "If you have bleeding from the back passage, see a doctor. See a doctor too if symptoms get worse or don't go away. Some witch hazel liquids contain alcohol.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Its safety in pregnancy and breastfeeding hasn't been established.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "Recognized in Europe as a traditional medicine for minor skin inflammation and dry skin." },
    { slug: "sore-throat", notes: "Recognized in Europe as a traditional mouthwash and gargle for minor inflammation in the mouth." },
  ],
});
