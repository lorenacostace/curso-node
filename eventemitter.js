"use strict";

var events = require('events');

// Emisor de eventos
var myEmitter = new events.EventEmitter();


// Creamos varias funciones y se las vamos a colgar a un id.

myEmitter.on('llamar telefono', sonarTelefono);
myEmitter.on('llamar telefono', vibrarTelefono);


// Si a este handler(escuchador del evento, en quien le llega 'mama', no sonara)
function sonarTelefono(quien) {
    if(quien == 'mama')
        return;

    console.log('ring ring ring');
}

function vibrarTelefono() {
    console.log('brr brr brr');
}

// Emitimos el evento con id = llamar telefono y arg = mama
myEmitter.emit('llamar telefono', 'mama');