import { run } from "./lib/populate-herb";

// Blue Lotus (Nymphaea caerulea, blue Egyptian lotus), from the Blue Ridge Poison
// Center's ToxTalks bulletin (January 2026) and a 2023 case series in
// Military Medicine.

run({
  name: "Blue Lotus",
  profile: {
    family: "Nymphaeaceae",
    genus: "Nymphaea",
    species: "caerulea",
    nativeRange: "Northern and central Africa",
    partsUsed: "The flowers, sold dried, as teas, extracts and tinctures, and in vapes and gummies",
  },
  sources: {
    brpc: {
      title: "ToxTalks: Blue Lotus",
      organization: "Blue Ridge Poison Center at UVA Health",
      publicationDate: "2026-01-01",
      url: "https://med.virginia.edu/toxicology/wp-content/uploads/sites/268/2026/01/Jan26-BlueLotus.pdf",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    schimpf: {
      title: "Toxicity From Blue Lotus (Nymphaea caerulea) After Ingestion or Inhalation: A Case Series",
      author: "Schimpf M, Ulmer T, Hiller H, Barbuto AF",
      journal: "Military Medicine",
      publicationDate: "2023-01-01",
      doi: "10.1093/milmed/usab328",
      pmid: "34345890",
      url: "https://pubmed.ncbi.nlm.nih.gov/34345890/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Blue Egyptian Lotus", type: "COMMON_NAME" },
    { name: "Blue Water Lily", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In ancient Egypt, blue lotus was used in rituals, celebrations and burials. It has also been used medicinally as an aphrodisiac and for calming.",
      source: "brpc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Blue lotus is thought to contain two chemicals, apomorphine and nuciferine, that act on the brain. Lab tests of products sold in shops found very different amounts of these chemicals, and some had little or none.\n\nTechnical detail: apomorphine is a non-selective dopamine agonist (approved as an injection for Parkinson's disease \"off\" periods); nuciferine acts at 5-HT2, 5-HT1A and dopamine D2, D4 and D5 receptors.",
      source: "brpc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2023 report, five soldiers went to the emergency room after vaping blue lotus or drinking a drink made with it. They were drowsy and had disturbances in what they saw or sensed. All got better with supportive care, without needing sedating medicines.",
      source: "schimpf",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Blue lotus can cause confusion, agitation, strange behavior, drowsiness and hallucinations. In one reported case, a 22-year-old man who had vaped blue lotus for several weeks had seizures and kidney and liver injury.\nSerious poisoning seems to be rare, but little is known about the short- and long-term effects of these products.",
      source: "brpc",
    },
    {
      category: "CONTAMINATION",
      description:
        "Blue lotus products aren't regulated by the FDA, so what's in them may not match the label. Some have contained added fragrances, and products may be mixed with other drugs such as synthetic cannabinoids.",
      source: "brpc",
    },
  ],
});
