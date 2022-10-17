function calculaPuntos(x, y, z) {
    return (3 * x + 1 * y + 0 * z);
}

const readlyneSync = require("readline-sync");
let ganados, empatados, perdidos;

ganados = readlyneSync.questionInt("Cuantos partidos se han ganado? ");
empatados = readlyneSync.questionInt("Cuantos partidos se han empatado? ");
perdidos = readlyneSync.questionInt("Cuantos partidos se han perdido? ");

console.log("El total de puntos es", calculaPuntos(ganados, empatados, perdidos));