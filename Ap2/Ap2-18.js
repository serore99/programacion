const readlyneSync = require("readline-sync");
let iva, precioIni, precioFin, valido;
do {
    precioIni = readlyneSync.questionFloat("Introduce el precio de producto(introduce 0 para salir): ");
    if (precioIni != 0) {
        do {
            valido = true;
            iva = readlyneSync.questionInt("Introduce el iva que va a utilizar:")
            if (iva < 16 || iva > 21) {
                valido = false;
                console.log("Introduce un numero entre 16 y 21");
            }
        } while (!valido)
        precioFin = precioIni + (precioIni * (iva / 100));
        precioFin = precioFin.toFixed(2);
        console.log("El producto con precio", precioIni, "€ tras aplicarle un iva del", iva, "% costara", precioFin, "€");
    }
} while (precioIni != 0);