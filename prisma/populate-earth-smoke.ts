import { run } from "./lib/populate-herb";

// Earth Smoke (Fumaria officinalis, fumitory), from the EMA/HMPC European Union
// herbal monograph on fumitory herb (Revision 1, 2023). Family per GBIF.

run({
  name: "Earth Smoke",
  profile: { family: "Papaveraceae", genus: "Fumaria", species: "officinalis", partsUsed: "The flowering above-ground parts" },
  sources: {
    emaMonograph: {
      title: "European Union herbal monograph on Fumaria officinalis L., herba, Revision 1 (EMA/HMPC/367011/2021)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2023-05-12",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-fumaria-officinalis-l-herba-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Fumitory", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe as a traditional herbal medicine for indigestion." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes fumitory herb as a traditional herbal medicine for digestive complaints:\n- Feeling too full\n- Slow digestion\n- Gas\nIt is taken before meals as a tea, powder, extract, tincture or fresh plant juice.",
      source: "emaMonograph",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Because it may increase bile flow, don't use it if you have liver disease, gallstones, or a blocked or inflamed bile duct.",
      source: "emaMonograph",
    },
    {
      category: "DOSAGE",
      description: "The tea isn't recommended for children under 12, and other forms aren't recommended under 18. See a doctor if symptoms get worse or last more than 2 weeks.",
      source: "emaMonograph",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been studied.",
      source: "emaMonograph",
    },
  ],
  symptoms: [
    { slug: "indigestion", notes: "Recognized in Europe as a traditional medicine for fullness and slow digestion." },
    { slug: "bloating", notes: "Recognized in Europe as a traditional medicine for gas." },
  ],
});
