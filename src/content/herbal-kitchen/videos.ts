import type { KitchenVideo } from "./types";

// Video files are hosted outside the repository. Until the hosted URL is set,
// the elderberry video plays from public/kitchen-media/ (git-ignored), which
// only exists on a local machine.
const ELDERBERRY_VIDEO_SRC = "/kitchen-media/elderberry-gummies.mp4";

export const KITCHEN_VIDEOS: KitchenVideo[] = [
  {
    slug: "elderberry-gummies",
    title: "Elderberry Gummies with Turmeric & Lemon",
    description:
      "Join us in The Herbal Kitchen as we create delicious elderberry gummies with turmeric and lemon. Discover the ingredients, follow the preparation, and enjoy a little botanical fun along the way.",
    category: "visual-recipes",
    published: true,
    publishedAt: "2026-11-01",
    durationSeconds: 80,
    video: {
      src: ELDERBERRY_VIDEO_SRC,
      type: "video/mp4",
      poster: {
        src: "/herbal-kitchen/elderberry-gummies-poster.jpg",
        alt: "The herbalist and Cuervo the Chihuahua in the HerbsSearch apothecary with a plate of elderberry gummies, elderberries, turmeric and lemons",
      },
    },
    recipeCard: {
      src: "/herbal-kitchen/elderberry-gummies-card.webp",
      alt: "Illustrated recipe card for elderberry gummies with turmeric and lemon, decorated with elderberries, turmeric root, lemons and echinacea flowers. The full recipe is also written out as text.",
      width: 1536,
      height: 1024,
    },
    recipe: {
      approved: false,
      times: [
        { label: "Prep", iso: "PT10M", text: "10 minutes" },
        { label: "Cook", iso: "PT10M", text: "about 10 minutes" },
        { label: "Set", iso: "PT2H", text: "1 to 2 hours in the refrigerator" },
      ],
      ingredients: [
        {
          quantity: "1 cup (240 ml)",
          item: "elderberry juice, unsweetened",
          note: "store-bought pasteurized juice, or juice made from fully cooked ripe elderberries (see the safety notes)",
        },
        { quantity: "2 to 3 tablespoons", item: "honey or maple syrup" },
        { quantity: "1 tablespoon", item: "fresh lemon juice" },
        { quantity: "½ to 1 teaspoon", item: "ground turmeric" },
        { quantity: "¼ teaspoon", item: "ground black pepper" },
        { quantity: "3 tablespoons", item: "unflavored powdered gelatin" },
        { quantity: "¼ cup (60 ml)", item: "cool water", note: "for softening the gelatin" },
      ],
      steps: [
        {
          title: "Soften the gelatin",
          text: "Sprinkle the gelatin over the ¼ cup of cool water in a small bowl. Let it sit for 5 minutes.",
        },
        {
          title: "Warm the juice",
          text: "In a saucepan over low heat, warm the elderberry juice with the honey or maple syrup, turmeric and black pepper. Don't let it boil.",
        },
        {
          title: "Dissolve the gelatin",
          text: "Stir the softened gelatin into the warm juice until it has fully dissolved.",
        },
        { title: "Add the lemon", text: "Take the pan off the heat and stir in the lemon juice." },
        { title: "Fill the molds", text: "Carefully pour the mixture into silicone gummy molds." },
        {
          title: "Chill until set",
          text: "Refrigerate for 1 to 2 hours, until firm. Pop the gummies out of the molds.",
        },
      ],
      storage: [
        "Keep the gummies in a sealed container in the refrigerator and eat them within 2 weeks.",
        "For longer storage, freeze them.",
      ],
      safety: [
        "Never use raw or unripe elderberries, or the leaves or stems of the elder plant. They contain substances that produce cyanide and can cause nausea, vomiting and severe diarrhea. Cooking destroys this toxin, so use pasteurized elderberry juice or juice made from fully cooked ripe berries of an edible elderberry.",
        "Don't give honey to a child under 1 year old. Use maple syrup instead if anyone that young might eat the gummies.",
        "Turmeric in food amounts is different from concentrated turmeric or curcumin supplements, which have been linked to liver injury and may be unsafe in pregnancy.",
        "Little is known about whether elderberry is safe for health purposes during pregnancy or breastfeeding. If you take medicines, ask your doctor or pharmacist before using elderberry regularly.",
        "This recipe is written for gelatin. Agar sets differently and needs its own recipe, so it isn't a direct swap.",
        "These gummies are a food. They are not a treatment for any illness.",
      ],
      sources: [
        { label: "NCCIH: European Elder (elderberry)", url: "https://www.nccih.nih.gov/health/european-elder" },
        { label: "NCCIH: Turmeric", url: "https://www.nccih.nih.gov/health/turmeric" },
        { label: "CDC: Botulism prevention (honey and infants)", url: "https://www.cdc.gov/botulism/prevention/index.html" },
      ],
    },
    herbNames: ["Elderberry", "Turmeric"],
    shop: [
      { name: "Elderberry", herbName: "Elderberry", description: "The dark purple berries of the elder tree, always cooked before eating." },
      { name: "Turmeric", herbName: "Turmeric", description: "A golden root in the ginger family, used here as a ground spice." },
      { name: "Lemon", description: "Fresh lemon juice, added at the end for brightness." },
      { name: "Honey", description: "Sweetens the gummies. Not for children under 1 year old." },
      { name: "Gelatin", description: "Unflavored powdered gelatin sets the gummies." },
      { name: "Silicone gummy molds", description: "Optional recipe supplies for shaping the gummies." },
    ],
  },
];

export function publishedVideos() {
  return KITCHEN_VIDEOS.filter((v) => v.published).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getVideo(slug: string) {
  return publishedVideos().find((v) => v.slug === slug);
}

export function relatedVideos(video: KitchenVideo, take = 3) {
  const others = publishedVideos().filter((v) => v.slug !== video.slug);
  const sameCategory = others.filter((v) => v.category === video.category);
  return [...sameCategory, ...others.filter((v) => v.category !== video.category)].slice(0, take);
}
