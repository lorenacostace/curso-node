"use strict";

console.log('Empiezo');


// FUNCION QUE TRAS 2 SEGUNDOS, VA A ESCRIBIR UNA FRASE POR CONSOLA

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2Segundos('texto1', function () {
    console.log('Fin1');   // Al ponerlo aqui consigo que se muestre despues del texto

    escribeTras2Segundos('texto2', function () {  // Colocamos aqui la funcion para que se ejecuten serie y no en paralelo
        console.log('Fin2');
    });
});

// console.log('Fin');   Si lo dejo aqui, se ejecuta antes del texto
