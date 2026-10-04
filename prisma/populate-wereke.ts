import { run } from "./lib/populate-herb";

// Wereke (Ibervillea sonorae), from the University of Texas at El Paso Herbal
// Safety fact sheet, a 2026 systematic review of its blood-sugar research
// (Suárez-Barrios et al.) and a 2022 lab study that describes its traditional use
// by the Mayo people (Vidal-Gutiérrez et al.).

run({
  name: "Wereke",
  profile: {
    family: "Cucurbitaceae",
    genus: "Ibervillea",
    species: "sonorae",
    nativeRange: "Northwestern Mexico",
    partsUsed: "The large root, sliced and dried (sold as \"chips\") and boiled as a tea; also sold as capsules and liquid extracts",
  },
  sources: {
    utep: {
      title: "Wereke (Ibervillea sonorae): Herbal Facts Sheet",
      author: "Gonzalez Stuart A",
      organization: "University of Texas at El Paso, Herbal Safety",
      url: "https://www.utep.edu/herbal-safety/herbal-facts/herbal%20facts%20sheet/wereke.html",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    suarez: {
      title: "Antihyperglycemic Effects and Molecular Mechanisms of Ibervillea sonorae (S. Watson) Greene: A Systematic Review of Preclinical Evidence",
      author: "Suárez-Barrios VW, Hernández-Alba AL, Juárez-Rojas JG, Arellano-Buendia AS",
      journal: "Plants (Basel)",
      publicationDate: "2026-09-03",
      doi: "10.3390/plants15172710",
      pmid: "42739477",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13567665/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    vidal: {
      title: "Standardized phytopreparations and cucurbitacin IIb from Ibervillea sonorae (S. Watson) Greene induce apoptosis in cervical cancer cells by Nrf2 inhibition",
      author: "Vidal-Gutiérrez M, Torres-Moreno H, Arenas-Luna V, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-08-06",
      doi: "10.1016/j.jep.2022.115606",
      pmid: "35944738",
      url: "https://pubmed.ncbi.nlm.nih.gov/35944738/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Wereke Chips", type: "COMMON_NAME" },
    { name: "Wekeke Chips", type: "COMMON_NAME" },
    { name: "Guareque", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Wareki", type: "REGIONAL_NAME", region: "Mexico" },
    { name: "Choyalhuani", type: "REGIONAL_NAME", region: "Mexico" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Wereke is a root used in Mexican folk medicine, mainly for diabetes. Slices of dried root are boiled in water and the tea is drunk. It's also put on the skin as a disinfectant.",
      source: "utep",
    },
    {
      category: "TRADITIONAL",
      summary: "The Mayo people of northwestern Mexico use wereke to treat diabetes and cancer.",
      source: "vidal",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2026 review found 8 lab and animal studies. Wereke preparations may help control blood sugar, possibly by helping cells take up sugar and by slowing the digestion of starches. Most studies used crude extracts and had limitations, and there are no studies in people.\n\nTechnical detail: proposed mechanisms include PI3K/AKT/GLUT4 signalling and inhibition of α-glucosidase and α-amylase; cucurbitacin-derived compounds (kinoins) may be involved.",
      source: "suarez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, wereke preparations and cucurbitacin IIb, a compound from the root, killed cervical cancer cells.",
      source: "vidal",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "No clinical trials have tested whether wereke works for diabetes or any other condition, and its active compounds haven't been identified.",
      source: "utep",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't combine wereke with medicines that lower blood sugar. No studies have looked at its safety in people or how it affects medicines.",
      source: "utep",
    },
    {
      category: "PREGNANCY",
      description: "Avoid wereke during pregnancy and breastfeeding.",
      source: "utep",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "Traditionally used in Mexico for diabetes. Lab and animal studies suggest it may lower blood sugar, but it hasn't been tested in people. Don't combine it with diabetes medicines." },
  ],
});
