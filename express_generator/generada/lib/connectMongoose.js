"use strict";

var mongoose = require('mongoose');

// Objeto de conexion
var db = mongoose.connection;

// Si ocurre algun error de conexion, llamara a la funcion
db.on('error', function (err) {
    console.log(err);
});

// Cuando se abra la conexion llamara a la funcion
db.once('open', function () {
    console.info('Conectado a mongodb');
});

// Mongoose establece la conexion con esta cadena
mongoose.connect('mongodb://localhost:27017/cursonode', { useNewUrlParser: true });
