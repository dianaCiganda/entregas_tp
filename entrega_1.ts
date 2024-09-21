import * as rs from "readline-sync";
/*¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, 
y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y
 luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta.
  Al final, debes determinar qué torta tiene el mayor puntaje. 
  Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate
   (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate,
solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y 
devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, 
luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje
para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.*/
let concursantes: number = rs.questionInt("ingrese un numero de concursantes: ");
let i: number;
let sabor: number = 0;
let presentacion: number = 0;
let dificultad: number = 0;

let calcularPuntaje = (n1: number, n2: number, n3: number): number => {
   let suma: number = 0;
   if ((n1 >= 1 && n1 <= 5) && (n2 >= 1 && n2 <= 5) && (n3 >= 1 && n3 <= 5)) {

      suma = n1 + n2 + n3;
      return suma;
   } else {
      console.log("puntaje invalido");
      return -1;
   }
}



let determinarGanador = (num1: number, num2: number, num3: number): string => {
   let ganador: string = " ";
   let porcentajeMax: number = 0;
   for (i = 1; i <= concursantes; i++) {
      num1 = rs.questionInt("ingrese puntaje del 1 al 5 por el sabor: " + "torta : " + i + " ");
      num2 = rs.questionInt("ingrese puntaje del 1 al 5 por el presentacion: " + "torta : " + i + " ");
      num3 = rs.questionInt("ingrese puntaje del 1 al 5 por el dificultad: " + "torta : " + i + " ");
      let suma: number = calcularPuntaje(num1, num2, num3);

      if (suma > porcentajeMax) {
         porcentajeMax = suma;
         ganador = "el ganador es el participante N° : " + i;

      }
      else if (suma == porcentajeMax) {
         ganador = "existe empate"

      }
   }
   return ganador;
}

let elganadorEs: string = determinarGanador(sabor, presentacion, dificultad);
console.log(elganadorEs);

