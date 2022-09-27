// Calculo de una ecuación de 2º grado

let a,b,c;
let primeraSol, segundaSol, raiz;

a= 3;
b= 5;
c= 2;
raiz = Math.sqrt(b*b-4*a*c);

primeraSol = (-b + raiz)/(2*a);
segundaSol = (-b - raiz)/(2*a);

console.log("Primer solución: ",primeraSol.toFixed(2));
console.log("Segunda solución: ",segundaSol.toFixed(2));