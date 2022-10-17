function primo(x) {
    let prim = true;
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            prim = false;
        }
    }
    return prim;
}

const readlyneSync = require("readline-sync");
let numero;

numero = readlyneSync.questionInt("Dame un numero mayor que 1: ");

if (primo(numero)) {
    console.log("El numero introducido es primo");
} else {
    console.log("El numero introducido no es primo");
}