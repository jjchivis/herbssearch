import { run } from "./lib/populate-herb";

// Cheesewood (Pittosporum napaulense, also known as P. floribundum), from a
// 2023 survey of medicinal plants in Nepal (Karki et al.), a 2022 study of
// Himalayan fodder trees (Navale et al.) and a 2024 lab study of the bark
// (Hota et al., abstract only). Family per GBIF.

run({
  name: "Cheesewood",
  profile: {
    family: "Pittosporaceae",
    genus: "Pittosporum",
    species: "napaulense",
    nativeRange: "The Himalayas, India and Southeast Asia",
    partsUsed: "The bark",
  },
  sources: {
    karki: {
      title: "Ethnomedicinal plants in Champadevi rural municipality, Okhaldhunga district, Nepal",
      author: "Karki D, Khadka D, Kunwar RM, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2023-12-11",
      doi: "10.1186/s13002-023-00627-y",
      pmid: "38072922",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10712033/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    navale: {
      title: "Seasonal variations in the nutritive value of fifteen multipurpose fodder tree species: A case study of north-western Himalayan mid-hills",
      author: "Navale MR, Bhardwaj DR, Bishist R, et al.",
      journal: "PLoS One",
      publicationDate: "2022-10-25",
      doi: "10.1371/journal.pone.0276689",
      pmid: "36282850",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9595570/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hota: {
      title: "Antioxidant, antibacterial and antibiofilm activities of Pittosporum napaulense (DC.) against drug-resistant Staphylococcus aureus and Shigella sp.",
      author: "Hota SS, Sahoo DR, Pattnaik S, et al.",
      journal: "Natural Product Research",
      publicationDate: "2024-10-01",
      doi: "10.1080/14786419.2024.2410422",
      pmid: "39353041",
      url: "https://doi.org/10.1080/14786419.2024.2410422",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Pittosporum floribundum", type: "SCIENTIFIC_SYNONYM" },
    { name: "Khorsnai", type: "REGIONAL_NAME", region: "Nepal" },
    { name: "Pipalu", type: "REGIONAL_NAME", region: "Himachal Pradesh, India" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In eastern Nepal, a paste of the bark is put on injuries, broken bones and painful areas.",
      source: "karki",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In the Himalayan hills of India, the evergreen tree is grown to feed livestock, and its bark is used as a medicine. The bark contains saponins and a compound called pittosporin.",
      source: "navale",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a bark extract stopped the growth of drug-resistant Staphylococcus aureus and Shigella bacteria, and broke up the slimy films they form. It also neutralized free radicals.",
      source: "hota",
    },
  ],
  symptoms: [
    { slug: "sprains-and-bruises", notes: "A bark paste is put on injuries and broken bones in Nepal. Not studied in people." },
  ],
});
