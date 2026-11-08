import { run } from "./lib/populate-herb";

// Arborvitae seed (Platycladus orientalis), known in Chinese medicine as a tonic and calming remedy. Sources: three animal and lab studies that also describe its traditional uses. Family per GBIF. No source covering human safety was found, so none is stated.

run({
  name: "Arborvitae Seed",
  profile: {
    family: "Cupressaceae",
    genus: "Platycladus",
    species: "orientalis",
    partsUsed: "The seeds",
  },
  sources: {
    liuH: {
      title: "Lifespan extension by n-butanol extract from seed of Platycladus orientalis in Caenorhabditis elegans",
      author: "Liu H, Liang F, Su W, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-05-20",
      pmid: "23523941",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2013.03.019",
      url: "https://doi.org/10.1016/j.jep.2013.03.019",
    },
    yan2020: {
      title: "Modulation of the Aβ-Peptide-Aggregation Pathway by Active Compounds From Platycladus orientalis Seed Extract in Alzheimer's Disease Models",
      author: "Yan L, He X, Jin Y, et al.",
      journal: "Frontiers in Aging Neuroscience",
      publicationDate: "2020-08-14",
      pmid: "32922281",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.3389/fnagi.2020.00207",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7456918/",
    },
    yan2022: {
      title: "Platycladus orientalis seed extract as a potential triple reuptake MAO inhibitor rescue depression phenotype through restoring monoamine neurotransmitters",
      author: "Yan L, Wang J, He X, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2022-09-15",
      pmid: "35489661",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.jep.2022.115302",
      url: "https://doi.org/10.1016/j.jep.2022.115302",
    },
  },
  synonyms: [{ name: "Platycladi Semen", type: "COMMON_NAME" }, { name: "Biota orientalis", type: "SCIENTIFIC_SYNONYM" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used as a tonic and calming remedy, to sharpen the mind and slow aging." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "In traditional Chinese medicine the seeds are widely used as a tonic and calming remedy.", source: "liuH" },
    { category: "TRADITIONAL", summary: "They are also used in Chinese medicine to sharpen the mind and slow aging.", source: "yan2020" },
    { category: "TRADITIONAL", summary: "Classic Chinese herbal texts record the seeds in formulas for mood and physical activity.", source: "yan2022" },
    { category: "PRECLINICAL", summary: "In mice bred to develop Alzheimer's-like disease, a seed extract reduced memory problems and the buildup of the protein clumps linked to the disease.", source: "yan2020" },
    { category: "PRECLINICAL", summary: "In stressed rats, a seed extract reduced depression-like behavior and restored brain chemical messengers such as serotonin. In zebrafish it increased rest time.", source: "yan2022" },
    { category: "PRECLINICAL", summary: "A seed extract made tiny worms (C. elegans) live longer and resist stress better.", source: "liuH" },
  ],
  symptoms: [
    { slug: "memory-and-thinking", notes: "Reduced memory problems in Alzheimer's-model mice; not tested in people." },
    { slug: "occasional-sleeplessness", notes: "Traditionally used as a calming remedy; increased rest in zebrafish. Not tested in people." },
  ],
});
