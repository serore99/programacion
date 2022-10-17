function dameNumero(){
    let numero;
    numero = Math.random()*49;
    numero = Math.round(numero);
    return numero;
}

let res;
res = "La combinacion de la primitiva es:";

for(let i=1;i<=6;i++){
    res+=" "+ dameNumero();
}

console.log(res);