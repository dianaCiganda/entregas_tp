
/*-Estructuras de Datos
Sumar Dos Arreglos
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
import * as rs from "readline-sync";
let array1: number[] = new Array(6);
let array2: number[] = new Array(6);
let arreglo_final: number[] = [];



for (let i = 0; i < array1.length; i++) {
    array1[i] = rs.questionInt("Ingrese numeros para el arreglo 1: ");
    array2[i] = rs.questionInt("Ingrese numeros para el arreglo 2: ");
    arreglo_final[i] = array1[i] + array2[i];
}

console.log(array1);
console.log(array2);
console.log(arreglo_final);