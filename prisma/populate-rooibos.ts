import { run } from "./lib/populate-herb";

// Rooibos (Aspalathus linearis), from a 2023 scoping review of rooibos studies
// in people (Afrifa et al.) and a 2013 case report of liver injury (Engels et al.).

run({
  name: "Rooibos",
  profile: {
    family: "Fabaceae",
    genus: "Aspalathus",
    species: "linearis",
    nativeRange: "South Africa",
    partsUsed: "The leaves and stems, fermented or unfermented, as a tea or extract",
  },
  sources: {
    afrifa: {
      title: "The health benefits of rooibos tea in humans (Aspalathus linearis): a scoping review",
      author: "Afrifa D, Engelbrecht L, Eijnde BO, Terblanche E",
      journal: "Journal of Public Health in Africa",
      publicationDate: "2023-12-01",
      doi: "10.4081/jphia.2023.2784",
      pmid: "38204815",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10774856/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    engels: {
      title: "Tea not Tincture: Hepatotoxicity Associated with Rooibos Herbal Tea",
      author: "Engels M, Wang C, Matoso A, Maidan E, Wands J",
      journal: "ACG Case Reports Journal",
      publicationDate: "2013-10-08",
      doi: "10.14309/crj.2013.20",
      pmid: "26157822",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4435260/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Red Bush Tea", type: "COMMON_NAME" },
    { name: "Redbush", type: "COMMON_NAME" },
    { name: "Green Rooibos", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Rooibos is a popular South African herbal tea. It contains no caffeine and is low in tannins. It's mostly drunk as red or green rooibos (green rooibos has more flavonoids), and is also sold as capsules and tablets.",
      source: "afrifa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Rooibos contains flavonoids such as aspalathin and nothofagin. Most of what's known about its antioxidant effects and its possible effects on inflammation comes from animal and cell studies.",
      source: "afrifa",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2023 review found only 18 studies of rooibos in people, with 488 participants in total, and their results conflicted:\n- 6 cups a day improved a marker of oxidative stress, lowered blood sugar and improved insulin sensitivity, in healthy people and those at risk of heart disease\n- 4 cups a day had no effect on blood pressure in people prone to kidney stones\nThe studies were too few and too small to confirm or rule out real effects.",
      source: "afrifa",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Liver injury linked to rooibos tea has rarely been reported. In one case, a 52-year-old man developed sudden hepatitis and liver failure after drinking a South African tea of rooibos and buchu. A liver biopsy showed injury from a toxin, and he recovered after stopping the tea. The authors suggested small-batch teas may vary in what they contain.",
      source: "engels",
    },
  ],
});
