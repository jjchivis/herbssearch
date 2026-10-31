import { run } from "./lib/populate-herb";

// Bharangi (Clerodendrum serratum, syn. Rotheca serrata), from a 2021 rat
// study of allergic asthma (Arora et al.) and a 2026 review of Thai plants for
// hemorrhoids (Inta et al.). No human trials were found. Family per GBIF.

run({
  name: "Bharangi",
  profile: {
    family: "Lamiaceae",
    genus: "Rotheca",
    species: "serrata",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The roots and leaves",
  },
  sources: {
    arora: {
      title: "Clerodendrum serratum extract attenuates production of inflammatory mediators in ovalbumin-induced asthma in rats",
      author: "Arora P, Ansari SH, Nainwal LM",
      journal: "Turkish Journal of Chemistry",
      publicationDate: "2021-11-04",
      doi: "10.3906/kim-2107-22",
      pmid: "38143476",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10734715/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    inta: {
      title: "An ethnobotanical review of medicinal plants used for treating hemorrhoids in Thailand",
      author: "Inta A, Kantasrila R, Panyadee P, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-04-24",
      doi: "10.3389/fphar.2026.1705134",
      pmid: "42110541",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13152847/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Clerodendrum serratum", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bharangi is a well-known remedy for allergies in Asian folk medicine.",
      source: "arora",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Thailand it is one of the plants most often used to treat hemorrhoids.",
      source: "inta",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with allergic asthma, a root extract reduced airway inflammation and allergy signals and improved breathing.",
      source: "arora",
    },
  ],
});
