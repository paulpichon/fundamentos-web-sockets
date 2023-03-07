//controlador de los sockets
const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    //desconctar el cliente
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    //escuchar el mensaje .emit() que esta en el socket-client.js
    //payload ---> trae la info desde el emit()
    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        //ejecutamos el callback mandando el ID
        callback( id );
        
        //mensaje a todos los clientes conectados
        //broatcast --> enviar el mensaje a todos
        socket.broadcast.emit('enviar-mensaje', payload);

    });

}

//exports
module.exports =  {
    socketController
}