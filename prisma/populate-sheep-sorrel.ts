import { run } from "./lib/populate-herb";

// Sheep Sorrel (Rumex acetosella), from the US National Cancer Institute's PDQ
// summary on Essiac and Flor Essence (health professional version). Its research
// covers these mixed teas, not sheep sorrel on its own.

run({
  name: "Sheep Sorrel",
  profile: {
    family: "Polygonaceae",
    genus: "Rumex",
    species: "acetosella",
    partsUsed: "The above-ground parts, as part of the Essiac and Flor Essence tea mixtures",
  },
  sources: {
    nci: {
      title: "Essiac/Flor Essence (PDQ): Health Professional Version",
      organization: "National Cancer Institute (NIH)",
      publicationDate: "2025-04-10",
      url: "https://www.cancer.gov/about-cancer/treatment/cam/hp/essiac-pdq",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Red Sorrel", type: "COMMON_NAME" },
    { name: "Sheep's Sorrel", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Sheep sorrel is one of the four herbs in Essiac, together with burdock root, Indian rhubarb root and slippery elm bark. A Canadian nurse made Essiac popular in the 1920s and ran a cancer clinic in Ontario from 1934 to 1942. She said the recipe came from a patient, who said it came from an Ojibwa healer. Flor Essence contains the same four herbs plus four others.",
      source: "nci",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, Essiac mostly showed no effect against cancer. Eight animal experiments at Memorial Sloan Kettering found no effect on the immune system or on cancer. In one rat study of breast cancer, more rats given Flor Essence developed tumors than rats given none.\n\nTechnical detail: tumor incidence 82.5% (controls) vs 90% and 97.3% (Flor Essence groups). NCI testing found no anticancer activity and lethal toxicity at the highest concentrations; one 2004 study found reduced growth of prostate cancer cells.",
      source: "nci",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "No controlled studies in people show that Essiac or Flor Essence works. In a review of 86 cancer patients in Canada who took Essiac between 1978 and 1982, 47 didn't benefit and 4 had a measurable response. No clinical trials of Essiac have been published in medical journals.",
      source: "nci",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Essiac and Flor Essence aren't approved by the FDA to treat cancer or any other condition.",
      source: "nci",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "The only side effects reported with Essiac are nausea and vomiting. Flor Essence may cause more frequent bowel movements and urination, swollen glands, skin blemishes, flu-like symptoms or mild headaches.",
      source: "nci",
    },
  ],
});
