// Crea un programa que teniendo en cuenta una nota
// de examen, indique si la nota es baja, media o alta.
// Una nota baja es de 0 hasta 5, media es mayor que 5 hasta 7 y
// alta mayor que 7. 
// Incluye la condición inicial para que la nota esté entre 0 y 10,
// En caso contrario debe indicar que la nota no es válida.

let nota = 4; // supongo valor incial
let tipoNota='';

if (nota<0 || nota>10) {
    // nota no valida
    console.log('La nota no es válida. Debe estar entre 0 y 10');    
} else {
    // La nota está entre 0 y 10
    if (nota<=5) tipoNota='Baja';
    if (nota>5 && nota<=7) tipoNota='Media';
    if (nota>7 && nota<=10) tipoNota = 'Alta';
    console.log('Tu nota es una nota ' + tipoNota);
    console.log('Tu nota es una nota',tipoNota);
   
}

