"use strict";

/* Middleware que devuelve  una lista de agentes*/


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

router.get('/', function (req, res, next) {
   Agente.find().exec(function (err, list) {
       if(err){
           next(); // Utilizamos next para que se ocupe el middleware que hay en app.js
           return;
       }

       res.json({ok:true, list:list})
   });
});


// Exportamos para poder cargar en nuestro router de app.js
module.exports = router;