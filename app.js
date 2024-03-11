const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de ejemplo
app.get('/loghomologacion', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }
        // Parsea el contenido del archivo JSON
        const jsonData = JSON.parse(data);
        jsonData.tipoDato = "Quemado";
        // Envía el contenido como respuesta
        res.json(jsonData);
      });
});

app.get('/homologacionopciones', (req, res) => {
    fs.readFile('homologacionopciones.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          res.status(500).send('Error interno del servidor');
          return;
        }
        // Parsea el contenido del archivo JSON
        const jsonData = JSON.parse(data);
        jsonData.tipoDato = "Quemado";
        // Envía el contenido como respuesta
        res.json(jsonData);
      });
});

app.post('/', (req, res) => {
  res.json(req.body);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
