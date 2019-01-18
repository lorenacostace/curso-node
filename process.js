"use strict";

// Informacion de proceso
var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
};

console.log('entro en ', info);

// emisor de eventos

process.on('exit', function () {
    console.log('Adios, antes de terminar me despido');
});

console.log('Fin del proceso');

process.exit(0); // Esto termina la ejecucion

console.log('El proceso ya termino, por lo tanto esto no se ejecuta');