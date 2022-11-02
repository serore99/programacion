function introduceDatos(limite) {
    const readlyneSync = require("readline-sync");
    let valores = new Array(limite);
    for (let i = 0; i < valores.length; i++) {
        valores[i] = readlyneSync.questionInt("Elemento " + (i + 1) + ": ");
    }
    return valores;
}

function visualizaDatos(valores) {
    valores.forEach((element, index) => {
        console.log(index + ":", element);
    });
}

let numeros = [];
numeros = introduceDatos(10);
visualizaDatos(numeros);