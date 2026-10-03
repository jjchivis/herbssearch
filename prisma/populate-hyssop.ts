import { run } from "./lib/populate-herb";

// Hyssop (Hyssopus officinalis), from a 2022 review of Hyssopus essential oil:
// its chemistry, biological activities and safety (Sharifi-Rad et al.).

run({
  name: "Hyssop",
  profile: {
    family: "Lamiaceae",
    genus: "Hyssopus",
    species: "officinalis",
    nativeRange: "The eastern Mediterranean to central Asia",
    partsUsed: "The above-ground parts, as an herb, and the essential oil",
  },
  sources: {
    sharifiRad: {
      title: "Hyssopus Essential Oil: An Update of Its Phytochemistry, Biological Activities, and Safety Profile",
      author: "Sharifi-Rad J, Quispe C, Kumar M, et al.",
      journal: "Oxidative Medicine and Cellular Longevity",
      publicationDate: "2022-01-13",
      doi: "10.1155/2022/8442734",
      pmid: "35069979",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8776447/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hyssopus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Hyssop has been used for colds, coughs, loss of appetite, fungal infections and cramps. Its name comes from the Hebrew ezob, meaning \"sacred herb\". Its essential oil is used to flavor foods and drinks and in cosmetics.",
      source: "sharifiRad",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, hyssop essential oil killed a range of bacteria and fungi, and leaf extract slowed the growth of HIV. In animal studies, extracts made animals drowsy.",
      source: "sharifiRad",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Hyssop essential oil contains pinocamphone, a substance that can cause seizures. In rats, high doses of the oil caused seizures and death. At high doses the oil may cause drowsiness and seizures in people.\nThere isn't enough information to set a safe dose. The herb is thought to be relatively safe in the amounts used in food.\n\nTechnical detail: 80 mg/kg essential oil in Wistar rats produced subclinical spikes on EEG; 1.25 g/kg caused myoclonus, tonic-clonic seizures and lethal status epilepticus.",
      source: "sharifiRad",
    },
    {
      category: "PREGNANCY",
      description: "Very little research has looked at hyssop in pregnancy. It might make the womb contract or bring on menstruation.",
      source: "sharifiRad",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for coughs. Not tested in trials." },
    { slug: "seasonal-immune-support", notes: "Traditionally used for colds. Not tested in trials." },
    { slug: "loss-of-appetite", notes: "Traditionally used for loss of appetite. Not tested in trials." },
  ],
});
