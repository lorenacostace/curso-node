"use strict";

// Creamos un constructor persona
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


// ---------- HEREDANDO DE PERSONA -----------------

// Creamos un constructor de agentes
function Agente(nombre) {
    Persona.call(this, nombre);
    // Esto ejecuta el constructor de Persona con el this de Agente, definiendi en el this de Agente una propiedad name
    // y asignandole el parametro recibido
}

// Le asginamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Smith');

agente.saluda();

// Para comprobar el prototipo
console.log(
    Object.getPrototypeOf(agente), // Retorna su prototipo
    agente instanceof Agente, // para comprobar si agente es una instancia de Agente
    agente instanceof Persona,
    agente instanceof Object
);