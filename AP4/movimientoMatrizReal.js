/**
 * Contruye a base de console.log el menu de opciones ademas de devolver el int que se pude por pantalla
 * @returns {number} 
 */
function contruyeTabla() {
    console.log("Movimientos permitidos");
    console.log("======================");
    console.log("1. Arriba.");
    console.log("2. Abajo.");
    console.log("3. Izquierda.");
    console.log("4. Derecha.");
    console.log("5. Visualiza el tablero.");
    console.log("6. Salir / Acabar.")
    let res = readlineSync.questionInt("Introduce una opcion (1..6): ");
    return res;
}

/**
 * Dado el valor x e y construye y muestra una tabla donde colocara una X en las coordenadas dadas
 * @param {number} x 
 * @param {number} y 
 */
function visualizaTabla(x, y) {
    console.log("Coord.x = " + x + "\t-- Coord.Y = " + y);
    let a = [];
    let aux;
    for (let i = 0; i < 10; i++) {
        aux = [];
        for (let j = 0; j < 10; j++) {

            if (i == y - 1 && j == x - 1) {
                aux[j] = 'X';
            } else {
                aux[j] = 'O';
            }

        }
        a[i] = aux;
        console.log(a[i].toString());
    }

}

const readlineSync = require("readline-sync");
let opcion;
let x = 6, y = 6;
let salir = false;

do {
    opcion = contruyeTabla();
    switch (opcion) {
        case 1:
            if (y > 1) {
                y--;
            }
            visualizaTabla(x, y);
            break;
        case 2:
            if (y < 10) {
                y++;
            }
            visualizaTabla(x, y);
            break;
        case 3:
            if (x > 1) {
                x--;
            }
            visualizaTabla(x, y);
            break;
        case 4:
            if (x < 10) {
                x++;
            }
            visualizaTabla(x, y);
            break;
        case 5:
            visualizaTabla(x, y);
            break;
        case 6:
            salir = true;
            break;
        default:
            console.log("El valor introducido no es correcto");

    }
    readlineSync.keyInPause("Pulsa para continuar");
} while (!salir)
