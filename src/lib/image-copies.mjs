// Pictures are resized once, when the site is built, instead of on demand by
// Vercel's image service (which has a usage allowance). This file is the single
// list of what gets made, shared by the build script and the page image loader.

/** Folder inside `public/` that holds the generated copies. Not committed. */
export const COPIES_DIR = "image-copies";

/** Folders inside `public/` whose pictures get copies, and the widths to make. */
export const COPY_WIDTHS = {
  // Herb art is never shown wider than 360px, so 828px covers sharp screens.
  herbs: [128, 256, 384, 640, 828],
  // Banners, recipe cards and video posters can fill a wide page.
  brand: [256, 384, 640, 828, 1080, 1920],
  "herbal-kitchen": [256, 384, 640, 828, 1080, 1920],
};

export const COPY_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

/** The smallest available width that still fills `width`, or the largest one. */
function pickWidth(widths, width) {
  return widths.find((available) => available >= width) ?? widths[widths.length - 1];
}

export function copyFileName(fileName, width) {
  return `${fileName}.${width}.webp`;
}

/**
 * The address of the copy of `src` to show at `width`. Anything without copies
 * (such as a picture hosted on another site) keeps its original address.
 */
export function copyUrl(src, width) {
  const match = src.match(/^\/([^/]+)\/(.+)$/);
  if (!match) return src;

  const [, folder, fileName] = match;
  const widths = COPY_WIDTHS[folder];
  const isCopied = COPY_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
  if (!widths || !isCopied) return src;

  return `/${COPIES_DIR}/${folder}/${copyFileName(fileName, pickWidth(widths, width))}`;
}
