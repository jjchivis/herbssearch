import { run } from "./lib/populate-herb";

// Beetroot (Beta vulgaris), from a 2013 meta-analysis of nitrate and beetroot
// juice and blood pressure (Siervo et al.) and a 2020 systematic review of the
// benefits and risks of beetroot juice (Zamani et al.). Family per GBIF.

run({
  name: "Beetroot",
  profile: {
    family: "Amaranthaceae",
    genus: "Beta",
    species: "vulgaris",
    partsUsed: "The root, usually as juice",
  },
  sources: {
    siervo: {
      title: "Inorganic nitrate and beetroot juice supplementation reduces blood pressure in adults: a systematic review and meta-analysis",
      author: "Siervo M, Lara J, Ogbonmwan I, Mathers JC",
      journal: "The Journal of Nutrition",
      publicationDate: "2013-04-17",
      doi: "10.3945/jn.112.170233",
      pmid: "23596162",
      url: "https://pubmed.ncbi.nlm.nih.gov/23596162/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    zamani: {
      title: "The benefits and risks of beetroot juice consumption: a systematic review",
      author: "Zamani H, de Joode MEJR, Hossein IJ, et al.",
      journal: "Critical Reviews in Food Science and Nutrition",
      publicationDate: "2020-04-15",
      doi: "10.1080/10408398.2020.1746629",
      pmid: "32292042",
      url: "https://pubmed.ncbi.nlm.nih.gov/32292042/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Beet", type: "COMMON_NAME" },
    { name: "Beetroot Juice", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Beetroot juice is high in nitrate, which the body turns into nitric oxide. Nitric oxide relaxes blood vessels, which lowers blood pressure and increases the flow of oxygen and nutrients to organs and muscles.",
      source: "zamani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 review of 16 small trials with 254 people found that nitrate or beetroot juice lowered systolic blood pressure (the top number) by about 4 points compared with a placebo. The effect on the bottom number was smaller and not certain. The trials lasted from 2 hours to 15 days, so longer studies are needed.\n\nTechnical detail: SBP −4.4 mmHg (95% CI −5.9 to −2.8); DBP −1.1 mmHg (95% CI −2.2 to 0.1).",
      source: "siervo",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Beetroot juice has become popular with athletes, because the extra oxygen delivery may help muscle efficiency, endurance and sports performance.",
      source: "zamani",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Drinking beetroot juice can easily push nitrate intake above the acceptable daily amount. Nitrate can lead to the formation of N-nitroso compounds in the body, which are known to cause cancer. Much less research has been done on these risks than on the benefits.",
      source: "zamani",
    },
  ],
  symptoms: [
    { slug: "high-blood-pressure", notes: "A 2013 review of 16 short trials found beetroot juice lowered the top number by about 4 points." },
  ],
  preparations: [
    { slug: "culinary-preparation", notes: "Beetroot is usually taken as juice, which is high in nitrate.", source: "zamani" },
  ],
});
