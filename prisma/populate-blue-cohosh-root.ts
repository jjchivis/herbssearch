import { run } from "./lib/populate-herb";

// Blue Cohosh (Caulophyllum thalictroides), from the NIH LactMed entry (2024)
// and a 2023 review of herbal abortifacients (Feng et al.). Family per GBIF.

run({
  name: "Blue Cohosh Root",
  profile: {
    family: "Berberidaceae",
    genus: "Caulophyllum",
    species: "thalictroides",
    nativeRange: "Eastern North America",
    partsUsed: "The root",
  },
  sources: {
    lactmed: {
      title: "Blue Cohosh — Drugs and Lactation Database (LactMed)",
      organization: "U.S. National Library of Medicine, National Institutes of Health",
      publicationDate: "2024-12-15",
      pmid: "30000839",
      url: "https://pubmed.ncbi.nlm.nih.gov/30000839/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    feng: {
      title: "Toxicities of herbal abortifacients",
      author: "Feng C, Fay KE, Burns MM",
      journal: "American Journal of Emergency Medicine",
      publicationDate: "2023-03-07",
      doi: "10.1016/j.ajem.2023.03.005",
      pmid: "36924751",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192026/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Blue Cohosh", type: "COMMON_NAME" },
    { name: "Papoose Root", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "N-Methylcytisine", slug: "n-methylcytisine", type: "quinolizidine alkaloid" },
    { name: "Caulosaponin", slug: "caulosaponin", type: "saponin" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Blue cohosh root has been used to bring on labor.",
      source: "lactmed",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The root contains N-methylcytisine, which acts like nicotine, and caulosaponin, which narrows the heart's blood vessels and may make the womb contract.",
      source: "lactmed",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Blue cohosh can cause severe stomach, bowel, heart and circulation problems, including in newborns whose mothers used it to bring on labor. It's one of the herbal abortion remedies linked to serious illness and death.",
      source: "feng",
    },
    {
      category: "BREASTFEEDING",
      description: "Most sources strongly advise against using it while breastfeeding, because of its possible toxicity and the lack of safety data.",
      source: "lactmed",
    },
  ],
});
