const readlyneSync = require("readline-sync");
let num1, num2, aux;
let res = 0;

num1 = readlyneSync.questionInt("Introduce el primer numero: ");
num2 = readlyneSync.questionInt("Introduce el segundo numero: ");

if (num1 >= 0 && num2 >= 0) {
    if (num1 > num2) {
        aux = num1;
        num1 = num2;
        num2 = aux;
    }

    while (num1 < num2) {
        if (num1 % 2 != 0) {
            res += num1;
        }
        num1++;
    }

    console.log("El resultado de la suma es:", res);
} else {
    console.log("Los numeros tienen que ser positivos")
}