const readlyneSync = require("readline-sync");
let frase1,frase2;

frase1= readlyneSync.question("Escribeme una frase: ");
frase2= readlyneSync.question("Escribeme otra frase: ");

if(frase1==frase2){
    console.log("Las frases son iguales");
}else{
    console.log("Las frases no son iguales");
}