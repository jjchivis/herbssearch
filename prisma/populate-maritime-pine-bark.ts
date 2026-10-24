import { run } from "./lib/populate-herb";

// Maritime pine bark (Pinus pinaster), from the 2012 Cochrane review of
// Pycnogenol, a French maritime pine bark extract (Schoonees et al.). The review
// authors contacted the product's manufacturer for unpublished studies. Family
// per GBIF.

run({
  name: "Maritime Pine Bark",
  profile: {
    family: "Pinaceae",
    genus: "Pinus",
    species: "pinaster",
    partsUsed: "The bark, as an extract",
  },
  sources: {
    cochrane: {
      title: "Pycnogenol® (extract of French maritime pine bark) for the treatment of chronic disorders",
      author: "Schoonees A, Visser J, Musekiwa A, Volmink J",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2012-04-18",
      doi: "10.1002/14651858.CD008294.pub4",
      pmid: "22513958",
      url: "https://pubmed.ncbi.nlm.nih.gov/22513958/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Pycnogenol", type: "COMMON_NAME" },
    { name: "French Maritime Pine Bark", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Pycnogenol, the best-known maritime pine bark extract, is standardized to contain 70% procyanidins, compounds that act as strong antioxidants. It's sold as a supplement for many long-term conditions.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2012 Cochrane review of 15 trials with 791 people looked at Pycnogenol for seven conditions: asthma, ADHD, poor leg vein circulation, diabetes, erectile dysfunction, high blood pressure and osteoarthritis. The trials were small and varied, and some had a risk of bias, so the reviewers concluded there isn't enough evidence to support it for any long-term condition, or to judge its safety.",
      source: "cochrane",
    },
  ],
  preparations: [
    { slug: "extract", notes: "It's sold as a standardized bark extract (Pycnogenol) in dietary supplements.", source: "cochrane" },
  ],
});
