import { run } from "./lib/populate-herb";

// Boizinho, araçá-boi (Eugenia stipitata), from a 2025 lab study of the seeds
// (Pérez Jaramillo et al.) and a 2026 review of Amazonian fruits (Lima et al.).
// No human or safety studies were found. Family per GBIF.

run({
  name: "Boizinho",
  profile: {
    family: "Myrtaceae",
    genus: "Eugenia",
    species: "stipitata",
    nativeRange: "The western Amazon (Peru and Brazil)",
    partsUsed: "The fruit and seeds",
  },
  sources: {
    perez: {
      title: "Bioactive Potential of Arazá (Eugenia stipitata) Seeds: Hypoglycemic, Antiradical, and Nutritional Properties",
      author: "Pérez Jaramillo CC, Méndez Arteaga JJ, Cuéllar Álvarez LN, Murillo Arango W",
      journal: "Plants",
      publicationDate: "2025-05-30",
      doi: "10.3390/plants14111662",
      pmid: "40508336",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12157801/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lima: {
      title: "Nutritional and Phytochemical Profile and Potential Anticancer Benefits of Amazonian Exotic Fruits",
      author: "Lima TPB, Almeida CORP, Lemos IDML, Souza VRD, Teodoro AJ",
      journal: "Nutrition Reviews",
      publicationDate: "2026-02-25",
      doi: "10.1093/nutrit/nuaf307",
      pmid: "41739529",
      url: "https://pubmed.ncbi.nlm.nih.gov/41739529/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Araçá-Boi", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Arazá", type: "REGIONAL_NAME", region: "Peru" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Araçá-boi is one of several Amazon fruits rich in nutrients and plant compounds. In lab and animal studies, these fruits showed antioxidant activity and slowed cancer cells, but this hasn't been tested in people.",
      source: "lima",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The seeds, usually thrown away, make up most of the fruit's dry weight. In lab tests, a seed extract blocked two enzymes that break down starch into sugar and showed antioxidant activity. It didn't harm blood cells.\n\nTechnical detail: α-amylase IC50 47.06 µg/mL; α-glucosidase IC50 49.99 µg/mL; DPPH IC50 46.63 µg/mL.",
      source: "perez",
    },
  ],
});
