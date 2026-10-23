import { run } from "./lib/populate-herb";

// Lippia graveolens, one of the plants sold as Mexican oregano, from one lab
// study of its essential oil (Marin-Tinoco et al. 2023, plants from Durango,
// Mexico). It's a different plant from both common oregano (Origanum vulgare)
// and the Mexican Oregano entry (Poliomintha longiflora). Family per GBIF /
// Catalogue of Life. No sources on traditional use, safety or studies in animals
// or people, so none are given.

run({
  name: "Lippia Graveolens",
  profile: {
    family: "Verbenaceae",
    genus: "Lippia",
    species: "graveolens",
    nativeRange: "Grows wild in dry areas of northern Mexico, where it's also farmed",
    partsUsed: "The essential oil, studied in the lab",
  },
  sources: {
    marin: {
      title: "Antioxidant and Antibacterial Activity of Mexican Oregano Essential Oil, Extracted from Plants Occurring Naturally in Semiarid Areas and Cultivated in the Field and Greenhouse in Northern Mexico",
      author: "Marin-Tinoco RI, Ortega-Ramírez AT, Esteban-Mendez M, et al.",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2023-09-09",
      doi: "10.3390/molecules28186547",
      pmid: "37764323",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10536881/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Mexican Oregano", type: "COMMON_NAME" }],
  constituents: [
    { name: "Carvacrol", slug: "carvacrol", type: "volatile oil" },
    { name: "Thymol", slug: "thymol", type: "volatile oil" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, essential oil from Lippia graveolens plants grown wild, in fields and in greenhouses in northern Mexico was a strong antioxidant. At higher strengths it stopped the growth of four kinds of bacteria: Salmonella, E. coli, Listeria and Staphylococcus. Oil from wild plants worked best overall. This was lab work only: it hasn't been tested in animals or people.\n\nTechnical detail: hydrodistillation; main compounds carvacrol (mean 18.03%), o-cymene (12.77%), thymol (7.90%); ABTS antioxidant activity about 90–94% (mean 92.58%); inhibition zones over 8 mm from 5 µL/mL, up to about 32 mm against S. aureus and 36.7 mm against S. typhi; agar microwell diffusion.",
      source: "marin",
    },
  ],
});
