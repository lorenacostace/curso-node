"use strict";

/* Middleware que devuelve  una lista de agentes*/


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');


//Recuperar lista de agentes
router.get('/', function (req, res, next) {

    var name = req.query.name;
    var age = req.query.age;

    var filter = {};

    if(name){
        filter.name = name;
    }

    // Se debe poner el typeof porque si nos da 0 una edad, evaluaria a falso, nunca se cumpliria y node devolveria todos
    if(typeof age !== 'undefined'){
        filter.age = age;
    }

   Agente.list(filter, function (err, list) {
       if(err){
           next(); // Utilizamos next para que se ocupe el middleware que hay en app.js
           return;
       }

       res.json({ok:true, list:list})
   });
});


//Crear un agente. Recibimos el agente en el cuerpo de la peticion, por eso usamos body
router.post('/', function (req, res, next) {
    var agente = new Agente(req.body);

    // Como resultado de guardar en la db, crearemos un callback
    agente.save(function (err, agenteGuardado) {
        if(err){
            return next(err);
        }

        res.json({ok: true, agente: agenteGuardado});
    });
});


// Actualizar un agente. el ":id" es una caracteristica de express
router.put('/:id', function (req, res, next) {

   var id = req.params.id;

   // Le pasamos el filtro de que debe actualizar. En el req.body va lo que queremos modificar
   Agente.update({_id: id}, req.body, function (err, agente) {
       if(err){
           return next(err);
       }

       res.json({ok: true, agente: agente});
   });
});


// Eliminar un agente
router.delete('/:id', function (req, res, next) {

    var id = req.params.id;

    Agente.remove({_id: id}, function (err, result) {
        if(err){
            return next(err);
        }

        res.json({ok: true, result: result});
    });
});


// Exportamos para poder cargar en nuestro router de app.js
module.exports = router;