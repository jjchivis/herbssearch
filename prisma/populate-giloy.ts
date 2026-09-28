import { run } from "./lib/populate-herb";

// Giloy / Guduchi (Tinospora cordifolia), from verified sources: a review of its
// immune effects (Singh et al. 2025), a review of its traditional use and liver
// effects (Balkrishna et al. 2024), a case review of liver injury (Nnamani et
// al. 2023) and a review of the liver-injury reports and look-alike plants
// (Panneer Selvam et al. 2023). Family per GBIF / Catalogue of Life.

run({
  name: "Giloy (Guduchi)",
  profile: {
    family: "Menispermaceae",
    genus: "Tinospora",
    species: "cordifolia",
    partsUsed: "The stem and leaves",
  },
  sources: {
    singh: {
      title: "Immunomodulatory properties of Giloy (Tinospora cordifolia) leaves and its applications in value-added products",
      author: "Singh J, Saxena E, Chaudhary AR, et al.",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2024-12-07",
      doi: "10.1016/j.heliyon.2024.e40948",
      pmid: "39758376",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11699423/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    balkrishna: {
      title: "Traditional uses, hepatoprotective potential, and phytopharmacology of Tinospora cordifolia: a narrative review",
      author: "Balkrishna A, Kumar A, Rohela A, et al.",
      journal: "Journal of Pharmacy and Pharmacology",
      organization: "Journal of Pharmacy and Pharmacology",
      publicationDate: "2024-03-01",
      doi: "10.1093/jpp/rgae013",
      pmid: "38280221",
      url: "https://pubmed.ncbi.nlm.nih.gov/38280221/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nnamani: {
      title: "Tinospora cordifolia (Guduchi/Giloy)-Induced Liver Injury: A Case Review",
      author: "Nnamani I, Tolu-Akinnawo O, Dufera RR, Akintunde A, Maliakkal B",
      journal: "Cureus",
      organization: "Cureus",
      publicationDate: "2023-05-31",
      doi: "10.7759/cureus.39793",
      pmid: "37273324",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10238282/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    panneer: {
      title: "Can Guduchi (Tinospora cordifolia), a well-known ayurvedic hepato-protectant cause liver damage?",
      author: "Panneer Selvam K, Payyappallimana U, Ravikumar K, Venkatasubramanian P",
      journal: "Journal of Ayurveda and Integrative Medicine",
      organization: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2022-11-16",
      doi: "10.1016/j.jaim.2022.100658",
      pmid: "36400639",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105241/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Giloy", type: "TRADITIONAL_NAME" },
    { name: "Guduchi", type: "TRADITIONAL_NAME" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Described in Ayurvedic texts as one of the most important medicinal plants; used for jaundice, fever and immunity." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ayurvedic texts describe giloy as one of the most potent and important medicinal plants, and its leaves have been used for centuries for many ailments.",
      source: "singh",
    },
    {
      category: "TRADITIONAL",
      summary: "Giloy has traditionally been used for jaundice.",
      source: "balkrishna",
    },
    {
      category: "TRADITIONAL",
      summary: "In India, the government's Ministry of AYUSH recommended giloy for COVID-19 care because of its reputation for easing inflammation and supporting the immune system.",
      source: "panneer",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, giloy showed antioxidant activity and protected the liver from chemical damage. Among its compounds is berberine.",
      source: "balkrishna",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab research suggests compounds in giloy leaves affect immune signaling, but more research is needed to know whether it works in people.",
      source: "singh",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Liver injury has been reported with giloy, mostly from India. A 2021 case series described 6 patients who developed autoimmune-like hepatitis (the immune system attacking the liver) after taking giloy or giloy-containing products during the COVID-19 pandemic.",
      source: "panneer",
    },
    {
      category: "TOXICITY",
      description:
        "A 50-year-old woman developed severe liver inflammation two weeks after starting a supplement containing giloy. She recovered after stopping it and a short course of steroids.",
      source: "nnamani",
    },
    {
      category: "CONTAMINATION",
      description: "Several other plants are sold as, or mixed up with, giloy, which may explain some liver-injury reports.",
      source: "panneer",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Promoted in India as an immunity booster; evidence is from lab and animal studies, and liver injury has been reported." },
    { slug: "liver-safety-warnings", notes: "Cases of liver injury, including autoimmune-like hepatitis, have been reported." },
  ],
});
