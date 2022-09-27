const readlyneSync = require("readline-sync");
let ganadas, perdidas, empatadas, puntos;

ganadas = readlyneSync.questionInt("Introduce la cantidad de partidos ganados: ");
perdidas = readlyneSync.questionInt("Introduce la cantidad de partidos perdidos: ");
empatadas = readlyneSync.questionInt("Introduce la cantidad de partidos empatados: ");

puntos = ganadas * 3 + perdidas * 0 + empatadas;
console.log("El equipo ha ganado " + puntos + " puntos");