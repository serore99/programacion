const readlyneSync = require("readline-sync");

let numero = readlyneSync.questionInt("Introduce un numero para hacer la tabla de multiplicar: ");

console.log("Tabla del ", numero);
console.log("----------------------");
// con for
for (let i = 1; i <= 10; i++) {
    console.log(numero, "X", i, "=", numero * i);
}

//con while
/* let j = 1;
while (j <= 10) {
    console.log(numero, "X", j, "=", numero * j);
    j++;
} */

//con do while
/* let k = 1;
do {
    console.log(numero, "X", k, "=", numero * k);
    k++;
} while (k <= 10); */