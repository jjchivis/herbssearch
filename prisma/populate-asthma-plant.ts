import { run } from "./lib/populate-herb";

// Asthma Plant (Euphorbia hirta), from the NIH LactMed entry on Euphorbia, a 2024
// Siddha phytochemistry study (Subramani et al.), a 2026 systematic review of its
// antibacterial activity (Zaman et al.) and a 2025 mouse toxicity study (Costa et
// al.). Family per GBIF.

run({
  name: "Asthma Plant",
  profile: { family: "Euphorbiaceae", genus: "Euphorbia", species: "hirta", nativeRange: "Tropical regions worldwide", partsUsed: "The whole plant and leaves" },
  sources: {
    lactmed: {
      title: "Euphorbia. In: Drugs and Lactation Database (LactMed)",
      organization: "National Library of Medicine (US), National Institutes of Health",
      publicationDate: "2025-06-15",
      pmid: "30000943",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK501883/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    subramani: {
      title: "Determination of Phytochemical Properties \"Amman Pacharisi\"-Euphorbia hirta Linn.",
      author: "Subramani P, Murugappan S, Ganesh G, Jones S, Mani D",
      journal: "Journal of Pharmacy & Bioallied Sciences",
      publicationDate: "2024-12-01",
      doi: "10.4103/jpbs.jpbs_822_24",
      pmid: "40061658",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11888614/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zaman: {
      title: "Euphorbia hirta L. as a potential resistance-modifying agent against ESKAPE pathogens: a systematic review",
      author: "Zaman K, Tendulkar S, Karun K, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-07-09",
      doi: "10.3389/fphar.2026.1862731",
      pmid: "42494525",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13391868/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    costa: {
      title: "Phytochemical Profile, Toxicological Screening, Antitumor Activity, and Immunomodulatory Response of Saline Extract from Euphorbia hirta L. Leaves",
      author: "Costa JAD, Marinho AO, Alves RRV, et al.",
      journal: "Molecules",
      publicationDate: "2025-07-24",
      doi: "10.3390/molecules30153105",
      pmid: "40807278",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12348506/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Amman Pacharisi", type: "REGIONAL_NAME", region: "India (Tamil, Siddha medicine)" }],
  traditions: [{ slug: "ayurveda", notes: "Used in Siddha and other Indian traditional medicine as Amman Pacharisi." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Asthma plant is used for asthma, bronchitis, hay fever, coughs and colds; for diarrhea, worms, stomach ulcers, heartburn and vomiting; and on the skin for warts, scabies, ringworm and thrush.",
      source: "subramani",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In India, Indonesia and Angola it's used to increase breast milk, but no valid clinical trials support this. Some animal evidence found a Euphorbia extract raised prolactin, the milk-making hormone.",
      source: "lactmed",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2026 review of 27 lab studies found its extracts slowed the growth of several drug-resistant bacteria, including Staphylococcus aureus, E. coli and Pseudomonas.",
      source: "zaman",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a leaf extract caused no deaths, organ damage or DNA damage at a high single dose, and shrank tumors.",
      source: "costa",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "The white sap can cause skin allergy and can damage the eyes if it gets in them. Taken by mouth, Euphorbia can cause nausea and vomiting.",
      source: "lactmed",
    },
    {
      category: "BREASTFEEDING",
      description: "There's no information on whether its compounds pass into breast milk, and no valid trials show it increases milk.",
      source: "lactmed",
    },
  ],
  symptoms: [
    { slug: "asthma-and-wheezing", notes: "Traditionally used for asthma and bronchitis, which gives it its name. Not tested for asthma in people." },
    { slug: "breast-milk-supply", notes: "Used in India, Indonesia and Angola to increase milk, but no valid trials support it." },
    { slug: "diarrhea", notes: "A traditional remedy for diarrhea and worms. Not studied in people." },
  ],
});
