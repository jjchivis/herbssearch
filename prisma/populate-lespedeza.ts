import { run } from "./lib/populate-herb";

// Lespedeza / bush clover (Lespedeza spp., mainly L. cuneata, L. bicolor and
// L. capitata), from a 2025 review of their traditional uses and lab research
// (Chitiala et al.). No safety sources, so none are listed.

run({
  name: "Lespedeza",
  profile: {
    family: "Fabaceae",
    genus: "Lespedeza",
    species: "spp.",
    nativeRange: "About 40 species in temperate and subtropical regions, mostly East Asia and North America",
    partsUsed: "The leaves, stems and flowering tops",
  },
  sources: {
    chitiala: {
      title: "Comparative Analysis of Lespedeza Species: Traditional Uses and Biological Activity of the Fabaceae Family",
      author: "Chitiala RD, Lungu II, Marin GA, et al.",
      journal: "Molecules",
      publicationDate: "2025-04-30",
      doi: "10.3390/molecules30092013",
      pmid: "40363818",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073664/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bush Clover", type: "COMMON_NAME" },
    { name: "Lespedeza cuneata", type: "COMMON_NAME" },
    { name: "Lespedeza bicolor", type: "COMMON_NAME" },
    { name: "Lespedeza capitata", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Lespedeza species have been used in folk medicine for centuries, especially in East Asia. In Korea and Japan they're used for skin rashes, inflammatory conditions and to support the liver. Some species are also used to calm the gut and as a mild laxative. Round-headed bush clover (Lespedeza capitata) is sold in over-the-counter supplements for kidney health, based on a supposed ability to reduce inflammation in the kidneys; this hasn't been proven in people.",
      source: "chitiala",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lespedeza plants are rich in plant compounds such as quercetin, rutin and catechin. In lab studies, extracts acted as antioxidants, lowered inflammation signals in immune cells, blocked the build-up of sugar-damaged proteins linked to diabetes, and slowed or killed some cancer cells. Chinese bush clover (L. cuneata) showed the strongest antioxidant activity of the species compared. These effects haven't been tested in people.\n\nTechnical detail: L. cuneata DPPH IC50 20–25 µg/mL; L. bicolor inhibited advanced glycation end-product formation; reduced TNF-α and IL-6 via NF-κB in macrophage models.",
      source: "chitiala",
    },
  ],
});
