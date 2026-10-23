import { run } from "./lib/populate-herb";

// Malabar nut / vasaka (Justicia adhatoda, syn. Adhatoda vasica), from a critical
// review of its traditional use and toxicology (Claeson et al. 2000), a review of
// Ayurvedic Vasa formulations for asthma (Gupta & Prajapati 2010), two human
// trials (Barth 2015, a combination product; Verma 2023, open-label), animal and
// lab studies, and a paper on the cough medicines bromhexine and ambroxol, which
// were made from its compound vasicine (Grange & Snell 1996). Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;

run({
  name: "Malabar Nut",
  profile: {
    family: "Acanthaceae",
    genus: "Justicia",
    species: "adhatoda",
    partsUsed: "The leaves",
  },
  sources: {
    claeson: {
      title: "Adhatoda vasica: a critical review of ethnopharmacological and toxicological data",
      author: "Claeson UP, Malmfors T, Wikman G, Bruhn JG",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2000-09-01",
      doi: "10.1016/s0378-8741(00)00225-7",
      pmid: "10967448",
      url: "https://pubmed.ncbi.nlm.nih.gov/10967448/",
      sourceType: P,
      tier: T3,
    },
    gupta: {
      title: "A clinical review of different formulations of Vasa (Adhatoda vasica) on Tamaka Shwasa (asthma)",
      author: "Gupta A, Prajapati PK",
      journal: "Ayu",
      publicationDate: "2010-10-01",
      doi: "10.4103/0974-8520.82032",
      pmid: "22048552",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202261/",
      sourceType: P,
      tier: T3,
    },
    grange: {
      title: "Activity of bromhexine and ambroxol, semi-synthetic derivatives of vasicine from the Indian shrub Adhatoda vasica, against Mycobacterium tuberculosis in vitro",
      author: "Grange JM, Snell NJ",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1996-01-01",
      doi: "10.1016/0378-8741(95)01331-8",
      pmid: "8778507",
      url: "https://pubmed.ncbi.nlm.nih.gov/8778507/",
      sourceType: P,
      tier: T3,
    },
    dhuley: {
      title: "Antitussive effect of Adhatoda vasica extract on mechanical or chemical stimulation-induced coughing in animals",
      author: "Dhuley JN",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1999-11-01",
      doi: "10.1016/s0378-8741(99)00074-4",
      pmid: "10617073",
      url: "https://pubmed.ncbi.nlm.nih.gov/10617073/",
      sourceType: P,
      tier: T3,
    },
    memon: {
      title: "Inhibition of TRPA1, Endoplasmic Reticulum Stress, Human Airway Epithelial Cell Damage, and Ectopic MUC5AC Expression by Vasaka (Adhatoda vasica; Malabar Nut) Tea",
      author: "Memon TA, Sun L, Almestica-Roberts M, Deering-Rice CE, Moos PJ, Reilly CA",
      journal: "Pharmaceuticals",
      publicationDate: "2023-06-17",
      doi: "10.3390/ph16060890",
      pmid: "37375837",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10303053/",
      sourceType: P,
      tier: T3,
    },
    barth: {
      title: "Antitussive effect of a fixed combination of Justicia adhatoda, Echinacea purpurea and Eleutherococcus senticosus extracts in patients with acute upper respiratory tract infection",
      author: "Barth A, Hovhannisyan A, Jamalyan K, Narimanyan M",
      journal: "Phytomedicine",
      publicationDate: "2015-10-21",
      doi: "10.1016/j.phymed.2015.10.001",
      pmid: "26598919",
      url: "https://pubmed.ncbi.nlm.nih.gov/26598919/",
      sourceType: P,
      tier: T3,
    },
    verma: {
      title: "Adhatoda vasica and Tinospora cordifolia extracts ameliorate clinical and molecular markers in mild COVID-19 patients: a randomized open-label three-armed study",
      author: "Verma M, Rawat N, Rani R, et al.",
      journal: "European Journal of Medical Research",
      publicationDate: "2023-12-04",
      doi: "10.1186/s40001-023-01507-7",
      pmid: "38049897",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10696694/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Adhatoda vasica", type: "SCIENTIFIC_SYNONYM" },
    { name: "Vasaka", type: "COMMON_NAME" },
    { name: "Vasa", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "A well-known Ayurvedic and Unani remedy, mainly for breathing problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Malabar nut (vasaka) is a well-known remedy in Ayurvedic and Unani medicine, used for many conditions but especially for coughs and other breathing problems.",
      source: "claeson",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Ayurvedic texts describe many preparations of vasa for asthma, including decoctions, a leaf jam (avaleha), a medicated ghee (ghrita) and fermented tonics. A review of studies on these found the best results for the concentrated extract, the ghee and the jam.",
      source: "gupta",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Two widely used modern cough medicines that loosen mucus, bromhexine and ambroxol, were made by chemically modifying vasicine, a compound from this plant.",
      source: "grange",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In guinea pigs and rabbits, a Malabar nut extract reduced coughing. Taken by mouth it worked about as well as codeine against coughing from irritating mists, though injected it was much weaker than codeine.",
      source: "dhuley",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a lab study, vasaka tea protected human airway cells from damage by wood smoke particles and reduced their production of a thick mucus protein. Several compounds in the tea, including vasicine and apigenin, contributed.",
      source: "memon",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 177 adults with a common cold, a liquid combining Malabar nut, echinacea and eleuthero (sold in Scandinavia as Kan Jang) relieved coughing better than a dummy liquid, and slightly faster than the cough medicine bromhexine. Because it's a mix, the effect of Malabar nut alone isn't known.\n\nTechnical detail: 30 ml/day for 5 days; 762 mg extracts standardized to 0.2 mg/ml vasicine.",
      source: "barth",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an open-label trial in India of 150 people with mild COVID-19, 500 mg of Malabar nut extract a day for 14 days was compared with giloy (Tinospora) and with a mix of both. Everyone recovered and no side effects were reported. There was no placebo group, so it can't show whether the herbs helped.\n\nTechnical detail: mean viral clearance 13.9 days (Malabar nut), 13.4 days (giloy), 11.9 days (combination).",
      source: "verma",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Several scientific reports have described how vasicine, the plant's main active compound, can bring on contractions of the womb and miscarriage. This has raised questions about the safety of Malabar nut, especially during pregnancy.",
      source: "claeson",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In the COVID-19 trial, no side effects were reported with 500 mg of extract a day for 14 days.",
      source: "verma",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "A traditional Ayurvedic cough remedy. A combination product with Malabar nut eased cough in one trial; it reduced coughing in animals." },
    { slug: "asthma-and-wheezing", notes: "Ayurvedic preparations of vasa are used for asthma." },
  ],
});
