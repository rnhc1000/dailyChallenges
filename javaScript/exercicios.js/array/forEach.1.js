const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
/**
 * Atenção à ordem para uso adequado do forEach
 * Primeiro o parametro e depois o indice
 */
aprovados.forEach(function(nome, indice) {
    console.log(`${indice +1}, ${nome}`) 
})
/**
 * simplificando por conta da função arroe
 */

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)

/**
 * no uso do forEach sempre a trinca
 * elemento, indice e array
 * O array é sempre passado para a função
 * recursiva ( callback ) 
 */

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice +1}, ${nome}`) 
    console.log(array)
})

/**
 * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
 * 2, Aldo
 * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
 * 3, Daniel
 * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
 * 4, Raquel
 * [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
 */