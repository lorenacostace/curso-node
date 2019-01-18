"use strict";

function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function (nuevoNombre) {
            nombre = nuevoNombre;
        },
        leenombre: function () {
            return nombre;
        },
        ponEdad: function (nuevaEdad) {
            edad = nuevaEdad;
        },
        leerEdad: function () {
            return edad;
        },
        escribe: function () {
            return console.log('Soy ' + nombre + ' y tengo ' + edad + ' años');
        }
    }
}

// Creamos agentes
var smith = creaAgente('Smith');
smith.ponEdad(33);

var jones = creaAgente('Jones');
jones.ponEdad(42);


console.log(smith.leenombre() + ' ' + smith.leerEdad());
console.log(jones.leenombre() + ' ' + jones.leerEdad());

// Accede a sus propiedades perfectamente, no como nos pasaba con el this.
setTimeout(smith.escribe, 1000);