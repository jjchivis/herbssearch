import { run } from "./lib/populate-herb";

// Yarrow (Achillea millefolium), from the European Medicines Agency's summary of
// its herbal monograph on yarrow herb (2020).

run({
  name: "Yarrow",
  profile: {
    family: "Asteraceae",
    genus: "Achillea",
    species: "millefolium",
    partsUsed: "The flowering above-ground parts, as a tea, a liquid or tablet to take by mouth, or soaked dressings for the skin",
  },
  sources: {
    ema: {
      title: "Millefolii herba (yarrow herb): herbal medicinal product summary",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2020-12-03",
      url: "https://www.ema.europa.eu/en/medicines/herbal/millefolii-herba",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Milfoil", type: "COMMON_NAME" },
    { name: "Yarrow Herb", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy for appetite, digestion, period cramps and small wounds." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises yarrow as a traditional herbal medicine, based on long use, for:\n- Temporary loss of appetite\n- Mild digestive problems, including bloating and gas\n- Minor belly cramps during periods\n- Small, shallow wounds (put on the skin)",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Don't use yarrow if you're allergic to it or to other plants in the daisy family (Asteraceae). Allergic skin reactions have been reported.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description: "Only for adults and teenagers over 12.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "See a doctor if appetite or digestive problems last more than 2 weeks, or if period cramps or wounds don't improve within 1 week.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "loss-of-appetite", notes: "Recognised in Europe as a traditional remedy for temporary loss of appetite." },
    { slug: "indigestion", notes: "Recognised in Europe as a traditional remedy for mild digestive problems." },
    { slug: "bloating", notes: "Recognised in Europe as a traditional remedy for bloating and gas." },
    { slug: "menstrual-discomfort", notes: "Recognised in Europe as a traditional remedy for minor period cramps." },
    { slug: "wounds-and-burns", notes: "Recognised in Europe as a traditional remedy for small, shallow wounds." },
  ],
});
