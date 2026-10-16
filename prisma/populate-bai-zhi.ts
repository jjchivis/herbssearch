import { run } from "./lib/populate-herb";

// Bai Zhi (Angelica dahurica root, Radix Angelicae Dahuricae), from a 2022 review
// of its traditional uses, chemistry and pharmacology (Zhao et al.).

run({
  name: "Bai Zhi",
  profile: {
    family: "Apiaceae",
    genus: "Angelica",
    species: "dahurica",
    partsUsed: "The dried root, taken by mouth or used on the skin",
  },
  sources: {
    zhao: {
      title: "The Angelica dahurica: A Review of Traditional Uses, Phytochemistry and Pharmacology",
      author: "Zhao H, Feng YL, Wang M, Wang JJ, Liu T, Yu J",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-07-01",
      doi: "10.3389/fphar.2022.896637",
      pmid: "35847034",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283917/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Radix Angelica", type: "COMMON_NAME" },
    { name: "Radix Angelicae Dahuricae", type: "COMMON_NAME" },
    { name: "Angelica dahurica", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called bai zhi; used for centuries for colds, headache, blocked sinuses, toothache and skin sores." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bai zhi is described as pungent and warm, and has been used in China for centuries, alone or in formulas, for:\n- Colds and fever, headache and forehead pain\n- Blocked nose, sinusitis and nosebleeds\n- Toothache\n- Aches from \"cold and damp\"\n- Vaginal discharge\nOn the skin it's used for boils, sores and painful swellings. In Korea and Japan it's used for colds, headache and rhinitis, and in Japan also for acne and skin rashes. It's also made into teas.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, the root and its coumarins (especially imperatorin) relieved pain, may help reduce inflammation, slowed tumours, killed microbes and protected nerves and the liver. These haven't been confirmed in people.",
      source: "zhao",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Studies of its toxicity are relatively lacking, and the safety of some of its coumarins in clinical use isn't clear.",
      source: "zhao",
    },
  ],
  symptoms: [
    { slug: "headache", notes: "A traditional Chinese remedy for headache and forehead pain. Not tested on its own in trials." },
    { slug: "colds-and-congestion", notes: "Traditionally used for colds, blocked nose and sinusitis, often combined with xanthium. Not tested on its own in trials." },
  ],
});
