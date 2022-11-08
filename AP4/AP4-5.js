
function rellenarArray(a) {
    const readlineSync = require("readline-sync");
    let numero;
    do {
        numero = readlineSync.questionInt("Introduce valores al array (introduce 0 para salir)");
        if (numero != 0) {
            a.push(numero);
        }
    } while (numero != 0);
    console.log("Saliendo....");
}

function productoArrays(a1, a2) {
    if (a1.length != a2.length) {
        console.log("Los arrays no tienen la misma longitud");
        return 0;
    } else {
        let res = [];
        for (let i = 0; i < a1.length; i++) {
            res.push(a1[i] * a2[i]);
        }
        return res;
    }
}

let numeros1 = [], numeros2 = [];
let producto;
rellenarArray(numeros1);
rellenarArray(numeros2);
producto = productoArrays(numeros1, numeros2);
if (producto != 0) {
    console.log("El producto de ambos array da como resultado: " + producto);
}
