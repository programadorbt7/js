validar_numero();

function validar_numero() {

    var numero_random = Math.floor(Math.random() * 10);
    var usuario_numero = prompt('Digite un número entre el 0 y 10');
    
    if (usuario_numero <= 10) {
        comparar_numero(numero_random, usuario_numero);
    } else {
        alert('Número Invalido');
        var usuario_numero = prompt('Digite un número entre el 1 y 10');
    }
}

function comparar_numero(numero_random, usuario_numero) {
    if (numero_random == comparar_numero) {
        alert('Acertaste!');
    } else {
        alert('Sigue intentando');
        validar_numero();
    }
}
