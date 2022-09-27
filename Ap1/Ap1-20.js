const readlyneSync = require("readline-sync");
let iva, precio, porcenDescuento, curso, localidad, titulacion, datosValido, descuento;

precio = readlyneSync.questionInt("Cual es tu precio inicial? ")
iva = readlyneSync.questionInt("Que porcentaje del iva vas a aplicar? ");
localidad = readlyneSync.question("De donde eres? ");
titulacion = readlyneSync.question("Que titulacion vas a cursar? ");
curso = readlyneSync.questionInt("Que curso? ");
datosValido = false;
porcenDescuento = 0;
localidad = localidad.toLowerCase();
titulacion = titulacion.toLowerCase();

if (iva == 16 || iva == 21) {
    if (curso == 1 || curso == 2) {
        datosValido = true;
    }
}

if (datosValido) {
    if (localidad == "catarroja") {
        porcenDescuento += 5;
    }
    if (titulacion == "dam") {
        porcenDescuento += 5;
        if (curso == 1) {
            porcenDescuento += 5;
        }
    }

    descuento = precio * (porcenDescuento / 100);
    precio = (precio - descuento);
    precio = precio + precio * (iva / 100);
    console.log("El precio final a pagar son " + precio + "€ con un iva del " + iva + "% y un descuento del " + porcenDescuento + "%");
} else {
    console.log("Los datos no estan correctos, revisalos");
}