/*Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
La dimensión del arreglo es ingresada por el usuario
Los elementos (números) del arreglo son ingresados por el usuario*/

import * as rs from "readline-sync";


let suma: number=0
let dimensiones: number = 0;
while (dimensiones<0) {
    dimensiones= rs.questionInt ("Ingrese dimension del arreglo: ");
    
}
let arr: number []= new Array (dimensiones);
for (let i = 0; i< arr.length; i++) {
    arr [i]= rs.questionInt ("Ingrese numeros para el arreglo: ");
    suma= suma + arr [i];

}

console.log(arr);
console.log(suma);