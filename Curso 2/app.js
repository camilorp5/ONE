let numeroSecreto = 0;
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        limpiarCaja();
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos ++;   
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorioSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Bienvenidos');
    asignarTextoElemento('p','Escoje un número del 1 al 10');
    numeroSecreto = numeroAleatorioSecreto();
    intentos = 1;
}

condicionesIniciales();