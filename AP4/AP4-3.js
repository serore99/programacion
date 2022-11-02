function introduceDatos(numeros) {
    let pares = 0;
    for (let i = 0; i < numeros.length; i++) {

        numeros[i] = readlyneSync.questionInt("Introduce el valor " + (i + 1) + ": ");
        if (numeros[i] % 2 == 0) {
            pares++;
        }
    }
    return pares;
}
const readlyneSync = require("readline-sync");
let numeros = new Array(10);
let pares = introduceDatos(numeros);

console.log("Resultado: " + numeros)
console.log("Se han intorducido", pares, "numeros pares y", numeros.length - pares, "impares");
