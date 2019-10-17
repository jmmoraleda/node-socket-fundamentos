const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); // Definimos el servidor para ejecutar la aplicación con toda la configuración de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion directa del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});