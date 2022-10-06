let cont = 1;
let primo = true;
let i = 2;
console.log("Los numeros primos del 2 al 1000 son");
console.log(i);

while (cont < 50) {
    i++
    primo = true;
    for (let j = 2; j <= i / 2 + 1; j++) {
        if (i % j == 0) {
            primo = false;
        }
    }
    if (primo) {
        console.log(i);
        cont++;
    }

}