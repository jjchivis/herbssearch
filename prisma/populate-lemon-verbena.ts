import { run } from "./lib/populate-herb";

// Lemon Verbena (Aloysia citrodora), from the European Union herbal monograph on
// lemon verbena leaf (EMA, 2021).

run({
  name: "Lemon Verbena",
  profile: {
    family: "Verbenaceae",
    genus: "Aloysia",
    species: "citrodora",
    partsUsed: "The dried leaves, as a herbal tea",
  },
  sources: {
    ema: {
      title: "European Union herbal monograph on Aloysia citrodora Paláu, folium (lemon verbena leaf)",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2021-01-13",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-aloysia-citrodora-palau-syn-aloysia-triphylla-lher-kuntze-verbena-triphylla-lher-lippia-citriodora-kunth-folium_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Lemon Verbena Leaf", type: "COMMON_NAME" },
    { name: "Aloysia triphylla", type: "SCIENTIFIC_SYNONYM" },
    { name: "Lippia citriodora", type: "SCIENTIFIC_SYNONYM" },
    { name: "Verveine Odorante", type: "REGIONAL_NAME", region: "France" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy for mild stress, sleep and mild digestive complaints." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises lemon verbena leaf tea as a traditional herbal medicine for teenagers and adults:\n- To relieve mild symptoms of mental stress\n- To help sleep\n- For mild digestive complaints, including bloating and gas\nThis is based on long use alone, not on clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Lemon verbena may make you drowsy. If it does, don't drive or use machinery. No other side effects are known.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description: "Don't use it if you're allergic to lemon verbena or other plants in the verbena family (Verbenaceae).",
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
        "Not recommended for children. As a tea:\n- For stress: 5 g of leaf boiled in 100 ml of water, 3 times a day\n- For sleep: 1–2 g in 200 ml of boiling water, half an hour before bed\n- For digestion: 2–3 g in 200 ml of boiling water, 1–3 times a day\nSee a doctor if symptoms last more than 2 weeks or get worse.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "Recognised in Europe as a traditional remedy for mild symptoms of mental stress. Based on long use, not trials." },
    { slug: "occasional-sleeplessness", notes: "Recognised in Europe as a traditional remedy to help sleep. Based on long use, not trials." },
    { slug: "bloating", notes: "Recognised in Europe as a traditional remedy for mild bloating and gas. Based on long use, not trials." },
  ],
});
