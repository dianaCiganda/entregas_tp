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

let concursantes: number = 0;
let sabor: number = 0;
let presentacion: number = 0.;
let dificultad: number = 0;

while (concursantes <= 0) {

   concursantes = rs.questionInt("ingrese un numero de concursantes: ");
}
let calcularPuntaje = (n1: number, n2: number, n3: number): number => {

   return n1 + n2 + n3;

}
function rangoPuntaje(n1: number, n2: number, n3: number, iterador: number): number {
   let suma: number = 0
   while (!(n1 >= 1 && n1 <= 5) || !(n2 >= 1 && n2 <= 5) || !(n3 >= 1 && n3 <= 5)) {
      n1 = rs.questionInt("ingrese puntaje del 1 al 5 por el sabor: ");
      n2 = rs.questionInt("ingrese puntaje del 1 al 5 por el presentacion : ");
      n3 = rs.questionInt("ingrese puntaje del 1 al 5 por el dificultad: ");
      if (!(n1 >= 1 && n1 <= 5) || !(n2 >= 1 && n2 <= 5) || !(n3 >= 1 && n3 <= 5)) {

         console.log("ha ingresado algun valor invalido vuelva a ingresar valores del 1 al 5");
         console.log("Torta : " + iterador);

      }
   }
   suma = calcularPuntaje(n1, n2, n3);
   return suma
}
let determinarGanador = (jugador: number): number | null => {
   let ganador: number | null = 0;
   let porcentajeMax: number = 0;
   let puntajeTotal: number = 0;


   for (let i: number = 1; i <= jugador; i++) {
      console.log("Torta : " + i);

      puntajeTotal = rangoPuntaje(sabor, presentacion, dificultad, i);
      if (puntajeTotal > porcentajeMax) {
         porcentajeMax = puntajeTotal;
         ganador = i;

      }
      else if (puntajeTotal == porcentajeMax) {

         ganador = null;

      }
   }
   return ganador;
}

let elGanadores: number | null = determinarGanador(concursantes);
if (elGanadores != null) {
   console.log("El ganador es la torta número: " + elGanadores);
} else {
   console.log("No hay un ganador, hay empate.");
}
