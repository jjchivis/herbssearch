import { run } from "./lib/populate-herb";

// Clematis Root (Clematis chinensis, wei ling xian), from a 2021 review of
// Clematidis Radix et Rhizoma, the Chinese medicine made from the roots of
// C. chinensis, C. hexapetala and C. terniflora var. mandshurica (Lin et al.).

run({
  name: "Clematis Root",
  profile: {
    family: "Ranunculaceae",
    genus: "Clematis",
    species: "chinensis",
    nativeRange: "China",
    partsUsed: "The root and underground stem",
  },
  sources: {
    lin: {
      title: "Uses, chemical compositions, pharmacological activities and toxicology of Clematidis Radix et Rhizome: a review",
      author: "Lin TF, Wang L, Zhang Y, Zhang JH, Zhou DY, Fang F, Liu L, Liu B, Jiang YY",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-01-18",
      doi: "10.1016/j.jep.2021.113831",
      pmid: "33476714",
      url: "https://pubmed.ncbi.nlm.nih.gov/33476714/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wei Ling Xian", type: "TRADITIONAL_NAME" },
    { name: "Chinese Clematis", type: "COMMON_NAME" },
    { name: "Clematidis Radix et Rhizoma", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for rheumatic joint pain, numb limbs and stiff, tight tendons." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, clematis root is used for:\n- Rheumatic joint pain\n- Numbness in the arms and legs\n- Tight tendons and difficulty bending and straightening joints\nIt has also been used for neck and shoulder problems such as frozen shoulder, and for liver cancer and stomach complaints.",
      source: "lin",
    },
    {
      category: "PRECLINICAL",
      summary:
        "More than 200 compounds have been found in the plants used as clematis root. In lab and animal studies, extracts and compounds may help reduce inflammation and have shown activity against tumors and microbes, as well as antioxidant activity.",
      source: "lin",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Clematis root can be toxic. Toxicity studies report mouth burning, swelling, belly pain, severe diarrhea, breathing difficulty, widened pupils, kidney damage and death. How it causes this hasn't been studied.",
      source: "lin",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "Used in traditional Chinese medicine for rheumatic joint pain. Not tested in trials, and it can be toxic." },
  ],
});
