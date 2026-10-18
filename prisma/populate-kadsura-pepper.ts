import { run } from "./lib/populate-herb";

// Kadsura Pepper Stem (Piper kadsura, hai feng teng), from a 2025 review of its
// botany, traditional uses, chemistry and pharmacology (Pan et al.; abstract
// only).

run({
  name: "Kadsura Pepper Stem",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "kadsura",
    partsUsed: "The dried stems",
  },
  sources: {
    pan: {
      title: "Piper kadsura (Choisy) Ohwi: A comprehensive review of botany, traditional uses, phytochemistry, pharmacology, and quality control",
      author: "Pan H, Wang C, Qin Y, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2025-06-10",
      doi: "10.1016/j.jep.2025.120134",
      pmid: "40505754",
      url: "https://pubmed.ncbi.nlm.nih.gov/40505754/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hai Feng Teng", type: "TRADITIONAL_NAME" },
    { name: "Haifengteng", type: "TRADITIONAL_NAME" },
    { name: "Piperis Kadsurae Caulis", type: "COMMON_NAME" },
    { name: "Piper kadsura", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called hai feng teng; used for over 2,000 years to dispel rheumatism and relieve joint pain." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Hai feng teng has been used in East Asian medicine for over 2,000 years to \"dispel rheumatism\", open up the body's channels and relieve joint pain. It's mainly used to prevent and treat rheumatic diseases, on its own, in herbal formulas or in medicinal foods.",
      source: "pan",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its extracts and compounds may help reduce inflammation, relieved pain, acted as antioxidants, protected nerve cells in models of Alzheimer's disease, and showed activity against cancer cells and viruses. These haven't been confirmed in people.",
      source: "pan",
    },
  ],
  symptoms: [
    { slug: "joint-discomfort", notes: "A traditional Chinese remedy for rheumatic joint pain; relieved pain and inflammation in animal studies. Not tested in trials." },
  ],
});
