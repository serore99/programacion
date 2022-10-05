const readlyneSync = require("readline-sync");
let mult, i;
let resultado = 0;

mult = readlyneSync.questionInt("Que numero quieres multiplicar? ");
i = readlyneSync.questionInt("Por cuanto lo quieres multiplicar? ");

for (i; i > 0; i--) {
    resultado += mult;
}

console.log("El resultado es", resultado);