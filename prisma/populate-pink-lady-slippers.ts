import { run } from "./lib/populate-herb";

// Pink Lady Slippers (Hybanthus enneaspermus), from a 2020 rat study of its
// libido-enhancing activity (Du et al., abstract only) and a 2024 rat anxiety
// study (Fernandes e Mendonça et al., abstract only). Family per GBIF.

run({
  name: "Pink Lady Slippers",
  profile: { family: "Violaceae", genus: "Hybanthus", species: "enneaspermus", nativeRange: "Tropical Asia, Africa and Australia", partsUsed: "The whole plant" },
  sources: {
    du: {
      title: "Evaluation of the in Vivo Aphrodisiac Activity of a Cyclotide Extract from Hybanthus enneaspermus",
      author: "Du Q, Huang YH, Bajpai A, Frosig-Jorgensen M, Zhao G, Craik DJ",
      journal: "Journal of Natural Products",
      publicationDate: "2020-12-09",
      doi: "10.1021/acs.jnatprod.0c01045",
      pmid: "33296204",
      url: "https://doi.org/10.1021/acs.jnatprod.0c01045",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fernandes: {
      title: "Potential anxiolytic therapeutics from Hybanthus enneaspermus (L.) F. Muell. - mitigate anxiety by plausibly modulating the GABAA-Cl- channel",
      author: "Fernandes e Mendonça LM, Joshi AB, Bhandarkar A, et al.",
      journal: "Neurochemistry International",
      publicationDate: "2024-07-11",
      doi: "10.1016/j.neuint.2024.105804",
      pmid: "39002759",
      url: "https://doi.org/10.1016/j.neuint.2024.105804",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Spade Flower", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Pink lady slippers is an Indian folk medicine widely used to boost libido.",
      source: "du",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In male rats, an extract and its main cyclotide (a very stable plant protein) improved sexual behavior after a single dose.",
      source: "du",
    },
    {
      category: "PRECLINICAL",
      summary: "In socially isolated rats, an extract reduced anxious behavior, possibly by acting on the same brain receptors as anti-anxiety drugs.",
      source: "fernandes",
    },
  ],
  safety: [{ category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "du" }],
  symptoms: [
    { slug: "sexual-health", notes: "An Indian folk libido enhancer; improved sexual behavior in male rats. Not tested in people." },
    { slug: "anxiety", notes: "Reduced anxious behavior in rats. Not tested in people." },
  ],
});
