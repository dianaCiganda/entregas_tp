import * as rs from "readline-sync";
/*Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

let tamanio: number =0;
while (tamanio<1) {
    tamanio=rs.questionInt("ingrese tamaño del arreglo: ");
}
    let array: number[] = new Array(tamanio);
    
    for (let i =0; i<array.length; i++) {
        array[i] = rs.questionInt("Ingrese numeros para el arreglo : ");
    }
    
    function imprimir_arr_inverso(arreglo: number[]) {
        for (let i = arreglo.length-1; i >=0; i--) {
            console.log(arreglo[i]);
            
        }
    }
    
    console.log(array);
    imprimir_arr_inverso(array);

