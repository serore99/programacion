
function calcularArea1(base, altura) {
    let area;
    area = base * altura;
    console.log("El area es", area);
}

function calcularArea2(base, altura) {
    return base * altura;
}

let b = 20, a = 40;
calcularArea1(b, a);
calcularArea1(45,56);

let valor = calcularArea2(45,67);
console.log("El resultado es",valor);
console.log("El resultado es", calcularArea2(2,5));