import { run } from "./lib/populate-herb";

// Pine Needles (Pinus species), from a 2025 review of the ethnopharmacology of
// pines (Núñez-Selles et al.) and the USDA Agricultural Research Service page
// on ponderosa pine and cattle abortion.

run({
  name: "Pine Needles",
  profile: {
    family: "Pinaceae",
    genus: "Pinus",
    species: "spp.",
    partsUsed: "The needles, as a tea or hot decoction, and their essential oil; the bark, resin, cones and seeds are also used",
  },
  sources: {
    nunez: {
      title: "Ethnopharmacology of Pinus species with focus on the Hispaniola pine (Pinus occidentalis Swartz): evidence, gaps, and research roadmap",
      author: "Núñez-Selles AJ, Nuevas-Paz L, Gómez-Torres EA",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2025-11-13",
      doi: "10.3389/fphar.2025.1680390",
      pmid: "41322293",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12657381/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    usda: {
      title: "Ponderosa Pine (Pinus ponderosa)",
      organization: "USDA Agricultural Research Service, Poisonous Plant Research Laboratory",
      url: "https://www.ars.usda.gov/pacific-west-area/logan-ut/poisonous-plant-research/docs/ponderosa-pine-pinus-ponderosa",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Pine Needle Tea", type: "COMMON_NAME" },
    { name: "Pine", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "The Algonquin people have used white pine needle tea to strengthen the immune system." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Pine needle tea is very popular in Japan, Russia, Korea and China. Around the world, healers have used pine needles, bark, resin, cones and seeds for:\n- Coughs, colds and flu\n- Skin infections and wounds\n- Inflammation\n- Diabetes\nThe Algonquin people have used white pine needle tea to strengthen the immune system. In Latin America, especially Mexico, pine is important in folk medicine.",
      source: "nunez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, pine needle extracts and essential oils have shown antioxidant activity, killed some bacteria and fungi, and may help reduce inflammation. Scots pine needle extract slowed the growth of some breast cancer cells. The review found a large gap between traditional uses and scientific testing.",
      source: "nunez",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Ponderosa pine needles, fresh or dry, cause miscarriage in pregnant cattle, usually within 2 days to 2 weeks of eating them. The cause is a natural chemical called isocupressic acid, also found in lodgepole pine, common juniper and Monterey cypress. Effects in people haven't been studied.",
      source: "usda",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Pine needle decoctions are traditionally used for coughs. Not tested in trials." },
    { slug: "seasonal-immune-support", notes: "Pine needle tea is traditionally used for colds and flu, and by the Algonquin to strengthen the immune system. Not tested in trials." },
  ],
});
