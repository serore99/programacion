
let clasificacion=["Ana","Oswaldo","Raul","Celia","Maria","Antonio"];

for(let i=0;i<clasificacion.length;i++){
    console.log("Posicion "+(i+1)+": "+clasificacion[i]);
}

clasificacion[2] = "Celia";
clasificacion[3] = "Raul";

clasificacion.pop();

clasificacion.splice(1,0,"Roberto","Amaya");

clasificacion.unshift("Marta");

console.log("Tras las modificaciones");
console.log("========================");
for(let i=0;i<clasificacion.length;i++){
    console.log("Posicion "+(i+1)+": "+clasificacion[i]);
}