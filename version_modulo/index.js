"use strict";

// Para leer ficheros
var fs = require('fs');

// Para unir rutas y llegar a ese fichero
var path = require('path');


//Funcion que lea le version de un modulo

var versionModulo = function (moduleName, callback) {
    // Calculamos la ruta al fichero
    var fichero = path.join('./node_modules', moduleName, 'package.json');
};


// Modulo del que queremos la info
var modulo = 'chance';

// Llamada a la funcion

versionModulo(modulo, function (err, version) {
    if(err){
        console.log('Hubo un error: ', err);
        return;
    }
    console.log('La version del modulo ' + modulo+ ' es ' + version);
});