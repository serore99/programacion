function validarHoras(h, m, s) {
    if (h < 0 || h > 23) {
        return false;
    }
    if (m < 0 || m > 59) {
        return false;
    }
    if (s < 0 || s > 59) {
        return false;
    }
    return true;
}

const readlyneSync = require("readline-sync");
let horas, minutos, segundos;
horas = readlyneSync.questionInt("Indicame un numero de horas: ");
minutos = readlyneSync.questionInt("Indicame un numero de minutos: ");
segundos = readlyneSync.questionInt("Indicame un numero de segundos: ");

if(validarHoras(horas,minutos,segundos)){
    console.log("Son las",horas,":",minutos,":",segundos);
}else{
    console.log("Los datos introducidos no estan correctos");
}