/**
 * Introdução aos conceitos de array em JS
 * Em JS o array é um objeto na vdd
 * Os dados s organizados a partir de um índice
 * mas n existe array nativo em JS e os arrays são dinâmicos
 * e a estrutura n precisa ser homogênea mas a melhor prática 
 * é definir os tipos declarados em cada array ou seja
 * array de numeros, array de strings, array de booleans etc....
 */

 console.log(typeof Array, typeof new Array, typeof []);
 // Resposta: function     object            object


 let aprovados = new Array('Bia', 'Carlos', 'Ana')
 console.log(aprovados)
 // Resposta: [ 'Bia', 'Carlos', 'Ana' ]

 /**
  * Notação recomendada para o dia a dia
  */
 aprovados = ['Bia', 'Carlos', 'Ana']
 console.log(aprovados[0]) // Bia
 console.log(aprovados[1]) // Carlos
 console.log(aprovados[2]) // Ana
 console.log(aprovados[3]) // Atenção! o array tem 3 elementos e estamos acessando o quarto - R: undefined

 aprovados[3] = 'Paulo'
 console.log(aprovados[3]) // Paulo
 aprovados.push('Paula') // usar este método para adicionar dados a um array
 console.log(aprovados.length) // 5 elementos

 /**
  * Podemos acrescentar um dado a um array em uma posição não contígua 
  * ao último dado mas as posições entre o dado adicionado recentemente
  * e o dado mais próximo serão ocupados e seu valor será igual a undefined como abaixo
  */

  aprovados[9] = 'Rafael';
  console.log(aprovados.length) // Respotsa: length = 10 mas há apenas 6 elementso
  console.log(aprovados)
  // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Paula', <4 empty items>, 'Rafael' ]
console.log(aprovados[8] === undefined) //true
aprovados.sort(); // o método sort() alterar o array
console.log(aprovados)
//[ 'Ana', 'Bia', 'Carlos', 'Paula', 'Paulo', 'Rafael', <4 empty items> ] Em ordem 
console.log(aprovados[0]) // Ana. O valor anterior era Bia

delete aprovados[1]; // deleta mas n reordena o array e coloca undefined na posição ocupada pelo dado

console.log(aprovados[1]) //R: undefined

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice() //adicionar elementos a um indice ou deletar elementos a partir de um indice
aprovados.splice(1, 1) // A partir do indice 1 que aponta paracarlos remover o elemento 1
console.log(aprovados) //R: [ 'Bia', 'Ana' ]
// acrescentando a partir de carlos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Mathias', 'Matheus')
console.log(aprovados)
// [ 'Bia', 'Mathias', 'Matheus', 'Ana' ]]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Mathias', 'Matheus')
console.log(aprovados)
// [ 'Bia', 'Mathias', 'Matheus', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 'Mathias', 'Matheus')
console.log(aprovados.sort())
//[ 'Ana', 'Bia', 'Carlos', 'Matheus' ]