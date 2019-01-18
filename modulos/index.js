"use strict";

// --------------- PARA CARGAR UNA SOLA FUNCION ---------------


// Para cargar una funcion
//var suma = require('./suma');

// Con solo una funcion
//console.log(suma(6, 5));



// --------------- PARA CARGAR UN OBJETO CON PROPIEDADES ---------------


// Para cargar el objeto con sus funciones

var math = require('./suma');



// Con objeto con atributos

console.log(math.suma(6,2));

console.log(math.resta(6,2));