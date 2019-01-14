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

// Llamar a una funcion N veces en serie, al finalizar llamar al callback de finalizacion. Recursion
function serie(n, func, callbackFin) {

    // Comprobamos si la n es 0, y de ser asi llamamos a callbackFin para que finalice y hacemos return para salir.
    if(n == 0){
        callbackFin();
        return;
    }

    n--;

    func(n, function (){
        serie(n, func, callbackFin);
    })
}

//Llamada a la funcion
serie(5, escribeTras2Segundos, function () {
    console.log('He terminado')
})