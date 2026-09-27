import { run } from "./lib/populate-herb";

// Boswellia (Boswellia serrata, Indian frankincense), from verified sources:
// NCCIH (2025), NIH LiverTox and a randomized trial of curcumin plus boswellia
// for IBS bloating (Giacosa et al. 2022). Family per GBIF / Catalogue of Life.

run({
  name: "Boswellia",
  profile: {
    family: "Burseraceae",
    genus: "Boswellia",
    species: "serrata",
    nativeRange: "Native to India, the Middle East and northern Africa",
    partsUsed: "The gum resin from beneath the bark",
  },
  sources: {
    nccih: {
      title: "Boswellia: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/boswellia",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    livertox: {
      title: "Boswellia Serrata. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
      organization: "LiverTox, National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
      publicationDate: "2020-11-04",
      pmid: "33151656",
      url: "https://pubmed.ncbi.nlm.nih.gov/33151656/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    giacosa: {
      title: "Beneficial Effects on Abdominal Bloating with an Innovative Food-Grade Formulation of Curcuma longa and Boswellia serrata Extracts in Subjects with Irritable Bowel Syndrome and Small Bowel Dysbiosis",
      author: "Giacosa A, Riva A, Petrangolini G, Allegrini P, Fazia T, Bernardinelli L, Peroni G, Rondanelli M",
      journal: "Nutrients",
      organization: "Nutrients",
      publicationDate: "2022-01-18",
      doi: "10.3390/nu14030416",
      pmid: "35276778",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8839120/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Indian Frankincense", type: "COMMON_NAME" },
    { name: "Frankincense", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used for centuries for inflammatory conditions, arthritis and pain, and for some breathing and heart problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Boswellia has been used for centuries in Ayurvedic medicine for arthritis, inflammation and pain, and for some breathing and heart problems. Today extracts are marketed for arthritis, colitis and asthma.",
      source: "livertox",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Boswellia taken by mouth may help reduce inflammation and pain from osteoarthritis, but larger, better studies are needed. A few small studies suggest it may reduce asthma symptoms, but the evidence isn't strong enough to know.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 30-day trial, 67 people with IBS and bacterial imbalance in the small intestine followed a low-FODMAP diet, with or without a supplement combining curcumin and boswellia. The supplement group had much less bloating and belly pain. Because the supplement combined two herbs, the effect of boswellia alone isn't known.\n\nTechnical detail: randomized; Curcumin Boswellia Phytosome 500 mg twice daily; p < 0.0001 for bloating, pain and urinary indican.",
      source: "giacosa",
    },
  ],
  safety: [
    {
      category: "DOSAGE",
      description:
        "Boswellia is likely safe by mouth. Up to 1,000 mg a day was used safely in trials lasting up to 6 months, and 2,400 mg a day for up to a month.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description: "Boswellia extracts haven't been linked to raised liver enzymes or liver injury.",
      source: "livertox",
    },
    {
      category: "PREGNANCY",
      description: "Little is known about whether boswellia in medicinal amounts is safe during pregnancy or breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "ibs", notes: "Combined with curcumin and a low-FODMAP diet, it reduced bloating and pain in a 30-day trial." },
    { slug: "bloating", notes: "In a trial of people with IBS, a curcumin and boswellia supplement reduced bloating." },
  ],
});
