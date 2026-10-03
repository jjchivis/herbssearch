import { run } from "./lib/populate-herb";

// Olive Leaf (Olea europaea), from the European Medicines Agency's summary of
// its herbal monograph on olive leaf (2017) and an 8-week trial against
// captopril in people with stage-1 high blood pressure (Susalit et al. 2011).

run({
  name: "Olive Leaf",
  profile: {
    family: "Oleaceae",
    genus: "Olea",
    species: "europaea",
    partsUsed: "The dried leaves, as a tea or extract",
  },
  sources: {
    ema: {
      title: "Oleae folium (olive leaf): herbal medicinal product summary",
      organization: "European Medicines Agency (EMA), Committee on Herbal Medicinal Products",
      publicationDate: "2017-12-20",
      url: "https://www.ema.europa.eu/en/medicines/herbal/oleae-folium",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    susalit: {
      title: "Olive (Olea europaea) leaf extract effective in patients with stage-1 hypertension: comparison with Captopril",
      author: "Susalit E, Agus N, Effendi I, Tjandrawinata RR, Nofiarny D, Perrinjaquet-Moccetti T, Verbruggen M",
      journal: "Phytomedicine",
      publicationDate: "2011-02-15",
      doi: "10.1016/j.phymed.2010.08.016",
      pmid: "21036583",
      url: "https://pubmed.ncbi.nlm.nih.gov/21036583/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Olive", type: "COMMON_NAME" },
    { name: "Oleae Folium", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Recognised in Europe as a traditional remedy for mild water retention." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognises olive leaf as a traditional herbal medicine to help the kidneys remove water in mild water retention, for adults. This is based on long use, not on clinical trials.",
      source: "ema",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an 8-week trial, people with mildly high blood pressure (stage 1) took olive leaf extract (500 mg twice a day) or captopril, a standard blood pressure medicine. Blood pressure fell by a similar amount in both groups. Triglycerides, a type of blood fat, also fell in the olive leaf group but not in the captopril group.\n\nTechnical detail: double-blind, randomized, active-controlled; extract EFLA943; systolic −11.5 ± 8.5 vs −13.7 ± 7.6 mmHg and diastolic −4.8 ± 5.5 vs −6.4 ± 5.2 mmHg (olive vs captopril 12.5–25 mg twice daily); difference not significant.",
      source: "susalit",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use olive leaf if you have severe heart or kidney disease and have been told to drink less fluid. It's for adults only.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description: "See a doctor if symptoms last more than 1 week or get worse while you're taking it.",
      source: "ema",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "In an 8-week trial in people with mildly high blood pressure, olive leaf extract lowered it about as much as captopril. Don't replace prescribed medicine without your doctor's advice.",
    },
  ],
});
