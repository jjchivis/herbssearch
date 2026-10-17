import { run } from "./lib/populate-herb";

// Shi Hu (Dendrobium stem, Dendrobii Caulis), from a 2026 review of the Dendrobium
// genus and cardiovascular protection (Hu et al.) and a 2025 review of Dendrobium
// polysaccharides in eye disease (Liu et al.).

run({
  name: "Shi Hu",
  profile: {
    family: "Orchidaceae",
    genus: "Dendrobium",
    species: "nobile and related species",
    partsUsed: "The fleshy stems of the orchid",
  },
  sources: {
    hu: {
      title: "Chemical Constituents, Pharmacological Activities, and Cardiovascular Protective Mechanisms of Dendrobium",
      author: "Hu Y, Li Z, Li J, Li X, Wang M",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-06",
      doi: "10.3390/ijms27094149",
      pmid: "42123725",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13164088/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liu: {
      title: "Inhibition of retinal neovascularization by Dendrobium polysaccharides: a review",
      author: "Liu D, Chen X, Cai S",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-06-30",
      doi: "10.3389/fphar.2025.1584553",
      pmid: "40661075",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12256514/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dendrobium", type: "COMMON_NAME" },
    { name: "Shihu", type: "TRADITIONAL_NAME" },
    { name: "Dendrobii Caulis", type: "COMMON_NAME" },
    { name: "Dendrobium officinale", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called shi hu; ranked a premium herb in the Shennong Herbal Classic and used to strengthen the eyes and nourish yin." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Shi hu is the fleshy stem of Dendrobium orchids, a large group of about 1,500 species found across Asia, Europe and Australia. The Shennong Herbal Classic ranked it a premium medicinal herb. Several species are used, including Dendrobium nobile and Dendrobium officinale.",
      source: "hu",
    },
    {
      category: "TRADITIONAL",
      summary: "Chinese medicine regards dendrobium as a herb that strengthens the eyes and nourishes yin, uses recorded in the Compendium of Materia Medica.",
      source: "liu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, dendrobium compounds acted as antioxidants, may help reduce inflammation, improved blood fats, slowed hardening of the arteries, reduced heart scarring and lowered blood pressure. Studies in people are extremely limited.",
      source: "hu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, dendrobium polysaccharides slowed the growth of abnormal blood vessels in the retina, which damage vision in conditions such as diabetic eye disease.",
      source: "liu",
    },
  ],
});
