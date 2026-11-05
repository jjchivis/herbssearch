import { run } from "./lib/populate-herb";

// Senegal Coral Tree (Erythrina senegalensis), from a 2023 study of its seed
// lectin (Enoma et al.) and a 2025 review of the Erythrina genus (Muchtaridi et
// al.). Family per GBIF.

run({
  name: "Senegal Coral Tree",
  profile: { family: "Fabaceae", genus: "Erythrina", species: "senegalensis", nativeRange: "West Africa", partsUsed: "The stem bark, roots, leaves and seeds" },
  sources: {
    enoma: {
      title: "Antimicrobial activities and phylogenetic study of Erythrina senegalensis DC (Fabaceae) seed lectin",
      author: "Enoma S, Adewole TS, Agunbiade TO, Kuku A",
      journal: "Biotechnologia",
      publicationDate: "2023-03-27",
      doi: "10.5114/bta.2023.125083",
      pmid: "37064277",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10091453/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    muchtaridi: {
      title: "Therapeutic Potential of Erythrina Genus: Bioactive Phytoconstituents with Potent Antiviral and Antimicrobial Activities",
      author: "Muchtaridi M, Lestyawan S, Fakhirah MA, et al.",
      journal: "Plants",
      publicationDate: "2025-10-02",
      doi: "10.3390/plants14193053",
      pmid: "41095193",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12526376/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "african-traditional-medicine", notes: "Used across West Africa for infections, high blood pressure, gut problems, diabetes and hemorrhoids." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Africa it's traditionally used for infections, high blood pressure, stomach and gut problems, leprosy, diabetes and hemorrhoids.",
      source: "enoma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Compounds from the tree, mainly flavonoids, showed some of the strongest activity in its genus against viruses, including HIV and hepatitis, and against germs in lab tests. A protein from its seeds also killed bacteria.",
      source: "muchtaridi",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "muchtaridi" },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A traditional African remedy for high blood pressure. Not studied in people." },
  ],
});
