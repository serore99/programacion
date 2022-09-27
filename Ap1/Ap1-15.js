const readlyneSync = require("readline-sync");
let num, res;

num = readlyneSync.questionInt("Dame un numero del 1 al 10: ");

switch (num) {
    case 1:
        res = "I";
        break;
    case 2:
        res = "II";
        break;
    case 3:
        res = "III";
        break;
    case 4:
        res = "IV";
        break;
    case 5:
        res = "V";
        break;
    case 6:
        res = "VI";
        break;
    case 7:
        res = "VII";
        break;
    case 8:
        res = "VIII";
        break;
    case 9:
        res = "IX";
        break;
    case 10:
        res = "X";
        break;
    default:
        console.log("El numero no es correcto, tiene que estar entre 1 y 10");
}

if (num >= 1 && num <= 10) {
    console.log("El numero escrito en numeros romanos es: " + res);
}