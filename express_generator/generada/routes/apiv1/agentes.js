"use strict";

/* Middleware que devuelve  una lista de agentes*/


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');


//Recuperar lista de agentes
router.get('/', function (req, res, next) {
   Agente.find().exec(function (err, list) {
       if(err){
           next(); // Utilizamos next para que se ocupe el middleware que hay en app.js
           return;
       }

       res.json({ok:true, list:list})
   });
});


//Crear un agente
router.post('/', function (req, res, next) {
    console.log(req.body);
});

// Actualizar un agente. Recibimos el agente en el cuerpo de la peticion, por eso usamos body

// Eliminar un agente

// Exportamos para poder cargar en nuestro router de app.js
module.exports = router;