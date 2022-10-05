let combinacion, numero;
combinacion = "";
numero = 0;

for (let i = 0; i < 6; i++) {
    numero = Math.random() * 49;
    numero = Math.floor(numero)+1;
    combinacion += (numero + " ");
}

console.log(combinacion);