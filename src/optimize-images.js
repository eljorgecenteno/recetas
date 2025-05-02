const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'img'; // Carpeta de entrada
const outputDir = './imagenes-optimizadas'; // Carpeta de salida

// Asegúrate de que la carpeta de salida existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Lee todos los archivos de la carpeta de entrada
fs.readdirSync(inputDir).forEach(file => {
  const filePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, file.replace(/\.[^.]+$/, '.webp')); // Cambia a .webp

  // Procesa solo las imágenes (si tiene extensión .jpg, .jpeg, .png)
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    sharp(filePath)
      .resize(1200) // Redimensiona manteniendo las proporciones
      .webp({ quality: 80 }) // Convierte a WebP con calidad 80
      .toFile(outputFilePath)
      .then(() => console.log(`Imagen procesada: ${file}`))
      .catch(err => console.error(`Error al procesar ${file}:`, err));
  }
});
