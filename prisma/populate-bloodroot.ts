import { run } from "./lib/populate-herb";

// Bloodroot (Sanguinaria canadensis), from a 2023 review of black salve
// (Borkens) and two case reports of black salve injuries (Ordille et al. 2023;
// Hakim et al. 2025). Family per GBIF.

run({
  name: "Bloodroot",
  profile: {
    family: "Papaveraceae",
    genus: "Sanguinaria",
    species: "canadensis",
    nativeRange: "Eastern North America",
    partsUsed: "The root and its red sap",
  },
  sources: {
    borkens: {
      title: "Black Salve (or escharotics). A picture about an unorthodox medical preparation in oncology",
      author: "Borkens Y",
      journal: "Skin Health and Disease",
      publicationDate: "2023-05-09",
      doi: "10.1002/ski2.241",
      pmid: "37275421",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10233163/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ordille: {
      title: "Black Salve: A Dangerous Corrosive Disguised as an Alternative Medicine",
      author: "Ordille AJ, Porter A, Scholl AM",
      journal: "Cureus",
      publicationDate: "2023-07-01",
      doi: "10.7759/cureus.41248",
      pmid: "37529807",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10388685/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Canadian Bloodroot", type: "COMMON_NAME" }],
  constituents: [{ name: "Sanguinarine", slug: "sanguinarine", type: "benzophenanthridine alkaloid" }],
  traditions: [{ slug: "native-american-ethnobotany", notes: "Used for fever and rheumatism, and to cause vomiting." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous peoples of North America used bloodroot for fever and rheumatism and to cause vomiting. In homeopathy it's used for coughs, sore throat and menopause symptoms, though these effects haven't been proven.",
      source: "borkens",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Bloodroot is a common ingredient of black salve, a corrosive paste sold as a skin cancer cure. Black salve destroys healthy skin as well as diseased skin. One man needed 17 plastic surgeries over 3 years to repair his face. The US FDA has documented at least 24 such injuries.",
      source: "borkens",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Open wounds from black salve often become infected and may need care from several medical specialists.",
      source: "ordille",
    },
  ],
});
