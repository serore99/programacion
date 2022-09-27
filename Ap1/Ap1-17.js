const readlyneSync = require("readline-sync");
let mes, nombre, dias;

mes = readlyneSync.questionInt("Introduce el numero de un mes: ");

switch (mes) {
    case 1:
        nombre = "Enero";
        dias = 31;
        break;
    case 2:
        nombre = "Febrero";
        dias = 28;
        break;
    case 3:
        nombre = "Marzo";
        dias = 31;
        break;
    case 4:
        nombre = "Abril";
        dias = 30;
        break;
    case 5:
        nombre = "Mayo";
        dias = 31;
        break;
    case 6:
        nombre = "Junio";
        dias = 30;
        break;
    case 7:
        nombre = "Julio";
        dias = 31;
        break;
    case 8:
        nombre = "Agosto";
        dias = 31;
        break;
    case 9:
        nombre = "Septiembre";
        dias = 30;
        break;
    case 10:
        nombre = "Octubre";
        dias = 31;
        break;
    case 11:
        nombre = "Noviembre";
        dias = 30;
        break;
    case 12:
        nombre = "Diciembre";
        dias = 31;
        break;
    default:
        console.log("El caracter introducido no corresponde al numero de un mes");
}

if (mes >= 1 && mes <= 12) {
    console.log("El mes " + nombre + " tiene " + dias + " dias");
}