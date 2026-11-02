import { run } from "./lib/populate-herb";

// Wattle Seed (edible Acacia species), from a 2019 study of four wattle seed
// species (Shelat et al.) and a 2025 co-design study with Aboriginal
// communities (Lopes et al.). Not all Acacia species are eaten; the page
// covers the seeds used as food. Family per GBIF.

run({
  name: "Wattle Seed",
  profile: {
    family: "Fabaceae",
    genus: "Acacia",
    species: "spp.",
    nativeRange: "Australia",
    partsUsed: "The roasted, ground seeds",
  },
  sources: {
    shelat: {
      title: "Overall Nutritional and Sensory Profile of Different Species of Australian Wattle Seeds (Acacia spp.): Potential Food Sources in the Arid Semi-Arid Regions",
      author: "Shelat KJ, Adiamo OQ, Mantilla SMO, et al.",
      journal: "Foods",
      publicationDate: "2019-10-11",
      doi: "10.3390/foods8100482",
      pmid: "31614657",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6836056/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lopes: {
      title: "Integrating Australian Native Foods for a More Sustainable Food System: A Qualitative Co-Design Study with Aboriginal Communities",
      author: "Lopes CVA, Hunter J, Cawthorne R, et al.",
      journal: "International Journal of Environmental Research and Public Health",
      publicationDate: "2025-04-19",
      doi: "10.3390/ijerph22040646",
      pmid: "40283867",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12026976/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wattleseed", type: "COMMON_NAME" },
    { name: "Acacia Seed", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wattle seed is a well-known staple food in Aboriginal communities across Australia. Today the roasted, ground seeds are also used to add flavor to food.",
      source: "shelat",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Wattle seeds were among the many foods of the 90 to 100 Aboriginal language groups of southeastern Australia. Mulga wattle seed (Acacia aneura) has been suggested as suitable for diabetic-friendly diets.",
      source: "lopes",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2019 study of four wattle species, the seeds were rich in protein (23 to 27%) and fiber (33 to 41%), contained essential amino acids, and some were high in iron, potassium and magnesium.",
      source: "shelat",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Only certain Acacia species are traditionally eaten, and the seeds are roasted and ground before use. No medical or safety studies were found.",
      source: "shelat",
    },
  ],
  preparations: [{ slug: "culinary-preparation", notes: "Seeds roasted and ground into a flavoring or flour.", source: "shelat" }],
});
