function rellenarArray(){
    let num;
    let a = new Array(10);
    for(let i=0; i<a.length; i++){
        num = Math.random()*20;
        num = Math.round(num);
        a[i]=num;
    }
    return a;
}

function sumarArrays(a1,a2){
    let res=[];
    for(let i =0; i<a1.length; i++){
        res.push(a1[i]+a2[i]);
    }
    return res;
}

let numeros1 = [];
let numeros2 = [];
let suma = [];
numeros1= rellenarArray();
numeros2= rellenarArray();
suma = sumarArrays(numeros1,numeros2);

console.log("El array 1 contiene: "+numeros1);
console.log("El array 2 contiene: "+numeros2);
console.log("La suma entre ellos da como resultado: "+suma);