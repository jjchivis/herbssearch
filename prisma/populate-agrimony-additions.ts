import { run } from "./lib/populate-herb";

// Adds a 2017 lab and animal study of agrimony tea (Santos et al.), supplied by
// the site owner, to the existing Agrimony (Agrimonia eupatoria) page.

run({
  name: "Agrimony",
  sources: {
    santos: {
      title: "Antioxidant, Anti-Inflammatory, and Analgesic Activities of Agrimonia eupatoria L. Infusion",
      author: "Santos TN, Costa G, Ferreira JP, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2017-01-01",
      doi: "10.1155/2017/8309894",
      pmid: "28491113",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5405390/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional medicine the above-ground parts of agrimony are made into teas, decoctions or tinctures for inflammation and as an astringent and to increase urine.",
      source: "santos",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2017 study, agrimony tea made the traditional way, and a concentrated part of it rich in polyphenols, acted as strong antioxidants in the lab and lowered an inflammation signal in immune cells. In rats, it reduced paw swelling, and in mice it reduced pain responses, at doses that didn't harm the liver or kidneys. It hasn't been tested in people.\n\nTechnical detail: carrageenan-induced paw edema, acetic acid writhing, hot-plate and formalin tests; doses based on the traditional 5 g of herb in 150 ml of water.",
      source: "santos",
    },
  ],
});
