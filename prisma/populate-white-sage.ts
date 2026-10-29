import { run } from "./lib/populate-herb";

// White Sage (Salvia apiana), from a 2024 study of smudge sticks (Pombo
// Geertsma et al.) and two 2025 lab studies (Krol et al.). No human or safety
// studies were found. Family per GBIF.

run({
  name: "White Sage",
  profile: {
    family: "Lamiaceae",
    genus: "Salvia",
    species: "apiana",
    nativeRange: "Southern California and northern Baja California",
    partsUsed: "The leaves",
  },
  sources: {
    pombo: { title: "Commercialized \"Smudge Sticks\" Used as Incense in the Netherlands: An Inventory of Plants and Trends Behind a New Age Fashion", author: "Pombo Geertsma I, Zandstra BE, Stefanaki A, van Andel TR", journal: "Plants", publicationDate: "2024-10-27", doi: "10.3390/plants13213003", pmid: "39519920", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11547997/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    krolOil: {
      title: "Elicited Production of Essential Oil with Immunomodulatory Activity in Salvia apiana Microshoot Culture",
      author: "Krol A, Kokotkiewicz A, Zabiegala B, et al.",
      journal: "Molecules",
      publicationDate: "2025-02-10",
      doi: "10.3390/molecules30040815",
      pmid: "40005127",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11858325/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    krolRoot: {
      title: "Adventitious and Hairy Root Cultures of Salvia apiana as a Source of Rosmarinic Acid",
      author: "Krol A, Kokotkiewicz A, Krolicka A, et al.",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2025-03-28",
      doi: "10.3390/ijms26073138",
      pmid: "40243886",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12077260/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Sacred Sage", type: "COMMON_NAME" }],
  constituents: [
    { name: "1,8-Cineole (Eucalyptol)", slug: "1-8-cineole", type: "volatile oil" },
    { name: "Rosmarinic Acid", slug: "rosmarinic-acid", type: "phenolic acid" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Bundled with other plants and burned for smudging, a cleansing ritual." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Native Americans burn white sage in bundles (smudge sticks) for cleansing rituals. It's now sold widely in Europe and elsewhere for personal \"cleansing\" and protection, which has raised concerns about cultural appropriation.",
      source: "pombo",
    },
    {
      category: "PRECLINICAL",
      summary:
        "White sage oil contains no thujone, unlike common sage oil; its main compound is 1,8-cineole. In lab tests, the oil and 1,8-cineole slowed the growth of human immune T cells and made them self-destruct, more so at higher doses.",
      source: "krolOil",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab-grown white sage roots produced large amounts of rosmarinic acid, an antioxidant compound.",
      source: "krolRoot",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description: "White sage is thought to be harvested unsustainably to meet growing demand for smudge sticks.",
      source: "pombo",
    },
  ],
});
