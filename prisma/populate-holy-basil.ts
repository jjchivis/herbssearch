import { run } from "./lib/populate-herb";

// Holy basil (tulsi, Ocimum tenuiflorum syn. O. sanctum), from a verified
// source: a systematic review of human studies (Jamshidi & Cohen 2017). Family
// per GBIF / Catalogue of Life. No source covering pregnancy, breastfeeding or
// medicine interactions was used, so none is stated.

run({
  name: "Holy Basil",
  profile: {
    family: "Lamiaceae",
    genus: "Ocimum",
    species: "tenuiflorum",
    nativeRange: "Native to the Indian subcontinent",
    partsUsed: "The leaves, and sometimes the whole plant, roots and stems",
  },
  sources: {
    jamshidi: {
      title: "The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review of the Literature",
      author: "Jamshidi N, Cohen MM",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2017-03-16",
      doi: "10.1155/2017/9217567",
      pmid: "28400848",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5376420/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Tulsi", type: "TRADITIONAL_NAME" },
    { name: "Tulasi", type: "TRADITIONAL_NAME" },
    { name: "Ocimum sanctum", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "Highly revered as a medicine in Ayurveda and Siddha medicine; used for bronchitis, cough, asthma, fever, headache and many other conditions." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tulsi is a highly revered cooking and medicinal herb from the Indian subcontinent, used in Ayurvedic and Siddha medicine. Its leaves have been used for bronchitis, fever and joint pain, and for many other problems, including asthma and shortness of breath, hiccups, cough, epilepsy, headache, nerve pain, skin problems and wounds.",
      source: "jamshidi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2017 review found 24 studies of tulsi in people, almost all in India. All reported good results, for blood sugar, cholesterol, immunity, mood and thinking, and none reported serious side effects. However, only 7 were high-quality studies, and most weren't double-blind.",
      source: "jamshidi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Studies on the mind:\n- 150 adults with stress who took tulsi for 6 weeks had fewer stress symptoms, such as tiredness and sleep problems, than with placebo.\n- 35 adults with generalized anxiety disorder reported less anxiety, stress and depression after 8 weeks.\n- 40 healthy young adults showed better attention and short-term memory after 4 weeks, compared with placebo.\n\nTechnical detail: Saxena et al. 2012 (OciBest, 1200 mg/day); Bhattacharyya et al. 2008 (500 mg twice daily); Sampath et al. 2015 (300 mg/day).",
      source: "jamshidi",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a small study of people with asthma, 500 mg of dried tulsi leaves three times a day improved breathing capacity and eased symptoms within 3 days.",
      source: "jamshidi",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "No study in the review reported serious side effects; one reported mild nausea. The authors note that the best doses and who is most likely to benefit still need to be worked out.",
      source: "jamshidi",
    },
  ],
  symptoms: [
    { slug: "stress", notes: "In a 6-week trial of 150 adults, tulsi reduced stress symptoms more than placebo." },
    { slug: "anxiety", notes: "A small study in people with generalized anxiety disorder found less anxiety after 8 weeks." },
    { slug: "memory-and-thinking", notes: "A small trial in healthy young adults found better attention and short-term memory after 4 weeks." },
    {
      slug: "asthma-and-wheezing",
      notes: "Traditionally used for asthma. One small study found tulsi leaves eased asthma symptoms; don't use it in place of asthma medicine.",
    },
    { slug: "cough", notes: "Traditionally used in Ayurveda for cough and bronchitis." },
  ],
});
