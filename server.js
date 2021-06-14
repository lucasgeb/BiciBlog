const express = require('express');
const hbs = require('hbs');
const app = express();


//cofigura variable de entorno
const port = process.env.PORT || 3000;



//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');



//sirve contenido estástico
app.use( express.static('public'));

//Rutas

app.get('/equipo', function (req, res) {
    res.render('equipo', {
      titulo: "Equipo - Rodando con Alforjas"
    })
  });

app.get('/historias', function (req, res) {
    res.render('historias', {
      titulo: "Historias - Rodando con Alforjas"
    })
  });

app.get('/imagenes', function (req, res) {
  res.render('imagenes', {
    titulo: "Galería de fotos - Rodando con Alforjas"
  })
});

  app.get('/', function (req, res) {
    res.render('index', {
      titulo: "Home - Rodando con Alforjas "
    })
  });

app.get('/rutas', function (req, res) {
    res.render('rutas', {
      titulo: "Rutas - Rodando con Alforjas"
    })
  });


app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});
