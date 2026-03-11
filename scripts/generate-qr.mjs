import QRCode from 'qrcode';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = "https://edgart.vercel.app/";
const logoPath = path.join(__dirname, "../app/logo.png");
const outputPath = path.join(__dirname, "../edgart-qr-code.png");

async function generate() {
    try {
        console.log("Generando código QR para:", url);
        // 1. Generate high-res QR Code buffer
        const qrWidth = 1000;
        const qrBuffer = await QRCode.toBuffer(url, {
            errorCorrectionLevel: 'H', // Alta corrección para permitir logo grande en el centro
            type: 'png',
            margin: 2,
            width: qrWidth,
            color: {
                dark: '#0b0c0e', // Usando el color principal de la marca (casi negro)
                light: '#ffffff'
            }
        });

        // 2. Pre-process the Logo
        const logoArea = Math.floor(qrWidth * 0.28);

        // Resize the logo first
        const logoPadding = Math.floor(logoArea * 0.1);
        const innerLogoSize = logoArea - (logoPadding * 2);

        // 1. Create the solid white background square
        const bgSquare = await sharp({
            create: {
                width: logoArea,
                height: logoArea,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            }
        })
            .png()
            .toBuffer();

        // 2. Resize the actual logo (which has a transparent background)
        const resizedLogo = await sharp(logoPath)
            .resize({
                width: innerLogoSize,
                height: innerLogoSize,
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 0 } // completely transparent
            })
            .png()
            .toBuffer();

        // 3. Composite the logo ON TOP of the white background square
        const logoBuffer = await sharp(bgSquare)
            .composite([{ input: resizedLogo, gravity: 'center' }])
            .png()
            .toBuffer();

        // 3. Composite logo over QR
        const finalImage = await sharp(qrBuffer)
            .composite([
                { input: logoBuffer, gravity: 'center' }
            ])
            .png()
            .toBuffer();

        // Save final image
        fs.writeFileSync(outputPath, finalImage);
        console.log("✅ Código QR generado exitosamente en:", outputPath);
    } catch (err) {
        console.error("❌ ERROR generating QR:", err);
    }
}

generate();
