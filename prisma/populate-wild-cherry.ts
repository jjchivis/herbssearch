import { run } from "./lib/populate-herb";

// Wild cherry (Prunus serotina, black cherry / capulín), from verified sources:
// studies of its seeds (García-Aguilar et al. 2015), its traditional use as a
// crude drug (Rivero-Cruz 2014), cyanogenic compounds in its leaves (Santos
// Pimenta et al. 2014) and cyanide release from its fruits (Swain et al. 1992).
// Family per GBIF / Catalogue of Life. No studies in people were found.

run({
  name: "Wild Cherry",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "serotina",
    nativeRange: "Native to North America; introduced into Europe, where it has become invasive",
    partsUsed: "The leaves and seeds",
  },
  sources: {
    garcia: {
      title: "Nutritional value and volatile compounds of black cherry (Prunus serotina) seeds",
      author: "García-Aguilar L, Rojas-Molina A, Ibarra-Alvarado C, Rojas-Molina JI, Vázquez-Landaverde PA, Luna-Vázquez FJ, Zavala-Sánchez MA",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2015-02-17",
      doi: "10.3390/molecules20023479",
      pmid: "25690299",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6272227/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rivero: {
      title: "Simultaneous quantification by HPLC of the phenolic compounds for the crude drug of Prunus serotina subsp. capuli",
      author: "Rivero-Cruz B",
      journal: "Pharmaceutical Biology",
      organization: "Pharmaceutical Biology",
      publicationDate: "2014-03-12",
      doi: "10.3109/13880209.2013.876054",
      pmid: "24617838",
      url: "https://pubmed.ncbi.nlm.nih.gov/24617838/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    santos: {
      title: "Quantitative analysis of amygdalin and prunasin in Prunus serotina Ehrh. using 1H-NMR spectroscopy",
      author: "Santos Pimenta LP, Schilthuizen M, Verpoorte R, Choi YH",
      journal: "Phytochemical Analysis",
      organization: "Phytochemical Analysis",
      publicationDate: "2013-09-23",
      doi: "10.1002/pca.2476",
      pmid: "24115144",
      url: "https://pubmed.ncbi.nlm.nih.gov/24115144/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    swain: {
      title: "Development of the Potential for Cyanogenesis in Maturing Black Cherry (Prunus serotina Ehrh.) Fruits",
      author: "Swain E, Li CP, Poulton JE",
      journal: "Plant Physiology",
      organization: "Plant Physiology",
      publicationDate: "1992-04-01",
      doi: "10.1104/pp.98.4.1423",
      pmid: "16668810",
      url: "https://pubmed.ncbi.nlm.nih.gov/16668810/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Black Cherry", type: "COMMON_NAME" },
    { name: "Capulín", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Capulin", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Wild Black Cherry", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Mexican traditional medicine, black cherry (capulín) is used for heart, breathing and digestive problems. Its seeds, eaten as snacks in Mexico, are used for cough.",
      source: "garcia",
    },
    {
      category: "TRADITIONAL",
      summary: "Capulín is sold and used in folk medicine for high blood pressure, digestive illnesses and cough, most often as an infusion (tea) of the leaves.",
      source: "rivero",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Wild cherry leaves contain amygdalin and prunasin, natural compounds that can release cyanide, a poison.",
      source: "santos",
    },
    {
      category: "TOXICITY",
      description:
        "The seeds of ripening black cherries build up amygdalin and release hydrogen cyanide when they are crushed or chewed. The ripe fruit flesh doesn't release cyanide.",
      source: "swain",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for cough in Mexico. It hasn't been studied in people, and its seeds and leaves can release cyanide." },
  ],
});
