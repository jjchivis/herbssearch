import { run } from "./lib/populate-herb";

// Mexican oregano (Poliomintha longiflora), from one lab study of its essential
// oil (Rostro-Alanis et al. 2019, plant collected in Mexico). It's a different
// plant from common oregano (Origanum vulgare). No sources on traditional use,
// native range, safety or studies in animals or people, so none are given.

run({
  name: "Mexican Oregano",
  profile: {
    family: "Lamiaceae",
    genus: "Poliomintha",
    species: "longiflora",
    partsUsed: "The essential oil, studied in the lab",
  },
  sources: {
    rostro: {
      title: "Chemical Composition and Biological Activities of Oregano Essential Oil and Its Fractions Obtained by Vacuum Distillation",
      author: "Rostro-Alanis MdJ, Báez-González J, Torres-Alvarez C, Parra-Saldívar R, Rodriguez-Rodriguez J, Castillo S",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2019-05-17",
      doi: "10.3390/molecules24101904",
      pmid: "31108897",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6571842/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Carvacrol", slug: "carvacrol", type: "volatile oil" },
    { name: "Thymol", slug: "thymol", type: "volatile oil" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, Mexican oregano essential oil was split into parts by distillation. The parts richest in carvacrol and thymol acted as strong antioxidants. They also stopped the growth of Listeria and Salmonella bacteria and of Candida, a yeast. The lighter parts without these compounds had little effect. This was lab work only: it hasn't been tested in animals or people. The authors say more research is needed to understand how it works.\n\nTechnical detail: vacuum distillation fractions F1–F4 plus undistilled residue; F1 and F2 lacked thymol and carvacrol and showed no antimicrobial activity; lowest MIC 6.4 µg/mL (residue, Listeria monocytogenes); C. albicans MIC 78–84 µg/mL; ABTS up to about 177,016 µmol TE/g (F4).",
      source: "rostro",
    },
  ],
});
