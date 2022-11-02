//Funcion para calcular x
function calculaCoordX(v, i, t) {
    return v * Math.cos(i) * t;
}
//Funcion para calcular y
function calculaCoordY(v, i, t) {
    let a = 40;
    return (v * Math.sin(i) * t) - 1 / 2 * a * t * t;
}

//Declaracion de todas las variables
const readlyneSync = require("readline-sync");
let velocidad, inclinacion, tiempo, x, y, maxY;

//Inicializamos todas las variables usando el readlyne para inclinacion y velocidad, tiempo lo ponemos al primer tiempo que queremos evaluar
//por ultimo inicializamos los maximos a 0 para poder guardarlos
inclinacion = readlyneSync.questionFloat("Introduce el angulo del tiro: ");
velocidad = readlyneSync.questionFloat("Introduce la velocidad inicial del tiro: ");
tiempo = 0.1, maxY = 0;

//Grupo de consoles log para construir la tabla
console.log("Tabla de lanzamiento para un tiro de inclinacion:", inclinacion, "radianes y velocidad:", velocidad, "m/s");
console.log("Inicio de lanzamiento");
console.log("=======================");
console.log("TIEMPO POSICION_X POSICION_Y");

//Bucle que parará cuando "y" sea menor que 0
do {
    x = calculaCoordX(velocidad, inclinacion, tiempo);
    y = calculaCoordY(velocidad, inclinacion, tiempo);
    //Guardamos los valores de "y" en caso de que sean los maximos e imprimimos por pantalla
    if (maxY < y) { maxY = y; }
    console.log(tiempo.toFixed(2) + "\t" + x.toFixed(2) + "\t" + y.toFixed(2));
    //Aumentamos el tiempo en 0.1
    tiempo += 0.1
} while (y > 0);

//Imprimimos el final de tabla junto a los valores maximos, x sera siempre su ultimo valor
console.log("Fin del lanzamiento");
console.log("=======================");
console.log("Altura maxima:", maxY.toFixed(2), "--- Distancia maxima:", x.toFixed(2));