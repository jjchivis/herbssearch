import { run } from "./lib/populate-herb";

// Haritaki (Terminalia chebula, chebulic myrobalan), from a 2022 review of its
// pharmacology (Hassan Bulbul et al.) and a 2024 review of the fruit's
// traditional uses, chemistry, pharmacology and toxicity (Wang et al.).

run({
  name: "Haritaki",
  profile: {
    family: "Combretaceae",
    genus: "Terminalia",
    species: "chebula",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The dried fruit, usually as a powder",
  },
  sources: {
    hassan: {
      title: "A comprehensive review on the diverse pharmacological perspectives of Terminalia chebula Retz.",
      author: "Hassan Bulbul MR, Uddin Chowdhury MN, Naima TA, Sami SA, Imtiaj MS, Huda N, Uddin MG",
      journal: "Heliyon",
      publicationDate: "2022-08-14",
      doi: "10.1016/j.heliyon.2022.e10220",
      pmid: "36051270",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9424961/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wang: {
      title: "Comprehensive Review on Fruit of Terminalia chebula: Traditional Uses, Phytochemistry, Pharmacology, Toxicity, and Pharmacokinetics",
      author: "Wang C, Zhang H, Wang X, Wang X, Li X, Li C, Wang Y, Zhang M",
      journal: "Molecules",
      publicationDate: "2024-11-24",
      doi: "10.3390/molecules29235547",
      pmid: "39683707",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11643145/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chebulic Myrobalan", type: "COMMON_NAME" },
    { name: "Myrobalan", type: "COMMON_NAME" },
    { name: "Chebulae Fructus", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Named first in the Ayurvedic materia medica; one of the three fruits in Triphala." },
    { slug: "traditional-chinese-medicine", notes: "Used in China for thousands of years, first recorded in the Jin Dynasty (266–317 AD)." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Haritaki is called the \"king of Tibetan medicines\" and is named first in the Ayurvedic materia medica. It's also used in Unani and Siddha medicine, and in China, where it was first recorded in the Jin Dynasty (266–317 AD). It's one of the three fruits in Triphala.",
      source: "wang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Traditional uses of the fruit include:\n- Constipation (unripe fruit) and diarrhea or dysentery (ripe fruit)\n- Indigestion, gas and poor appetite\n- Coughs and excess mucus\n- Piles, anemia, long-lasting fevers and skin disorders\n- As a rejuvenating tonic",
      source: "hassan",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, haritaki fruit extracts have shown antioxidant activity, killed bacteria including those that cause tooth decay, and may help reduce inflammation, as well as protective effects on the liver and kidneys. About 149 compounds have been found in the fruit, mainly tannins.",
      source: "wang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Small clinical studies suggest:\n- Haritaki helped empty the bowels in people with simple constipation\n- Rinsing with haritaki extract lowered the number of mouth bacteria, including those linked to tooth decay\n- In a 2-week trial of 78 people, a 10% haritaki mouthwash worked about as well as chlorhexidine, a standard mouthwash, for gum health\nSeveral Ayurvedic formulas containing haritaki have also been tested for constipation, stress and hay fever.",
      source: "hassan",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Haritaki has been used for many years without obvious toxic effects. In rats, a single large dose of extract caused no deaths or organ damage. However, thorough safety studies, especially of long-term use, are still lacking.\n\nTechnical detail: single oral dose of 2000 mg/kg in rats; 14-day repeated dosing of the ethyl acetate fraction was well tolerated.",
      source: "wang",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Traditionally used for constipation; a small clinical study found it helped empty the bowels." },
    { slug: "indigestion", notes: "Traditionally used for indigestion, gas and poor appetite. Not well tested in trials." },
    { slug: "cough", notes: "Traditionally used for coughs and excess mucus. Not tested in trials." },
  ],
});
