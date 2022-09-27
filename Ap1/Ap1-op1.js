const readlyneSync = require("readline-sync");
let mins, precio, lim1, lim2;

mins = readlyneSync.questionInt("Cuantos minutos has hablado este mes? ");
precio = 10;
lim1 = 180;
lim2 = 240;

if (mins >= 0) {
    if (mins > lim1) {
        
        if (mins > lim2) {
            precio += (lim2 - lim1) * 0.1 + (mins - lim2) * 0.2;
        } else {
            precio += (mins - lim1) * 0.1;
        }

    }
    precio = precio.toFixed(2);
    console.log("El precio a pagar es: " + precio + " euros");
} else {
    console.log("El numero de minutos debe ser mayor o igual a 0");
}

