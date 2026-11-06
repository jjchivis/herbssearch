import { run } from "./lib/populate-herb";

// Vitex negundo (lagundi, nirgundi), from a 2022 comparison of 53 Philippine
// medicinal plants that notes its Philippine FDA approval (Clemen-Pascual et al.),
// a 2023 review (Sharma et al.), a 2015 review (Zheng et al.) and a 2012 mouse
// cough and toxicity study (Haq et al.). Not the same plant as chaste tree (Vitex
// agnus-castus). Family per GBIF.

run({
  name: "Vitex Negundo",
  profile: { family: "Lamiaceae", genus: "Vitex", species: "negundo", nativeRange: "South and Southeast Asia, China and East Africa", partsUsed: "The leaves, and also roots and seeds" },
  sources: {
    clemen: {
      title: "Comparative toxicity, phytochemistry, and use of 53 Philippine medicinal plants",
      author: "Clemen-Pascual LM, Macahig RAS, Rojas NRL",
      journal: "Toxicology Reports",
      publicationDate: "2021-12-10",
      doi: "10.1016/j.toxrep.2021.12.002",
      pmid: "34976744",
      url: "https://doi.org/10.1016/j.toxrep.2021.12.002",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sharma: {
      title: "Chemical Diversity and Medicinal Potential of Vitex negundo L.: From Traditional Knowledge to Modern Clinical Trials",
      author: "Sharma D, Radha, Kumar M, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2023-11-02",
      doi: "10.1002/cbdv.202301086",
      pmid: "37851484",
      url: "https://doi.org/10.1002/cbdv.202301086",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zheng: {
      title: "Phytochemical and Pharmacological Profile of Vitex negundo",
      author: "Zheng CJ, Li HQ, Ren SC, et al.",
      journal: "Phytotherapy Research",
      publicationDate: "2015-05-01",
      doi: "10.1002/ptr.5303",
      pmid: "25641408",
      url: "https://doi.org/10.1002/ptr.5303",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    haq: {
      title: "Antitussive and toxicological evaluation of Vitex negundo",
      author: "Haq RU, Shah AU, Khan AU, et al.",
      journal: "Natural Product Research",
      publicationDate: "2012-01-01",
      doi: "10.1080/14786419.2010.534472",
      pmid: "21809956",
      url: "https://doi.org/10.1080/14786419.2010.534472",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Lagundi", type: "REGIONAL_NAME", region: "Philippines" },
    { name: "Nirgundi", type: "REGIONAL_NAME", region: "India" },
    { name: "Five-Leaved Chaste Tree", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary: "In the Philippines, lagundi is approved by the national FDA as an herbal medicine for cough and asthma after passing clinical trials for safety and effectiveness.",
      source: "clemen",
    },
    {
      category: "TRADITIONAL",
      summary: "Called nirgundi in Ayurveda, its leaves, roots and seeds are used for pain, inflammation, wounds and skin problems.",
      source: "sharma",
    },
    {
      category: "TRADITIONAL",
      summary: "It's also a respected herbal medicine in China and Japan.",
      source: "zheng",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, an extract cut coughing by about two-thirds, close to the effect of codeine.",
      source: "haq",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In mice, very high doses of an extract caused no deaths or signs of nerve or behavior problems.",
      source: "haq",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Approved in the Philippines as an herbal cough medicine." },
    { slug: "asthma-and-wheezing", notes: "Approved in the Philippines as an herbal medicine for asthma." },
  ],
});
