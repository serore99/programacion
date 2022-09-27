const readlyneSync = require("readline-sync");
let num;
num = readlyneSync.questionInt("Dame un numero: ");

if (num % 10 == 0) {
    console.log("El numero es multiplo de 10");
} else {
    console.log("El numero no es multiplo de 10");
}