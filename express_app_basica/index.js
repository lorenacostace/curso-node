"use strict";

var express = require('express');
var morgan = require('morgan');


// Para crear una app de express
var app = express();

// A nuestra app le vamos a decir que utilice morgan en modo desarrollo (dev)
app.use(morgan('dev'));


// Una ruta a la que va a escuchar nuestra app

// Vamos a recibir peticiones de tipo GET
app.get('/', function (req, res) {
    console.log('peticion a /');
    res.send('Hello world');
    }
);

// Para arrancar el servidor listen(puerto, callback)
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('*** App de ejemplo arrancada en el puerto:', port);
})