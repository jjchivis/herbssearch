import { run } from "./lib/populate-herb";

// Yellow Mombin (Spondias mombin), from a 2023 review (Ogunro et al.), a 2024
// review of Amazon fruits (Almeida et al.) and a 2022 rat study (Gobinath et
// al.). No human studies were found. Family per GBIF.

run({
  name: "Yellow Mombin",
  profile: {
    family: "Anacardiaceae",
    genus: "Spondias",
    species: "mombin",
    nativeRange: "The tropical Americas; also grown in West Africa and other tropical regions",
    partsUsed: "The fruit, leaves, flowers, seeds and stem bark",
  },
  sources: {
    ogunro: {
      title: "Nutritional benefits, ethnomedicinal uses, phytochemistry, pharmacological properties and toxicity of Spondias mombin Linn: a comprehensive review",
      author: "Ogunro OB, Oyeyinka BO, Gyebi GA, Batiha GE",
      journal: "Journal of Pharmacy and Pharmacology",
      publicationDate: "2023-02-01",
      doi: "10.1093/jpp/rgac086",
      pmid: "36632807",
      url: "https://pubmed.ncbi.nlm.nih.gov/36632807/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    almeida: {
      title: "Botanical, nutritional, phytochemical characteristics, and potential health benefits of murici (Byrsonima crassifolia) and taperebá (Spondias mombin): insights from animal and cell culture models",
      author: "Almeida CORP, Martinez RM, Figueiredo MS, Teodoro AJ",
      journal: "Nutrition Reviews",
      publicationDate: "2024-02-01",
      doi: "10.1093/nutrit/nuad065",
      pmid: "37349898",
      url: "https://pubmed.ncbi.nlm.nih.gov/37349898/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gobinath: {
      title: "Antidiabetic and Antihyperlipidemic Effects of Methanolic Extract of Leaves of Spondias mombin in Streptozotocin-Induced Diabetic Rats",
      author: "Gobinath R, Parasuraman S, Sreeramanan S, Enugutti B, Chinni SV",
      journal: "Frontiers in Physiology",
      publicationDate: "2022-05-10",
      doi: "10.3389/fphys.2022.870399",
      pmid: "35620596",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9128744/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hog Plum", type: "COMMON_NAME" },
    { name: "Taperebá", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Cajá", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Yellow mombin is used as an herbal medicine across the tropics, including in Africa. It's most often used for:\n- constipation, diarrhea, dysentery and stomach pain\n- fever\n- wounds\n- gonorrhea\n- bleeding after childbirth\n- to cause abortion",
      source: "ogunro",
    },
    {
      category: "PRECLINICAL",
      summary:
        "About 102 compounds have been found in the leaves, fruit and bark. The Amazon fruit, called taperebá, is a source of vitamins, minerals and antioxidant phenolic compounds. In lab and animal studies, the fruit, leaves and seeds showed antioxidant activity, may help reduce inflammation, and had effects on blood sugar, cholesterol and mood.",
      source: "almeida",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, a leaf extract given for 28 days lowered blood sugar and cholesterol and raised insulin and HDL (\"good\") cholesterol.\n\nTechnical detail: methanolic extract 125–500 mg/kg orally; streptozotocin model; compared with glibenclamide.",
      source: "gobinath",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "It's traditionally used to cause abortion.",
      source: "ogunro",
    },
    {
      category: "DOSAGE",
      description: "The review's authors advise caution with the amount taken, and to follow medical advice.",
      source: "ogunro",
    },
  ],
});
