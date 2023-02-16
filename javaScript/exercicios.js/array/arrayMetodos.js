const pilotos = [ 'Vettel', 'Raikkonnen', 'Hamilton', 'Massa', 'Alonso', 'Schumacher', 'Senna' ]
/**
 * a lista de pilotos no array acima foi atribuída a uma variável constante chamada pilotos
 * Por isso n se pode acrescentar mais pilotos a lista pois a mesma é constante
 */

 pilotos.pop(); // remove o último piloto da lista
 console.log(pilotos)
 // R: [ 'Vettel', 'Raikkonnen', 'Hamilton', 'Massa', 'Alonso', 'Schumacher' ]

 pilotos.push('Verstapen') // Acrescenta ao final da lista
 console.log(pilotos)
 /**
  * [ 'Vettel',  'Raikkonnen',  'Hamilton',  'Massa',  'Alonso',  'Schumacher',  'Verstapen']
  */

  pilotos.shift(); // remove o primeiro item da lista
  console.log(pilotos)
  /**
   * ['Raikkonnen','Hamilton','Massa','Alonso','Schumacher','Verstapen']
   */
pilotos.unshift('Senna'); // Acrescenta um item no inicio da fila
console.log(pilotos)
/**
 * [ 'Senna', 'Raikkonnen', 'Hamilton', 'Massa', 'Alonso', 'Schumacher', 'Verstapen' ]
 */

 //splice pode adicionar ou remover elementos
 pilotos.splice(2, 0, 'Norris', 'Bottas') // A partir do índice 2, n remove ninguem e acrescenta os dados
 console.log(pilotos)
 /**
  * [
  * 'Senna',     'Raikkonnen',
  * 'Norris',    'Bottas',
  * 'Hamilton',  'Massa',
  * 'Alonso',    'Schumacher',
  * 'Verstapen'
  * ]
  */

  // remover usando splice
  pilotos.splice(3,1)
  console.log(pilotos)
  /**
   * Bottas removido
   * [
   * 'Senna',
   * 'Raikkonnen',
   * 'Norris',
   * 'Hamilton',
   * 'Massa',
   * 'Alonso',
   * 'Schumacher',
   * 'Verstapen'
   * ]
   */

   const algunsPilotos = pilotos.slice(2); // descarta os  de indice inferior ao definido no caso 2.....
   console.log(algunsPilotos)
   /**
    * [ 'Norris', 'Hamilton', 'Massa', 'Alonso', 'Schumacher', 'Verstapen' ]
    */
    console.log(pilotos)
    const algunsPilotos1 = pilotos.slice(1,4) // elemntos entre os indices 1 e 4
    /**
     * [ 'Senna', 'Raikkonnen', 'Norris', 'Hamilton', 'Massa', 'Alonso', 'Schumacher', 'Verstapen' ]
     * [ 'Raikkonnen', 'Norris', 'Hamilton' ]
     */

    console.log(algunsPilotos1)
    //algunsPilotos1 = pilotos.slice(3,6)// TypeError: Assignment to constant variable.
    const algunsPilotos2 = pilotos.slice(3,6)
    console.log(algunsPilotos2);
    /**
     * [ 'Senna', 'Raikkonnen', 'Norris', 'Hamilton', 'Massa', 'Alonso', 'Schumacher', 'Verstapen' ]
     *
     * [ 'Hamilton', 'Massa', 'Alonso' ]
     */
    