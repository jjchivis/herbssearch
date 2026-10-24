import { run } from "./lib/populate-herb";

// Bellaco-caspi (Himatanthus sucuuba), from two mouse studies of the latex on
// wounds (Calero-Armijos et al. 2020; Herrera-Calderón et al. 2021) and a rat
// pregnancy study (Soares et al. 2015). No human studies were found. Family
// per GBIF.

run({
  name: "Bellaco-Caspi",
  profile: {
    family: "Apocynaceae",
    genus: "Himatanthus",
    species: "sucuuba",
    nativeRange: "The Amazon regions of Brazil, Peru and Colombia",
    partsUsed: "The latex (milky sap), and also the bark and leaves",
  },
  sources: {
    calero: {
      title: "Histopathological evaluation of latex of Bellaco-Caspi, Himatanthus sucuuba (Spruce) Woodson on wound healing effect in BALB/C mice",
      author: "Calero-Armijos LL, Herrera-Calderon O, Arroyo-Acevedo JL, et al.",
      journal: "Veterinary World",
      publicationDate: "2020-06-10",
      doi: "10.14202/vetworld.2020.1045-1049",
      pmid: "32801553",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7396333/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    herrera: {
      title: "Phytochemical Screening of Himatanthus sucuuba (Spruce) Woodson (Apocynaceae) Latex, In Vitro Cytotoxicity and Incision Wound Repair in Mice",
      author: "Herrera-Calderón O, Calero-Armijos LL, Cardona-G W, et al.",
      journal: "Plants",
      publicationDate: "2021-10-16",
      doi: "10.3390/plants10102197",
      pmid: "34686006",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8541601/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    soares: {
      title: "Effect of Himatanthus sucuuba in Maternal Reproductive Outcome and Fetal Anomaly Frequency in Rats",
      author: "de Sousa Soares T, Damasceno DC, Kempinas WG, et al.",
      journal: "Birth Defects Research Part B: Developmental and Reproductive Toxicology",
      publicationDate: "2015-09-04",
      doi: "10.1002/bdrb.21152",
      pmid: "26339763",
      url: "https://pubmed.ncbi.nlm.nih.gov/26339763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Janaguba", type: "REGIONAL_NAME" },
    { name: "Sucuuba", type: "REGIONAL_NAME" },
  ],
  constituents: [
    { name: "Plumericin", slug: "plumericin", type: "iridoid" },
    { name: "Lupeol", slug: "lupeol", type: "triterpene" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bellaco-caspi is a shrub of the Amazon. In Peruvian traditional medicine its latex is used for wounds, skin and stomach ulcers, inflammation, fever, low back pain, gastritis, hernias, herpes, inflammation of the uterus, malaria, rheumatism, tuberculosis and tumors. It's also used to expel worms.",
      source: "calero",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The latex, bark and leaves contain plumericin, lupeol and other compounds. In mice, latex put on cuts helped the wounds heal. In the lab, the latex didn't kill colon cancer cells.",
      source: "herrera",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "In pregnant rats, a bellaco-caspi extract given by mouth caused pregnancy loss, slowed the babies' growth and, at the higher dose, increased skeletal defects.",
      source: "soares",
    },
    {
      category: "TOXICITY",
      description: "A safe dose hasn't been established; the authors say its toxic dose still needs to be worked out.",
      source: "calero",
    },
  ],
});
