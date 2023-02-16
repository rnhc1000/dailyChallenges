/** O operador destructuring permite extrairi de um objeto ou array seus elementos
 * Objeto: usa chaves;
 * Array: colchetes
 */

 const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
         logradouro: 'Rua ABC',
         numero: 123
     }
     
 }
 /**
  * atencao ao fato do uso de nome reservado const
  * seguido por chaves e não o nome da variável, 
  * caracterizando o uso do operador destructuring
  * 
  */

 const { nome, idade } = pessoa;
 /** 
  * retira os atributos nome e idade 
  * do objeto pessoa
  * 
  */
 console.log(nome, idade);
 const { nome: n, idade: i} = pessoa
 
 console.log(n, i);