
function visualizaTabla(tabla) {
    console.log("\nTabla del", tabla);
    console.log("========================");
    for (let i = 1; i <= 10; i++) {
        console.log(tabla, "x", i, "=", tabla * i);
    }
}

for (let num = 1; num <= 10; num++) {
    visualizaTabla(num);
}