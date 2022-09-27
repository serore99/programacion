const readlyneSync = require("readline-sync");

let num1, num2, num3;

num1 = readlyneSync.questionInt("Dame el primer numero: ");
num2 = readlyneSync.questionInt("Dame el segundo numero: ");
num3 = readlyneSync.questionInt("Dame el tercer numero: ");

if (num1 == num2 || num2 == num3 || num1 == num3) {
    console.log("Los numeros suministrados no son validos");
} else {
    console.log("El mayor numero de los tres es ", Math.max(num1, num2, num3));
}