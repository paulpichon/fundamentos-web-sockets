//referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');




//socket del cliente
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
