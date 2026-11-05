import { run } from "./lib/populate-herb";

// Elu (Lonchocarpus cyanescens), from two Nigerian rodent studies of its use for
// psychosis (Sonibare et al. 2011; Arowona et al. 2014; abstracts only) and a
// 2012 study of its indigo dye (Bassey et al., abstract only). Family per GBIF.

run({
  name: "Elu",
  profile: { family: "Fabaceae", genus: "Lonchocarpus", species: "cyanescens", nativeRange: "West Africa", partsUsed: "The leaves" },
  sources: {
    sonibare: {
      title: "Antipsychotic property of aqueous and ethanolic extracts of Lonchocarpus cyanescens (Schumach and Thonn.) Benth. (Fabaceae) in rodents",
      author: "Sonibare MA, Umukoro S, Shonibare ET",
      journal: "Journal of Natural Medicines",
      publicationDate: "2011-06-30",
      doi: "10.1007/s11418-011-0562-6",
      pmid: "21717088",
      url: "https://doi.org/10.1007/s11418-011-0562-6",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    arowona: {
      title: "Antipsychotic property of solvent-partitioned fractions of Lonchocarpus cyanescens leaf extract in mice",
      author: "Arowona IT, Sonibare MA, Umukoro S",
      journal: "Journal of Basic and Clinical Physiology and Pharmacology",
      publicationDate: "2014-05-01",
      doi: "10.1515/jbcpp-2013-0065",
      pmid: "24356391",
      url: "https://doi.org/10.1515/jbcpp-2013-0065",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bassey: {
      title: "Staining characteristics of Lonchocarpus cyanescens leaf extract on the testis of Sprague-Dawley rats",
      author: "Bassey RB, Bakare AA, Edagha IA, Osinubi AA, Oremosu AA",
      journal: "Microscopy and Microanalysis",
      publicationDate: "2012-07-26",
      doi: "10.1017/S1431927612000505",
      pmid: "22832176",
      url: "https://doi.org/10.1017/S1431927612000505",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [{ slug: "african-traditional-medicine", notes: "Used in Nigerian traditional medicine, combined with other plants, for psychotic disorders." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Nigerian traditional medicine, the plant is commonly combined with other remedies to treat psychotic disorders.",
      source: "sonibare",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Its leaves make a blue indigo dye: boiled leaves are steeped, made alkaline and whisked until the indigo settles out.",
      source: "bassey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats and mice, leaf extracts reduced behavior that models psychosis and calmed movement, without the stiffness side effect seen with the antipsychotic drug chlorpromazine.",
      source: "sonibare",
    },
    {
      category: "PRECLINICAL",
      summary: "Fractions of the leaf extract also showed antipsychotic-like effects in mice.",
      source: "arowona",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "The leaves contain cyanogenic glycosides, compounds that can release cyanide, along with cardiac glycosides. No human safety studies were found.",
      source: "sonibare",
    },
  ],
});
