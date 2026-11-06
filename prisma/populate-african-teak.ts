import { run } from "./lib/populate-herb";

// African Teak (Milicia excelsa, formerly Chlorophora excelsa), from rat studies
// of its root for missed periods (Mvondo et al. 2017), polycystic ovary syndrome
// (Noubouossie Pouegue and Mvondo 2023) and diarrhea (Adebayo et al. 2019), and a
// 1998 report of skin allergy from its wood (Stingeni et al.). Family per GBIF.

run({
  name: "African Teak",
  profile: { family: "Moraceae", genus: "Milicia", species: "excelsa", nativeRange: "Tropical Africa", partsUsed: "The roots, root bark and stem bark" },
  sources: {
    mvondo: {
      title: "Emmenagogue properties of Milicia excelsa (Welw.) C.C. Berg (Moraceae) based, at least in part, on its ability to correlate the activity of the hypothalamic-pituitary axis to that of the ovaries",
      author: "Mvondo MA, Touomo Sakock AJ, Ateba SB, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2017-07-12",
      doi: "10.1016/j.jep.2017.06.005",
      pmid: "28596011",
      url: "https://doi.org/10.1016/j.jep.2017.06.005",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    noubouossie: {
      title: "Milicia excelsa (Moraceae) reversed the effects of letrozole-induced aromatase inhibition in rats with polycystic ovary syndrome",
      author: "Noubouossie Pouegue J, Mvondo MA",
      journal: "Journal of Complementary and Integrative Medicine",
      publicationDate: "2023-01-09",
      doi: "10.1515/jcim-2022-0352",
      pmid: "36617954",
      url: "https://doi.org/10.1515/jcim-2022-0352",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adebayo: {
      title: "Evaluation of Anti-Diarrheal Activity of Methanol Root Bark Extract of Milicia Excelsa (Welw) C. C Berg (Moraceae) in Rats",
      author: "Adebayo MA, Adedokun OA, Akinpelu LA, Okafor PO",
      journal: "Drug Research",
      publicationDate: "2019-08-01",
      doi: "10.1055/a-0825-6337",
      pmid: "30665254",
      url: "https://doi.org/10.1055/a-0825-6337",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    stingeni: {
      title: "Airborne allergic contact dermatitis from iroko (Chlorophora excelsa)",
      author: "Stingeni L, Mariotti M, Lisi P",
      journal: "Contact Dermatitis",
      publicationDate: "1998-05-01",
      doi: "10.1111/j.1600-0536.1998.tb05750.x",
      pmid: "9667453",
      url: "https://doi.org/10.1111/j.1600-0536.1998.tb05750.x",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Iroko", type: "COMMON_NAME" },
    { name: "Chlorophora excelsa", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A large tropical African timber tree, also called iroko. Its root is a traditional remedy for missed periods (amenorrhea), and its root bark for diarrhea.",
      source: "mvondo",
    },
    {
      category: "PRECLINICAL",
      summary: "In young female rats, a root extract raised estrogen-related hormones and sped sexual maturity, behaving somewhat like the plant estrogen genistein.",
      source: "mvondo",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats with a model of polycystic ovary syndrome (PCOS), a root extract reversed hormone and ovary changes.",
      source: "noubouossie",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a root bark extract reduced diarrhea and slowed the gut.",
      source: "adebayo",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description: "Dust from iroko wood can cause allergic skin rashes, even through the air.",
      source: "stingeni",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "The root acts like estrogen in animal studies. It hasn't been studied in people.",
      source: "mvondo",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional diarrhea remedy; reduced diarrhea in rats. Not tested in people." },
  ],
});
