import { run } from "./lib/populate-herb";

// Chinese skullcap (Scutellaria baicalensis, huang qin), from a 2016 review of
// its history, clinical use and flavones (Zhao, Chen & Martin) and a 2024 review
// of its traditional uses and processing (Ma et al.). Safety: neither source
// reviews side effects, so none are listed.

run({
  name: "Scutellaria Baicalensis",
  profile: {
    family: "Lamiaceae",
    genus: "Scutellaria",
    species: "baicalensis",
    nativeRange: "In China it comes mainly from Inner Mongolia, Sichuan, Shanxi, Shandong, Hebei and Henan",
    partsUsed: "The dried root",
  },
  sources: {
    zhao: {
      title: "Scutellaria baicalensis, the golden herb from the garden of Chinese medicinal plants",
      author: "Zhao Q, Chen XY, Martin C",
      journal: "Science Bulletin",
      publicationDate: "2016-07-08",
      doi: "10.1007/s11434-016-1136-5",
      pmid: "27730005",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5031759/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ma: {
      title: "Recent advances in Scutellariae radix: A comprehensive review on ethnobotanical uses, processing, phytochemistry, pharmacological effects, quality control and influence factors of biosynthesis",
      author: "Ma W, Liu T, Ogaji OD, Li J, Du K, Chang Y",
      journal: "Heliyon",
      publicationDate: "2024-08-20",
      doi: "10.1016/j.heliyon.2024.e36146",
      pmid: "39262990",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11388511/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chinese Skullcap", type: "COMMON_NAME" },
    { name: "Baikal Skullcap", type: "COMMON_NAME" },
    { name: "Huang Qin", type: "TRADITIONAL_NAME" },
    { name: "Huangqin", type: "TRADITIONAL_NAME" },
    { name: "Scutellariae Radix", type: "TRADITIONAL_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called huang qin; used for over 2,000 years and listed in the Chinese Pharmacopoeia, traditionally to \"clear heat\", \"dry dampness\", stop bleeding and calm the unborn baby." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chinese people have used the dried root, called huang qin, for more than 2,000 years. It was first recorded around 200–250 AD in the Shennong Bencaojing (The Classic of Herbal Medicine) for lung and liver problems. The 1593 Compendium of Materia Medica lists it for:\n- Diarrhoea and dysentery\n- High blood pressure\n- Bleeding\n- Sleeplessness\n- Inflammation\n- Lung and airway infections\nIt's now listed in the Chinese Pharmacopoeia.",
      source: "zhao",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Chinese medicine, huang qin is used to \"clear heat\", \"dry dampness\", remove toxins, stop bleeding and calm the unborn baby to prevent miscarriage. It's an ingredient in many formulas, such as Huangqin decoction, used for dysentery and pain.",
      source: "ma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, extracts and the root's main compounds (baicalin, baicalein, wogonin and wogonoside) killed or slowed many types of cancer cells, including brain, prostate, head and neck, lung, lymphoma, myeloma and leukaemia cells. In animal studies, it helped protect the liver from scarring.",
      source: "zhao",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Clinical reports suggest huang qin alone may help colds and bacterial pneumonia. It's also a main ingredient in Chinese herbal formulas that, in clinical studies, improved liver test results in hepatitis and, alongside chemotherapy, improved quality of life or survival in lung cancer. These were mostly formulas with several herbs, so the effect of huang qin itself is unclear.",
      source: "zhao",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Traditionally used for diarrhoea and dysentery. Not tested on its own in trials." },
    { slug: "colds-and-congestion", notes: "Clinical reports suggest it may help colds; better trials are needed." },
  ],
});
