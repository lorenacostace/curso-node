"use strict";

// Para leer ficheros
var fs = require('fs');

// Para unir rutas y llegar a ese fichero
var path = require('path');


//Funcion que lea le version de un modulo

var versionModulo = function (moduleName, callBack) {
    // Calculamos la ruta al fichero
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    //Para leer un fichero
    fs.readFile(fichero, 'utf8',  function (err, data) {

        //Comprobamos si ha habido error en la lectura del fichero
        if(err){
            callBack(err);
            return;
        }


        // Si no ha habido error, convertimos el contenido en un objeto
        var packageJson = {};
        
        try {
            packageJson = JSON.parse(data);
        }
        catch (e) {
            callBack('error al parsear ' + fichero);
            return;
        }


        // Comprobamos si tiene version
        if(packageJson && !packageJson.version){
            callBack('No se encuentra la etiqueta "version" en ' + fichero);
            return;
        }

        // Llamada al callback de finalizacion
        callBack(null, packageJson.version);
    });
};


// Modulo del que queremos la info

var modulo = 'chance';


// Llamada a la funcion

versionModulo(modulo, function (err, version) {
    if(err){
        console.log('Hubo un error: ', err);
        return;
    }
    console.log('La version del modulo ' + modulo+ ' es ' + version);
});