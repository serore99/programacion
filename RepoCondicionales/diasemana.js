// Crea un programa que dado el nombre del dia de la semana
// muestre por pantalla el número correspondiente, teniendo
// en cuenta que el lunes sería el primer día (1) y el 
// domingo el último (7)

let nombreDia = 'MIERCOLES';
nombreDia = nombreDia.toLowerCase();

switch (nombreDia) {
    case 'lunes': {
        console.log('Eres el día 1');
        break;
    }
    case 'martes': {
        console.log('Eres el día 2');
        break;
    }
    case 'miercoles': {
        console.log('Eres el día 3');
        break;
    }
    case 'jueves': {
        console.log('Eres el día 4');
        break;
    }
    case 'viernes': {
        console.log('Eres el día 5');
        break;
    }
    case 'sabado': {
        console.log('Eres el día 6');
        break;
    }
    case 'domingo': {
        console.log('Eres el día 7');
        break;
    }
    default: {
        console.log('No eres ningún día ');
    }
}
