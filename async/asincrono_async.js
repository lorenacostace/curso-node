"use strict";

var async = require('async');

console.log('Empiezo');


// FUNCION QUE TRAS 2 SEGUNDOS, VA A ESCRIBIR UNA FRASE POR CONSOLA

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// BUCLE ASINCRONO EN SERIE


var lista = [1, 2, 'tres', 4, 5];

//Llamada a la funcion
async.eachSeries(lista, escribeTras2Segundos, function () {
    console.log('He terminado');
})