import { run } from "./lib/populate-herb";

// Christmas Bush (Alchornea cordifolia), from a 2016 review (Boniface et al.), a
// 2022 sickle cell lab study (Adeniyi et al.), a 2016 antibacterial study (Noundou
// et al.) and a 2024 study in healthy people (Otoo et al.). Family per GBIF.

run({
  name: "Christmas Bush",
  profile: { family: "Euphorbiaceae", genus: "Alchornea", species: "cordifolia", nativeRange: "Tropical Africa", partsUsed: "The leaves, and also roots and bark" },
  sources: {
    boniface: {
      title: "Recent trends in phytochemistry, ethnobotany and pharmacological significance of Alchornea cordifolia (Schumach. & Thonn.) Muell. Arg.",
      author: "Boniface PK, Ferreira SB, Kaiser CR",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2016-09-15",
      doi: "10.1016/j.jep.2016.06.021",
      pmid: "27296085",
      url: "https://doi.org/10.1016/j.jep.2016.06.021",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adeniyi: {
      title: "Isolation and Characterisation of Quercitrin as a Potent Anti-Sickle Cell Anaemia Agent from Alchornea cordifolia",
      author: "Adeniyi O, Baptista R, Bhowmick S, et al.",
      journal: "Journal of Clinical Medicine",
      publicationDate: "2022-04-13",
      doi: "10.3390/jcm11082177",
      pmid: "35456270",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9024604/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    otoo: {
      title: "Effect of Alchornea cordifolia on Glycemic Indices of Varieties of Fufu Among Healthy Subjects",
      author: "Otoo ET, Tandoh MA, Mills-Robertson FC",
      journal: "Current Developments in Nutrition",
      publicationDate: "2024-01-10",
      doi: "10.1016/j.cdnut.2024.102076",
      pmid: "38328775",
      url: "https://doi.org/10.1016/j.cdnut.2024.102076",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A tropical African shrub widely used in traditional medicine for coughs, bronchial troubles, diarrhea, ulcers, pain, fever, infections, gonorrhea, prostate problems and infertility.",
      source: "boniface",
    },
    {
      category: "TRADITIONAL",
      summary: "It's used in Africa to treat sickle cell anemia.",
      source: "adeniyi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In 10 healthy people, fufu made with the leaves raised blood sugar less than plain fufu.",
      source: "otoo",
    },
    {
      category: "PRECLINICAL",
      summary: "A compound from the leaves, quercitrin, strongly stopped red blood cells from sickling in lab tests on blood from people with sickle cell disease.",
      source: "adeniyi",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab and animal studies suggest it may help wounds heal, fight germs and diarrhea, and reduce inflammation.",
      source: "boniface",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Its safety in people hasn't been studied in trials.",
      source: "boniface",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional diarrhea remedy. Not tested in trials." },
    { slug: "cough", notes: "Traditionally used for coughs and bronchial troubles. Not tested in trials." },
  ],
});
