function introduceDatos(a) {
    const readlyneSync = require("readline-sync");
    let numero;
    do {
        numero = readlyneSync.questionInt("Introduce un elemento (pulsa 0 para salir): ");
        if (numero != 0) {
            a.push(numero);
        }
    } while (numero != 0);
}