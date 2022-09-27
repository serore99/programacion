// Crea un programa que teniendo en cuenta una nota
// de examen, indique si la nota es baja, media o alta.
// Una nota baja es de 0 hasta 5, media es mayor que 5 hasta 7 y
// alta mayor que 7. 
// Incluye la condición inicial para que la nota esté entre 0 y 10,
// En caso contrario debe indicar que la nota no es válida.

let nota = 777; // definimos variable 

switch (nota) { // depende del valor de la variable ira comprobando uno a uno
    case 0: 
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
        console.log('nota baja');
        break;

    case 6: 
    case 7:
        console.log('nota media');
        break;

    case 8: 
    case 9: 
    case 10: 
        console.log('alta');
        break;

    default: 
        console.log('la nota introducida no es correcta');
}

