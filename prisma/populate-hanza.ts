import { run } from "./lib/populate-herb";

// Hanza (Boscia senegalensis), from a 2026 open-label diabetes study (Eto et al.),
// a 2015 study of hanza seed processing (Rivera-Vega et al.) and a 2026 review of
// famine foods (Guil Guerrero et al.). Family per GBIF.

run({
  name: "Hanza",
  profile: { family: "Capparaceae", genus: "Boscia", species: "senegalensis", nativeRange: "The Sahel region of Africa", partsUsed: "The seeds, fruit and leaves" },
  sources: {
    eto: {
      title: "Boscisucrophage: A Natural SGLT1/2 Inhibitor From Boscia senegalensis for Managing Type 2 Diabetes",
      author: "Eto B, Elrherabi A, Nasr FA, et al.",
      journal: "Food Science & Nutrition",
      publicationDate: "2026-03-08",
      doi: "10.1002/fsn3.71621",
      pmid: "41804342",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12967618/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rivera: {
      title: "Allelopathic effects of glucosinolate breakdown products in Hanza [Boscia senegalensis (Pers.) Lam.] processing waste water",
      author: "Rivera-Vega LJ, Krosse S, de Graaf RM, et al.",
      journal: "Frontiers in Plant Science",
      publicationDate: "2015-07-14",
      doi: "10.3389/fpls.2015.00532",
      pmid: "26236325",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4500904/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    famine: {
      title: "Famine Foods: A Structured Narrative Review of Nutritional, Toxicological, Ecological, and Socio-Cultural Perspectives",
      author: "Guil Guerrero JL, Heras-Roger JEL, Rincón-Cervera MÁ, Díaz-Romero C",
      journal: "Foods",
      publicationDate: "2026-10-10",
      doi: "10.3390/foods15203602",
      pmid: "42940243",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13703261/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Mukheit", type: "REGIONAL_NAME", region: "Sudan" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A drought-hardy Sahel shrub that's a vital famine food. Its seeds, called hanza or mukheit, are eaten across sub-Saharan Africa when crops fail; the berries fed people during the 1984-1985 Darfur famine.",
      source: "famine",
    },
    {
      category: "TRADITIONAL",
      summary: "The fresh seeds taste bitter, so they're soaked in water for 4 to 7 days before eating. The fruit and seeds are also made into foods and a caffeine-free coffee substitute.",
      source: "rivera",
    },
    {
      category: "TRADITIONAL",
      summary: "Healers in the Sahel use the seeds to lower high blood sugar.",
      source: "eto",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a 12-week study of 332 people with type 2 diabetes, most not helped by diabetes pills, capsules of a seed product lowered blood sugar and HbA1c and increased sugar lost in the urine. There was no comparison group.",
      source: "eto",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "The seeds contain bitter glucosinolates that are removed by days of soaking; unsoaked seeds aren't eaten. No serious side effects were reported in the diabetes study.",
      source: "rivera",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "A seed product lowered blood sugar in an uncontrolled 12-week diabetes study." },
  ],
});
