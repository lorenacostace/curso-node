"use strict";

// Cargamos mongoose
var mongoose = require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});


agenteSchema.statics.list = function(filter, cb){
    var query = Agente.find(filter);

    query.exec(cb);
};


// Creamos el modelo con model y ponemos el nombre y el esquema que tiene que utilizar.
var Agente = mongoose.model('Agente', agenteSchema);


