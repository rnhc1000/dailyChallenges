/**
 * atribuição por valor e atribuição por referência.....
 * remete ao conceito do espaço de memória alocado para
 * reeber um valor de uma variável e como se processa o 
 * acesso a esta posição. Se pelo nome ou por sua posição na 
 * memória alocada para receber este valor
 * Um objeto o acesso é por referencia e ao operar tipos primitivos
 * o acesso é por valor.
 *
 * const a = {}; //cria um objeto
 * const b = a;
 * ao alterar o valro de b altera o a ppois a atribuição
 * é por referência
 * const a = 1;
 * const b = a;
 * a++
 * muda o valor de a mas b permanece com o valor original de a
 *  
 */


 let valor; // não inicializada
 console.log(valor); // undefined

 valor=null;
 console.log(valor); //nulo ou seja não aponta para nada portanto zera seu valor
 

