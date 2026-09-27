import { run } from "./lib/populate-herb";

// Queen Anne's lace (wild carrot, Daucus carota), from a verified 2023
// phytochemical and pharmacological review (Ismail et al., Plants). Family per
// GBIF / Catalogue of Life. The review is the only verified source found, so
// the page is deliberately limited to what it states.

run({
  name: "Queen Anne's Lace",
  profile: {
    family: "Apiaceae",
    genus: "Daucus",
    species: "carota",
    partsUsed: "Mainly the seeds. Unlike garden carrots, the wild plant has a thin root.",
  },
  sources: {
    ismail: {
      title: "The Wild Carrot (Daucus carota): A Phytochemical and Pharmacological Review",
      author: "Ismail J, Shebaby WN, Daher J, Boulos JC, Taleb R, Daher CF, Mroueh M",
      journal: "Plants (Basel)",
      organization: "Plants (Basel)",
      publicationDate: "2023-12-01",
      doi: "10.3390/plants13010093",
      pmid: "38202401",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10781147/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wild Carrot", type: "COMMON_NAME" },
    { name: "Bird's Nest", type: "COMMON_NAME" },
    { name: "Bishop's Lace", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "mediterranean-folk-medicine",
      notes:
        "The ancient Greeks recommended the seeds to prevent pregnancy and bring on periods, and the Romans used wild carrot in contraceptive preparations.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wild carrot seeds have long been used to control women's fertility. The ancient Greeks recommended them to prevent pregnancy and bring on periods, the Romans used wild carrot in contraceptive preparations, and it was known as a traditional \"morning after\" remedy. The seeds have also been used to bring about abortion.\n\nTechnical detail: anti-fertility, emmenagogue, implantation inhibitor.",
      source: "ismail",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Wild carrot has also traditionally been used to increase urination, relieve gas and fight infection, and for kidney and bladder stones, bladder infections, gout, prostate inflammation and cancer.\n\nTechnical detail: antilithic, diuretic, carminative, antiseptic; urinary calculus, cystitis, prostatitis.",
      source: "ismail",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Animal studies suggest wild carrot may reduce fertility by affecting the reproductive cycle and blocking the hormone progesterone. In lab and animal studies, it has also shown antioxidant, anticancer, pain-relieving, germ-fighting and liver-protecting effects.\n\nTechnical detail: effects on the estrous cycle and anti-progestogenic activity.",
      source: "ismail",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Wild carrot hasn't been properly tested in people. The review's authors say well-designed lab, animal and clinical studies are still needed before it can be considered safe or effective for human use.",
      source: "ismail",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Wild carrot has been mistaken for poison hemlock (Conium maculatum), a deadly plant. One difference: wild carrot stems and leaves are hairy, while poison hemlock stems are smooth. Never pick and use wild plants unless you're certain what they are.",
      source: "ismail",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Wild carrot seed is not a reliable form of birth control. Its safety and effectiveness in people haven't been established, and it has traditionally been used to cause abortion.",
      source: "ismail",
    },
    {
      category: "PREGNANCY",
      description: "Avoid wild carrot seed if you are pregnant or trying to become pregnant: it has traditionally been used to prevent pregnancy and to cause abortion.",
      source: "ismail",
    },
  ],
  symptoms: [
    {
      slug: "fertility",
      notes:
        "Traditionally used to prevent pregnancy. It's not a reliable form of birth control, it hasn't been shown to be safe, and it should be avoided by anyone pregnant or trying to conceive.",
    },
  ],
});
