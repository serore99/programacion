// Crea un programa que teniendo en cuenta una nota
// de examen, muestre por pantalla si se ha aprobado o no.
// Para aprobar, la nota debe ser mayor que 5. 
// La nota debe estar entre 0 y 10

let nota = 6;  // Partimos de la siguiente nota como dato de entrada

// Compruebo si la nota está en el rango válido 0 a 10
if (nota>0 && nota<10) {
    // la nota es válida
    if (nota >= 5) 
        console.log('Enhorabuena. Has aprobado!!!');
    else    
        console.log('Mala suerte. No has logrado el aprobado.');
} else 
    // la nota no es válida
    console.log('La nota introducida no es válida. Debe estar entre 0 y 10');


