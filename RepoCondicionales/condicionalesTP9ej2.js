// Crea un programa que dado el nombre del dia de la semana (SUMINISTRADO POR TECLADO)
// muestre por pantalla el número correspondiente, teniendo
// en cuenta que el lunes sería el primer día (1) y el 
// domingo el último (7)

let readlnSync = require('readline-sync');
let nombreDia = readlnSync.question('Dime el nombre del dia de la semana: ');
nombreDia = nombreDia.toLowerCase()     // convierto el nombre de dia a minúsculas.
                                        // también es posible usar .toUpperCase (a mayúsculas)
switch (nombreDia) {
    case 'lunes':
        console.log(nombreDia + ' es el día 1 de la semana');
        break;
    case 'martes':
        console.log(nombreDia + ' es el día 2 de la semana');
        break;
    case 'miercoles':
        console.log(nombreDia + ' es el día 3 de la semana');
        break;
    case 'jueves':
        console.log(nombreDia + ' es el día 4 de la semana');
        break;
    case 'viernes':
        console.log(nombreDia + ' es el día 5 de la semana');
        break;
    case 'sabado':
        console.log(nombreDia + ' es el día 6 de la semana');
        break;
    case 'domingo':
        console.log(nombreDia + ' es el día 7 de la semana');
        break;
    default:
        console.log(nombreDia + ' no es un día válido de la semana');
}
