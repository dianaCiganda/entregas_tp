// //devuelve true si searchTerm se encuentra en fullText
// function isTextInPara(fullText: string, searchTerm: string): boolean {
  //   return fullText.includes(searchTerm);
  // }
  
  const paragraph: string =
    "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";
  const palabraBuscada:string="cosas";
 
//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
  let contador:number = 0;
        //Así busco la primera vez que aparece la palabra buscada en el texto con el método indexOf
        // El método indexOf() devuelve el índice, dentro del objeto String 
        // que realiza la llamada, de la primera ocurrencia del valor especificado,
        //  comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
        let posicion:number= paragraph.indexOf(palabraBuscada);
        while (posicion != -1) { //mientras se encuentre la palabra buscada
            contador++;           //incremento el contador
            //sigo buscando desde la posicion siguiente a la encontrada                                
            posicion = paragraph.indexOf(palabraBuscada, posicion + 1);
        }
        return contador;//retorno cuantas veces se encontró la palabra buscada
}


let cantidadPalabra: number = howManyTextInPara(paragraph, palabraBuscada);
console.log(`la palabra ${palabraBuscada} se encuentra en el texto ${cantidadPalabra} veces`);  

// cuenta = 0;
// posicion = miCadena.indexOf("x"); Puedo guardar x en una constante o pasarla directamente como string
// while (posicion != -1) {
//   cuenta++;
//   posicion = miCadena.indexOf("x", posicion + 1);
// }
//Documentacion en:
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf*/

