const readlyneSync = require("readline-sync");
let mes;
let dias;

mes = readlyneSync.questionInt("Introduce el numero de un mes: ");

if (mes > 0 && mes < 13) {
    if (mes <= 7) {
        if (mes % 2 == 0) {
            if (mes == 2) {
                dias = 28;
            } else {
                dias = 30;
            }
        } else {
            dias = 31;
        }
    } else {
        if (mes % 2 == 0) {
            dias = 31;
        }
        else {
            dias = 30;
        }
    }
    console.log("El mes " + mes + " tiene " + dias + " dias");
}else{
    console.log("El numero introducido no es el numero de un mes");
}


