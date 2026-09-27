import { run } from "./lib/populate-herb";

// Lion's mane (Hericium erinaceus), a medicinal mushroom, from a verified source:
// a systematic review of its clinical use and side effects (Menon et al. 2025).
// Family per GBIF / Catalogue of Life. No source covering pregnancy,
// breastfeeding or medicine interactions was used, so none is stated.

run({
  name: "Lion's Mane",
  profile: {
    family: "Hericiaceae",
    genus: "Hericium",
    species: "erinaceus",
    partsUsed: "The mushroom (fruiting body) and its mycelium",
  },
  sources: {
    menon: {
      title: "Benefits, side effects, and uses of Hericium erinaceus as a supplement: a systematic review",
      author: "Menon A, Jalal A, Arshad Z, Nawaz FA, Kashyap R",
      journal: "Frontiers in Nutrition",
      organization: "Frontiers in Nutrition",
      publicationDate: "2025-09-01",
      doi: "10.3389/fnut.2025.1641246",
      pmid: "40959699",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12434001/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Lion's Mane Mushroom", type: "COMMON_NAME" },
    { name: "Lions Mane", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, lion's mane increased a brain growth factor (BDNF), helped new nerve cells form in the brain's memory center, and reduced signs of depression, anxiety and sleep problems in animals. It also increased helpful gut bacteria, and a compound from it slowed stomach cancer cells.",
      source: "menon",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2025 review found 5 randomized trials and 3 pilot trials of lion's mane, mostly on memory and thinking:\n- 30 adults aged 50 to 80 with mild memory problems took lion's mane tablets for about 5 months and scored better on memory tests than with placebo.\n- In people with and without dementia, scores on a memory screening test rose by about 1 point on average.\n- A trial of 77 people looked at mood and sleep.\nThe trials were small (15 to 77 people). The authors concluded it may help thinking and mood, but more research is needed.\n\nTechnical detail: Mori et al. 2009 (250 mg tablets, 4 tablets three times daily, 16 weeks, HDS-R); pooled MMSE weighted mean increase 1.17 from one RCT and one pilot trial.",
      source: "menon",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects are rarely reported, but can include stomach discomfort, diarrhea, headache and allergic reactions.",
      source: "menon",
    },
  ],
  symptoms: [
    { slug: "memory-and-thinking", notes: "A small trial found it improved memory scores in older adults with mild memory problems." },
    { slug: "anxiety", notes: "Reduced anxiety and depression signs in animals; human research on mood is limited." },
  ],
});
