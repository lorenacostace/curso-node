"use strict";

console.log('Empiezo');


// FUNCION QUE TRAS 2 SEGUNDOS, VA A ESCRIBIR UNA FRASE POR CONSOLA

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// BUCLE ASINCRONO EN SERIE

// Llamar a una funcion con un array en serie, al finalizar llamar al callback de finalizacion. Recursion
function serie(lista, func, callbackFin) {

    // Comprobamos si la n es 0, y de ser asi llamamos a callbackFin para que finalice y hacemos return para salir.
    if(lista.length == 0){
        callbackFin();
        return;
    }

    func(lista.shift(), function (){
        serie(lista, func, callbackFin);
    })
}

var lista = [1, 2, 'tres', 4, 5];

//Llamada a la funcion
serie(lista, escribeTras2Segundos, function () {
    console.log('He terminado');
})