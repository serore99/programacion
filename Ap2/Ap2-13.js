const readlyneSync = require("readline-sync");
let min,max,temp;
min=99;
max=0;

do{
    temp=readlyneSync.questionInt("Introduce la temperatura(introduce 99 para salir): ");
    if(temp<min&&temp!=99){
        min= temp;
    }
    if(temp>max && temp!=99){
        max=temp;
    }
}while(temp!=99);

console.log("La temperatura maxima registrada ha sido",max,"grados y la temperatura minima ha sido",min,"grados");