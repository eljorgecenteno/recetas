const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = './src/imagenes-optimizadas/ensalada-cesar.webp'; // tu imagen original
const outputDir = './src/imagenes-optimizadas';

// Asegúrate de que la carpeta de salida existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Para resolution switching por tamaño
const widths = [600, 1200, 2400];

widths.forEach(width => {
  sharp(inputPath)
    .resize({ width })
    .toFormat('webp')
    .toFile(`${outputDir}/ensalada-cesar-${width}.webp`, (err, info) => {
      if (err) console.error(err);
      else console.log(`✅ Generada: ensalada-cesar-${width}.webp`);
    });
});

// Para resolution switching por densidad de píxeles
const densities = [1, 2];
const baseWidth = 600;

densities.forEach(d => {
  sharp(inputPath)
    .resize({ width: baseWidth * d })
    .toFormat('webp')
    .toFile(`${outputDir}/ensalada-cesar-${d}x.webp`, (err, info) => {
      if (err) console.error(err);
      else console.log(`✅ Generada: ensalada-cesar-${d}x.webp`);
    });
});