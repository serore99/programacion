function precioFinal(p,d){
    let res;
    res = p - p*(d/100);
    res = res + res*0.16;
    return res;
}

const readlyneSync = require("readline-sync");
let precio,descuento;
do{
    precio = readlyneSync.questionFloat("Dame el precio inicial: ");
    if(precio !=0){
        descuento = readlyneSync.questionInt("Dame el descuento(entre 0 y 20): ");
        if(descuento>=0 && descuento<=20){
            let final = precioFinal(precio,descuento);
            console.log("El precio final es",final.toFixed(2),"€");
        }else{
            console.log("El descuento tiene que estar entre 0 y 20")
        }
    }
}while (precio!=0);