import { run } from "./lib/populate-herb";

// Foxglove (Digitalis purpurea), from the MedlinePlus Medical Encyclopedia entry on
// foxglove poisoning (NIH National Library of Medicine) and a 2019 history of heart
// failure (Hajar) for its place in medical history. Poisonous: this page leads with
// poisoning information and lists no home uses for the plant.

run({
  name: "Foxglove",
  profile: {
    family: "Plantaginaceae",
    genus: "Digitalis",
    species: "purpurea",
    partsUsed: "None for home use: all parts are poisonous. Heart medicines (digitalis glycosides) were developed from foxglove.",
  },
  sources: {
    medlineplus: {
      title: "Foxglove poisoning. MedlinePlus Medical Encyclopedia",
      organization: "U.S. National Library of Medicine (NIH)",
      publicationDate: "2025-10-14",
      url: "https://medlineplus.gov/ency/article/002878.htm",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    hajar: {
      title: "Congestive Heart Failure: A History",
      author: "Hajar R",
      journal: "Heart Views",
      publicationDate: "2019-07-01",
      doi: "10.4103/HEARTVIEWS.HEARTVIEWS_77_19",
      pmid: "31620262",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6791096/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Medical history, not a home remedy: in 1785 the English physician William Withering published his observations on foxglove, describing both its use for \"dropsy\" (fluid build-up from heart failure) and its poisonous effects. Heart-strengthening compounds (cardiac glycosides) were later isolated from it, and standardized digitalis medicines were a mainstay of heart failure treatment for about 200 years. Newer medicines have since largely taken their place.",
      source: "hajar",
    },
  ],
  synonyms: [
    { name: "Digitalis", type: "COMMON_NAME" },
    { name: "Digitalis purpurea", type: "COMMON_NAME" },
    { name: "Digitalis lanata", type: "COMMON_NAME" },
    { name: "Fairy Glove", type: "COMMON_NAME" },
    { name: "Folk's Glove", type: "COMMON_NAME" },
    { name: "Witch's Bells", type: "COMMON_NAME" },
    { name: "Dead Man's Bells", type: "COMMON_NAME" },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Foxglove is poisonous. Its flowers, leaves, stems and seeds contain heart-affecting compounds (digitalis glycosides such as digitoxin). Poisoning usually happens from sucking the flowers or eating the seeds, stems or leaves, or from taking too much of a heart medicine made from foxglove. Signs include:\n- Irregular or slow heartbeat, collapse and very low blood pressure (shock)\n- Nausea, vomiting, diarrhoea and stomach pain\n- Blurred vision and yellow, green or white halos around objects\n- Confusion, hallucinations, drowsiness and weakness\nGet emergency help right away; in the US, Poison Help is 1-800-222-1222. Don't make the person vomit unless told to. With fast treatment, death is unlikely, but a hospital stay may be needed.",
      source: "medlineplus",
    },
  ],
});
