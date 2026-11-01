import type { KitchenVideo } from "@/content/herbal-kitchen/types";
import { absoluteUrl } from "@/lib/site-url";

// Schema.org VideoObject for every published video, plus a Recipe object only
// when the written recipe has been approved by the site owner.
export function KitchenStructuredData({ video }: { video: KitchenVideo }) {
  const pageUrl = absoluteUrl(`/herbal-kitchen/${video.slug}`);
  const videoObject = {
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [absoluteUrl(video.video.poster.src)],
    uploadDate: video.publishedAt,
    duration: `PT${Math.floor(video.durationSeconds / 60)}M${video.durationSeconds % 60}S`,
    contentUrl: absoluteUrl(video.video.src),
    url: pageUrl,
  };

  const graph: object[] = [videoObject];
  const r = video.recipe;
  if (r?.approved) {
    graph.push({
      "@type": "Recipe",
      name: video.title,
      description: video.description,
      image: [absoluteUrl(video.video.poster.src), ...(video.recipeCard ? [absoluteUrl(video.recipeCard.src)] : [])],
      datePublished: video.publishedAt,
      author: { "@type": "Organization", name: "HerbsSearch" },
      ...(r.yield ? { recipeYield: r.yield } : {}),
      ...Object.fromEntries(
        r.times.flatMap((t) =>
          t.label === "Prep" ? [["prepTime", t.iso]] : t.label === "Cook" ? [["cookTime", t.iso]] : [],
        ),
      ),
      recipeIngredient: r.ingredients.map((i) => `${i.quantity} ${i.item}`),
      recipeInstructions: r.steps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.text })),
      video: videoObject,
    });
  }

  return (
    <script
      type="application/ld+json"
      // Built from our own content files, not from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}
