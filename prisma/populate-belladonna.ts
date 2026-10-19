import { run } from "./lib/populate-herb";

// Belladonna / deadly nightshade (Atropa belladonna), from a 2024 case report and
// literature review of belladonna poisoning (Boskabadi et al.) and the FDA notice on
// the 2017 recall of belladonna homeopathic teething tablets, and WebMD's belladonna
// monograph (pharmacist-reviewed, updated 2025-12-04). Poisonous: this page
// leads with poisoning information and lists no home uses for the plant.

run({
  name: "Belladonna",
  profile: {
    family: "Solanaceae",
    genus: "Atropa",
    species: "belladonna",
    partsUsed: "None for home use: the plant is poisonous",
  },
  sources: {
    boskabadi: {
      title: "Severe Neurotoxicity due to Atropa belladonna Poisoning: A Case Report and Literature Review",
      author: "Boskabadi SJ, Ramezaninejad S, Zakariaei Z",
      journal: "Case Reports in Neurological Medicine",
      publicationDate: "2024-09-26",
      doi: "10.1155/2024/5411258",
      pmid: "39364183",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11449552/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fdaRecall: {
      title: "Standard Homeopathic Company Issues Nationwide Recall of Hyland's Baby Teething Tablets and Hyland's Baby Nighttime Teething Tablets Due to Mislabeling",
      organization: "U.S. Food and Drug Administration",
      publicationDate: "2017-04-13",
      url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/standard-homeopathic-company-issues-nationwide-recall-hylands-baby-teething-tablets-and-hylands-baby",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    webmd: {
      title: "Belladonna: Overview, Uses, Side Effects, Precautions, Interactions, Dosing and Reviews",
      author: "McIntyre C; medically reviewed by Johnston B",
      organization: "WebMD",
      publicationDate: "2025-12-04",
      url: "https://www.webmd.com/vitamins-supplements/belladonna",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "History and medicines, not home remedies: the name comes from the Italian for \"beautiful lady\", probably because women once used the plant to widen their pupils for cosmetic effect. Its main compounds, atropine and scopolamine, act on the nervous system. The leaves have been used for gut spasms, including in a prescription medicine combining belladonna alkaloids with phenobarbital, and in traditional medicine for asthma and bronchitis.",
      source: "boskabadi",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Most belladonna products sold today are homeopathic: so diluted that some may contain no belladonna at all. They're commonly used for minor pain and fevers, but their benefits aren't well defined, and the US Food and Drug Administration hasn't reviewed them for safety or effectiveness. Some prescription medicines also contain belladonna, such as belladonna alkaloids with phenobarbital, and belladonna with opium as a rectal suppository.",
      source: "webmd",
    },
  ],
  synonyms: [
    { name: "Deadly Nightshade", type: "COMMON_NAME" },
    { name: "Atropa belladonna", type: "COMMON_NAME" },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In 2017, Hyland's baby teething tablets containing belladonna were recalled across the US because they contained inconsistent amounts of belladonna alkaloids that could differ from the label. The FDA said belladonna is a serious health hazard to children and that there is no known safe or toxic dose of it in children.",
      source: "fdaRecall",
    },
    {
      category: "TOXICITY",
      description:
        "Belladonna, or deadly nightshade, is a poisonous plant in the nightshade family. Its alkaloids block a nerve signal (acetylcholine) and can cause dry mouth, widened pupils, a racing heart, flushing, unsteadiness, agitation, confusion and trouble passing urine. Severe poisoning can cause seizures, coma and death. How bad it gets depends on how much is eaten. Get emergency help right away if anyone eats any part of the plant.\n\nTechnical detail: anticholinergic toxicity (atropine-type alkaloids); treated with supportive care and benzodiazepines, and physostigmine in severe cases.",
      source: "boskabadi",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In two recent cases from Iran, people who ate raw belladonna leaves by accident developed dry mouth, widened pupils, a racing heart and confusion. Both recovered with hospital treatment.",
      source: "boskabadi",
    },
    {
      category: "CONTAMINATION",
      description:
        "Some homeopathic belladonna products have been found to contain more belladonna than the label says, enough to cause serious harm and even death in infants and small children. The FDA hasn't tested these products to confirm what's in them, and the amount can vary between bottles and brands. Keep all belladonna products away from children, and talk to a health care provider before giving one to a child.",
      source: "webmd",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Belladonna may add to the effects of other medicines that block the same nerve signal, including antihistamines and medicines for overactive bladder, Parkinson's disease or stomach problems, and scopolamine patches for motion sickness. Avoid combining it with any other product that contains belladonna.",
      source: "webmd",
    },
    {
      category: "PREGNANCY",
      description: "It isn't known whether belladonna affects pregnancy or passes into breast milk, but pure belladonna is toxic and may harm an infant or small child.",
      source: "webmd",
    },
  ],
});
