const readlyneSync = require("readline-sync");
let car;
let cont = 0;

do {
    car = readlyneSync.question("Introduce un caracter(pulsa . para salir): ");
    if (car.length == 1) {
        if (car >= 0 && car <= 9) {
            cont++;
        }
    } else {
        console.log("Por favor introduce un solo caracter");
    }
} while (car != ".");

console.log("Se han introducido", cont, "veces numeros entre 0 y 9");