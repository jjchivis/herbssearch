import { run } from "./lib/populate-herb";

// Amaranth (Amaranthus species, grain and leaf amaranth), from a 2025 review of
// the genus (Sharma et al.) and a 2012 review of amaranth grain
// (Caselato-Sousa & Amaya-Farfán). Both cover the genus, not a single species.

run({
  name: "Amaranth",
  profile: {
    family: "Amaranthaceae",
    genus: "Amaranthus",
    species: "spp.",
    nativeRange: "About 55 of the 70 or so species are native to the Americas; the rest grow in Asia, Africa, Europe and Oceania",
    partsUsed: "The seeds (eaten as a grain), leaves, shoots and tender stems",
  },
  sources: {
    sharma: {
      title: "Botany, ethnomedicine, phytochemistry and pharmacology of Amaranthus spp.: a review",
      author: "Sharamā AK, Dwivedi SV, Devi J, Gupta N, Rai N, Behera T, Sagar V",
      journal: "South African Journal of Botany",
      publicationDate: "2025-03-01",
      doi: "10.1016/j.sajb.2025.01.030",
      url: "https://doi.org/10.1016/j.sajb.2025.01.030",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    caselato: {
      title: "State of knowledge on amaranth grain: a comprehensive review",
      author: "Caselato-Sousa VM, Amaya-Farfán J",
      journal: "Journal of Food Science",
      publicationDate: "2012-04-01",
      doi: "10.1111/j.1750-3841.2012.02645.x",
      pmid: "22515252",
      url: "https://pubmed.ncbi.nlm.nih.gov/22515252/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Grain Amaranth", type: "COMMON_NAME" },
    { name: "Amaranthus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Amaranth is grown around the world for its grain and leaves. The leaves, shoots, tender stems and seeds are used in sauces, soups and many other dishes. About 17 of its 70 or so species are eaten. It grows quickly and copes well with heat, drought, pests and disease.",
      source: "sharma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Amaranth is rich in carbohydrates, vitamins, calcium, iron, beta-carotene, fiber and protein building blocks such as lysine. A 2025 review of research reports antioxidant activity and possible effects on inflammation, infections, blood sugar and cholesterol.",
      source: "sharma",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Amaranth grain has more protein than true cereals. A 2012 review reported research suggesting it may help lower cholesterol, blood sugar and blood pressure and improve anemia. It was a summary review and didn't rate the strength of this evidence.",
      source: "caselato",
    },
  ],
});
