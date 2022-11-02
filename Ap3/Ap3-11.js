function primo(x) {
    let prim = true;
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            prim = false;
        }
    }
    return prim;
}

console.log("Los numeros primos del 1 al 1000 son:");

for (let i = 1; i <= 1000; i++) {
    if (primo(i)) {
        console.log(i);
    }
}