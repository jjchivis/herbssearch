// Makes the resized copies of the site's pictures. Runs at the start of every
// build, so a new picture in public/herbs is picked up automatically. A picture
// that can't be read stops the build, which keeps the last good version live.
import { mkdir, readdir, stat } from "node:fs/promises";
import { availableParallelism } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { COPIES_DIR, COPY_EXTENSIONS, COPY_WIDTHS, copyFileName } from "../src/lib/image-copies.mjs";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const QUALITY = 75;

async function isUpToDate(source, copy) {
  try {
    const [sourceInfo, copyInfo] = await Promise.all([stat(source), stat(copy)]);
    return copyInfo.mtimeMs >= sourceInfo.mtimeMs;
  } catch {
    return false;
  }
}

const jobs = [];
for (const [folder, widths] of Object.entries(COPY_WIDTHS)) {
  const outputDir = path.join(PUBLIC_DIR, COPIES_DIR, folder);
  await mkdir(outputDir, { recursive: true });

  const files = await readdir(path.join(PUBLIC_DIR, folder));
  for (const fileName of files) {
    if (!COPY_EXTENSIONS.includes(path.extname(fileName).toLowerCase())) continue;
    for (const width of widths) {
      jobs.push({
        source: path.join(PUBLIC_DIR, folder, fileName),
        copy: path.join(outputDir, copyFileName(fileName, width)),
        width,
      });
    }
  }
}

const startedAt = Date.now();
const failures = [];
let made = 0;
let next = 0;

sharp.concurrency(1);
await Promise.all(
  Array.from({ length: availableParallelism() }, async () => {
    while (next < jobs.length) {
      const { source, copy, width } = jobs[next++];
      if (await isUpToDate(source, copy)) continue;
      try {
        await sharp(source)
          .rotate()
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(copy);
        made++;
      } catch (error) {
        failures.push(`${path.relative(PUBLIC_DIR, source)}: ${error.message}`);
      }
    }
  }),
);

const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
console.log(`Image copies: ${made} made, ${jobs.length - made - failures.length} already up to date (${seconds}s)`);

if (failures.length > 0) {
  console.error(`Could not process ${failures.length} picture(s):\n${failures.join("\n")}`);
  process.exit(1);
}
