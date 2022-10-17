function producto(x, y) {
    let res = 0;
    for (y; y > 0; y--) {
        res += x;
    }
    return res;
}

const readlyneSync = require("readline-sync");
let num1, num2;

num1 = readlyneSync.questionInt("Dame el primer numero: ");
num2 = readlyneSync.questionInt("Dame el segundo numero: ");

console.log("El producto de ambos numeros es", producto(num1, num2));