import { run } from "./lib/populate-herb";

// Katuki / Kutki (Picrorhiza kurroa), from verified sources: a review of its
// pharmacology and clinical efficacy (Almeleebia et al. 2022), a review of its
// ethnobotany and conservation (Mehta et al. 2021) and a review of its traditional
// use and liver research (Raut et al. 2023). Family per GBIF / Catalogue of Life.

run({
  name: "Katuki",
  profile: {
    family: "Plantaginaceae",
    genus: "Picrorhiza",
    species: "kurroa",
    partsUsed: "The root and underground stem",
  },
  sources: {
    almeleebia: {
      title: "Pharmacological and Clinical Efficacy of Picrorhiza kurroa and Its Secondary Metabolites: A Comprehensive Review",
      author: "Almeleebia TM, Alsayari A, Wahab S",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2022-11-29",
      doi: "10.3390/molecules27238316",
      pmid: "36500409",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9738980/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mehta: {
      title: "Advances in Ethnobotany, Synthetic Phytochemistry and Pharmacology of Endangered Herb Picrorhiza kurroa (Kutki): A Comprehensive Review (2010-2020)",
      author: "Mehta S, Sharma AK, Singh RK",
      journal: "Mini Reviews in Medicinal Chemistry",
      organization: "Mini Reviews in Medicinal Chemistry",
      publicationDate: "2021-01-01",
      doi: "10.2174/1389557521666210401090028",
      pmid: "33797375",
      url: "https://pubmed.ncbi.nlm.nih.gov/33797375/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    raut: {
      title: "Picrorhiza kurroa, Royle ex Benth: Traditional uses, phytopharmacology, and translational potential in therapy of fatty liver disease",
      author: "Raut A, Dhami-Shah H, Phadke A, Shindikar A, Udipi S, Joshi J, Vaidya R, Vaidya ADB",
      journal: "Journal of Ayurveda and Integrative Medicine",
      organization: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2022-06-02",
      doi: "10.1016/j.jaim.2022.100558",
      pmid: "35659739",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10105242/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Kutki", type: "TRADITIONAL_NAME" },
    { name: "Picrorhiza", type: "COMMON_NAME" },
    { name: "Indian Gentian", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Picrosides", slug: "picrosides", type: "iridoid glycoside" }],
  traditions: [{ slug: "ayurveda", notes: "Used for millennia, with certain cautions, for fever, jaundice, the liver and breathing problems." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Katuki has been used in Ayurveda for thousands of years, with certain cautions. Traditional and folk uses include:\n- Recurring fever and jaundice\n- Constipation (as a laxative) and digestion\n- Breathing problems, asthma and allergies\n- Skin problems\nIts bitter taste comes from compounds called picrosides.",
      source: "almeleebia",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, katuki and its compounds protected the liver from many toxins, reduced inflammation, and showed antioxidant, immune-modulating and antimicrobial effects.",
      source: "mehta",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Its protective effect on the liver has been seen in experimental and clinical studies, and it is being developed as a standardized product for fatty liver disease.",
      source: "raut",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Katuki can cause miscarriage and shouldn't be used during pregnancy.",
      source: "almeleebia",
    },
    {
      category: "DOSAGE",
      description:
        "It's usually taken as capsules of standardized extract, 400 to 1,500 mg a day for adults. Only a few toxicity studies have been done, so its side effects aren't well known.",
      source: "almeleebia",
    },
    {
      category: "CONTAMINATION",
      description: "Katuki has become endangered in the wild through overharvesting, habitat loss and slow growth.",
      source: "mehta",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Traditionally used for recurring fevers; immune effects have been seen only in lab and animal studies." },
    { slug: "fatty-liver", notes: "Its liver-protective effect has been seen in experimental and clinical studies; it is being developed for fatty liver disease." },
  ],
});
