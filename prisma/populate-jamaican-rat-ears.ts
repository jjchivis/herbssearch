import { run } from "./lib/populate-herb";

// Jamaican Rat Ears (Peperomia pellucida, shining bush), from verified sources:
// a review of ethnomedicines in Trinidad and Tobago (Lans 2006) and two reviews
// of its chemistry, pharmacology and toxicology (Alves et al. 2019; Ho et al.
// 2022). No peer-reviewed source for the Jamaican name "rat ears" was found.

run({
  name: "Jamaican Rat Ears",
  profile: {
    family: "Piperaceae",
    genus: "Peperomia",
    species: "pellucida",
    nativeRange: "Grows mainly in the tropical Americas, Africa, Southeast Asia and Australia, in damp, shady places",
  },
  sources: {
    lans: {
      title: "Ethnomedicines used in Trinidad and Tobago for urinary problems and diabetes mellitus",
      author: "Lans CA",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2006-10-13",
      doi: "10.1186/1746-4269-2-45",
      pmid: "17040567",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1624823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    alves: {
      title: "The chemistry and biological activities of Peperomia pellucida (Piperaceae): A critical review",
      author: "Alves NSF, Setzer WN, da Silva JKR",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2018-12-15",
      doi: "10.1016/j.jep.2018.12.021",
      pmid: "30562552",
      url: "https://doi.org/10.1016/j.jep.2018.12.021",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ho: {
      title: "Peperomia pellucida (L.) Kunth and eye diseases: A review on phytochemistry, pharmacology and toxicology",
      author: "Ho KL, Yong PH, Wang CW, Kuppusamy UR, Ngo CT, Massawe F, Ng ZX",
      journal: "Journal of Integrative Medicine",
      organization: "Journal of Integrative Medicine",
      publicationDate: "2022-02-02",
      doi: "10.1016/j.joim.2022.02.002",
      pmid: "35153134",
      url: "https://doi.org/10.1016/j.joim.2022.02.002",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Rat Ears", type: "COMMON_NAME" },
    { name: "Shining Bush", type: "REGIONAL_NAME", region: "Trinidad and Tobago" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in Trinidad and Tobago, where it's called shining bush, as a \"cooling\" remedy." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Trinidad and Tobago, where it's called shining bush, it's used as a \"cooling\" remedy.",
      source: "lans",
    },
    {
      category: "TRADITIONAL",
      summary:
        "It's used in folk medicine for:\n- Abscesses and skin sores\n- Belly pain\n- Conjunctivitis (pink eye)\n- Measles\n- Kidney problems",
      source: "alves",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2019 review found reports that it may fight germs, act as an antioxidant, help bones heal, and lower blood sugar and cholesterol. But the reviewers said many of these studies were weak: some didn't identify the active compounds or lacked proper comparison groups. More research is needed.",
      source: "alves",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2022 review reported that, in lab, animal and some clinical studies, its extracts lowered blood pressure and blood sugar, may help reduce inflammation, and acted as antioxidants. Extracts weren't toxic to normal cells in lab tests but were mildly toxic in animals.",
      source: "ho",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Extracts were mildly toxic in animal studies. Its safety in people hasn't been well studied.",
      source: "ho",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "Used in folk medicine for abscesses and skin sores. This use hasn't been well tested in people." },
    { slug: "high-blood-pressure", notes: "Reviews report it lowered blood pressure in studies, but the research is limited." },
    { slug: "high-blood-sugar", notes: "Lab and animal studies suggest it may lower blood sugar; many of these studies were weak." },
    { slug: "high-cholesterol", notes: "Lab and animal studies suggest it may lower cholesterol; many of these studies were weak." },
  ],
});
