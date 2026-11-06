import { run } from "./lib/populate-herb";

// Shea Tree (Vitellaria paradoxa), from a 2022 review of shea butter for skin
// conditions in Sub-Saharan Africa (Ugwu-Dike and Nambudiri), a 2021 study of its
// bark (Sirignano et al.) and a 2023 sleeping sickness lab study (Bairy et al.).
// Family per GBIF.

run({
  name: "Shea Tree",
  profile: { family: "Sapotaceae", genus: "Vitellaria", species: "paradoxa", nativeRange: "The savanna belt of West and Central Africa", partsUsed: "The nut fat (shea butter), and also the bark and leaves" },
  sources: {
    ugwu: {
      title: "A review of ethnomedicinal uses of shea butter for dermatoses in Sub-Saharan Africa",
      author: "Ugwu-Dike P, Nambudiri VE",
      journal: "Dermatologic Therapy",
      publicationDate: "2021-02-02",
      doi: "10.1111/dth.14786",
      pmid: "33480103",
      url: "https://doi.org/10.1111/dth.14786",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sirignano: {
      title: "Triterpenoids from Vitellaria paradoxa Stem Barks Reduce Nitrite Levels in LPS-Stimulated Macrophages",
      author: "Sirignano C, Nadembega P, Poli F, et al.",
      journal: "Plants",
      publicationDate: "2021-05-18",
      doi: "10.3390/plants10051006",
      pmid: "34070050",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8158121/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bairy: {
      title: "In vitro trypanocidal activity of extracts and compounds isolated from Vitellaria paradoxa",
      author: "Bairy G, Ozzin-Kholy Zolipou CO, Nzoumbou-Boko R",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2023-09-28",
      doi: "10.1186/s12906-023-04175-6",
      pmid: "37770899",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10540432/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shea Butter", type: "COMMON_NAME" },
    { name: "Karité", type: "COMMON_NAME" },
    { name: "Butyrospermum parkii", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Shea butter, the fat pressed from the tree's nuts, has long been used across Sub-Saharan Africa on the skin. A review found 24 skin uses; the most studied were scabies, wound healing and care of a newborn's umbilical cord, often mixed with palm oil.",
      source: "ugwu",
    },
    {
      category: "TRADITIONAL",
      summary: "The bark is used in African traditional medicine for rheumatism, stomach problems, diarrhea and dysentery.",
      source: "sirignano",
    },
    {
      category: "PRECLINICAL",
      summary: "Compounds from the bark, including betulinic acid, reduced an inflammation marker in lab cells.",
      source: "sirignano",
    },
    {
      category: "PRECLINICAL",
      summary: "Bark extracts and compounds were active against the parasite that causes sleeping sickness in lab tests.",
      source: "bairy",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Shea butter is widely used on the skin, but no human safety studies of the plant as medicine were found.",
      source: "ugwu",
    },
  ],
  symptoms: [
    { slug: "lice-and-scabies", notes: "Shea butter is a traditional African treatment for scabies. Not tested in trials." },
    { slug: "wounds-and-burns", notes: "Traditionally applied to wounds. Not tested in trials." },
    { slug: "dry-skin", notes: "Widely used as a skin butter." },
  ],
});
