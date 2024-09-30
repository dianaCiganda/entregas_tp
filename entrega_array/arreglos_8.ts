
/*Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3*/
import * as rs from "readline-sync";
let tamanio: number = 0;
let contadorCeros: number = 0;
let contadorNegativos: number = 0;
let contadorPositivos: number = 0;
while (tamanio < 1) {
    tamanio = rs.questionInt("ingrese tamaño del arreglo: ");
}
let array: number[] = new Array(tamanio);
for (let i = 0; i < array.length; i++) {
    array[i] = rs.questionInt("Ingrese numeros para el arreglo : ");
    if (array[i] > 0) {
        contadorPositivos++;
    } else if (array[i] < 0) {
        contadorNegativos++;
    } else {
        contadorCeros++;
    }

}
console.log(array);
console.log("cantidad de nros negativos: " + contadorNegativos +
    "\n cantidad nros positivos: " + contadorPositivos +
    "\n cantidad de ceros: " + contadorCeros);


