const express = require('express');
const path = require('path');

const app = express();

// Configura la carpeta 'public' como la ubicación de los archivos estáticos
app.use(express.static(path.join(__dirname, 'docs')));

// Configura un puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});