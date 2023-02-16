/**
 * palavra usada para
 * referenciar um objeto 
 * em tempo de execuçao
 */

 const pessoa = {
     saudacao: "Bom dia!",
     falar() {
         console.log(this.saudacao);
         /**
          * o uso do this neste caso se refere
          * ao objeto criado em tempo de execução
          * de nome pessoa
          * Acessando o atributo de um objeto via this
         */
     }
 }

 pessoa.falar();
 /**
  * sen usar this o atributo saudacao do
  * objeto  pessoa não vai ser acessado!
  */
 const falar = pessoa.falar;
 falar(); // gera undefined pois this aponta para outr contexto

 const falarDePessoa = pessoa.falar.bind(pessoa);
 /**
 *
 * o bind passa um objeto que vc 
 * deseja ter o this resolvido
 * 
 */
falarDePessoa();

/**
 * This keyword has different values depending on where it is used:

 * In a method, this refers to the owner object.
 * Alone, this refers to the global object.
 * In a function, this refers to the global object.
 * In a function, in strict mode, this is undefined.
 * In an event, this refers to the element that received the event.
 * Methods like call(), and apply() can refer this to any object.
*/
