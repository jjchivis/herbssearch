import { run } from "./lib/populate-herb";

// Evening primrose (Oenothera biennis), from NCCIH's evening primrose oil fact
// sheet (2024) and the 2013 Cochrane review of oral evening primrose oil and
// borage oil for eczema (Bamford et al.). Family per GBIF.

run({
  name: "Evening Primrose",
  profile: {
    family: "Onagraceae",
    genus: "Oenothera",
    species: "biennis",
    nativeRange: "Native to North and South America; also grows throughout Europe and parts of Asia",
    partsUsed: "The oil from the seeds",
  },
  sources: {
    nccih: {
      title: "Evening Primrose Oil: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2024-11-01",
      url: "https://www.nccih.nih.gov/health/evening-primrose-oil",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Oral evening primrose oil and borage oil for eczema",
      author: "Bamford JT, Ray S, Musekiwa A, et al.",
      journal: "Cochrane Database of Systematic Reviews",
      publicationDate: "2013-04-30",
      doi: "10.1002/14651858.CD004416.pub2",
      pmid: "23633319",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8105655/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [{ name: "Evening Primrose Oil", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans put juice from the stem and leaves on the skin for inflammation, bruises and minor wounds, and took the leaves by mouth for stomach and gut problems and sore throats. The yellow flowers open at sunset and close during the day.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "There isn't enough evidence to support evening primrose oil for any health condition:\n- Eczema (atopic dermatitis): taken by mouth, it hasn't been shown to help\n- Breast pain: it probably works no better than a placebo\n- Starting labor: studies, taking it by mouth or vaginally, have had mixed results\n- Rheumatoid arthritis, PMS and menopause symptoms: too little evidence to say",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 Cochrane review of 19 trials of evening primrose oil for eczema found it didn't improve eczema symptoms more than a placebo, as judged by either patients or doctors. Most of the studies had a low risk of bias.\n\nTechnical detail: participant-rated global symptoms MD −2.22 (95% CI −10.48 to 6.04), 7 trials; doctor-rated MD −3.26 (95% CI −6.96 to 0.45), 8 trials. The review also covered 8 trials of borage oil.",
      source: "cochrane",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Evening primrose oil taken by mouth is probably safe for most adults and is generally well tolerated. The most common side effects are stomach pain, nausea and diarrhea. Less is known about its safety in children.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description:
        "It may be safe during pregnancy, but the evidence isn't conclusive. Side effects when used to try to start labor have mostly been mild, but the long-term safety of this use isn't known.",
      source: "nccih",
    },
    {
      category: "BREASTFEEDING",
      description: "Taking it while breastfeeding raises the amount of GLA (a fatty acid) in breast milk, but this hasn't been linked to harm in babies.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description: "If you take any medicine, talk with your health care provider first. Some herbs and medicines interact in harmful ways.",
      source: "nccih",
    },
  ],
  symptoms: [
    { slug: "eczema", notes: "A 2013 Cochrane review found evening primrose oil taken by mouth didn't improve eczema more than a placebo." },
  ],
  preparations: [
    {
      slug: "oil",
      notes: "The oil from the seeds, rich in the omega-6 fatty acid GLA, is sold as a dietary supplement and added to products for the skin.",
      source: "nccih",
    },
  ],
});
