"use strict";

function Persona(nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');

// Creamos una propiedad aun despues de haber creado el objeto persona, va a funcionar igualmente.
Persona.prototype.saluda = function(){
    console.log('Hola, me llamo ' + this.name);
};

console.log(persona.name);

persona.saluda();