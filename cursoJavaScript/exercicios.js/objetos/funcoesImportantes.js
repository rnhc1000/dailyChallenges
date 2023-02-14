const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)); //[ 'rebeca', 2, 13 ]
console.log(Object.entries(pessoa)); 
/** 
 * Retorna um array de arrays com os pares chave,valor
 *  [ [ 'nome', 'rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
 * /
 */

 Object.entries(pessoa).forEach(e => {
     console.log(`${e[0]}: ${e[1]}`)
 })
 /**
  * nome: rebeca
  * idade: 2
  * peso: 13
  */
 // Outra forma de fazer o acima

 Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
/**
 * nome: rebeca
 * idade: 2
 * peso: 13
 */

 Object.defineProperty(pessoa, 'dataNascimento', {
     /**
      * mesmo sendo uma chave para pasar o 
      * parâmetro usam-se aspas para evitar com
      * que o JS tente interpretar como variável
      */
     enumerable: true, //listável
     writable: false,  //não permite alteração
     value: '01/01/2019'
 })

 pessoa.dataNascimento = '01/01/2017';

 console.log(pessoa.dataNascimento); //Mantecea data original: 01/01/2019


 console.log(Object.keys(pessoa));
 //[ 'nome', 'idade', 'peso', 'dataNascimento' ]

 //Object.assign(ECMAScript 2015)

 const dest  = { a: 1}
 const o1 = { b: 2 }
 const o2 = { c:3, a:4 }
 const obj = Object.assign(dest, o1, o2)
 console.log(obj); //{ a: 4, b: 2, c: 3 }

 /**
  * o primeiro objeto é o de destino e os a seguir
  * na lsita va sendo concatenado no destino,sobrescrevendo 
  * valores se for o caso
  */