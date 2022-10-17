function tipoCaracter(x) {
    if (x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z') {
        return "un caracter alfabetico";
    } else if (x >= 0 && x <= 9) {
        return "un digito";
    } else {
        return "otro tipo de caracter";
    }
}

const readlyneSync = require("readline-sync");
let caracter;

do {
    caracter = readlyneSync.question("Dame un caracter (pulsa . para salir): ");
    if (caracter != '.') {
        console.log("El caracter introducido es", tipoCaracter(caracter));
    }
} while (caracter != '.');