import { run } from "./lib/populate-herb";

// Sassafras (Sassafras albidum), from a 2025 review and survey of eastern
// Kentucky medicinal plants (Veldhi et al.) and the US FDA regulation on
// safrole (21 CFR 189.180). Family per GBIF.

run({
  name: "Sassafras",
  profile: {
    family: "Lauraceae",
    genus: "Sassafras",
    species: "albidum",
    nativeRange: "Eastern North America",
    partsUsed: "The root and root bark",
  },
  sources: {
    veldhi: { title: "A Review and Survey of Local Eastern Kentucky Medicinal Plants and Their Pharmacological Benefits", author: "Veldhi P, Crager C, Ghayur A, Ul-Haq Z, Ghayur MN", journal: "Plants", publicationDate: "2025-10-16", doi: "10.3390/plants14203182", pmid: "41157739", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566942/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    fda: {
      title: "21 CFR 189.180 — Safrole (substances prohibited from use in human food)",
      organization: "U.S. Food and Drug Administration",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-189/subpart-C/section-189.180",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  constituents: [{ name: "Safrole", slug: "safrole", type: "phenylpropene" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Root tea used as a tonic and for bronchitis in Appalachia." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Appalachia, sassafras root is made into a tea for bronchitis and used as a tonic. The root bark tea was traditionally used to cause sweating, as a stimulant, to increase urination and to relieve gas. In the late 1800s, sassafras oil was recommended for nerve pain and toothache.",
      source: "veldhi",
    },
    {
      category: "PRECLINICAL",
      summary: "Its oil is mostly safrole, which acts as a mild numbing agent. The bark has also been used as an insect repellent.",
      source: "veldhi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Sassafras contains safrole, a known cancer-causing substance.",
      source: "veldhi",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "In the US, food containing added safrole or sassafras oil, including sassafras tea, is banned. Sassafras oil is about 80% safrole.",
      source: "fda",
    },
  ],
});
