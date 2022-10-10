function calcularMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

function validaNumeros(num1, num2, num3) {
    if (num1 == num2 || num1 == num3|| num2 == num3) {
        return false;
    }else{
        return true;
    }
}

const readlyneSync = require("readline-sync");
let n1, n2, n3;

n1 = readlyneSync.questionInt("Introduce el numero 1: ");
n2 = readlyneSync.questionInt("Introduce el numero 2: ");
n3 = readlyneSync.questionInt("Introduce el numero 3: ");

if (validaNumeros(n1, n2, n3)) {
    console.log("El mayor es", calcularMayor(n1, n2, n3));
} else {
    console.log("Los datos son incorrectos");
}