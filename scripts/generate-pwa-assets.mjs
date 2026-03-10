import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "app", "logo.png");
const ICONS_DIR = path.join(ROOT, "public", "pwa", "icons");

const STANDARD_SIZES = [72, 96, 128, 144, 152, 167, 180, 192, 384, 512];
const FAVICON_SIZES = [16, 32];
const MASKABLE_SIZES = [192, 512];
const APPLE_TOUCH_SIZE = 180;

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };
const MASKABLE_BG = { r: 11, g: 12, b: 14, alpha: 1 };

async function ensureSourceExists() {
  try {
    await fs.access(SOURCE);
  } catch {
    throw new Error(`No se encontro el archivo fuente: ${SOURCE}`);
  }
}

async function renderIcon(size, outputPath, options = {}) {
  const {
    paddingRatio = 0.08,
    background = TRANSPARENT,
  } = options;

  const padding = Math.round(size * paddingRatio);
  const innerSize = Math.max(size - padding * 2, 1);

  const resized = await sharp(SOURCE)
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: TRANSPARENT,
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([
      {
        input: resized,
        left: Math.floor((size - innerSize) / 2),
        top: Math.floor((size - innerSize) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

async function main() {
  await ensureSourceExists();
  await fs.mkdir(ICONS_DIR, { recursive: true });

  const jobs = [];

  for (const size of STANDARD_SIZES) {
    jobs.push(
      renderIcon(size, path.join(ICONS_DIR, `icon-${size}x${size}.png`), {
        paddingRatio: 0.06,
      }),
    );
  }

  for (const size of MASKABLE_SIZES) {
    jobs.push(
      renderIcon(size, path.join(ICONS_DIR, `maskable-${size}x${size}.png`), {
        paddingRatio: 0.22,
        background: MASKABLE_BG,
      }),
    );
  }

  for (const size of FAVICON_SIZES) {
    jobs.push(
      renderIcon(size, path.join(ICONS_DIR, `favicon-${size}x${size}.png`), {
        paddingRatio: 0.02,
      }),
    );
  }

  jobs.push(
    renderIcon(APPLE_TOUCH_SIZE, path.join(ICONS_DIR, "apple-touch-icon.png"), {
      paddingRatio: 0.06,
    }),
  );

  await Promise.all(jobs);

  console.log("Iconos PWA regenerados desde app/logo.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
