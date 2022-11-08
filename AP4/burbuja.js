const readlineSync = require("readline-sync");
/**
 * A traves de la longitud que pedimos a traves de un readlineSync generamos una lista de numeros
 * @returns {Array}
 */
function generarListaNumeros() {
    let tamaño = readlineSync.questionInt("Que longitud de array quieres? ");
    let a = new Array(tamaño);
    for (let i = 0; i < a.length; i++) {
        let numero = Math.random() * 500;
        numero = Math.round(numero);
        a[i] = numero;
    }
    return a;
}
/**
 * Muestra los valores de un array por pantalla uno a uno
 * @param {Array} a 
 */
function mostrarListaNumeros(a) {
    for (let i = 0; i < a.length; i++) {
        console.log("Valor numero " + (i + 1) + ": " + a[i]);
    }
}

/**
 * Ordena los valores de un array de menor a mayor
 * @param {Array} a 
 */
function ordenaListaNumeros(a) {
    let aux
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
            }
        }
    }
}

let array;
array = generarListaNumeros();
console.log("El array generado es:");
mostrarListaNumeros(array);
ordenaListaNumeros(array);
console.log("Tras ordenar el array:");
mostrarListaNumeros(array);