const readlyneSync = require("readline-sync");

let memoria, res;
memoria = readlyneSync.questionInt("Dame la capacidad del disco duro en GB: ");


res = memoria * 1024 / 700;
console.log("Haran falta " + Math.ceil(res) + " discos");