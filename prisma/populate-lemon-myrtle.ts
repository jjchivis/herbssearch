import { run } from "./lib/populate-herb";

// Lemon Myrtle (Backhousia citriodora), from a 2021 review (Southwell), a 2024
// wound-dressing study describing First Nations use (Seneviratne et al.) and a
// 2026 rat safety study of a leaf extract (Yamaguchi et al.). Family per GBIF.

run({
  name: "Lemon Myrtle",
  profile: {
    family: "Myrtaceae",
    genus: "Backhousia",
    species: "citriodora",
    nativeRange: "Eastern Australia",
    partsUsed: "The leaves and leaf oil",
  },
  sources: {
    southwell: {
      title: "Backhousia citriodora F. Muell. (Lemon Myrtle), an Unrivalled Source of Citral",
      author: "Southwell I",
      journal: "Foods",
      publicationDate: "2021-07-09",
      doi: "10.3390/foods10071596",
      pmid: "34359465",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8305781/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hydrogel: {
      title: "A low-cost, antimicrobial aloe-alginate hydrogel film containing Australian First Nations remedy 'lemon myrtle oil' (Backhousia citriodora) - Potential for incorporation into wound dressings",
      author: "Seneviratne DM, Raphael B, Whiteside EJ, et al.",
      journal: "Heliyon",
      publicationDate: "2024-09-30",
      doi: "10.1016/j.heliyon.2024.e37516",
      pmid: "39315217",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11417235/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yamaguchi: {
      title: "Safety Assessment of Lemon Myrtle (Backhousia citriodora) Extract: 28-Day Oral Toxicity Study in Rats and In Vitro and In Vivo Genotoxicity Studies",
      author: "Yamaguchi T, Honda S, Fujii T, et al.",
      journal: "Toxics",
      publicationDate: "2026-02-28",
      doi: "10.3390/toxics14030213",
      pmid: "41893481",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13029901/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Citral", slug: "citral", type: "monoterpene" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "First Nations Australians traditionally use lemon myrtle for wounds and mouth care, chewing the leaves or putting a leaf paste on the skin.",
      source: "hydrogel",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its leaf oil is one of the richest natural sources of citral, the compound that gives lemons their scent, and it's widely used to flavor food and drinks.",
      source: "southwell",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a clinical trial in children with molluscum contagiosum, a common viral skin infection that causes small bumps, lemon myrtle oil put on the skin showed activity against the virus.",
      source: "southwell",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, the oil and extracts killed bacteria and fungi, including germs that infect wounds and skin, and reduced inflammation.",
      source: "southwell",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Citral, the main compound in the oil, can irritate and sensitize the skin at high concentrations, and in lab tests the undiluted oil was very toxic to human skin cells. Citral is considered safe as a food flavoring in the US.",
      source: "southwell",
    },
    {
      category: "TOXICITY",
      description:
        "A water extract of the leaves caused no harm in rats given high doses for 28 days and didn't damage DNA in animals, though it did in one bacterial lab test.",
      source: "yamaguchi",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A traditional First Nations wound remedy. The oil kills wound germs in lab tests; not tested on wounds in people." },
  ],
});
