import { run } from "./lib/populate-herb";

// Adds to Oregano without touching populate-oregano.ts. Rostro-Alanis et al.
// (2019) studied Mexican oregano (Poliomintha longiflora), a different plant from
// common oregano (Origanum vulgare), so the entry says so.

run({
  name: "Oregano",
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
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the essential oil of Mexican oregano (Poliomintha longiflora), a different plant from common oregano, was split into parts by distillation. The parts richest in carvacrol and thymol, the same compounds found in common oregano, acted as strong antioxidants. They also stopped the growth of Listeria and Salmonella bacteria and of Candida, a yeast. The lighter parts without these compounds had little effect. The authors say more research is needed to understand how it works.\n\nTechnical detail: vacuum distillation fractions F1–F4 plus undistilled residue; fractions F1 and F2 lacked thymol and carvacrol and showed no antimicrobial activity; lowest MIC 6.4 µg/mL (residue, Listeria monocytogenes); C. albicans MIC 78–84 µg/mL; ABTS up to about 177,016 µmol TE/g (F4).",
      source: "rostro",
    },
  ],
});
