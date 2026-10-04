import { run } from "./lib/populate-herb";

// Bermuda Grass (Cynodon dactylon, durva), from rat studies of durva swaras, an
// Ayurvedic preparation (Singh et al. 2021, Sindhoora et al. 2024), a rat study
// in polycystic ovary syndrome (Ahmadi et al. 2025) and a study of Bermuda grass
// pollen allergy (Liao et al. 2020).

run({
  name: "Bermuda Grass",
  profile: {
    family: "Poaceae",
    genus: "Cynodon",
    species: "dactylon",
    partsUsed: "The whole plant, often as fresh juice (durva swaras)",
  },
  sources: {
    singh: {
      title: "Pharmacological properties of durva swaras (Cynodon dactylon L. Pers.) in an ovariectomised rat model mimicking chronic menopausal syndrome",
      author: "Singh V, Singh A, Quadri SSYH, et al.",
      journal: "Biomedicine & Pharmacotherapy",
      publicationDate: "2021-08-02",
      doi: "10.1016/j.biopha.2021.111976",
      pmid: "34352715",
      url: "https://pubmed.ncbi.nlm.nih.gov/34352715/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sindhoora: {
      title: "Pharmacological benefits of durva swaras (Cynodon dactylon L. Pers.) administration in APAP-induced liver injury model of mice",
      author: "Sindhoora B, Singh V, Mungamuri SK, Bharatraj DK",
      journal: "Indian Journal of Pharmacology",
      publicationDate: "2024-07-01",
      doi: "10.4103/ijp.ijp_133_24",
      pmid: "39250623",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11483052/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ahmadi: {
      title: "Therapeutic Effects of Cynodon dactylon against Polycystic Ovary Syndrome Induced by Letrozole in Adult Rats: Ovarian and Uterine Aspects",
      author: "Ahmadi M, Zare A, Jafarzadeh Shirazi MR, et al.",
      journal: "International Journal of Fertility & Sterility",
      publicationDate: "2025-03-11",
      doi: "10.22074/ijfs.2024.2020015.1608",
      pmid: "40200779",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11976885/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liao: {
      title: "Major Pollen Allergen Components and CCD Detection in Bermuda Grass Sensitized Patients in Guangzhou, China",
      author: "Liao C, Liang C, Hu H, Luo W, Wu G, Huang Z, Wu L, Sun B",
      journal: "Journal of Asthma and Allergy",
      publicationDate: "2020-11-16",
      doi: "10.2147/JAA.S277704",
      pmid: "33235472",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7678699/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Durva", type: "TRADITIONAL_NAME" },
    { name: "Durva Swaras", type: "TRADITIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bermuda grass has traditionally been used for women's hormonal problems. In India it's known as durva, and a juice preparation called durva swaras has been studied as a herbal medicine.",
      source: "ahmadi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 160-day study of rats with a condition like menopause, durva swaras was tested as an alternative to hormone therapy. Rats given higher doses had less body fat than rats given estrogen. These results haven't been tested in people.",
      source: "singh",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, durva swaras taken beforehand protected the liver from damage caused by a paracetamol (acetaminophen) overdose.",
      source: "sindhoora",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with a condition like polycystic ovary syndrome (PCOS), a Bermuda grass extract improved their reproductive cycles.",
      source: "ahmadi",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Bermuda grass pollen is a common airborne allergen.",
      source: "liao",
    },
  ],
});
