

const read = require('readline-sync');
let estacion = read.question("¿Cual es tu estacion del anyo preferida?");

switch (estacion) {
  
  case "primavera":
    // si la variable estacion contiene la cadena de texto "primavera"
    // se ejecutará este bloque de código
    console.log('La primavera');
    break;
    
  case "verano":
    // si la variable estacion contiene la cadena de texto "verano"
    // se ejecutará este bloque de código
    console.log('El verano');
    break;
    
  case "otoño":
    // si la variable estacion contiene la cadena de texto "otoño"
    // se ejecutará este bloque de código
    console.log('El otoño');
    break;
    
  case "invierno":
    // si la variable estacion contiene la cadena de texto "invierno"
    // se ejecutará este bloque de código
    console.log('El invierno');
    break;
    
  default:
    // si la variable estacion no contiene ningún nombre válido
    // se ejecutará este bloque de código
    console.log('no es una estación del año');
    
}