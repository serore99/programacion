//con for
const readlyneSync = require("readline-sync");

for (let i = 1; i <= 10; i++) {
    console.log("\nTabla del", i);
    console.log("--------------------");
    for (let j = 1; j <= 10; j++) {
        console.log(i, "x", j, "=", i * j);
    }
    readlyneSync.keyInPause("Pulsa una tecla para continuar");
    console.clear();
}

//con while
/* let i = 1;
while (i <= 10) {
    let j = 1;
    console.log("Tabla del", i);
    console.log("--------------------");
    while (j <= 10) {
        console.log(i, "x", j, "=", i * j);
        j++
    }
    console.log("");
    i++;
} */

//con do while
/* let i = 1;
do {
    let j = 1;
    console.log("Tabla del", i);
    console.log("--------------------");
    do {
        console.log(i, "x", j, "=", i * j);
        j++;
    } while (j <= 10);
    console.log("");
    i++;
} while (i <= 10); */