const readlyneSync = require("readline-sync");
let año, bisiesto;

año = readlyneSync.questionInt("Introduce el numero de un anyo: ");

if (año % 4 == 0) {
    if (año % 100 == 0) {
        if (año % 400 == 0) {
            bisiesto = true;
        } else {
            bisiesto = false;
        }
    } else {
        bisiesto = true;
    }
} else {
    bisiesto = false;
}

if (bisiesto) {
    console.log("Bisiesto");
} else {
    console.log("No bisiesto");
}