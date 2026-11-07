import { run } from "./lib/populate-herb";

// Vick's plant (Plectranthus tomentosa). Almost no research exists on this
// species, so at the site owner's request this page summarizes research on its
// most-studied close relative in the same plant group, Coleus amboinicus (syn.
// Plectranthus amboinicus, Cuban oregano), and says so clearly. Sources: a 2025
// systematic review of P. amboinicus and a 2018 network meta-analysis of
// breast-milk boosters. Family per GBIF. No source covering safety was found.

run({
  name: "Vick's Plant",
  profile: {
    family: "Lamiaceae",
    genus: "Plectranthus",
    species: "tomentosa",
    partsUsed: "The leaves",
  },
  sources: {
    santosFilipe: {
      title: "Plectranthus amboinicus: A Systematic Review of Traditional Uses, Phytochemical Properties, and Therapeutic Applications",
      author: "Santos Filipe M, Bangay G, Brauning FZ, et al.",
      journal: "Pharmaceuticals",
      publicationDate: "2025-05-10",
      doi: "10.3390/ph18050707",
      pmid: "40430526",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12114729/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    khan: {
      title: "Effectiveness of fenugreek as a galactagogue: A network meta-analysis",
      author: "Khan TM, Wu DB, Dolzhenko AV",
      journal: "Phytotherapy Research",
      publicationDate: "2017-11-30",
      doi: "10.1002/ptr.5972",
      pmid: "29193352",
      url: "https://doi.org/10.1002/ptr.5972",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Vicks Plant", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Hardly any research has been done on Vick's plant itself. The research on this page is on its most-studied relative, Coleus amboinicus (also called Plectranthus amboinicus or Cuban oregano), so it may not apply to Vick's plant.\n\nIn India, the leaf juice of Coleus amboinicus is applied for coughs, sore throats, a stuffy nose, asthma and bronchitis. In Southeast Asia it is used for skin conditions, in India and Nigeria for convulsions, epilepsy and headaches, and in tropical countries for malaria fever.",
      source: "santosFilipe",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, Coleus amboinicus extracts and oils killed many bacteria and skin fungi, repelled mosquitoes about as well as DEET, reduced inflammation, acted as antioxidants, killed some cancer cells and helped wounds heal. A 2025 review said clinical trials are still needed.",
      source: "santosFilipe",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2018 analysis of studies on herbs to increase breast milk found that Coleus amboinicus and dates boosted milk production more than fenugreek and the other comparisons.",
      source: "khan",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Based on its relative Coleus amboinicus, whose leaf juice is used in India for coughs and colds; not tested on Vick's plant." },
    { slug: "breast-milk-supply", notes: "Based on its relative Coleus amboinicus, which increased breast milk in studies; not tested on Vick's plant." },
  ],
});
