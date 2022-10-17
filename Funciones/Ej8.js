
function tipoTriangulo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {
        return "Equilatero";
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        return "Isosceles";
    } else {
        return "Escaleno";
    }
}

const readlyneSync = require("readline-sync");

let lado1, lado2, lado3;
lado1 = readlyneSync.questionFloat("Dame la medida del lado 1: ");
lado2 = readlyneSync.questionFloat("Dame la medida del lado 2: ");
lado3 = readlyneSync.questionFloat("Dame la medida del lado 3: ");

console.log("El triangulo es " + tipoTriangulo(lado1, lado2, lado3));