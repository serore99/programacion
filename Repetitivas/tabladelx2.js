const readlyneSync = require("readline-sync");

let numero = readlyneSync.questionInt("Introduce un numero para hacer la tabla de multiplicar: ");

console.log("Tabla del", numero);
console.log("----------------------");
// con for
for (let i = 10; i >= 1; i--) {
    console.log(numero, "X", i, "=", numero * i);
}

//con while
/* let j = 10;
while (j >= 1) {
    console.log(numero, "X", j, "=", numero * j);
    j--;
} */

//con do while
/* let k = 10;
do {
    console.log(numero, "X", k, "=", numero * k);
    k--;
} while (k >= 1); */