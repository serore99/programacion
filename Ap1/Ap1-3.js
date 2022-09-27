const readlyneSync = require("readline-sync");
let num;
num = readlyneSync.questionInt("Dame un numero: ");

if (num % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}