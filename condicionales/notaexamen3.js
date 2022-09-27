//Resolucion mia
let nota = 10; //Valor inicial de la nota
if (nota > 10 || nota < 0) {
    console.log("La nota no es correcta")
}
else {
    if (nota <= 5) {
        console.log("La nota es baja");
    } else if (nota <= 7) {
        console.log("La nota es media");
    } else {
        console.log("La nota es alta");
    }
}

//Ejemplo profe

// let nota = 10;
// let tipoNota = "";
// if (nota > 10 || nota < 0) {
//     console.log("La nota no es correcta")
// }
// else {
//     if (nota <= 5) tipoNota = "baja";
//     if (nota > 5 && nota <= 7) tipoNota = "media";
//     if (nota > 7) tipoNota = "alta";
//     console.log("Tu nota es " + tipoNota);
// }

//Ejemplo profe 2

// let nota = 10;
// let tipoNota = "";
// if (nota > 10 || nota < 0) {
//     console.log("La nota no es correcta")
// }
// else {
//     if (nota <= 5) {
//         tipoNota = "baja";
//     }
//     else if (nota <= 7) {
//         tipoNota = "media";
//     }
//     else {
//         tipoNota = "alta";
//     }
//     console.log("Tu nota es " + tipoNota);
// }