
import * as rs from "readline-sync";
/*Crear arreglo

1) Crear un arreglo de letras e imprimirlo

2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.*/
let arr: string[] = ["a", "s", "e", "p"];
console.log((arr));
let arr_nombres: string[] = new Array(5);
let nombres_arr:string[]=["Juan", "Pedro", "Lucas", "Ana","Pamela"]
let estaEnarray: boolean = false;


for (let i = 0; i < nombres_arr.length; i++) {
    arr_nombres[i]= rs.question("ingrese un nombre: ");
    

    if (nombres_arr[i].toLowerCase()==arr_nombres[i].toLocaleLowerCase()) {
        estaEnarray = true;

    }
}

if (estaEnarray == true) {
    console.log("Su nombre esta en el arreglo");
} else {
    console.log("su nombre no esta en el arreglo");
}
console.log(nombres_arr);

console.log(arr_nombres);