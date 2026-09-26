import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const herbs = [
  {
    name: "Basil",
    scientificName: "Ocimum basilicum",
    category: "Culinary",
    summary: "A fragrant, warm-weather kitchen herb central to Italian and Southeast Asian cooking.",
    uses: "Pesto, Tomato dishes, Teas, Aromatherapy",
    properties: "May help reduce inflammation, Antioxidant, May fight bacteria",
    cautions: "Generally safe in cooking amounts.",
    imageUrl: "/herbs/basil.jpg",
  },
  {
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    category: "Medicinal",
    summary: "A daisy-like flower, usually made into tea, traditionally used for relaxation and digestive comfort.",
    uses: "Sleep, Calming tea, Soothing skin",
    properties: "Mildly relaxing, May help reduce inflammation, May ease cramps",
    cautions: "May cause an allergic reaction in people allergic to ragweed.",
    imageUrl: "/herbs/chamomile.jpg",
  },
  {
    name: "Peppermint",
    scientificName: "Mentha piperita",
    category: "Medicinal",
    summary: "A cooling, menthol-rich herb traditionally used for digestion and headaches. Research suggests peppermint oil may help IBS symptoms.",
    uses: "Digestive tea, Headaches, Aromatherapy",
    properties: "May ease cramps, May relieve pain, May relieve gas",
    cautions: "Can make acid reflux worse in some people.",
    imageUrl: "/herbs/peppermint.jpg",
  },
  {
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    category: "Culinary",
    summary: "A woody, pine-scented kitchen herb popular in roasted dishes and hair care.",
    uses: "Roasted meats and vegetables, Hair rinses, Memory",
    properties: "Antioxidant, May fight germs, May boost circulation",
    cautions: "High doses may cause contractions of the womb; avoid during pregnancy.",
    imageUrl: "/herbs/rosemary.jpg",
  },
  {
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    category: "Aromatic",
    summary: "A purple-flowered herb prized for its scent and traditionally used to relax.",
    uses: "Aromatherapy, Sleep, Skin care",
    properties: "May ease anxiety, Calming, May fight germs",
    cautions: "Don't swallow the essential oil undiluted.",
    imageUrl: "/herbs/lavender.jpg",
  },
  {
    name: "Ginger",
    scientificName: "Zingiber officinale",
    category: "Medicinal",
    summary: "A spicy, warming root traditionally used for nausea and inflammation. Research suggests it may help with nausea during pregnancy.",
    uses: "Nausea, Teas, Cooking, Inflammation",
    properties: "May ease nausea, May help reduce inflammation, Aids digestion",
    cautions: "May interact with blood-thinning medicines at high doses.",
    imageUrl: "/herbs/ginger.jpg",
  },
  {
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    category: "Medicinal",
    summary: "A purple coneflower traditionally used to support the immune system, especially for colds.",
    uses: "Colds and flu, Tinctures, Teas",
    properties: "May stimulate the immune system, May help reduce inflammation",
    cautions: "Not recommended for people with autoimmune conditions without medical advice.",
    imageUrl: "/herbs/echinacea.jpg",
  },
  {
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    category: "Culinary",
    summary: "A small-leaved, earthy herb used widely in savory cooking and traditionally in cough remedies.",
    uses: "Soups and stews, Coughs, Germ-fighting gargle",
    properties: "May fight germs, May loosen mucus, May ease cramps",
    cautions: "The essential oil is strong; use it diluted.",
    imageUrl: "/herbs/thyme.jpg",
  },
  {
    name: "Sage",
    scientificName: "Salvia officinalis",
    category: "Culinary",
    summary: "A silvery-leaved kitchen herb with a savory, slightly peppery flavor, traditionally used for sore throats and indigestion.",
    uses: "Stuffing and sausages, Sore throat gargle, Memory",
    properties: "Antioxidant, May fight germs, Astringent (tightens tissues)",
    cautions: "Avoid large medicinal doses during pregnancy.",
    imageUrl: "/herbs/sage.jpg",
  },
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    category: "Medicinal",
    summary: "A golden root used in curries, known for its natural compound curcumin and traditionally used for inflammation.",
    uses: "Curries, Golden milk, Joints",
    properties: "May help reduce inflammation, Antioxidant",
    cautions: "May interact with blood thinners; high doses can upset the stomach.",
    imageUrl: "/herbs/turmeric.jpg",
  },
  {
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    category: "Medicinal",
    summary: "A lemon-scented relative of mint, traditionally used to ease stress and help with sleep.",
    uses: "Calming tea, Stress, Cold sores (on the skin)",
    properties: "Mildly relaxing, May fight viruses, May relieve gas",
    cautions: "May interact with thyroid medicines.",
    imageUrl: "/herbs/lemon-balm.jpg",
  },
  {
    name: "Dill",
    scientificName: "Anethum graveolens",
    category: "Culinary",
    summary: "A feathery, tangy kitchen herb often paired with fish and pickles. Its seeds are traditionally used for gas and upset stomach.",
    uses: "Pickling, Fish dishes, Digestive tea",
    properties: "May relieve gas, May ease mild cramps",
    cautions: "Generally safe in cooking amounts.",
    imageUrl: "/herbs/dill.jpg",
  },
  {
    name: "Valerian",
    scientificName: "Valeriana officinalis",
    category: "Medicinal",
    summary: "A root traditionally used to help with sleep.",
    uses: "Sleep, Anxiety",
    properties: "May make you sleepy, May ease anxiety",
    cautions: "Can cause drowsiness; don't combine with alcohol or sedatives.",
    imageUrl: "/herbs/valerian.jpg",
  },
  {
    name: "Oregano",
    scientificName: "Origanum vulgare",
    category: "Culinary",
    summary: "A pungent Mediterranean kitchen herb central to pizza and pasta sauces.",
    uses: "Italian and Greek cooking, Oregano oil",
    properties: "May fight germs, Antioxidant",
    cautions: "Oregano oil is strong and should be diluted.",
    imageUrl: "/herbs/oregano.jpg",
  },
  {
    name: "Nettle",
    scientificName: "Urtica dioica",
    category: "Medicinal",
    summary: "A stinging plant eaten as a spring vegetable and traditionally used for joint pain and urinary complaints.",
    uses: "Allergy tea, Nourishing infusions",
    properties: "May help reduce inflammation, May increase urination, Nourishing",
    cautions: "The fresh plant stings the skin; cook or dry it before use.",
    imageUrl: "/herbs/nettle.jpg",
  },
  {
    name: "Cilantro",
    scientificName: "Coriandrum sativum",
    category: "Culinary",
    summary: "A fresh, citrusy kitchen herb. Its seeds, sold as coriander, are traditionally used to support digestion.",
    uses: "Salsas, Curries, Garnish",
    properties: "Antioxidant, Mild digestive aid",
    cautions: "Some people find it tastes soapy because of their genes.",
    imageUrl: null,
  },
  {
    name: "St. John's Wort",
    scientificName: "Hypericum perforatum",
    category: "Medicinal",
    summary: "A yellow-flowered herb traditionally used to support mood. It interacts with many common medicines.",
    uses: "Low mood, Wound salves (on the skin)",
    properties: "Antidepressant-like, May help reduce inflammation",
    cautions: "Interacts with many medicines, including antidepressants and birth control pills.",
    imageUrl: "/herbs/st-johns-wort.jpg",
  },
  {
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    category: "Culinary",
    summary: "An anise-flavored plant whose seeds and bulb are both widely eaten. The seeds are traditionally used for digestion.",
    uses: "Digestive tea, Salads, Roasted bulb dishes",
    properties: "May relieve gas, Mild estrogen-like effects, May ease cramps",
    cautions: "Avoid concentrated forms during pregnancy.",
    imageUrl: "/herbs/fennel.jpg",
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    category: "Medicinal",
    summary: "A root from Ayurvedic medicine, traditionally used to help the body cope with stress.",
    uses: "Stress, Sleep, Energy",
    properties: "Adaptogen, Calming, May help reduce inflammation",
    cautions: "Avoid during pregnancy and with certain thyroid or autoimmune conditions.",
    imageUrl: "/herbs/ashwagandha.jpg",
  },
  {
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    category: "Culinary",
    summary: "A versatile, mild kitchen herb used as both a garnish and a flavor base.",
    uses: "Garnish, Tabbouleh, Stocks and sauces",
    properties: "May increase urination, Rich in vitamins K and C",
    cautions: "Avoid medicinal doses (not cooking amounts) during pregnancy.",
    imageUrl: "/herbs/parsley.jpg",
  },
];

async function main() {
  for (const herb of herbs) {
    await prisma.herb.upsert({
      where: { name: herb.name },
      update: herb,
      create: herb,
    });
  }
  console.log(`Seeded ${herbs.length} herbs.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
