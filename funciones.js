
// Una funcion basica

function funcionBasica() {
    console.log('Funcion basica se ejecuto');
}

funcionBasica();



// Funcion como declaracion, con argumentos y return

function suma(a, b) {
   return a + b;
}

console.log(suma(10,15));



// Funcion como expresion

var multiplica = function (a, b) {
    return a*b;
};

console.log(multiplica(10,15));



// comprobando que se puede acceder al contexto superior

var lang = 'es';

function accesoContexto() {
    console.log('En el contexto superior:',lang);
}

accesoContexto();



// Metodo de un objeto. El this hace referencia al objeto que estamos creamos, en este caso 'agente'

var agente = {
    nombre: 'Smith',
    saluda: function () {
        console.log('Hola, soy el agente ' + this.nombre);
    }
};

agente.saluda();



// Constructor de objetos

function Fruta(nombre) {
    this.getNombre = function () {
        return nombre;
    }
    this.setNombre = function (valor) {
        nombre = valor;
    }
}

// creamos el objeto fruta

var limon = new Fruta('Citrus limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('Manzana');

console.log(limon.getNombre());
