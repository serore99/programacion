const readlyneSync = require("readline-sync");
let l1, l2, l3;

l1 = readlyneSync.questionInt("Dame la medida del primer lado: ");
l2 = readlyneSync.questionInt("Dame la medida del segundo lado: ");
l3 = readlyneSync.questionInt("Dame la medida del tercer lado: ");

if (l1 == l2 || l2 == l3 || l1 == l3) {
    if (l1 == l2 && l1 == l3) {
        console.log("El triangulo es equilatero");
    } else {
        console.log("El triangulo es isosceles");
    }
} else {
    console.log("El triangulo es escaleno");
}