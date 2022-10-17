function esPar(x) {
    return x % 2 == 0;
}

const readlyneSync = require("readline-sync");
let numero;

numero = readlyneSync.questionInt("Dame un numero: ");

if (esPar(numero)) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}