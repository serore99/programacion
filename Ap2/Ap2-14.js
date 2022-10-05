const readlyneSync = require("readline-sync");

let numero, respuesta, intentos;
intentos=0;

numero = Math.random() * 100;
numero = Math.floor(numero) + 1;
do{
    respuesta=readlyneSync.questionInt("En que numero esto pensando? ");
    if(respuesta>numero){
        console.log("Tu numero es mayor al que estoy pensando");
    }
    if(respuesta<numero){
        console.log("Tu numero es menor al que estoy pensando");
    }
    intentos++;
}while(numero!=respuesta);

console.log("Felicidades! Has adivinado que el numero que pensaba es",numero,"te ha costado",intentos,"intentos");