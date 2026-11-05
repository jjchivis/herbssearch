import { run } from "./lib/populate-herb";

// Quassia africana, from a 2021 Brazzaville forest-products survey (Kimpouni et
// al.), a 2021 review of Congolese diabetes plants (Kasali et al.), a 2006 malaria
// lab study (Mbatchi et al.), a 2002 antiviral study (Apers et al.), a 2014
// mosquito larva study (Sama et al.), a 2013 sickle cell study (Nsimba et al.) and
// a 2013 book chapter on quassinoids (Houël et al.).
// Not the same as Quassia amara, the bitter quassia used in flavorings. Family per
// GBIF.

run({
  name: "Quassia Africana",
  profile: { family: "Simaroubaceae", genus: "Quassia", species: "africana", nativeRange: "Central Africa", partsUsed: "The roots, root bark and leaves" },
  sources: {
    kimpouni: {
      title: "Ethnobotanical indicator values of Non-Timber Forest Products from the Djoumouna peri-urban forest in Brazzaville, Republic of Congo",
      author: "Kimpouni V, Nzila JDD, Watha-Ndoudy N, et al.",
      journal: "Heliyon",
      publicationDate: "2021-03-27",
      doi: "10.1016/j.heliyon.2021.e06579",
      pmid: "33869832",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8035505/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kasali: {
      title: "Antidiabetic Medicinal Plants Used in Democratic Republic of Congo: A Critical Review of Ethnopharmacology and Bioactivity Data",
      author: "Kasali FM, Kadima JN, Peter EL, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2021-10-27",
      doi: "10.3389/fphar.2021.757090",
      pmid: "34776975",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8579071/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    mbatchi: {
      title: "In vitro antiplasmodial activity of 18 plants used in Congo Brazzaville traditional medicine",
      author: "Mbatchi SF, Mbatchi B, Banzouzi JT, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2006-03-08",
      doi: "10.1016/j.jep.2005.08.068",
      pmid: "16257160",
      url: "https://doi.org/10.1016/j.jep.2005.08.068",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    apers: {
      title: "Antiviral activity of simalikalactone D, a quassinoid from Quassia africana",
      author: "Apers S, Cimanga K, Vanden Berghe D, et al.",
      journal: "Planta Medica",
      publicationDate: "2002-01-01",
      doi: "10.1055/s-2002-19870",
      pmid: "11842321",
      url: "https://doi.org/10.1055/s-2002-19870",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sama: {
      title: "Larvicidal properties of simalikalactone D from Quassia africana (Simaroubaceae) Baill and Baill, on the malaria vector Anopheles gambiae",
      author: "Sama W, Ajaiyeoba EO, Choudhary MI",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2014-06-04",
      pmid: "25392586",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4202402/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nsimba: {
      title: "Decreased thrombin activity by a Congolese herbal medicine used in sickle cell anemia",
      author: "Nsimba MM, Lami JN, Hayakawa Y, Yamamoto C, Kaji T",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2013-07-30",
      doi: "10.1016/j.jep.2013.05.038",
      pmid: "23711829",
      url: "https://doi.org/10.1016/j.jep.2013.05.038",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    houel: {
      title: "Quassinoids: Anticancer and Antimalarial Activities",
      author: "Houël E, Stien D, Bourdy G, Deharo E",
      journal: "Natural Products (Ramawat KG, Mérillon JM, eds.), Springer",
      publicationDate: "2013-01-01",
      doi: "10.1007/978-3-642-22144-6_161",
      url: "https://doi.org/10.1007/978-3-642-22144-6_161",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Simalikali", type: "REGIONAL_NAME", region: "Congo" },
    { name: "Mumpessi", type: "REGIONAL_NAME", region: "Republic of Congo (Laari)" },
    { name: "Munkadi Nkadi", type: "REGIONAL_NAME", region: "Democratic Republic of Congo" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Like others in its family it's intensely bitter; in Congo it's called simalikali, meaning bitterer than everything else. The bark and leaves are used for worms and stomach cramps, the root bark for wounds and skin ulcers, the roots for bronchitis, and the leaves for menstrual problems. It's also used for fever, malaria and sexually transmitted infections.",
      source: "houel",
    },
    {
      category: "TRADITIONAL",
      summary: "A shrub whose roots are among the most used malaria remedies near Brazzaville, Republic of Congo.",
      source: "kimpouni",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the Democratic Republic of Congo the leaves and roots are used for diabetes, and also for worms, hemorrhoids, rheumatism, scabies, stomach pain and wounds.",
      source: "kasali",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the Democratic Republic of Congo it's used to manage sickle cell anemia. In a lab test, its extract didn't change blood clotting.",
      source: "nsimba",
    },
    {
      category: "PRECLINICAL",
      summary: "Root and leaf extracts strongly blocked malaria parasites in lab tests, more than any of the 18 Congolese malaria plants tested.",
      source: "mbatchi",
    },
    {
      category: "PRECLINICAL",
      summary: "A compound from the root bark, simalikalactone D, was active against several viruses, including herpes, in lab tests.",
      source: "apers",
    },
    {
      category: "PRECLINICAL",
      summary: "The same compound killed the larvae of malaria-carrying mosquitoes in lab tests.",
      source: "sama",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "No human medical or safety studies were found.", source: "mbatchi" },
    {
      category: "TOXICITY",
      description:
        "Its bitter compounds, called quassinoids, can be toxic. In animal studies of related quassinoids, their malaria-fighting effect came with toxicity, and none have been tested for malaria in people.",
      source: "houel",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A Congolese malaria remedy; blocked malaria parasites in lab tests. Not tested in people." },
  ],
});
