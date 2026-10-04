import { run } from "./lib/populate-herb";

// Milky Oats (Avena sativa), from the European Medicines Agency's Community
// herbal monograph on oat herb (2008). The monograph covers the green above-ground
// parts harvested before flowering; "milky oats" usually means the unripe seed
// heads, which it doesn't cover separately.

run({
  name: "Milky Oats",
  profile: {
    family: "Poaceae",
    genus: "Avena",
    species: "sativa",
    partsUsed: "The green above-ground parts, harvested before flowering, fresh or dried, as a tea, extract or fresh juice",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Avena sativa L., herba",
      organization: "European Medicines Agency (EMEA), Committee on Herbal Medicinal Products",
      publicationDate: "2008-09-04",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-avena-sativa-l-herba_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Oat Herb", type: "COMMON_NAME" },
    { name: "Green Oats", type: "COMMON_NAME" },
    { name: "Milky Oat Tops", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Green oat herb is recognised in Europe as a traditional remedy for mild stress and to help sleep." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises oat herb, the green plant harvested before flowering, as a traditional herbal medicine for mild symptoms of mental stress and to help sleep, in adults and children over 12. This is based on long use alone, not on clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Oat herb may make you drowsy. If it does, don't drive or use machinery. No other side effects are known.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Take care if you have coeliac disease, because its protein content hasn't been measured. Not recommended for children under 12.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been established.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "As a tea, 3 g of dried herb; or up to 5 ml of liquid extract up to 3 times a day; or 10 ml of fresh juice 3–4 times a day. See a doctor if symptoms continue.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "Green oat herb is recognised in Europe as a traditional remedy for mild stress. Based on long use, not trials." },
    { slug: "occasional-sleeplessness", notes: "Green oat herb is recognised in Europe as a traditional remedy to help sleep. Based on long use, not trials." },
  ],
});
