const readlynseSync = require("readline-sync");
let multiplicador, multiplicando, resultado;
resultado = 0;

multiplicador = readlynseSync.questionInt("Dame el multiplicador: ");
multiplicando = readlynseSync.questionInt("Dame el multiplicando: ");

do {
    if (multiplicador % 2 == 1) {
        resultado += multiplicando;
    }
    multiplicador = multiplicador / 2;
    multiplicador = Math.floor(multiplicador);
    multiplicando = multiplicando * 2;
} while (multiplicador > 0);

console.log("El resultado es: ", resultado);