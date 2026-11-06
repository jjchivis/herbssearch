import { run } from "./lib/populate-herb";

// Lady's Mantle (Alchemilla vulgaris), from a 2024 review of the Alchemilla genus
// (Jakimiuk and Tomczyk), a 2006 mouth ulcer study (Shrivastava and John) and a
// 2015 rat blood pressure study (Takır et al.). Family per GBIF.

run({
  name: "Lady's Mantle",
  profile: { family: "Rosaceae", genus: "Alchemilla", species: "vulgaris", nativeRange: "Europe and western Asia", partsUsed: "The leaves and flowering tops" },
  sources: {
    jakimiuk: {
      title: "A review of the traditional uses, phytochemistry, pharmacology, and clinical evidence for the use of the genus Alchemilla (Rosaceae)",
      author: "Jakimiuk K, Tomczyk M",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-02-10",
      doi: "10.1016/j.jep.2023.117439",
      pmid: "37981119",
      url: "https://doi.org/10.1016/j.jep.2023.117439",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shrivastava: {
      title: "Treatment of Aphthous Stomatitis with topical Alchemilla vulgaris in glycerine",
      author: "Shrivastava R, John GW",
      journal: "Clinical Drug Investigation",
      publicationDate: "2006-01-01",
      doi: "10.2165/00044011-200626100-00003",
      pmid: "17163290",
      url: "https://doi.org/10.2165/00044011-200626100-00003",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    takir: {
      title: "Vasorelaxant and blood pressure lowering effects of Alchemilla vulgaris: A comparative study of methanol and aqueous extracts",
      author: "Takır S, Altun IH, Sezgi B, et al.",
      journal: "Pharmacognosy Magazine",
      publicationDate: "2015-01-01",
      doi: "10.4103/0973-1296.149733",
      pmid: "25709228",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4329619/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Alchemilla", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A European herb with scalloped, water-beading leaves, long used in folk medicine for women's health, including period pain, vaginal itching and menopausal complaints. It's rich in tannins.",
      source: "jakimiuk",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In an open study of 48 people with common mouth ulcers, a 3% lady's mantle gel healed most ulcers within 2 to 3 days, faster than no treatment or usual remedies. There was no blinding.",
      source: "shrivastava",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with high blood pressure, an extract lowered blood pressure and relaxed blood vessels.",
      source: "takir",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "The mouth ulcer gel was well tolerated. Few other human safety studies exist.",
      source: "shrivastava",
    },
  ],
});
