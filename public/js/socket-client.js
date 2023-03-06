//referencias del HTML
const lblOnline   = document.querySelector('#lblOnline');
const lblOffline  = document.querySelector('#lblOffline');
const textMensaje = document.querySelector('#textMensaje');
const btnEnviar   = document.querySelector('#btnEnviar');

//socket del cliente
//esto mantiene la comunicacion con el servidor
const socket = io();

//listeners -> eventlister
//saber cuando alguien se conecta al servidor
socket.on('connect', () => {
    console.log('conectado');

    //ocultar lblOffline
    lblOffline.style.display = 'none';
    //
    lblOnline.style.display = '';

});
//saber cuando alguien se desconecta al servidor
socket.on('disconnect', () => {
    console.log('desconectado del servidor');



    //ocultar lblOnline
    lblOnline.style.display  = 'none';
    //
    lblOffline.style.display = '';

});


//listener
btnEnviar.addEventListener( 'click', () => {

    const mensaje = textMensaje.value;
    //usualmente se manda el payload como un objeto
    const payload  = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }    
    //emitir un evento
    socket.emit( 'enviar-mensaje', payload );
    

});