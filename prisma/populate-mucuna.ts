import { run } from "./lib/populate-herb";

// Mucuna, velvet bean (Mucuna pruriens), from a 2012 review (Lampariello et al.),
// a 2017 Parkinson's trial (Cilia et al.), a 2010 male infertility study (Shukla
// et al.) and a 2015 study of its levodopa content (Pulikkalpura et al.), all
// found by direct PubMed Central search. Not in MSKCC About Herbs. Family per GBIF.

run({
  name: "Mucuna",
  profile: {
    family: "Fabaceae",
    genus: "Mucuna",
    species: "pruriens",
    nativeRange: "Originally from southern China and eastern India; now grows in tropical areas worldwide",
    partsUsed: "Mainly the seeds",
  },
  sources: {
    lampariello: {
      title: "The Magic Velvet Bean of Mucuna pruriens",
      author: "Lampariello LR, Cortelazzo A, Guerranti R, Sticozzi C, Valacchi G",
      journal: "Journal of Traditional and Complementary Medicine",
      publicationDate: "2012-10-01",
      doi: "10.1016/s2225-4110(16)30119-5",
      pmid: "24716148",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3942911/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    cilia: {
      title: "Mucuna pruriens in Parkinson disease: A double-blind, randomized, controlled, crossover study",
      author: "Cilia R, Laguna J, Cassani E, Cereda E, Pozzi NG, Isaias IU, et al.",
      journal: "Neurology",
      publicationDate: "2017-08-01",
      doi: "10.1212/WNL.0000000000004175",
      pmid: "28679598",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5539737/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shukla: {
      title: "Mucuna pruriens Reduces Stress and Improves the Quality of Semen in Infertile Men",
      author: "Shukla KK, Mahdi AA, Ahmad MK, Jaiswar SP, Shankwar SN, Tiwari SC",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2010-03-01",
      doi: "10.1093/ecam/nem171",
      pmid: "18955292",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816389/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pulikkalpura: {
      title: "Levodopa in Mucuna pruriens and its degradation",
      author: "Pulikkalpura H, Kurup R, Mathew PJ, Baby S",
      journal: "Scientific Reports",
      publicationDate: "2015-06-01",
      doi: "10.1038/srep11078",
      pmid: "26058043",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4460905/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Velvet bean", type: "COMMON_NAME" },
    { name: "Cowhage", type: "COMMON_NAME" },
    { name: "Cowitch", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used for male infertility, nerve disorders, as an aphrodisiac, and for Parkinson's disease." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, mucuna seeds are used for male infertility and nerve disorders, as an aphrodisiac, and even for Parkinson's disease.",
      source: "lampariello",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Mucuna seeds are the best-known natural source of levodopa, the standard medicine for Parkinson's disease. In 56 seed samples of four varieties, levodopa made up 0.6% to 6.4% of the dry weight. In lab tests, about half the levodopa broke down during extraction into compounds that can damage cells.\n\nTechnical detail: HPTLC densitometry; 0.58–6.42% dry weight; average 52.11% degradation into quinones and reactive oxygen species.",
      source: "pulikkalpura",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2017 trial in Italy, 18 people with advanced Parkinson's disease each took several single-dose treatments in random order. These were standard levodopa medicine, roasted mucuna seed powder at two doses, and a placebo.\nThe lower mucuna dose worked about as well as the standard medicine, with fewer side effects and fewer involuntary movements. The higher dose worked better and for longer. These were single doses, not long-term treatment. The researchers were studying it as a low-cost option for people who can't afford levodopa medicine.\n\nTechnical detail: double-blind, randomized, crossover, noninferiority design; mucuna 12.5 and 17.5 mg/kg vs dispersible levodopa 3.5 mg/kg with benserazide; NCT02680977.",
      source: "cilia",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a study in India, 60 infertile men under psychological stress took 5 g of mucuna seed powder a day for 3 months. Their stress levels fell, and sperm count and sperm movement improved. They were compared with healthy fertile men, not with a placebo group.\n\nTechnical detail: lower serum cortisol and seminal lipid peroxides; restored SOD, catalase, glutathione and ascorbic acid.",
      source: "shukla",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Mucuna seeds contain levodopa (L-dopa), the main medicine for Parkinson's disease, at about 0.6% to 6.4% of their dry weight depending on the variety.",
      source: "pulikkalpura",
    },
    {
      category: "TOXICITY",
      description:
        "Unprocessed velvet bean contains levodopa and hallucinogenic compounds (tryptamines), along with substances that block the absorption of nutrients.",
      source: "lampariello",
    },
    {
      category: "ALLERGY",
      description:
        "Some types, called cowhage or cowitch, have long stinging hairs on the pods. Touching them causes an intensely itchy rash.",
      source: "lampariello",
    },
  ],
  symptoms: [
    {
      slug: "fertility",
      notes:
        "Traditionally used for male infertility. In one study, mucuna seed powder improved sperm count and movement in stressed infertile men; there was no placebo group.",
    },
    {
      slug: "sexual-health",
      notes: "Traditional use only: used in Ayurveda as an aphrodisiac.",
    },
  ],
  preparations: [
    {
      slug: "powder",
      notes: "Roasted seed powder was used in a Parkinson's trial, and seed powder at 5 g a day in a male fertility study.",
      source: "cilia",
    },
  ],
});
