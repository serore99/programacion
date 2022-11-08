const readlineSync = require("readline-sync");

function usoMenu(){
    console.clear();
    console.log("LISTA ESPERA - Restaurante Florida's Hollywood")
    console.log("==============================================");
    console.log("1. Agregar nuevo cliente a la lista.");
    console.log("2. Siguiente cliente ocupa mesa.");
    console.log("3. Borrar cliente impaciente.");
    console.log("4. Ver turno cliente.");
    console.log("5. Ver estado de la lista de espera.");
    console.log("6. Guardar la lista de espera.");
    console.log("7. Recuperar la lista de espera.");
    console.log("8. Salir del programa.");
    let op = readlineSync.questionInt("Introduce opcion (1..8): ");
    return op;
}

function agregarCliente(a){
    console.log("Agrego cliente a la lista.")
    let cliente = readlineSync.question("Introduce el nombre del cliente: ");
    cliente = cliente.toUpperCase();
    let repetido = false;
    for (let i =0; i<a.length;i++){
        if(a[i]==cliente){
            repetido=true;
        }
    }
    if(repetido){
        console.log("Ya hay un cliente con este nombre en la lista. No se puede agregar");
    }else{
        a.push(cliente);
        console.log(cliente+" ha sido agregado/a con exito");
    }
}

function ocupaMesa(a){
    
}




let lista = [];
let opcion;

do{
    opcion=usoMenu();
    switch(opcion){
        case 1:
            agregarCliente(lista);
            console.log(lista);
            break;

    }
    readlineSync.keyInPause("Pulsa <intro> para continuar");
}while(opcion!=8);