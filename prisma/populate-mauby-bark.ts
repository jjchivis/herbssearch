import { run } from "./lib/populate-herb";

// Mauby Bark (Colubrina arborescens), from verified sources: a small trial in people with high blood
// pressure (Alleyne et al. 2005, West Indian Med J), a warfarin interaction
// case report (Sorbera et al. 2017) and a study of saponins in the bark of the
// related Colubrina elliptica (Oulad-Ali et al. 1994).

run({
  name: "Mauby Bark",
  profile: {
    family: "Rhamnaceae",
    genus: "Colubrina",
    species: "arborescens",
    partsUsed: "The bark, boiled into the bitter Caribbean drink mauby",
  },
  sources: {
    alleyne: {
      title: "The control of hypertension by use of coconut water and mauby: two tropical food drinks",
      author: "Alleyne T, Roache S, Thomas C, Shirley A",
      journal: "West Indian Medical Journal",
      organization: "West Indian Medical Journal",
      publicationDate: "2005-01-01",
      doi: "10.1590/s0043-31442005000100002",
      pmid: "15892382",
      url: "https://doi.org/10.1590/s0043-31442005000100002",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sorbera: {
      title: "Elevated International Normalized Ratio in a Patient Taking Warfarin and Mauby: A Case Report",
      author: "Sorbera M, Joseph T, DiGregorio RV",
      journal: "Journal of Pharmacy Practice",
      organization: "Journal of Pharmacy Practice",
      publicationDate: "2016-08-19",
      doi: "10.1177/0897190016663435",
      pmid: "27543375",
      url: "https://doi.org/10.1177/0897190016663435",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ouladali: {
      title: "Mabiosides C-E: triterpenoid saponins from the bark of Colubrina elliptica",
      author: "Oulad-Ali A, Guillaume D, Weniger B, Jiang Y, Anton R",
      journal: "Phytochemistry",
      organization: "Phytochemistry",
      publicationDate: "1994-05-01",
      doi: "10.1016/s0031-9422(00)97092-4",
      pmid: "7764881",
      url: "https://doi.org/10.1016/s0031-9422(00)97092-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mauby", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Mauby, a bitter drink made from the bark, is widely used in the Caribbean as a folk remedy." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Mauby is a bitter dark drink made from the bark of the mauby tree. It's commonly used in the Caribbean as a folk remedy with many claimed health benefits.",
      source: "sorbera",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab analysis of the bark of a related tree, Colubrina elliptica, found natural soap-like compounds called saponins.\n\nTechnical detail: mabiosides C–E, novel triterpenoid saponins, isolated with mabioside B from Colubrina elliptica bark.",
      source: "ouladali",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study, 28 people with high blood pressure drank bottled water, coconut water, mauby, or a mix of coconut water and mauby for 2 weeks. Blood pressure fell in some people in the mauby and coconut water groups. Mauby mixed with coconut water gave the biggest drops. The study was very small and short.\n\nTechnical detail: 7 per group; significant systolic decreases in 71% (coconut water), 40% (mauby) and 43% (mixture); diastolic decreases in 29%, 40% and 57%; largest drops with the mixture were 24 mmHg systolic and 15 mmHg diastolic.",
      source: "alleyne",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Mauby may interact with warfarin (a blood thinner). In a case report, a 70-year-old man on warfarin had dangerously thin blood (a very high INR) after he began drinking mauby. If you take warfarin, talk to your doctor before drinking mauby.\n\nTechnical detail: INR > 8.0 and later 4.8 on a previously stable dose; Naranjo score 6 (probable interaction).",
      source: "sorbera",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "In a very small 2-week study, blood pressure fell in some people drinking mauby. Bigger studies are needed. It may interact with warfarin.",
    },
  ],
});
