//No contemplar el 2 y los siguientes recorrer desde el 2 hasta n/2 +1 comprobando si su division da resto 0, si no salta al siguiente
let primo = true;
let i = 2;
console.log("Los numeros primos del 2 al 1000 son");
console.log(i);
i++
for (i; i <= 1000; i++) {
    primo = true;
    for (let j = 2; j <= i / 2 + 1; j++) {
        if (i % j == 0) {
            primo = false;
        }
    }
    if (primo) {
        console.log(i);
    }
}