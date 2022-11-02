const readlyneSync = require("readline-sync");

function introduceDatos(valores) {
    let suma = 0, promedio;
    for (let i = 0; i < valores.length; i++) {
        valores[i] = readlyneSync.questionInt("Introduce el elemento " + (i + 1) + ": ");
        suma += numeros[i];
    }
    promedio = suma / valores.length;
    return promedio;
}

let numeros = new Array(5);
let prom;
prom = introduceDatos(numeros);
console.log(numeros);
console.log("El promedio es", prom.toFixed(2));