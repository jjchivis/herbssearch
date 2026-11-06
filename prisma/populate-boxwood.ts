import { run } from "./lib/populate-herb";

// Boxwood (Buxus sempervirens), from a 1998 HIV trial (Durant et al.), a 2014
// malaria lab study (Althaus et al.) and a 2018 diabetic rat study (Ajebli and
// Eddouks). Family per GBIF.

run({
  name: "Boxwood",
  profile: { family: "Buxaceae", genus: "Buxus", species: "sempervirens", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The leaves" },
  sources: {
    durant: {
      title: "Efficacy and safety of Buxus sempervirens L. preparations (SPV30) in HIV-infected asymptomatic patients: a multicentre, randomized, double-blind, placebo-controlled trial",
      author: "Durant J, Chantre P, Gonzalez G, et al.",
      journal: "Phytomedicine",
      publicationDate: "1998-03-01",
      doi: "10.1016/S0944-7113(98)80052-4",
      pmid: "23195692",
      url: "https://doi.org/10.1016/S0944-7113(98)80052-4",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    althaus: {
      title: "Antiprotozoal activity of Buxus sempervirens and activity-guided isolation of O-tigloylcyclovirobuxeine-B as the main constituent active against Plasmodium falciparum",
      author: "Althaus JB, Jerz G, Winterhalter P, Kaiser M, Brun R, Schmidt TJ",
      journal: "Molecules",
      publicationDate: "2014-05-15",
      doi: "10.3390/molecules19056184",
      pmid: "24838073",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6271158/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ajebli: {
      title: "Buxus sempervirens L. Improves Lipid Profile in Diabetic Rats",
      author: "Ajebli M, Eddouks M",
      journal: "Cardiovascular & Hematological Disorders Drug Targets",
      publicationDate: "2018-01-01",
      doi: "10.2174/1871529X18666180419100823",
      pmid: "29669507",
      url: "https://doi.org/10.2174/1871529X18666180419100823",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Common Box", type: "COMMON_NAME" },
    { name: "European Box", type: "COMMON_NAME" },
    { name: "Box", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The evergreen hedge shrub. Around the Mediterranean its leaves are a folk remedy for malaria, and in Morocco for diabetes and heart problems.",
      source: "althaus",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a placebo-controlled trial of 145 people with early, untreated HIV, a boxwood leaf extract (SPV30, 990 mg a day) slowed disease progression and viral load rises, with no severe side effects. It's never become a standard treatment.",
      source: "durant",
    },
    {
      category: "PRECLINICAL",
      summary: "Leaf alkaloids blocked malaria parasites in lab tests.",
      source: "althaus",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, a leaf extract lowered cholesterol and LDL.",
      source: "ajebli",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Its alkaloids were toxic to cells in lab tests at doses not far above those that affected parasites.",
      source: "althaus",
    },
  ],
});
