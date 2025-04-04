const path = require('path');

module.exports = {
  plugins: {
    'posthtml-include': {
      root: path.join(__dirname, 'src'), // Ruta absoluta al directorio src
      from: path.join(__dirname, 'src'), // Especifica el directorio base
      encoding: 'utf-8'
    }
  }
}