import { run } from "./lib/populate-herb";

// Hygrophila auriculata (syn. H. spinosa, Asteracantha longifolia),
// from a 2018 overview (Sethiya et al.) and animal studies on the liver (Singh &
// Handa 1995), blood sugar (Vijayakumar 2005), kidneys (Ingale 2013) and male
// fertility (Vyas & Raval 2016). No safety sources were found. Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Hygrophila Auriculata",
  profile: {
    family: "Acanthaceae",
    genus: "Hygrophila",
    species: "auriculata",
    partsUsed: "The seeds, roots and aerial parts",
  },
  sources: {
    sethiya: {
      title: "Ethnomedicinal, phytochemical and pharmacological updates on Hygrophila auriculata (Schum.) Hiene: an overview",
      author: "Sethiya NK, Ahmed NM, Shekh RM, Kumar V, Kumar Singh P, Kumar V",
      journal: "Journal of Integrative Medicine",
      publicationDate: "2018-07-04",
      doi: "10.1016/j.joim.2018.07.002",
      pmid: "30007830",
      url: "https://pubmed.ncbi.nlm.nih.gov/30007830/",
      sourceType: P,
      tier: T3,
    },
    singh: {
      title: "Hepatoprotective activity of Apium graveolens and Hygrophila auriculata against paracetamol and thioacetamide intoxication in rats",
      author: "Singh A, Handa SS",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1995-12-01",
      doi: "10.1016/0378-8741(95)01291-5",
      pmid: "8824736",
      url: "https://pubmed.ncbi.nlm.nih.gov/8824736/",
      sourceType: P,
      tier: T3,
    },
    vijayakumar: {
      title: "Action of Hygrophila auriculata against streptozotocin-induced oxidative stress",
      author: "Vijayakumar M, Govindarajan R, Rao GM, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2005-11-09",
      doi: "10.1016/j.jep.2005.09.030",
      pmid: "16289604",
      url: "https://pubmed.ncbi.nlm.nih.gov/16289604/",
      sourceType: P,
      tier: T3,
    },
    ingale: {
      title: "Protective effect of Hygrophila spinosa against cisplatin induced nephrotoxicity in rats",
      author: "Ingale KG, Thakurdesai PA, Vyawahare NS",
      journal: "Indian Journal of Pharmacology",
      publicationDate: "2013-05-01",
      doi: "10.4103/0253-7613.111909",
      pmid: "23833364",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3696292/",
      sourceType: P,
      tier: T3,
    },
    vyas: {
      title: "Aphrodisiac and spermatogenic potential of alkaloidal fraction of Hygrophila spinosa T. Ander in rats",
      author: "Vyas NY, Raval MA",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2016-10-29",
      doi: "10.1016/j.jep.2016.10.080",
      pmid: "27989878",
      url: "https://pubmed.ncbi.nlm.nih.gov/27989878/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Hygrophila spinosa", type: "SCIENTIFIC_SYNONYM" },
    { name: "Asteracantha longifolia", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Used in Ayurveda as a Rasayana (rejuvenating) remedy." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Traditional writings describe using the plant for jaundice, swelling, digestive problems, diarrhea, gallstones and kidney stones, urinary and genital problems, vaginal discharge, rheumatism, anemia, body pain, constipation and skin disease, and as an aphrodisiac.",
      source: "sethiya",
    },
    {
      category: "TRADITIONAL",
      summary: "The seeds are used in Indian systems of medicine for liver problems.",
      source: "singh",
    },
    {
      category: "TRADITIONAL",
      summary: "In Indian medicine the seeds are also used to boost male sex drive and sperm production.",
      source: "vyas",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, a seed extract protected the liver from damage caused by an overdose of acetaminophen (paracetamol) or another toxic chemical. This hasn't been tested in people.",
      source: "singh",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In diabetic rats, an extract of the above-ground parts given for 3 weeks lowered blood sugar and reduced cell damage in the liver and kidneys. This hasn't been tested in people.\n\nTechnical detail: 100 and 250 mg/kg; streptozotocin-induced diabetes; glibenclamide comparison.",
      source: "vijayakumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given the cancer drug cisplatin, which can harm the kidneys, an extract of the above-ground parts protected kidney function and tissue.",
      source: "ingale",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In male rats, an alkaloid-rich seed fraction more than doubled testosterone levels and improved sperm production and sexual behavior. This hasn't been tested in people.\n\nTechnical detail: 50 mg/kg; serum testosterone up 115%.",
      source: "vyas",
    },
  ],
  symptoms: [
    { slug: "kidney-stones", notes: "Traditionally used for kidney stones; not tested in people." },
  ],
});
