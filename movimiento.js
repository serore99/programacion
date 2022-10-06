const readlyneSync = require("readline-sync");
let x = 5, y = 5, salir, opcion;
salir = false;

do {
    console.log("Movimientos permitidos");
    console.log("======================");
    console.log("1. Arriba.");
    console.log("2. Abajo");
    console.log("3. Izquierda");
    console.log("4. Derecha");
    console.log("5. Salir / Acabar");
    opcion = readlyneSync.questionInt("Introduce Opcion (1..5): ");
    switch (opcion) {
        case 1:
            if (y < 10) {
                y++;
            } else {
                console.log("Estas en el limite no se puede subir");
            }
            break;
        case 2:
            if (y > 1) {
                y--;
            } else {
                console.log("Estas en el limite no se puede bajar");
            }
            break;
        case 3:
            if (x > 1) {
                x--;
            } else {
                console.log("Estas en el limite no se puede mover a la izquierda");
            }
            break;
        case 4:
            if (x < 10) {
                x++;
            } else {
                console.log("Estas en el limite no se puede mover a la izquierda");
            }
            break;
        case 5:
            salir = true;
            break;
        default:
            console.log("Introduce un numero entre 1 y 5");
    }
    console.log("\nCoord.X =", x, "-- Coord.Y =", y);
    readlyneSync.keyInPause("<Pulsa tecla>");
} while (!salir)

console.log("Saliendo...");