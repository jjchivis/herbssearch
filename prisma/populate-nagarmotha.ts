import { run } from "./lib/populate-herb";

// Nagarmotha, nut grass (Cyperus rotundus), from two reviews (Kamala et al.
// 2018; Xue et al. 2023). No human trials were found. Family per GBIF.

run({
  name: "Nagarmotha",
  profile: {
    family: "Cyperaceae",
    genus: "Cyperus",
    species: "rotundus",
    nativeRange: "Thought to come from India; now found worldwide",
    partsUsed: "The rhizomes (underground stems) and tubers",
  },
  sources: {
    kamala: {
      title: "Plants in traditional medicine with special reference to Cyperus rotundus L.: a review",
      author: "Kamala A, Middha SK, Karigar CS",
      journal: "3 Biotech",
      publicationDate: "2018-07-09",
      doi: "10.1007/s13205-018-1328-6",
      pmid: "30002998",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6037646/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xue: {
      title: "Phytochemistry, data mining, pharmacology, toxicology and the analytical methods of Cyperus rotundus L. (Cyperaceae): a comprehensive review",
      author: "Xue BX, He RS, Lai JX, Mireku-Gyimah NA, Zhang LH, Wu HH",
      journal: "Phytochemistry Reviews",
      publicationDate: "2023-05-15",
      doi: "10.1007/s11101-023-09870-3",
      pmid: "37359712",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10183317/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Nut Grass", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Widely used in Ayurveda for about 2,000 years." },
    { slug: "traditional-chinese-medicine", notes: "Rhizome used for liver problems, stomach pain, breast tenderness and period problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Nut grass is thought to have come from India about 2,000 years ago and is widely used in Ayurveda for many ailments.",
      source: "kamala",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, the rhizome is often used for liver problems, stomach pain, breast tenderness, painful periods and irregular periods.",
      source: "xue",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Over 550 compounds have been found in it. In lab and animal studies, extracts calmed inflammation, eased pain, protected the stomach and liver, lowered blood sugar and fought microbes. How it works isn't clear, and human studies are lacking.",
      source: "kamala",
    },
  ],
});
