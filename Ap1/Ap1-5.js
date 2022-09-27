const readlyneSync = require("readline-sync");
let letra;
letra = readlyneSync.question("Dame una letra: ");

if (letra.length > 1) {
    console.log("Introduce solo una letra")
} else {
    if (letra >= 'A' && letra <= 'Z') {
        console.log("La letra es mayuscula");
    } else if (letra >= 'a' && letra <= 'z') {
        console.log("La letra es minuscula");
    } else {
        console.log("Eso no es una letra");
    }
}