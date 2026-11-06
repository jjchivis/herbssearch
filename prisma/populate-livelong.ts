import { run } from "./lib/populate-herb";

// Livelong (Hylotelephium telephium, syn. Sedum telephium), from a 2024 lab
// study of its leaf juice on cold sores (Arvia et al.) and a 2024 study of its
// wound-healing properties (Dalla Costa et al.). Family per GBIF; USDA PLANTS
// lists it as witch's moneybags.

run({
  name: "Livelong",
  profile: { family: "Crassulaceae", genus: "Hylotelephium", species: "telephium", partsUsed: "The fresh leaves" },
  sources: {
    arvia: {
      title: "Hylotelephium telephium (L) H. Ohba leaves juice improves herpetic lesions: new findings from in vitro investigations",
      author: "Arvia R, Biagi M, Baini G, et al.",
      journal: "Natural Product Research",
      publicationDate: "2024-11-04",
      doi: "10.1080/14786419.2024.2423378",
      pmid: "39494633",
      url: "https://doi.org/10.1080/14786419.2024.2423378",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dallaCosta: {
      title: "From Ethnobotany to Biotechnology: Wound Healing and Anti-Inflammatory Properties of Sedum telephium L. In Vitro Cultures",
      author: "Dalla Costa V, Piovan A, Filippini R, Brun P",
      journal: "Molecules",
      publicationDate: "2024-05-24",
      doi: "10.3390/molecules29112472",
      pmid: "38893348",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11173831/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Sedum telephium", type: "SCIENTIFIC_SYNONYM" },
    { name: "Witch's Moneybags", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A succulent used in Italian folk medicine. Fresh leaves or their juice are put on burns, warts, wounds and other local inflammation, and the juice is used on cold sores.",
      source: "dallaCosta",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, the leaf juice didn't kill the cold sore virus, but it helped skin cells survive and calmed immune cells. This may explain why it seems to help cold sores.",
      source: "arvia",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, juices from the plant and its cell cultures eased inflammation and helped close wounds in a cell model. They're rich in kaempferol and quercetin.",
      source: "dallaCosta",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "There are no human safety studies.",
      source: "arvia",
    },
  ],
});
