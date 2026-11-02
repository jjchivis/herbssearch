import { run } from "./lib/populate-herb";

// Ashitaba (Angelica keiskei), from a 2024 randomized trial of its chalcones
// (Watanabe et al., abstract only), a 2014 absorption study in older adults
// (Correa et al.), a 2012 skin safety study (Lee) and a 2025 study in dogs that
// describes its traditional use (Miyamoto et al.). Family per GBIF.

run({
  name: "Ashitaba",
  profile: {
    family: "Apiaceae",
    genus: "Angelica",
    species: "keiskei",
    nativeRange: "Japan",
    partsUsed: "The leaves and stems",
  },
  sources: {
    watanabe: {
      title: "Randomised, double-blind, parallel group comparison of Ashitaba (Angelica Keiskei) chalcone effects on visceral fat areas and waist circumference of overweight persons",
      author: "Watanabe N, Inoue K, Hara H, Midorikawa M, Ohta M, Ohkura N",
      journal: "International Journal of Food Sciences and Nutrition",
      publicationDate: "2024-04-01",
      doi: "10.1080/09637486.2024.2334070",
      pmid: "38557440",
      url: "https://doi.org/10.1080/09637486.2024.2334070",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    correa: {
      title: "Bioavailability of plant pigment phytochemicals in Angelica keiskei in older adults: A pilot absorption kinetic study",
      author: "Correa CR, Chen CY, Aldini G, et al.",
      journal: "Nutrition Research and Practice",
      publicationDate: "2014-09-15",
      doi: "10.4162/nrp.2014.8.5.550",
      pmid: "25324936",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4198969/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lee: {
      title: "Evaluation of acute skin irritation and phototoxicity by aqueous and ethanol fractions of Angelica keiskei",
      author: "Lee SH",
      journal: "Experimental and Therapeutic Medicine",
      publicationDate: "2012-10-30",
      doi: "10.3892/etm.2012.782",
      pmid: "23251240",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3524179/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    miyamoto: {
      title: "Bactericidal and Anti-Inflammatory Effects of Ashitaba-Extract Ameliorate the Gingivitis and Halitosis in Dogs with Porphyromonas gulae-Infected Periodontal Disease",
      author: "Miyamoto T, Shirahata S, Komuro M, et al.",
      journal: "Veterinary Sciences",
      publicationDate: "2025-10-13",
      doi: "10.3390/vetsci12100981",
      pmid: "41150121",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12567811/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Xanthoangelol", slug: "xanthoangelol", type: "chalcone" },
    { name: "4-Hydroxyderricin", slug: "4-hydroxyderricin", type: "chalcone" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Ashitaba is a Japanese herb traditionally eaten as a health-promoting food and used as an herbal medicine.",
      source: "miyamoto",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 12-week placebo-controlled trial of 42 overweight adults, capsules of ashitaba chalcones (16 mg a day) reduced belly fat measured by CT scan and shrank waist size compared with placebo.",
      source: "watanabe",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small study of 10 older adults, eating 5 g of dried ashitaba powder raised blood levels of plant pigments such as quercetin and lutein within hours.",
      source: "correa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In dogs with gum disease, an ashitaba gel used daily for 4 weeks improved gum inflammation and bad breath, and the extract killed the bacteria involved in lab tests.",
      source: "miyamoto",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Ashitaba extracts didn't irritate the skin or cause sun sensitivity when tested on rabbits and guinea pigs. No human safety studies were found.",
      source: "lee",
    },
  ],
  symptoms: [
    { slug: "menopausal-weight-gain", notes: "Chalcone capsules reduced belly fat and waist size in overweight adults in one trial; not tested specifically in menopause." },
  ],
});
