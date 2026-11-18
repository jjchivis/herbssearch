import { copyUrl } from "./image-copies.mjs";

// Used by every next/image on the site (see next.config.ts). The copies only
// exist after a build, so local development shows the original pictures.
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (process.env.NODE_ENV === "development") return `${src}?w=${width}`;
  return copyUrl(src, width);
}
