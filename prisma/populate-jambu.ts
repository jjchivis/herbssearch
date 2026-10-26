import { run } from "./lib/populate-herb";

// Jambu (Acmella oleracea), from a 2026 review (Lee), a 2026 dental trial
// (Silva et al.), a 2025 dental anesthesia trial (Monteiro et al.) and a 2025
// lab and mouse study (Ferrara et al.). No safety sources were found. Family
// per GBIF.

run({
  name: "Jambu",
  profile: {
    family: "Asteraceae",
    genus: "Acmella",
    species: "oleracea",
    nativeRange: "Brazil and other tropical and subtropical regions",
    partsUsed: "The flower heads, leaves and roots",
  },
  sources: {
    lee: {
      title: "Botany, Ethnopharmacology, Phytochemistry, and Biological Activities of Acmella oleracea: A Comprehensive Review",
      author: "Lee BW",
      journal: "Molecules",
      publicationDate: "2026-02-15",
      doi: "10.3390/molecules31040677",
      pmid: "41752454",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12942783/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    silva: {
      title: "Effect of Acmella Oleracea (Jambu) Bioadhesive Film on Post-Bleaching Dental Sensitivity: A Randomised Clinical Trial",
      author: "Silva ADA, Wanderley ML, Leite DF, et al.",
      journal: "International Dental Journal",
      publicationDate: "2026-08-06",
      doi: "10.1016/j.identj.2026.109719",
      pmid: "42561887",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13474211/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    monteiro: {
      title: "Efficacy of lidocaine-prilocaine combined with amitriptyline or Acmella oleracea in a liposomal cream for topical anesthesia: a randomized crossover clinical trial",
      author: "Monteiro MHA, Alencar JAS, Dos Santos VAB, et al.",
      journal: "Journal of Dental Anesthesia and Pain Medicine",
      publicationDate: "2025-11-26",
      doi: "10.17245/jdapm.2025.25.6.409",
      pmid: "41377174",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12687999/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ferrara: {
      title: "Neuroprotective Potential of Acmella oleracea Aerial Parts and Root Extracts: The Role of Phenols and Alkylamides Against Neuropathic Pain",
      author: "Ferrara V, Zonfrillo B, Bellumori M, et al.",
      journal: "Nutrients",
      publicationDate: "2025-08-08",
      doi: "10.3390/nu17162588",
      pmid: "40871616",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12389297/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Toothache Plant", type: "COMMON_NAME" },
    { name: "Paracress", type: "COMMON_NAME" },
    { name: "Spilanthes oleracea", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [{ name: "Spilanthol", slug: "spilanthol", type: "alkylamide" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jambu, the \"toothache plant\", is traditionally used in Brazil and other warm regions to relieve tooth pain and inflammation, and as a culinary spice.",
      source: "lee",
    },
    {
      category: "PRECLINICAL",
      summary:
        "About 120 compounds have been found in jambu; the main active group is alkylamides such as spilanthol. In lab studies it has numbing, pain-relieving and antioxidant effects, may help reduce inflammation and kills some microbes.",
      source: "lee",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice given a cancer drug that causes nerve pain, extracts of the leaves and roots eased the pain, and larger doses worked better. In lab tests, they protected nerve cells from the drug.\n\nTechnical detail: oxaliplatin model; 200–1200 mg/kg intraperitoneally; cold plate test; SH-SY5Y cells.",
      source: "ferrara",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial, 72 people having their teeth bleached received a jambu film, a standard desensitizing gel or a placebo before each session. The jambu group had the least tooth sensitivity over 21 days, and whitening still worked.\n\nTechnical detail: 35% hydrogen peroxide; comparator 5% potassium nitrate + 2% sodium fluoride; VAS, P < .001.",
      source: "silva",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 40 volunteers, adding jambu extract to a numbing cream for the gums worked moderately well, but not as well as the standard cream alone. None of the creams numbed the teeth themselves.\n\nTechnical detail: lidocaine 2.5% + prilocaine 2.5% + jambu extract 20% (7.5% spilanthol); randomized, blinded crossover.",
      source: "monteiro",
    },
  ],
});
