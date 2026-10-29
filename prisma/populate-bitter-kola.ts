import { run } from "./lib/populate-herb";

// Bitter Kola (Garcinia kola), from a 2026 survey of its traditional use in
// Nigeria compared with research (Ukut et al.) and a 2008 knee arthritis trial
// (Adegbehingbe et al.). Family per GBIF.

run({
  name: "Bitter Kola",
  profile: {
    family: "Clusiaceae",
    genus: "Garcinia",
    species: "kola",
    nativeRange: "West and Central Africa",
    partsUsed: "The seeds (nuts), usually chewed fresh",
  },
  sources: {
    ukut: {
      title: "Traditional use of Garcinia kola Heckel in Nigeria - the results of questionnaire survey compared with scientific evidence",
      author: "Ukut UO, Csikós E, Papp N, Purger D",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2026-02-16",
      doi: "10.1186/s12906-026-05287-5",
      pmid: "41699612",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13014730/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adegbehingbe: {
      title: "Clinical effects of Garcinia kola in knee osteoarthritis",
      author: "Adegbehingbe OO, Adesanya SA, Idowu TO, Okimi OC, Oyelami OA, Iwalewa EO",
      journal: "Journal of Orthopaedic Surgery and Research",
      publicationDate: "2008-07-30",
      doi: "10.1186/1749-799X-3-34",
      pmid: "18667082",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2526991/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Garcinia kola", type: "SCIENTIFIC_SYNONYM" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Chewed in social ceremonies and for many ailments." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bitter kola nuts are chewed in West and Central African social ceremonies and used for malaria, breathing infections, stomach upsets, hepatitis, and metabolic and sexual problems. In a survey of 152 Nigerians, mostly Ibibio, Annang and Igbo, most chewed the fresh seeds for breathing symptoms, stomach upset and general well-being.",
      source: "ukut",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Research supports some of these uses, including antioxidant, immune, stomach, liver, blood sugar, breathing, reproductive and pain-relieving effects, and possible antimicrobial and liver-protecting activity. Standard doses and safety for each part of the plant still need to be worked out.",
      source: "ukut",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 6-week trial in Nigeria, 84 people with knee arthritis took bitter kola (200 mg twice a day), a placebo, or the painkillers naproxen or celecoxib. Bitter kola reduced pain and stiffness and improved walking compared with the placebo. It worked about as well as the painkillers for pain, but started working more slowly and its effect didn't last as long.\n\nTechnical detail: randomized, placebo-controlled, double-blind; WOMAC pain VAS, p < 0.001 vs placebo.",
      source: "adegbehingbe",
    },
  ],
});
