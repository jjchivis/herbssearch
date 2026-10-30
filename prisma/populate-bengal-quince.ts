import { run } from "./lib/populate-herb";

// Bengal Quince, bael (Aegle marmelos), from two reviews (Thakur et al. 2025 for
// its history and native range; Monika et al. 2023 for traditional uses by plant
// part and lab/animal findings), two rat studies of the fruit and a 2026 case
// report, all found by direct PubMed Central search. No trials in people were
// found. Not in MSKCC About Herbs. Family per GBIF.

run({
  name: "Bengal Quince",
  profile: {
    family: "Rutaceae",
    genus: "Aegle",
    species: "marmelos",
    nativeRange: "India, Iran, Myanmar, Pakistan, Bangladesh and parts of South East Asia",
    partsUsed: "The fruit, leaves, root, bark and flowers",
  },
  sources: {
    thakur: {
      title: "Exploring pharmacological potential of Aegle marmelos: integrating traditional knowledge with modern physiology and molecular biology",
      author: "Thakur M, Kaur T, Sobti RC",
      journal: "Physiology and Molecular Biology of Plants",
      publicationDate: "2025-04-01",
      doi: "10.1007/s12298-025-01586-2",
      pmid: "40443470",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12116412/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    monika: {
      title: "Phytochemical and biological review of Aegle marmelos Linn.",
      author: "Monika S, Thirumal M, Kumar PR",
      journal: "Future Science OA",
      publicationDate: "2023-03-01",
      doi: "10.2144/fsoa-2022-0068",
      pmid: "37026028",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10072075/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ghatule: {
      title: "Protective effects of Aegle marmelos fruit pulp on 2,4,6-trinitrobenzene sulfonic acid-induced experimental colitis",
      author: "Ghatule RR, Gautam MK, Goel S, Singh A, Joshi VK, Goel RK",
      journal: "Pharmacognosy Magazine",
      publicationDate: "2014-01-01",
      doi: "10.4103/0973-1296.127366",
      pmid: "24914296",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4047580/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    das: {
      title: "The protective role of Aegle marmelos on aspirin-induced gastro-duodenal ulceration in albino rat model: a possible involvement of antioxidants",
      author: "Das SK, Roy C",
      journal: "Saudi Journal of Gastroenterology",
      publicationDate: "2012-05-01",
      doi: "10.4103/1319-3767.96452",
      pmid: "22626798",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371421/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jadhav: {
      title: "Oral and Lip Depigmentation Induced by Bael Leaves and Clove Phytochemicals",
      author: "Jadhav PB",
      journal: "Indian Dermatology Online Journal",
      publicationDate: "2026-09-01",
      doi: "10.4103/idoj.idoj_661_25",
      pmid: "42301670",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13588459/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bael", type: "COMMON_NAME" },
    { name: "Bilva", type: "TRADITIONAL_NAME", region: "India (Sanskrit)" },
    { name: "Vilvam", type: "TRADITIONAL_NAME", region: "India" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes: "A sacred tree used since Vedic times. The fruit is used for diarrhea and ulcers, and the root is part of dashamula, an Ayurvedic root formula.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bael is a sacred tree in India, with roots in the Vedic era around 2000 BC. It holds an important place in several traditional systems of medicine.",
      source: "thakur",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Traditional uses by plant part:\n- Fruit: eaten as food, in juice, puddings and murabba (a sweet preserve). Used as a laxative, for breathing problems, and for long-lasting diarrhea and stomach ulcers.\n- Leaves: fever, nausea and vomiting, swelling, dysentery and indigestion.\n- Root: urinary problems, a racing heartbeat, fever and belly pain. It's part of dashamula, an Ayurvedic root formula used for fever, diarrhea and gas.\n- Bark: villagers boil it into a tea for fever and cough.\n- Flowers: distilled into a remedy for dysentery and diabetes, and used as a stomach tonic and for epilepsy.\nVarious parts are also used for asthma, fractures, anemia, wounds, high blood pressure, jaundice and swollen joints.",
      source: "monika",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with chemically caused colitis (inflammation of the large bowel), an extract of the dried fruit pulp given for 14 days reduced bowel damage, inflammation and diarrhea. In lab tests, it also acted against gut bacteria.\n\nTechnical detail: 50% ethanol extract of dried fruit pulp, 200 mg/kg orally; TNBS-induced colitis; lower nitric oxide, lipid peroxidation and myeloperoxidase.",
      source: "ghatule",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, fruit pulp extract taken for 14 days before aspirin protected the stomach and upper gut from aspirin-caused ulcers.\n\nTechnical detail: aspirin-induced gastroduodenal ulceration; improved mucosal thickness, ulcer index and antioxidant enzymes (SOD, catalase, glutathione).",
      source: "das",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In male rats, extracts of the bark and leaves lowered fertility and sperm movement, with stronger effects at higher doses. Fertility came back soon after the extract was stopped.\n\nTechnical detail: bark alkaloids marmin and fagarine; 50% ethanolic leaf extract at 100–300 mg/kg/day for 60 days shrank accessory sex organs.",
      source: "monika",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies also report activity against diarrhea, microbes, viruses, stomach ulcers and inflammation.\n\nTechnical detail: alkaloids (aegeline), coumarins (marmin, marmelosin, psoralen, imperatorin) and terpenoids.",
      source: "monika",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Chewing bael leaves can cause white patches on the lips and inside the mouth. A 51-year-old woman who chewed 2 to 3 leaves a day for about 6 weeks developed this. A patch test confirmed bael as the cause, and her color began to return after she stopped.",
      source: "jadhav",
    },
  ],
  symptoms: [
    {
      slug: "diarrhea",
      notes: "Traditionally used, especially the fruit, for long-lasting diarrhea and dysentery. A fruit pulp extract reduced diarrhea in rats with colitis; it hasn't been tested in people.",
    },
    {
      slug: "stomach-ulcers",
      notes: "Traditionally used for stomach ulcers. A fruit pulp extract protected rats from aspirin-caused ulcers; it hasn't been tested in people.",
    },
    {
      slug: "fever",
      notes: "Traditional use only: the leaves, root and bark are used for fever. Not studied in people.",
    },
    {
      slug: "occasional-nausea",
      notes: "Traditional use only: the leaves are used for nausea and vomiting. Not studied in people.",
    },
  ],
  preparations: [
    {
      slug: "decoction",
      notes: "The bark is boiled into a tea for fever and cough.",
      source: "monika",
    },
    {
      slug: "culinary-preparation",
      notes: "The fruit pulp is eaten in juice, puddings and murabba, a sweet preserve.",
      source: "monika",
    },
  ],
});
