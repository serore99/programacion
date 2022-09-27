// Crea un programa que teniendo en cuenta una nota
// de examen, muestre por pantalla si se ha aprobado o no.
// Para aprobar, la nota debe ser mayor que 5. 
// La nota debe estar entre 0 y 10

let nota = -89; // supongo que la nota es 8.

// valido primero que la nota está entre 0 y 10
if (nota>=0 && nota<=10) {
    // La nota es válida
    if (nota >= 5) {
        console.log('Enhorabuena. Has aprobado');
        console.log('Sigue así!!!');
    } else {
        console.log('Lo siento. Has suspendido');
        console.log('Inténtalo de nuevo...');
    }
} else {
    console.log('La nota no es correcta. Debe estar entre 0 y 10');
}






