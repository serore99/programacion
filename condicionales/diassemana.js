let dia = 0;
let nombre = "lunes";
nombre = nombre.toLowerCase();
switch (nombre) {
    case "lunes":
        dia = 1;
        break;
    case "martes":
        dia = 2;
        break;
    case "miercoles":
        dia = 3;
        break;
    case "jueves":
        dia = 4;
        break;
    case "viernes":
        dia = 5;
        break;
    case "sabado":
        dia = 6;
        break;
    case "domingo":
        dia = 7;
        break;
    default:
        console.log("Eso no es un dia de la semana");
}

if (dia >= 1 && dia <= 7) {
    console.log("Hoy es " + nombre + " por lo tanto es el dia numero " + dia + " de la semana");
}