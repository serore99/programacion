const readlyneSync = require("readline-sync");

let num1,num2;

num1= readlyneSync.questionInt("Dame el primer numero: ");
num2 = readlyneSync.questionInt("Dame el segundo numero: ");

if (num2 ==0){
    console.log("El divisor no puede ser 0");
}else{
    console.log("El resultado es: ", (num1/num2));
}