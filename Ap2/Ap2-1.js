const readlyneSync = require("readline-sync");
let sueldo = 0, total = 0, promedio = 0;
let sueldoMaximo = 0;

for (let i = 1; i <= 5; i++) {
    sueldo = readlyneSync.questionFloat("Dame un sueldo: ");
    total += sueldo;
    if (sueldo > sueldoMaximo) {
        sueldoMaximo = sueldo;
    }
}
promedio = total / 5;
console.log("El promedio de los sueldos es:", promedio);
console.log("El sueldo mas alto es:", sueldoMaximo);