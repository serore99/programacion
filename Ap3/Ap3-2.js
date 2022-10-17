function esMultiplo(x) {
    return x % 10 == 0;
}

const readlyneSync = require("readline-sync");
let numero;

numero = readlyneSync.questionInt("Dame un numero: ");
if (esMultiplo(numero)) {
    console.log("El numero es multiplo de 10");
} else {
    console.log("El numero no es multiplo de 10");
}