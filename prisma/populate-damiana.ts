import { run } from "./lib/populate-herb";

// Damiana (Turnera diffusa), from a 2024 review of Brazilian plants used for
// male sexual problems (Teixeira et al., J Ethnopharmacol) and a 2026 lab study
// of a damiana extract (Benito-Vázquez et al., Pharmaceuticals). No studies of
// damiana alone in people, or of its safety, were found.

run({
  name: "Damiana",
  profile: {
    family: "Passifloraceae",
    genus: "Turnera",
    species: "diffusa",
    partsUsed: "The leaves",
  },
  sources: {
    teixeira: {
      title: "The traditional use of native Brazilian plants for male sexual dysfunction: Evidence from ethnomedicinal applications, animal models, and possible mechanisms of action",
      author: "Teixeira TM, Boeff DD, de Oliveira Carvalho L, Ritter MR, Konrath EL",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2023-07-10",
      doi: "10.1016/j.jep.2023.116876",
      pmid: "37437795",
      url: "https://doi.org/10.1016/j.jep.2023.116876",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    benito: {
      title: "Flavonoid Composition and Molecular Basis of the Potential Sexual-Enhancing Properties of a Turnera diffusa Extract (Liboost)",
      author: "Benito-Vázquez I, Morán-Valero MI, Díez-Municio M, Mena-García A",
      journal: "Pharmaceuticals",
      organization: "Pharmaceuticals",
      publicationDate: "2026-04-08",
      doi: "10.3390/ph19040597",
      pmid: "42075853",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118355/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Brazilian folk medicine, damiana is one of the plants used as an aphrodisiac and for male sexual problems.",
      source: "teixeira",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review found damiana is one of the few Brazilian folk aphrodisiacs tested in lab and animal studies. Possible effects include acting as an antioxidant, acting like male hormones, and affecting blood flow and brain chemicals involved in sexual function. The reviewers say more research is needed.\n\nTechnical detail: proposed mechanisms include androgenic activity, PDE5 inhibition, increased nitric oxide, and dopaminergic and noradrenergic activation.",
      source: "teixeira",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on human cells, a commercial damiana extract lowered levels of an enzyme targeted by erection medicines, blocked an enzyme that turns testosterone into estrogen, and slightly raised nitric oxide, which helps blood vessels relax. These were cell tests only.\n\nTechnical detail: Liboost extract; 49 compounds, mainly flavonoids (15.9 mg/g); reduced PDE5 expression, inhibited aromatase.",
      source: "benito",
    },
  ],
  symptoms: [
    { slug: "sexual-health", notes: "A folk aphrodisiac. Lab and animal studies suggest effects on sexual function, but it hasn't been tested on its own in people." },
  ],
});
