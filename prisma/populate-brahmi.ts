import { run } from "./lib/populate-herb";

// Brahmi (Bacopa monnieri), from verified sources: a meta-analysis of randomized
// trials on thinking (Kongkeaw et al. 2014) and a network meta-analysis
// comparing it with ginkgo (Tiemtad et al. 2026). Family per GBIF / Catalogue of
// Life. No source covering side effects, interactions, pregnancy or
// breastfeeding was used, so none is stated.

run({
  name: "Brahmi",
  profile: {
    family: "Plantaginaceae",
    genus: "Bacopa",
    species: "monnieri",
  },
  sources: {
    kongkeaw: {
      title: "Meta-analysis of randomized controlled trials on cognitive effects of Bacopa monnieri extract",
      author: "Kongkeaw C, Dilokthornsakul P, Thanarangsarit P, Limpeanchob N, Norman Scholfield C",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2013-11-16",
      doi: "10.1016/j.jep.2013.11.008",
      pmid: "24252493",
      url: "https://pubmed.ncbi.nlm.nih.gov/24252493/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    tiemtad: {
      title: "Comparative effects of Bacopa monnieri and Ginkgo biloba on cognitive functions: A systematic review and network meta-analysis",
      author: "Tiemtad P, Ingkaninan K, Temkitthawon P, Thimkorn P, Rattanachaisit N, Teaktong T, Dhippayom T",
      journal: "Phytomedicine",
      organization: "Phytomedicine",
      publicationDate: "2026-02-02",
      doi: "10.1016/j.phymed.2026.157915",
      pmid: "41678913",
      url: "https://pubmed.ncbi.nlm.nih.gov/41678913/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Bacopa", type: "COMMON_NAME" },
    { name: "Bacopa monnieri", type: "COMMON_NAME" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Long used for nerve and behavior problems." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Brahmi has a long history in Ayurvedic medicine for nerve and behavior problems.",
      source: "kongkeaw",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2014 meta-analysis of 9 trials with 518 people who took standardized brahmi extracts for at least 12 weeks found it improved thinking, especially the speed of attention. The trials were of good quality. The authors say a large trial comparing it with an existing medicine is needed.\n\nTechnical detail: Trail B test −17.9 ms (95% CI −24.6 to −11.2); choice reaction time −10.6 ms; 437 participants in the pooled analysis.",
      source: "kongkeaw",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 29 trials with 2,107 healthy adults found that high doses of brahmi (600 mg a day or more) improved working and short-term memory more than lower doses, ginkgo or placebo. It didn't improve attention or processing speed. Few trials compared brahmi and ginkgo directly, which limits the findings.\n\nTechnical detail: network meta-analysis; working memory SMD 2.03 (95% CI 1.28 to 2.78) vs placebo; SUCRA 100% for high-dose brahmi.",
      source: "tiemtad",
    },
  ],
  symptoms: [
    {
      slug: "memory-and-thinking",
      notes: "Reviews of trials suggest standardized extracts may improve memory and speed of attention in healthy adults.",
    },
  ],
});
