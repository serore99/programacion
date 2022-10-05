const readlyneSync = require("readline-sync");
let numero, cont, contPares, contImpares;
cont = 0;
contPares = 0;
contImpares = 0;

do {
    numero = readlyneSync.questionInt("Introduce un numero(introduce 0 para salir): ");
    cont++;
    if (numero % 2 == 0) {
        contPares++;
    } else {
        contImpares++;
    }
} while (numero != 0);

console.log("Se han introducido",cont,"numeros, de los cuales",contPares,"son pares y",contImpares,"son impares");