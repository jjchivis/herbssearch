import { run } from "./lib/populate-herb";

// Boldo (Peumus boldus), from the European Medicines Agency public summary
// (2017) and a 2025 lab study (Montaldo et al.). Family per GBIF.

run({
  name: "Boldo",
  profile: {
    family: "Monimiaceae",
    genus: "Peumus",
    species: "boldus",
    nativeRange: "Central Chile",
    partsUsed: "The leaves",
  },
  sources: {
    ema: {
      title: "Boldo leaf (Peumus boldus Molina, folium): summary for the public (EMA/810459/2016)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2017-03-09",
      url: "https://www.ema.europa.eu/en/medicines/herbal/boldi-folium",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    montaldo: {
      title: "Peumus boldus Extract Inhibits Lipid Accumulation in 3T3-L1 Adipocytes",
      author: "Montaldo L, Bendezu Meza L, De Marzi M, Guerra LN",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-05-02",
      doi: "10.3390/ijms26094326",
      pmid: "40362563",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12072887/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Boldine", slug: "boldine", type: "aporphine alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Europe, boldo leaf is a traditional herbal medicine for indigestion and mild gut cramps, usually as a tea. This is based on long-standing use (at least 30 years), not on clinical trials.",
      source: "ema",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a boldo extract reduced fat build-up in fat cells.\n\nTechnical detail: 3T3-L1 adipocytes.",
      source: "montaldo",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use boldo if you have a blocked bile duct, inflamed bile ducts (cholangitis), liver disease, gallstones or any other bile duct problem.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description: "Allergic reactions have been reported.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "Only for adults. See a doctor if your symptoms last longer than 2 weeks or get worse.",
      source: "ema",
    },
  ],
  preparations: [{ slug: "tea-infusion", notes: "Usually taken as an herbal tea.", source: "ema" }],
});
