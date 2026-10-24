import { run } from "./lib/populate-herb";

// Achiote (Bixa orellana), from a 2026 review of bixin (Hashmi et al.), a 2025
// randomized trial of a topical ointment on surgical scars (Chew et al.) and a
// 2023 review of rare food allergens in children (Tomei et al.). Family per GBIF.

run({
  name: "Achiote Tree",
  profile: {
    family: "Bixaceae",
    genus: "Bixa",
    species: "orellana",
    partsUsed: "The seeds, whose red coating gives annatto coloring",
  },
  sources: {
    hashmi: {
      title: "Bixin Beyond Colour: Expanding Therapeutic Horizons Through the Integration of Pharmacological Potential with Modern Drug Design and Delivery Strategies",
      author: "Hashmi AR, Sekar M, Wong LS, et al.",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2026-02-11",
      doi: "10.2147/dddt.s556587",
      pmid: "41710583",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12912046/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chew: {
      title: "Topical Bixa orellana for Postoperative Wound Healing: A Prospective Randomized Controlled Trial",
      author: "Chew JT, Xu JJ, Goff TAJ, et al.",
      journal: "Foot & Ankle Orthopaedics",
      publicationDate: "2025-04-01",
      doi: "10.1177/24730114251345821",
      pmid: "40585345",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12202939/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tomei: {
      title: "Hidden and Rare Food Allergens in Pediatric Age",
      author: "Tomei L, Muraro A, Giovannini M, et al.",
      journal: "Nutrients",
      publicationDate: "2023-03-13",
      doi: "10.3390/nu15061386",
      pmid: "36986115",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10058883/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Annatto", type: "COMMON_NAME" },
    { name: "Urucu", type: "REGIONAL_NAME" },
  ],
  constituents: [{ name: "Bixin", slug: "bixin", type: "carotenoid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Achiote is native to the tropical Americas. Its seeds give annatto, a red-orange coloring used widely in foods (food additive E160b). In folk medicine it has been used for skin infections, burns, stomach ulcers, diabetes and high blood pressure.",
      source: "hashmi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Bixin, the main coloring compound in the seeds, acts as an antioxidant in the lab. In animal studies, the seeds lowered blood fats.",
      source: "hashmi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 2025 trial in adults after foot and ankle surgery, an achiote (urucu) ointment applied for 4 weeks made scars look closer to normal skin than a standard ointment, especially in color and softness. The authors say the results should be read with caution because the trial was small and short.\n\nTechnical detail: overall observer POSAS 2.56 vs 3.33 for control.",
      source: "chew",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Allergic reactions to annatto coloring are rare, but two cases have been reported in young children, including recurring hives after eating food containing annatto.",
      source: "tomei",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In the scar trial, 2 people had a skin reaction or itching from the ointment, which went away when they stopped using it.",
      source: "chew",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A small trial found an achiote ointment improved the look of surgical scars." },
  ],
  preparations: [
    { slug: "salve", notes: "An achiote (urucu) ointment was applied to healing surgical scars in a trial.", source: "chew" },
    { slug: "culinary-preparation", notes: "The seeds give annatto, a red-orange food coloring.", source: "hashmi" },
  ],
});
