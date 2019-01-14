"use strict";

console.log('Empiezo');


// FUNCION QUE TRAS 2 SEGUNDOS, VA A ESCRIBIR UNA FRASE POR CONSOLA

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// BUCLE ASINCRONO EN PARALELO

var acabados = 0;

// Salen todos los textos en paralelo
for(var i = 0; i < 5; i++){
    escribeTras2Segundos('texto' + i, function () {
        acabados++;
        if(acabados >= 5)
            console.log('Fin')
    });
}