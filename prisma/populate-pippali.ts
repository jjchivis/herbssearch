import { run } from "./lib/populate-herb";

// Pippali, long pepper (Piper longum), from studies found by direct PubMed
// Central search: a rat study of the fruit oil whose introduction describes its
// traditional uses and range (Kumar et al. 2009), two small studies in people
// (Soni et al. 2011; Shah et al. 2022) and a rabbit absorption study (Vijayarani
// et al. 2020). Not in MSKCC About Herbs. Family per GBIF.

run({
  name: "Pippali",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "longum",
    nativeRange: "Widely found throughout India",
    partsUsed: "The dried fruit",
  },
  sources: {
    kumar: {
      title: "Antiinflammatory Activity of Piper longum Fruit Oil",
      author: "Kumar A, Panghal S, Mallapur SS, Kumar M, Ram V, Singh BK",
      journal: "Indian Journal of Pharmaceutical Sciences",
      publicationDate: "2009-07-01",
      doi: "10.4103/0250-474X.57300",
      pmid: "20502557",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2865823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    soni: {
      title: "Clinical evaluation of Vardhamana Pippali Rasayana in the management of Amavata (Rheumatoid Arthritis)",
      author: "Soni A, Patel K, Gupta SN",
      journal: "Ayu",
      publicationDate: "2011-04-01",
      doi: "10.4103/0974-8520.92555",
      pmid: "22408298",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3296336/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shah: {
      title: "Efficacy of Pippali in vardhamana and fixed dosage pattern in primary hypothyroidism: A randomized clinical trial",
      author: "Shah SB, Guttal GK, Chikkanna U, Sajjanar NJ",
      journal: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2022-04-01",
      doi: "10.1016/j.jaim.2022.100555",
      pmid: "35661936",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9168505/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vijayarani: {
      title: "Enhanced Bioavailability of Boswellic Acid by Piper longum: A Computational and Pharmacokinetic Study",
      author: "Vijayarani KR, Govindarajulu M, Ramesh S, Alturki M, Majrashi M, Fujihashi A, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2020-01-01",
      doi: "10.3389/fphar.2020.551911",
      pmid: "33384596",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7770183/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Long pepper", type: "COMMON_NAME" }],
  traditions: [
    {
      slug: "ayurveda",
      notes: "A rejuvenating (rasayana) herb in the Charaka Samhita, often given as Vardhamana Pippali, a gradually rising then tapering dose.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Long pepper is used for breathing problems such as cough, bronchitis, asthma and colds. It's rubbed on the skin for muscle pain and inflammation. Taken by mouth, it's used for loss of appetite, sleeplessness, and liver and spleen problems.",
      source: "kumar",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, pippali is one of the rejuvenating (rasayana) herbs described in the Charaka Samhita. It's often given as Vardhamana Pippali, a dose that rises gradually and then tapers, so larger amounts can be taken without discomfort.",
      source: "soni",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, oil from the dried fruit reduced paw swelling.\n\nTechnical detail: carrageenan-induced paw edema; compared with ibuprofen.",
      source: "kumar",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rabbits, a long pepper extract increased how much boswellic acid (from frankincense) the body absorbed.\n\nTechnical detail: 2.5 and 10 mg/kg Piper longum extract raised boswellic acid bioavailability.",
      source: "vijayarani",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a study in India, 73 people with rheumatoid arthritis took Vardhamana Pippali for 15 days. They reported up to 50% relief of their symptoms, and a blood marker of inflammation (ESR) fell. There was no comparison group, so the study can't show that pippali caused the improvement.",
      source: "soni",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a randomized trial in India, 40 people with an underactive thyroid took pippali for 19 days, in either a rising-and-tapering or a fixed dose (69 g in total). Thyroid hormone levels (TSH) barely changed, and symptom scores didn't improve significantly. The authors concluded it had minimal effect.\n\nTechnical detail: Zulewski's clinical score; serum T3, T4 and TSH at baseline, day 20 and day 40.",
      source: "shah",
    },
  ],
  symptoms: [
    {
      slug: "cough",
      notes: "Traditional use only: used for cough, bronchitis, asthma and colds. Not studied in people for this.",
    },
    {
      slug: "joint-discomfort",
      notes: "In one small study without a comparison group, people with rheumatoid arthritis reported relief after 15 days of Vardhamana Pippali.",
    },
    {
      slug: "loss-of-appetite",
      notes: "Traditional use only: taken by mouth for loss of appetite. Not studied in people.",
    },
  ],
});
