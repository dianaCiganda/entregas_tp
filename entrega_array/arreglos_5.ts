
/*-Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

let arr: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let mayor: number = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mayor) {
        mayor = arr[i];

    }
}
function esPar(num: number): boolean {
    return num % 2 == 0;

}

console.log(arr);
console.log("el numero: " + mayor + " es par= " + esPar(mayor));
