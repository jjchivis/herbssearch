import { run } from "./lib/populate-herb";

// Bishop's Weed, ajwain (Trachyspermum ammi), from a 2014 review (Boskabady et
// al.), a 2024 trial of ajwain cream (Heydarirad et al.) and a 2025 trial of
// ajwain oil in children's dentistry (Takuli et al.). Family per GBIF.

run({
  name: "Bishop's Weed",
  profile: {
    family: "Apiaceae",
    genus: "Trachyspermum",
    species: "ammi",
    nativeRange: "Grown in many regions, including Iran and India",
    partsUsed: "The small seed-like fruits and their oil",
  },
  sources: {
    boskabady: {
      title: "Carum copticum L.: a herbal medicine with various pharmacological effects",
      author: "Boskabady MH, Alitaneh S, Alavinezhad A",
      journal: "BioMed Research International",
      publicationDate: "2014-06-25",
      doi: "10.1155/2014/569087",
      pmid: "25089273",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4096002/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    heydarirad: {
      title: "Exploring the Effectiveness of Ajwain Cream in Treating Taxane-induced Peripheral Neuropathy in Cancer Patients: A Pilot, Randomised and Double-blind Clinical Trial",
      author: "Heydarirad G, Mirzaei HR, Gharehgozlou R, Buentzel J, Namazi MR, Pasalar M",
      journal: "Indian Journal of Palliative Care",
      publicationDate: "2024-01-06",
      doi: "10.25259/IJPC_32_2023",
      pmid: "38633679",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11021054/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    takuli: {
      title: "Effectiveness of topical ajwain oil in reducing pain during local anaesthesia administration in paediatric dental patients: A randomized controlled trial",
      author: "Takuli A, Bhatnagar A, Rikhari P",
      journal: "Journal of Oral Biology and Craniofacial Research",
      publicationDate: "2025-09-06",
      doi: "10.1016/j.jobcr.2025.09.008",
      pmid: "40989143",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12451331/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ajwain", type: "COMMON_NAME" },
    { name: "Ajowan", type: "COMMON_NAME" },
    { name: "Carom Seed", type: "COMMON_NAME" },
    { name: "Carum copticum", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Thymol", slug: "thymol", type: "monoterpene phenol" },
    { name: "Carvacrol", slug: "carvacrol", type: "monoterpene phenol" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ajwain has been used in Persian traditional medicine for thousands of years, for bloating, diarrhea, stomach pain, loss of appetite, tiredness and breathing problems such as asthma.",
      source: "boskabady",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, ajwain relaxed the airways and calmed coughs in guinea pigs about as well as codeine. It also had antibacterial, antifungal, antioxidant and anti-parasite effects and lowered blood fats. Its smell comes mainly from thymol, the same compound found in thyme.",
      source: "boskabady",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 52 children aged 6 to 10, ajwain oil rubbed on the gum before a dental injection reduced pain more than a standard numbing spray.",
      source: "takuli",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial of 60 cancer patients with nerve damage from chemotherapy, ajwain cream used for four weeks worked no better than a placebo cream. The cream appeared safe.",
      source: "heydarirad",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Ajwain has been shown to be harmful to unborn babies and may cause miscarriage.",
      source: "boskabady",
    },
  ],
});
