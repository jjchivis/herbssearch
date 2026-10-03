import { run } from "./lib/populate-herb";

// Bobinsana (Calliandra angustifolia), from a 2010 study of Asháninka medicinal
// plants in Peru, a 2022 study drawing on Kichwa plant knowledge, a 2022 review
// of ayahuasca plant medicine and a 2011 review of anti-inflammatory plants in
// South America. No studies in people were found.

run({
  name: "Bobinsana",
  profile: {
    family: "Fabaceae",
    genus: "Calliandra",
    species: "angustifolia",
    nativeRange: "The Amazon region of South America",
    partsUsed: "The bark and other parts",
  },
  sources: {
    luziatelli: {
      title: "Asháninka medicinal plants: a case study from the native community of Bajo Quimiriki, Junín, Peru",
      author: "Luziatelli G, Sørensen M, Theilade I, Mølgaard P",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2010-08-13",
      doi: "10.1186/1746-4269-6-21",
      pmid: "20707893",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2933607/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vicente: {
      title: "In Silico Research of New Therapeutics Rotenoids Derivatives against Leishmania amazonensis Infection",
      author: "Vicente-Barrueco A, Román ÁC, Ruiz-Téllez T, Centeno F",
      journal: "Biology (Basel)",
      publicationDate: "2022-01-14",
      doi: "10.3390/biology11010133",
      pmid: "35053132",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8772715/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    james: {
      title: "N,N-dimethyltryptamine and Amazonian ayahuasca plant medicine",
      author: "James E, Keppler J, Robertshaw TL, Sessa B",
      journal: "Human Psychopharmacology",
      publicationDate: "2022-02-17",
      doi: "10.1002/hup.2835",
      pmid: "35175662",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9286861/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deMorais: {
      title: "Database survey of anti-inflammatory plants in South America: a review",
      author: "de Morais Lima GR, de Albuquerque Montenegro C, de Almeida CL, de Athayde-Filho PF, Barbosa-Filho JM, Batista LM",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2011-04-21",
      doi: "10.3390/ijms12042692",
      pmid: "21731467",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3127143/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bobinzana", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Asháninka people of the Peruvian Amazon use bobinsana:\n- For tiredness in older people and to strengthen them\n- For stomach aches and as a laxative\n- To strengthen newborn babies and help babies walk sooner",
      source: "luziatelli",
    },
    {
      category: "TRADITIONAL",
      summary: "Kichwa communities in the Amazon use bobinsana for mosquito and animal bites.",
      source: "vicente",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Bobinsana is one of many \"teacher\" or \"master\" plants often used with ayahuasca in Amazonian healing and self-development practices.",
      source: "james",
    },
    {
      category: "PRECLINICAL",
      summary: "In a rat study, an alcohol-based extract of bobinsana bark didn't reduce swelling.",
      source: "deMorais",
    },
  ],
});
