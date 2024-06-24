
// var contador_intentos = 0;
// var numero_random = Math.floor(Math.random() * 10);

// validar_numero();

// function validar_numero() {
//     var usuario_numero = prompt('Digite un número entre el 0 y 10');
    
//     while(usuario_numero != numero_random){
//         contador_intentos++;

//         if (usuario_numero <= 10) {
//             comparar_numero(numero_random, usuario_numero, contador_intentos);
//         } else {
//             alert('Número Invalido');
//         }
//     }
// }

// function comparar_numero(numero_random, usuario_numero, contador_intentos) {
//     if (numero_random == usuario_numero) {
//         alert('Acertaste en el intento' + contador_intentos);
//     }
// }


function asignarNombreJugador(){
    debugger
   var nombreJugador = document.getElementById("nombreJugador").value;

   if(nombreJugador != null && nombreJugador != ""){
    darBienvenida(nombreJugador);

   }else{
    let playzone = document.getElementById('playzone');
    const errorRegister = document.createElement('span');
    errorRegister.classList.add('errorUsername');
    errorRegister.textContent = 'Por favor, registre un nombre de Jugador';
    playzone.appendChild(errorRegister);
   }

}

function darBienvenida(nombreJugador){
    var bienvenidaContenedor = 
    '<h1 class="tituloPrincipal"> Bienvenido ' +
    nombreJugador +
    '</h1>' +
    '<span>Tendrás que adivinar el número en el rango que te saldrá en pantalla. Tienes 3 vidas, con cada intento fallido perderás una vida.' + ' <b>¿Listo?</b>' +
    '</span>' +
    '<button class="startGame" onClick="startGame();">' +
     'Empezar Juego' + 
     '</button>';
    document.getElementById('playzone').innerHTML = bienvenidaContenedor;
}
