import { run } from "./lib/populate-herb";

// Lovage (Levisticum officinale), from the EMA herbal monograph on lovage root,
// a 2022 study of lovage root compounds (Olennikov) and a 2020 study of
// antibacterial compounds from the root (Miran et al.). Family per GBIF.

run({
  name: "Lovage",
  profile: {
    family: "Apiaceae",
    genus: "Levisticum",
    species: "officinale",
    nativeRange: "Southwest Asia",
    partsUsed: "The root, leaves, stems and seeds",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Levisticum officinale Koch, radix (EMA/HMPC/524621/2011)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      url: "https://www.ema.europa.eu/en/medicines/herbal/levistici-radix",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    olennikov: {
      title: "Coumarins of Lovage Roots (Levisticum officinale W.D.J.Koch): LC-MS Profile, Quantification, and Stability during Postharvest Storage",
      author: "Olennikov DN",
      journal: "Metabolites",
      publicationDate: "2022-12-20",
      doi: "10.3390/metabo13010003",
      pmid: "36676932",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9860584/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    miran: {
      title: "Characterization and Antibacterial Activity of Phthalides from the Roots of the Medicinal Herb Levisticum officinale W.D.J. Koch",
      author: "Miran M, Monsef Esfahani H, Jung JH, et al.",
      journal: "Iranian Journal of Pharmaceutical Research",
      publicationDate: "2020-01-01",
      doi: "10.22037/ijpr.2020.112583.13839",
      pmid: "33224223",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7667549/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "european-folk-medicine", notes: "Lovage root is an EU traditional herbal medicine for flushing the urinary tract." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes lovage root tea as a traditional herbal medicine to increase urine and flush the urinary tract, alongside treatment for minor urinary complaints.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Lovage is an aromatic culinary and medicinal plant related to celery and parsley; its roots, leaves and seeds are all eaten. Its root is rich in coumarins, including xanthotoxin.",
      source: "olennikov",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lovage is known in traditional medicine for easing cramps and increasing urine. In lab tests, a compound from the root slowed the growth of Staphylococcus aureus, E. coli and a drug-resistant Enterococcus.",
      source: "miran",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use if you're allergic to lovage, other plants in the carrot and celery family (Apiaceae), or anethole. Not recommended for anyone under 18.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Not recommended during pregnancy or breastfeeding, because its safety hasn't been established.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description:
        "EU monograph dose for adults: a tea of 2 to 3 g of root in 150 ml of boiling water, twice a day, for no more than 2 to 4 weeks. See a doctor if you get fever, painful urination, spasms or blood in the urine.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "urinary-tract-infections", notes: "An EU traditional herbal medicine to flush the urinary tract in minor urinary complaints. See a doctor if you have fever, painful urination or blood in the urine." },
  ],
  preparations: [{ slug: "tea-infusion", notes: "2 to 3 g of root in 150 ml of boiling water, twice a day.", source: "ema" }],
});
