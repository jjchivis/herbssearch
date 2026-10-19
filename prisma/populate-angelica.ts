import { run } from "./lib/populate-herb";

// Angelica / garden angelica (Angelica archangelica), from a 2021 review of its
// pharmacology (Kaur & Bhatti) and the EMA/HMPC reflection paper on the risks of
// furocoumarins in Angelica archangelica preparations. Not the same plant as
// Dong Quai (Angelica sinensis) or Bai Zhi (Angelica dahurica).

run({
  name: "Angelica",
  profile: {
    family: "Apiaceae",
    genus: "Angelica",
    species: "archangelica",
    partsUsed: "The root, seeds and stems, used for flavouring and in traditional medicine",
  },
  sources: {
    kaur: {
      title: "Understanding the phytochemistry and molecular insights to the pharmacology of Angelica archangelica L. (garden angelica) and its bioactive components",
      author: "Kaur A, Bhatti R",
      journal: "Phytotherapy Research",
      publicationDate: "2021-07-12",
      doi: "10.1002/ptr.7206",
      pmid: "34254374",
      url: "https://pubmed.ncbi.nlm.nih.gov/34254374/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    emaFuro: {
      title: "Reflection paper on the risks associated with furocoumarins contained in preparations of Angelica archangelica L. (EMEA/HMPC/317913/2006)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2007-10-31",
      url: "https://www.ema.europa.eu/en/documents/scientific-guideline/final-reflection-paper-risks-associated-furocoumarins-contained-preparations-angelica-archangelica-l_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Garden Angelica", type: "COMMON_NAME" },
    { name: "Angelica archangelica", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Garden angelica is an aromatic plant used to flavour food. In traditional medicine it's called the \"angel plant\" because of the healing powers once credited to it.",
      source: "kaur",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, angelica extracts and their compounds (mainly coumarins and essential oils) have shown calming and anti-seizure effects, effects on memory, antiviral and stomach-protecting activity, and reduced inflammation. These haven't been confirmed in people.",
      source: "kaur",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Angelica root contains furocoumarins, natural compounds that can make skin react to sunlight. Europe's medicines agency says many of them can damage DNA and cause cancer when combined with UV light, and that their risk in herbal products is uncertain because data are lacking. Some furocoumarins are also eaten in everyday foods.\n\nTechnical detail: photogenotoxic and photocarcinogenic; risk assessed against 8-methoxypsoralen (8-MOP) as a worst case.",
      source: "emaFuro",
    },
  ],
});
