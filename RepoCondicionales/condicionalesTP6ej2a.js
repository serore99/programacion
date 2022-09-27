// Crea un programa que teniendo en cuenta una nota
// de examen, indique si la nota es baja, media o alta.
// Una nota baja es de 0 hasta 5, media es mayor que 5 hasta 7 y
// alta mayor que 7. 
// Incluye la condición inicial para que la nota esté entre 0 y 10,
// En caso contrario debe indicar que la nota no es válida.

let nota = 7;  // Partimos de la siguiente nota como dato de entrada
let tipoNota;

// Compruebo si la nota está en el rango válido 0 a 10
if (nota>0 && nota<10) {
    // la nota es válida
    if (nota < 5) 
        tipoNota = 'BAJA'
    else if (nota < 7)
            tipoNota = 'MEDIA'
        else    
            tipoNota = 'ALTA';
    console.log('Tienes una nota ' + tipoNota);                
} else 
    // la nota no es válida
    console.log('La nota introducida no es válida. Debe estar entre 0 y 10');


