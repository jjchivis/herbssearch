import { run } from "./lib/populate-herb";

// Burkea africana (wild syringa), from a 2017 review of four Malian medicinal
// plants (Malterud), a 2021 lab and animal study of its stem bark (Ezenyi et
// al.) and a 2018 study of its anti-influenza saponins (Mair et al.). No human
// studies were found. Family per GBIF.

run({
  name: "Burkea Africana",
  profile: {
    family: "Fabaceae",
    genus: "Burkea",
    species: "africana",
    nativeRange: "Tropical and subtropical Africa",
    partsUsed: "The stem bark",
  },
  sources: {
    malterud: {
      title: "Ethnopharmacology, Chemistry and Biological Properties of Four Malian Medicinal Plants",
      author: "Malterud KE",
      journal: "Plants",
      publicationDate: "2017-02-21",
      doi: "10.3390/plants6010011",
      pmid: "28230801",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5371770/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ezenyi: {
      title: "Antiplasmodial, antinociceptive and antipyretic potential of the stem bark extract of Burkea africana and identification of its antiplasmodial-active fraction",
      author: "Ezenyi IC, Okpoko CK, Ufondu CA, Okhale SE, Adzu B",
      journal: "Journal of Traditional and Complementary Medicine",
      publicationDate: "2021-01-06",
      doi: "10.1016/j.jtcme.2020.12.004",
      pmid: "34195025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8240106/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mair: {
      title: "Anti-Influenza Triterpene Saponins from the Bark of Burkea africana",
      author: "Mair CE, Grienke U, Wilhelm A, Urban E, Zehl M, Schmidtke M, Rollinger JM",
      journal: "Journal of Natural Products",
      publicationDate: "2018-02-02",
      doi: "10.1021/acs.jnatprod.7b00774",
      pmid: "29394063",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5869419/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [
    { name: "Proanthocyanidins", slug: "proanthocyanidins", type: "flavonoid" },
    { name: "Tyramine", slug: "tyramine", type: "amine" },
    { name: "Triterpene Saponins", slug: "triterpene-saponins", type: "saponin" },
  ],
  traditions: [{ slug: "african-traditional-medicine", notes: "Stem bark used in Mali and Nigeria." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Mali, the powdered stem bark is put on mouth sores, and the bark has been used in folk medicine for stomach and bowel problems and headache. In Nigeria, the stem bark is a remedy for malaria.",
      source: "malterud",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a stem bark extract was moderately active against the malaria parasite, including a drug-resistant strain. In mice and rats it eased pain and brought down fever, and it caused no poisoning at the doses tested.",
      source: "ezenyi",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, saponins from the bark blocked flu viruses, including the 2009 pandemic flu strain, without harming the cells.",
      source: "mair",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The bark is rich in tannin-type antioxidants, which may explain its traditional use on wounds. Little scientific research has been done, and clinical studies are needed.",
      source: "malterud",
    },
  ],
});
