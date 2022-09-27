// Crea un programa que teniendo en cuenta una nota
// de examen (SUMINISTRADA POR TECLADO), 
// indique si la nota es insuficiente, suficiente, bien, notable o sobresaliente.
// Los rangos son los siguientes: insuficiente [0..5[, suficiente [5..6[,  
// bien [6..7[, notable [7..9[, sobresaliente [9..10].
// En caso que la nota no esté entre 0 y 10 debe indicar que la nota no es válida.


// Pedimos la nota como dato de entrada
let readlnSync = require('readline-sync');
var nota = readlnSync.question('Introduce la nota: ');

let rangoNota;

if (nota<0 || nota > 10) 
    // la nota es inválida
    console.log('La nota introducida no es válida. Debe estar entre 0 y 10')
else { 
    // la nota es válida
    if (nota>=0 && nota<5) rangoNota = 'Insuficiente';
    if (nota>=5 && nota<6) rangoNota = 'Suficiente';
    if (nota>=6 && nota<7) rangoNota = 'Bien';
    if (nota>=7 && nota<9) rangoNota = 'Notable';
    if (nota>=9) rangoNota = 'Sobresaliente';
    console.log('Tienes un ' + rangoNota);
}



