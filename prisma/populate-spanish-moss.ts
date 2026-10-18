import { run } from "./lib/populate-herb";

// Spanish moss (Tillandsia usneoides, a flowering plant in the pineapple family,
// not a true moss), from a 2022 mouse study of its extract in breast cancer and
// melanoma (Lasso et al.), a 2021 lab and mouse study of its effect on blood sugar
// (Miranda-Nuñez et al.) and a 2024 review of Humboldt's records of useful North
// American plants (Baratto & Päßler), and a 2025 study of its effect on rat brain
// cells (Villarreal Romero et al.). No safety sources, so none are listed.

run({
  name: "Spanish Moss",
  profile: {
    family: "Bromeliaceae",
    genus: "Tillandsia",
    species: "usneoides",
    nativeRange: "The Americas, from the southern United States to Central and northern South America",
    partsUsed: "The whole plant",
  },
  sources: {
    lasso: {
      title: "Tillandsia usneoides Extract Decreases the Primary Tumor in a Murine Breast Cancer Model but Not in Melanoma",
      author: "Lasso P, Rojas L, Arévalo C, Urueña C, Murillo N, Barreto A, Costa GM, Fiorentino S",
      journal: "Cancers",
      publicationDate: "2022-11-01",
      doi: "10.3390/cancers14215383",
      pmid: "36358804",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9656114/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    miranda: {
      title: "GLUT4 translocation in C2C12 myoblasts and primary mouse hepatocytes by an antihyperglycemic flavone from Tillandsia usneoides",
      author: "Miranda-Nuñez JE, Zamilpa-Alvarez A, Fortis-Barrera A, et al.",
      journal: "Phytomedicine",
      publicationDate: "2021-06-02",
      doi: "10.1016/j.phymed.2021.153622",
      pmid: "34161895",
      url: "https://pubmed.ncbi.nlm.nih.gov/34161895/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    baratto: {
      title: "Plants of the USA: recordings on native North American useful species by Alexander von Humboldt",
      author: "Baratto LC, Päßler U",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2024-09-17",
      doi: "10.1186/s13002-024-00727-3",
      pmid: "39289725",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11409576/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    villarreal: {
      title: "Active Fraction of Tillandsia usneoides Induces Structural Neuroplasticity in Cortical Neuron Cultures from Wistar Rats",
      author: "Villarreal Romero WL, Sutachan JJ, Costa GM, Albarracín SL",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-12-02",
      doi: "10.3390/ijms262311668",
      pmid: "41373815",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12692342/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tillandsia usneoides", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Spanish moss isn't a true moss but a flowering plant in the pineapple family that hangs from trees. In traditional medicine it has been used for:\n- Diabetes\n- High blood pressure\n- Rheumatism\n- Haemorrhoids\n- Kidney and eye problems\n- Increasing bile and urine flow",
      source: "lasso",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Early records from the United States describe Spanish moss being fed to cattle in winter. When rotted in water it leaves a springy fibre, which was used to stuff mattresses, saddles and chairs and to make ropes.",
      source: "baratto",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In traditional medicine the whole plant has been used for heart conditions, rheumatism, bronchitis, fever, ulcers and diabetes, and to increase urine flow. It's widespread in Colombia, growing up to 3,000 metres above sea level.",
      source: "villarreal",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 lab study, an extract of Spanish moss made rat brain cells grow more and longer branches (the connections nerve cells use to link up), at very low doses. The researchers think this could one day help protect the brain's ability to adapt, but it has only been tested on cells in a dish. At higher doses, some extracts reduced the number of living cells by about 20%.\n\nTechnical detail: ethyl acetate fraction increased dendritic branching and dendrite length in primary cortical neurons from E18 Wistar rat embryos at 0.03–1 μg/mL, likely via PI3K/Akt and ERK1/2 signalling; contains 14 phenolic acids, 6 flavonoids and a triterpene; viability fell about 20% above 1 μg/mL for the ethanol extract and ethyl acetate fraction.",
      source: "villarreal",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, an extract of Spanish moss lowered blood sugar. A compound taken from it (a flavone) helped muscle and liver cells take up sugar in lab tests. It hasn't been tested in people.\n\nTechnical detail: ethyl acetate fraction; 5,7,4´-trihydroxy-3,6,3´,5´-tetramethoxyflavone promoted GLUT4 translocation in C2C12 myoblasts and primary mouse hepatocytes.",
      source: "miranda",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, an extract killed breast cancer and melanoma (skin cancer) cells. In mice, it shrank breast tumours and boosted immune cells that attack cancer, but it didn't shrink melanoma tumours. It hasn't been tested in people.\n\nTechnical detail: ethanolic extract; 4T1 breast cancer and B16-F10 melanoma models; increased dendritic cells and activated CD8+ T cells, fewer regulatory T cells and myeloid-derived suppressor-like cells.",
      source: "lasso",
    },
  ],
});
