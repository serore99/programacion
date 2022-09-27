const readlyneSync = require("readline-sync");
let letra1, letra2;
letra1 = readlyneSync.question("Dame una letra: ");
letra2 = readlyneSync.question("Dame otra letra: ");

if (letra1.length > 1 || letra2.length > 1) {
    console.log("Introduce solo una letra")
} else {
    if (letra1 >= 'a' && letra1 <= 'z') {
        if (letra2 >= 'a' && letra2 <= 'z') {
            console.log("Ambas letras son minusculas");
        } else {
            console.log("El segundo caracter no es una letra minuscula");
        }
    } else {
        console.log("El primer caracter no es una letra minuscula");
    }
}