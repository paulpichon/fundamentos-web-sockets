const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        
        //PARTE DE LA CONFIGURACION DE SOCKET IO
        this.server = require('http').createServer( this.app);
        this.io = require('socket.io')(this.server);

        //NO SE USARA NINGUN PATH SOLO HACEMOS LA REFERENCIAS DEL THIS.PATHS POR SI EN ALGUN MOMENTO LLEGO A USARLO
        this.paths = {};


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

      

    }

    routes() {
        //this.app.use( this.paths.auth, require('../routes/auth'));
    }

    listen() {
        //este this.server es el de SOCKET.IO no el de EXPRESS
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;