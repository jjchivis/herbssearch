import { run } from "./lib/populate-herb";

// Embelia Schimperi (Embelia schimperi), from Ethiopian and Tanzanian tapeworm
// studies (Debebe et al. 2015; Bøgh et al. 1996) and rat pregnancy studies of the
// fruit and its compound embelin (Animaw et al. 2022, 2023). Family per GBIF.

run({
  name: "Embelia Schimperi",
  profile: { family: "Primulaceae", genus: "Embelia", species: "schimperi", nativeRange: "East Africa", partsUsed: "The fruit (seeds)" },
  sources: {
    debebe: {
      title: "Evaluation of anthelmintic potential of the Ethiopian medicinal plant Embelia schimperi Vatke in vivo and in vitro against some intestinal parasites",
      author: "Debebe Y, Tefera M, Mekonnen W, et al.",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2015-06-18",
      doi: "10.1186/s12906-015-0711-7",
      pmid: "26084371",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4470045/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bogh: {
      title: "Anthelmintic usage of extracts of Embelia schimperi from Tanzania",
      author: "Bøgh HO, Andreassen J, Lemmich J",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1996-01-01",
      doi: "10.1016/0378-8741(95)01322-9",
      pmid: "8778505",
      url: "https://doi.org/10.1016/0378-8741(95)01322-9",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    animaw2022: {
      title: "Teratogenic Evaluation of 80% Ethanol Extract of Embelia schimperi Vatke Fruits on Rat Embryo and Fetuses",
      author: "Animaw Z, Asres K, Tadesse S, et al.",
      journal: "Journal of Toxicology",
      publicationDate: "2022-10-22",
      doi: "10.1155/2022/4310521",
      pmid: "36317073",
      url: "https://doi.org/10.1155/2022/4310521",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    animaw2023: {
      title: "Acute and developmental toxicity of embelin isolated from Embelia schimperi Vatke fruit: In vivo and in silico studies",
      author: "Animaw Z, Asres K, Abebe A, Taye S, Seyoum G",
      journal: "Toxicology Reports",
      publicationDate: "2023-06-10",
      doi: "10.1016/j.toxrep.2023.06.006",
      pmid: "37362226",
      url: "https://doi.org/10.1016/j.toxrep.2023.06.006",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "For centuries in Ethiopia, the fruit has been eaten to expel beef tapeworm and other gut worms.",
      source: "debebe",
    },
    {
      category: "TRADITIONAL",
      summary: "Maasai people in Tanzania and Kenya take the crushed seeds for tapeworm.",
      source: "bogh",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a fruit extract cleared dwarf tapeworm completely at high doses, and its compound embelin cleared most of it.",
      source: "debebe",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, embelin from the fruit reduced tapeworms and killed them in lab dishes.",
      source: "bogh",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "In pregnant rats, embelin lowered the number of implanted embryos, slowed fetal growth and affected the placenta. Researchers advise against embelin-rich plants during pregnancy.",
      source: "animaw2023",
    },
    {
      category: "PREGNANCY",
      description: "A fruit extract given to pregnant rats caused inflammation and calcium deposits in the placenta, though it didn't cause birth defects.",
      source: "animaw2022",
    },
  ],
});
