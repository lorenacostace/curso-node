"use strict";

var express = require('express');
var router = express.Router();

/*
router.use(function (req, res, next) {
   console.log('middleware de router clientes');
   res.send('respuesta');
   next();
});
*/

// Cargamos una ruta al router. Todas las peticiones a la ruta /, van a ejecutar este middleware.
router.get('/', function (req, res, next) {
    res.send('respuesta a clients');
});

router.get('/:id', function (req, res, next) {
    //console.log(req.params);
   res.send('recibido parametro ' + req.params.id);
});

router.post('/', function (req, res, next) {
    console.log('req.body', req.body);
    res.json({recibido: req.body.num});
});

// Exportamos el router para que app.js lo pueda cargar. Lo que estamos haciendo es un modulo.
module.exports = router;