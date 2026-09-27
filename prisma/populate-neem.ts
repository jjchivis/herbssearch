import { run } from "./lib/populate-herb";

// Neem (Azadirachta indica), from verified sources: Memorial Sloan Kettering's
// About Herbs entry (2023) and a randomized trial of a neem leaf lotion for
// scabies (Widasmara et al. 2025). Family per GBIF / Catalogue of Life. No
// source covered pregnancy or breastfeeding, so none is stated.

run({
  name: "Neem",
  profile: {
    family: "Meliaceae",
    genus: "Azadirachta",
    species: "indica",
    nativeRange: "A tree common in South Asia",
    partsUsed: "The bark, leaves, flowers, seeds and seed oil",
  },
  sources: {
    mskcc: {
      title: "Neem",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-04-11",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/neem",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    widasmara: {
      title: "Comparative study of 5% permethrin, 10% neem leaf extract, and 10% brotowali stem extract for scabies treatment",
      author: "Widasmara D, Yuniaswan AP, Listy Pramita V",
      journal: "Frontiers in Medicine",
      organization: "Frontiers in Medicine",
      publicationDate: "2025-12-18",
      doi: "10.3389/fmed.2025.1672149",
      pmid: "41488098",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12756351/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Neem Oil", type: "COMMON_NAME" },
    { name: "Margosa", type: "COMMON_NAME" },
    { name: "Margosa Oil", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used on the skin for skin conditions, taken for stomach and gut complaints, and used for oral hygiene." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The bark, leaves, flowers and seeds of neem have been used as food and medicine for centuries. In Ayurvedic medicine, neem is used on the skin for skin conditions, taken for stomach and gut complaints, and used as a mouth rinse. It is also used as a disinfectant and against pests and parasites.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, neem showed activity against microbes, pests and parasites, and slowed the growth of some cancer cells. In mice, a neem leaf extract reduced stomach tumors caused by chemicals. There are no studies of neem as a cancer treatment in people.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people suggests:\n- Neem is effective against lice.\n- It reduces dental plaque and mouth bacteria, though results conflict.\n- A small study found neem bark extract reduced stomach acid.\n- Extracts improved blood sugar control in people with metabolic syndrome.\nMore studies are needed.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 61 male students with scabies, a 10% neem leaf lotion was compared with 5% permethrin, the standard treatment, and with another herbal lotion. All three reduced skin lesions, with no significant difference between them. Quality of life improved in all groups, and sooner (by day 7) with neem. No side effects were reported. The authors couldn't fully control how the lotions were used or rule out reinfection.",
      source: "widasmara",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Never swallow neem oil. It has caused severe poisoning in children and adults, with vomiting, drowsiness, diarrhea, vision loss and seizures. In the most serious cases, people fell into a coma or died.",
      source: "mskcc",
    },
    {
      category: "ALLERGY",
      description:
        "On the skin, neem can cause a rash and itchy, dry or red skin (contact dermatitis). One woman who used neem oil on blisters developed a worsening of a blistering skin disease that needed medical treatment.",
      source: "mskcc",
    },
    {
      category: "DRUG_INTERACTION",
      description: "In lab tests, neem extract slowed liver enzymes that break down many medicines. Whether this matters in people isn't known.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "lice-and-scabies",
      notes: "Neem is effective against lice. In a small trial, a neem leaf lotion worked as well as permethrin for scabies.",
    },
    {
      slug: "skin-irritation",
      notes: "Used on the skin for skin conditions in Ayurvedic medicine. It can itself cause skin rashes.",
    },
  ],
});
