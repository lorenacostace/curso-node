"use strict";

var suma = function (a, b) {
    return a + b;
};

var resta = function(a, b){
    return a - b;
};


// Exportamos la funcion suma
//module.exports = suma;

// Para exportar distintas funciones
module.exports = {
    suma: suma,
    resta: resta
};