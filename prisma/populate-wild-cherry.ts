import { run } from "./lib/populate-herb";

// Wild cherry (Prunus serotina, black cherry / capulín), from verified sources:
// studies of its seeds (García-Aguilar et al. 2015), its traditional use as a
// crude drug (Rivero-Cruz 2014), cyanogenic compounds in its leaves (Santos
// Pimenta et al. 2014), cyanide release from its fruits (Swain et al. 1992) and
// an EBSCO CAM Review Board summary of its uses and safety (2024). Family per
// GBIF / Catalogue of Life. No studies in people were found.

run({
  name: "Wild Cherry",
  profile: {
    family: "Rosaceae",
    genus: "Prunus",
    species: "serotina",
    nativeRange: "Native to North America; introduced into Europe, where it has become invasive",
    partsUsed: "The bark, leaves and seeds",
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
    ebsco: {
      title: "Wild cherry's therapeutic uses",
      author: "EBSCO CAM Review Board",
      organization: "EBSCO Research Starters",
      publicationDate: "2024-01-01",
      url: "https://www.ebsco.com/research-starters/complementary-and-alternative-medicine/wild-cherrys-therapeutic-uses",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
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
    {
      category: "TRADITIONAL",
      summary:
        "Wild cherry bark was a traditional Native American remedy for breathing infections and anxiety, and European settlers adopted it for the same purposes. Today it's mainly used as an ingredient in cough syrups. Herbal references also list it for:\n- Whooping cough, bronchitis and colds\n- Digestive problems and diarrhea\n- Gout\n- Relaxation and sleep, as a mild calming aid",
      source: "ebsco",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No double-blind, placebo-controlled trials have tested wild cherry in people. That doesn't mean it doesn't work, only that it needs more study.",
      source: "ebsco",
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
    {
      category: "DOSAGE",
      description:
        "Wild cherry is generally regarded as safe at recommended doses, but it contains small amounts of cyanide, so don't take more than recommended. Take syrups that contain it as directed on the label.",
      source: "ebsco",
    },
    {
      category: "CONTRAINDICATION",
      description: "Wild cherry isn't recommended for:\n- Young children\n- Pregnant or breastfeeding women\n- People with severe liver or kidney disease",
      source: "ebsco",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Wild cherry may change how the liver breaks down some medicines. Use caution if you take medicines processed by the liver, such as lovastatin (for cholesterol), fexofenadine (for allergies) or triazolam (for sleep).",
      source: "ebsco",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for cough by Native Americans and in Mexico, and now an ingredient in cough syrups. It hasn't been properly tested in people, and its seeds and leaves can release cyanide." },
  ],
});
