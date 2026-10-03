import { run } from "./lib/populate-herb";

// Cucumber Blossom (Cucumis sativus), from a 2015 review of cucumber's
// pharmacology (Sahu & Sahu) and a 2016 lab study of the flowers against
// bacteria and fungi (Muruganantham et al.).

run({
  name: "Cucumber Blossom",
  profile: {
    family: "Cucurbitaceae",
    genus: "Cucumis",
    species: "sativus",
    partsUsed: "The flowers; the fruit, seeds and leaves of the same plant are better known",
  },
  sources: {
    sahu: {
      title: "Cucumis sativus (cucumber): a review on its pharmacological activity",
      author: "Sahu T, Sahu J",
      journal: "Journal of Applied Pharmaceutical Research",
      publicationDate: "2015-01-01",
      url: "https://japtronline.com/index.php/joapr/article/view/46",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    muruganantham: {
      title: "Antimicrobial Activity of Cucumis sativas (Cucumber) Flowers",
      author: "Muruganantham N, Solomon S, Senthamilselvi MM",
      journal: "International Journal of Pharmaceutical Sciences Review and Research",
      publicationDate: "2016-01-01",
      url: "https://globalresearchonline.net/journalcontents/v36-1/16.pdf",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cucumber Flower", type: "COMMON_NAME" },
    { name: "Cucumber", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cucumber is grown and eaten around the world as a vegetable and in salads. Much less is known about its medicinal value. There is little research on the flowers on their own.",
      source: "sahu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, cucumber plant extracts have shown activity against bacteria and fungi, and effects on stomach acid, gut inflammation, the liver, blood sugar, cholesterol and wound healing. A safety study suggested the plant is safe to use. These studies weren't on the flowers specifically.",
      source: "sahu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In the only lab study found on the flowers themselves, a compound taken from cucumber flowers in India stopped the growth of four types of bacteria (including E. coli and Salmonella typhi) and two fungi (including Candida). It worked better at higher strengths, and the researchers described its effect as almost comparable to the standard antibiotic (chloramphenicol) and antifungal (fluconazole). It hasn't been tested in animals or people.\n\nTechnical detail: ethyl acetate fraction of a 90% ethanol flower extract; disc diffusion at 10–40 mg/ml. At 40 mg/ml, inhibition zones were 13–16 mm (bacteria) and 13 mm (fungi), vs 19–22 mm for chloramphenicol and 19–21 mm for fluconazole at 1 mg/ml.",
      source: "muruganantham",
    },
  ],
});
