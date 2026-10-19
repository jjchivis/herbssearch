import { run } from "./lib/populate-herb";

// Grape leaf / grapevine leaf (Vitis vinifera), from the EMA/HMPC public summary
// on grapevine leaf (EMA/381757/2017).

run({
  name: "Grape Leaf",
  profile: {
    family: "Vitaceae",
    genus: "Vitis",
    species: "vinifera",
    partsUsed: "The dried leaves, as a tea, tablets or capsules, or in creams and gels for the skin",
  },
  sources: {
    ema: {
      title: "Grapevine leaf (Vitis vinifera L., folium): summary for the public (EMA/381757/2017)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-01-03",
      url: "https://www.ema.europa.eu/en/medicines/herbal/vitis-viniferae-folium",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Grapevine Leaf", type: "COMMON_NAME" },
    { name: "Red Vine Leaf", type: "COMMON_NAME" },
    { name: "Vitis vinifera", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognized in Europe for long-term poor circulation in the leg veins, and traditionally for heavy legs, piles and fragile skin capillaries." },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The European Medicines Agency accepts grapevine leaf as a well-established medicine for long-term poor circulation in the leg veins (chronic venous insufficiency). This causes swollen legs, varicose veins, and heavy, painful, tired, itchy or cramping calves. Some clinical studies found it improved symptoms, including leg swelling. Treatment is usually for 12 weeks.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency also recognizes grapevine leaf as a traditional herbal medicine for adults:\n- To relieve discomfort and heaviness of the legs from minor vein circulation problems\n- To relieve itching and burning from piles (haemorrhoids), after a doctor has ruled out anything serious\n- For symptoms of fragile small blood vessels in the skin\nThis rests on at least 30 years of safe use, not on proof from clinical trials.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Reported side effects include allergic skin reactions (itching and redness), nausea, stomach and gut complaints, and headache. How often these happen isn't known.",
      source: "ema",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Grapevine leaf medicines are for adults only. See a doctor if symptoms last more than 2 weeks for leg circulation problems, or more than 1 week for piles or fragile skin capillaries.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "poor-circulation", notes: "Recognized in Europe as a well-established medicine for long-term poor circulation in the leg veins." },
  ],
});
