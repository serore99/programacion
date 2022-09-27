const readlyneSync = require("readline-sync");
let dist, vel, tiempo;
vel = readlyneSync.questionFloat("A que velocidad va el movil? ");
tiempo = readlyneSync.questionFloat("Por cuanto tiempo se mueve el movil? ");

dist = vel * tiempo;
console.log("El movil se mueve " + dist + " metros");