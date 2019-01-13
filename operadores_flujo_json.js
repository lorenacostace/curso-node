
//Definimos un objeto de forma literal
var empleado = {
    nonbre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["pistola", "rifle", "kungfu"]
};

console.log(empleado);

// ---  SERIALIZAMOS NUESTRO OBJETO empleado  ---
var serializado = JSON.stringify(empleado);

console.log(serializado);


// ---  DES-SERIALIZAR EL OBJETO (pasar de string a objeto) ---

// para que falle el des-serializado añadimo un corchete al final y así desestructure
//serializado = serializado + '}';

var leido;

try{
    leido = JSON.parse(serializado);
}
catch (err) {
    console.log("No se pudo leer 'serializado'");
}

if(typeof leido != "undefined")
    console.log("Hay algo en leido");
else
    console.log("No hay nada leido");


// ---  BUCLES ---

for(i = 0; i < empleado.armas.length; i++){
    var arma = empleado.armas[i];
    console.log(empleado.nonbre + (arma == "kungfu" ? " sabe " : " tiene ") + arma);
}