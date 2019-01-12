
var http = require('http');

// Servidor que responde peticiones en texto plano y la frase "Wake up, Neo..."
var server  = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    response.end('<h3>Wake up, Neo...</h3>\n');
});

// Arrancamos el servidor

// El primer parametro sera el puerto y el segundo parametro sera la IP, en nuestro caso localhost.
server.listen(1337, '127.0.0.1');

//Escribimos por consola que el servidor ha arrancado
console.log('Servidor arrancado en 127.0.0.1:1337');