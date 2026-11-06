import { run } from "./lib/populate-herb";

// Noni (Morinda citrifolia), from a 2007 review of its chemistry, pharmacology
// and safety (Potterat and Hamburger), a 2012 skin leishmaniasis trial (Sattar et
// al.), a 2013 liver injury case (Mrzljak et al.) and a 2000 kidney case (Mueller et
// al.). Family per GBIF.

run({
  name: "Noni",
  profile: { family: "Rubiaceae", genus: "Morinda", species: "citrifolia", nativeRange: "Southeast Asia, Australia and the Pacific Islands", partsUsed: "The fruit (juice), and also leaves and stem" },
  sources: {
    potterat: {
      title: "Morinda citrifolia (Noni) fruit--phytochemistry, pharmacology, safety",
      author: "Potterat O, Hamburger M",
      journal: "Planta Medica",
      publicationDate: "2007-03-01",
      doi: "10.1055/s-2007-967115",
      pmid: "17286240",
      url: "https://doi.org/10.1055/s-2007-967115",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sattar: {
      title: "A double-blind, randomized, clinical trial on the antileishmanial activity of a Morinda citrifolia (Noni) stem extract and its major constituents",
      author: "Sattar FA, Ahmed F, Ahmed N, Sattar SA, Malghani MA, Choudhary MI",
      journal: "Natural Product Communications",
      publicationDate: "2012-02-01",
      pmid: "22474954",
      url: "https://pubmed.ncbi.nlm.nih.gov/22474954/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mrzljak: {
      title: "Drug-Induced Liver Injury Associated with Noni (Morinda citrifolia) Juice and Phenobarbital",
      author: "Mrzljak A, Kosuta I, Skrtic A, Kanizaj TF, Vrhovac R",
      journal: "Case Reports in Gastroenterology",
      publicationDate: "2013-01-10",
      doi: "10.1159/000343651",
      pmid: "23467452",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3573787/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mueller: {
      title: "Noni juice (Morinda citrifolia): hidden potential for hyperkalemia?",
      author: "Mueller BA, Scott MK, Sowinski KM, Prag KA",
      journal: "American Journal of Kidney Diseases",
      publicationDate: "2000-02-01",
      doi: "10.1016/s0272-6386(00)70342-8",
      pmid: "10676732",
      url: "https://doi.org/10.1016/s0272-6386(00)70342-8",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Indian Mulberry", type: "COMMON_NAME" },
    { name: "Noni Juice", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small tropical tree with a bumpy, pungent fruit. Noni juice has been sold worldwide as a health drink since the 1990s with many claimed benefits, and the EU approved it as a novel food in 2003.",
      source: "potterat",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "Lab and animal studies suggest several possible benefits, but there's essentially no clinical evidence for them in people.",
      source: "potterat",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a trial of 40 people with the skin infection cutaneous leishmaniasis, an ointment made from noni stem extract gave good or excellent results in 80%.",
      source: "sattar",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Cases of liver injury have been reported in people drinking noni juice. A woman on a seizure medicine developed severe liver injury after drinking it for months and recovered after stopping.",
      source: "mrzljak",
    },
    {
      category: "TOXICITY",
      description: "Europe's food safety agency reviewed the liver cases and found no clear link to noni juice, but advised continued watchfulness.",
      source: "potterat",
    },
    {
      category: "CONTRAINDICATION",
      description: "Noni juice is high in potassium, about as much as orange juice. A man with kidney disease developed dangerously high potassium after drinking it, so people on low-potassium diets should avoid it.",
      source: "mueller",
    },
  ],
});
