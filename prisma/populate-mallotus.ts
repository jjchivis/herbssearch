import { run } from "./lib/populate-herb";

// Mallotus (Mallotus oppositifolius), from Ghanaian mouse studies of its leaves
// for depression and seizures (Kukuia et al. 2014, 2016) and a Nigerian rat
// study for diabetes (Nwaehujor et al. 2013). Family per GBIF.

run({
  name: "Mallotus",
  profile: { family: "Euphorbiaceae", genus: "Mallotus", species: "oppositifolius", nativeRange: "Tropical Africa and Madagascar", partsUsed: "The leaves" },
  sources: {
    kukuia2014: {
      title: "Antidepressant Effects of Mallotus oppositifolius in Acute Murine Models",
      author: "Kukuia KK, Mante PK, Woode E, Ameyaw EO, Adongo DW",
      journal: "ISRN Pharmacology",
      publicationDate: "2014-03-12",
      doi: "10.1155/2014/324063",
      pmid: "25045543",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3972934/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kukuia2016: {
      title: "Enhancement of inhibitory neurotransmission and inhibition of excitatory mechanisms underlie the anticonvulsant effects of Mallotus oppositifolius",
      author: "Kukuia KK, Ameyaw EO, Woode E, Mante PK, Adongo DW",
      journal: "Journal of Pharmacy & Bioallied Sciences",
      publicationDate: "2016-07-01",
      doi: "10.4103/0975-7406.183226",
      pmid: "27413356",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4929967/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nwaehujor: {
      title: "Evaluation of Mallotus oppositifolius Methanol Leaf Extract on the Glycaemia and Lipid Peroxidation in Alloxan-Induced Diabetic Rats: A Preliminary Study",
      author: "Nwaehujor CO, Ezeigbo II, Nwinyi FC",
      journal: "Biochemistry Research International",
      publicationDate: "2013-10-10",
      doi: "10.1155/2013/527205",
      pmid: "24224091",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3810516/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Ghana the leaves are used for brain and nerve conditions, including epilepsy, and in parts of Nigeria for diabetes.",
      source: "kukuia2016",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a leaf extract had antidepressant-like effects, apparently by boosting serotonin, and protected against several kinds of seizures.",
      source: "kukuia2014",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, a leaf extract taken for 14 days lowered blood sugar about as well as the diabetes drug glibenclamide.",
      source: "nwaehujor",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "kukuia2014",
    },
  ],
  symptoms: [
    { slug: "high-blood-sugar", notes: "A Nigerian folk diabetes remedy; lowered blood sugar in diabetic rats. Not tested in people." },
  ],
});
