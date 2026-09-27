import { run } from "./lib/populate-herb";

// Alfalfa (Medicago sativa), from verified sources: Memorial Sloan Kettering's
// About Herbs entry (2023) and a lab study on skin cells (Zagórska-Dziok et al.
// 2020). Family per GBIF / Catalogue of Life. There is no research on alfalfa on
// the skin in people; its skin link rests on lab work only.

run({
  name: "Alfalfa",
  profile: {
    family: "Fabaceae",
    genus: "Medicago",
    species: "sativa",
    partsUsed: "The leaves, seeds and sprouts",
  },
  sources: {
    mskcc: {
      title: "Alfalfa",
      organization: "Memorial Sloan Kettering Cancer Center, About Herbs",
      publicationDate: "2023-04-05",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/alfalfa",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    zagorska: {
      title: "Antioxidant Activity and Cytotoxicity of Medicago sativa L. Seeds and Herb Extract on Skin Cells",
      author: "Zagórska-Dziok M, Ziemlewska A, Nizioł-Łukaszewska Z, Bujak T",
      journal: "BioResearch Open Access",
      organization: "BioResearch Open Access",
      publicationDate: "2020-10-23",
      doi: "10.1089/biores.2020.0015",
      pmid: "33117615",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7590823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Lucerne", type: "COMMON_NAME" },
    { name: "Buffalo Herb", type: "COMMON_NAME" },
    { name: "Purple Medick", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Alfalfa leaves and seeds are thought to increase urination and have been used for diabetes, thyroid problems, arthritis, high cholesterol, stomach ulcers, asthma and hay fever, and to bring on menstruation and increase breast milk. It is also promoted as a source of vitamins A, C, E and K and minerals.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on human skin cells, extracts of alfalfa seeds and leaves were rich in flavonoids and other plant compounds and showed strong antioxidant activity. The authors suggest alfalfa may be a useful ingredient in skin care products.",
      source: "zagorska",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab studies found alfalfa has plant estrogens that made hormone-sensitive breast cancer cells grow. Rats fed alfalfa were more likely to get colon cancer, though this hasn't been seen in people.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Two small, uncontrolled trials found alfalfa supplements lowered cholesterol in people with high cholesterol; larger trials are needed. There's no scientific evidence for its other uses, and no evidence it treats cancer.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't take alfalfa if you have:\n- Lupus: alfalfa tablets have caused relapses in people whose lupus was in remission\n- Gout: alfalfa is high in purines and may raise uric acid levels",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "Because of its hormone-like effects, avoid alfalfa during pregnancy and breastfeeding.",
      source: "mskcc",
    },
    {
      category: "CONTAMINATION",
      description:
        "Alfalfa sprouts and seeds have caused outbreaks of food poisoning (E. coli and Salmonella), including deaths. Listeria infection has been reported from contaminated alfalfa tablets.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Alfalfa supplements can cause loose stools, diarrhea, belly discomfort and gas.",
      source: "mskcc",
    },
  ],
  symptoms: [
    {
      slug: "scars-and-skin-aging",
      notes: "Extracts showed antioxidant activity on skin cells in the lab. It hasn't been tested on skin in people.",
    },
    { slug: "high-cholesterol", notes: "Two small, uncontrolled trials found alfalfa supplements lowered cholesterol." },
  ],
});
