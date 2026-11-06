import { run } from "./lib/populate-herb";

// Bridelia Ferruginea (Bridelia ferruginea), from a 2022 review of its traditional uses,
// pharmacology and toxicity (Yeboah et al.) and a 2011 lab study of its leaves for
// wound healing (Adetutu et al.). Family per GBIF.

run({
  name: "Bridelia Ferruginea",
  profile: { family: "Phyllanthaceae", genus: "Bridelia", species: "ferruginea", nativeRange: "West and Central African savanna", partsUsed: "The stem bark, root bark, leaves and fruit" },
  sources: {
    yeboah: {
      title: "Bridelia ferruginea Benth.; An ethnomedicinal, phytochemical, pharmacological and toxicological review",
      author: "Yeboah GN, Owusu FWA, Archer MA, et al.",
      journal: "Heliyon",
      publicationDate: "2022-08-01",
      doi: "10.1016/j.heliyon.2022.e10366",
      pmid: "36082325",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9445295/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adetutu: {
      title: "Antibacterial, antioxidant and fibroblast growth stimulation activity of crude extracts of Bridelia ferruginea leaf, a wound-healing plant of Nigeria",
      author: "Adetutu A, Morgan WA, Corcoran O",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2011-01-07",
      doi: "10.1016/j.jep.2010.09.011",
      pmid: "20863876",
      url: "https://doi.org/10.1016/j.jep.2010.09.011",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Opam Fufuo", type: "REGIONAL_NAME", region: "Ghana (Twi)" },
    { name: "Iroladan", type: "REGIONAL_NAME", region: "Nigeria (Yoruba)" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A common West African shrub. Decoctions of its bark, roots, leaves and fruit are used for arthritis, dysentery, diarrhea, constipation, diabetes, skin diseases, bladder and gut problems, and as an antidote to poisoned arrows.",
      source: "yeboah",
    },
    {
      category: "TRADITIONAL",
      summary: "In Nigeria the bark is mixed with lime juice as a mouthwash for mouth infections such as thrush, and the leaves and bark are used for malaria. In Congo the bark is used for toothache and worms, and in Côte d'Ivoire for fever, headache and rheumatic pain.",
      source: "yeboah",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a bark extract reduced swelling and arthritis about as well as indomethacin at higher doses, and eased pain and fever in rats and mice.",
      source: "yeboah",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, a leaf extract lowered blood sugar and HbA1c about as much as glibenclamide.",
      source: "yeboah",
    },
    {
      category: "PRECLINICAL",
      summary: "A leaf extract helped skin cells grow in lab tests at low doses, supporting its use on wounds; higher doses were toxic to the cells.",
      source: "adetutu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Bark extracts caused no deaths in animal tests even at very high doses. But in one rat study, high doses taken for 60 days lowered sperm counts.",
      source: "yeboah",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "yeboah",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional remedy for diarrhea and dysentery. Not tested in people." },
    { slug: "joint-discomfort", notes: "Used for arthritis; reduced arthritis in rats. Not tested in people." },
    { slug: "high-blood-sugar", notes: "Lowered blood sugar in diabetic rats. Not tested in people." },
  ],
});
