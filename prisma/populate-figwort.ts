import { run } from "./lib/populate-herb";

// Figwort (Scrophularia nodosa). Sources: a 2025 review of iridoid-rich
// Bulgarian medicinal plants and a 2025 lab and horse wound study of a
// herbal blend. Family per GBIF. Not the same species as Scrophularia Root
// (S. ningpoensis).

run({
  name: "Figwort",
  profile: {
    family: "Scrophulariaceae",
    genus: "Scrophularia",
    species: "nodosa",
    partsUsed: "The above-ground parts",
  },
  sources: {
    mihaylova: {
      title: "Targeting Inflammation with Natural Products: A Mechanistic Review of Iridoids from Bulgarian Medicinal Plants",
      author: "Mihaylova R, Elincheva V, Gevrenova R, Zheleva-Dimitrova D, Momekov G, Simeonova R",
      journal: "Molecules",
      publicationDate: "2025-08-22",
      doi: "10.3390/molecules30173456",
      pmid: "40941985",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12430101/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fehrenbach: {
      title: "Anti-Inflammatory and Regenerative Properties of Herbal Extracts: Wound Management in Equine Models",
      author: "Fehrenbach GW, Sheils K, Silva MJ, et al.",
      journal: "Drug Target Insights",
      publicationDate: "2025-01-01",
      doi: "10.33393/dti.2025.3499",
      pmid: "40453653",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12124212/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Figwort is a herb of temperate Europe and Asia. Its traditional uses are linked to effects against inflammation, germs, fungi and parasites, and to supporting the liver, heart, immune system and urine flow.",
      source: "mihaylova",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Figwort is rich in iridoids, compounds that in lab studies reduce inflammation and pain and act as antioxidants. There are no clinical studies of figwort in people.\n\nTechnical detail: iridoids include aucuboside, catalpol, catalposide and harpagide esters.",
      source: "mihaylova",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 study, a blend of five herbal extracts including figwort calmed inflammation in human cells in the lab, and was well tolerated and seemed to support healing of open wounds in a few horses. Because it was a blend, figwort's own effect is unclear.",
      source: "fehrenbach",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Figwort contains cardiac glycosides, a type of compound that acts on the heart. No human safety studies were found.",
      source: "mihaylova",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Only tested in a herbal blend on horse wounds; figwort's own effect is unclear." },
  ],
});
