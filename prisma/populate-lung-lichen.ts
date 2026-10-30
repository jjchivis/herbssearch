import { run } from "./lib/populate-herb";

// Lung Lichen (Lobaria pulmonaria, lungwort lichen, oak lung), from a 2026 lab
// study against tuberculosis bacteria (Nguyen et al.) and a 2025 study of
// edible lichens (Ozkan et al.). No human or safety studies were found. Family
// per GBIF.

run({
  name: "Lung Lichen",
  profile: {
    family: "Lobariaceae",
    genus: "Lobaria",
    species: "pulmonaria",
    nativeRange: "Old forests of Europe, Asia, North America and Africa, growing on tree bark",
    partsUsed: "The whole lichen",
  },
  sources: {
    nguyen: {
      title: "Secondary metabolites from Lobaria pulmonaria (L.) Hoffm. target key metabolic enzymes: a novel strategy against multidrug-resistant tuberculosis",
      author: "Nguyen HT, Badavath VN, Maji S, et al.",
      journal: "RSC Advances",
      publicationDate: "2026-02-16",
      doi: "10.1039/d5ra05774d",
      pmid: "41704445",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12908696/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ozkan: {
      title: "Optimizing the Extraction of Polyphenols from Different Edible Lichens Using Response Surface Methodology and the Determination of Their Mineral and Antibacterial Properties",
      author: "Ozkan K, Bekiroglu H, Cebi N, et al.",
      journal: "Foods",
      publicationDate: "2025-07-22",
      doi: "10.3390/foods14152562",
      pmid: "40807499",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12346634/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Lungwort Lichen", type: "COMMON_NAME" },
    { name: "Oak Lung", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Stictic Acid", slug: "stictic-acid", type: "depsidone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Lung lichen is a leafy lichen, not a plant. Its lobed surface looks like lung tissue, and since the late 1400s many cultures have used it for lung problems such as tuberculosis, coughs and coughing up blood.",
      source: "nguyen",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a lung lichen extract stopped the growth of tuberculosis bacteria, including six drug-resistant strains, more strongly than the TB drug rifampicin, without harming human immune cells. It hasn't been tested in people.",
      source: "nguyen",
    },
    {
      category: "PRECLINICAL",
      summary: "It is one of several lichens eaten in some places. In a comparison of five edible lichens, it was the weakest against common bacteria.",
      source: "ozkan",
    },
  ],
});
