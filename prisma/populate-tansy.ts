import { run } from "./lib/populate-herb";

// Tansy (Tanacetum vulgare). Sources: the EMA/HMPC public statement on
// thujone-containing herbal products, a 2026 Lithuanian ethnobotany study and
// a 2025 review of European anthelmintic plants. Family per GBIF.

run({
  name: "Tansy",
  profile: {
    family: "Asteraceae",
    genus: "Tanacetum",
    species: "vulgare",
    partsUsed: "The leaves and flowers",
  },
  sources: {
    emaThujone: {
      title: "Public statement on the use of herbal medicinal products containing thujone (EMA/HMPC/732886/2010 Rev. 1)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2012-05-22",
      url: "https://www.ema.europa.eu/en/documents/scientific-guideline/public-statement-use-herbal-medicinal-products-containing-thujone-revision-1_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    karpaviciene: {
      title: "Medicinal Plants Traditionally Used to Treat Digestive System Disorders in Lithuania",
      author: "Karpavičienė B",
      journal: "Plants",
      publicationDate: "2026-04-30",
      doi: "10.3390/plants15091390",
      pmid: "42122882",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13164646/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    boyko: {
      title: "Anthelmintic Activity of Traditional Medicinal Plants Used in Europe",
      author: "Boyko O, Brygadyrenko V",
      journal: "Biology",
      publicationDate: "2025-11-21",
      doi: "10.3390/biology14121636",
      pmid: "41463411",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12729885/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  traditions: [
    { slug: "european-folk-medicine", notes: "In Lithuania, one of the plants most often used for intestinal worms." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Lithuania, tansy is one of the three plants most often used to treat intestinal worms, along with garlic and wormwood.",
      source: "karpaviciene",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab studies, tansy leaves and flowers killed the larvae of worms that infect sheep. It hasn't been tested against worms in people.",
      source: "boyko",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Tansy contains thujone, in amounts that vary a lot from plant to plant. Thujone has been regarded as a serious nerve poison, and it caused seizures in animal studies. Because of this, European regulators limit how much thujone people should take from herbal medicines.",
      source: "emaThujone",
    },
  ],
  symptoms: [
    { slug: "sibo-and-parasites", notes: "Traditionally used for intestinal worms in Lithuania; only tested on animal worm larvae in the lab. Contains thujone, which can be toxic." },
    { slug: "poisonous-plants", notes: "Contains thujone, a compound that caused seizures in animal studies." },
  ],
});
