import { run } from "./lib/populate-herb";

// Petty Spurge (Euphorbia peplus), from a 2011 clinical study of the sap on
// skin cancers (Ramsay et al.), a 2013 review of ingenol mebutate (Aditya and
// Gupta) and the 2020 EMA review of Picato (ingenol mebutate). Family per GBIF;
// common name per USDA PLANTS.

run({
  name: "Petty Spurge",
  profile: { family: "Euphorbiaceae", genus: "Euphorbia", species: "peplus", partsUsed: "The milky sap" },
  sources: {
    ramsay: {
      title: "The sap from Euphorbia peplus is effective against human nonmelanoma skin cancers",
      author: "Ramsay JR, Suhrbier A, Aylward JH, et al.",
      journal: "British Journal of Dermatology",
      publicationDate: "2011-03-01",
      doi: "10.1111/j.1365-2133.2010.10184.x",
      pmid: "21375515",
      url: "https://doi.org/10.1111/j.1365-2133.2010.10184.x",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    aditya: {
      title: "Ingenol mebutate: A novel topical drug for actinic keratosis",
      author: "Aditya S, Gupta S",
      journal: "Indian Dermatology Online Journal",
      publicationDate: "2013-07-01",
      doi: "10.4103/2229-5178.115538",
      pmid: "23984250",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3752492/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    emaPicato: {
      title: "Picato (ingenol mebutate): referral. Risks of Picato for actinic keratosis outweigh benefits",
      organization: "European Medicines Agency",
      publicationDate: "2020-04-30",
      url: "https://www.ema.europa.eu/en/medicines/human/referrals/picato",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Radium Weed", type: "REGIONAL_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small garden weed with milky sap, known as radium weed in Australia. The sap has been used as a home treatment for skin cancers.",
      source: "ramsay",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a small early study, 36 people put the sap on 48 skin cancers once a day for 3 days. About 15 months later, roughly half to three quarters of the cancers were still gone, depending on the type. There was no comparison group.",
      source: "ramsay",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A compound from the sap, ingenol mebutate, was developed into a skin gel (Picato) for sun-damaged skin patches (actinic keratosis). The FDA approved it in 2012.",
      source: "aditya",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "In 2020 the European Medicines Agency found that the Picato gel may raise the risk of skin cancer where it's applied, and that its risks outweigh its benefits. It's no longer sold in the EU.",
      source: "emaPicato",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In studies, the gel commonly caused redness, flaking, scabbing, pain, itching and swelling around the eyes where it was used.",
      source: "aditya",
    },
  ],
});
