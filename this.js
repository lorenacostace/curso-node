'use strict';

var casa = {
    ventanas: 2,
    cuantasVentanas: function () {
        console.log('la casa tiene ' + this.ventanas + ' ventanas');
    }
};

function Coche(){
    this.ruedas = 4;
    this.cuantasRuedas = function () {
        console.log('el coche tiene ' + this.ruedas + ' ruedas');
    }
}

//Creamos un objeto de tipo Coche
var coche = new Coche();



casa.cuantasVentanas();
coche.cuantasRuedas();



// No funciona como queremos debido a que quien llama al this en verdad no es el objeto, sino setTimeout, por eso undefined.
setTimeout(casa.cuantasVentanas, 1000);
setTimeout(coche.cuantasRuedas, 1000);


// Para solucionar el problema anterior, utilizamos el bind, pasandole el this para que sepa quien debe llamar a la funcion.
setTimeout(casa.cuantasVentanas.bind(casa), 1000);
setTimeout(coche.cuantasRuedas.bind(coche), 1000);