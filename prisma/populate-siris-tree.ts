import { run } from "./lib/populate-herb";

// Siris Tree, shirisha (Albizia lebbeck), from a 2026 systematic review of the
// Ayurvedic formula Panchashirishadi Agad (Manyala & Chalakh) and a 2019 rat
// study for Parkinson's disease (Saleem et al.). Family per GBIF.

run({
  name: "Siris Tree",
  profile: {
    family: "Fabaceae",
    genus: "Albizia",
    species: "lebbeck",
    nativeRange: "Tropical Asia; now planted worldwide",
    partsUsed: "The bark, leaves, seeds, roots and pods",
  },
  sources: {
    manyala: {
      title: "Panchashirishadi Agad: A Systematic Review of its Anti-Allergic and Immunomodulatory Potential of Albizia lebbeck",
      author: "Manyala S, Chalakh S",
      journal: "Journal of Pharmacy & Bioallied Sciences",
      publicationDate: "2026-02-14",
      doi: "10.4103/jpbs.jpbs_1562_25",
      pmid: "42005481",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13086376/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    saleem: {
      title: "Systems pharmacology based approach to investigate the in-vivo therapeutic efficacy of Albizia lebbeck (L.) in experimental model of Parkinson's disease",
      author: "Saleem U, Raza Z, Anwar F, Chaudary Z, Ahmad B",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2019-12-05",
      doi: "10.1186/s12906-019-2772-5",
      pmid: "31805998",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6896792/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Shirisha", type: "TRADITIONAL_NAME" },
    { name: "Lebbeck", type: "COMMON_NAME" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Main ingredient of Panchashirishadi Agad, a classic formula for allergies and poisoning." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Siris (shirisha) is the main ingredient of Panchashirishadi Agad, a classic Ayurvedic formula for allergies and poisoning. Its bark, leaves, seeds, roots and pods are all used in Ayurveda.",
      source: "manyala",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 systematic review of 17 studies found the bark and leaves reduced inflammation and acted like antihistamines. In clinical studies, people with asthma who took stem bark preparations breathed better. Better trials are needed.",
      source: "manyala",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with a model of Parkinson's disease, siris extract improved movement and endurance and restored the brain's antioxidant defenses.",
      source: "saleem",
    },
  ],
});
