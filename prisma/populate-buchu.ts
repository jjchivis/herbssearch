import { run } from "./lib/populate-herb";

// Buchu (Agathosma betulina), from a 2026 study of its leaf chemistry
// (Mnisi et al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Buchu",
  profile: {
    family: "Rutaceae",
    genus: "Agathosma",
    species: "betulina",
    nativeRange: "The mountains of the Western Cape, South Africa",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    mnisi: {
      title: "Geographic Influence on Secondary Metabolite Profiles in Leaves of the Endemic Agathosma betulina (P.J. Bergius) Pillans. in the Western Cape Province, South Africa",
      author: "Mnisi NH, Gunununu RP, Dukashe L, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-16",
      doi: "10.3390/ijms27104486",
      pmid: "42196464",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13206881/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Round-Leaf Buchu", type: "COMMON_NAME" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "A long-standing South African household remedy." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Buchu has long been a household remedy in South Africa for various ailments. Its essential oil is also used in cosmetics and medicines.",
      source: "mnisi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Buchu leaves contain phenolic acids, flavonoids, saponins and terpenoids. The amounts differ a lot depending on where the plant grows.",
      source: "mnisi",
    },
  ],
});
