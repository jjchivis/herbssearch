import { run } from "./lib/populate-herb";

// Black walnut (Juglans nigra), from verified sources: a chemical and lab study
// of its hull, bark and leaves (Osztie et al. 2024), a review of the tree in
// Europe (Nicolescu et al. 2021) and a chart review of herbal SIBO formulas
// containing black walnut hull (Ruscio et al. 2025). Family per GBIF /
// Catalogue of Life. No source describing its traditional medicinal use or its
// safety was found, so none is stated.

run({
  name: "Black Walnut",
  profile: {
    family: "Juglandaceae",
    genus: "Juglans",
    species: "nigra",
    nativeRange: "Native to North America; introduced into Europe in the early 1600s",
    partsUsed: "The nut hull (pericarp)",
  },
  sources: {
    osztie: {
      title: "Comprehensive Characterization of Phytochemical Composition, Membrane Permeability, and Antiproliferative Activity of Juglans nigra Polyphenols",
      author: "Osztie R, Czeglédi T, Ross S, Stipsicz B, Kalydi E, Béni S, Boldizsár I, Riethmüller E, Bősze SE, Alberti Á",
      journal: "International Journal of Molecular Sciences",
      organization: "International Journal of Molecular Sciences",
      publicationDate: "2024-06-25",
      doi: "10.3390/ijms25136930",
      pmid: "39000038",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11241769/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nicolescu: {
      title: "A review of black walnut (Juglans nigra L.) ecology and management in Europe",
      author: "Nicolescu VN, Rédei K, Vor T, et al.",
      journal: "Trees",
      organization: "Trees",
      publicationDate: "2021-10-01",
      doi: "10.1007/s00468-020-01988-7",
      url: "https://doi.org/10.1007/s00468-020-01988-7",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ruscio: {
      title: "Biofilm Disruption Enhances Antimicrobial Therapy for Small Intestinal Bacterial Overgrowth and Intestinal Methanogen Overgrowth",
      author: "Ruscio M, Guard G, O'Dwyer D, Darville R, Klopf H, Abbott R, Spiridigliozzi S",
      journal: "Cureus",
      organization: "Cureus",
      publicationDate: "2025-12-13",
      doi: "10.7759/cureus.99116",
      pmid: "41394228",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12701763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Black Walnut Hull", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Juglone", slug: "juglone", type: "naphthoquinone" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Researchers identified 161 plant compounds in black walnut bark, leaves and hulls. Juglone, from the hull, slowed the growth of human cancer cells in lab tests about as well as standard drugs. Juglone is found in all parts of the tree and is known for stopping other plants from growing near it.",
      source: "osztie",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Black walnut hull is an ingredient in several herbal formulas used for SIBO (bacterial overgrowth in the small intestine). In a small chart review of 13 people, these multi-herb formulas cleared SIBO in 60% to 100% of people, but the study was too small to draw conclusions, and black walnut's own effect isn't known.",
      source: "ruscio",
    },
  ],
  symptoms: [
    {
      slug: "sibo-and-parasites",
      notes: "An ingredient in herbal SIBO formulas; it hasn't been tested on its own in people.",
    },
  ],
});
