import { run } from "./lib/populate-herb";

// White Lead Tree (Leucaena leucocephala), from a 2026 systematic review of
// Indonesian medicinal plants for heart and metabolic disease (Saputri et al.)
// and a 2025 study of its effect on thyroid hormones in cattle
// (Cadenas-Soberanis et al.). No human trials were found. Family per GBIF.

run({
  name: "White Lead Tree",
  profile: {
    family: "Fabaceae",
    genus: "Leucaena",
    species: "leucocephala",
    nativeRange: "Mexico and Central America; now widespread in the tropics",
    partsUsed: "The seeds, leaves and pods",
  },
  sources: {
    saputri: {
      title: "Multitarget Pharmacological Mechanisms and Safety Profiles of Six Ethnobotanically Prioritized Indonesian Medicinal Plants for Cardiometabolic Disorders: A Systematic Review",
      author: "Saputri FA, Febriyanti RM, Zazuli Z, et al.",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2026-09-11",
      doi: "10.2147/DDDT.S630547",
      pmid: "42746347",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13576854/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    cadenas: {
      title: "Effect of Leucaena leucocephala intake on thyroid hormones and energy balance of Brangus bulls",
      author: "Cadenas-Soberanis A, Jiménez-Ocampo R, Becerra-González AY, et al.",
      journal: "Translational Animal Science",
      publicationDate: "2025-12-30",
      doi: "10.1093/tas/txaf170",
      pmid: "41613571",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12850534/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Leucaena", type: "COMMON_NAME" }, { name: "Lamtoro", type: "REGIONAL_NAME", region: "Indonesia" }],
  constituents: [{ name: "Mimosine", slug: "mimosine", type: "amino acid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "White lead tree is one of the plants traditionally used in Indonesia for diabetes and heart and metabolic problems.",
      source: "saputri",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts of the seeds and leaves lowered blood sugar by blocking starch-digesting enzymes and acted as antioxidants. The review says these benefits are offset by its toxicity.",
      source: "saputri",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "White lead tree contains mimosine, a toxic compound that can harm the thyroid and reproduction. In cattle fed the plant, mimosine lowered thyroid hormones.",
      source: "cadenas",
    },
  ],
});
