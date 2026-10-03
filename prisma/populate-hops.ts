import { run } from "./lib/populate-herb";

// Hops (Humulus lupulus), from the European Medicines Agency's herbal monograph
// on hop strobile (2014) and its summary for the public (2016).

run({
  name: "Hops",
  profile: {
    family: "Cannabaceae",
    genus: "Humulus",
    species: "lupulus",
    partsUsed: "The cone-like female flowers (strobiles), dried, as a tea, powder, tincture or extract",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Humulus lupulus L., flos",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2014-05-06",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-humulus-lupulus-l-flos_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Hop", type: "COMMON_NAME" },
    { name: "Hop Strobile", type: "COMMON_NAME" },
    { name: "Lupuli Flos", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy for mild stress and to help sleep." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises hops as a traditional herbal medicine to relieve mild symptoms of mental stress and to help sleep, for adults and children over 12. This is based on long use, not on clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Hops may make you drowsy. If it affects you, don't drive or use machinery.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been established.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "Not recommended for children under 12. Don't use it if you're allergic to hops.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "For stress: a tea of 0.5 g of dried hops in a cup of boiling water, up to 4 times a day. For sleep: a tea of 0.5 to 1 g, 30 to 60 minutes before bed. See a doctor if symptoms last more than 2 weeks or get worse.\n\nTechnical detail: 500 mg comminuted herb in 150–200 ml boiling water; sleep dose 500–1000 mg. Other forms: powder 400 mg twice daily (adults) for stress or 800–2000 mg before bed; tincture (1:5) 1–2 ml up to 3 times daily; dry extract (4–5:1) 125–250 mg.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "occasional-sleeplessness", notes: "Recognised in Europe as a traditional remedy to help sleep. Based on long use, not clinical trials." },
    { slug: "stress", notes: "Recognised in Europe as a traditional remedy for mild symptoms of mental stress. Based on long use, not clinical trials." },
  ],
});
