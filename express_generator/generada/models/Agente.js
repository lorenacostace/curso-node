"use strict";

// Cargamos mongoose
var mongoose = require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});


// Creamos el modelo con model y ponemos el nombre y el esquema que tiene que utilizar.
mongoose.model('Agente', agenteSchema);


