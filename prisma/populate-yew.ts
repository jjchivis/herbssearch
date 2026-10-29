import { run } from "./lib/populate-herb";

// Yew (Taxus baccata, common yew), from case reports of poisoning (von der
// Werth & Murphy 1994; Vališ et al. 2014). Family per GBIF.

run({
  name: "Yew",
  profile: {
    family: "Taxaceae",
    genus: "Taxus",
    species: "baccata",
    nativeRange: "Europe, North Africa and western Asia",
    partsUsed: "None; the leaves and seeds are poisonous",
  },
  sources: {
    vonderwerth: {
      title: "Cardiovascular toxicity associated with yew leaf ingestion",
      author: "von der Werth J, Murphy JJ",
      journal: "British Heart Journal",
      publicationDate: "1994-07-01",
      doi: "10.1136/hrt.72.1.92",
      pmid: "8068479",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1025433/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    valis: {
      title: "Common yew intoxication: a case report",
      author: "Vališ M, Kočí J, Tuček D, et al.",
      journal: "Journal of Medical Case Reports",
      publicationDate: "2014-01-02",
      doi: "10.1186/1752-1947-8-4",
      pmid: "24383932",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3917521/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Common Yew", type: "COMMON_NAME" }, { name: "English Yew", type: "COMMON_NAME" }],
  constituents: [{ name: "Taxine Alkaloids", slug: "taxine-alkaloids", type: "alkaloid" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary: "Yew contains taxine alkaloids, which cause fatal poisoning mainly by damaging the heart and circulation.",
      source: "valis",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Yew is deadly poisonous. A 16-year-old who ate yew leaves developed life-threatening irregular heart rhythms. A 39-year-old man survived yew poisoning only after long, intensive resuscitation.",
      source: "valis",
    },
    {
      category: "TOXICITY",
      description: "Eating yew leaves can cause dangerous fast heart rhythms (ventricular tachycardia and fibrillation).",
      source: "vonderwerth",
    },
  ],
});
