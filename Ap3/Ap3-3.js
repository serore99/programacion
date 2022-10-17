function diferenciaEdad(x, y) {
    if (x < y) {
        return y - x;
    } else {
        return x - y;
    }
}

const readlyneSync = require("readline-sync");
let edad1, edad2;

edad1 = readlyneSync.questionInt("Dame la edad del primer hermano: ");
edad2 = readlyneSync.questionInt("Dame la edad del segundo hermano: ");

console.log("La diferencia de edad entre ambos es", diferenciaEdad(edad1, edad2));