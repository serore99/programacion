let suma;

console.log("Los numeros perfectos son:");
for (let i = 1; i <= 5000; i++) {
    suma = 0;
    for (let j = 1; j < (i / 2 + 1); j++) {
        if (i % j == 0) {
            suma += j;
        }
    }
    if (i == suma) {
        console.log(i);
    }
}