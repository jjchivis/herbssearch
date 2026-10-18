import { run } from "./lib/populate-herb";

// Yellow Dock (Rumex crispus, curly dock), from a 2023 lab and rat study of its
// blood-sugar effects (Aguila-Muñoz et al.) and a 2023 lab study of its effects on
// cancer cells (Mohammadhosseinpour et al.).

run({
  name: "Yellow Dock",
  profile: {
    family: "Polygonaceae",
    genus: "Rumex",
    species: "crispus",
    partsUsed: "The roots, leaves and fruit",
  },
  sources: {
    aguila: {
      title: "Evaluation of α-Glucosidase Inhibition and Antihyperglycemic Activity of Extracts Obtained from Leaves and Flowers of Rumex crispus L.",
      author: "Aguila-Muñoz DG, Jiménez-Montejo FE, López-López VE, et al.",
      journal: "Molecules",
      publicationDate: "2023-07-30",
      doi: "10.3390/molecules28155760",
      pmid: "37570730",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10420655/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    moha: {
      title: "Anti-Proliferative and Apoptotic Activities of Rumex crispus",
      author: "Mohammadhosseinpour S, Bhandari M, Lee DA, Clack B",
      journal: "Life",
      publicationDate: "2023-12-20",
      doi: "10.3390/life14010008",
      pmid: "38276257",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10819952/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Yellowdock", type: "COMMON_NAME" },
    { name: "Curly Dock", type: "COMMON_NAME" },
    { name: "Curled Dock", type: "COMMON_NAME" },
    { name: "Rumex crispus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Recorded in Native American medicine for treating cancerous sores." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Yellow dock's roots, leaves and fruit have been used in traditional medicine as a tonic and laxative, to reduce fever, to clear phlegm and calm coughs, and to expel worms. They've also been used for:\n- Skin disorders\n- Jaundice\n- Gut problems\n- Diabetes\n- Eye infections and sexually transmitted infections",
      source: "aguila",
    },
    {
      category: "TRADITIONAL",
      summary: "Native American medicine recorded its use for cancerous sores. It contains anthraquinones such as emodin, flavonoids and tannins.",
      source: "moha",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, extracts of the leaves and flowers lowered blood sugar over 30 days, and in the lab they slowed the enzyme that breaks down starch into sugar. This hasn't been tested in people.",
      source: "aguila",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2023 lab study, a fraction of a water extract of the leaves killed cancer cells. This hasn't been tested in people.",
      source: "moha",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "A traditional laxative. Not tested in trials." },
    { slug: "high-blood-sugar", notes: "Lowered blood sugar in diabetic rats. Not tested in people." },
  ],
});
