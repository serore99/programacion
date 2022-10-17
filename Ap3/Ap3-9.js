function calculaSuma(x, y) {
    let res = 0;
    for (let i = x; i <= y; i++) {
        if (i % 2 == 0) {
            res += i;
        }
    }
    return res;
}

const readlyneSync = require("readline-sync");
let num1, num2;

num1 = readlyneSync.questionInt("Dame el primer numero: ");
num2 = readlyneSync.questionInt("Dame el segundo numero: ");

if (num2 > num1) {
    console.log("La suma de sus pares es", calculaSuma(num1, num2));
} else {
    console.log("El segundo numero tiene que ser mas grande");
}