import { run } from "./lib/populate-herb";

// Brazil Nut (Bertholletia excelsa), from the NIH Office of Dietary Supplements
// selenium fact sheet, a 2022 systematic review of clinical trials (da Silva et
// al.), a 2008 randomized trial (Thomson et al.) and a 2021 review of tree nut
// allergy (Kuźmiński et al.). Not related to African Brazil Nut (Poga oleosa).
// Family per GBIF.

run({
  name: "Brazil Nut",
  profile: { family: "Lecythidaceae", genus: "Bertholletia", species: "excelsa", nativeRange: "The Amazon rainforest of South America", partsUsed: "The seeds (nuts)" },
  sources: {
    ods: {
      title: "Selenium: Fact Sheet for Health Professionals",
      organization: "NIH Office of Dietary Supplements",
      publicationDate: "2025-09-04",
      url: "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    dasilva: {
      title: "Effects of Regular Brazil Nut (Bertholletia excelsa H.B.K.) Consumption on Health: A Systematic Review of Clinical Trials",
      author: "da Silva A, Silveira BKS, de Freitas BVM, Hermsdorff HHM, Bressan J",
      journal: "Foods",
      publicationDate: "2022-09-19",
      doi: "10.3390/foods11182925",
      pmid: "36141050",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9498495/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    thomson: {
      title: "Brazil nuts: an effective way to improve selenium status",
      author: "Thomson CD, Chisholm A, McLachlan SK, Campbell JM",
      journal: "American Journal of Clinical Nutrition",
      publicationDate: "2008-02-01",
      doi: "10.1093/ajcn/87.2.379",
      pmid: "18258628",
      url: "https://doi.org/10.1093/ajcn/87.2.379",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kuzminski: {
      title: "Tree nut allergy",
      author: "Kuźmiński A, Przybyszewski M, Przybyszewska J, et al.",
      journal: "Postępy Dermatologii i Alergologii",
      publicationDate: "2021-09-24",
      doi: "10.5114/ada.2021.108894",
      pmid: "34658691",
      url: "https://doi.org/10.5114/ada.2021.108894",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Selenium", slug: "selenium", type: "mineral" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The edible seed of a giant Amazon rainforest tree. It's the richest food source of selenium, a mineral the body needs for its antioxidant defenses; depending on where it's grown, one nut can supply a day's selenium.",
      source: "dasilva",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 12-week trial of 59 adults, eating 2 Brazil nuts a day raised blood selenium as much as a selenium supplement did.",
      source: "thomson",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 24 trials found regular Brazil nuts raised selenium and antioxidant enzyme levels in every study that measured them. Some trials also found better cholesterol and blood sugar in healthy people and in people with obesity, but most studies were small and not randomized.",
      source: "dasilva",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In people on kidney dialysis, Brazil nuts improved cholesterol, inflammation and thyroid markers. In older adults with mild memory problems, they improved some thinking test scores.",
      source: "dasilva",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Brazil nuts are very high in selenium, and too much selenium over time can cause hair loss, brittle nails, garlic breath, a metallic taste, rash, nausea and diarrhea. The safe upper limit for adults is 400 micrograms of selenium a day.",
      source: "ods",
    },
    {
      category: "ALLERGY",
      description:
        "Brazil nuts are tree nuts. Tree nut allergies usually last for life and are a leading cause of serious, even fatal, allergic reactions.",
      source: "kuzminski",
    },
    {
      category: "DOSAGE",
      description: "Depending on where it's grown, a single Brazil nut can supply a full day's selenium, so eating many every day can push intake too high.",
      source: "dasilva",
    },
  ],
  symptoms: [
    { slug: "high-cholesterol", notes: "Improved cholesterol in some small trials, including in people with obesity or on dialysis." },
    { slug: "memory-and-thinking", notes: "Improved some thinking test scores in a small trial of older adults with mild memory problems." },
  ],
});
