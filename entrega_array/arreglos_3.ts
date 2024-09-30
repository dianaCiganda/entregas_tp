/*Ejercicio – Completar Arreglo

• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99

• Para obtener números aleatorios crear una función
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/
let array: number[] = new Array(10);


for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 100);
}
console.log(array);
