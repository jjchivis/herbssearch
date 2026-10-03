import { run } from "./lib/populate-herb";

// Marigold (Tagetes erecta, Mexican or African marigold, cempasúchil), from a
// 2018 review of Tagetes species in traditional medicine and research
// (Salehi et al.). Not to be confused with calendula (pot marigold).

run({
  name: "Marigold",
  profile: {
    family: "Asteraceae",
    genus: "Tagetes",
    species: "erecta",
    nativeRange: "Mexico; now grown worldwide as an ornamental and for its color",
    partsUsed: "The flowers, leaves and other above-ground parts, as teas, syrups, ointments and baths",
  },
  sources: {
    salehi: {
      title: "Tagetes spp. Essential Oils and Other Extracts: Chemical Characterization and Biological Activity",
      author: "Salehi B, Valussi M, Morais-Braga MFB, et al.",
      journal: "Molecules",
      publicationDate: "2018-11-01",
      doi: "10.3390/molecules23112847",
      pmid: "30388858",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6278309/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mexican Marigold", type: "COMMON_NAME" },
    { name: "African Marigold", type: "COMMON_NAME" },
    { name: "Cempasúchil", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Cempazuchitl", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Mexico and Guatemala, marigold has been used for:\n- Stomach complaints such as indigestion, constipation and diarrhea in children\n- Breathing problems such as pneumonia and asthma\n- Colic, headache and parasites\n- Wounds\nThe flowers are drunk as a tea for flu, fever, body aches, rashes and sore throat.",
      source: "salehi",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Elsewhere:\n- In India, the flowers are used on skin sores, wounds, burns, eczema and boils, and for earache, piles and muscle pain\n- On Rodrigues Island, a tea of three flowers a day is drunk for fever\n- In Madagascar, it's considered a remedy for malaria",
      source: "salehi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab research, marigold compounds have shown antioxidant activity and may help reduce inflammation. Marigold flowers are a major source of lutein, a natural yellow pigment approved by the UN Food and Agriculture Organization and the European Union that can be used to color food.\n\nTechnical detail: dried flowers contain 0.1–0.2% carotenoids, about 80% of them lutein diesters; flavonols include quercetagetin glycosides and patuletin.",
      source: "salehi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "There's no toxicity information on marigold extracts, whether raw or partly purified. The roots may contain substances that react with sunlight, though reports disagree.\n\nTechnical detail: α-terthienyl (a phototoxic thiophene) reported in T. erecta roots.",
      source: "salehi",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "Marigold flower tea is traditionally drunk for fever in Mexico, Guatemala and Rodrigues Island. Not studied in people." },
    { slug: "seasonal-immune-support", notes: "Marigold flower tea is traditionally drunk for flu and sore throat in Mexico and Guatemala. Not studied in people." },
    { slug: "wounds-and-burns", notes: "Traditionally put on sores, wounds and burns in India and Guatemala. Not studied in people." },
  ],
});
