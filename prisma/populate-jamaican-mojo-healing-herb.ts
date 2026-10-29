import { run } from "./lib/populate-herb";

// Jamaican Mojo Healing Herb, avaram (Senna auriculata, syn. Cassia
// auriculata), from a 2021 review (Nille et al.). Family per GBIF.

run({
  name: "Jamaican Mojo Healing Herb",
  profile: {
    family: "Fabaceae",
    genus: "Senna",
    species: "auriculata",
    nativeRange: "India and Sri Lanka",
    partsUsed: "The flowers, leaves, seeds, bark and roots",
  },
  sources: {
    nille: {
      title: "Ethnopharmacological, Phytochemical, Pharmacological, and Toxicological Review on Senna auriculata (L.) Roxb.: A Special Insight to Antidiabetic Property",
      author: "Nille GC, Mishra SK, Chaudhary AK, Reddy KRC",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-08-24",
      doi: "10.3389/fphar.2021.647887",
      pmid: "34504420",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423098/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cassia auriculata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Avaram", type: "REGIONAL_NAME", region: "India (Tamil)" },
    { name: "Avartaki", type: "TRADITIONAL_NAME" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Called avartaki; also used in Siddha medicine." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Called avartaki, it is widely used in Ayurveda and Siddha medicine in India. Almost every part of the plant is used, traditionally for diabetes, asthma, rheumatism, dysentery and skin disease.",
      source: "nille",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts lowered blood sugar and blood fats, acted as antioxidants and reduced inflammation, and protected the liver and kidneys. Animal toxicity studies found no signs of poisoning.",
      source: "nille",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a two-month trial in people with type 2 diabetes, an Ayurvedic herbal powder with this plant as its main ingredient eased symptoms such as frequent urination, hunger and thirst, and lowered blood sugar. It was compared with the diabetes drug glimepiride. Larger human studies are needed.",
      source: "nille",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "A tea made from the flowers raised blood levels of the asthma drug theophylline, and in rats raised levels of the epilepsy drug carbamazepine. The review advises people taking either drug to avoid this tea. It may also add to the effect of diabetes medicines such as metformin.",
      source: "nille",
    },
  ],
});
