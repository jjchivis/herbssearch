import { run } from "./lib/populate-herb";

// Ewe Taba, tobacco (Nicotiana tabacum), from a 2021 inventory of Yoruba useful
// plants (Ajao et al.), the WHO tobacco fact sheet and a 2019 review of green
// tobacco sickness (McMahon). Family per GBIF.

run({
  name: "Ewe Taba",
  profile: {
    family: "Solanaceae",
    genus: "Nicotiana",
    species: "tabacum",
    nativeRange: "The Americas; now grown worldwide",
    partsUsed: "The leaves",
  },
  sources: {
    ajao: {
      title: "Wandering through southwestern Nigeria: An inventory of Yoruba useful angiosperm plants",
      author: "Ajao AA, Mukaila YO, Sabiu S",
      journal: "Heliyon",
      publicationDate: "2021-12-25",
      doi: "10.1016/j.heliyon.2021.e08668",
      pmid: "35024488",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8733184/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    who: {
      title: "Tobacco (fact sheet)",
      organization: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mcmahon: {
      title: "Green tobacco sickness: mecamylamine, varenicline, and nicotine vaccine as clinical research tools and potential therapeutics",
      author: "McMahon LR",
      journal: "Expert Review of Clinical Pharmacology",
      publicationDate: "2019-01-24",
      doi: "10.1080/17512433.2019.1570844",
      pmid: "30650314",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6786486/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tobacco", type: "COMMON_NAME" },
    { name: "Taba", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
  ],
  constituents: [{ name: "Nicotine", slug: "nicotine", type: "pyridine alkaloid" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Yoruba uses of the leaf, including for nosebleeds and as snuff." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Among the Yoruba of southwestern Nigeria, tobacco leaf is gently squeezed and put in the nose to stop nosebleeds. It's also used for many other ailments, including gonorrhea, thrush, typhoid fever and hemorrhoids, as a snake repellent, and in body creams and hair products. The dried leaves are ground for snuff or made into local cigars.",
      source: "ajao",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Tobacco damages nearly every organ in the body, causing cancer, heart disease, stroke and lung disease, and kills more than 7 million people a year. All forms of tobacco use are harmful, and there is no safe level of exposure. Nicotine is highly addictive.",
      source: "who",
    },
    {
      category: "TOXICITY",
      description:
        "Handling fresh, green tobacco leaves can cause poisoning through the skin, known as green tobacco sickness, with nausea, vomiting, headache and stomach cramps. About 8 million people worldwide are affected, including women and children.",
      source: "mcmahon",
    },
  ],
});
