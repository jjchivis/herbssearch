import { run } from "./lib/populate-herb";

// Adds a 2026 review of tea theaflavins and tea polysaccharides (Zhao et al.,
// supplied by the site owner) to the existing Green Tea (Camellia sinensis) page.

run({
  name: "Green Tea",
  sources: {
    zhao: {
      title: "Medicinal Value of Camellia sinensis Bioactive Components: Focus on Theaflavins and Tea Polysaccharides",
      author: "Zhao X, Sagharyan M, Mohammadbagherlou S, Geekiyanage S, Chen MX, Lu L",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-07-29",
      doi: "10.3390/ijms27156771",
      pmid: "42589428",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13467374/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Tea has been used as a medicine and drink in China, Japan, India and Thailand for several thousand years. It is the world's most popular drink after water.",
      source: "zhao",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Two lesser-studied groups of tea compounds have shown effects in lab and animal studies:\n- theaflavins, which form when tea leaves are fermented to make black tea, reduced inflammation, slowed cancer cells, protected nerve cells and lowered uric acid (linked to gout)\n- tea polysaccharides (complex sugars) acted as antioxidants, boosted immune cells and helped control blood sugar and blood fats\nA 2026 review said human studies are very scarce, and that the body absorbs only trace amounts of theaflavins.",
      source: "zhao",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A 2026 review noted that theaflavins harmed cells at high concentrations and caused mild liver toxicity in animal studies, and that allergic reactions are rare. More safety testing in people is needed.",
      source: "zhao",
    },
  ],
});
