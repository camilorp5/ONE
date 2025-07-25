alert('Bienvenido a nuestro códgio')

// Variables
let numeroSecreto = 8;
let usuarioNumero = prompt('Indica un número del 1 al 10');

console.log(usuarioNumero);

/*
Este código realiza la 
comparación
*/
if (usuarioNumero == numeroSecreto) {
    alert(`El número es el indicado: Número ${usuarioNumero}`);
} else {
    alert('Lo siento este no es el número')
}

