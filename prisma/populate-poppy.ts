import { run } from "./lib/populate-herb";

// Poppy (Papaver rhoeas, corn poppy), from a 2015 report of five poisoning
// cases in Turkey (Günaydın et al.) and a 2022 review of Papaver plants
// (Butnariu et al.). Not the opium poppy (Papaver somniferum).

run({
  name: "Poppy",
  profile: {
    family: "Papaveraceae",
    genus: "Papaver",
    species: "rhoeas",
    nativeRange: "Common in southern Europe, Turkey and Iran, often as a weed in cereal fields",
    partsUsed: "The flowers, leaves and other above-ground parts, eaten raw or cooked or made into teas and syrups",
  },
  sources: {
    gunaydin: {
      title: "Intoxication due to Papaver rhoeas (Corn Poppy): Five Case Reports",
      author: "Günaydın YK, Dündar ZD, Çekmen B, Akıllı NB, Köylü R, Cander B",
      journal: "Case Reports in Medicine",
      publicationDate: "2015-05-12",
      doi: "10.1155/2015/321360",
      pmid: "26074968",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4444563/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    butnariu: {
      title: "Papaver Plants: Current Insights on Phytochemical and Nutritional Composition Along with Biotechnological Applications",
      author: "Butnariu M, Quispe C, Herrera-Bravo J, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2022-02-03",
      doi: "10.1155/2022/2041769",
      pmid: "36824615",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9943628/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Corn Poppy", type: "COMMON_NAME" },
    { name: "Common Poppy", type: "COMMON_NAME" },
    { name: "Red Poppy", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Corn poppy is used as a medicinal plant in Turkey, Iran and other countries:\n- For diarrhea, coughs and sleep problems\n- To ease pain and calm\n- To reduce opioid withdrawal symptoms\n- For bowel and bladder irritation, bronchitis, pneumonia and fevers with a rash",
      source: "gunaydin",
    },
    {
      category: "TRADITIONAL",
      summary: "In some regions corn poppy is added to salads. Its main natural chemicals are alkaloids called rhoeadine and rhoeagenine.",
      source: "butnariu",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, corn poppy extract had a calming effect, reduced movement, and eased withdrawal symptoms in rats dependent on morphine.",
      source: "gunaydin",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In one trial, men took a syrup of corn poppy combined with other herbs, and reported better sexual experience, with no serious side effects. Because the syrup contained several herbs, the effect can't be put down to corn poppy alone.",
      source: "butnariu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Eating corn poppy can cause poisoning that resembles a morphine overdose. A hospital in Turkey reported five adults who had eaten it for its taste, not as medicine. Within 1 to 3 hours they had:\n- Nausea and vomiting\n- Restlessness, confusion and loss of consciousness\n- Seizures\n- Numbness and weakness in the arms and legs\n- Breathing difficulty and a slow heartbeat\nAll recovered after a few days in hospital.",
      source: "gunaydin",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used in folk medicine for coughs. Not tested in trials, and eating the plant has caused poisoning." },
    { slug: "occasional-sleeplessness", notes: "Used in folk medicine for sleep problems. Not tested in trials, and eating the plant has caused poisoning." },
  ],
});
