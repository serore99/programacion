const readlyneSync = require("readline-sync");
let ventas, comision;

ventas = readlyneSync.questionInt("Cuantas ventas se han hecho este mes? ")

if (ventas >= 0 && ventas <= 999) {
    comision = 0;
} else if (ventas <= 4999) {
    comision = 3;
} else if (ventas <= 19999) {
    comision = 5;
} else {
    comision = 8;
}

console.log("El empleado teniendo " + ventas + " ventas, se llevara una comision del " + comision + "%");