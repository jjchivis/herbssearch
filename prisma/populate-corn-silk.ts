import { run } from "./lib/populate-herb";

// Corn Silk (Zea mays stigma), from a 2024 narrative review of its chemistry and
// biological activities (Wang et al.), a 2023 review of its anticancer effects
// (Gulati et al.) and a 2025 review of its compounds and age-related diseases
// (Chen et al.; abstract only).

run({
  name: "Corn Silk",
  profile: {
    family: "Poaceae",
    genus: "Zea",
    species: "mays",
    partsUsed: "The silky threads (stigmas) of the corn ear, usually dried and made into tea",
  },
  sources: {
    wang: {
      title: "An Umbrella Insight into the Phytochemistry Features and Biological Activities of Corn Silk: A Narrative Review",
      author: "Wang Y, Mao J, Zhang M, et al.",
      journal: "Molecules",
      publicationDate: "2024-02-18",
      doi: "10.3390/molecules29040891",
      pmid: "38398644",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10891732/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gulati: {
      title: "Anti-cancerous effect of corn silk: a critical review on its mechanism of action and safety evaluation",
      author: "Gulati A, Singh J, Rasane P, Kaur S, Kaur J, Nanda V",
      journal: "3 Biotech",
      publicationDate: "2023-06-23",
      doi: "10.1007/s13205-023-03673-1",
      pmid: "37361240",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10290017/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chen: {
      title: "Unlocking Corn Silk's Potential: Bioactive Compounds Targeting Age-Related Diseases",
      author: "Chen MY, Wu JM, Wu AG, et al.",
      journal: "Molecular Nutrition & Food Research",
      publicationDate: "2025-05-28",
      doi: "10.1002/mnfr.70117",
      pmid: "40437199",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/mnfr.70117",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Maize Silk", type: "COMMON_NAME" },
    { name: "Stigma Maydis", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Recorded since 1476 and listed in the Chinese Pharmacopoeia; used to increase urination and reduce swelling." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In China, corn silk was first recorded in the Southern Yunnan Materia Medica in 1476, and it's listed in the Chinese Pharmacopoeia. In traditional Chinese medicine it's used to increase urination and reduce swelling, and it has been used for diabetes, diabetic kidney disease, high blood fats and high uric acid. It's also added to foods and health products.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, corn silk extracts have lowered blood fats, blood pressure and blood sugar, may help reduce inflammation, and have shown antioxidant activity. They also stopped the growth of some bacteria and the yeast Candida. Corn silk is described as a potentially safe herb, but these effects haven't been confirmed in people.",
      source: "wang",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, compounds from corn silk, such as quercetin, rutin and apigenin, killed or slowed the growth of cervical, breast, pancreatic and colon cancer cells. In animal studies, its antioxidants reduced kidney damage caused by some chemotherapy drugs. This hasn't been tested in people with cancer.",
      source: "gulati",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2025 review looked at corn silk's possible role in diseases linked to ageing, such as Alzheimer's and Parkinson's disease, heart and blood vessel disease, diabetes, obesity and kidney problems. In lab and animal studies its compounds acted as antioxidants and may help reduce inflammation, both thought to drive ageing.",
      source: "chen",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The same review says early trials in people, mostly on diabetes, look promising, but larger, well-designed trials are needed to show whether corn silk is safe and works.",
      source: "chen",
    },
  ],
});
