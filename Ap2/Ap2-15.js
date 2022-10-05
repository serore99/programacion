const readlyneSync = require("readline-sync");
let continuar,nombre,año,pago;

do{
    nombre=readlyneSync.question("Cual es el nombre del empleado? ");
    año=readlyneSync.questionInt("Cuantos anyos llevas trabajando? ");
    if(año>=3&&año<10){
        pago=100*año;
    }else if(año<=15){
        pago=115*año;
    }else{
        pago=130*año;
    }
    console.log("El empleado "+nombre+" se le pagara",pago,"por sus",año,"anyos de servicio");
    continuar=readlyneSync.keyInYN("Desea calcular la gratificacion de otor empleado? ");
}while(continuar);