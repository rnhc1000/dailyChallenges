/**
 * criar mecanismos que permitam o reuso do código
 * Se tiver que escolher entre herança e composição
 * priorizar composição ( padrão de projeto: decorator )
 * herança baseada em protótipos
 */

 const ferrari = {
     modelo: 'f40',
     velmax: 324
 }

 const volvo = {
     modelo: 'V40',
     velMax: 200
 }

 console.log(ferrari.__proto__) 
 /** 
  * 2 underline envolvendo o atributo prototipo
  * resultado: {} representando um objeto
  * 
  */

 console.log(ferrari.__proto__ === Object.prototype)
/**
 * resultado: true
 */
