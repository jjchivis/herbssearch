import { run } from "./lib/populate-herb";

// Lemongrass (Cymbopogon citratus, fever grass), from a review of Jamaican
// medicinal plants (Lowe et al. 2021) and a 1986 Brazilian study of lemongrass
// tea in healthy volunteers.

run({
  name: "Lemongrass",
  profile: {
    family: "Poaceae",
    genus: "Cymbopogon",
    species: "citratus",
    nativeRange: "Grown in Jamaica and other warm countries; not native to Jamaica",
    partsUsed: "The fresh or dried leaves and stems, as a tea or in cooking",
  },
  sources: {
    lowe: {
      title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds",
      author: "Lowe H, Steele B, Bryant J, Fouad E, Toyang N, Ngwa W",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-01-01",
      doi: "10.3390/molecules26030607",
      pmid: "33503834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    leite: {
      title: "Pharmacology of lemongrass (Cymbopogon citratus Stapf). III. Assessment of eventual toxic, hypnotic and anxiolytic effects on humans",
      author: "Leite JR, Seabra ML, Maluf E, Assolant K, Suchecki D, Tufik S, Klepacz S, Calil HM, Carlini EA",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1986-07-01",
      doi: "10.1016/0378-8741(86)90074-7",
      pmid: "2429120",
      url: "https://pubmed.ncbi.nlm.nih.gov/2429120/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Fever Grass", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Fevergrass", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Lemon Grass", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Called fever grass in Jamaica, where it's one of the most-used teas for colds and flu." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, lemongrass (fever grass) is one of the plants most often used for colds and flu. A handful of leaves and stems is brewed in a cup of water for about 10 minutes and sweetened to taste. This use rests on personal experience, not research.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary: "Lemongrass tea is one of the most popular herbal medicines in Brazil, where it's drunk to calm the nerves.",
      source: "leite",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A Brazilian study tested lemongrass tea in healthy volunteers:\n- Drinking it once, or daily for 2 weeks, caused no harmful changes in blood tests, urine tests, brain waves or heart tracings\n- In 50 volunteers, it didn't help them fall asleep or sleep better than a dummy drink\n- In 18 people prone to anxiety, it didn't reduce anxiety during a stressful test\nThe researchers concluded it isn't toxic but doesn't help sleep or anxiety.\n\nTechnical detail: double-blind, placebo-controlled; slight rises in direct bilirubin and amylase in some volunteers, with no symptoms.",
      source: "leite",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Homemade lemongrass tea can carry pesticide residues or germs, so use cleanly grown plants. Side effects are generally mild, such as bloating, nausea, upset stomach, diarrhea and dizziness.",
      source: "lowe",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "One of Jamaica's most-used teas for colds and flu (as fever grass). Based on tradition, not research." },
    { slug: "occasional-sleeplessness", notes: "Used as a calming tea, but in a study of 50 volunteers it didn't help sleep more than a dummy drink." },
    { slug: "anxiety", notes: "Used as a calming tea, but in a study of 18 anxiety-prone people it didn't reduce anxiety." },
  ],
});
