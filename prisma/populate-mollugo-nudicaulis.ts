import { run } from "./lib/populate-herb";

// Mollugo nudicaulis, from a 2015 survey in eastern Madagascar (Rakotoarivelo
// et al.), a 2020 survey of Luo herbalists in Kenya (Mailu et al.) and a 2021 lab
// study (Palanisamy et al.). Family per GBIF.

run({
  name: "Mollugo Nudicaulis",
  profile: { family: "Molluginaceae", genus: "Mollugo", species: "nudicaulis", nativeRange: "Tropical Africa, Asia and Madagascar", partsUsed: "The whole plant and leaves" },
  sources: {
    rakoto: {
      title: "Medicinal plants used to treat the most frequent diseases encountered in Ambalabe rural community, Eastern Madagascar",
      author: "Rakotoarivelo NH, Rakotoarivony F, Ramarosandratana AV, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2015-09-15",
      doi: "10.1186/s13002-015-0050-2",
      pmid: "26369781",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4570514/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mailu: {
      title: "Medicinal plants used in managing diseases of the respiratory system among the Luo community: an appraisal of Kisumu East Sub-County, Kenya",
      author: "Mailu JK, Nguta JM, Mbaria JM, Okumu MO",
      journal: "Chinese Medicine",
      publicationDate: "2020-09-03",
      doi: "10.1186/s13020-020-00374-2",
      pmid: "32905471",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7469313/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    palanisamy: {
      title: "MTT assay based inhibition analysis of A2780 cells proliferation using Mollugo nudicaulis Lam. extract with CXCR4 and HER2 expression",
      author: "Palanisamy CP, Jh SF, Sekar R, et al.",
      journal: "Bioinformation",
      publicationDate: "2021-07-31",
      doi: "10.6026/97320630017705",
      pmid: "35283583",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8882075/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Aferotany", type: "REGIONAL_NAME", region: "Madagascar (Betsimisaraka)" },
    { name: "Ataro", type: "REGIONAL_NAME", region: "Kenya (Luo)" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In a remote community in eastern Madagascar it was the most used medicinal plant: the whole plant is boiled or steeped and drunk for malaria and stomach-ache.",
      source: "rakoto",
    },
    {
      category: "TRADITIONAL",
      summary: "Luo herbalists in Kenya chew the leaves or drink a decoction for cough, and it's also used for whooping cough and jaundice.",
      source: "mailu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, an extract slowed the growth of ovarian cancer cells.",
      source: "palanisamy",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No toxicity data were found for this plant.",
      source: "mailu",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Luo herbalists in Kenya use the leaves for cough. Not studied in people." },
    { slug: "fever", notes: "A Madagascar remedy for malaria. Not studied in people." },
  ],
});
