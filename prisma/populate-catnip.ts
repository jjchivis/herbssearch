import { run } from "./lib/populate-herb";

// Catnip (Nepeta cataria), from verified sources: a pharmacognosy study
// describing its traditional uses and native range (Sarkar et al. 1995), a lab
// study of its essential oil (Gilani et al. 2009), a case report of a toddler
// (Osterhoudt et al. 1997) and a field trial of a catnip-oil mosquito repellent
// (Batume et al. 2026). Family per GBIF / Catalogue of Life. No clinical trials
// of catnip for sleep, anxiety or breathing problems were found.

run({
  name: "Catnip",
  profile: {
    family: "Lamiaceae",
    genus: "Nepeta",
    species: "cataria",
    nativeRange: "Native to southeastern Europe, southwest Asia and the western Himalayas",
    partsUsed: "The leaves and flowering tops",
  },
  sources: {
    sarkar: {
      title: "Pharmacognosy of Nepeta cataria",
      author: "Sarkar M, Rashmi R, Vikramaditya, Varma PN",
      journal: "Ancient Science of Life",
      organization: "Ancient Science of Life",
      publicationDate: "1995-04-01",
      pmid: "22556702",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3331250/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gilani: {
      title: "Chemical composition and mechanisms underlying the spasmolytic and bronchodilatory properties of the essential oil of Nepeta cataria L.",
      author: "Gilani AH, Shah AJ, Zubair A, Khalid S, Kiani J, Ahmed A, Rasheed M, Ahmad VU",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2008-11-08",
      doi: "10.1016/j.jep.2008.11.004",
      pmid: "19041706",
      url: "https://pubmed.ncbi.nlm.nih.gov/19041706/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    osterhoudt: {
      title: "Catnip and the alteration of human consciousness",
      author: "Osterhoudt KC, Lee SK, Callahan JM, Henretig FM",
      journal: "Veterinary and Human Toxicology",
      organization: "Veterinary and Human Toxicology",
      publicationDate: "1997-12-01",
      pmid: "9397511",
      url: "https://pubmed.ncbi.nlm.nih.gov/9397511/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    batume: {
      title: "Evaluating repellence properties of a catnip essential oil-based mosquito repellent using the human landing catch method in Eastern Uganda",
      author: "Batume C, Ssegujja I, Kongai G, Ayebare B, Ludlow RA, Fuchs LK, Logose SM, Ssebaale J, Randerson P, Mukisa IM, Pickett JA, Scofield S",
      journal: "Scientific Reports",
      organization: "Scientific Reports",
      publicationDate: "2026-03-14",
      doi: "10.1038/s41598-026-42618-5",
      pmid: "41832282",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13106807/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Catmint", type: "COMMON_NAME" },
    { name: "Catnip Mint", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Catnip leaves and flowering tops are aromatic and have traditionally been used as a tonic, to relieve gas, to bring on sweating and menstruation, and for colic in babies and nervous upset (historically called \"hysteria\").",
      source: "sarkar",
    },
    {
      category: "TRADITIONAL",
      summary: "Catnip has traditionally been used for colic, diarrhea, cough and asthma.",
      source: "gilani",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on animal tissue, catnip essential oil relaxed the gut and the airways, which may explain its traditional use for colic, diarrhea, cough and asthma.\n\nTechnical detail: calcium-channel blocking and phosphodiesterase inhibition in isolated rabbit jejunum and guinea-pig trachea; main components 1,8-cineole, α-humulene, α-pinene.",
      source: "gilani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In field trials in Uganda, lotions containing 2% or 6% catnip oil were highly effective at stopping mosquitoes from landing on people. The 6% lotion worked as well as a 15% DEET repellent.",
      source: "batume",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "It's uncertain whether catnip affects the human mind. No trials of catnip for sleep, anxiety or breathing problems were found.",
      source: "osterhoudt",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "A toddler became very drowsy and unresponsive after eating a large amount of catnip. Keep catnip away from young children.",
      source: "osterhoudt",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "Historically used for nervous upset. It hasn't been tested for stress or anxiety in people." },
    { slug: "cough", notes: "Traditionally used for cough; in lab tests its oil relaxed airways." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used for asthma; only lab studies exist. Don't use it in place of asthma medicine." },
  ],
});
