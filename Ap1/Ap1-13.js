const readlyneSync = require("readline-sync");
let h, m, s;

h = readlyneSync.questionInt("Dame un numero para las horas: ");
m = readlyneSync.questionInt("Dame un numero para los minutos: ");
s = readlyneSync.questionInt("Dame un numero para los segundos: ");

if (h >= 0 && h <= 23) {
    if (m >= 0 && m <= 59) {
        if (s >= 0 && s <= 59) {
            console.log("La hora introducida es: " + h + ":" + m + ":" + s);
        } else {
            console.log("Los segundos no estan en un formato correcto");
        }
    } else {
        console.log("Los minutos no estan en un formato correcto");
    }
} else {
    console.log("Las horas no estan en un formato correcto");
}