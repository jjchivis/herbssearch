import { run } from "./lib/populate-herb";

// Stinkingtoe (Hymenaea courbaril, jatobá, West Indian locust), from a 2025
// review (Coelho Gonçalves et al.) and a 2025 lab and mouse study of its pod
// coat (Polo et al.). No human studies were found. Family per GBIF.

run({
  name: "Stinkingtoe",
  profile: {
    family: "Fabaceae",
    genus: "Hymenaea",
    species: "courbaril",
    nativeRange: "Tropical Central and South America and the Caribbean",
    partsUsed: "The fruit pulp, bark, leaves and resin",
  },
  sources: {
    coelho: {
      title: "Chemical and Biological Properties of Hymenaea courbaril L.: A Review",
      author: "Coelho Gonçalves CA, de Oliveira Souza GG, Fernandes Duarte AM, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2025-12-19",
      doi: "10.1002/cbdv.202503154",
      pmid: "41417545",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12860520/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    polo: {
      title: "Inhibitory Effects of Aqueous and Hydroalcoholic Extracts from Jatobá Coat (Hymenaea courbaril L.) on Pancreatic Amylase and Starch Absorption",
      author: "Polo AC, Uber TM, Souza GH, et al.",
      journal: "Plants",
      publicationDate: "2025-04-05",
      doi: "10.3390/plants14071133",
      pmid: "40219199",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11991579/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jatobá", type: "COMMON_NAME" },
    { name: "West Indian Locust", type: "COMMON_NAME" },
    { name: "Courbaril", type: "COMMON_NAME" },
  ],
  traditions: [{ slug: "caribbean-folk-medicine", notes: "A tropical American tree whose fruit is eaten and whose parts are used as medicine." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native peoples have long used stinkingtoe for food, medicine and its tough wood. Its pods hold an edible, powdery pulp. In Brazilian traditional medicine it's used for wounds, inflammation, infections, rheumatism, anemia, coughs, bronchitis, stomach problems and prostate problems.",
      source: "coelho",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, extracts fought bacteria, fungi and viruses, calmed inflammation, acted as antioxidants and relaxed muscle. Animal tests found it has low toxicity.",
      source: "coelho",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests and in mice, extracts of the pod coat blocked a starch-digesting enzyme and reduced the rise in blood sugar after eating starch.",
      source: "polo",
    },
  ],
});
