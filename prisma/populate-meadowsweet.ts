import { run } from "./lib/populate-herb";

// Meadowsweet (Filipendula ulmaria), from the EMA/HMPC Community herbal
// monographs on meadowsweet herb and meadowsweet flower (2011). Family per GBIF.

run({
  name: "Meadowsweet",
  profile: { family: "Rosaceae", genus: "Filipendula", species: "ulmaria", partsUsed: "The flowering tops and the flowers" },
  sources: {
    emaHerb: {
      title: "Community herbal monograph on Filipendula ulmaria (L.) Maxim., herba (EMA/HMPC/434881/2010)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-07-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-filipendula-ulmaria-l-maxim-herba-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    emaFlower: {
      title: "Community herbal monograph on Filipendula ulmaria (L.) Maxim., flos (EMA/HMPC/434894/2010)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-07-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-filipendula-ulmaria-l-maxim-flos-first-version_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Spiraea ulmaria", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for colds and minor joint pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes meadowsweet herb and flower as a traditional herbal medicine for adults:\n- Supportive treatment of the common cold\n- Relief of minor joint pain\nIt is taken as a tea, powder or tincture.",
      source: "emaHerb",
    },
    {
      category: "TRADITIONAL",
      summary: "The flowers alone are recognized for the same two uses, taken as a tea.",
      source: "emaFlower",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Don't use meadowsweet if you're allergic to salicylates, such as aspirin. Don't take it with aspirin or other NSAID pain relievers unless a doctor says it's OK.",
      source: "emaHerb",
    },
    {
      category: "DOSAGE",
      description: "Meadowsweet medicines are for adults only. For colds, see a doctor if symptoms last more than 7 days, or if fever goes above 39°C (102°F) or comes with a bad headache. For joint pain, don't use it for more than 4 weeks, and see a doctor for a sudden flare of arthritis.",
      source: "emaHerb",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been studied.",
      source: "emaHerb",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "Recognized in Europe as a traditional medicine to support treatment of the common cold." },
    { slug: "joint-discomfort", notes: "Recognized in Europe as a traditional medicine for minor joint pain." },
  ],
});
