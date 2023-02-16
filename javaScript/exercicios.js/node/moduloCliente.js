/**
 * toda e qulquer classe criada com cliente em seu nome
 * esta classe vai usar outros módulos
 */

 const moduloA = require('./moduleA.js')
 const moduloB = require('./moduleB.js') // Nã há necessidade de usar a extensao .js 

 //console.log(moduloA.ola)
 //console.log(moduloA.bemVindo)
 //console.log(moduloA.ateLogo)
 /**
  * Fala Pessoal
  * Bem vindo ao node
  * Ate o proximo exemplo
  */
 
  console.log(moduloB.bomDia)
  console.log(moduloB.boaNoite())
  console.log(moduloB)
  // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
