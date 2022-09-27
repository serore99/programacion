let nota = 9;
let tipoNota = "";

if (nota >= 0 && nota <= 10) {
    if (nota < 5) {
        tipoNota = "insuficiente";
    } else if (nota < 6) {
        tipoNota = "suficiente";
    } else if (nota < 7) {
        tipoNota = "bien";
    } else if (nota < 9) {
        tipoNota = "notable";
    } else {
        tipoNota = "sobresaliente";
    }
    console.log("Tu nota es un " + tipoNota);
} else {
    console.log("La nota no es correcta");
}