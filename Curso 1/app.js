alert('Bienvenido a nuestro códgio')

// Variables
//let palabraVeces = 'vez';
let mayorIntervalo = parseInt(prompt('Ingresa hasta que número deseas jugar: Ejmplo: 1 al 100, ingresas el 100'));
let numeroSecreto = Math.floor(Math.random()*mayorIntervalo)+1;
let usuarioNumero = 0;
let intentos = 1;
let numeroMaximoIntentos = parseInt(prompt('¿Cuántos intentos máximos deseas para jugar?'));

console.log(numeroSecreto)

while (usuarioNumero != numeroSecreto){
    usuarioNumero = parseInt(prompt(`Indica un número del 1 al ${mayorIntervalo}`));
    // typeof() para consultar el tipo de dato
    // El triple igual compara valore y tipos al mismo tiempo
    /*
    Este código realiza la 
    comparación
    */
    if (usuarioNumero == numeroSecreto) {
        // Usando Operador ternario y refactorización
        alert(`El número es el indicado: Número ${usuarioNumero}, lo hiciste en: ${intentos} ${intentos == 1 ? 'vez':'veces' }`);
    } else {
        if (usuarioNumero > numeroSecreto){
            alert('El número es menor');
        } else {
            alert('El número es mayor');
        }
        // Incrementamos el contador cuando no acierta  
        intentos++;
        //palabraVeces = 'veces'; 
        
        if (intentos>numeroMaximoIntentos){
            alert(`Llegaste al número máximo de ${numeroMaximoIntentos} intentos`);
            break;
        }
    }
}