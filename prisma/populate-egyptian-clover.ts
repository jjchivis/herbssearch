import { run } from "./lib/populate-herb";

// Egyptian Clover (Trifolium alexandrinum, berseem clover), from a 2025
// anti-inflammatory study (Mahrous et al.) and a 2022 rat diabetes study (Abdou et
// al.). Common name per USDA PLANTS; family per GBIF.

run({
  name: "Egyptian Clover",
  profile: { family: "Fabaceae", genus: "Trifolium", species: "alexandrinum", partsUsed: "The above-ground parts" },
  sources: {
    mahrous: {
      title: "Network pharmacology and UPLC/MS/MS metabolic profiling unveil the anti-inflammatory potential of Trifolium alexandrinum",
      author: "Mahrous RS, Fathy H, Ghareeb DA, et al.",
      journal: "npj Science of Food",
      publicationDate: "2025-06-14",
      doi: "10.1038/s41538-025-00459-y",
      pmid: "40517168",
      url: "https://doi.org/10.1038/s41538-025-00459-y",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    abdou: {
      title: "Antidiabetic efficacy of Trifolium alexandrinum extracts hesperetin and quercetin in ameliorating carbohydrate metabolism and activating IR and AMPK signaling in the pancreatic tissues of diabetic rats",
      author: "Abdou HM, Hamaad FA, Ali EY, Ghoneum MH",
      journal: "Biomedicine & Pharmacotherapy",
      publicationDate: "2022-03-25",
      doi: "10.1016/j.biopha.2022.112838",
      pmid: "35344738",
      url: "https://doi.org/10.1016/j.biopha.2022.112838",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Berseem Clover", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A clover long used in traditional medicine. It's rich in flavonoids and isoflavonoids.",
      source: "mahrous",
    },
    {
      category: "PRECLINICAL",
      summary: "In human cells, an extract lowered inflammation signals. Two of its compounds worked about as well as piroxicam, a prescription drug for inflammation.",
      source: "mahrous",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, an extract given for 4 weeks improved blood sugar, insulin and cholesterol levels.",
      source: "abdou",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "mahrous",
    },
  ],
});
