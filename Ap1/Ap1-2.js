const readlyneSync = require("readline-sync");
let ex1, ex2, ex3, promedio;
ex1 = readlyneSync.questionFloat("Cual es la nota del primer examen? ");
ex2 = readlyneSync.questionFloat("Cual es la nota del segundo examen? ");
ex3 = readlyneSync.questionFloat("Cual es la nota del tercer examen? ");

promedio = (ex1 + ex2 + ex3) / 3;
console.log("Tu nota media es:", promedio);