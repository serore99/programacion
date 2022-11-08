/**
 * Rellena un array que le pasamos con numeros del 1 al 49
 * @param {Array} a
 * @returns {void} 
 */
function generaNumeros(a){
    let numero;
    for(let i=0; i<a.length;i++){
        numero = Math.random()*49;
        numero = Math.round(numero);
        a[i]=numero;
    }
}

/**
 * Dado un array nos busca si tiene valores repetidos devolviendo un boolean false en caso de que si
 * @param {Array} a 
 * @returns {boolean}
 */
function combinacionValida(a){
    for(let i =0;i<a.length;i++){
        for(let j= i+1;j<a.length;j++){
            if(a[i]==a[j]){
                return false;
            }
        }
    }
    return true;
}

/**
 * Ordena los valores de un array de menor a mayor
 * @param {Array} a 
 */
function ordenaListaNumeros(a) {
    let aux
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
            }
        }
    }
}

let combinacion = new Array(6);
do{
    generaNumeros(combinacion);
}while(!combinacionValida(combinacion))
ordenaListaNumeros(combinacion);
console.log("La combinacion de Loteria es: "+combinacion);