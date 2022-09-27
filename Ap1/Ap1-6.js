const readlyneSync = require("readline-sync");
let edad1, edad2;

edad1 = readlyneSync.questionInt("Que edad tiene el primer hermano? ");
edad2 = readlyneSync.questionInt("Que edad tiene el segundo hermano? ");

if (edad1 < edad2) {
    console.log("El hermano mayor tiene " + edad2 + " años y es " + (edad2 - edad1) + " años mayor que el pequeño");
} else {
    console.log("El hermano mayor tiene " + edad1 + " años y es " + (edad1 - edad2) + " años mayor que el pequeño");
}