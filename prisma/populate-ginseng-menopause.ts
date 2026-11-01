import { run } from "./lib/populate-herb";

// Adds a 2016 systematic review of ginseng trials in menopausal women (Lee et
// al.) to Ginseng and links it to the menopause symptoms topic. The review
// didn't measure weight, so ginseng isn't linked to menopausal weight gain.

run({
  name: "Ginseng",
  sources: {
    leeMenopause: {
      title: "Ginseng for managing menopausal woman's health: A systematic review of double-blind, randomized, placebo-controlled trials",
      author: "Lee HW, Choi J, Lee Y, Kil KJ, Lee MS",
      journal: "Medicine",
      publicationDate: "2016-09-01",
      doi: "10.1097/MD.0000000000004914",
      pmid: "27661038",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5044908/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review of 10 placebo-controlled trials in menopausal women found some evidence that ginseng improves sexual function and arousal, and that Korean red ginseng lowers overall hot flash scores. It didn't reduce how often hot flashes happened, or change hormone levels or the lining of the womb. The evidence was low quality.",
      source: "leeMenopause",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In one trial in menopausal women, 2 women had vaginal bleeding that was likely caused by Korean red ginseng.",
      source: "leeMenopause",
    },
  ],
  symptoms: [
    {
      slug: "menopause-symptoms",
      notes: "A review of 10 trials found low-quality evidence it may help sexual function and overall hot flash scores, but not how often hot flashes happen.",
    },
  ],
});
