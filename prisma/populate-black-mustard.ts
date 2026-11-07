import { run } from "./lib/populate-herb";

// Black mustard (Brassica nigra, syn. Rhamphospermum nigrum), seed. Sources: a
// 2025 review of its uses, a 2026 lab study of seed extracts and a 2026 rat
// study. Family per GBIF. Not the same species as Mustard Seed (B. juncea).
// No source covering side effects, pregnancy or medicine interactions in
// detail was used, so none is stated.

run({
  name: "Black Mustard",
  profile: {
    family: "Brassicaceae",
    genus: "Brassica",
    species: "nigra",
    partsUsed: "The seeds",
  },
  sources: {
    thirumavalavan: {
      title:
        "An Overview of Black Mustard (Brassica nigra L.): Important Facts, Constituents, Health Benefits, Profuse Therapeutic Applications, and Adverse Effects: A Mini Review",
      author: "Thirumavalavan M",
      journal: "Journal of Food Science",
      publicationDate: "2025-11-01",
      doi: "10.1111/1750-3841.70653",
      pmid: "41164933",
      url: "https://doi.org/10.1111/1750-3841.70653",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nitthikan: {
      title: "Brassica nigra L. Seed Extracts as a Promising Source of Antioxidant and Anti-Inflammatory Agents",
      author: "Nitthikan N, Chaichit S, Supadej K, Junlatat J, Kiattisin K",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-20",
      doi: "10.3390/ijms27104603",
      pmid: "42196580",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13207600/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    alqaraawi: {
      title:
        "Comparative assessment of Brassica nigra seed and its sprout ethanolic extracts against paracetamol-induced hepatotoxicity in rats: insight into antioxidant and anti-apoptotic pathways",
      author: "Alqaraawi SS, Almujaydil MS",
      journal: "Frontiers in Nutrition",
      publicationDate: "2026-04-30",
      doi: "10.3389/fnut.2026.1807243",
      pmid: "42146089",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13171745/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Rhamphospermum nigrum", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Black mustard is widely used in Asia for its healing properties, and it also has a history of spiritual use.",
      source: "thirumavalavan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 lab study, black mustard seed extracts acted as antioxidants, slowed the growth of a common skin bacterium, and lowered signs of inflammation in cells.",
      source: "nitthikan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2026 rat study, seed and sprout extracts given for 3 weeks reduced liver damage from a paracetamol (acetaminophen) overdose. The sprout extract worked better. This has not been tested in people.",
      source: "alqaraawi",
    },
  ],
});
