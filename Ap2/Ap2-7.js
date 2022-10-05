const readlyneSync = require("readline-sync");
let letra = "";

while (letra != "X" && letra != "x") {
    letra = readlyneSync.question("Dame una letra por teclado(X o x para salir): ");
    if (letra.length == 1) {
        console.log("Has introducido la letra: " + letra);
    } else {
        console.log("Introduce tan solo un caracter");
    }
}

console.log("Saliendo...");