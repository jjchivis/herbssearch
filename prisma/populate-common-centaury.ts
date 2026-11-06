import { run } from "./lib/populate-herb";

// Common Centaury (Centaurium erythraea), from the European Medicines Agency
// herbal monograph and public summary, and a 2021 review of its uses and
// pharmacology (El Menyiy et al.). Family per GBIF.

run({
  name: "Common Centaury",
  profile: { family: "Gentianaceae", genus: "Centaurium", species: "erythraea", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The flowering aerial parts" },
  sources: {
    ema: {
      title: "Centaurii herba (Centaury): European Union herbal monograph and summary for the public",
      organization: "European Medicines Agency (HMPC)",
      publicationDate: "2016-02-10",
      url: "https://www.ema.europa.eu/en/medicines/herbal/centaurii-herba",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    elmenyiy: {
      title: "Phytochemical properties, biological activities and medicinal use of Centaurium erythraea Rafn.",
      author: "El Menyiy N, Guaouguaou FE, El Baaboua A, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-08-10",
      doi: "10.1016/j.jep.2021.114171",
      pmid: "33940085",
      url: "https://doi.org/10.1016/j.jep.2021.114171",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Centaury", type: "COMMON_NAME" },
    { name: "Centaurii herba", type: "COMMON_NAME" },
    { name: "Centaurium umbellatum", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The European Medicines Agency recognizes centaury, based on long-standing use, as a traditional herbal medicine for mild indigestion and other stomach and gut complaints, and for temporary loss of appetite. It's taken as a tea, tincture or extract.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary: "A bitter pink-flowered herb used in folk medicine in Morocco, Algeria, southern Europe and the Balkans for digestive complaints, loss of appetite, hemorrhoids and to increase urine.",
      source: "elmenyiy",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "There are no clinical trials of centaury; lab studies suggest it stimulates appetite and digestion.",
      source: "ema",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "Don't take centaury if you have a stomach ulcer. It's for adults only; see a doctor if symptoms last more than 2 weeks.",
      source: "ema",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "No side effects had been reported when the European Medicines Agency assessed it.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "loss-of-appetite", notes: "Recognized by the European Medicines Agency as a traditional remedy for temporary loss of appetite." },
    { slug: "indigestion", notes: "Recognized by the European Medicines Agency as a traditional remedy for mild indigestion." },
  ],
});
