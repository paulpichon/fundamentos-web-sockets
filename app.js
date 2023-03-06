//llamar el puerto donde se correra express
require('dotenv').config();
//server
const Server = require('./models/server');

//instanciar el server
const server = new Server();


//
server.listen();

