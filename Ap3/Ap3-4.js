function numRomano(x) {
    switch (x) {
        case 1:
            return "I";
        case 2:
            return "II";
        case 3:
            return "III";
        case 4:
            return "IV";
        case 5:
            return "V";
        case 6:
            return "VI";
        case 7:
            return "VII";
        case 8:
            return "VIII";
        case 9:
            return "IX";
        case 10:
            return "X";
    }
}

const readlyneSync = require("readline-sync");
let numero;

numero = readlyneSync.questionInt("Dame un numero entre 1 y 10: ");
if (numero < 1 || numero > 10) {
    console.log("El numero no es correcto, tiene que estar entre 1 y 10");
} else {
    console.log("El numero en numeros romanos es", numRomano(numero));
}