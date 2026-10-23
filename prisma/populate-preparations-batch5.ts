import { run } from "./lib/populate-herb";

// Preparations sweep, batch 5: World Health Organization monographs on selected
// medicinal plants (volumes 1-4), from each monograph's "Dosage forms" and
// "Posology" sections. Each source links to the monograph's page in the PDF.

const ORG = "World Health Organization";

run(
  {
    name: "American Ginseng",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 4 — \"Radix Panacis Quinquefolii\" monograph", organization: ORG, publicationDate: "2009-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547055_eng.pdf?sequence=4&isAllowed=y#page=248", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "The root is used as the crude drug or as extracts.", source: "s1" },
      { slug: "tincture", notes: "American ginseng tinctures (alcohol extracts) are also used.", source: "s1" },
      { slug: "capsule", notes: "It's also sold as capsules.", source: "s1" },
    ],
  },
  {
    name: "Astragalus",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 1 — \"Radix Astragali\" monograph", organization: ORG, publicationDate: "1999-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545178.pdf?sequence=1&isAllowed=y#page=78", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "The dried root is used as crude plant material or as extracts.", source: "s1" },
    ],
  },
  {
    name: "Berberine",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 4 — \"Cortex Berberidis\" monograph", organization: ORG, publicationDate: "2009-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547055_eng.pdf?sequence=4&isAllowed=y#page=51", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "Barberry bark is used as the crude drug or as dried and liquid extracts.", source: "s1" },
      { slug: "tincture", notes: "Barberry bark tinctures (alcohol extracts) are also used.", source: "s1" },
      { slug: "decoction", notes: "The crude bark can also be taken as a decoction.", source: "s1" },
    ],
  },
  {
    name: "Boswellia",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 4 — \"Gummi Boswellii\" monograph", organization: ORG, publicationDate: "2009-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547055_eng.pdf?sequence=4&isAllowed=y#page=65", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "The gum resin is used as the crude drug or as extracts.", source: "s1" },
    ],
  },
  {
    name: "Cat's Claw",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Cortex Uncariae\" monograph", organization: ORG, publicationDate: "2007-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y#page=364", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "The dried stem bark is made into infusions and decoctions.", source: "s1" },
      { slug: "extract", notes: "Extracts of the bark are also used.", source: "s1" },
      { slug: "capsule", notes: "It's sold as capsules and tablets.", source: "s1" },
    ],
  },
  {
    name: "Dong Quai",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 2 — \"Radix Angelicae Sinensis\" monograph", organization: ORG, publicationDate: "2002-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545372.pdf?sequence=2&isAllowed=y#page=38", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "powder", notes: "The dried root is used as a powder.", source: "s1" },
      { slug: "extract", notes: "Fluid extracts of the root are also used.", source: "s1" },
    ],
  },
  {
    name: "Goldenseal",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Rhizoma Hydrastis\" monograph", organization: ORG, publicationDate: "2007-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y#page=208", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "The dried rhizomes and roots are taken as a powder or a decoction.", source: "s1" },
      { slug: "extract", notes: "Dried and liquid extracts are also used.", source: "s1" },
      { slug: "tincture", notes: "Goldenseal tinctures (alcohol extracts) are also used.", source: "s1" },
    ],
  },
  {
    name: "Gotu Kola",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 1 — \"Herba Centellae\" monograph", organization: ORG, publicationDate: "1999-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545178.pdf?sequence=1&isAllowed=y#page=87", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried plant is made into an infusion (tea), and other preparations are taken by mouth.", source: "s1" },
      { slug: "powder", notes: "The powdered plant is applied to the skin.", source: "s1" },
      { slug: "salve", notes: "Extracts, as liquids or ointments, are applied to the skin.", source: "s1" },
    ],
  },
  {
    name: "Haritaki",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 4 — \"Fructus Chebulae\" monograph", organization: ORG, publicationDate: "2009-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547055_eng.pdf?sequence=4&isAllowed=y#page=88", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "The dried fruit is boiled in water as a decoction.", source: "s1" },
      { slug: "extract", notes: "Extracts of the fruit are also used.", source: "s1" },
    ],
  },
  {
    name: "Kava",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 2 — \"Rhizoma Piperis Methystici\" monograph", organization: ORG, publicationDate: "2002-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545372.pdf?sequence=2&isAllowed=y#page=248", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "The chopped dried root and its extracts are taken by mouth.", source: "s1" },
    ],
  },
  {
    name: "Neem",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Folium Azadirachti\" monograph", organization: ORG, publicationDate: "2007-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y#page=105", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
      s2: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Oleum Azadirachti\" monograph", organization: ORG, publicationDate: "2007-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y#page=118", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "tea-infusion", notes: "The dried leaves are made into infusions and decoctions.", source: "s1" },
      { slug: "tincture", notes: "Extracts and tinctures of the leaves are also used, and a diluted alcohol extract is applied to the skin.", source: "s1" },
      { slug: "oil", notes: "Neem oil is the oil obtained from the dried seeds.", source: "s2" },
    ],
  },
  {
    name: "Red Clover",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 4 — \"Flos Trifolii\" monograph", organization: ORG, publicationDate: "2009-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547055_eng.pdf?sequence=4&isAllowed=y#page=357", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "extract", notes: "Extracts of the flowers, standardized for isoflavones, are taken by mouth, for example as tablets.", source: "s1" },
    ],
  },
  {
    name: "Red Peony Root",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 1 — \"Radix Paeoniae\" monograph", organization: ORG, publicationDate: "1999-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545178.pdf?sequence=1&isAllowed=y#page=204", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "powder", notes: "The dried root is used crude or as a powder.", source: "s1" },
      { slug: "decoction", notes: "The root is boiled in water as a decoction.", source: "s1" },
    ],
  },
  {
    name: "Rehmannia Root",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 3 — \"Radix Rehmanniae\" monograph", organization: ORG, publicationDate: "2007-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9789241547024_eng.pdf?sequence=3&isAllowed=y#page=299", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "decoction", notes: "The dried roots and rhizomes are made into infusions or decoctions.", source: "s1" },
    ],
  },
  {
    name: "Serpentina",
    sources: {
      s1: { title: "WHO monographs on selected medicinal plants, Volume 1 — \"Radix Rauwolfiae\" monograph", organization: ORG, publicationDate: "1999-01-01", url: "https://iris.who.int/bitstream/handle/10665/42052/9241545178.pdf?sequence=1&isAllowed=y#page=232", sourceType: "government", tier: "TIER_1_GOVERNMENT" },
    },
    preparations: [
      { slug: "powder", notes: "The root is used as the crude drug or as a powder.", source: "s1" },
    ],
  },
);
