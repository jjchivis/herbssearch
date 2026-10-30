import { run } from "./lib/populate-herb";

// Southern Magnolia (Magnolia grandiflora), from the Native American Ethnobotany
// Database (Choctaw and Koasati uses), a 2024 review of historical records
// (Baratto & Päßler), one small mouthwash trial and lab studies found by direct
// PubMed Central search. Native range per Zhang et al. 2024; family per GBIF.
// No safety studies of this species were found, so there are no safety records.

run({
  name: "Southern Magnolia",
  profile: {
    family: "Magnoliaceae",
    genus: "Magnolia",
    species: "grandiflora",
    nativeRange: "Coastal southeastern United States, from North Carolina to eastern Texas; widely planted elsewhere",
    partsUsed: "Mainly the bark",
  },
  sources: {
    naeb: {
      title: "Native American Ethnobotany Database: Magnolia grandiflora",
      organization: "Botanical Research Institute of Texas (BRIT); compiled by Daniel E. Moerman",
      url: "http://naeb.brit.org/uses/search/?string=Magnolia+grandiflora",
      sourceType: "historical_text",
      tier: "TIER_4_TRADITIONAL_TEXT",
    },
    baratto: {
      title: "Plants of the USA: recordings on native North American useful species by Alexander von Humboldt",
      author: "Baratto LC, Päßler U",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2024-09-01",
      doi: "10.1186/s13002-024-00727-3",
      pmid: "39289725",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11409576/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ghorbani: {
      title:
        "The antibacterial effect of Magnolia mouthwash on the levels of salivary Streptococcus mutans in dental plaque: a randomized, single-blind, placebo-controlled trial",
      author: "Ghorbani F, Haghgoo R, Aramjoo H, Rakhshandeh H, Jamehdar SA, Zare-Bidaki M",
      journal: "Iranian Journal of Microbiology",
      publicationDate: "2021-02-01",
      doi: "10.18502/ijm.v13i1.5499",
      pmid: "33889369",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8043831/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pandey: {
      title: "In Vitro and In Silico Studies of Neolignans from Magnolia grandiflora L. Seeds against Human Cannabinoids and Opioid Receptors",
      author: "Pandey P, Kumarihamy M, Chaturvedi K, Ibrahim MAM, Lambert JA, Godfrey M, et al.",
      journal: "Molecules",
      publicationDate: "2023-01-01",
      doi: "10.3390/molecules28031253",
      pmid: "36770918",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9920749/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    latif: {
      title: "Bioactive Neolignans and Other Compounds from Magnolia grandiflora L.: Isolation and Antiplasmodial Activity",
      author: "Latif A, Du Y, Dalal SR, Fernández-Murga ML, Merino EF, Cassera MB, et al.",
      journal: "Chemistry & Biodiversity",
      publicationDate: "2017-09-01",
      doi: "10.1002/cbdv.201700209",
      pmid: "28621040",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5679102/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ali: {
      title: "Insecticidal and Biting Deterrent Activities of Magnolia grandiflora Essential Oils and Selected Pure Compounds against Aedes aegypti",
      author: "Ali A, Tabanca N, Demirci B, Raman V, Budel JM, Baser KHC, Khan IA",
      journal: "Molecules",
      publicationDate: "2020-03-01",
      doi: "10.3390/molecules25061359",
      pmid: "32192065",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7144101/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zhao: {
      title: "Magnorolins A-L: sesquiterpenoids with diverse skeletons from the fruits of Magnolia grandiflora and their cytotoxic and anti-inflammatory activities",
      author: "Zhao QY, Yin SH, Wang XY, Sai L, Ding LF, Wu XD",
      journal: "RSC Advances",
      publicationDate: "2026-05-01",
      doi: "10.1039/d6ra02737g",
      pmid: "42232919",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13223918/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    {
      slug: "native-american-ethnobotany",
      notes: "Choctaw and Koasati use of the bark as a wash for heat rash and sores, and in a steam bath for swelling.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Southeastern peoples recorded these uses:\n- Choctaw: a wash made by boiling the bark, used for the itching of prickly heat (heat rash). A bath made from the plant was also used for prickly heat.\n- Choctaw: mashed bark steeped in water and used in a steam bath for dropsy, an old name for swelling caused by fluid build-up.\n- Koasati: a wash made by boiling the bark, used on sores.",
      source: "naeb",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A 2024 review of historical records says Native peoples used magnolias, including Southern Magnolia, for rheumatism and fevers. Older writings described the dried bark as a stimulating tonic that may cause sweating and help the stomach. They also noted it was sometimes swapped for the weaker bark of the tulip tree.\n\nTechnical detail: described as tonic, stimulant, diaphoretic and stomachic; substituted with Liriodendron bark.",
      source: "baratto",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a seed extract and three compounds from it (magnolol, honokiol and 4-O-methylhonokiol) attached to cannabinoid receptors, the same receptors cannabis acts on, more strongly than to opioid receptors. They bound most strongly to the CB2 type.\n\nTechnical detail: n-hexane seed extract; radioligand binding assays; CB2 Ki 0.29–1.94 μM vs CB1 Ki 3.85–17.82 μM for compounds 1–3.",
      source: "pandey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, compounds from a Southern Magnolia extract slowed the growth of the malaria parasite. Two of them were moderately active, and six were weak.\n\nTechnical detail: methanol extract; Plasmodium falciparum; known neolignans 3 and 4 IC50 2.8 and 3.4 μM, others 16.5–114 μM.",
      source: "latif",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the essential oil from the seeds kept yellow fever mosquitoes from biting about as well as DEET, a common insect repellent. Oils from the unripe and ripe fruit were highly toxic to the mosquitoes, while the leaf, flower and seed oils were much less so.\n\nTechnical detail: Aedes aegypti; seed oil biting deterrence index 0.89; 1-decanol (3.3% of seed oil) was the most active compound, LC50 4.8 ppm.",
      source: "ali",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, some compounds from the fruit were toxic to five types of human cancer cells. Some also lowered nitric oxide, a signal of inflammation, in mouse immune cells.\n\nTechnical detail: sesquiterpenoids; K562, A549, HepG2, MDA-MB-231 and SW480 cells, IC50 6.07–31.15 μM; LPS-induced NO release in RAW 264.7 macrophages, IC50 6.03–14.46 μM.",
      source: "zhao",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small trial in Iran, 20 adults aged 18 to 35 were split into two groups. One group used a 0.3% Southern Magnolia bark mouthwash and the other a placebo mouthwash for a week. After a week off, they did the same again for another week.\nWhile using the magnolia mouthwash, people had fewer Streptococcus mutans in their dental plaque than with the placebo or during the week off. This is a bacterium linked to tooth decay. The study was small and short, and the authors say larger studies are needed.\n\nTechnical detail: randomized, single-blind, placebo-controlled; hydro-ethanol bark extract; S. mutans counted by culture; difference statistically significant (paired and independent t-tests).",
      source: "ghorbani",
    },
  ],
  symptoms: [
    {
      slug: "skin-irritation",
      notes: "Traditional use only: the Choctaw used a bark wash or a bath for the itching of prickly heat (heat rash). Not studied in people.",
    },
    {
      slug: "wounds-and-burns",
      notes: "Traditional use only: the Koasati used a bark wash on sores. Not studied in people.",
    },
    {
      slug: "fever",
      notes: "Traditional use only: a review of historical records says Native peoples used magnolias such as this one for fevers. Not studied in people.",
    },
    {
      slug: "joint-discomfort",
      notes: "Traditional use only: a review of historical records says Native peoples used magnolias such as this one for rheumatism. Not studied in people.",
    },
  ],
  preparations: [
    {
      slug: "decoction",
      notes: "The Choctaw and Koasati boiled the bark to make a wash for the skin.",
      source: "naeb",
    },
    {
      slug: "extract",
      notes: "A mouthwash made with a 0.3% bark extract was tested in a small trial.",
      source: "ghorbani",
    },
  ],
});
