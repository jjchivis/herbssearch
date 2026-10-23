import { run } from "./lib/populate-herb";

// Tremella / snow fungus (Tremella fuciformis), from a 2025 review of its
// polysaccharides (Li et al., Front Nutr), a 2023 dermatology review (Mineroff &
// Jagdeo), one memory trial (Ban et al. 2018) and a 2026 food-safety paper on
// bongkrekic acid in spoiled snow fungus (Yang et al.). No reliable source links
// tremella to acne, so it isn't on the acne topic. No sourced native range or
// pregnancy advice.

run({
  name: "Tremella",
  profile: {
    family: "Tremellaceae",
    genus: "Tremella",
    species: "fuciformis",
    partsUsed: "The whole fruiting body (the edible white, frilly part of the fungus)",
  },
  sources: {
    li: {
      title: "Recent advances in polysaccharides from Tremella fuciformis: isolation, structures, bioactivities and application",
      author: "Li S, Zhao K, Li J, et al.",
      journal: "Frontiers in Nutrition",
      organization: "Frontiers in Nutrition",
      publicationDate: "2025-11-19",
      doi: "10.3389/fnut.2025.1663327",
      pmid: "41346688",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12672291/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mineroff: {
      title: "The potential cutaneous benefits of Tremella fuciformis",
      author: "Mineroff J, Jagdeo J",
      journal: "Archives of Dermatological Research",
      organization: "Archives of Dermatological Research",
      publicationDate: "2023-02-09",
      doi: "10.1007/s00403-023-02550-4",
      pmid: "36757441",
      url: "https://pubmed.ncbi.nlm.nih.gov/36757441/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ban: {
      title: "Efficacy and Safety of Tremella fuciformis in Individuals with Subjective Cognitive Impairment: A Randomized Controlled Trial",
      author: "Ban S, Lee SL, Jeong HS, Lim SM, Park S, Hong YS, Kim JE",
      journal: "Journal of Medicinal Food",
      organization: "Journal of Medicinal Food",
      publicationDate: "2018-01-10",
      doi: "10.1089/jmf.2017.4063",
      pmid: "29319408",
      url: "https://pubmed.ncbi.nlm.nih.gov/29319408/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    yang: {
      title: "Development of a High-Throughput Indirect Competitive Chemiluminescence Enzyme-Linked Immunoassay for the Rapid Detection of Bongkrekic Acid in Tremella Fungus and Rice Noodles",
      author: "Yang X, Wang C, Wu L, et al.",
      journal: "Foods",
      organization: "Foods",
      publicationDate: "2026-05-15",
      doi: "10.3390/foods15101749",
      pmid: "42195952",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13205949/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Snow Fungus", type: "COMMON_NAME" },
    { name: "Snow Mushroom", type: "COMMON_NAME" },
    { name: "Silver Fungus", type: "COMMON_NAME" },
    { name: "White Fungus", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tremella is an edible fungus with clusters of flat, wavy, frilly lobes. It has been eaten and used as medicine in Asian countries for centuries. It was first recorded in the Shennong Herbal Classic, an early Chinese medical text. In Chinese medicine it's valued for nourishing the stomach and lungs and for weakness.",
      source: "li",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Most research is on tremella's sugar-based compounds (polysaccharides). In lab and animal studies, they acted as antioxidants, affected the immune system, lowered blood sugar and blood fats, and supported healthy gut bacteria. The review's authors note that nearly all of this research is in the lab or in animals.",
      source: "li",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, tremella extracts have been looked at for skin aging, protection from sun damage, wound healing and keeping the skin barrier healthy. A 2023 dermatology review says clinical studies in people are needed before we know whether it helps the skin.",
      source: "mineroff",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a Korean trial, 75 adults who felt their memory was slipping took 600 mg or 1,200 mg of tremella or a placebo every day for 8 weeks. People taking tremella reported fewer memory complaints and did better on short-term memory and planning tests. Side effects were about as common as with placebo. It was a small, short trial.\n\nTechnical detail: randomized, double-blind, placebo-controlled; subjective cognitive impairment; adverse events 40.4% (1,200 mg), 35.1% (600 mg), 41.4% (placebo); exploratory MRI gray-matter changes.",
      source: "ban",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Spoiled snow fungus can contain bongkrekic acid, a toxin made by bacteria that can cause severe food poisoning. Don't eat tremella that may have spoiled.\n\nTechnical detail: bongkrekic acid is a potent respiratory toxin produced by Pseudomonas cocovenenans; also found in spoiled fermented rice- and wheat-based foods and black fungus.",
      source: "yang",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In an 8-week trial of tremella supplements, side effects were about as common as with a placebo.",
      source: "ban",
    },
  ],
  symptoms: [
    {
      slug: "memory-and-thinking",
      notes: "In one small 8-week trial, adults with memory complaints who took tremella did better on memory tests than with a placebo.",
    },
  ],
});
