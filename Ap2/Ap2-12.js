const readlyneSync = require("readline-sync");
let contraseña, i;
let correcta = false;

for (i = 1; i <= 5 && !correcta; i++) {
    contraseña = readlyneSync.question("Introduce la contrasenya: ");
    contraseña = contraseña.toUpperCase();
    if (contraseña == "ALDEBARAN") {
        correcta = true;
    }
}

if (correcta) {
    console.log("La contrasenya es correcta");
} else {
    console.log("La contrasenya es incorrecta");
}