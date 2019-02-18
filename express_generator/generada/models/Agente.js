"use strict";

// Cargamos mongoose
var mongoose = require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});


agenteSchema.statics.list = function(filter, limit, skip, fields, sort, cb){

    // Creamos la variable y le añadimos el filtro que hemos recibido
    var query = Agente.find(filter);

    // Añadimos el limit a la query
    query.limit(limit);

    // Añadimos el skip a la query
    query.skip(skip);

    // Añadimos los campos a la query
    query.select(fields);

    // Añadimos el orden que queremos a la query
    query.sort(sort);

    // Ejecutamos la query pasándole el callback
    query.exec(cb);
};


// Creamos el modelo con model y ponemos el nombre y el esquema que tiene que utilizar.
var Agente = mongoose.model('Agente', agenteSchema);


