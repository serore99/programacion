const readlyneSync = require("readline-sync");
var vocal;

vocal = readlyneSync.question("Cual es tu letra? ");
vocal = vocal.toUpperCase();

if (vocal.length == 1) {
    switch (vocal) {
        case "A":
            console.log("Esta vocal es la numero 1");
            break;
        case "E":
            console.log("Esta vocal es la numero 2");
            break;
        case "I":
            console.log("Esta vocal es la numero 3");
            break;
        case "O":
            console.log("Esta vocal es la numero 4");
            break;
        case "U":
            console.log("Esta vocal es la numero 5");
            break;
        default:
            console.log("El caracter introducido no es una vocal");
    }
} else {
    console.log("Intruduce tan solo una vocal");
}