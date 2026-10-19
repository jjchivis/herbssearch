import { run } from "./lib/populate-herb";

// Arnica (Arnica montana), from the EMA/HMPC public summary (EMA/654173/2016) and
// the Community herbal monograph on Arnica montana L., flos (EMA/HMPC/198793/2012).

run({
  name: "Arnica",
  profile: {
    family: "Asteraceae",
    genus: "Arnica",
    species: "montana",
    partsUsed: "The flower heads, made into tinctures, creams, gels and dressings for the skin",
  },
  sources: {
    ema: {
      title: "Arnica flower (Arnica montana L., flos): summary for the public (EMA/654173/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2016-12-02",
      url: "https://www.ema.europa.eu/en/medicines/herbal/arnicae-flos",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaMonograph: {
      title: "Community herbal monograph on Arnica montana L., flos (EMA/HMPC/198793/2012)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2014-05-06",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-arnica-montana-l-flos_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Arnica montana", type: "COMMON_NAME" },
    { name: "Leopard's Bane", type: "COMMON_NAME" },
    { name: "Mountain Arnica", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine, used on the skin for bruises, sprains and muscle pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes arnica flower preparations applied to the skin as a traditional herbal medicine for bruises, sprains and localised muscle pain, in adults and children 12 and over. This rests on at least 30 years of safe use, not on proof from clinical trials.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency looked at clinical studies of arnica in people with bruises and soft tissue or joint pain. Some suggested it might reduce pain and bruising, but no firm conclusions could be drawn because the studies were small and many had no comparison group.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Arnica medicines in Europe are only for use on the skin, as creams, gels, tinctures or soaked dressings. Don't use them on broken skin. See a doctor if symptoms last longer than 3 to 4 days or get worse.",
      source: "emaMonograph",
    },
    {
      category: "ALLERGY",
      description:
        "Arnica can cause allergic skin reactions such as itching, redness and eczema. Don't use it if you're allergic to arnica or other daisy-family plants.",
      source: "emaMonograph",
    },
    {
      category: "CONTRAINDICATION",
      description: "Not recommended for children under 12, because there isn't enough information on its use.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Its safety in pregnancy and breastfeeding hasn't been established, and use in pregnancy isn't recommended.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "sprains-and-bruises", notes: "Recognized in Europe as a traditional medicine applied to the skin for bruises and sprains. For use on unbroken skin only." },
  ],
});
