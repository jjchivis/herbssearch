import { run } from "./lib/populate-herb";

// Added from the 2024 anticancer medicinal plants review (Bajpai et al.) supplied by the site owner. Family per GBIF.

run({
  name: "Lantana Camara",
  profile: {
    family: "Verbenaceae",
    genus: "Lantana",
    species: "camara",
    partsUsed: "The leaves and roots",
  },
  sources: {
    ghisalberti: {
      title: "Lantana camara L. (Verbenaceae)",
      author: "Ghisalberti EL",
      journal: "Fitoterapia",
      publicationDate: "2000-09-01",
      pmid: "11449493",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/s0367-326x(00)00202-1",
      url: "https://doi.org/10.1016/s0367-326x(00)00202-1",
    },
    sharma: {
      title: "A review of the toxicity of Lantana camara (Linn) in animals",
      author: "Sharma OP, Makkar HP, Dawra RK, et al.",
      journal: "Clinical Toxicology",
      publicationDate: "1981-09-01",
      pmid: "7032835",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3109/15563658108990337",
      url: "https://doi.org/10.3109/15563658108990337",
    },
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    { category: "TRADITIONAL", summary: "Both a notorious weed and a popular garden plant, it has various uses in folk medicine in many parts of the world.", source: "ghisalberti" },
    { category: "PRECLINICAL", summary: "Gold nanoparticles made using lantana root extract killed breast cancer cells in the lab.", source: "bajpai" },
  ],
  safety: [
    { category: "TOXICITY", description: "Lantana poisons livestock every year. In cattle, sheep and buffalo it causes blocked bile flow with jaundice, skin sensitivity to sunlight, and damage mainly to the liver and kidneys.", source: "sharma" },
  ],
  symptoms: [
    { slug: "poisonous-plants", notes: "Poisons livestock, damaging the liver and kidneys." },
  ],
});
