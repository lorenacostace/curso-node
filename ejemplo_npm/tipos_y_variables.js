
// ---  NUMBERS  ---

var numero = 1;

console.log(numero);
console.log(typeof (numero));

numero = 'hola';
console.log(typeof (numero));


// ---  STRINGS  ---

//muestra el string utilizando el separador que le indique al split. Partimos el string por los espacios.
console.log('texto de prueba'.split(' '));

// Textos multilinea

//Opcion 1 texto multilinea
var textoLargo1 =
    'Linea1\n' +
    'Linea2\n';

console.log(textoLargo1);

// Opcion 2 texto multilinea
var textoLargo2 = [
    'linea1',
    'linea2'
].join('\n');

console.log(textoLargo2);


// ---  CREANDO OBJETOS  ---

var objeto = {
    numero: 1,
    texto: 'hola',
    sumaDos: function (v) {
        return v + 2;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));


// --- ARRAYS ---

var array = [
  1,
  'hola',
  function(v) { return v + 2 },
  {valor: 'hola'}
];

console.log(array);
console.log(array[1]);
console.log(array[2](50));


// --- HOISTING ---

var x = 100;

function y() {
    if (x == 20)
        var x = 30;

    return x;
}

console.log(x, y());