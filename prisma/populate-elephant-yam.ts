import { run } from "./lib/populate-herb";

// Elephant Yam (Amorphophallus paeoniifolius, suran), from a 2012 review (Dey et
// al.) and a 2016 rat study of ulcerative colitis (Dey et al.). No human trials
// were found. Family per GBIF.

run({
  name: "Elephant Yam",
  profile: {
    family: "Araceae",
    genus: "Amorphophallus",
    species: "paeoniifolius",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The tuber (corm)",
  },
  sources: {
    dey2012: {
      title: "A phytopharmacological review on an important medicinal plant - Amorphophallus paeoniifolius",
      author: "Dey YN, Ota S, Srikanth N, Jamal M, Wanjari M",
      journal: "Ayu",
      publicationDate: "2012-01-01",
      doi: "10.4103/0974-8520.100303",
      pmid: "23049180",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3456858/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dey2016: {
      title: "Beneficial effect of Amorphophallus paeoniifolius tuber on experimental ulcerative colitis in rats",
      author: "Dey YN, Sharma G, Wanjari MM, Kumar D, Lomash V, Jadhav AD",
      journal: "Pharmaceutical Biology",
      publicationDate: "2016-09-07",
      doi: "10.1080/13880209.2016.1226904",
      pmid: "27600166",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7011945/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Suran", type: "REGIONAL_NAME", region: "India" },
    { name: "Jimmikand", type: "REGIONAL_NAME", region: "India" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Elephant yam tuber (suran or jimmikand) is used in folk medicine for digestive and inflammatory disorders, and has long been used in Ayurveda for chronic diseases.",
      source: "dey2016",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with ulcerative colitis, tuber extracts given for a week protected the bowel, reducing ulcers and inflammation.",
      source: "dey2016",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2012 review of the published toxicity studies concluded the whole plant is safe.",
      source: "dey2012",
    },
  ],
});
